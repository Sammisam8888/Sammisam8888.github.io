"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FileText } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Parallax Layers */
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center px-[6vw] md:px-[10vw] overflow-hidden"
    >
      {/* Subtle Radial Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.025),transparent_65%)]" />
      </motion.div>

      {/* GHOST TEXT (Now Behind Everything) */}
      <motion.div
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none"
      >
        <h1 className="font-extrabold text-[clamp(100px,15vw,260px)] tracking-[-0.05em] text-white/5 whitespace-nowrap">
          SYSTEMS
        </h1>
      </motion.div>

      {/* MAIN GRID */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 grid md:grid-cols-2 gap-20 items-center w-full max-w-7xl mx-auto"
      >
        {/* LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white font-mono tracking-[0.2em] text-lg uppercase"
          >
            Senior Full-Stack Engineer • AI Systems Architect
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-[clamp(48px,6vw,84px)] font-black leading-[1.05] tracking-[-0.04em] text-white"
          >
            Samuel Priyatam <br />
            <span className="text-white/60">Dash</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-[18px] text-white/60 max-w-[540px] leading-[1.7]"
          >
            Designing production-grade cloud-native systems, scalable backend
            architectures, and AI-driven platforms with real-world deployment
            impact.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-8"
          >
            {/* View Work */}
            <a
              href="#projects"
              className="group relative px-8 py-[14px] rounded-full text-white transition-all duration-300 overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10"
            >
              <span className="relative z-10">View Work</span>
            </a>

            {/* Resume Minimal */}
            <a
              href="https://tinyurl.com/samuel-priyatam-resume"
              target="_blank"
              className="group relative px-8 py-[14px] rounded-full text-white transition-all duration-300 overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center gap-2"
            >
              <FileText size={18} />
              <span className="text-sm uppercase tracking-widest">Resume</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-center md:justify-end relative z-10"
        >
          <div className="relative w-[320px] h-[420px]">

            {/* Animated Frame */}
            <motion.div
              animate={{ rotate: [0, 0.5, -0.5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 border border-white/20 rounded-2xl"
            />

            <motion.div
              animate={{ rotate: [0, -0.5, 0.5, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-3 border border-white/10 rounded-2xl"
            />

            {/* Image */}
            <div className="absolute inset-6 rounded-2xl overflow-hidden">
              <Image
                src="/profile-picture-iit-kgp.jpg"
                alt="Samuel Priyatam Dash"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
