import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#057834]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg text-[#057834]">TrueMinds Innovations</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#057834]">Services</a>
            <a href="#projects" className="hover:text-[#057834]">Projects</a>
            <a href="#contact" className="hover:text-[#057834]">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center bg-[#057834] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#046a2f]">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <Stats />
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Contact />
      </main>

      <footer className="bg-[#024F7A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} TrueMinds Innovations Ltd. All rights reserved.</p>
          <div className="text-sm opacity-90">We empower businesses with secure, scalable technology.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
