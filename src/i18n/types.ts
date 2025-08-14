export interface Translation {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    chineseName?: string;
    description: string;
    getInTouch: string;
    viewWork: string;
  };
  about: {
    title: string;
    description: string;
    journey: string;
    journeyText1: string;
    journeyText2: string;
    tags: {
      fullStackLeader: string;
      typescriptExpert: string;
      performanceOptimizer: string;
    };
    education: string;
    degree: string;
    major: string;
    university: string;
    cleanCode: string;
    cleanCodeDesc: string;
    innovation: string;
    innovationDesc: string;
    collaboration: string;
    collaborationDesc: string;
  };
  skills: {
    title: string;
    description: string;
    frontend: string;
    backendMobile: string;
    toolsDevops: string;
    alwaysLearning: string;
  };
  projects: {
    title: string;
    description: string;
    vehicleRouting: {
      title: string;
      description: string;
    };
    warehouseManagement: {
      title: string;
      description: string;
    };
    careerConversation: {
      title: string;
      description: string;
    };
    mobileApp: {
      title: string;
      description: string;
    };
  };
  experience: {
    title: string;
    description: string;
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
    startConversation: string;
    email: string;
    phone: string;
    location: string;
    whyWorkWithMe: string;
    reasons: string[];
    connectLinkedIn: string;
    linkedInDescription: string;
    visitLinkedIn: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    getInTouch: string;
    letsWorkTogether: string;
    allRightsReserved: string;
    madeWith: string;
  };
}
