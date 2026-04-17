import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-padding border-t border-ink-800"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="mono-caps text-xs text-fg-mute mb-10">
          05 / {t.nav.contact}
        </p>
        <h2 className="display text-5xl md:text-6xl mb-6">
          {t.contact.title}
        </h2>
        <p className="text-fg-dim mb-12 leading-relaxed">
          {t.contact.description}
        </p>
        <a
          href="mailto:cky.bryan@gmail.com"
          className="mono text-xl md:text-2xl link-sweep text-fg inline-block mb-10"
        >
          cky.bryan@gmail.com →
        </a>
        <div className="flex items-center justify-center gap-6 mono text-xs text-fg-mute">
          <a
            href="https://github.com/ckybryan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            github
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/cky-bryanchan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            linkedin
          </a>
          <span>·</span>
          <a
            href="/Bryan_Chan_Resume.pdf"
            className="hover:text-fg transition-colors"
          >
            resume.pdf
          </a>
        </div>
        <div className="mt-12 inline-flex items-center gap-2 mono text-[11px] text-fg-mute">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-live" />
          {t.contact.status}
        </div>
      </div>
    </section>
  );
};

export default Contact;
