"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Formation() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Heading compression
    const headingScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.94]);

    // Block 1
    const block1Opacity = useTransform(
        scrollYProgress,
        [0.08, 0.18, 0.35, 0.45],
        [0, 1, 1, 0]
    );

    const block1Y = useTransform(
        scrollYProgress,
        [0.08, 0.18, 0.35, 0.45],
        [80, 0, 0, -80]
    );

    // Block 2
    const block2Opacity = useTransform(
        scrollYProgress,
        [0.35, 0.45, 0.62, 0.72],
        [0, 1, 1, 0]
    );

    const block2Y = useTransform(
        scrollYProgress,
        [0.35, 0.45, 0.62, 0.72],
        [80, 0, 0, -80]
    );

    // Block 3
    const block3Opacity = useTransform(
        scrollYProgress,
        [0.62, 0.72, 0.9, 1],
        [0, 1, 1, 0]
    );

    const block3Y = useTransform(
        scrollYProgress,
        [0.62, 0.72, 0.9, 1],
        [80, 0, 0, -80]
    );


    return (
        <section
            ref={containerRef}
            className="relative h-[550vh] bg-[#0A0A0A]"

        >
            <div className="sticky top-0 h-screen flex items-start justify-center pt-[8vh] px-[8vw]">
                <div className="max-w-[900px] w-full">

                    {/* Section Label */}
                    <p className="text-sm font-mono tracking-[0.2em] uppercase text-white/40">
                        01 — Engineering Origin
                    </p>

                    {/* Heading */}
                    <motion.h2
                        style={{ scale: headingScale }}
                        className="mt-6 text-[clamp(40px,5vw,64px)] leading-[1.1] font-semibold tracking-[-0.02em] text-white origin-left"
                    >

                        Engineering Foundation <br />
                        & Direction
                    </motion.h2>

                    {/* Narrative Blocks */}
                    <div className="relative mt-24 min-h-[420px]">


                        {/* Block 1 */}
                        <motion.div
                            style={{ opacity: block1Opacity, y: block1Y }}
                            className="absolute space-y-6 text-white/70 text-[18px] leading-[1.8]"
                        >
                            <p>
                                Currently pursuing a Bachelor of Technology in Computer Science &
                                Engineering at Veer Surendra Sai University of Technology (VSSUT), Odisha.
                            </p>

                            <p>
                                My foundation is rooted in systems thinking — distributed architectures,
                                backend engineering, cloud infrastructure, and intelligent automation.
                            </p>

                            <p>
                                Beyond academia, I focus on applied engineering through production
                                internships, competitive problem-solving, and real-world AI system development.
                            </p>
                        </motion.div>

                        {/* Block 2 */}
                        <motion.div
                            style={{ opacity: block2Opacity, y: block2Y }}
                            className="absolute space-y-4 text-white/70 text-[18px] leading-[1.8]"
                        >
                            <h3 className="text-[22px] font-medium text-white">
                                Veer Surendra Sai University of Technology
                            </h3>

                            <p className="mt-2">
                                Bachelor of Technology — Computer Science & Engineering
                            </p>

                            <p className="mt-1 font-mono text-white/40 text-sm">
                                2023 — Present
                            </p>
                        </motion.div>

                        {/* Block 3 */}
                        <motion.div
                            style={{ opacity: block3Opacity, y: block3Y }}
                            className="absolute space-y-4 text-white/70 text-[18px] leading-[1.8]"
                        >
                            <p>
                                <span className="text-white">
                                    IBM SkillsBuild Summer Internship —
                                </span>{" "}
                                Data Analytics
                            </p>

                            <p>
                                <span className="text-white">
                                    ENCIDE MACE Coding Competition —
                                </span>{" "}
                                Competitive Programming
                            </p>

                            <p>
                                <span className="text-white">
                                    Crash Course on Python (Google Coursera) —
                                </span>{" "}
                                Python & Automation
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
