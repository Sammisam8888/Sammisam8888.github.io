"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function TrainingCourses() {
  const courses = [
    {
      title: "IBM SkillsBuild Summer Internship",
      subtitle: "Data Analytics",
      description:
        "Focused on data analysis, visualization, and business intelligence through project-based learning.",
      link: "https://www.linkedin.com/posts/sammisam8888_dataanalytics-ibm-skillsbuild-activity-7236062822583975937-mcK7",
    },
    {
      title: "ENCIDE MACE Coding Competition",
      subtitle: "Competitive Programming",
      description:
        "Participated in collaborative problem-solving and algorithmic programming competition.",
      link: "https://www.linkedin.com/posts/sammisam8888_certificate-of-participation-activity-7258092582675611649-Hh-5",
    },
    {
      title: "Crash Course on Python (Google Coursera)",
      subtitle: "Python & Automation",
      description:
        "Covered Python programming, automation scripts, and object-oriented programming fundamentals.",
      link: "https://www.coursera.org/account/accomplishments/verify/O4PW1MOA7APE",
    },
  ];

  return (
    <section className="py-32 px-6">

      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white">
          Training & Certifications
        </h2>
        <p className="text-white/40 mt-4">
          Continuous Learning • Professional Development
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl group"
          >
            <div className="absolute top-8 right-8">
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                title="View Certificate"
              >
                <ExternalLink size={24} />
              </a>
            </div>

            <h3 className="text-xl font-semibold text-white pr-12">
              {course.title}
            </h3>

            <p className="text-white/50 text-sm mt-2">
              {course.subtitle}
            </p>

            <p className="text-white/70 mt-4 text-sm leading-relaxed">
              {course.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
