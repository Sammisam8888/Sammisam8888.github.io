"use client";

import { Trophy, Medal, Star, Target, Mic, Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Winner - GDG Bhubaneswar × iServeU Hackathon (2025)",
      description:
        "Secured 1st place by engineering a fintech-grade production solution under competitive build constraints.",
      icon: Trophy,
      link: "https://www.linkedin.com/posts/sammisam8888_cathon2025-winner-iserveu-activity-7356375630483017728-7hk0",
    },
    {
      title: "Winner - Ideathon 2024 (E-Cell, VSSUT)",
      description:
        "Designed and pitched a sustainable technology-driven startup model validated by an entrepreneurial jury.",
      icon: Trophy,
      link: "https://drive.google.com/file/d/1RiQ9GhG_CoJY4cn21TXSKX9ovIyKJlr3/view",
    },
    {
      title: "Winner - Maze Hunt 2024 (Robotics Society, VSSUT)",
      description:
        "Developed and optimized an autonomous robotics system for intelligent maze navigation.",
      icon: Trophy,
      link: "https://drive.google.com/file/d/16xO-N3kkN1qx4UCNxjr8VpQ4NUDPW8MS/view",
    },
    {
      title: "Winner - Shark Tank 2.0 (SUIIT)",
      description:
        "Pitched a scalable fintech startup concept evaluated on feasibility, architecture, and revenue sustainability.",
      icon: Trophy,
      link: "https://www.linkedin.com/posts/ecellvssut_vssut-ecellvssut-activity-7246912574728912897-B7Rn",
    },
    {
      title: "Finalist - Udbhavanam 2024 (IIM Sambalpur)",
      description:
        "Presented a structured stock-market education model focused on scalable financial literacy adoption.",
      icon: Star,
      link: null,
    },
    {
      title: "All-India Rank 60 - E-Yantra Robotics 2024 (IIT Bombay)",
      description:
        "Achieved national-level recognition in advanced robotics and embedded systems engineering challenge.",
      icon: Medal,
      link: null,
    },
    {
      title: "Participant - ML Hackathon 2025 (IIT Bhubaneswar)",
      description:
        "Built an AI-based image authenticity detection system within competitive time constraints.",
      icon: Target,
      link: "https://www.linkedin.com/posts/sammisam8888_certificate-iit-bbs-ml-hackathon-activity-7321148450711003139-l9Y3",
    },
    {
      title: "Participant - National Debate (Mewar University)",
      description:
        "Represented VSSUT at the All India Shri Nandlal Gadiya Memorial Debate, engaging in critical analysis of complex national issues.",
      icon: Mic,
      link: "https://drive.google.com/file/d/1MNYcHCZjNRME-6aTXK4FyACZo-1fANVu/view?usp=sharing",
    },
    {
      title: "Consolation Prize - National Oratory Contest (YUGMA)",
      description:
        "Awarded for excellence in National-level Oratory at Astha School of Management, showcasing strong communication and public speaking skills.",
      icon: Mic,
      link: "https://drive.google.com/file/d/1tDC_pr-1MM6okrtTWr7lUd8hGuEtudMV/view?usp=sharing",
    },
    {
      title: "Participant - ENCIDE MACE Coding Competition",
      description:
        "Participated in collaborative problem-solving and algorithmic programming competition.",
      icon: Code,
      link: "https://www.linkedin.com/posts/sammisam8888_certificate-of-participation-activity-7258092582675611649-Hh-5",
    },
  ];

  return (
    <section className="py-32 px-6 relative">

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold tracking-tight text-foreground">
          Honors & Achievements
        </h2>
        <p className="text-muted-foreground mt-4">
          Competitive Excellence • National Recognition • Innovation Leadership
        </p>
      </div>

      {/* Achievement Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative backdrop-blur-xl bg-card border border-border p-8 rounded-2xl group shadow-sm"
          >
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="shrink-0 mt-1">
                <item.icon
                  size={22}
                  className="text-yellow-400 group-hover:text-yellow-300 transition-colors"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-8 right-8 text-muted-foreground hover:text-blue-400 transition-colors"
                    title="View Credential"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};
