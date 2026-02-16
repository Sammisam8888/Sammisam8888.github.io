"use client";

import { Github, FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Image Authenticity Detection",
      role: "Core ML Engineer",
      description:
        "Designed and trained CNN-based classifier to detect AI-generated vs real images. Built preprocessing pipeline, implemented adversarial robustness testing, optimized model performance, and deployed training + inference scripts.",
      tech: ["Python", "PyTorch", "NumPy", "OpenCV", "CNN Architecture"],
      github: "https://github.com/Sammisam8888/ml-hackathon-iitbbs2025",
    },
    {
      title: "Gamified Learning Platform",
      role: "Full-Stack & Architecture Lead",
      description:
        "Designed offline-first scalable architecture, implemented adaptive learning algorithms, built game engine integrations using Flutter + Flame, managed state via Riverpod, and deployed multilingual production support.",
      tech: ["Flutter", "Dart", "Riverpod", "Hive", "Flame Engine"],
      github:
        "https://github.com/SIH-2025-TEAM-VSSUT/gamified-learning-rural-india",
    },
    {
      title: "Healthcare Prior Authorization System",
      role: "Full-Stack Developer",
      description:
        "Architected JWT-based authentication system, built RESTful APIs, implemented role-based dashboards (Patient/Provider/Admin), optimized MongoDB schema design, and deployed containerized full-stack infrastructure.",
      tech: ["Flask", "Python", "MongoDB", "React", "Docker"],
      github:
        "https://github.com/Sammisam8888/prior-authorisation-final-project",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4">
          Production-Grade Systems • AI Engineering • Full-Stack Architecture
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Top Icons */}
            <div className="flex justify-between items-center mb-6">
              <FolderGit2 className="text-white/40 group-hover:text-white transition-colors" size={28} />

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-white">
              {project.title}
            </h3>

            {/* Role Badge */}
            <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] tracking-widest uppercase rounded-md mb-6 border border-white/20">
              {project.role}
            </span>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm mb-8">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
