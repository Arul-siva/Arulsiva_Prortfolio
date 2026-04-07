import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientCarousel from './components/ClientCarousel';
import Specialization from './components/Specialization';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import CursorFollower from './components/CursorFollower';
import RainEffect from './components/RainEffect';
import ProjectDetails from './pages/ProjectDetails';
import SplashCursor from './components/SplashCursor';


function ScrollToSection() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.slice(1);

    window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (!section) {
        return;
      }

      const top = section.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen  text-white font-sans selection:bg-accent selection:text-primary  relative">
      <RainEffect />
      <SplashCursor />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={
          <main className="relative z-10">
            <Navbar />
            <Hero />
            <ClientCarousel />
            <Specialization />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <FAQ />
            <Contact />
            
            <footer className="py-10 text-center text-gray-500 text-sm  border-t border-gray-800">
              <div className="container mx-auto px-6">
                <div className="  items-center gap-4">
                  <p>© {new Date().getFullYear()} Arulsiva. All rights reserved.</p>
                  <div className="flex gap-6">
                    {/* <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
                    <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a> */}
                  </div>
                </div>
              </div>
            </footer>
          </main>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
