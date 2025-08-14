import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Bryan Chan</h3>
            <p className="text-gray-400 mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ckybryan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/cky-bryanchan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:cky.bryan@gmail.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <nav className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.nav.about}
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.nav.projects}
              </a>
              <a
                href="#experience"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.nav.experience}
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.getInTouch}</h4>
            <div className="space-y-2 text-gray-400">
              <p>cky.bryan@gmail.com</p>
              <p>Toronto, Ontario, Canada</p>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                {t.footer.letsWorkTogether}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bryan Chan. {t.footer.allRightsReserved}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
              {t.footer.madeWith} <Heart size={16} className="text-red-500 mx-1" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
