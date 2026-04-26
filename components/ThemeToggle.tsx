"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animStage, setAnimStage] = useState<"idle" | "expanding" | "fading">("idle");
  const [overlayTheme, setOverlayTheme] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (animStage !== "idle") return;

    const nextTheme = isDark ? "light" : "dark";
    setOverlayTheme(nextTheme);
    setAnimStage("expanding");

    setTimeout(() => {
      setTheme(nextTheme);
    }, 400);
  };

  const onAnimationComplete = () => {
    if (animStage === "expanding") {
      setAnimStage("fading");
    } else if (animStage === "fading") {
      setAnimStage("idle");
      setOverlayTheme(null);
    }
  };

  const overlayColor = overlayTheme === "light" ? "#FAFAFA" : "#0A0A0A";

  const variants: Variants = {
    idle: { scale: 0, opacity: 0 },
    expanding: { scale: 150, opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
    fading: { scale: 150, opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="relative p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors z-[100] group"
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6">
          <motion.div
            initial={false}
            animate={{
              rotate: isDark ? 0 : 90,
              scale: isDark ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="w-6 h-6 text-foreground group-hover:text-yellow-400 transition-colors" />
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              rotate: isDark ? -90 : 0,
              scale: isDark ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="w-6 h-6 text-foreground group-hover:text-orange-500 transition-colors" />
          </motion.div>
        </div>
        <span className="sr-only">Toggle theme</span>
      </button>

      {animStage !== "idle" && (
        <motion.div
          initial="idle"
          animate={animStage}
          variants={variants}
          onAnimationComplete={onAnimationComplete}
          style={{
            backgroundColor: overlayColor,
            top: "36px",
            right: "36px",
          }}
          className="fixed w-4 h-4 rounded-full z-[90] pointer-events-none"
        />
      )}
    </>
  );
}
