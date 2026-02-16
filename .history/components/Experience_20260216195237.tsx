"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
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
    role: "Lead SDE (Full-Stack & DevOps)",
    company: "OPM Corporation",
    date: "Aug 2025 — Dec 2025",
    bullets: [
      <>
        <strong>Architected cloud-native Azure deployments</strong>, improving{" "}
        <strong>scalability and backend performance by 45%</strong> across three live projects.
      </>,
      <>
        <strong>Led end-to-end development</strong> of the{" "}
        <strong>MyFojo React Native & WhatsApp Commerce platform</strong>,
        reducing <strong>manual work by 60%</strong>.
      </>,
      <>
        <strong>Engineered SEO-driven backend modules</strong>, increasing{" "}
        <strong>load speed and search visibility by 30%</strong>.
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
    role: "AI Full-Stack Intern",
    company: "EU Analytics (WNS Global Services)",
    date: "Jul 2025 — Aug 2025",
    bullets: [
      <>
        <strong>Built a full-stack AI web app</strong> integrating{" "}
        <strong>LangChain and OpenAI APIs</strong> for advanced AI-driven data processing.
      </>,
      <>
        <strong>Automated CI/CD pipelines</strong> via GitHub Actions achieving{" "}
        <strong>100% successful deployments</strong>.
      </>,
      <>
        Implemented <strong>secure JWT authentication</strong> and role-based access.
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
    role: "Cloud Platform Developer Intern",
    company: "Inovaare Clouds",
    date: "May 2025 — Jul 2025",
    bullets: [
      <>
        <strong>Developed 5+ automation modules</strong> reducing{" "}
        <strong>manual healthcare processing by 40%</strong>.
      </>,
      <>
        Integrated <strong>AWS Lambda + OCR + S3</strong>, improving{" "}
        <strong>accuracy by 35%</strong>.
      </>,
      <>
        Designed <strong>HIPAA-compliant cloud-native systems</strong>.
      </>,
    ],
    tech: [
      { icon: SiAmazon, color: "#FF9900" },
      { icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    metric: 30,
    role: "Backend Developer Intern",
    company: "Codecis AI",
    date: "Jan 2025 — Mar 2025",
    bullets: [
      <>
        Built and deployed a <strong>Flask-Docker CRM</strong> serving 100+ users,
        reducing <strong>backend latency by 30%</strong>.
      </>,
      <>
        Designed <strong>mortgage analytics dashboards</strong> using REST APIs.
      </>,
      <>
        Optimized <strong>AWS & Azure container deployments</strong>.
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

export default function ExperienceUltraPro() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const velocity = useVelocity(scrollYProgress);
  const glowIntensity = useTransform(velocity, [0, 1], [0.2, 0.6]);

  return (
    <section
      ref={ref}
      className="relative bg-black text-white snap-y snap-mandatory"
      style={{ perspective: 1200 }}
    >
      {/* Vertical Progress Bar */}
      <div className="fixed left-10 top-0 h-full w-[2px] bg-white/10 z-30">
        <motion.div
          style={{ height: smoothProgress }}
          className="w-full bg-white"
        />
      </div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative min-h-screen snap-start flex items-center px-[12vw]"
          style={{
            filter: "blur(0px)",
          }}
        >
          {/* Ambient Radial Glow */}
          <motion.div
            style={{
              opacity: glowIntensity,
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"
          />

          {/* Giant Metric */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.06 }}
            transition={{ duration: 1 }}
            className="absolute text-[26vw] font-bold select-none"
          >
            <CountUp end={exp.metric} duration={2} />
            %
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[900px] backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl"
          >
            <p className="text-sm font-mono text-white/40">{exp.date}</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              {exp.role}
            </h2>

            <p className="text-white/50 mb-8">{exp.company}</p>

            {/* Bullets staggered */}
            <div className="space-y-4 text-lg leading-[1.8]">
              {exp.bullets.map((b, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-white/70"
                >
                  • {b}
                </motion.p>
              ))}
            </div>

            {/* Floating Tech Icons */}
            <div className="flex gap-6 mt-8 text-3xl">
              {exp.tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{ color: tech.color }}
                    className="drop-shadow-lg"
                  >
                    <Icon />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
