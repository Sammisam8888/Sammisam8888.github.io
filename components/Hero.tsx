"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Layer 2: Ghost Text (Parallax + Scale + Opacity ONLY - No Blur)
    // Moving upward slightly (-40px equivalent), scaling down 0.98
    const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const ghostScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
    const ghostOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Layer 3: Main Content (Slight fade and scale on scroll)
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Layer 1: Background Glow Shift (Subtle)
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-[6vw] md:pl-[10vw] md:pr-[8vw] pt-[10vh] overflow-hidden"
        >
            {/* Layer 1: Background Glow (Reduced & No Noise) */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ y: bgY }}
            >
                {/* Radial Glow - Extremely Subtle */}
                <div
                    className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.015),transparent_60%)]"
                />
            </motion.div>

            {/* Layer 2: Ghost Text - Depth Authority */}
            <motion.div
                className="absolute top-[15%] left-1/2 -translate-x-1/2 md:left-[55%] whitespace-nowrap pointer-events-none select-none z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    y: ghostY,
                    scale: ghostScale,
                    opacity: ghostOpacity
                }}
            >
                <h1
                    className="font-extrabold text-[80px] md:text-[clamp(80px,14vw,240px)] tracking-[-0.03em]"
                    style={{ color: "rgba(255,255,255,0.02)" }}
                >
                    SYSTEMS ENGINEER
                </h1>
            </motion.div>

            {/* Layer 3: Main Content - Left Anchored */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="relative z-10 max-w-[900px] flex flex-col items-start"
            >
                <motion.h1
                    className="text-[42px] md:text-[clamp(42px,5.5vw,80px)] font-black leading-[1.05] tracking-[-0.04em] text-[#F5F5F5] text-left"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // Staggered slightly after ghost
                >
                    Full-Stack & AI <br className="hidden md:block" />
                    Systems Engineer
                </motion.h1>

                <motion.p
                    className="mt-6 text-[16px] md:text-[clamp(16px,1.2vw,20px)] text-[#9A9A9A] max-w-[540px] leading-[1.6] font-normal text-left"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                >
                    Building production-grade intelligent systems.
                </motion.p>

                <motion.div
                    className="mt-12 flex items-center gap-8"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                >
                    {/* Primary CTA - Engineering Authority */}
                    <button
                        className="group relative px-8 py-[15px] rounded-full text-[#F5F5F5] transition-all duration-300 overflow-hidden"
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <span className="relative z-10 inline-block">View Work</span>
                        <div className="absolute inset-0 bg-[rgba(255,255,255,0.09)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    {/* Secondary CTA */}
                    <button className="text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors duration-300 font-medium">
                        Download Resume
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
