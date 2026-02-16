"use client";

import { useRef, useState, useEffect } from "react";
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
} from "react-icons/si";

const experiences = [
    {
        company: "OPM Corporation",
        role: "Software Development Engineer 2",
        date: "Aug 2025 — Dec 2025",
        description:
            "Architected Azure cloud deployments improving scalability by 45%. Engineered SEO backend systems for Ridlin (+30%). Led MyFojo React Native & WhatsApp Commerce automation reducing manual workflows by 60%.",
        tech: [SiReact, SiDjango, SiExpress, SiFlask, SiMongodb, SiAmazon, SiNextdotjs],
    },
    {
        company: "EU Analytics",
        role: "Intern Trainee",
        date: "Jul 2025 — Aug 2025",
        description:
            "Built AI-driven full-stack systems using Flask & Angular. Integrated OpenAI APIs with LangChain. Implemented CI/CD pipelines achieving 100% deployment success.",
        tech: [SiFlask, SiAngular, SiExpress, SiOpenai],
    },
    {
        company: "Inovaare Clouds",
        role: "Cloud Platform Developer Intern",
        date: "May 2025 — Jul 2025",
        description:
            "Automated healthcare workflows using AWS Lambda & OCR reducing manual processing by 40%. Improved data retrieval speed by 3x with S3 integrations.",
        tech: [SiAmazon, SiPython],
    },
    {
        company: "Codecis AI",
        role: "Backend Developer Intern",
        date: "Jan 2025 — Mar 2025",
        description:
            "Deployed containerized CRM platforms on AWS & Azure. Reduced backend latency by 30%. Designed analytics dashboards used by 100+ employees.",
        tech: [SiFlutter, SiReact, SiFastapi, SiPostgresql],
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dragWidth, setDragWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.scrollWidth;
            const offsetWidth = containerRef.current.offsetWidth;
            setDragWidth(scrollWidth - offsetWidth);
        }
    }, []);

    // Icon Color Map
    const iconColors = new Map([
        [SiReact, "#61DAFB"],
        [SiDjango, "#092E20"],
        [SiExpress, "#ffffff"],
        [SiFlask, "#ffffff"],
        [SiMongodb, "#47A248"],
        [SiAmazon, "#FF9900"],
        [SiNextdotjs, "#ffffff"],
        [SiAngular, "#DD0031"],
        [SiPython, "#3776AB"],
        [SiFastapi, "#009688"],
        [SiPostgresql, "#336791"],
        [SiFlutter, "#02569B"],
        [SiOpenai, "#10A37F"],
    ]);

    return (
        <section className="relative pt-[10vh] pb-[15vh] overflow-hidden">

            <div className="px-[8vw] mb-12">
                <p className="text-sm font-mono tracking-[0.2em] uppercase text-white/40">
                    02 — Systems in Production
                </p>
            </div>

            <motion.div
                ref={containerRef}
                drag="x"
                dragConstraints={{ left: -dragWidth, right: 0 }}
                dragElastic={0.08}
                whileTap={{ cursor: "grabbing" }}
                className="flex cursor-grab active:cursor-grabbing"
            >
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="min-w-[90vw] px-[8vw] flex items-center"
                    >
                        <div className="max-w-[900px]">

                            <motion.h2
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-[clamp(48px,6vw,96px)] font-semibold text-white leading-[1.05]"
                            >
                                {exp.company}
                            </motion.h2>

                            <p className="mt-6 text-white/70 text-xl">
                                {exp.role}
                            </p>

                            <p className="mt-2 font-mono text-white/40 text-sm">
                                {exp.date}
                            </p>

                            <p className="mt-12 max-w-[650px] text-white/60 text-lg leading-[1.8]">
                                {exp.description}
                            </p>

                            {/* Colorful Tech Icons */}
                            <div className="flex gap-8 mt-14 text-4xl">
                                {exp.tech.map((Icon, i) => {
                                    const color = iconColors.get(Icon) || "#ffffff";
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="hover:scale-125 transition-transform"
                                            style={{ color }}
                                        >
                                            <Icon />
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Right Fade Hint */}
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

        </section>
    );
}
