import { ExternalLink, Sparkles } from 'lucide-react';

type App = {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  ctaLabel: string;
};

const apps: App[] = [
  {
    name: 'PetCrew',
    emoji: '🐾',
    tagline: 'Pet care, shared with family',
    description:
      'Smart pet care companion for tracking feeding schedules and sharing care with the whole family.',
    stack: ['iOS', 'Swift', 'Firebase'],
    href: 'https://bryanstudio.dev/petcrew',
    ctaLabel: 'Explore PetCrew',
  },
  {
    name: 'SnapSell',
    emoji: '📸',
    tagline: 'Snap a photo, sell it',
    description:
      'AI-generated marketplace listings tailored for Facebook, eBay, Etsy, and Amazon — in seconds.',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    href: 'https://snap-sell.com',
    ctaLabel: 'Try SnapSell',
  },
];

const IndieApps: React.FC = () => {
  return (
    <section id="indie-apps" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Indie Development
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Apps for Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond my day job, I run{' '}
            <span className="font-semibold text-primary-600">Bryan Studio</span> — crafting
            delightful apps across iOS and the web that solve everyday problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.name}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 text-3xl border border-gray-100">
                  {app.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                  <p className="text-sm text-gray-500">{app.tagline}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 flex-1">{app.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {app.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all"
              >
                <span>{app.ctaLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://bryanstudio.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <span>Visit Bryan Studio</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndieApps;
