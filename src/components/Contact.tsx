
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 bg-white border-t border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start gap-12 mb-24">
           <div>
              <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black mb-8 opacity-90">
                LET'S WORK <br /> <span className="text-gray-400">TOGETHER</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
                Looking for a senior engineer to drive your product forward? I'm ready to contribute.
              </p>
           </div>
           
           <div className="flex flex-col gap-6">
              <a 
                href="mailto:samuelpriyatamxd@gmail.com" 
                className="group flex items-center gap-4 text-2xl md:text-5xl text-black font-medium hover:text-gray-600 transition-colors"
              >
                 samuelpriyatamxd@gmail.com
                 <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-200 gap-8">
           <div className="flex gap-8">
              <a href="https://github.com/Sammisam8888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-black uppercase tracking-wider text-sm transition-colors">
                 <Github size={18} /> Github
              </a>
              <a href="https://www.linkedin.com/in/samuel-priyatam-dash/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-black uppercase tracking-wider text-sm transition-colors">
                 <Linkedin size={18} /> Linkedin
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-black uppercase tracking-wider text-sm transition-colors">
                 <Instagram size={18} /> Instagram
              </a>
           </div>

           <div className="text-gray-500 text-sm font-mono text-center md:text-right">
              <p>&copy; 2026 Samuel Priyatam Dash. All Rights Reserved.</p>
           </div>
        </div>
      </div>
    </footer>
  );
};
