import { useEffect } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Work from '../components/IndieApps';
import Studio from '../components/About';
import Craft from '../components/Skills';
import TrackRecord from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Portfolio() {
  useEffect(() => {
    console.log(
      '%cHi. This site was designed, built, and iterated with Claude Code. — bryan',
      'font-family: ui-monospace, monospace; color: #2A2620; background: #F5F1E8; padding: 8px 14px; border: 1px solid #B8B09B;'
    );
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink-950 text-fg">
        <Header />
        <main>
          <Hero />
          <Studio />
          <TrackRecord />
          <Craft />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
