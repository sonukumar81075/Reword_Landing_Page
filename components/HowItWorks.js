"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      number: "1",
      title: "Show your store QR",
      desc: "Display your Revord QR at checkout so customers can scan in seconds.",
    },
    {
      number: "2",
      title: "Scan and collect stamps",
      desc: "Customers scan with their phone and collect digital stamps instantly.",
    },
    {
      number: "3",
      title: "Redeem and repeat",
      desc: "Approve rewards quickly and bring customers back for the next visit.",
    },
    {
      number: "4",
      title: "Show reward cards clearly",
      desc: "Customers can see their reward progress and unlocked offers right on the digital card.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(intervalId);
  }, [steps.length]);

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-24 lg:py-20" id="how-it-works">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold text-primary md:mb-6 md:text-4xl lg:text-5xl">Simple as 1, 2, 3, 4</h2>
          <p className="text-sm leading-relaxed text-on-surface-variant md:text-lg">We built Revord to be the fastest way to launch a loyalty program. No training required for staff.</p>
        </div>
        <div className="mx-12 mb-4 hidden h-px flex-1 bg-outline-variant/30 lg:block" />
      </div>
      <div className="md:hidden">
        <div className="mb-6 flex items-center justify-center gap-3">
          {steps.map((step, index) => (
            <button
              key={`mobile-step-${step.number}`}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition ${
                activeStep === index
                  ? "border-primary bg-primary text-white shadow-lg"
                  : "border-primary/60 bg-white text-primary"
              }`}
              aria-label={`Show step ${step.number}`}
            >
              {step.number}
            </button>
          ))}
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${activeStep * 100}%` }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {steps.map((step) => (
              <div key={`mobile-card-${step.number}`} className="min-w-full">
                <article className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-5 shadow-[0_10px_30px_rgba(12,74,110,0.04)]">
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-primary">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-on-surface-variant">
                    {step.desc}
                  </p>
                  <div className="mt-6 flex items-start justify-center rounded-2xl bg-sky-50/60 p-4">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo6O-7bp2SCQcf0Gu1QEcTomEaOLWuiEl2yOZipFSpolWepM8Jhtrpjhn1AqHRUyo6TrsNX-WUtd9Q7nh0yL8VI4akKqX__uuJly5f5fJ74lvWH3u5qDoj9WovjIlTUFvYnQarSjDl2OGPv4su2EbzyUZjLS7KjoIXdX23KDluE3f_gJ2kVS15V4khVpnvAgab9YPcYlnS5rRI2TIng0IvDRJ7PSrox8yU2Ys4rCfzncWmBL0DeUkGr_IEZ8ViM7NJUbCWm1iR3bm4"
                      alt={`Step ${step.number} preview`}
                      width={500}
                      height={700}
                      className="mx-auto h-[240px] w-auto rounded-xl object-cover"
                    />
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className={`group relative flex min-h-[430px] transform-gpu flex-col rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-5 shadow-[0_10px_30px_rgba(12,74,110,0.04)] [will-change:transform] md:min-h-[540px] md:p-6 ${
              index % 2 === 1 ? "xl:mt-10" : ""
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ y: -8 }}
            animate={{
              y: index % 2 === 1 ? [0, 6, 0, -6, 0] : [0, -6, 0, 6, 0],
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              y: {
                duration: 6.8,
                delay: index * 0.35,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              },
            }}
          >
            <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-white text-sm font-bold text-primary">
              {step.number}
            </div>

            <h3 className="mt-7 mb-3 text-xl leading-tight font-bold text-primary md:text-2xl">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
              {step.desc}
            </p>

            <div className="mt-6 flex flex-1 items-start justify-center rounded-2xl bg-sky-50/60 p-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo6O-7bp2SCQcf0Gu1QEcTomEaOLWuiEl2yOZipFSpolWepM8Jhtrpjhn1AqHRUyo6TrsNX-WUtd9Q7nh0yL8VI4akKqX__uuJly5f5fJ74lvWH3u5qDoj9WovjIlTUFvYnQarSjDl2OGPv4su2EbzyUZjLS7KjoIXdX23KDluE3f_gJ2kVS15V4khVpnvAgab9YPcYlnS5rRI2TIng0IvDRJ7PSrox8yU2Ys4rCfzncWmBL0DeUkGr_IEZ8ViM7NJUbCWm1iR3bm4"
                alt={`Step ${step.number} preview`}
                width={500}
                height={700}
                className="mx-auto h-[220px] w-auto rounded-xl object-cover md:h-[300px] lg:h-[340px]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
