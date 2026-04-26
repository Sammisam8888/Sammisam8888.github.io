"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Pause, Play } from "lucide-react";

const FAST_SPEED = 850;
const SLOW_SPEED = 140;
const PAUSE_MS = 2800;
const DECEL_FROM = 260;
const DECEL_TO = 40;
const UP_THRESHOLD = 400;

export default function AutoTour() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowUp(window.scrollY > UP_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!playing) {
      const onScroll = () => {
        const maxY =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(maxY > 0 ? window.scrollY / maxY : 0);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    window.__pauseSmoothScroll?.();

    let lastTime = performance.now();
    let pauseUntil = 0;
    const visited = new WeakSet<Element>();

    const computePauseY = (card: Element): number => {
      const rect = card.getBoundingClientRect();
      const cardTopAbs = rect.top + window.scrollY;
      const maxY =
        document.documentElement.scrollHeight - window.innerHeight;
      // Land each card with its top at ~18% of viewport — same visual
      // position no matter how tall the card is, so short cards don't
      // get shoved to the bottom of the viewport.
      const offset = window.innerHeight * 0.18;
      return Math.max(0, Math.min(cardTopAbs - offset, maxY));
    };

    const findNextTarget = (
      currentY: number
    ): { card: HTMLElement; pauseY: number } | null => {
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>("[data-tour-pause]")
      );
      for (const card of cards) {
        if (visited.has(card)) continue;
        const pauseY = computePauseY(card);
        if (currentY > pauseY + 5) {
          visited.add(card);
          continue;
        }
        return { card, pauseY };
      }
      return null;
    };

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const currentY = window.scrollY;
      const maxY =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxY > 0 ? currentY / maxY : 0);

      // Hold during a pause window
      if (time < pauseUntil) {
        rafId.current = requestAnimationFrame(tick);
        return;
      }

      if (paused) setPaused(false);

      const target = findNextTarget(currentY);

      // No more anchors → blast to end of page at full speed
      if (!target) {
        const newY = Math.min(currentY + FAST_SPEED * dt, maxY);
        window.scrollTo(0, newY);
        if (newY >= maxY - 1) {
          setPlaying(false);
          return;
        }
        rafId.current = requestAnimationFrame(tick);
        return;
      }

      const distance = target.pauseY - currentY;

      // Arrived at target → snap-align centered, start pause
      if (distance <= 1) {
        window.scrollTo(0, target.pauseY);
        pauseUntil = time + PAUSE_MS;
        setPaused(true);
        visited.add(target.card);
        rafId.current = requestAnimationFrame(tick);
        return;
      }

      // Variable speed: fast far, decelerate close, slow at touch
      let speed: number;
      if (distance > DECEL_FROM) {
        speed = FAST_SPEED;
      } else if (distance > DECEL_TO) {
        const t = (distance - DECEL_TO) / (DECEL_FROM - DECEL_TO);
        speed = SLOW_SPEED + (FAST_SPEED - SLOW_SPEED) * t;
      } else {
        speed = SLOW_SPEED;
      }

      let newY = currentY + speed * dt;
      if (newY > target.pauseY) newY = target.pauseY;
      window.scrollTo(0, newY);

      rafId.current = requestAnimationFrame(tick);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(false);
    };

    window.addEventListener("keydown", onKey);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("keydown", onKey);
      setPaused(false);
      window.__resumeSmoothScroll?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const scrollToTop = () => {
    if (playing) setPlaying(false);
    setTimeout(() => {
      const lenis = window.__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 60);
  };

  const size = 56;
  const stroke = 2.5;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const dashOffset = circ * (1 - progress);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9990] flex items-center gap-3">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group/up relative w-12 h-12 rounded-full bg-foreground text-background shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
          showUp
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-card border border-border text-[11px] font-mono uppercase tracking-[0.18em] whitespace-nowrap opacity-0 group-hover/up:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Top
        </span>
      </button>

      <button
        onClick={() => setPlaying((p) => !p)}
        className="group relative"
        aria-label={playing ? "Pause auto tour" : "Play auto tour"}
      >
        <div className="relative" style={{ width: size, height: size }}>
          {playing && (
            <span className="absolute inset-0 rounded-full border-2 border-foreground/40 animate-ping pointer-events-none" />
          )}

          <svg
            className="absolute inset-0 -rotate-90 pointer-events-none"
            width={size}
            height={size}
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={stroke}
              stroke="currentColor"
              fill="none"
              className="text-foreground/15"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={stroke}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={dashOffset}
              className="text-foreground transition-[stroke-dashoffset] duration-100"
            />
          </svg>

          <div className="absolute inset-[5px] rounded-full bg-foreground text-background shadow-2xl group-hover:scale-105 group-active:scale-95 transition-transform duration-200 flex items-center justify-center">
            {playing ? (
              <Pause className="w-[18px] h-[18px]" fill="currentColor" />
            ) : (
              <Play className="w-[18px] h-[18px] ml-0.5" fill="currentColor" />
            )}
          </div>
        </div>

        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-card border border-border text-[11px] font-mono uppercase tracking-[0.18em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          {playing ? (paused ? "Reading" : "Pause") : "Auto Tour"}
        </span>
      </button>
    </div>
  );
}
