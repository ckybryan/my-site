import { Translation } from './types';

export const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    studio: 'Studio',
    craft: 'Craft',
    track: 'Track Record',
    contact: 'Contact',
  },
  hero: {
    kicker: 'Bryan Chan — Toronto — 2026',
    titleLine1: 'Lead engineer at GoBolt.',
    titleLine2: 'Indie studio of one.',
    description:
      'Eight years shipping production systems. Now shipping apps end-to-end with Claude Code.',
    seeWork: 'see the work',
    getInTouch: 'get in touch',
    stats: {
      yearsAtGoBolt: 'yrs @ GoBolt',
      appsLive: 'apps live',
      nativeDev: 'native dev',
    },
  },
  work: {
    kicker: 'side proof',
    titleLine1: 'Still shipping,',
    titleLine2: 'end-to-end.',
    blurb:
      'Solo apps on iOS and web — built to keep the production muscle honest. Full catalog at the studio.',
    cta: 'www.bryanstudio.dev',
  },
  studio: {
    kicker: 'the operator',
    pullQuote:
      'I build the thing, then I build the thing that builds the thing.',
    bio: 'Toronto-based engineer working across the full stack. Day job: leading architecture and frontend systems at GoBolt. Side work: Bryan Studio, an indie shop shipping iOS and web apps. I write TypeScript, ship with Claude Code, and care about the boring parts — error handling, observability, clear APIs — more than most.',
    facts: {
      basedLabel: 'Based',
      basedValue: 'Toronto, Canada',
      dayJobLabel: 'Day job',
      dayJobValue: 'Lead SWE, GoBolt (2017—)',
      studioLabel: 'Studio',
      studioValue: 'Bryan Studio — indie',
      educationLabel: 'Education',
      educationValue: 'BASc Computer Eng, U of T',
      offKeysLabel: 'Off-keys',
      offKeysValue: 'Cats, badminton, snowboarding',
    },
  },
  craft: {
    kicker: 'how i work',
    aiTitle: 'AI-native development.',
    aiIntro:
      'Claude Code is my daily driver — from spec to ship. Not a typeahead; a teammate.',
    ai: {
      claudeCode: 'daily driver. spec → plan → implement → ship.',
      subagents:
        'parallel specialists; multi-model routing across opus/sonnet/haiku.',
      agentTeams:
        'orchestrated pr-review team: lead + reviewer + auto-approver.',
      skills:
        'codified workflows — linear → worktree → PR in one command.',
      mcp: 'linear, datadog, production dbs (read-only).',
      slashCommands:
        '13+ domain-specific commands for k8s, releases, triage.',
      anthropicSdk:
        'tool use, prompt caching, streaming responses.',
    },
    categories: {
      frontend: 'frontend',
      backend: 'backend & mobile',
      infra: 'tools & infra',
    },
  },
  track: {
    kicker: 'ten-year receipt',
  },
  experience: {
    positions: {
      leadAiPlatform: {
        title: 'Lead AI Platform Engineer',
        responsibilities: [
          'Built and operate a fleet of production AI agents on shared internal tooling — PR review and approval, documentation maintenance, release automation.',
          'Shipped the company\'s first LLM-powered feature, with a reusable multi-provider LLM integration layer.',
          'Made agentic AI the core delivery workflow — AI-driven testing, releases, and code review.',
          'Trained the engineering team on AI-assisted development: presented GoBolt\'s AI workflow and onboarded engineers to Claude Code.',
        ],
      },
      leadEngineer: {
        title: 'Lead Software Engineer',
        responsibilities: [
          'Architected a NestJS/PostgreSQL backend (136+ modules) powering daily operations across 10 warehouses.',
          'Led a React 18 frontend (130+ routes): scanner-first warehouse UI with real-time updates.',
          'Kubernetes deployments across 8 environments with GitOps (Helm, ArgoCD).',
        ],
      },
      leadFrontend: {
        title: 'Lead Frontend Developer',
        responsibilities: [
          'Introduced TypeScript, React Hooks, Styled-Components, React-Query, RecoilJS.',
          'Built a comprehensive vehicle routing system using Google Maps API.',
          'Reduced frontend boilerplate by 60% through architectural cleanup.',
        ],
      },
      fullStackLead: {
        title: 'Full Stack Engineer / Team Lead',
        responsibilities: [
          'Designed and deployed a NestJS-based warehouse inventory system.',
          'Integrated AWS cloud infrastructure for scalability.',
          'Led cross-functional team on technical implementation.',
        ],
      },
      frontendDev: {
        title: 'Frontend Developer',
        responsibilities: [
          'Introduced Redux and SASS for state management and styling.',
          'Built the company\'s first React Native mobile application.',
          'Developed the main business site from scratch.',
        ],
      },
      intern: {
        title: 'Frontend Developer Intern',
        responsibilities: [
          'Modernized UI components for better UX.',
          'Integrated Stripe payment processing with React frontend.',
        ],
      },
    },
  },
  contact: {
    title: "Let's talk.",
    description:
      'Open to advising, indie-dev contracts, and interesting problems. Not looking for full-time.',
    status:
      'Currently: open to advising & indie-dev contracts · not looking FT',
  },
  footer: {
    builtWith: 'built with claude code',
    backToTop: 'back to top',
  },
};
