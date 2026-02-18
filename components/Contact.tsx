"use client";

import { ArrowUpRight, Github, Linkedin, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <footer id="contact" className="relative py-32 px-6 overflow-hidden">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto">

        <div className="mb-28">
          <h2 className="text-[clamp(60px,10vw,140px)] leading-[0.85] font-bold tracking-tight text-white">
            LET’S BUILD <br />
            <span className="text-white/30">SYSTEMS</span>
          </h2>

          <p className="mt-10 text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
            Looking for a senior full-stack engineer who understands scalable architecture,
            AI systems, and production delivery? Let’s collaborate and build something impactful.
          </p>
        </div>

        {/* Glass Contact Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Column: Contact Details */}
            <div className="flex flex-col gap-10">
              {/* Email */}
              <a
                href="mailto:samuelpriyatamxd@gmail.com"
                className="group flex items-center gap-4 text-[clamp(16px,5vw,36px)] md:text-4xl font-semibold text-white hover:text-white/70 transition whitespace-nowrap"
              >
                <span>samuelpriyatamxd@gmail.com</span>
                <ArrowUpRight className="shrink-0 w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 text-lg text-white/70">
                <Phone size={20} />
                <span>+91 93379 03728</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                <a
                  href="https://github.com/Sammisam8888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition uppercase tracking-wider text-sm"
                >
                  <Github size={18} /> Github
                </a>

                <a
                  href="https://www.linkedin.com/in/samuel-priyatam-dash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition uppercase tracking-wider text-sm"
                >
                  <Linkedin size={18} /> Linkedin
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition uppercase tracking-wider text-sm"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/sam-art.jpg"
                  alt="Samuel Priyatam Illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Footer Line */}
        <div className="mt-20 pt-10 border-t border-white/10 text-white/40 text-sm font-mono flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Samuel Priyatam Dash. All Rights Reserved.</p>
          <p>Full-Stack Engineering • AI Systems • Cloud Architecture</p>
        </div>

      </div>

    </footer>
  );
}
