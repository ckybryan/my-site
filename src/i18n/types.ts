export interface Translation {
  nav: {
    home: string;
    work: string;
    studio: string;
    craft: string;
    track: string;
    contact: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    seeWork: string;
    getInTouch: string;
    stats: {
      yearsAtGoBolt: string;
      appsLive: string;
      nativeDev: string;
    };
    chineseName?: string;
  };
  work: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    live: string;
    builtWith: string;
    moreAt: string;
    snapsell: {
      tagline: string;
      description: string;
    };
    petcrew: {
      tagline: string;
      description: string;
    };
  };
  studio: {
    kicker: string;
    pullQuote: string;
    bio: string;
    facts: {
      basedLabel: string;
      basedValue: string;
      dayJobLabel: string;
      dayJobValue: string;
      studioLabel: string;
      studioValue: string;
      educationLabel: string;
      educationValue: string;
      offKeysLabel: string;
      offKeysValue: string;
    };
  };
  craft: {
    kicker: string;
    aiTitle: string;
    aiIntro: string;
    ai: {
      claudeCode: string;
      subagents: string;
      agentTeams: string;
      skills: string;
      mcp: string;
      slashCommands: string;
      anthropicSdk: string;
    };
    categories: {
      frontend: string;
      backend: string;
      infra: string;
    };
  };
  track: {
    kicker: string;
  };
  experience: {
    positions: {
      leadEngineer: {
        title: string;
        responsibilities: string[];
      };
      leadFrontend: {
        title: string;
        responsibilities: string[];
      };
      fullStackLead: {
        title: string;
        responsibilities: string[];
      };
      frontendDev: {
        title: string;
        responsibilities: string[];
      };
      intern: {
        title: string;
        responsibilities: string[];
      };
    };
  };
  contact: {
    title: string;
    description: string;
    status: string;
  };
  footer: {
    builtWith: string;
    backToTop: string;
  };
}
