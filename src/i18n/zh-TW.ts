import { Translation } from './types';

export const zhTW: Translation = {
  nav: {
    home: '首頁',
    work: '作品',
    studio: '工作室',
    craft: '技藝',
    track: '履歷',
    contact: '聯絡',
  },
  hero: {
    kicker: '陳格仁 — 多倫多 — 2026',
    chineseName: '陳格仁',
    titleLine1: 'GoBolt首席工程師。',
    titleLine2: '獨立工作室一人作戰。',
    description:
      '八年生產級系統經驗。如今使用Claude Code端到端交付產品。',
    seeWork: '查看作品',
    getInTouch: '聯絡我',
    stats: {
      yearsAtGoBolt: '年 @ GoBolt',
      appsLive: '款應用上線',
      nativeDev: 'AI原生開發',
    },
  },
  work: {
    kicker: '已上線，未擱置',
    titleLine1: '三款應用。全部上線。',
    titleLine2: '全部獨立完成。',
    live: '在線',
    builtWith: '使用 CLAUDE CODE 建構',
    moreAt: '更多作品：',
    snapsell: {
      tagline: '一拍即售',
      description:
        'AI將一張照片轉換為精美的市場上架資訊 — 為Facebook Marketplace、eBay、Etsy和Amazon量身打造，只需幾秒。',
    },
    petcrew: {
      tagline: '寵物照護，家人共享',
      description:
        '智慧寵物照護夥伴，用於追蹤餵食時間、記錄照護情況，並與家人共同分擔責任。',
    },
    candlepost: {
      tagline: '從此不再錯過任何一個生日',
      description:
        'AI 根據你寫下的小筆記，為每位親友量身擬好生日訊息，再從你自己的 Gmail 寄出 — 每一封都溫暖、準時，無疑是出自你之手。',
    },
  },
  studio: {
    kicker: '幕後操盤手',
    pullQuote: '我先造出產品，再造出能造產品的工具。',
    bio: '常駐多倫多的全端工程師。主業：在GoBolt領導架構與前端系統。副業：Bryan Studio，一家獨立工作室，交付iOS和Web應用。我寫TypeScript，用Claude Code發布產品，比大多數人更在意那些「無聊」的部分 — 錯誤處理、可觀測性、清晰的API。',
    facts: {
      basedLabel: '所在地',
      basedValue: '加拿大多倫多',
      dayJobLabel: '主業',
      dayJobValue: 'GoBolt首席軟體工程師 (2017—)',
      studioLabel: '工作室',
      studioValue: 'Bryan Studio — 獨立工作室',
      educationLabel: '學歷',
      educationValue: '多倫多大學電腦工程學士',
      offKeysLabel: '鍵盤外',
      offKeysValue: '貓咪、羽毛球、滑雪',
    },
  },
  craft: {
    kicker: '我如何工作',
    aiTitle: 'AI原生開發。',
    aiIntro:
      'Claude Code是我的日常工具 — 從規格到上線。不是自動補全，是並肩作戰的隊友。',
    ai: {
      claudeCode: '日常工具。規格 → 規劃 → 實作 → 上線。',
      subagents: '並行專家分工；在opus/sonnet/haiku之間多模型路由。',
      agentTeams: '編排的pr-review團隊：主控 + 審查員 + 自動審批。',
      skills: '程式碼化的工作流 — linear → worktree → PR 一鍵完成。',
      mcp: 'linear、datadog、生產資料庫（唯讀）。',
      slashCommands: '13+ 個領域特定指令：k8s、發布、問題分類。',
      anthropicSdk: '工具呼叫、提示快取、串流回應。',
    },
    categories: {
      frontend: '前端',
      backend: '後端 & 行動',
      infra: '工具 & 基礎建設',
    },
  },
  track: {
    kicker: '十年履歷',
  },
  experience: {
    positions: {
      leadEngineer: {
        title: '首席軟體工程師',
        responsibilities: [
          '主導前端和後端系統的架構設計。',
          '現代化遺留技術棧；指導團隊推行可擴展的模式。',
          '推動技術決策與架構改進。',
        ],
      },
      leadFrontend: {
        title: '首席前端工程師',
        responsibilities: [
          '引入TypeScript、React Hooks、Styled-Components、React-Query、RecoilJS。',
          '使用Google Maps API建構綜合車輛路由系統。',
          '透過架構重構將前端樣板程式碼減少60%。',
        ],
      },
      fullStackLead: {
        title: '全端工程師 / 團隊負責人',
        responsibilities: [
          '設計並部署基於NestJS的倉庫庫存管理系統。',
          '整合AWS雲端基礎建設以支援可擴展性。',
          '領導跨職能團隊進行技術實作。',
        ],
      },
      frontendDev: {
        title: '前端開發工程師',
        responsibilities: [
          '引入Redux和SASS，改善狀態管理與樣式。',
          '開發公司首款React Native行動應用。',
          '從零開始建構主要業務網站。',
        ],
      },
      intern: {
        title: '前端開發實習生',
        responsibilities: [
          '現代化UI元件以提升使用者體驗。',
          '將Stripe支付處理整合到React前端。',
        ],
      },
    },
  },
  contact: {
    title: '聊聊吧。',
    description:
      '歡迎諮詢顧問、獨立開發合作以及有意思的問題。暫不考慮全職。',
    status: '目前狀態：接受顧問與獨立開發合作 · 不尋全職',
  },
  footer: {
    builtWith: '使用 claude code 建構',
    backToTop: '回到頂部',
  },
};
