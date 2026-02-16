"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
    metric: "100%",
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
    metric: "40%",
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
    metric: "30%",
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

      {experiences.map((exp, index) => {
        // Parallax Metric Depth
        // Since we are mapping, we need to create a scroll transform relative to THIS section?
        // Actually the user request used simple `scrollYProgress` but that would apply to the whole container.
        // For per-section parallax, we usually need a ref per section or use the global scroll.
        // The user code snippet: `const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);`
        // implies they want it tied to the whole container scroll, or they misunderstood how to scope it.
        // However, looking at the request, "Now the metric slowly drifts as you scroll."
        // Let's us use the global scrollYProgress for the *parallax* effect across the whole section,
        // or we can just leave it as is if it's meant to be subtle.
        // Given the request "Modify metric background: const yShift ...", I will apply it.
        // BUT, `scrollYProgress` comes from the parent container ref.
        // If I use it inside map, it will be the same for all. That might be okay for a "drift".
        
        return <ExperienceCard key={index} exp={exp} index={index} scrollYProgress={scrollYProgress} />;
      })}
    </section>
  );
}

function ExperienceCard({ exp, index, scrollYProgress }: { exp: any, index: number, scrollYProgress: any }) {
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  
  return (
    <div className="relative min-h-screen snap-start flex items-center px-[12vw] overflow-hidden">
        {/* Ambient Section Light Shift */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background:
              index % 2 === 0
                ? "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.05), transparent 60%)"
                : "radial-gradient(circle at 80% 60%, rgba(255,255,255,0.04), transparent 60%)",
          }}
        />

         {/* Scroll-Triggered Glow */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute -z-10 blur-3xl"
            style={{
                width: "500px",
                height: "500px",
                background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
                left: index % 2 === 0 ? "10%" : "auto",
                right: index % 2 === 0 ? "auto" : "10%",
                top: "20%" // Approximate positioning
            }}
        />

      {/* Background Metric - Parallax Depth */}
      <motion.div
        style={{ y: yShift }}
        className="absolute text-[26vw] font-bold opacity-[0.04] select-none pointer-events-none"
      >
        {exp.metric}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-[860px] space-y-12 z-10" // Stripe Spacing System
      >
        <div>
          <p className="text-sm font-mono text-white/40 tracking-widest uppercase">
            {exp.date}
          </p>

          <h2 className="mt-4 text-[clamp(36px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] font-semibold">
            {exp.role}
          </h2>

          <p className="text-white/50 text-xl mt-2">{exp.company}</p>
        </div>

        {/* Micro Stagger Bullet Reveal */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {exp.description.map((point: any, i: number) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className="text-[18px] leading-[1.9] text-white/70 tracking-[0.01em]"
            >
              • {point}
            </motion.p>
          ))}
        </motion.div>

        {/* Floating 3D Tech Icon Depth */}
        <div className="flex gap-6 pt-6 text-3xl">
          {exp.tech.map((tech: any, i: number) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.25, y: -4 }}
                animate={{ y: [0, -3, 0] }}
                transition={{
                    type: "spring", stiffness: 200, // For hover
                    y: { // For float
                        repeat: Infinity,
                        duration: 3 + i,
                        ease: "easeInOut"
                    }
                }}
                style={{
                  color: tech.color,
                  filter: "drop-shadow(0 0 6px rgba(255,255,255,0.2))"
                }}
                className="transition-all"
              >
                <Icon />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
