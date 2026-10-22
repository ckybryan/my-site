import { Translation } from './types';

export const zhTW: Translation = {
  nav: {
    home: '首頁',
    about: '關於',
    studio: '工作室',
    craft: '技藝',
    track: '履歷',
    roadmap: '時間軸',
    contact: '聯絡',
  },
  hero: {
    kicker: '陳格仁 — 多倫多 — {year}',
    chineseName: '陳格仁',
    titleLine1: 'GoBolt首席工程師。',
    titleLine2: '生產環境的 agentic AI，不做示範。',
    description:
      '{years} 年生產級系統經驗。如今使用 Claude Code 端到端交付產品。',
    seeWork: '查看作品',
    getInTouch: '聯絡我',
    stats: {
      yearsAtGoBolt: '年 @ GoBolt',
      appsLive: '款應用上線',
      nativeDev: 'AI原生開發',
    },
  },
  work: {
    kicker: '側面佐證',
    titleLine1: '持續交付，',
    titleLine2: '從頭到尾。',
    blurb:
      '獨立打造的 iOS 與 Web 應用 — 讓實戰肌肉持續上線。完整作品集都在工作室。',
    cta: 'www.bryanstudio.dev',
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
  roadmap: {
    kicker: '按日期排的里程碑',
    titleLine1: '已經交付，',
    titleLine2: '按順序。',
    intro: '履歷背後的發佈與晉升，最新的排在最前。每一條日期都來自真實發生的工作。',
    items: [
      {
        date: '2026.10.22',
        title: '為 AI agents 打造的端到端測試引擎',
        detail:
          '一條 CLI 在已完成資料初始化的本機環境啟動倉庫、商戶與手持端應用，由 agents 撰寫並執行測試，每次發佈都帶著不會破壞生產環境的證據。',
      },
      {
        date: '2026.09.30',
        title: '首個全自動 agentic 交付流程',
        detail: '產品經理把功能從需求一路推進到上線，中間的工程步驟由 agents 完成。',
      },
      {
        date: '2026.09.30',
        title: 'MCP 伺服器擴展至商戶域',
        detail:
          '唯讀工具開放倉庫與商戶域的即時資料，OAuth 登入，按使用者範圍控管，支援在 Claude Desktop 與 Claude Code 中自助安裝。',
      },
      {
        date: '2026.09.17',
        title: '首個倉庫 MCP 伺服器',
        detail: '第一批唯讀 MCP 工具，直接查詢倉庫即時資料，自助開放給工程團隊。',
      },
      {
        date: '2026.09',
        title: '晉升首席 AI 平台工程師',
        detail:
          '接手公司 AI 平台：生產環境 agents、MCP 伺服器、首個 LLM 功能，以及工程團隊賦能。',
      },
      {
        date: '2021.10',
        title: '首席軟體工程師',
        detail: '五年主導企業級倉庫管理平台：NestJS 後端，以及其上的 React 前端。',
      },
      {
        date: '2018.12',
        title: '前端負責人',
        detail: '主導倉庫管理前端：掃描優先、適配行動端，為倉庫現場而建。',
      },
      {
        date: '2017.11',
        title: '加入 GoBolt，前端實習生',
        detail: '從倉庫產品的實習開始，一路做到上面的平台工作。',
      },
    ],
  },
  experience: {
    positions: {
      leadAiPlatform: {
        title: '首席 AI 平台工程師',
        responsibilities: [
          '打造團隊的端到端測試引擎：AI agents 可在已完成資料初始化的本機環境撰寫並執行測試，讓每次發佈都帶有不會破壞生產環境的證據。',
          '推出首個 WMS MCP 伺服器，並擴展至商戶域：一組唯讀工具，開放即時倉庫與商戶域資料查詢，並具備 OAuth 登入與按使用者的範圍控管。',
          '推出首個全自動 agentic 交付流程，產品經理可將功能從需求一路推進到上線。',
          '建立並營運多個生產環境 AI agents（基於共用內部工具）— 涵蓋 PR 審查與批准、文件維護、發佈自動化。',
          '推出公司首個 LLM 功能，並建立可重用的多供應商 LLM 整合層。',
          '將 agentic AI 融入核心交付流程 — AI 驅動的測試、發佈及程式碼審查。',
          '培訓工程團隊 AI 輔助開發：講解 GoBolt 的 AI 開發流程，並帶領工程師上手 Claude Code。',
        ],
      },
      leadEngineer: {
        title: '首席軟體工程師',
        responsibilities: [
          '設計並維護 NestJS/PostgreSQL 後端（136+ 模組），支援 10 個倉庫的日常營運。',
          '主導 React 18 前端開發（130+ 路由）：掃描優先的倉庫操作介面，支援即時更新。',
          '以 GitOps（Helm、ArgoCD）管理 8 個環境的 Kubernetes 部署。',
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
