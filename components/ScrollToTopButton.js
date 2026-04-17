"use client";

import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi2";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 220);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(0, {
        duration: 1.5,
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-[120] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#25a84e] to-[#0f8b3f] text-white shadow-[0_8px_24px_-10px_rgba(15,139,63,0.72)] ring-1 ring-[#d5a514]/35 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_-10px_rgba(15,139,63,0.82)] active:scale-95 md:bottom-6 md:right-6 ${isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
        }`}
    >
      <HiChevronDoubleUp className="scroll-top-icon-float text-xl" />
    </button>
  );
}
