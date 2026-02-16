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
      <>
        <strong>Architected cloud-native Azure deployments</strong>, improving{" "}
        <strong>backend performance by 45%</strong> across three live systems.
      </>,
      <>
        <strong>Led end-to-end development</strong> of the{" "}
        <strong>MyFojo React Native & WhatsApp Commerce platform</strong>,
        reducing <strong>manual workflows by 60%</strong>.
      </>,
      <>
        <strong>Engineered SEO-driven backend modules</strong>, increasing{" "}
        <strong>load speed & search visibility by 30%</strong>.
      </>,
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
    company: "EU Analytics (WNS Global Services)",
    date: "Jul 2025 — Aug 2025",
    description: [
      <>
        <strong>Built a production-ready AI web application</strong>{" "}
        integrating <strong>LangChain + OpenAI APIs</strong> for intelligent
        data processing.
      </>,
      <>
        <strong>Automated CI/CD pipelines</strong> using GitHub Actions,
        achieving <strong>100% deployment success rate</strong>.
      </>,
      <>
        Implemented <strong>secure JWT authentication</strong> with
        role-based access control.
      </>,
    ],
    tech: [
      { icon: SiAngular, color: "#DD0031" },
      { icon: SiFlask, color: "#ffffff" },
      { icon: SiOpenai, color: "#10A37F" },
      { icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    metric: 40,
    suffix: "%",
    role: "Cloud Platform Developer Intern",
    company: "Inovaare Clouds",
    date: "May 2025 — Jul 2025",
    description: [
      <>
        <strong>Developed 5+ automation modules</strong> for healthcare claims,
        reducing <strong>manual processing time by 40%</strong>.
      </>,
      <>
        Integrated <strong>AWS Lambda + OCR + S3</strong>, tripling retrieval
        speed and improving <strong>accuracy by 35%</strong>.
      </>,
      <>
        Designed <strong>HIPAA-compliant cloud-native architecture</strong>.
      </>,
    ],
    tech: [
      { icon: SiAmazon, color: "#FF9900" },
      { icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    metric: 30,
    suffix: "%",
    role: "Backend Developer Intern",
    company: "Codecis AI",
    date: "Jan 2025 — Mar 2025",
    description: [
      <>
        Built and deployed a <strong>Flask-Docker CRM</strong> serving 100+
        users, reducing <strong>backend latency by 30%</strong>.
      </>,
      <>
        Designed <strong>mortgage analytics dashboards</strong> consuming REST
        APIs for real-time reporting.
      </>,
      <>
        Optimized <strong>AWS & Azure container deployments</strong> for
        reliability and cost efficiency.
      </>,
    ],
    tech: [
      { icon: SiFlutter, color: "#02569B" },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiFastapi, color: "#009688" },
      { icon: SiPostgresql, color: "#336791" },
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
      className="relative bg-black text-white snap-y snap-mandatory"
    >
      {/* Scroll Rail */}
      <div className="fixed left-8 top-0 h-full w-[2px] bg-white/10 z-30">
        <motion.div
          style={{ height: progressHeight }}
          className="w-full bg-white"
        />
      </div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative min-h-screen snap-start flex items-center px-[12vw]"
        >
          {/* Background Metric */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="absolute text-[26vw] font-bold select-none"
          >
            <CountUp end={exp.metric} duration={2} />
            {exp.suffix}
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

              <h2 className="mt-2 text-4xl font-semibold">
                {exp.role}
              </h2>

              <p className="text-white/50">{exp.company}</p>
            </div>

            <div className="space-y-4 text-lg leading-[1.8]">
              {exp.description.map((point, i) => (
                <p key={i} className="text-white/70">
                  • {point}
                </p>
              ))}
            </div>

            {/* Tech Icons */}
            <div className="flex gap-6 pt-6 text-3xl">
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
