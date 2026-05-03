import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="min-h-screen flex items-center px-6 md:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 animate-fade-in">
          <p className="mono-caps text-xs text-fg-mute mb-10">
            {t.hero.kicker}
          </p>
          <h1 className="display text-5xl md:text-[84px] leading-[0.95] mb-8">
            {t.hero.titleLine1}
            <br />
            <span className="font-light text-fg-dim">{t.hero.titleLine2}</span>
          </h1>
          <p className="text-lg md:text-xl text-fg-dim max-w-2xl leading-relaxed mb-14">
            {t.hero.description}
          </p>

          <div className="grid grid-cols-3 gap-px bg-ink-800 border border-ink-800 max-w-2xl mb-14">
            <div className="bg-ink-950 p-5">
              <div className="mono text-2xl md:text-3xl text-fg mb-1">8+</div>
              <div className="mono-caps text-[10px] text-fg-mute">
                {t.hero.stats.yearsAtGoBolt}
              </div>
            </div>
            <div className="bg-ink-950 p-5">
              <div className="mono text-2xl md:text-3xl text-fg mb-1">3</div>
              <div className="mono-caps text-[10px] text-fg-mute">
                {t.hero.stats.appsLive}
              </div>
            </div>
            <div className="bg-ink-950 p-5">
              <div className="mono text-2xl md:text-3xl text-fg mb-1">AI</div>
              <div className="mono-caps text-[10px] text-fg-mute">
                {t.hero.stats.nativeDev}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 mono text-sm">
            <a href="#track" className="link-sweep text-fg">
              → {t.hero.seeWork}
            </a>
            <a
              href="#contact"
              className="link-sweep text-fg-dim hover:text-fg transition-colors"
            >
              → {t.hero.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
