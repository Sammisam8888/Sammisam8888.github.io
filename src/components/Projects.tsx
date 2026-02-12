
import { Github, FolderGit2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI Image Authenticity Detection",
      role: "Core ML Engineer",
      description: "Designed and trained CNN-based classifier to detect AI-generated vs real images. Built preprocessing pipeline, handled adversarial robustness testing, optimized model performance, and implemented training + prediction scripts.",
      tech: ["Python", "PyTorch", "NumPy", "OpenCV", "CNNs"],
      github: "https://github.com/Sammisam8888/ml-hackathon-iitbbs2025"
    },
    {
      title: "Gamified Learning Platform",
      role: "Full-Stack & Architecture Lead",
      description: "Designed offline-first architecture, implemented adaptive learning logic, built mini-games using Flutter + Flame, managed state with Riverpod, and integrated multilingual support for rural education.",
      tech: ["Flutter", "Dart", "Riverpod", "Hive", "Flame Engine"],
      github: "https://github.com/SIH-2025-TEAM-VSSUT/gamified-learning-rural-india"
    },
    {
      title: "Healthcare Prior Authorization System",
      role: "Full-Stack Developer",
      description: "Designed JWT-based authentication system, built REST APIs, created role-based dashboards (Patient/Provider/Admin), implemented MongoDB schema design, and deployed backend + frontend integration.",
      tech: ["Flask", "Python", "MongoDB", "React", "Docker"],
      github: "https://github.com/Sammisam8888/prior-authorisation-final-project"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
         <div className="flex flex-col items-center mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] text-gray-500 uppercase mb-4 text-center">
               FEATURED PROJECTS
            </h2>
            <div className="w-12 h-1 bg-black rounded-full"></div>
         </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-auto">
                <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="text-gray-400 group-hover:text-black transition-colors" size={28} />
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                      <Github size={24} />
                    </a>
                </div>

                <h3 className="text-xl font-bold text-black mb-2 tracking-tight leading-tight group-hover:underline decoration-2 underline-offset-4">
                  {project.title}
                </h3>
                
                <span className="inline-block px-2 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-sm mb-4">
                    {project.role}
                </span>

                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-gray-500 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
