
import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-8 lg:px-16 z-[100] bg-transparent">
        <div 
          className="text-3xl font-black font-serif cursor-pointer tracking-tighter"
          onClick={() => onNavigate('home')}
        >
          HG<span className="text-[#64ffda]">.</span>
        </div>
        
        <div className="flex items-center space-x-12">
          <div className="hidden lg:flex space-x-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[10px] font-mono uppercase tracking-[0.3em] font-black transition-all hover:text-[#64ffda] ${
                  activeSection === item.id ? 'text-[#64ffda]' : 'text-white/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button 
            className="p-3 bg-white text-[#030712] hover:bg-[#64ffda] transition-colors" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Slide-out Menu */}
      <div className={`fixed inset-0 z-[110] flex transition-all duration-700 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        
        <div className={`relative ml-auto h-full w-full max-w-2xl bg-[#030712] border-l border-white/5 p-16 flex flex-col transform transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex justify-between items-center mb-24">
              <span className="text-4xl font-serif font-black tracking-tighter">HG<span className="text-[#64ffda]">.</span></span>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#64ffda] transition-colors"><X size={40} /></button>
           </div>
           
           <div className="flex flex-col space-y-6 flex-grow">
              {NAV_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                  className="group flex items-center text-6xl md:text-7xl font-serif font-black text-white hover:text-[#64ffda] transition-all text-left tracking-tighter"
                >
                  <span className="text-sm font-mono mr-8 opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  {item.label}
                  <ChevronRight size={40} className="ml-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </button>
              ))}
           </div>

           <div className="mt-auto flex flex-col md:flex-row justify-between items-end gap-8 pt-12 border-t border-white/5">
              <div className="space-y-2">
                 <p className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-widest">Get In Touch</p>
                 <a href="mailto:harshgoyal54595@gmail.com" className="text-xl font-bold hover:text-[#64ffda]">harshgoyal54595@gmail.com</a>
              </div>
              <div className="flex space-x-6">
                 <a href="#" className="p-3 border border-white/10 hover:border-[#64ffda] text-white hover:text-[#64ffda] transition-all"><Linkedin size={24} /></a>
                 <a href="#" className="p-3 border border-white/10 hover:border-[#64ffda] text-white hover:text-[#64ffda] transition-all"><Mail size={24} /></a>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
