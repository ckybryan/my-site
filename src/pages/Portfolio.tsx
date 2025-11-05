import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import IndieApps from '../components/IndieApps';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '../components/About';

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <IndieApps />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
