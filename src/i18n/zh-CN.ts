import { Translation } from './types';

export const zhCN: Translation = {
  nav: {
    home: '首页',
    work: '作品',
    studio: '工作室',
    craft: '技艺',
    track: '履历',
    contact: '联系',
  },
  hero: {
    kicker: '陈格仁 — 多伦多 — 2026',
    chineseName: '陈格仁',
    titleLine1: 'GoBolt首席工程师。',
    titleLine2: '独立工作室一人作战。',
    description:
      '八年生产级系统经验。如今使用Claude Code端到端交付产品。',
    seeWork: '查看作品',
    getInTouch: '联系我',
    stats: {
      yearsAtGoBolt: '年 @ GoBolt',
      appsLive: '款应用上线',
      nativeDev: 'AI原生开发',
    },
  },
  work: {
    kicker: '已上线，未搁置',
    titleLine1: '两款应用。都已上线。',
    titleLine2: '都是独立完成。',
    live: '在线',
    builtWith: '使用 CLAUDE CODE 构建',
    moreAt: '更多作品：',
    snapsell: {
      tagline: '一拍即售',
      description:
        'AI将一张照片转换为精美的市场上架信息 — 为Facebook Marketplace、eBay、Etsy和Amazon量身定制，仅需几秒。',
    },
    petcrew: {
      tagline: '宠物照护，家人共享',
      description:
        '智能宠物照护伙伴，用于跟踪喂食时间、记录照护情况，并与家人共同分担责任。',
    },
  },
  studio: {
    kicker: '幕后操盘手',
    pullQuote: '我先造出产品，再造出能造产品的工具。',
    bio: '常驻多伦多的全栈工程师。主业：在GoBolt领导架构与前端系统。副业：Bryan Studio，一家独立工作室，交付iOS和Web应用。我写TypeScript，用Claude Code发布产品，比大多数人更在意那些"无聊"的部分 — 错误处理、可观测性、清晰的API。',
    facts: {
      basedLabel: '所在地',
      basedValue: '加拿大多伦多',
      dayJobLabel: '主业',
      dayJobValue: 'GoBolt首席软件工程师 (2017—)',
      studioLabel: '工作室',
      studioValue: 'Bryan Studio — 独立工作室',
      educationLabel: '学历',
      educationValue: '多伦多大学计算机工程学士',
      offKeysLabel: '键盘外',
      offKeysValue: '猫咪、羽毛球、滑雪',
    },
  },
  craft: {
    kicker: '我如何工作',
    aiTitle: 'AI原生开发。',
    aiIntro:
      'Claude Code是我的日常工具 — 从规格到上线。不是自动补全，是并肩作战的队友。',
    ai: {
      claudeCode: '日常工具。规格 → 规划 → 实现 → 上线。',
      subagents: '并行专家分工；在opus/sonnet/haiku之间多模型路由。',
      agentTeams: '编排的pr-review团队：主控 + 审查员 + 自动审批。',
      skills: '代码化的工作流 — linear → worktree → PR 一键完成。',
      mcp: 'linear、datadog、生产数据库（只读）。',
      slashCommands: '13+ 个领域特定命令：k8s、发布、问题分类。',
      anthropicSdk: '工具调用、提示缓存、流式响应。',
    },
    categories: {
      frontend: '前端',
      backend: '后端 & 移动',
      infra: '工具 & 基础设施',
    },
  },
  track: {
    kicker: '十年履历',
  },
  experience: {
    positions: {
      leadEngineer: {
        title: '首席软件工程师',
        responsibilities: [
          '主导前端和后端系统的架构设计。',
          '现代化遗留技术栈；指导团队推行可扩展的模式。',
          '推动技术决策与架构改进。',
        ],
      },
      leadFrontend: {
        title: '首席前端工程师',
        responsibilities: [
          '引入TypeScript、React Hooks、Styled-Components、React-Query、RecoilJS。',
          '使用Google Maps API构建综合车辆路由系统。',
          '通过架构重构将前端样板代码减少60%。',
        ],
      },
      fullStackLead: {
        title: '全栈工程师 / 团队负责人',
        responsibilities: [
          '设计并部署基于NestJS的仓库库存管理系统。',
          '集成AWS云基础设施以支持可扩展性。',
          '领导跨职能团队进行技术实施。',
        ],
      },
      frontendDev: {
        title: '前端开发工程师',
        responsibilities: [
          '引入Redux和SASS，改善状态管理与样式。',
          '开发公司首款React Native移动应用。',
          '从零开始构建主要业务网站。',
        ],
      },
      intern: {
        title: '前端开发实习生',
        responsibilities: [
          '现代化UI组件以提升用户体验。',
          '将Stripe支付处理集成到React前端。',
        ],
      },
    },
  },
  contact: {
    title: '聊聊吧。',
    description:
      '欢迎咨询顾问、独立开发合作以及有意思的问题。暂不考虑全职。',
    status: '当前状态：接受顾问与独立开发合作 · 不寻全职',
  },
  footer: {
    builtWith: '使用 claude code 构建',
    backToTop: '回到顶部',
  },
};
