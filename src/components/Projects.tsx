import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t.projects.careerConversation.title,
      description: t.projects.careerConversation.description,
      technologies: ['TypeScript', 'Node.js', 'Express.js', 'AI Integration', 'PDF Parser', 'Pushover API'],
      githubUrl: 'https://github.com/ckybryan/personal-carrier-chat-agent',
      liveUrl: 'https://career-conversation.railway.app',
      imageUrl: '/api/placeholder/400/250',
    },
    {
      title: t.projects.vehicleRouting.title,
      description: t.projects.vehicleRouting.description,
      technologies: ['React', 'TypeScript', 'Google Maps API', 'Styled-Components', 'React-Query'],
      githubUrl: 'https://github.com/ckybryan/vehicle-routing',
      liveUrl: 'https://gobolt.com',
      imageUrl: '/api/placeholder/400/250',
    },
    {
      title: t.projects.warehouseManagement.title,
      description: t.projects.warehouseManagement.description,
      technologies: ['NestJS', 'React', 'TypeScript', 'AWS', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/ckybryan/warehouse-management',
      liveUrl: 'https://inventory-demo.vercel.app',
      imageUrl: '/api/placeholder/400/250',
    },
    {
      title: t.projects.mobileApp.title,
      description: t.projects.mobileApp.description,
      technologies: ['React Native', 'TypeScript', 'Redux', 'React Navigation', 'AsyncStorage'],
      githubUrl: 'https://github.com/ckybryan/delivery-mobile',
      liveUrl: 'https://apps.apple.com/ca/app/gobolt',
      imageUrl: '/api/placeholder/400/250',
    },
  ];

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-primary-600 text-lg font-medium">
                  {project.title}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
