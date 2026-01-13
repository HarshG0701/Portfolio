
import React, { useEffect, useState } from 'react';
import { ExternalLink, Users, Eye, Layers, Zap, ArrowRight } from 'lucide-react';

const BlueprintDataFlow: React.FC = () => {
  const [nodes, setNodes] = useState<{x: number, y: number, delay: number}[]>([]);

  useEffect(() => {
    const newNodes = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
      {nodes.map((node, i) => (
        <div key={i} 
             className="absolute w-1.5 h-1.5 bg-[#64ffda] rounded-full animate-pulse shadow-[0_0_15px_#64ffda]"
             style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${node.delay}s` }} />
      ))}
      <svg width="100%" height="100%" className="absolute inset-0">
        <path d="M 0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="#64ffda" strokeWidth="0.5" strokeDasharray="8,8" className="animate-[dash_25s_linear_infinite]" />
        <path d="M 100 0 Q 150 250 100 500 T 100 1000" fill="none" stroke="#64ffda" strokeWidth="0.5" strokeDasharray="8,8" className="animate-[dash_18s_linear_infinite_reverse]" />
      </svg>
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 2000; }
        }
      `}</style>
    </div>
  );
};

const BusinessDeconstructed: React.FC = () => {
  const posts = [
    { 
      title: "2025 Strategy Report Card", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", 
      type: "Annual Analysis", 
      stat: "Zomato vs Zepto",
      desc: "Ranking the strategic victors and long-game players in the Indian ecosystem."
    },
    { 
      title: "The 8.2% Illusion", 
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800", 
      type: "GDP Deep-Dive", 
      stat: "Structural Resilience",
      desc: "Analyzing why growth numbers might hide infrastructure fragilities."
    },
    { 
      title: "The CRED Problem", 
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800", 
      type: "Fintech Teardown", 
      stat: "Monetization Audit",
      desc: "Dissecting the high-CAC model of India's elite fintech platform."
    },
  ];

  return (
    <section id="business" className="py-24 px-6 blueprint relative overflow-hidden bg-[#030712]">
      <BlueprintDataFlow />
      
      {/* Background Graphic: Giant Icon */}
      <div className="absolute top-[-10%] right-[-10%] p-20 opacity-[0.03] pointer-events-none rotate-12">
         <Layers size={600} strokeWidth={0.2} className="text-[#64ffda]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 reveal">
            <div className="inline-flex items-center px-5 py-2 border-2 border-[#64ffda]/30 text-[#64ffda] text-[10px] font-mono uppercase tracking-[0.4em] mb-8 font-black bg-[#64ffda]/5 rounded-full">
              <Zap size={14} className="mr-2 animate-bounce" /> Thought Leadership
            </div>
            <h3 className="text-7xl lg:text-8xl font-serif font-black text-white mb-8 italic leading-[0.9] tracking-tighter">
              Business <br/><span className="text-gradient">Deconstructed.</span>
            </h3>
            <p className="text-2xl text-[#64ffda] font-serif italic mb-10 leading-snug">
              "Investigating the How and Why behind the kinetic mechanics of global commerce."
            </p>
            <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-xl font-light">
              Cracking open the geode of business complexity. Dissecting marketing, operations, and financial infrastructure with force and focus. 
            </p>

            <div className="grid grid-cols-2 gap-10 mb-14">
               <div className="border-l-4 border-l-[#64ffda] pl-8">
                 <div className="flex items-center text-4xl font-serif font-black text-white mb-1">252<span className="text-[#64ffda]">+</span></div>
                 <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black">Strategic Followers</span>
               </div>
               <div className="border-l-4 border-l-blue-500 pl-8">
                 <div className="flex items-center text-4xl font-serif font-black text-white mb-1">31K<span className="text-blue-500">+</span></div>
                 <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black">Thought Reach</span>
               </div>
            </div>

            <a 
              href="https://linkedin.com/in/harsh-g-908bb0205" 
              target="_blank" 
              className="group inline-flex items-center space-x-6 px-10 py-5 bg-white text-[#030712] font-black uppercase tracking-[0.2em] text-sm hover:bg-[#64ffda] transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <span>Explore Strategy Session</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-8 reveal delay-300">
            {posts.map((post, i) => (
              <div key={i} className="glass p-6 group cursor-pointer hover:border-[#64ffda]/40 transition-all flex gap-8 rounded-2xl relative overflow-hidden">
                <div className="w-48 h-36 shrink-0 overflow-hidden rounded-xl bg-black/40 border border-white/5">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-mono text-[#64ffda] uppercase tracking-[0.4em] mb-3 font-black">{post.type}</span>
                  <h4 className="text-2xl font-serif font-black text-white mb-2 leading-none group-hover:text-[#64ffda] transition-colors">{post.title}</h4>
                  <p className="text-sm text-white/40 mb-3 font-medium uppercase tracking-widest">{post.stat}</p>
                  <p className="text-xs text-white/50 leading-relaxed font-light line-clamp-2">{post.desc}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} className="text-[#64ffda]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDeconstructed;
