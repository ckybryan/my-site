import { useLanguage } from '../contexts/LanguageContext';

const TrackRecord: React.FC = () => {
  const { t } = useLanguage();

  const roles = [
    {
      range: '2021 — NOW',
      title: t.experience.positions.leadEngineer.title,
      bullets: t.experience.positions.leadEngineer.responsibilities,
      tech: 'typescript · react · nestjs · aws · react native',
      active: true,
    },
    {
      range: '2018 — 2021',
      title: t.experience.positions.leadFrontend.title,
      bullets: t.experience.positions.leadFrontend.responsibilities,
      tech: 'typescript · react · styled-components · react-query · google maps api',
    },
    {
      range: '2020 — 2021',
      title: t.experience.positions.fullStackLead.title,
      bullets: t.experience.positions.fullStackLead.responsibilities,
      tech: 'nestjs · react · aws · typescript',
    },
    {
      range: '2018',
      title: t.experience.positions.frontendDev.title,
      bullets: t.experience.positions.frontendDev.responsibilities,
      tech: 'react · redux · sass · react native',
    },
    {
      range: '2017',
      title: t.experience.positions.intern.title,
      bullets: t.experience.positions.intern.responsibilities,
      tech: 'react · javascript · stripe api',
    },
  ];

  return (
    <section id="track" className="section-padding border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b border-ink-800 pb-4">
          <p className="mono-caps text-xs text-fg-mute">
            02 / {t.nav.track}
          </p>
          <p className="mono text-xs text-fg-mute">{t.track.kicker}</p>
        </div>

        <h2 className="display text-4xl md:text-5xl mb-12">
          GoBolt.{' '}
          <span className="font-light text-fg-dim">2017 — now.</span>
        </h2>

        <div className="relative pl-8 md:pl-12 border-l border-ink-700 space-y-10">
          {roles.map((role) => (
            <div key={role.range + role.title} className="relative">
              <span
                className={`absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-ink-950 ${
                  role.active ? 'bg-accent-500' : 'bg-ink-700'
                }`}
              />
              <div className="flex flex-col md:flex-row md:gap-12">
                <p className="mono text-xs text-fg-mute md:w-32 shrink-0 mb-2 md:mb-0 md:pt-1">
                  {role.range}
                </p>
                <div className="flex-1">
                  <h3 className="text-xl mb-3">{role.title}</h3>
                  <ul className="text-fg-dim text-[15px] space-y-2 leading-relaxed max-w-2xl">
                    {role.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <p className="mono text-[11px] text-fg-mute mt-4">
                    {role.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
