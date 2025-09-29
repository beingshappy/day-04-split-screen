import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MobileMenu from './components/MobileMenu';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-6 left-6 z-40 lg:hidden w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors duration-200"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
      </MobileMenu>

      {/* Desktop Layout */}
      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
        </div>

        {/* Main Content */}
        <main className="lg:ml-80 flex-1 min-h-screen">
          <div className="px-6 lg:px-12">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
          
          {/* Footer */}
          <footer className="bg-slate-900 text-white py-8 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-300">
                © 2024 Alex Rivera. Designed & developed with ❤️ using React and Tailwind CSS.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;