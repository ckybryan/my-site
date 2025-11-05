import { ExternalLink, Smartphone } from 'lucide-react';

const IndieApps: React.FC = () => {
  return (
    <section id="indie-apps" className="bg-gradient-to-br from-purple-50 to-pink-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Smartphone className="w-4 h-4" />
            Indie Development
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Apps for Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond my day job, I run{' '}
            <span className="font-semibold text-purple-600">Bryan Studio</span> —
            my indie app business focused on creating delightful mobile experiences that solve everyday problems.
          </p>
        </div>

        {/* Bryan Studio Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              {/* Left side - gradient background */}
              <div className="md:w-2/5 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bryan Studio</h3>
                  <p className="text-purple-100 text-sm">Indie App Development</p>
                </div>
              </div>

              {/* Right side - content */}
              <div className="md:w-3/5 p-8">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Apps That Make Life Easier
                  </h4>
                  <p className="text-gray-600 mb-4">
                    I'm building a portfolio of iOS apps that solve real problems with beautiful,
                    intuitive design. Each app is crafted with care, from concept to App Store.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-2xl">🐾</div>
                      <div>
                        <p className="font-semibold text-gray-900">PetCrew</p>
                        <p className="text-sm text-gray-600">
                          Smart pet care companion for tracking feeding schedules and family sharing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400">
                      <div className="mt-1 text-2xl">✨</div>
                      <div>
                        <p className="font-semibold">More apps coming soon...</p>
                        <p className="text-sm">Stay tuned for new releases</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://bryanstudio.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <span>View All Apps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://bryanstudio.dev/petcrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-200 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <span>Explore PetCrew</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-3">Built with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React Native', 'TypeScript', 'iOS', 'Swift', 'Firebase'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndieApps;
