import { useLanguage } from '../contexts/LanguageContext';

const Craft: React.FC = () => {
  const { t } = useLanguage();

  const ai: { label: string; body: string }[] = [
    { label: 'claude code', body: t.craft.ai.claudeCode },
    { label: 'subagents', body: t.craft.ai.subagents },
    { label: 'agent teams', body: t.craft.ai.agentTeams },
    { label: 'custom skills', body: t.craft.ai.skills },
    { label: 'mcp integrations', body: t.craft.ai.mcp },
    { label: 'slash commands', body: t.craft.ai.slashCommands },
    { label: 'anthropic sdk', body: t.craft.ai.anthropicSdk },
  ];

  return (
    <section id="craft" className="section-padding border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 border-b border-ink-800 pb-4">
          <p className="mono-caps text-xs text-fg-mute">03 / {t.nav.craft}</p>
          <p className="mono text-xs text-fg-mute">{t.craft.kicker}</p>
        </div>

        <div className="border border-ink-800 bg-ink-900/50 mb-16 overflow-hidden">
          <div className="mono text-xs text-fg-mute px-5 py-3 border-b border-ink-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink-700" />
            <span className="w-2 h-2 rounded-full bg-ink-700" />
            <span className="w-2 h-2 rounded-full bg-ink-700" />
            <span className="ml-3">~ bryan.wtf / craft</span>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="display text-4xl md:text-5xl mb-3">
              {t.craft.aiTitle}
            </h2>
            <p className="text-fg-dim mb-10 max-w-2xl text-[17px] leading-relaxed">
              {t.craft.aiIntro}
            </p>

            <ul className="mono text-sm space-y-3">
              {ai.map((item) => (
                <li key={item.label} className="flex flex-col md:flex-row md:gap-6">
                  <span className="text-accent-500 md:w-44 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-fg-dim">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mono text-[13px]">
          <div>
            <p className="mono-caps text-xs text-fg-mute mb-4">
              {t.craft.categories.frontend}
            </p>
            <p className="text-fg-dim leading-[2]">
              react · typescript · next.js · react native · tailwind · react query · redux · styled-components
            </p>
          </div>
          <div>
            <p className="mono-caps text-xs text-fg-mute mb-4">
              {t.craft.categories.backend}
            </p>
            <p className="text-fg-dim leading-[2]">
              node.js · nestjs · express · rest apis · postgres · drizzle · aws lambda · swift
            </p>
          </div>
          <div>
            <p className="mono-caps text-xs text-fg-mute mb-4">
              {t.craft.categories.infra}
            </p>
            <p className="text-fg-dim leading-[2]">
              git · aws · railway · vercel · cloudflare · ci/cd · observability · team leadership
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;
