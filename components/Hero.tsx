
import React, { useState, useEffect, useRef } from 'react';
import { METRICS } from '../constants';
import { Cpu, Ship, Layers, ShieldCheck, Target, Globe } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value.toString());
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const languages = ["Welcome", "Hola", "नमस्ते", "Bienvenido"];
  const [langIndex, setLangIndex] = useState(0);
  const [isHoveringCube, setIsHoveringCube] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 10, 
        y: (e.clientY / window.innerHeight - 0.5) * 10 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [languages.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-12 bg-transparent">
      {/* Background Media - Made subtler to show fluid background */}
      <div className="absolute inset-0 -z-20 scale-105 pointer-events-none" 
           style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale transition-transform duration-500"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-large-cargo-ship-leaving-the-port-41619-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]" />
      </div>

      {/* Decorative Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center -z-10 select-none pointer-events-none overflow-hidden">
        <div className="bg-text-outline text-[18vw] opacity-[0.03] leading-none tracking-tighter uppercase font-black">MARITIME</div>
        <div className="bg-text-outline text-[18vw] opacity-[0.03] leading-none tracking-tighter text-right w-full font-black">LOGISTICS</div>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 z-10 pt-12">
        <div className="lg:w-3/5 text-left">
          <div className="flex items-center space-x-6 mb-8 reveal">
             <span className="text-[#64ffda] font-mono text-sm tracking-[0.5em] uppercase flex items-center">
               <span className="inline-block w-8 h-[1px] bg-[#64ffda] mr-4"></span>
               {languages[langIndex]} / Supply Chain Strategist
             </span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-serif font-black mb-8 leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl">
            Harsh <br/><span className="text-gradient">Goyal</span>
          </h1>

          <div className="max-w-xl reveal delay-200">
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed mb-10 border-l-2 border-[#64ffda] pl-8">
              Strategizing at the intersection of <span className="text-[#64ffda] font-bold">Maritime Assets</span>, <span className="text-[#3b82f6] font-bold">Infrastructure</span>, and <span className="text-white font-bold italic underline">Cloud Tech</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 reveal delay-400">
            <button 
              onClick={() => onNavigate('business')}
              className="group relative px-10 py-5 overflow-hidden bg-[#64ffda] text-[#030712] font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all hover:shadow-[0_0_40px_rgba(100,255,218,0.5)]"
            >
              <span className="relative z-10">Deconstruct Business</span>
              <div className="absolute inset-0 translate-y-full bg-white transition-transform group-hover:translate-y-0 duration-300"></div>
            </button>
            <button 
              onClick={() => onNavigate('resume')}
              className="px-10 py-5 border-2 border-white/30 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-[#030712] transition-all hover:border-white"
            >
              View Trajectory
            </button>
          </div>
        </div>

        {/* 3D Cube - Refined Glowing Effect */}
        <div className="lg:w-2/5 flex justify-center reveal items-center">
           <div className="relative group" 
                onMouseEnter={() => setIsHoveringCube(true)}
                onMouseLeave={() => setIsHoveringCube(false)}>
              <div className={`absolute -inset-20 bg-gradient-to-r from-[#64ffda] to-[#3b82f6] blur-[150px] rounded-full transition-all duration-1000 ${isHoveringCube ? 'opacity-30 scale-125' : 'opacity-10 scale-100'}`}></div>
              
              <div className={`cube-container scale-100 lg:scale-125 transition-transform duration-1000 ${isHoveringCube ? 'rotate-[-15deg] scale-110' : 'rotate-0'}`}>
                <div className="cube" style={{ animationDuration: isHoveringCube ? '60s' : '15s', animationPlayState: 'running' }}>
                  <div className="cube-face front border-2 border-[#64ffda] bg-[#0a192f]/95 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(100,255,218,0.2)]">
                    <span className="text-[10px] font-mono mb-2 opacity-40 uppercase tracking-widest text-white">AWS</span>
                    <Cpu size={36} className="text-[#64ffda] drop-shadow-[0_0_15px_#64ffda]" />
                  </div>
                  <div className="cube-face back border-2 border-blue-500 bg-[#0a192f]/95 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(59,130,246,0.2)]">
                    <span className="text-[10px] font-mono mb-2 opacity-40 uppercase tracking-widest text-white">PORT</span>
                    <Ship size={36} className="text-blue-500 drop-shadow-[0_0_15px_#3b82f6]" />
                  </div>
                  <div className="cube-face right border-2 border-[#64ffda] bg-[#0a192f]/95 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(100,255,218,0.2)]">
                    <span className="text-[10px] font-mono mb-2 opacity-40 uppercase tracking-widest text-white">SAP</span>
                    <Layers size={36} className="text-[#64ffda] drop-shadow-[0_0_15px_#64ffda]" />
                  </div>
                  <div className="cube-face left border-2 border-blue-500 bg-[#0a192f]/95 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(59,130,246,0.2)]">
                    <span className="text-[10px] font-mono mb-2 opacity-40 uppercase tracking-widest text-white">SEC</span>
                    <ShieldCheck size={36} className="text-blue-500 drop-shadow-[0_0_15px_#3b82f6]" />
                  </div>
                  <div className="cube-face top border-2 border-[#64ffda] bg-[#0a192f]/95 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(100,255,218,0.2)]">
                    <span className="text-[10px] font-mono mb-2 opacity-40 uppercase tracking-widest text-white">BI</span>
                    <Target size={36} className="text-[#64ffda] drop-shadow-[0_0_15px_#64ffda]" />
                  </div>
                  <div className="cube-face bottom border-2 border-blue-500 bg-[#0a192f]/95 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(59,130,246,0.2)]">
                    <span className="text-[10px] font-mono mb-2 opacity-40 uppercase tracking-widest text-white">GLOBAL</span>
                    <Globe size={36} className="text-blue-500 drop-shadow-[0_0_15px_#3b82f6]" />
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-1 reveal delay-700">
        {METRICS.map((metric, i) => (
          <div key={i} className="glass p-12 group border-white/5 hover:bg-white/[0.08] transition-all relative overflow-hidden rounded-xl">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
               {metric.icon}
            </div>
            <div className="text-6xl font-black text-white mb-2 font-serif">
              <Counter value={parseInt(metric.value)} suffix={metric.suffix} />
            </div>
            <div className="text-[#64ffda] font-mono text-[10px] uppercase tracking-[0.5em] font-black opacity-90">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
