"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-32 px-6 relative">

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold tracking-tight text-white">
          Engineering Formation
        </h2>
        <p className="text-white/40 mt-4">
          Computer Science Foundation • Systems Thinking • Architecture Depth
        </p>
      </div>

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-14 rounded-2xl"
        >
          {/* University Info */}
          <h3 className="text-2xl font-semibold text-white">
            Veer Surendra Sai University of Technology (VSSUT), Odisha
          </h3>

          <p className="text-white/60 mt-3">
            Bachelor of Technology - Computer Science & Engineering
          </p>

          {/* Academic Metrics */}
          <div className="mt-8 grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-white font-semibold text-lg">
                2023 – 2027
              </p>
              <p className="text-white/50 text-sm">
                3rd Year • 6th Semester
              </p>
            </div>

            <div>
              <p className="text-white font-semibold text-lg">
                7.97 SGPA
              </p>
              <p className="text-white/50 text-sm">
                Current Semester Performance
              </p>
            </div>

            <div>
              <p className="text-white font-semibold text-lg">
                8.68 SGPA
              </p>
              <p className="text-white/50 text-sm">
                Highest Semester Performance
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="my-12 border-t border-white/10" />

          {/* Core Subjects */}
          <h4 className="text-xl font-semibold text-white mb-8">
            Core Engineering Domains
          </h4>

          <div className="grid md:grid-cols-3 gap-8 text-white/70 text-sm">

            <div className="space-y-3">
              <p>• Data Structures & Algorithms</p>
              <p>• Object Oriented Programming</p>
              <p>• Database Management Systems</p>
              <p>• Engineering Economics</p>
            </div>

            <div className="space-y-3">
              <p>• Computer Networks</p>
              <p>• Cryptography & Network Security</p>
              <p>• Compiler Design</p>
              <p>• Artificial Intelligence & Machine Learning</p>
            </div>

            <div className="space-y-3">
              <p>• Digital Logic Design</p>
              <p>• Computer Organization & Architecture</p>
              <p>• System Design Fundamentals</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
