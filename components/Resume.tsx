
import React, { useState } from 'react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, Languages } from 'lucide-react';

const OrbitalSkills: React.FC = () => {
  const skills = [
    { name: 'Power BI', size: 120, x: 50, y: 50, color: '#3b82f6' },
    { name: 'AWS Cloud', size: 105, x: 22, y: 32, color: '#64ffda' },
    { name: 'SAP MM', size: 90, x: 80, y: 30, color: '#3b82f6' },
    { name: 'Excel / BI', size: 110, x: 75, y: 70, color: '#64ffda' },
    { name: 'Java', size: 85, x: 50, y: 18, color: '#3b82f6' },
    { name: 'Canva', size: 85, x: 50, y: 82, color: '#64ffda' },
    { name: 'Case Writing', size: 95, x: 20, y: 65, color: '#3b82f6' },
    { name: 'Strategic Ops', size: 85, x: 85, y: 55, color: '#64ffda' },
    { name: 'Market Insights', size: 80, x: 15, y: 45, color: '#3b82f6' }
  ];

  return (
    <div className="relative w-full aspect-square glass p-10 overflow-hidden group rounded-3xl border-white/10 shadow-2xl">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="50%" cy="50%" r="25%" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" className="animate-[spin_70s_linear_infinite]" />
          <circle cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="10,10" className="animate-[spin_45s_linear_infinite_reverse]" />
        </svg>
      </div>
      
      {skills.map((skill, i) => (
        <div 
          key={i}
          className="absolute flex items-center justify-center rounded-full transition-all duration-700 cursor-pointer hover:scale-125 border border-white/10 backdrop-blur-xl group/node"
          style={{ 
            width: skill.size, 
            height: skill.size,
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 30px ${skill.color}20`,
            background: `linear-gradient(135deg, ${skill.color}20, transparent)`
          }}
        >
          <div className="text-center px-4">
            <span className="text-[8px] font-mono text-white/40 block mb-1 group-hover/node:text-white/80 transition-colors uppercase font-black">Expertise</span>
            <span className="text-[11px] font-black text-white uppercase tracking-tighter leading-none group-hover/node:text-[#64ffda] transition-colors">{skill.name}</span>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-8 text-left">
        <h4 className="text-[10px] font-mono text-[#64ffda] uppercase tracking-[0.5em] mb-1">Strategic Stack</h4>
        <p className="text-[9px] text-white/30 uppercase tracking-widest font-black">Orbital Mapping v3.0</p>
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('experience');

  return (
    <section id="resume" className="py-24 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 reveal">
          <div className="lg:w-1/2">
            <h2 className="text-[#64ffda] font-mono mb-4 text-xs tracking-[0.5em] uppercase">02. TRAJECTORY</h2>
            <h3 className="text-7xl font-serif font-black leading-none mb-8 tracking-tighter text-white">Professional<br/><span className="text-gradient">Portfolio.</span></h3>
          </div>
          <div className="lg:w-1/2 lg:text-right flex flex-col lg:items-end">
            <p className="text-xl text-white/70 font-light mb-8 max-w-md leading-relaxed">
              Fusing digital architecture with kinetic logistics to build resilient infrastructure.
            </p>
            <div className="flex flex-wrap justify-end gap-3">
              {['experience', 'education', 'certifications'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 text-[10px] font-mono uppercase tracking-[0.2em] font-black border transition-all ${
                    activeCategory === cat ? 'bg-[#64ffda] text-[#030712] border-[#64ffda]' : 'border-white/10 text-white/60 hover:border-[#64ffda] hover:text-[#64ffda]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 reveal delay-200">
            {activeCategory === 'experience' && (
              <div className="space-y-10">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="group relative pl-10 border-l border-white/10 pb-2">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#64ffda] rounded-full scale-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_#64ffda]" />
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h4 className="text-3xl font-serif font-black text-white tracking-tighter group-hover:text-[#64ffda] transition-colors uppercase">{exp.company}</h4>
                        <p className="text-[#3b82f6] font-mono text-xs mt-1 font-bold uppercase tracking-widest">{exp.role}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-white/50 font-mono text-[10px] uppercase tracking-widest">{exp.period}</p>
                        <p className="text-white/40 text-[10px] font-mono">{exp.location}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((item, j) => (
                        <div key={j} className="glass p-5 rounded-xl border-white/10 hover:bg-white/[0.05] transition-all">
                           <p className="text-xs text-white/80 leading-relaxed font-light">
                             <span className="text-[#64ffda] mr-2 opacity-50 font-mono font-black">/</span> {item}
                           </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'education' && (
              <div className="grid grid-cols-1 gap-6">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="glass p-10 group hover:border-[#64ffda]/40 transition-all flex flex-col md:flex-row gap-8 rounded-2xl">
                    <div className="md:w-1/4">
                       <span className="text-[10px] font-mono text-[#64ffda] uppercase tracking-[0.4em] mb-4 block font-black">{edu.period}</span>
                       <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#64ffda] group-hover:bg-[#64ffda] group-hover:text-[#030712] transition-colors">
                          <GraduationCap size={28}/>
                       </div>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-3xl font-serif font-black text-white mb-2 leading-none uppercase tracking-tighter">{edu.institution}</h4>
                      <p className="text-xl text-[#3b82f6] font-bold mb-4 italic tracking-tight">{edu.degree}</p>
                      <p className="text-white/70 leading-relaxed text-sm font-light">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="glass p-6 flex items-center justify-between group hover:bg-[#64ffda]/10 transition-all border-white/10 rounded-xl">
                    <div className="flex items-center">
                       <Award className="text-[#64ffda] mr-4 opacity-50 group-hover:opacity-100 transition-opacity" size={20}/>
                       <span className="text-[11px] font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 reveal delay-400">
             <OrbitalSkills />
             
             <div className="mt-8 glass p-10 bg-gradient-to-br from-blue-500/10 to-transparent border-none rounded-3xl shadow-2xl">
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-[0.5em] mb-8 flex items-center font-black">
                  <Languages size={20} className="mr-3 text-[#64ffda]"/> Linguistic Proficiency
                </h4>
                <div className="space-y-5">
                   <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-lg font-serif font-black text-white uppercase tracking-tighter">English</span>
                      <span className="text-[11px] font-mono text-[#64ffda] font-black uppercase tracking-widest bg-[#64ffda]/10 px-3 py-1 rounded">Fluent</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-lg font-serif font-black text-white uppercase tracking-tighter">Hindi</span>
                      <span className="text-[11px] font-mono text-[#64ffda] font-black uppercase tracking-widest bg-[#64ffda]/10 px-3 py-1 rounded">Native</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-lg font-serif font-black text-white uppercase tracking-tighter">Spanish</span>
                      <span className="text-[11px] font-mono text-blue-400 font-black uppercase tracking-widest bg-blue-400/10 px-3 py-1 rounded">Learning</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
