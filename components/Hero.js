"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden pb-12 pt-24 md:pb-16 md:pt-28 lg:min-h-screen lg:pb-20 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-bg-band absolute left-[-30%] top-[18%] h-44 w-[160%] rounded-full bg-gradient-to-r from-primary/20 via-cyan-300/30 to-tertiary-container/25 blur-3xl" />
        <div className="hero-bg-band-delayed absolute left-[-35%] bottom-[10%] h-40 w-[170%] rounded-full bg-gradient-to-r from-sky-200/30 via-primary/20 to-cyan-200/30 blur-3xl" />
        <div className="hero-bg-slide absolute -left-[10%] top-[8%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="hero-bg-slide-delayed absolute -right-[10%] bottom-[6%] h-80 w-80 rounded-full bg-tertiary-container/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-center md:space-y-8 sm:text-left">
          <div className="inline-flex items-center rounded-full bg-tertiary-fixed px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-on-tertiary-fixed-variant md:text-xs">New: Multi-store loyalty support</div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-primary sm:text-5xl lg:text-7xl">Turn first-time customers into <span className="text-gradient">regulars</span></h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-lg sm:mx-0">Simple QR-based loyalty cards for local coffee shops, salons, and retailers. No apps to download. No hardware to buy. No complexity.</p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:items-start sm:gap-4 sm:pt-4">
            <a
              href="#get-started"
              className="w-fit rounded-full bg-primary px-6 py-3 text-center text-base font-bold text-white transition-all hover:shadow-xl active:scale-95 sm:px-8 sm:py-4"
            >
              List your business
            </a>
            <a
              href="#benefits"
              className="w-fit rounded-full bg-surface-container-highest px-6 py-3 text-center text-base font-bold text-primary transition-all hover:bg-surface-container-high active:scale-95 sm:px-8 sm:py-4"
            >
              Start as customer
            </a>
          </div>
          </div>
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-sky-100/80 via-cyan-50/60 to-teal-100/50 blur-3xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.75, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-x-8 top-6 h-1 rounded-full bg-gradient-to-r from-transparent via-white/90 to-transparent"
              animate={{ x: ["-15%", "15%", "-15%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-[0_20px_40px_rgba(12,74,110,0.08)] sm:p-6 lg:p-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <motion.div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ x: ["-160%", "620%"] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
                />
                <Image alt="Revord App UI" className="h-[280px] w-full rounded-xl object-cover shadow-inner sm:h-[380px] lg:h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo6O-7bp2SCQcf0Gu1QEcTomEaOLWuiEl2yOZipFSpolWepM8Jhtrpjhn1AqHRUyo6TrsNX-WUtd9Q7nh0yL8VI4akKqX__uuJly5f5fJ74lvWH3u5qDoj9WovjIlTUFvYnQarSjDl2OGPv4su2EbzyUZjLS7KjoIXdX23KDluE3f_gJ2kVS15V4khVpnvAgab9YPcYlnS5rRI2TIng0IvDRJ7PSrox8yU2Ys4rCfzncWmBL0DeUkGr_IEZ8ViM7NJUbCWm1iR3bm4" width={1200} height={1000} />
              </div>
              <motion.div
                className="absolute -bottom-5 left-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl sm:-bottom-6 sm:-left-6 sm:gap-3 sm:p-4"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed sm:h-12 sm:w-12">
                  <HiSparkles className="text-primary" />
                </div>
                <div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">Reward Unlocked</p><p className="text-sm font-bold text-primary sm:text-base">Free Latte Claimed!</p></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
