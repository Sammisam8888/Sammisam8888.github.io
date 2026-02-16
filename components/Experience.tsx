"use client";

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
        <strong>MyFojo React Native & WhatsApp Commerce</strong> platform,
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
        <strong>LangChain and OpenAI APIs</strong>.
      </>,
      <>
        <strong>Automated CI/CD pipelines</strong> achieving{" "}
        <strong>100% successful deployments</strong>.
      </>,
      <>
        <strong>Implemented secure JWT authentication</strong>.
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
        <strong>manual processing by 40%</strong>.
      </>,
      <>
        Integrated <strong>AWS Lambda + OCR + S3</strong>.
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
        Built and deployed a <strong>Flask-Docker CRM</strong> serving 100+ users.
      </>,
      <>
        Designed <strong>mortgage analytics dashboards</strong>.
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

export default function ExperienceTimeline() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto relative">

        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-16 mb-16">

            {/* Dot */}
            <div className="absolute left-3 top-3 w-6 h-6 rounded-full bg-white shadow-lg" />

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-xl">

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-white/40 font-mono">{exp.date}</p>
                  <h2 className="text-3xl font-semibold mt-2">{exp.role}</h2>
                  <p className="text-white/50">{exp.company}</p>
                </div>

                <div className="text-5xl font-bold text-white/10">
                  <CountUp end={exp.metric} duration={2} />%
                </div>
              </div>

              <div className="mt-6 space-y-3 text-white/70 leading-relaxed">
                {exp.bullets.map((b, idx) => (
                  <p key={idx}>• {b}</p>
                ))}
              </div>

              <div className="flex gap-5 mt-6 text-2xl">
                {exp.tech.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div key={idx} style={{ color: tech.color }}>
                      <Icon />
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
