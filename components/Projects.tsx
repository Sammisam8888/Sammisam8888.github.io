"use client";

import { Github, FolderGit2 } from "lucide-react";

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
        { name: "Python", icon: SiPython },
        { name: "PyTorch", icon: SiPytorch },
        { name: "NumPy", icon: SiNumpy },
        { name: "OpenCV", icon: SiOpencv },
      ],
      github: "https://github.com/Sammisam8888/ml-hackathon-iitbbs2025",
    },
    {
      title: "Gamified Learning Platform",
      role: "Full-Stack & Architecture Lead",
      description:
        "Designed offline-first scalable architecture, implemented adaptive learning algorithms, built game engine integrations using Flutter + Flame, managed state via Riverpod, and deployed multilingual production support.",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart },
        { name: "React", icon: SiReact },
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
        { name: "Flask", icon: SiFlask },
        { name: "Python", icon: SiPython },
        { name: "MongoDB", icon: SiMongodb },
        { name: "React", icon: SiReact },
        { name: "Docker", icon: SiDocker },
      ],
      github:
        "https://github.com/Sammisam8888/prior-authorisation-final-project",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">

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
            className="group p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col"
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
            <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] tracking-widest uppercase rounded-md mb-6 border border-white/20 w-fit">
              {project.role}
            </span>

            {/* Description */}
            <p className="text-white/60 leading-relaxed text-sm mb-10">
              {project.description}
            </p>

            {/* Tech Stack Inline Buttons */}
            <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-3">

              {project.tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm text-white/80"
                  >
                    <Icon className="text-lg" />
                    <span>{tech.name}</span>
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
