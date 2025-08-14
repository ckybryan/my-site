import { Translation } from './types';

export const zhTW: Translation = {
  nav: {
    home: '首頁',
    about: '關於',
    skills: '技能',
    projects: '專案',
    experience: '經歷',
    contact: '聯絡',
  },
  hero: {
    greeting: '你好，我是',
    title: '陳凱岩',
    chineseName: '陳格仁',
    description: '專注於TypeScript全端開發的首席軟體工程師。我使用現代JavaScript框架建構高效能、可擴展的Web和行動應用程式。',
    getInTouch: '聯絡我',
    viewWork: '查看作品',
  },
  about: {
    title: '關於我',
    description: '我是一名TypeScript全端開發者，喜歡貓咪、羽毛球和滑雪。我專門使用現代JavaScript框架建構高效能、可擴展的Web和行動應用程式。',
    journey: '我的歷程',
    journeyText1: '目前擔任GoBolt的首席軟體工程師，自2017年以來一直在架構和開發前端及後端系統。我的工作將強大的技術架構與實用的使用者導向設計相結合。',
    journeyText2: '從引入TypeScript和React Hooks到建構完整的倉庫庫存管理系統，我熱衷於創造不僅運行良好，還能為開發者和使用者提供卓越體驗的解決方案。我領導過團隊，將前端樣板程式碼減少了60%，並持續交付可擴展的應用程式。',
    tags: {
      fullStackLeader: '全端領導者',
      typescriptExpert: 'TypeScript專家',
      performanceOptimizer: '效能優化師',
    },
    education: '教育背景',
    degree: '應用科學學士 (BASc)',
    major: '電腦工程',
    university: '多倫多大學',
    cleanCode: '整潔程式碼',
    cleanCodeDesc: '我相信編寫遵循最佳實踐和行業標準的整潔、可維護的程式碼。',
    innovation: '創新',
    innovationDesc: '始終探索新技術和方法，以創造性和高效的方式解決問題。',
    collaboration: '協作',
    collaborationDesc: '堅信團隊合作和溝通能夠交付超越期望的成功專案。',
  },
  skills: {
    title: '技能與技術',
    description: '這些是我用來實現創意的技術和工具。',
    frontend: '前端',
    backendMobile: '後端與行動端',
    toolsDevops: '工具與維運',
    alwaysLearning: '持續學習',
  },
  projects: {
    title: '精選專案',
    description: '我架構和開發的關鍵專案，展示了我在全端開發、AI整合和系統優化方面的專業知識。',
    vehicleRouting: {
      title: '車輛路線系統',
      description: '使用React和Google地圖API建構的綜合車輛路線應用程式。具有即時追蹤、路線優化和配送操作效能分析功能。',
    },
    warehouseManagement: {
      title: '倉庫庫存管理',
      description: '全端倉庫庫存管理系統，採用NestJS後端和React前端。包括即時庫存追蹤、自動報告和AWS整合。',
    },
    careerConversation: {
      title: '職涯對話AI聊天機器人',
      description: '基於TypeScript的智能AI職涯對話聊天機器人。具有工具整合、推播通知、PDF解析和Express.js建構的簡潔Web介面。',
    },
    mobileApp: {
      title: 'React Native行動應用',
      description: '配送管理的跨平台行動應用程式，具有即時更新、GPS追蹤和離線功能。使用React Native和現代行動開發模式建構。',
    },
  },
  experience: {
    title: '工作經歷',
    description: '我在GoBolt的職業歷程，從實習生成長為首席軟體工程師，持續推動創新和技術卓越。',
    positions: {
      leadEngineer: {
        title: '首席軟體工程師',
        responsibilities: [
          '領導前端和後端系統的架構和開發',
          '優化工作流程，用現代技術替換遺留解決方案',
          '指導團隊成員，建立可擴展開發的最佳實踐',
          '推動技術決策和平台架構改進',
        ],
      },
      leadFrontend: {
        title: '首席前端開發工程師',
        responsibilities: [
          '引入TypeScript、React Hooks、Styled-Components、React-Query和RecoilJS',
          '使用Google地圖API建構綜合車輛路線系統',
          '透過架構改進將前端樣板程式碼減少60%',
          '領導前端團隊並建立現代開發工作流程',
        ],
      },
      fullStackLead: {
        title: '全端工程師/資深軟體開發工程師/團隊負責人',
        responsibilities: [
          '設計和部署基於NestJS的新倉庫庫存管理應用程式',
          '將系統與AWS雲端基礎設施整合以實現可擴展性',
          '開發具有現代UX模式的響應式ReactJS前端',
          '領導跨功能團隊開發和技術實施',
        ],
      },
      frontendDev: {
        title: '前端開發工程師',
        responsibilities: [
          '引入Redux和SASS以改進狀態管理和樣式',
          '實施漸進式資料載入以提高效能',
          '建構公司首個React Native行動應用程式',
          '使用現代React模式從零開始開發主要業務網站',
        ],
      },
      intern: {
        title: '前端開發實習生',
        responsibilities: [
          '更新和現代化UI元件以提供更好的使用者體驗',
          '將Stripe支付處理與React前端整合',
          '與資深開發人員密切合作學習最佳實踐',
          '為程式碼庫改進和錯誤修復做出貢獻',
        ],
      },
    },
  },
  contact: {
    title: '聯絡我',
    description: '我對新機會和令人興奮的專案總是很感興趣。讓我們聯絡並討論如何合作。',
    startConversation: '開始對話',
    email: '電子郵件',
    phone: '電話',
    location: '位置',
    whyWorkWithMe: '為什麼與我合作？',
    reasons: [
      '在GoBolt領導全端開發7年以上的經驗',
      '證明的業績記錄：減少60%樣板程式碼並優化效能',
      'TypeScript、React生態系統和現代開發實踐專家',
      '強大的領導經驗和對指導團隊的熱情',
    ],
    connectLinkedIn: '在LinkedIn上聯絡我',
    linkedInDescription: '讓我們連接並討論機會、合作或者聊聊技術和開發。',
    visitLinkedIn: '造訪我的LinkedIn檔案',
  },
  footer: {
    description: '專注於TypeScript全端開發的首席軟體工程師。使用現代JavaScript框架建構高效能、可擴展的Web和行動應用程式。',
    quickLinks: '快速連結',
    getInTouch: '聯絡我',
    letsWorkTogether: '讓我們合作',
    allRightsReserved: '保留所有權利。',
    madeWith: '使用',
  },
};
