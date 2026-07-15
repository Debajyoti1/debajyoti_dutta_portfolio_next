"use client";

import React, { useEffect } from "react";

const SpotlightAndScroll: React.FC = () => {
  useEffect(() => {
    // 1. Spotlight Mouse Glow Tracker
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 2. Scroll Progress Fallback for browsers like Firefox
    let handleScrollFallback: (() => void) | null = null;
    const progressEl = document.getElementById("scroll-progress");

    if (progressEl && !CSS.supports("animation-timeline", "scroll()")) {
      handleScrollFallback = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;
        const scrolled = window.scrollY;
        const ratio = scrolled / scrollHeight;
        progressEl.style.transform = `scaleX(${ratio})`;
      };

      window.addEventListener("scroll", handleScrollFallback, { passive: true });
      // Run once initially
      handleScrollFallback();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (handleScrollFallback) {
        window.removeEventListener("scroll", handleScrollFallback);
      }
    };
  }, []);

  return (
    <>
      {/* Decorative elements. aria-hidden="true" removes them from screen reader flows. */}
      <div id="scroll-progress" aria-hidden="true" />
      <div className="spotlight-glow" aria-hidden="true" />
    </>
  );
};

export default SpotlightAndScroll;
