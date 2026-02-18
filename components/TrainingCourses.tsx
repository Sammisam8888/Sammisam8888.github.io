"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function TrainingCourses() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 420; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const courses = [
    {
      title: "IBM SkillsBuild Summer Internship",
      subtitle: "Data Analytics",
      description:
        "Focused on data analysis, visualization, and business intelligence through project-based learning.",
      link: "https://www.linkedin.com/posts/sammisam8888_dataanalytics-ibm-skillsbuild-activity-7236062822583975937-mcK7",
    },

    {
      title: "Crash Course on Python (Google Coursera)",
      subtitle: "Python & Automation",
      description:
        "Covered Python programming, automation scripts, and object-oriented programming fundamentals.",
      link: "https://www.coursera.org/account/accomplishments/verify/O4PW1MOA7APE",
    },
    {
      title: "Deloitte Australia (Forage)",
      subtitle: "Technology Job Simulation",
      description:
        "Completed practical tasks in Coding, Data Analysis, and Cyber Security, gaining hands-on experience in Forensic Technology workflows.",
      link: "https://drive.google.com/file/d/1mPW1czOQ7uhzeMTaTr9Be0althtHYoMQ/view?usp=drive_link", 
    },


    {
      title: "Ministry of Youth Affairs",
      subtitle: "MY Bharat - Recognition",
      description:
        "Recognized for early contribution to the Viksit Bharat initiative, demonstrating commitment to national digital transformation and youth leadership.",
      link: "https://drive.google.com/file/d/1qe63jFySx4UbubKrxw-ONnZeSZCFwgz7/view?usp=sharing",
    },
  ];


  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          Training & Certifications
        </h2>
        <p className="text-muted-foreground mt-6 text-lg">
          Continuous Learning • Competitive Growth
        </p>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative max-w-7xl mx-auto">

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 
                 w-12 h-12 rounded-full 
                 bg-secondary border border-border 
                 backdrop-blur-xl flex items-center justify-center 
                 hover:bg-accent transition z-20 shadow-md"
        >
          <ChevronLeft className="text-muted-foreground" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 
                 w-12 h-12 rounded-full 
                 bg-secondary border border-border 
                 backdrop-blur-xl flex items-center justify-center 
                 hover:bg-accent transition z-20 shadow-md"
        >
          <ChevronRight className="text-muted-foreground" />
        </button>

        {/* Sliding Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4"
        >
          {courses.map((course, index) => (
            <motion.a
              key={index}
              href={course.link}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[380px] max-w-[380px] h-[420px] rounded-3xl p-12
                     bg-card
                     border border-border backdrop-blur-xl
                     hover:border-foreground/20 transition-all duration-500
                     flex flex-col justify-between relative shadow-sm"
            >
              <div className="absolute inset-0 rounded-3xl 
                          bg-gradient-to-tr from-transparent to-primary/5
                          opacity-0 hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-foreground">
                  {course.title}
                </h3>

                <p className="text-muted-foreground text-lg mt-3">
                  {course.subtitle}
                </p>

                <p className="text-muted-foreground mt-6 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-12">
                <span className="text-primary font-medium">
                  View Certificate
                </span>
                <ExternalLink
                  size={20}
                  className="text-muted-foreground hover:text-foreground transition"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

  );
}
