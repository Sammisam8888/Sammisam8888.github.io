"use client";

import { motion } from "framer-motion";
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
    metric: "45%",
    highlight: "Scalability Boost",
    role: "Lead SDE (Full-Stack & DevOps)",
    company: "OPM Corporation",
    date: "Aug 2025 — Dec 2025",
    description: [
      "Architected cloud-native Azure deployments improving backend performance by 45% across three live projects.",
      "Led end-to-end development of MyFojo React Native & WhatsApp Commerce platform reducing manual work by 60%.",
      "Engineered SEO-driven backend modules increasing load speed and search visibility by 30%.",
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
    metric: "100%",
    highlight: "CI/CD Success",
    role: "AI Full-Stack Intern",
    company: "EU Analytics (WNS)",
    date: "Jul 2025 — Aug 2025",
    description: [
      "Built a full-stack AI web app integrating LangChain and OpenAI APIs for AI-driven data processing.",
      "Automated GitHub Actions CI/CD pipelines achieving 100% successful deployments.",
      "Implemented secure JWT authentication and role-based access.",
    ],
    tech: [
      { icon: SiAngular, color: "#DD0031" },
      { icon: SiFlask, color: "#ffffff" },
      { icon: SiOpenai, color: "#10A37F" },
      { icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    metric: "40%",
    highlight: "Process Reduction",
    role: "Cloud Platform Developer Intern",
    company: "Inovaare Clouds",
    date: "May 2025 — Jul 2025",
    description: [
      "Developed 5+ automation modules reducing manual healthcare claim processing by 40%.",
      "Integrated AWS Lambda + OCR + S3 tripling retrieval speed and improving accuracy by 35%.",
      "Ensured HIPAA-compliant cloud-native architecture.",
    ],
    tech: [
      { icon: SiAmazon, color: "#FF9900" },
      { icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    metric: "30%",
    highlight: "Latency Reduction",
    role: "Backend Developer Intern",
    company: "Codecis AI",
    date: "Jan 2025 — Mar 2025",
    description: [
      "Built and deployed a Flask-Docker CRM serving 100+ users reducing backend latency by 30%.",
      "Designed analytics dashboards consuming REST APIs for real-time reporting.",
      "Optimized AWS and Azure container deployments.",
    ],
    tech: [
      { icon: SiFlutter, color: "#02569B" },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiFastapi, color: "#009688" },
      { icon: SiPostgresql, color: "#336791" },
    ],
  },
];

export default function ExperienceCinematic() {
  return (
    <section className="relative bg-black text-white">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative min-h-screen flex items-center px-[8vw]"
        >
          {/* Background Metric */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="absolute text-[22vw] font-bold text-white select-none"
          >
            {exp.metric}
          </motion.div>

          {/* Content */}
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

              <h3 className="mt-2 text-3xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-white/50">
                {exp.company}
              </p>
            </div>

            {/* Impact Bullets */}
            <div className="space-y-4 text-white/70 text-lg leading-[1.8]">
              {exp.description.map((point, i) => (
                <p key={i}>
                  • <span className="font-medium text-white">{point}</span>
                </p>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex gap-6 text-3xl mt-8">
              {exp.tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    style={{ color: tech.color }}
                    className="transition-all duration-300"
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
