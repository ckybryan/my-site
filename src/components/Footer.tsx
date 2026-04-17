import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 px-6 md:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mono text-xs text-fg-mute">
        <p>bryan.wtf · {t.footer.builtWith} · {year}</p>
        <div className="flex items-center gap-4">
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
        </div>
        <a href="#top" className="hover:text-fg transition-colors">
          ↑ {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
