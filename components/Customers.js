"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineBellAlert,
  HiOutlineHeart,
  HiOutlineMap,
  HiOutlineUser,
} from "react-icons/hi2";

export default function Customers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    [
      HiOutlineUser,
      "No account needed to start",
      "Customers can get their first stamp in 2 seconds without filling any forms.",
    ],
    [
      HiOutlineBellAlert,
      "Smart Reminders",
      "Optional push notifications when they are near your store to encourage a visit.",
    ],
    [
      HiOutlineMap,
      "Discover Local Gems",
      "A beautiful map view to find other local businesses using Revord.",
    ],
  ];
  const showcaseImages = [
    "/images/customers_section/01.jpeg",
    "/images/customers_section/02.jpeg",
    "/images/customers_section/03.jpeg",
    "/images/customers_section/04.jpeg",
    "/images/customers_section/05.jpeg",
    "/images/customers_section/06.jpeg",
  ];
  const showPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? showcaseImages.length - 1 : prev - 1
    );
  const showNext = () =>
    setActiveIndex((prev) =>
      prev === showcaseImages.length - 1 ? 0 : prev + 1
    );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) =>
        prev === showcaseImages.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(intervalId);
  }, [showcaseImages.length]);

  return (
    <section id="benefits" className="relative overflow-hidden bg-white py-12 text-on-surface md:py-16 lg:py-20">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.06]">
        <HiOutlineHeart className="absolute -right-20 -top-20 text-[400px] text-primary" />
      </div>
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl">Your customers will <br /><span className="text-primary">love the ease.</span></h2>
            <p className="max-w-xl text-sm text-on-surface-variant md:text-base">
              A smooth mobile-first experience that helps customers collect
              stamps, discover stores, and redeem rewards with zero friction.
            </p>
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              {items.map(([Icon, title, desc]) => (
                <div className="flex gap-4 md:gap-6" key={title}>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-outline-variant/30 bg-surface-container-low md:h-14 md:w-14">
                    <Icon className="text-[22px] text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-primary md:mb-2 md:text-xl">{title}</h4>
                    <p className="text-sm text-on-surface-variant md:text-base">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] bg-gradient-to-br from-primary-container to-tertiary-container p-4 shadow-[0_20px_40px_rgba(12,74,110,0.18)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-white/10">
              <motion.div
                className="flex w-full"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                {showcaseImages.map((src, index) => (
                  <div key={index} className="w-full min-w-full">
                    <div className="relative h-[260px] w-full bg-white/5 sm:h-[320px] md:h-[420px] lg:h-[520px]">
                      <Image
                        alt={`Customer showcase ${index + 1}`}
                        className="object-contain object-center"
                        src={src}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/90 p-1.5 shadow-lg">
                <button
                  type="button"
                  onClick={showPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 cursor-pointer"
                  aria-label="Previous image"
                >
                  <HiChevronLeft className="text-[20px]" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 cursor-pointer"
                  aria-label="Next image"
                >
                  <HiChevronRight className="text-[20px]" />
                </button>
              </div>
            </div>
            <div className="absolute right-2 top-2 max-w-[150px] rounded-2xl bg-primary p-3 text-white shadow-xl sm:-right-2 sm:top-3 sm:max-w-[170px] sm:p-4 lg:-right-4 lg:top-4 lg:max-w-[190px]"><p className="text-base font-bold sm:text-lg">94%</p><p className="text-[10px] opacity-90 sm:text-xs">Retention rate increase for businesses switching to Revord.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
