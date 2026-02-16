"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiDjango,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiAmazon,
  SiNextdotjs,
  SiAngular,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiFlutter,
  SiOpenai,
  SiWhatsapp,
} from "react-icons/si";

const experiences = [
  {
    id: "exp1",
    dateLabel: "Aug 2025 - Dec 2025",
    role: "Lead SDE (Full-Stack & DevOps)",
    company: "OPM Corporation",
    statement:
      "Architected and deployed scalable full-stack production systems across cloud-native infrastructure, leading engineering decisions that improved backend performance by 45% while optimizing operational complexity.",
    metric: "45%",
    tech: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "WhatsApp API", icon: SiWhatsapp, color: "#25D366" },
    ],
  },
  {
    id: "exp2",
    dateLabel: "Jul 2025 - Aug 2025",
    role: "AI Full-Stack Engineer",
    company: "WNS Global Services",
    statement:
      "Built scalable AI-driven production systems integrating LLM pipelines into full-stack architectures with automated CI/CD and secure authentication layers.",
    metric: "100%",
    tech: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    id: "exp3",
    dateLabel: "May 2025 - Jul 2025",
    role: "Cloud Platform Developer",
    company: "Inovaare Clouds",
    statement:
      "Engineered serverless cloud-native automation systems leveraging AWS infrastructure for scalable enterprise-grade workflow optimization.",
    metric: "40%",
    tech: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    id: "exp4",
    dateLabel: "Jan 2025 - Mar 2025",
    role: "Backend Engineer",
    company: "Codecis AI",
    statement:
      "Developed containerized production-grade backend systems with optimized database pipelines and multi-cloud deployment architecture.",
    metric: "30%",
    tech: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
];

export default function ExperienceTimeline() {
  const [active, setActive] = useState("exp1");
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    Object.values(refs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = refs.current[id];
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 2 +
      element.offsetHeight / 2;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-32 px-6 relative">

      <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-20">

        {/* CENTERED STICKY TIMELINE */}
        <div className="relative">
          <div className="sticky top-1/2 -translate-y-1/2 space-y-5">

            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => scrollToSection(exp.id)}
                className={`w-full px-5 py-3 rounded-xl backdrop-blur-xl border border-white/10 transition ${
                  active === exp.id
                    ? "bg-white/10 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {exp.dateLabel}
              </button>
            ))}

          </div>
        </div>

        {/* EXPERIENCE CONTENT */}
        <div className="relative">

          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10" />

          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              ref={(el) => (refs.current[exp.id] = el)}
              className="relative pl-20 mb-32"
            >

              <div className="absolute left-5 top-8 w-5 h-5 bg-white rounded-full" />

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-2xl shadow-xl relative">

                <div className="absolute right-10 top-8 text-6xl font-bold text-white/10">
                  {exp.metric}
                </div>

                <p className="text-sm text-gray-400">{exp.dateLabel}</p>

                <h2 className="text-3xl font-semibold mt-2">
                  {exp.role}
                </h2>

                <p className="text-gray-500 mb-8">
                  {exp.company}
                </p>

                <p className="text-base text-gray-300 leading-relaxed max-w-3xl">
                  {exp.statement}
                </p>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {exp.tech.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition"
                      >
                        <Icon
                          className="text-4xl"
                          style={{ color: tech.color }}
                        />
                        <p className="mt-3 text-sm text-gray-300 font-medium">
                          {tech.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
