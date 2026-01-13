
import React from 'react';
import { EXPERTISE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-[#030712] via-[#0a192f] to-[#0a192f] overflow-hidden">
      {/* Background Graphic: Subtler GIS Grid Lines */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.2) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 reveal">
            <h2 className="text-[#64ffda] font-mono mb-6 text-xs tracking-[0.5em] uppercase">01. PHILOSOPHY</h2>
            <h3 className="text-6xl md:text-8xl font-serif font-black mb-10 leading-[0.9] tracking-tighter text-white">
              The Hybrid <br/><span className="text-gradient">Advantage.</span>
            </h3>
            
            <div className="space-y-6 text-xl text-white/80 font-light leading-relaxed">
              <p>
                Professional identity rooted in a <span className="text-white font-bold underline decoration-[#64ffda]">deliberate transition</span>. From the logical rigor of <span className="text-white font-bold italic">Cloud Engineering</span> to the kinetic complexity of <span className="text-white font-bold">Maritime Supply Chain Strategy</span>.
              </p>
              <p>
                Leveraging <span className="text-white font-bold uppercase tracking-tighter">AWS Infrastructure</span> and <span className="text-[#64ffda] font-bold">Power BI</span> to visualize bottlenecks and design resilient global corridors.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4">
              <div className="glass p-8 group hover:bg-[#3b82f6]/15 transition-colors border-l-4 border-l-[#3b82f6]">
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">Short-Term Goal</h4>
                <p className="text-lg font-bold text-white">Drive maritime procurement innovation through strategic supply chain leadership.</p>
              </div>
              <div className="glass p-8 group hover:bg-[#64ffda]/15 transition-colors border-l-4 border-l-[#64ffda]">
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">Long-Term Goal</h4>
                <p className="text-lg font-bold text-white">Modernize Indian trade infrastructure via high-tech operational deconstruction.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 reveal delay-400">
            {EXPERTISE.map((item, i) => (
              <div 
                key={i} 
                className="glass p-8 group hover:translate-y-[-8px] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-white/10 relative overflow-hidden"
              >
                <div className="absolute -bottom-12 -right-12 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                   {React.cloneElement(item.icon as React.ReactElement, { size: 140 })}
                </div>
                <div className="text-[#64ffda] mb-4 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#64ffda] group-hover:text-[#030712] transition-colors shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-2 tracking-tighter uppercase">{item.title}</h4>
                <p className="text-white/70 leading-relaxed text-sm group-hover:text-white/90 transition-colors">{item.desc}</p>
              </div>
            ))}

            <div className="md:col-span-2 glass p-10 mt-4 bg-gradient-to-r from-blue-500/10 to-transparent border-none">
               <p className="text-3xl font-serif font-black italic text-white leading-tight">
                 "Cracking the complexity of infrastructure. Investigating the 'How' and 'Why' of commerce."
               </p>
               <div className="mt-6 flex items-center space-x-4">
                  <div className="h-[1px] w-12 bg-[#64ffda]"></div>
                  <span className="font-mono text-[10px] text-[#64ffda] uppercase tracking-[0.5em]">Strategic Vision</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;