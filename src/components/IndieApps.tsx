import { useLanguage } from '../contexts/LanguageContext';

type App = {
  num: string;
  name: string;
  tagline: string;
  description: string;
  platform: string;
  year: string;
  stack: string;
  href: string;
  linkLabel: string;
  brandColor: string;
};

const Work: React.FC = () => {
  const { t } = useLanguage();

  const apps: App[] = [
    {
      num: '— 01',
      name: 'Candlepost',
      tagline: t.work.candlepost.tagline,
      description: t.work.candlepost.description,
      platform: 'WEB',
      year: '2026',
      stack: 'next.js · typescript · postgres · gmail oauth · claude haiku',
      href: 'https://candlepost.bryanstudio.dev',
      linkLabel: 'candlepost.bryanstudio.dev',
      brandColor: '#4A7A3D',
    },
    {
      num: '— 02',
      name: 'SnapSell',
      tagline: t.work.snapsell.tagline,
      description: t.work.snapsell.description,
      platform: 'WEB',
      year: '2026',
      stack: 'next.js · typescript · postgres · cloudflare workers ai',
      href: 'https://snap-sell.com',
      linkLabel: 'snap-sell.com',
      brandColor: '#21A593',
    },
    {
      num: '— 03',
      name: 'PetCrew',
      tagline: t.work.petcrew.tagline,
      description: t.work.petcrew.description,
      platform: 'iOS',
      year: '2025',
      stack: 'swift · swiftui · firebase',
      href: 'https://www.bryanstudio.dev/petcrew',
      linkLabel: 'www.bryanstudio.dev/petcrew',
      brandColor: '#7c5cd9',
    },
  ];

  return (
    <section id="work" className="section-padding border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b border-ink-800 pb-4">
          <p className="mono-caps text-xs text-fg-mute">01 / {t.nav.work}</p>
          <p className="mono text-xs text-fg-mute">{t.work.kicker}</p>
        </div>

        <h2 className="display text-4xl md:text-6xl mb-16 md:mb-20 max-w-3xl">
          {t.work.titleLine1}{' '}
          <span className="font-light text-fg-dim">{t.work.titleLine2}</span>
        </h2>

        <div className="divide-y divide-ink-800">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-12 md:py-16 grid grid-cols-12 gap-6 md:gap-10 hover:bg-ink-900/50 transition-colors duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="mono text-fg-mute text-sm mb-3">{app.num}</p>
                <div className="mono text-[11px] text-fg-mute flex items-center gap-2 flex-wrap">
                  <span>{app.platform}</span>
                  <span>·</span>
                  <span>{app.year}</span>
                  <span>·</span>
                  <span className="text-live flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-live" />{' '}
                    {t.work.live}
                  </span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 mono text-[10px] text-fg-mute border border-ink-700 px-2 py-1">
                  <span className="inline-block w-1.5 h-1.5 bg-accent-500" />
                  {t.work.builtWith}
                </div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <div className="flex items-baseline gap-5 mb-4 flex-wrap">
                  <h3
                    className="display text-4xl md:text-6xl tracking-tight text-fg transition-colors"
                    style={
                      {
                        // hover target handled via group-hover below
                      }
                    }
                  >
                    <span
                      className="group-hover:text-[var(--brand)] transition-colors"
                      style={{ ['--brand' as string]: app.brandColor }}
                    >
                      {app.name}
                    </span>
                  </h3>
                  <span className="text-fg-dim text-lg md:text-xl font-light">
                    {app.tagline}
                  </span>
                </div>
                <p className="text-fg-dim leading-relaxed text-lg max-w-2xl mb-6">
                  {app.description}
                </p>
                <div className="flex items-center justify-between gap-6 flex-wrap">
                  <p className="mono text-xs text-fg-mute">{app.stack}</p>
                  <span className="mono text-sm text-fg link-sweep">
                    {app.linkLabel} →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.bryanstudio.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-sm text-fg-mute link-sweep"
          >
            {t.work.moreAt} www.bryanstudio.dev →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
