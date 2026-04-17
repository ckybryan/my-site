import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../i18n';

const shortLabels: Record<string, string> = {
  en: 'EN',
  'zh-CN': '中',
  'zh-TW': '繁',
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 mono text-xs text-fg-mute hover:text-fg transition-colors px-1 py-1"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {languages.map((lang, i) => (
          <span key={lang.code} className="flex items-center">
            {i > 0 && <span className="mx-1 text-fg-mute/50">·</span>}
            <span
              className={
                lang.code === language ? 'text-fg' : 'text-fg-mute/70'
              }
            >
              {shortLabels[lang.code] ?? lang.code.toUpperCase()}
            </span>
          </span>
        ))}
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-3 w-52 bg-ink-950 border border-ink-800 shadow-lg z-50"
        >
          {languages.map((lang) => {
            const active = lang.code === language;
            return (
              <button
                key={lang.code}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 border-b border-ink-800 last:border-b-0 transition-colors ${
                  active
                    ? 'bg-ink-900 text-fg'
                    : 'text-fg-dim hover:bg-ink-900 hover:text-fg'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[15px]">{lang.nativeName}</span>
                  <span className="mono text-[10px] text-fg-mute uppercase tracking-wider">
                    {shortLabels[lang.code] ?? lang.code.toUpperCase()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
