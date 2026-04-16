"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Button from "@/components/Button";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];
const LOGIN_URL = "https://app.rewardlelo.com/merchant/login";


export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#features");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onWinScroll = () => setScrolled(window.scrollY > 20);
    onWinScroll();
    window.addEventListener("scroll", onWinScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWinScroll);
  }, []);

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

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-[box-shadow,background-color,border-color,backdrop-filter] duration-500 ease-out ${scrolled
          ? "border-b border-slate-200/85 bg-white/92 shadow-[0_12px_48px_-12px_rgba(15,23,42,0.14)] backdrop-blur-xl"
          : "border-b border-white/50 bg-white/75 shadow-[0_8px_32px_-16px_rgba(15,139,63,0.1)] backdrop-blur-lg"
          }`}
      >
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-40"
            }`}
          aria-hidden
        />

        <div className="relative z-50 mx-auto flex max-w-screen-2xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 md:px-12 lg:px-24">
          <a
            href={isHomePage ? "#home" : "/#home"}
            className="flex items-center h-16 overflow-visible"
          >
            <div className="  origin-left  scale-[1.2] transition-transform duration-300">
              <Image
                src={"/images/logo/reward_image.png"}
                alt="reward"
                width={800}
                height={800}
                priority
                className="sm:h-14 h-12 w-auto object-contain  "
              />
            </div>
          </a>

          <div className="hidden items-center gap-0.5 rounded-full border border-slate-200/80 bg-gradient-to-b from-slate-50/95 to-slate-100/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_2px_rgba(15,23,42,0.04)] md:flex">
            {NAV_LINKS.map((link) => {
              const active = isHomePage && activeHref === link.href;
              return (
                <a
                  key={link.href}
                  className={`relative rounded-full px-3.5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out lg:px-4 ${active
                    ? "bg-white text-primary shadow-[0_2px_8px_-2px_rgba(15,139,63,0.2)] ring-1 ring-slate-200/90"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => setActiveHref(link.href)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              href={LOGIN_URL}
              className="!hidden font-semibold md:!inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </Button>
            <Button
              variant="primary"
              size="nav"
              target="_blank"
              rel="noopener noreferrer"
              href={isHomePage ? "https://app.rewardlelo.com/merchant/dashboard" : "https://app.rewardlelo.com/merchant/dashboard"}
              className="!hidden md:!inline-flex"
            >
              <span className="md:hidden">Start</span>
              <span className="hidden md:inline">Get Started</span>
            </Button>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-sheet"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 md:hidden ${isMenuOpen
                ? "border-primary/30 bg-primary/10 text-primary shadow-inner"
                : "border-slate-200/90 bg-white/90 text-primary shadow-sm hover:border-primary/25 hover:bg-slate-50"
                }`}
            >
              <span className="relative block h-5 w-5">
                <HiBars3
                  className={`absolute inset-0 m-auto text-xl transition-all duration-300 ease-out ${isMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                    }`}
                />
                <HiXMark
                  className={`absolute inset-0 m-auto text-xl transition-all duration-300 ease-out ${isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                    }`}
                />
              </span>
            </button>
          </div>
        </div>

      </nav>

      <div
        className={`fixed inset-0 z-[80] md:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-slate-900/35 backdrop-blur-[2px] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          id="mobile-nav-sheet"
          className={`absolute left-0 top-0 flex h-full w-[86%] max-w-[340px] flex-col border-r border-slate-200/80 bg-white shadow-[18px_0_42px_-18px_rgba(15,23,42,0.25)] transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="border-b border-slate-100 px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <a
                href={isHomePage ? "#home" : "/#home"}
                className="flex h-12 items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src={"/images/logo/reward_image.png"}
                  alt="RewardLelo"
                  width={520}
                  height={520}
                  className="h-10 w-auto object-contain"
                />
              </a>
              <Button
                variant="iconGhost"
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiXMark className="text-xl" />
              </Button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${isHomePage && activeHref === link.href
                    ? "bg-primary/10 text-primary ring-1 ring-primary/15"
                    : "text-slate-800 hover:bg-slate-50"
                    }`}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => {
                    setActiveHref(link.href);
                    setIsMenuOpen(false);
                  }}
                >
                  <span>{link.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${isHomePage && activeHref === link.href
                      ? "bg-primary"
                      : "bg-slate-300"
                      }`}
                    aria-hidden
                  />
                </a>
              ))}

              <Button
                variant="outlineMuted"
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full justify-start px-4 py-3.5 text-left text-[15px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
