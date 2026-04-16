"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(target, durationMs = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepMs = 16;
    const totalSteps = Math.max(1, Math.floor(durationMs / stepMs));
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepMs);

    return () => clearInterval(timer);
  }, [target, durationMs]);

  return count;
}

export default function SocialProof() {
  const cards = [
    ["\"Since switching from paper cards, we've seen a 30% increase in weekly return customers. They never forget their phone!\"", "James Chen", "Owner, The Daily Grind", "https://lh3.googleusercontent.com/aida-public/AB6AXuC-FzZt-U-hJsYJPDUIz3sbkrLNergf0FOitgk41DS-ydXnAHnTPbI31u06o72HK_sLtjgLw8SHLI6Aljx5LRjLZb8oyGGGxoLJmerpXlBPW62zThug4MD2kNofFIBhMJCriaRzYiXcp9wTfU6v7oJxcJ-E2WcgKwxyFUwraTSapyldBJ-QeNz9DTZfFu9oplVnnFTk4bVmS3D8B1amGQVJ_D232ldw6yWIc-vci8AUCeQs9MEuMnB25UmHS_symM626CtI2J34eBt9", 5],
    ["\"The setup was incredibly fast. I downloaded the QR, printed it, and was issuing stamps the same afternoon.\"", "Sarah Miller", "Founder, Bloom Boutique", "https://lh3.googleusercontent.com/aida-public/AB6AXuBSB6fJ5SkwXHhzsShrS8aZvpuOWaBoZOKW2V1Tu8eTad0_mcwf2de4u3HWTCz6g-f4ggVeEx0IeqTPelgmT7cDGleg1oU-8wS7M6QHw6FiWoSRWd4zVMO1QDFJx-4bAd00mmHBPC52yhHCjEIONbm15aRJ5p8BoJIxIc3jAf-jyTgzHhoX6EeBGaj_095C0XERR46EesKrzitDqHtc1adSo2KEKcwh3Nwh-I8r7weEB-AFA_Wl0T_qqmECnP8N_9vHLNLBiVxcPzZr", 4],
    ["\"Customers love that they don't have to download an app. The browser-based card is a game changer for us.\"", "David Wilson", "Master Barber, Sharp Edge", "https://lh3.googleusercontent.com/aida-public/AB6AXuCe6EPvlByJGeFTDb9ykE-y43YKPMjvkGW-KgnNCJs7p-VJG5_W23pRx4GJdziHTI0dZQ9kWTYL5y53iUlD6w4BPJku9YHwgFIdfWZEG69cUPsJu2jskR3bzPFb1faJfbj_8f3SvjMVB08lQ9pGrrErTAJ4ZLe1QGjddq9lHmGq0hSjLmBOSj3fwLMi5h-c5hI2xg6yC8xcmR1fXcRfNoPKDf2fHTBVLL1rDTjm4lCueR8FsTlEaPTrCD_eLSBhCIuXHOBOiHzS7edd", 5],
    ["\"reward made loyalty simple for both our team and customers. Setup was quick and redemptions are smooth at checkout.\"", "Nina Patel", "Owner, Harbor Café", "https://lh3.googleusercontent.com/aida-public/AB6AXuBSB6fJ5SkwXHhzsShrS8aZvpuOWaBoZOKW2V1Tu8eTad0_mcwf2de4u3HWTCz6g-f4ggVeEx0IeqTPelgmT7cDGleg1oU-8wS7M6QHw6FiWoSRWd4zVMO1QDFJx-4bAd00mmHBPC52yhHCjEIONbm15aRJ5p8BoJIxIc3jAf-jyTgzHhoX6EeBGaj_095C0XERR46EesKrzitDqHtc1adSo2KEKcwh3Nwh-I8r7weEB-AFA_Wl0T_qqmECnP8N_9vHLNLBiVxcPzZr", 4],
  ];
  const rewards = useCountUp(10000, 2200);
  const stamps = useCountUp(50000, 2400);
  const cardWidth = 280;
  const cardGap = 24;
  const loopDistance = (cardWidth + cardGap) * cards.length;

  return (
    <section id="reviews" className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-24 lg:py-20">
      <div className="mb-10 flex flex-col gap-6 md:mb-14 md:gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-primary md:text-4xl lg:text-5xl">
            Loved by 200+ businesses
          </h2>
          <p className="text-sm text-on-surface-variant md:text-base">
            Real results from local teams using reward every day.
          </p>
        </div>
        <div className="flex w-full items-center overflow-hidden rounded-2xl bg-white shadow-sm sm:w-auto">
          <div className="flex-1 px-4 py-4 text-center sm:px-8 sm:py-5">
            <p className="text-2xl font-black leading-none text-primary sm:text-3xl">
              {Math.floor(rewards / 1000)}k+
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Rewards Claimed
            </p>
          </div>
          <div className="h-14 w-px bg-outline-variant/40" />
          <div className="flex-1 px-4 py-4 text-center sm:px-8 sm:py-5">
            <p className="text-2xl font-black leading-none text-primary sm:text-3xl">
              {Math.floor(stamps / 1000)}k+
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Stamps Issued
            </p>
          </div>
        </div>
      </div>
      <div className="relative space-y-4 overflow-hidden py-2">
        <motion.div
          className="flex gap-6"
          animate={{ x: [-loopDistance, 0] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {[...cards, ...cards].map(([quote, name, role, image, rating], idx) => (
            <article
              key={`top-${name}-${idx}`}
              className="w-[280px] min-w-[280px] min-h-[130px] rounded-2xl border border-outline-variant/30 bg-white px-4 py-4 shadow-sm sm:w-[280px] sm:min-w-[280px]"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{name}</p>
                  <p className="text-xs text-slate-400">@{name.split(" ")[0].toLowerCase()}</p>
                </div>
              </div>
              <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant">{quote}</p>
              <p className="mt-2 text-xs tracking-[0.2em] text-amber-500">
                {"★".repeat(rating)}
                <span className="text-slate-300">{"★".repeat(5 - rating)}</span>
              </p>
            </article>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -loopDistance] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {[...cards, ...cards].map(([quote, name, role, image, rating], idx) => (
            <article
              key={`bottom-${name}-${idx}`}
              className="w-[280px] min-w-[280px] min-h-[130px] rounded-2xl border border-outline-variant/30 bg-white px-4 py-4 shadow-sm sm:w-[280px] sm:min-w-[280px]"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{name}</p>
                  <p className="text-xs text-slate-400">@{name.split(" ")[0].toLowerCase()}</p>
                </div>
              </div>
              <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant">{quote}</p>
              <p className="mt-2 text-xs tracking-[0.2em] text-amber-500">
                {"★".repeat(rating)}
                <span className="text-slate-300">{"★".repeat(5 - rating)}</span>
              </p>
            </article>
          ))}
        </motion.div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent sm:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:w-16"
          aria-hidden
        />
      </div>
    </section>
  );
}
