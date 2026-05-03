import { useLanguage } from '../contexts/LanguageContext';

const Studio: React.FC = () => {
  const { t } = useLanguage();

  const facts: { label: string; value: string }[] = [
    { label: t.studio.facts.basedLabel, value: t.studio.facts.basedValue },
    { label: t.studio.facts.dayJobLabel, value: t.studio.facts.dayJobValue },
    { label: t.studio.facts.studioLabel, value: t.studio.facts.studioValue },
    {
      label: t.studio.facts.educationLabel,
      value: t.studio.facts.educationValue,
    },
    {
      label: t.studio.facts.offKeysLabel,
      value: t.studio.facts.offKeysValue,
    },
  ];

  return (
    <section id="about" className="section-padding border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b border-ink-800 pb-4">
          <p className="mono-caps text-xs text-fg-mute">01 / {t.nav.about}</p>
          <p className="mono text-xs text-fg-mute">{t.studio.kicker}</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="display text-3xl md:text-4xl leading-[1.2] text-fg mb-8">
              <span className="text-fg-mute">"</span>
              {t.studio.pullQuote}
              <span className="text-fg-mute">"</span>
            </p>
            <p className="text-fg-dim leading-relaxed text-[17px] max-w-prose">
              {t.studio.bio}
            </p>
          </div>
          <div className="md:col-span-5 mono text-[13px]">
            <dl className="space-y-3">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex gap-6 ${
                    i < facts.length - 1 ? 'border-b border-ink-800 pb-3' : ''
                  }`}
                >
                  <dt className="text-fg-mute w-28 shrink-0 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
