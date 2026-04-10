"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#features");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const onScroll = () => {
      const scrollMarker = window.scrollY + 140;
      let current = NAV_LINKS[0].href;

      for (const link of NAV_LINKS) {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollMarker) {
          current = link.href;
        }
      }

      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHomePage]);

  return (
    <nav className="fixed top-0 z-50 w-full glass-nav shadow-[0_20px_40px_rgba(12,74,110,0.06)]">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-6 md:px-12 lg:px-24">
        <a
          className="text-xl font-black tracking-tighter text-sky-900 sm:text-2xl"
          href={isHomePage ? "#home" : "/#home"}
        >
          Revord
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={`relative pb-1 text-sm font-semibold tracking-tight transition-all duration-300 ${
                  isHomePage && activeHref === link.href
                  ? "text-primary"
                  : "text-slate-600 hover:text-sky-800"
              }`}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={() => setActiveHref(link.href)}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                  isHomePage && activeHref === link.href
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
                aria-hidden
              />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-semibold text-slate-600 transition-all duration-300 hover:opacity-80 md:block">Login</button>
          <a
            className="rounded-full bg-primary-container px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95 sm:px-6"
            href={isHomePage ? "#get-started" : "/#get-started"}
          >
            Get Started
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/40 text-primary md:hidden"
          >
            {isMenuOpen ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-outline-variant/35 bg-white/95 px-4 py-4 shadow-sm backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-1 sm:px-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                  isHomePage && activeHref === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={() => {
                  setActiveHref(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-600 hover:bg-slate-100">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
