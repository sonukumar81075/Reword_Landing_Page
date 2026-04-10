"use client";

import { motion } from "framer-motion";
import {
  HiArrowDownTray,
  HiCheck,
  HiOutlineChartBarSquare,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export default function Merchants() {
  const points = [
    "Instant setup (under 5 minutes)",
    "No Monthly Fee for small shops",
    "Unlimited digital stamp cards",
  ];

  const cards = [
    {
      icon: HiOutlineCog6Tooth,
      title: "Flexible Rules",
      desc: "Set stamps needed, expiry dates, and reward types.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Fraud Control",
      desc: "Limit scans per hour or per customer to prevent abuse.",
    },
    {
      icon: HiOutlineChartBarSquare,
      title: "Analytics",
      desc: "Track peak times and customer retention rates.",
    },
    {
      icon: HiArrowDownTray,
      title: "Print Ready",
      desc: "Download high-res QR designs for your storefront.",
    },
  ];
  const mobileCardWidth = 260;
  const mobileGap = 16;
  const mobileLoopDistance = (mobileCardWidth + mobileGap) * cards.length;

  return (
    <section
      className="relative overflow-hidden bg-primary py-12 md:py-16 lg:py-20"
      id="features"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl">For merchants</h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Tools to launch, manage, and grow your loyalty program without adding
            complexity to daily operations.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:gap-10 xl:grid-cols-[1.05fr_1fr] xl:gap-14">
          <div className="order-2 xl:order-1">
            <div className="overflow-hidden md:hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, -mobileLoopDistance] }}
                transition={{
                  x: {
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }}
              >
                {[...cards, ...cards].map((card, index) => (
                  <div
                    key={`mobile-${card.title}-${index}`}
                    className="w-[260px] min-w-[260px] rounded-2xl border border-white/5 bg-[#00334F] p-5 shadow-[0_16px_30px_rgba(6,35,53,0.25)] backdrop-blur-sm"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-cyan-100 ring-1 ring-white/20">
                      <card.icon className="text-[20px]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-cyan-50/85">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden h-[420px] grid-cols-2 gap-4 overflow-hidden rounded-2xl md:grid">
              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: ["-50%", "0%"] }}
                transition={{
                  y: {
                    duration: 16,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }}
              >
                {[...cards.slice(0, 2), ...cards.slice(0, 2), ...cards.slice(0, 2)].map(
                  (card, index) => (
                    <div
                      key={`left-${card.title}-${index}`}
                      className="rounded-2xl border border-white/5 bg-[#00334F] p-5 shadow-[0_16px_30px_rgba(6,35,53,0.25)] backdrop-blur-sm transition hover:bg-white/5"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-cyan-100 ring-1 ring-white/20">
                        <card.icon className="text-[20px]" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-cyan-50/85 md:text-base">
                        {card.desc}
                      </p>
                    </div>
                  )
                )}
              </motion.div>

              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  y: {
                    duration: 16,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }}
              >
                {[...cards.slice(2), ...cards.slice(2), ...cards.slice(2)].map(
                  (card, index) => (
                    <div
                      key={`right-${card.title}-${index}`}
                      className="rounded-2xl border border-white/5 bg-[#00334F] p-5 shadow-[0_16px_30px_rgba(6,35,53,0.25)] backdrop-blur-sm transition hover:bg-white/5"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-cyan-100 ring-1 ring-white/20">
                        <card.icon className="text-[20px]" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-cyan-50/85 md:text-base">
                        {card.desc}
                      </p>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>

          <div className="order-1 h-auto rounded-3xl border border-white/5 bg-[#00334F] p-6 shadow-[0_24px_50px_rgba(6,35,53,0.3)] md:h-[420px] md:p-8 xl:order-2 xl:p-10">
            <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Built for modern
              <br />
              shop owners
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cyan-50/90 md:mt-5 md:text-lg">
              The Revord merchant dashboard gives you full control. Whether you run
              a single pop-up or a city-wide franchise, we&apos;ve got you covered.
            </p>
            <ul className="mt-7 space-y-3">
              {points.map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100/20">
                    <HiCheck className="text-[14px] text-cyan-100" />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
