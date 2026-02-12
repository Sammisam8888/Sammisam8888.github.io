
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-8">ABOUT ME</h2>
        
        <p className="text-2xl md:text-4xl font-normal leading-relaxed text-gray-900 mb-12">
          I'm a Full-Stack Developer with a passion for building scalable, data-driven applications. My professional journey spans across <span className="font-bold border-b-2 border-black">Cloud Infrastructure</span>, <span className="font-bold border-b-2 border-black">AI/ML integration</span>, and <span className="font-bold border-b-2 border-black">DevOps automation</span>. I thrive in challenging environments where I can leverage technology to solve real-world problems.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
           <div className="space-y-2 p-6 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-black">Problem Solver</h3>
              <p className="text-sm text-gray-600">Approaching challenges with analytical depth and innovative thinking.</p>
           </div>
           <div className="space-y-2 p-6 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-black">Tech Enthusiast</h3>
              <p className="text-sm text-gray-600">Constantly exploring new technologies to stay ahead of the curve.</p>
           </div>
           <div className="space-y-2 p-6 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-black">Team Player</h3>
              <p className="text-sm text-gray-600">Collaborating effectively to deliver high-quality software solutions.</p>
           </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
             <div className="flex flex-col md:flex-row justify-between gap-8">
                 <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">EDUCATION</h4>
                    <p className="text-black font-bold text-lg">Veer Surendra Sai University of Technology (VSSUT)</p>
                    <p className="text-gray-600 text-sm">B.Tech in Computer Science & Engineering</p>
                    <p className="text-gray-500 text-xs mt-1 font-mono">2023 - 2027 | CGPA: 8.38</p>
                 </div>
                 <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">CONTACT</h4>
                    <p className="text-black font-bold text-lg hover:underline">
                      <a href="mailto:samuelpriyatamxd@gmail.com">samuelpriyatamxd@gmail.com</a>
                    </p>
                    <p className="text-gray-600 text-sm">+91 9337903728</p>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};
