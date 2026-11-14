/* Chinese Official (MCR / 国标) hand scorer.
 * Tiles are 0..33: 0-8 man 1-9, 9-17 pin 1-9, 18-26 sou 1-9,
 * 27-30 winds E S W N, 31-33 dragons 中 發 白.
 * Melds are {kind:'chi'|'pon'|'kan', t, open}; for a chi t is the lowest tile.
 * `counts` holds the concealed tiles only. A kong is four tiles, one set.
 */
(function (root) {
  const NAMES = [
    '一万', '二万', '三万', '四万', '五万', '六万', '七万', '八万', '九万',
    '一筒', '二筒', '三筒', '四筒', '五筒', '六筒', '七筒', '八筒', '九筒',
    '一条', '二条', '三条', '四条', '五条', '六条', '七条', '八条', '九条',
    '东风', '南风', '西风', '北风', '红中', '发财', '白板',
  ];
  const WINDS = [27, 28, 29, 30];
  const DRAGONS = [31, 32, 33];
  const PATTERNS = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];

  const suit = (t) => (t < 9 ? 0 : t < 18 ? 1 : t < 27 ? 2 : 3);
  const rank = (t) => (t < 27 ? (t % 9) + 1 : 0);
  const honor = (t) => t >= 27;
  const terminal = (t) => t < 27 && (rank(t) === 1 || rank(t) === 9);
  const terminalOrHonor = (t) => honor(t) || terminal(t);

  function tilesOf(set) {
    if (set.kind === 'chi' || set.type === 'chi') return [set.t, set.t + 1, set.t + 2];
    const out = [set.t, set.t, set.t];
    if (set.kind === 'kan' || set.type === 'kan') out.push(set.t);
    return out;
  }
  const isChi = (s) => s.type === 'chi' || s.kind === 'chi';
  const isKan = (s) => s.type === 'kan' || s.kind === 'kan';

  function expand(counts) {
    const out = [];
    for (let t = 0; t < 34; t++) for (let i = 0; i < counts[t]; i++) out.push(t);
    return out;
  }

  function allDecomps(counts, needSets, needPair) {
    const out = [];
    const c = counts.slice();
    const sets = [];
    function rec(start, pair) {
      let i = start;
      while (i < 34 && c[i] === 0) i++;
      if (i === 34) {
        if (sets.length === needSets && (pair !== null || !needPair)) {
          out.push({ sets: sets.map((s) => ({ ...s })), pair });
        }
        return;
      }
      if (needPair && pair === null && c[i] >= 2) {
        c[i] -= 2;
        rec(i, i);
        c[i] += 2;
      }
      if (sets.length < needSets) {
        if (c[i] >= 3) {
          c[i] -= 3;
          sets.push({ type: 'pon', t: i });
          rec(i, pair);
          sets.pop();
          c[i] += 3;
        }
        if (i < 27 && rank(i) <= 7 && c[i + 1] > 0 && c[i + 2] > 0) {
          c[i]--; c[i + 1]--; c[i + 2]--;
          sets.push({ type: 'chi', t: i });
          rec(i, pair);
          sets.pop();
          c[i]++; c[i + 1]++; c[i + 2]++;
        }
      }
    }
    rec(0, null);
    return out;
  }

  function isSevenPairs(counts) {
    let pairs = 0;
    for (let t = 0; t < 34; t++) {
      if (counts[t] === 0) continue;
      if (counts[t] % 2 !== 0) return false;
      pairs += counts[t] / 2;
    }
    return pairs === 7;
  }

  function isThirteenOrphans(counts) {
    const wanted = [0, 8, 9, 17, 18, 26, 27, 28, 29, 30, 31, 32, 33];
    for (let t = 0; t < 34; t++) if (!wanted.includes(t) && counts[t] > 0) return false;
    let extra = 0;
    for (const t of wanted) {
      if (counts[t] === 0) return false;
      extra += counts[t] - 1;
    }
    return extra === 1;
  }

  function isNoSets(counts) {
    let n = 0;
    for (let t = 0; t < 34; t++) {
      if (counts[t] > 1) return false;
      if (counts[t] === 1) n++;
    }
    if (n !== 14) return false;
    for (let s = 0; s < 3; s++) {
      const present = [];
      for (let r = 1; r <= 9; r++) if (counts[s * 9 + r - 1] === 1) present.push(r);
      if (!present.length) continue;
      if (!PATTERNS.some((p) => present.every((r) => p.includes(r)))) return false;
    }
    return true;
  }

  const EXCLUDE = {
    大四喜: ['三风刻', '圈风刻', '门风刻', '碰碰和', '幺九刻', '双箭刻'],
    大三元: ['双箭刻', '箭刻', '幺九刻', '三暗刻', '双暗刻'],
    小四喜: ['三风刻', '圈风刻', '门风刻', '幺九刻'],
    小三元: ['双箭刻', '箭刻', '幺九刻', '双暗刻'],
    字一色: ['混一色', '缺一门', '无字', '幺九刻', '全带幺', '五门齐', '推不倒'],
    清幺九: ['混幺九', '碰碰和', '断幺', '缺一门', '无字', '全带幺', '幺九刻', '全双刻', '无番和', '双同刻'],
    混幺九: ['碰碰和', '全带幺', '幺九刻', '全双刻'],
    全双刻: ['断幺', '无字'],
    清一色: ['缺一门', '无字'],
    混一色: ['缺一门'],
    七对: ['门前清', '单钓将', '平和'],
    碰碰和: ['平和'],
    全求人: ['单钓将'],
    平和: ['无字'],
    四杠: ['三杠', '双暗杠', '双明杠', '暗杠', '明杠', '碰碰和'],
    四暗刻: ['碰碰和', '门前清', '三暗刻', '双暗刻', '幺九刻', '不求人', '自摸'],
    三杠: ['双暗杠', '双明杠', '暗杠', '明杠'],
    双暗杠: ['暗杠'],
    双明杠: ['明杠'],
    双箭刻: ['箭刻'],
    一色四同顺: ['一色三同顺', '一般高'],
    一色四节高: ['一色三节高', '碰碰和', '双同刻'],
    一色四步高: ['一色三步高'],
    一色三同顺: ['一般高'],
    一色三节高: ['一色三同顺'],
    三色三同顺: ['喜相逢'],
    三色三节高: ['双同刻'],
    全不靠: ['五门齐', '门前清', '无字', '缺一门', '平和'],
    七星不靠: ['全不靠', '五门齐', '门前清', '无字'],
    十三幺: ['门前清', '单钓将', '混幺九', '幺九刻', '全带幺', '无字', '缺一门', '五门齐', '推不倒', '不求人', '四暗刻'],
    九莲宝灯: ['清一色', '门前清', '缺一门', '无字', '幺九刻', '双暗刻', '三暗刻', '四暗刻', '碰碰和', '不求人'],
    连七对: ['七对', '清一色', '门前清', '单钓将', '缺一门', '无字'],
    一色双龙会: ['清一色', '平和', '老少副', '一般高', '缺一门', '无字'],
    三色双龙会: ['平和', '老少副', '喜相逢', '无字'],
    全大: ['无字', '断幺'],
    全中: ['无字', '断幺'],
    全小: ['无字', '断幺'],
    大于五: ['无字', '断幺'],
    小于五: ['无字', '断幺'],
    妙手回春: ['自摸'],
    不求人: ['自摸', '门前清'],
    全带五: ['断幺', '无字'],
    清龙: ['连六', '老少副'],
    花龙: ['连六', '老少副'],
    推不倒: ['缺一门'],
    组合龙: ['五门齐', '无字', '缺一门'],
  };

  const REPEATABLE = ['箭刻', '幺九刻', '暗杠', '明杠'];

  function applyExclusions(fans) {
    const names = new Set(fans.map((f) => f.name));
    const drop = new Set();
    for (const f of fans) if (EXCLUDE[f.name]) for (const e of EXCLUDE[f.name]) if (names.has(e)) drop.add(e);
    const seen = new Set();
    return fans.filter((f) => {
      if (drop.has(f.name)) return false;
      if (!REPEATABLE.includes(f.name)) {
        if (seen.has(f.name)) return false;
        seen.add(f.name);
      }
      return true;
    });
  }

  function computeForCtx(ctx) {
    const { sets, pair, flags, counts, melds } = ctx;
    const fans = [];
    const add = (name, fan) => fans.push({ name, fan });

    const meldTiles = melds.flatMap(tilesOf);
    const allTiles = expand(counts).concat(meldTiles);
    const everySet = [...sets, ...melds];

    const pons = everySet.filter((s) => !isChi(s));
    const chis = everySet.filter(isChi);
    const kans = everySet.filter(isKan);
    const hiddenPons = pons.filter((s) => !s.open);
    const open = melds.some((m) => m.open !== false);
    const suitsUsed = new Set(allTiles.filter((t) => t < 27).map(suit));
    const honours = allTiles.filter(honor);
    const ranks = allTiles.filter((t) => t < 27).map(rank);
    const numbers = allTiles.filter((t) => t < 27);
    const winTile = flags.winTile;
    const isStd = ctx.shape === 'std';

    const windPons = WINDS.filter((w) => pons.some((s) => s.t === w));
    const dragonPons = DRAGONS.filter((d) => pons.some((s) => s.t === d));

    // ---- 88 ----
    if (windPons.length === 4) add('大四喜', 88);
    if (dragonPons.length === 3) add('大三元', 88);
    if (kans.length === 4) add('四杠', 88);
    if (ctx.shape === 'orphans') add('十三幺', 88);
    if (ctx.shape === 'pairs' && isConsecutivePairs(counts)) add('连七对', 88);
    if (isNineGates(ctx)) add('九莲宝灯', 88);

    // ---- 64 ----
    if (isStd && numbers.length && numbers.every(terminal) && everySet.every((s) => !isChi(s) && terminal(s.t))) add('清幺九', 64);
    if (windPons.length === 3 && WINDS.includes(pair)) add('小四喜', 64);
    if (dragonPons.length === 2 && DRAGONS.includes(pair)) add('小三元', 64);
    if (allTiles.every(honor)) add('字一色', 64);
    if (hiddenPons.length === 4 && !open) add('四暗刻', 64);
    if (isOneSuitDoubleDragon(ctx)) add('一色双龙会', 64);

    // ---- 48 ----
    if (identicalChis(chis) === 4) add('一色四同顺', 48);
    if (consecutivePons(pons, 4)) add('一色四节高', 48);

    // ---- 32 ----
    if (steppingChis(chis, 4)) add('一色四步高', 32);
    if (kans.length === 3) add('三杠', 32);
    if (isStd && everySet.every((s) => !isChi(s) && terminalOrHonor(s.t)) && honours.length && numbers.length) {
      add('混幺九', 32);
    }

    // ---- 24 ----
    if (ctx.shape === 'pairs') add('七对', 24);
    if (ctx.shape === 'nosets' && honours.length === 7) add('七星不靠', 24);
    if (numbers.length && numbers.every((t) => rank(t) % 2 === 0) && !honours.length && pons.length === everySet.length) {
      add('全双刻', 24);
    }
    if (suitsUsed.size === 1 && !honours.length) add('清一色', 24);
    if (identicalChis(chis) === 3) add('一色三同顺', 24);
    if (consecutivePons(pons, 3)) add('一色三节高', 24);
    if (numbers.length && !honours.length && ranks.every((r) => r >= 7)) add('全大', 24);
    if (numbers.length && !honours.length && ranks.every((r) => r >= 4 && r <= 6)) add('全中', 24);
    if (numbers.length && !honours.length && ranks.every((r) => r <= 3)) add('全小', 24);

    // ---- 16 ----
    if (has123and789SameSuit(ctx)) add('清龙', 16);
    if (isThreeSuitDoubleDragon(ctx)) add('三色双龙会', 16);
    if (steppingChis(chis, 3)) add('一色三步高', 16);
    if (isStd && pair !== null && allSetHasFive(everySet, pair)) add('全带五', 16);
    if (sameRankPons(pons) === 3) add('三同刻', 16);
    if (hiddenPons.length === 3) add('三暗刻', 16);

    // ---- 12 ----
    if (ctx.shape === 'nosets' && honours.length < 7) add('全不靠', 12);
    if (isStd && hasCombinationDragon(allTiles)) add('组合龙', 12);
    if (numbers.length && !honours.length && ranks.every((r) => r >= 6)) add('大于五', 12);
    if (numbers.length && !honours.length && ranks.every((r) => r <= 4)) add('小于五', 12);
    if (windPons.length === 3) add('三风刻', 12);

    // ---- 8 ----
    if (hasMixedDragon(chis)) add('花龙', 8);
    if (isPushDown(allTiles)) add('推不倒', 8);
    if (sameChiThreeSuits(chis)) add('三色三同顺', 8);
    if (threeSuitSteppingPons(pons)) add('三色三节高', 8);
    if (flags.lastOfWall && flags.selfDraw) add('妙手回春', 8);
    if (flags.lastDiscard) add('海底捞月', 8);
    if (flags.afterKong) add('杠上开花', 8);

    // ---- 6 ----
    if (isStd && everySet.length === 4 && pons.length === 4) add('碰碰和', 6);
    if (suitsUsed.size === 1 && honours.length) add('混一色', 6);
    if (threeSuitSteppingChis(chis)) add('三色三步高', 6);
    if (hasFiveGates(allTiles, chis, pons)) add('五门齐', 6);
    if (open && flags.discardWin && melds.length === 4 && pair === winTile) add('全求人', 6);
    if (kans.filter((k) => k.open === false).length === 2) add('双暗杠', 6);
    if (dragonPons.length === 2) add('双箭刻', 6);

    // ---- 4 ----
    if (isStd && pair !== null && allSetHasTerminal(everySet, pair)) add('全带幺', 4);
    if (!open && flags.selfDraw) add('不求人', 4);
    if (kans.filter((k) => k.open !== false).length === 2) add('双明杠', 4);
    if (flags.lastCopy && flags.discardWin) add('和绝张', 4);

    // ---- 2 ----
    for (const d of dragonPons) add('箭刻', 2);
    if (windPons.includes(flags.roundWind)) add('圈风刻', 2);
    if (windPons.includes(flags.seatWind)) add('门风刻', 2);
    if (!open && flags.discardWin) add('门前清', 2);
    if (isStd && chis.length === 4 && pair !== null && !honor(pair)) add('平和', 2);
    if (hasFourReturned(counts, melds, everySet)) add('四归一', 2);
    if (sameRankPons(pons) >= 2) add('双同刻', 2);
    if (hiddenPons.length === 2) add('双暗刻', 2);
    if (kans.filter((k) => k.open === false).length === 1) add('暗杠', 2);
    if (allTiles.length && !allTiles.some(terminalOrHonor)) add('断幺', 2);

    // ---- 1 ----
    if (identicalChis(chis) >= 2) add('一般高', 1);
    if (sameChiTwoSuits(chis)) add('喜相逢', 1);
    if (connectedSix(chis)) add('连六', 1);
    if (oldYoung(chis)) add('老少副', 1);
    if (pons.some((p) => terminalOrHonor(p.t))) add('幺九刻', 1);
    if (kans.some((k) => k.open !== false)) add('明杠', 1);
    if (suitsUsed.size === 2) add('缺一门', 1);
    if (!honours.length && ctx.shape !== 'nosets' && ctx.shape !== 'orphans') add('无字', 1);
    if (isEdgeWait(ctx)) add('边张', 1);
    if (isClosedWait(ctx)) add('坎张', 1);
    if (pair !== null && pair === winTile) add('单钓将', 1);
    if (flags.selfDraw) add('自摸', 1);

    let scored = applyExclusions(fans);
    if (!scored.length) scored = [{ name: '无番和', fan: 8 }];
    return scored;
  }

  // ---------- helpers ----------
  function isConsecutivePairs(counts) {
    let start = -1;
    for (let t = 0; t < 34; t++) {
      if (counts[t] === 2) { if (start === -1) start = t; }
      else if (counts[t] !== 0) return false;
    }
    if (start < 0 || start + 6 > 33) return false;
    if (suit(start) !== suit(start + 6)) return false;
    for (let t = start; t < start + 7; t++) if (counts[t] !== 2) return false;
    return true;
  }

  function isNineGates(ctx) {
    if (ctx.melds.length) return false;
    const tiles = expand(ctx.counts);
    const suits = new Set(tiles.map(suit));
    if (suits.size !== 1 || suits.has(3)) return false;
    const s = suit(tiles[0]) * 9;
    const base = [3, 1, 1, 1, 1, 1, 1, 1, 3];
    let extra = 0;
    for (let r = 0; r < 9; r++) {
      const c = ctx.counts[s + r];
      if (c < base[r]) return false;
      extra += c - base[r];
    }
    return extra === 1;
  }

  function isOneSuitDoubleDragon(ctx) {
    const { sets, pair } = ctx;
    if (pair === null || honor(pair) || rank(pair) !== 5) return false;
    const s = suit(pair);
    const chis = sets.filter((x) => x.type === 'chi' && suit(x.t) === s);
    return chis.length === 4
      && chis.filter((x) => rank(x.t) === 1).length === 2
      && chis.filter((x) => rank(x.t) === 7).length === 2;
  }

  function identicalChis(chis) {
    const m = new Map();
    let best = 0;
    for (const c of chis) m.set(c.t, (m.get(c.t) || 0) + 1);
    for (const v of m.values()) best = Math.max(best, v);
    return best;
  }

  function consecutivePons(pons, n) {
    const bySuit = [[], [], []];
    for (const p of pons) if (p.t < 27) bySuit[suit(p.t)].push(rank(p.t));
    return bySuit.some((rs) => {
      const u = [...new Set(rs)].sort((a, b) => a - b);
      for (let i = 0; i + n <= u.length; i++) {
        let ok = true;
        for (let k = 1; k < n; k++) if (u[i + k] !== u[i] + k) ok = false;
        if (ok) return true;
      }
      return false;
    });
  }

  function steppingChis(chis, n) {
    const bySuit = [[], [], []];
    for (const c of chis) bySuit[suit(c.t)].push(rank(c.t));
    return bySuit.some((rs) => {
      const u = [...new Set(rs)].sort((a, b) => a - b);
      for (const step of [1, 2]) {
        for (let i = 0; i + n <= u.length; i++) {
          let ok = true;
          for (let k = 1; k < n; k++) if (u[i + k] !== u[i] + k * step) ok = false;
          if (ok) return true;
        }
      }
      return false;
    });
  }

  function has123and789SameSuit(ctx) {
    const chis = ctx.sets.filter((s) => s.type === 'chi');
    return [0, 1, 2].some((s) => chis.some((c) => suit(c.t) === s && rank(c.t) === 1)
      && chis.some((c) => suit(c.t) === s && rank(c.t) === 4)
      && chis.some((c) => suit(c.t) === s && rank(c.t) === 7));
  }

  function hasMixedDragon(chis) {
    const starts = [1, 4, 7];
    for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 3; c++) {
      if (new Set([a, b, c]).size !== 3) continue;
      const used = new Set();
      let ok = true;
      for (const [s, r] of [[a, 1], [b, 4], [c, 7]]) {
        const idx = chis.findIndex((x, i) => !used.has(i) && suit(x.t) === s && rank(x.t) === r);
        if (idx < 0) { ok = false; break; }
        used.add(idx);
      }
      if (ok) return true;
    }
    return false;
  }

  function isPushDown(tiles) {
    const pin = [1, 2, 3, 4, 5, 8, 9];
    const sou = [2, 4, 5, 6, 8, 9];
    return tiles.length > 0 && tiles.every((t) => {
      if (t === 33) return true;
      if (t >= 9 && t < 18) return pin.includes(rank(t));
      if (t >= 18 && t < 27) return sou.includes(rank(t));
      return false;
    });
  }

  function sameChiThreeSuits(chis) {
    for (const r of [1, 2, 3, 4, 5, 6, 7]) {
      if ([0, 1, 2].every((k) => chis.some((c) => suit(c.t) === k && rank(c.t) === r))) return true;
    }
    return false;
  }

  function sameChiTwoSuits(chis) {
    for (const r of [1, 2, 3, 4, 5, 6, 7]) {
      let n = 0;
      for (let k = 0; k < 3; k++) if (chis.some((c) => suit(c.t) === k && rank(c.t) === r)) n++;
      if (n >= 2) return true;
    }
    return false;
  }

  function threeSuitSteppingPons(pons) {
    for (const p of pons) {
      if (p.t >= 27) continue;
      const r = rank(p.t), s = suit(p.t);
      if (r > 7) continue;
      for (const order of [[0, 1, 2], [2, 1, 0]]) {
        const others = order.filter((x) => x !== s);
        if (others.length !== 2) continue;
        const ok = others.every((ns, k) => {
          const needRank = order[k] === s ? r : r + (order[k] > s ? 1 : -1);
          return pons.some((q) => suit(q.t) === ns && rank(q.t) === needRank);
        });
        if (ok) return true;
      }
    }
    return false;
  }

  function threeSuitSteppingChis(chis) {
    for (const c of chis) {
      const r = rank(c.t), s = suit(c.t);
      if (r > 5) continue;
      for (const step of [1, 2]) {
        for (const order of [[0, 1, 2], [2, 1, 0]]) {
          const others = order.filter((x) => x !== s);
          const ok = others.every((ns) => {
            const idx = order.indexOf(ns);
            const needRank = r + idx * step;
            return chis.some((x) => suit(x.t) === ns && rank(x.t) === needRank);
          });
          if (ok) return true;
        }
      }
    }
    return false;
  }

  function hasFiveGates(allTiles) {
    const types = new Set();
    for (const t of allTiles) {
      if (t < 27) types.add(suit(t));
      else types.add(WINDS.includes(t) ? 3 : 4);
    }
    return [0, 1, 2, 3, 4].every((x) => types.has(x));
  }

  function allSetHasFive(sets, pair) {
    if (honor(pair) || rank(pair) !== 5) return false;
    return sets.every((s) => tilesOf(s).some((t) => t < 27 && rank(t) === 5));
  }

  function allSetHasTerminal(sets, pair) {
    if (!terminalOrHonor(pair)) return false;
    return sets.every((s) => tilesOf(s).some(terminalOrHonor));
  }

  function hasFourReturned(counts, melds, everySet) {
    const c = counts.slice();
    for (const m of melds) for (const t of tilesOf(m)) c[t] = (c[t] || 0) + 1;
    for (let t = 0; t < 34; t++) {
      if (c[t] === 4 && !everySet.some((s) => !isChi(s) && s.t === t)) return true;
    }
    return false;
  }

  function sameRankPons(pons) {
    let best = 0;
    const byRank = new Map();
    for (const p of pons) {
      if (p.t >= 27) continue;
      const r = rank(p.t);
      if (!byRank.has(r)) byRank.set(r, new Set());
      byRank.get(r).add(suit(p.t));
    }
    for (const s of byRank.values()) best = Math.max(best, s.size);
    return best;
  }

  function connectedSix(chis) {
    for (const c of chis) {
      const r = rank(c.t), s = suit(c.t);
      if ((r === 1 || r === 4) && chis.some((x) => suit(x.t) === s && rank(x.t) === r + 3)) return true;
    }
    return false;
  }

  function oldYoung(chis) {
    return chis.some((c) => rank(c.t) === 1 && chis.some((x) => suit(x.t) === suit(c.t) && rank(x.t) === 7));
  }

  function isEdgeWait(ctx) {
    const t = ctx.flags.winTile;
    if (t === null || t === undefined || honor(t)) return false;
    const r = rank(t);
    const chis = ctx.sets.filter((s) => s.type === 'chi');
    if (r === 3) return chis.some((s) => s.t === t - 2);
    if (r === 7) return chis.some((s) => s.t === t);
    return false;
  }

  function isClosedWait(ctx) {
    const t = ctx.flags.winTile;
    if (t === null || t === undefined || honor(t)) return false;
    return ctx.sets.some((s) => s.type === 'chi' && s.t === t - 1);
  }

  function hasCombinationDragon(allTiles) {
    const present = (s, p) => p.every((r) => allTiles.some((t) => suit(t) === s && rank(t) === r));
    const perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
    return perms.some(([a, b, c]) =>
      PATTERNS.some((p1, i) => PATTERNS.some((p2, j) => i !== j &&
        PATTERNS.some((p3, k) => k !== i && k !== j &&
          present(a, p1) && present(b, p2) && present(c, p3)))));
  }

  function isThreeSuitDoubleDragon(ctx) {
    if (ctx.pair === null || honor(ctx.pair) || rank(ctx.pair) !== 5) return false;
    const chis = ctx.sets.filter((s) => s.type === 'chi');
    const both = [0, 1, 2].filter((s) =>
      chis.some((c) => suit(c.t) === s && rank(c.t) === 1) &&
      chis.some((c) => suit(c.t) === s && rank(c.t) === 7));
    return both.length === 2 && !both.includes(suit(ctx.pair));
  }

  function score(input) {
    const counts = input.counts.slice();
    const melds = (input.melds || []).map((m) => ({ kind: m.kind, type: m.kind, t: m.t, open: m.open !== false }));
    const flags = {
      selfDraw: !!input.selfDraw,
      discardWin: !input.selfDraw,
      afterKong: !!input.afterKong,
      lastOfWall: !!input.lastOfWall,
      lastDiscard: !!input.lastDiscard,
      robbingKong: !!input.robbingKong,
      winTile: input.winTile ?? null,
      lastCopy: !!input.lastCopy,
      seatWind: input.seatWind ?? 27,
      roundWind: input.roundWind ?? 27,
    };
    const needSets = 4 - melds.length;
    const shapes = [];
    for (const d of allDecomps(counts, needSets, true)) shapes.push({ shape: 'std', sets: d.sets, pair: d.pair });
    if (melds.length === 0 && isSevenPairs(counts)) shapes.push({ shape: 'pairs', sets: [], pair: null });
    if (melds.length === 0 && isThirteenOrphans(counts)) shapes.push({ shape: 'orphans', sets: [], pair: null });
    if (melds.length === 0 && isNoSets(counts)) shapes.push({ shape: 'nosets', sets: [], pair: null });

    let best = null, bestTotal = -1;
    for (const sh of shapes) {
      const ctx = {
        counts, melds, sets: sh.sets, pair: sh.pair, shape: sh.shape, flags,
      };
      const f = computeForCtx(ctx);
      const t = f.reduce((a, x) => a + x.fan, 0);
      if (t > bestTotal) { best = f; bestTotal = t; }
    }
    if (!best) return { fans: [], total: 0, valid: false, reason: '不是和牌的牌型' };

    const fans = best.slice();
    const flowers = input.flowersEnabled ? (input.flowers || 0) : 0;
    if (flowers > 0) fans.push({ name: '花牌', fan: flowers });
    const total = fans.reduce((a, f) => a + f.fan, 0);
    return { fans, total, valid: total >= 8, reason: total >= 8 ? '' : '不足 8 番，不能和' };
  }

  const api = { score, NAMES, suit, rank, honor, terminal, terminalOrHonor, tilesOf, expand };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MJ = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
