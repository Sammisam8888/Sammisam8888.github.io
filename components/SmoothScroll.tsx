"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
    __pauseSmoothScroll?: () => void;
    __resumeSmoothScroll?: () => void;
  }
}

// Run as early as the module is evaluated on the client so we beat any
// late scroll restoration the browser performs after parse.
if (typeof window !== "undefined") {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
  // Reset any inherited CSS zoom so the page always renders at 100%.
  // (Note: this cannot override a user's browser-level Ctrl+/Ctrl- zoom.)
  document.documentElement.style.zoom = "1";
  if (document.body) document.body.style.zoom = "1";
}

let lenis: Lenis | null = null;
let rafId: number | null = null;

function startLenis() {
  if (lenis) return;
  lenis = new Lenis({ duration: 1.5, smoothWheel: true });
  window.__lenis = lenis;

  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
}

function stopLenis() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  lenis?.destroy();
  lenis = null;
  delete window.__lenis;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.documentElement.style.zoom = "1";
    document.body.style.zoom = "1";

    startLenis();

    window.__pauseSmoothScroll = stopLenis;
    window.__resumeSmoothScroll = startLenis;

    return () => {
      stopLenis();
      delete window.__pauseSmoothScroll;
      delete window.__resumeSmoothScroll;
    };
  }, []);

  return <>{children}</>;
}
