import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t.contact.startConversation}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <Mail className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{t.contact.email}</h4>
                  <p className="text-gray-600">cky.bryan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <MapPin className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{t.contact.location}</h4>
                  <p className="text-gray-600">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                {t.contact.whyWorkWithMe}
              </h4>
              <ul className="space-y-3 text-gray-600">
                {t.contact.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LinkedIn Contact */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t.contact.connectLinkedIn}
              </h3>
              
              <p className="text-gray-600 mb-8">
                {t.contact.linkedInDescription}
              </p>
              
              <a
                href="https://www.linkedin.com/in/cky-bryanchan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Linkedin size={16} className="mr-2" />
                {t.contact.visitLinkedIn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
