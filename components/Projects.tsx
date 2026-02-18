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
    <section id="projects" className="py-32 px-6">

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold tracking-tight text-foreground">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mt-4">
          Production-Grade Systems • AI Engineering • Full-Stack Architecture
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-10 rounded-2xl backdrop-blur-xl bg-card border border-border hover:bg-accent/50 shadow-sm transition-all duration-300 flex flex-col"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-6">
              <FolderGit2 className="text-muted-foreground" size={26} />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Github size={22} />
              </a>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              {project.title}
            </h3>

            {/* Role */}
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-[10px] tracking-widest uppercase rounded-md mb-6 border border-border w-fit">
              {project.role}
            </span>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-sm mb-10">
              {project.description}
            </p>

            {/* Tech Stack Inline Buttons */}
            <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-3">
              {project.tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:bg-accent transition text-sm text-secondary-foreground"
                  >
                    <Icon
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
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
