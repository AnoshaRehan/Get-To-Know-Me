"use client";

import { useEffect } from "react";

export default function ScrollSnap() {
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const panels = document.querySelectorAll("section");
      const current = Math.round(window.scrollY / window.innerHeight);
      const next = Math.min(Math.max(current + direction, 0), panels.length - 1);

      panels[next].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return null;
}