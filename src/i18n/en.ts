import { Translation } from './types';

export const en: Translation = {
  nav: {
    home: 'Home',
    work: 'Work',
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
    kicker: 'shipped, not shelved',
    titleLine1: 'Two apps. Both live.',
    titleLine2: 'Both solo.',
    live: 'LIVE',
    builtWith: 'BUILT WITH CLAUDE CODE',
    moreAt: 'More at',
    snapsell: {
      tagline: 'snap a photo, sell it',
      description:
        'AI turns a single photo into a polished marketplace listing — tailored for Facebook Marketplace, eBay, Etsy, and Amazon in seconds.',
    },
    petcrew: {
      tagline: 'pet care, shared with family',
      description:
        'Smart pet care companion for tracking feeding schedules, logging care, and sharing responsibility with the whole family.',
    },
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
      leadEngineer: {
        title: 'Lead Software Engineer',
        responsibilities: [
          'Lead architecture across frontend and backend systems.',
          'Modernize legacy stacks; mentor team on scalable patterns.',
          'Drive technical decisions and architectural improvements.',
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
