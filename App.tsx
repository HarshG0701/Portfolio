
import React, { useState, useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import BusinessDeconstructed from './components/BusinessDeconstructed';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'business', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Resume />
        <BusinessDeconstructed />
        <Contact />
      </main>

      {/* Floating social bar (Desktop) */}
      <div className="fixed bottom-0 left-12 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-[#8892b0] after:mt-4">
        <a href="https://linkedin.com/in/harsh-g-908bb0205" target="_blank" className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all"><Linkedin size={20} /></a>
        <a href="mailto:harshgoyal54595@gmail.com" className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all"><Mail size={20} /></a>
      </div>
      
      <div className="fixed bottom-0 right-12 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-[#8892b0] after:mt-4">
        <span className="text-[#8892b0] font-mono text-xs [writing-mode:vertical-lr] tracking-[0.2em] mb-4 hover:text-[#64ffda] cursor-pointer" onClick={() => handleNavigate('contact')}>
          harshgoyal54595@gmail.com
        </span>
      </div>
    </div>
  );
};

export default App;
