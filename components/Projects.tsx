"use client";

import {
  Github,
  FolderGit2,
} from "lucide-react";

import {
  SiPython,
  SiPytorch,
  SiNumpy,
  SiOpencv,
  SiFlutter,
  SiDart,
  SiReact,
  SiMongodb,
  SiDocker,
  SiFlask,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "AI Image Authenticity Detection",
      role: "Core ML Engineer",
      description:
        "Designed and trained CNN-based classifier to detect AI-generated vs real images. Built preprocessing pipeline, implemented adversarial robustness testing, optimized model performance, and deployed training + inference scripts.",
      tech: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      ],
      github: "https://github.com/Sammisam8888/ml-hackathon-iitbbs2025",
    },
    {
      title: "Gamified Learning Platform",
      role: "Full-Stack & Architecture Lead",
      description:
        "Designed offline-first scalable architecture, implemented adaptive learning algorithms, built game engine integrations using Flutter + Flame, managed state via Riverpod, and deployed multilingual production support.",
      tech: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
      ],
      github:
        "https://github.com/SIH-2025-TEAM-VSSUT/gamified-learning-rural-india",
    },
    {
      title: "Healthcare Prior Authorization System",
      role: "Full-Stack Developer",
      description:
        "Architected JWT-based authentication system, built RESTful APIs, implemented role-based dashboards, optimized MongoDB schema design, and deployed containerized infrastructure.",
      tech: [
        { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ],
      github:
        "https://github.com/Sammisam8888/prior-authorisation-final-project",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="text-white/40 mt-4">
          Production-Grade Systems • AI Engineering • Full-Stack Architecture
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-6">
              <FolderGit2 className="text-white/40" size={26} />

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition"
              >
                <Github size={22} />
              </a>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            {/* Role */}
            <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] tracking-widest uppercase rounded-md mb-6 border border-white/20">
              {project.role}
            </span>

            {/* Description */}
            <p className="text-white/60 leading-relaxed text-sm mb-10">
              {project.description}
            </p>

            {/* Tech Grid (Experience Style) */}
            <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-2 gap-4">

              {project.tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
                  >
                    <Icon
                      className="text-3xl"
                      style={{ color: tech.color }}
                    />
                    <p className="mt-2 text-xs text-white/70 font-medium text-center">
                      {tech.name}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
