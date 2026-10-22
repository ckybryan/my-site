import { useLanguage } from '../contexts/LanguageContext';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="section-padding border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b border-ink-800 pb-4">
          <p className="mono-caps text-xs text-fg-mute">03 / {t.nav.roadmap}</p>
          <p className="mono text-xs text-fg-mute">{t.roadmap.kicker}</p>
        </div>

        <h2 className="display text-4xl md:text-5xl mb-6">
          {t.roadmap.titleLine1}{' '}
          <span className="font-light text-fg-dim">{t.roadmap.titleLine2}</span>
        </h2>

        <p className="text-fg-dim text-[15px] leading-relaxed max-w-2xl mb-12">
          {t.roadmap.intro}
        </p>

        <ol className="relative pl-8 md:pl-12 border-l border-ink-700 space-y-9">
          {t.roadmap.items.map((item, index) => (
            <li key={item.date + item.title} className="relative">
              <span
                className={`absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-ink-950 ${
                  index === 0 ? 'bg-accent-500' : 'bg-ink-700'
                }`}
              />
              <div className="flex flex-col md:flex-row md:gap-12">
                <p className="mono text-xs text-fg-mute md:w-32 shrink-0 mb-2 md:mb-0 md:pt-1">
                  {item.date}
                </p>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl mb-2">{item.title}</h3>
                  <p className="text-fg-dim text-[15px] leading-relaxed max-w-2xl">
                    {item.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Roadmap;
