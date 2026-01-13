
import React from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBusiness = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('business');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="contact" className="pt-32 pb-16 px-6 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32 reveal">
          <div className="lg:w-2/3">
            <h2 className="text-[#64ffda] font-mono mb-4 text-sm tracking-[0.3em]">03. NEXT STEPS</h2>
            <h3 className="text-6xl lg:text-8xl font-serif font-black mb-12">Let's build the <br/><span className="text-gradient">future corridor.</span></h3>
            <p className="text-2xl text-[#9ca3af] max-w-2xl leading-relaxed mb-12">
              Seeking strategic opportunities in port operations and maritime strategy. Let's deconstruct complexity together.
            </p>
            
            <div className="flex flex-wrap gap-12">
               <a href="mailto:harshgoyal54595@gmail.com" className="group">
                  <span className="text-xs font-mono text-[#64ffda] uppercase block mb-2 tracking-widest">Write</span>
                  <span className="text-3xl font-bold text-white flex items-center group-hover:text-[#64ffda] transition-colors">
                    Email <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
               </a>
               <a href="https://linkedin.com/in/harsh-g-908bb0205" target="_blank" className="group">
                  <span className="text-xs font-mono text-[#64ffda] uppercase block mb-2 tracking-widest">Connect</span>
                  <span className="text-3xl font-bold text-white flex items-center group-hover:text-[#64ffda] transition-colors">
                    LinkedIn <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
               </a>
            </div>
          </div>
          
          <div className="lg:w-1/3 flex flex-col items-end">
             <div className="glass p-10 w-full text-right border-blue-500/20">
                <p className="text-[#64ffda] font-mono text-sm mb-4 tracking-widest">LOCATION</p>
                <p className="text-2xl font-bold text-white">Dehradun / Noida</p>
                <p className="text-[#9ca3af] mt-1">India (Global Operations)</p>
                <div className="h-[2px] w-full bg-white/5 my-8"></div>
                <p className="text-[#64ffda] font-mono text-sm mb-4 tracking-widest">PHONE</p>
                <p className="text-2xl font-bold text-white">+91 9068292103</p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-[#9ca3af] text-[10px] font-mono uppercase tracking-[0.3em]">
           <p>© 2026 HARSH GOYAL. MARITIME STRATEGY & TECHNOLOGY.</p>
           <div className="flex space-x-12 mt-6 md:mt-0">
              <a href="#home" onClick={scrollToTop} className="hover:text-white transition-colors">BACK TO TOP</a>
              <a href="#business" onClick={scrollToBusiness} className="hover:text-white transition-colors">DECONSTRUCTED BRAND</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
