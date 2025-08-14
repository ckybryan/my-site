import { Calendar, MapPin, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: t.experience.positions.leadEngineer.title,
      company: 'GoBolt',
      location: 'Toronto, ON',
      period: 'Oct 2021 - Present',
      description: t.experience.positions.leadEngineer.responsibilities,
      technologies: ['TypeScript', 'React', 'NestJS', 'AWS', 'React Native', 'Database Design'],
    },
    {
      title: t.experience.positions.leadFrontend.title,
      company: 'GoBolt',
      location: 'Toronto, ON',
      period: 'Dec 2018 - Nov 2021',
      description: t.experience.positions.leadFrontend.responsibilities,
      technologies: ['TypeScript', 'React', 'Styled-Components', 'React-Query', 'RecoilJS', 'Google Maps API'],
    },
    {
      title: t.experience.positions.fullStackLead.title,
      company: 'GoBolt',
      location: 'Toronto, ON',
      period: 'Nov 2020 - Oct 2021',
      description: t.experience.positions.fullStackLead.responsibilities,
      technologies: ['NestJS', 'React', 'AWS', 'TypeScript', 'Database Design', 'Team Leadership'],
    },
    {
      title: t.experience.positions.frontendDev.title,
      company: 'GoBolt',
      location: 'Toronto, ON',
      period: 'Jan 2018 - Dec 2018',
      description: t.experience.positions.frontendDev.responsibilities,
      technologies: ['React', 'Redux', 'SASS', 'React Native', 'Progressive Data Loading'],
    },
    {
      title: t.experience.positions.intern.title,
      company: 'GoBolt',
      location: 'Toronto, ON',
      period: 'Nov 2017 - Dec 2017',
      description: t.experience.positions.intern.responsibilities,
      technologies: ['React', 'JavaScript', 'Stripe API', 'UI/UX'],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.experience.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.experience.description}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-primary-600 mb-2">
                    <Building size={16} className="mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-gray-600">
                  <div className="flex items-center mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="text-gray-600 mb-6 space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
