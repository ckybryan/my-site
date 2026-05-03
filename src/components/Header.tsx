import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const sections = [
  { id: 'about', num: '01' },
  { id: 'track', num: '02' },
  { id: 'craft', num: '03' },
  { id: 'studio', num: '04' },
  { id: 'contact', num: '05' },
];

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const labels: Record<string, string> = {
    about: t.nav.about,
    studio: t.nav.studio,
    craft: t.nav.craft,
    track: t.nav.track,
    contact: t.nav.contact,
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink-950/80 border-b border-ink-800">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14 gap-4">
        <a href="#top" className="mono text-sm text-fg shrink-0">
          bryan.wtf
        </a>
        <nav className="hidden md:flex items-center gap-6 mono text-xs overflow-x-auto">
          {sections.map(({ id, num }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap transition-colors ${
                active === id ? 'text-fg' : 'text-fg-mute hover:text-fg'
              }`}
            >
              {num} / {labels[id]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 shrink-0">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="md:hidden px-6 pb-3 overflow-x-auto">
        <nav className="flex items-center gap-5 mono text-[11px] whitespace-nowrap">
          {sections.map(({ id, num }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                active === id ? 'text-fg' : 'text-fg-mute'
              }`}
            >
              {num} / {labels[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
