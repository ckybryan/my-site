import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 95 },
        { name: 'React Hooks', level: 90 },
        { name: 'Styled-Components', level: 85 },
        { name: 'Redux/RecoilJS', level: 85 },
        { name: 'React-Query', level: 80 },
      ],
    },
    {
      title: t.skills.backendMobile,
      skills: [
        { name: 'NestJS', level: 90 },
        { name: 'AWS Lambda', level: 85 },
        { name: 'React Native', level: 80 },
        { name: 'Amazon Elastic Beanstalk', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'Database Design', level: 80 },
      ],
    },
    {
      title: t.skills.toolsDevops,
      skills: [
        { name: 'Git', level: 95 },
        { name: 'AWS', level: 85 },
        { name: 'Google Maps API', level: 85 },
        { name: 'npm packages', level: 90 },
        { name: 'Progressive Data Loading', level: 85 },
        { name: 'Team Leadership', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {t.skills.alwaysLearning}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kubernetes', 'Docker', 'Microservices', 'WebRTC', 'Serverless', 'Machine Learning', 'Large Language Models', 'AI Integration', 'Google Cloud GCP'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-800 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
