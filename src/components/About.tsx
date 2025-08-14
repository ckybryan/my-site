import { Code, Coffee, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.about.journey}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.about.journeyText1}
            </p>
            <p className="text-gray-600 mb-6">
              {t.about.journeyText2}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {t.about.tags.fullStackLeader}
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {t.about.tags.typescriptExpert}
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {t.about.tags.performanceOptimizer}
              </span>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                {t.about.education}
              </h4>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-gray-900">{t.about.degree}</h5>
                <p className="text-gray-600">{t.about.major}</p>
                <p className="text-gray-500 text-sm">{t.about.university}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="text-primary-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">
                  {t.about.cleanCode}
                </h4>
              </div>
              <p className="text-gray-600">
                {t.about.cleanCodeDesc}
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-primary-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">
                  {t.about.innovation}
                </h4>
              </div>
              <p className="text-gray-600">
                {t.about.innovationDesc}
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Coffee className="text-primary-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">
                  {t.about.collaboration}
                </h4>
              </div>
              <p className="text-gray-600">
                {t.about.collaborationDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
