import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden pt-20">

      <div
        ref={ref}
        className={`container px-4 mx-auto grid lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="lg:col-span-8 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-gray-600 tracking-wider">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-black">
            BUILDING <br />
            SCALABLE <br />
            SOLUTIONS
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-normal">
            <span className="font-semibold text-black">Senior Full-stack Engineer</span> specializing in high-performance web applications, cloud infrastructure, and AI/ML integrations.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-black text-white font-bold tracking-wide hover:bg-gray-800 transition-colors flex items-center gap-2 rounded-md"
            >
              VIEW WORK <ArrowRight size={20} />
            </a>
            <a
              href="https://tinyurl.com/samuel-priyatam-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black text-black font-bold tracking-wide hover:bg-gray-50 transition-colors rounded-md flex items-center gap-2"
            >
              <FileText size={20} /> RESUME
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://github.com/Sammisam8888" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/samuel-priyatam-dash/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:samuelpriyatamxd@gmail.com" className="text-gray-500 hover:text-black transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 relative flex justify-center lg:justify-end hidden md:flex">
          <div className="relative w-72 h-96 transition-all duration-700 ease-in-out group hover:scale-[1.02]">
            <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 rounded-xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img
              src="/profile-picture-iit-kgp.jpg"
              alt="Samuel Priyatam Dash"
              className="w-full h-full object-cover relative z-10 rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
