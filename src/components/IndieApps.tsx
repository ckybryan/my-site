import { useLanguage } from '../contexts/LanguageContext';

const Work: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="studio" className="section-padding border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b border-ink-800 pb-4">
          <p className="mono-caps text-xs text-fg-mute">04 / {t.nav.studio}</p>
          <p className="mono text-xs text-fg-mute">{t.work.kicker}</p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2 className="display text-4xl md:text-6xl max-w-3xl">
              {t.work.titleLine1}{' '}
              <span className="font-light text-fg-dim">{t.work.titleLine2}</span>
            </h2>
            <p className="mt-8 text-fg-dim leading-relaxed text-lg max-w-2xl">
              {t.work.blurb}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:text-right">
            <a
              href="https://www.bryanstudio.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm text-fg link-sweep"
            >
              {t.work.cta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
