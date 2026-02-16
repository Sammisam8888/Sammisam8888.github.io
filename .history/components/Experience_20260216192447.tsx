"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
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
    metric: 45,
    suffix: "%",
    role: "Lead SDE (Full-Stack & DevOps)",
    company: "OPM Corporation",
    date: "Aug 2025 — Dec 2025",
    description: [
      "Architected cloud-native Azure deployments improving backend performance across three live projects.",
      "Led MyFojo React Native & WhatsApp Commerce automation reducing manual work by 60%.",
      "Engineered SEO-driven backend modules increasing load speed and visibility by 30%.",
    ],
    tech: [
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiDjango, color: "#092E20" },
      { icon: SiExpress, color: "#ffffff" },
      { icon: SiFlask, color: "#ffffff" },
      { icon: SiMongodb, color: "#47A248" },
      { icon: SiAmazon, color: "#FF9900" },
      { icon: SiNextdotjs, color: "#ffffff" },
      { icon: SiWhatsapp, color: "#25D366" },
    ],
  },
  {
    metric: 100,
    suffix: "%",
    role: "AI Full-Stack Intern",
    company: "EU Analytics (WNS)",
    date: "Jul 2025 — Aug 2025",
    description: [
      "Built AI web app integrating LangChain and OpenAI APIs.",
      "Automated CI/CD achieving 100% successful deployments.",
      "Implemented JWT auth & role-based access.",
    ],
    tech: [
      { icon: SiAngular, color: "#DD0031" },
      { icon: SiFlask, color: "#ffffff" },
      { icon: SiOpenai, color: "#10A37F" },
      { icon: SiExpress, color: "#ffffff" },
    ],
  },
];

export default function ExperiencePro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative snap-container bg-black text-white"
    >
      {/* Scroll Progress Rail */}
      <div className="fixed left-10 top-0 h-full w-[2px] bg-white/10 z-20">
        <motion.div
          style={{ height: progressHeight }}
          className="w-full bg-white"
        />
      </div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="snap-section relative min-h-screen flex items-center px-[12vw]"
        >
          {/* Giant Background Metric */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.06 }}
            transition={{ duration: 1 }}
            className="absolute text-[28vw] font-bold select-none"
          >
            <CountUp end={exp.metric} duration={2} />
            {exp.suffix}
          </motion.div>

          {/* Content Layer */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[900px] space-y-8"
          >
            <div>
              <p className="text-sm font-mono text-white/40">
                {exp.date}
              </p>

              <h2 className="mt-2 text-4xl font-semibold">
                {exp.role}
              </h2>

              <p className="text-white/50">{exp.company}</p>
            </div>

            <div className="space-y-4 text-lg leading-[1.8]">
              {exp.description.map((point, i) => (
                <p key={i} className="text-white/70">
                  • <span className="text-white font-medium">{point}</span>
                </p>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex gap-6 text-3xl pt-6">
              {exp.tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    style={{ color: tech.color }}
                  >
                    <Icon />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
