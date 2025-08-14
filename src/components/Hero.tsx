import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  
  const displayName = (language === 'zh-CN' || language === 'zh-TW') && t.hero.chineseName 
    ? t.hero.chineseName 
    : t.hero.title;
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto section-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t.hero.greeting} <span className="gradient-text">{displayName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/ckybryan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/cky-bryanchan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              {t.hero.getInTouch}
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-medium"
            >
              {t.hero.viewWork}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown size={24} className="text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
