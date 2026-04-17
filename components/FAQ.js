"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import Button from "@/components/Button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const faqs = [
    {
      q: "Do customers need to install an app?",
      a: "No. Customers scan your QR and collect stamps directly in their browser. They can also save it to their home screen for faster access.",
    },
    {
      q: "How long does setup take for a merchant?",
      a: "Most businesses are live in under 5 minutes. Create a reward rule, download your branded QR, and start scanning at checkout.",
    },
    {
      q: "Can I limit how often customers scan?",
      a: "Yes. You can set scan limits by day and apply validation rules to reduce abuse while keeping the flow easy for real customers.",
    },
    {
      q: "How are rewards redeemed?",
      a: "When a customer fills the stamp card, they request redemption in store. Staff approve the reward from the merchant dashboard.",
    },
    {
      q: "Can I manage multiple store locations?",
      a: "Yes. reward supports multi-store setups so each location can run loyalty while you keep centralized visibility and control.",
    },
    {
      q: "Is customer data export available?",
      a: "Yes. You can export participation and redemption data anytime from your dashboard to help with reporting and retention campaigns.",
    },
    {
      q: "Does reward support custom branding?",
      a: "Yes. You can use branded QR assets and keep the loyalty experience visually aligned with your business identity.",
    },
    {
      q: "What support do I get after launch?",
      a: "You get onboarding help, product guidance, and ongoing support so your team can run loyalty smoothly from day one.",
    },
    {
      q: "Can staff use reward without technical training?",
      a: "Yes. The checkout flow is intentionally simple. Most teams learn the scan and redemption process in a few minutes.",
    },
    {
      q: "Can I change stamp goals and rewards later?",
      a: "Absolutely. You can update stamp counts, reward types, and campaign settings anytime from the merchant dashboard.",
    },
    {
      q: "Does reward work for cafes, salons, and retail?",
      a: "Yes. reward is built for local businesses across food, beauty, and retail with flexible loyalty rules for each model.",
    },
    {
      q: "Can customers use loyalty cards at multiple stores?",
      a: "Each loyalty card is store-specific by default, so rewards stay clear and controlled while customers can still join multiple stores.",
    },
  ];
  const mobileFaqs = showAllMobile ? faqs : faqs.slice(0, 4);

  return (

    <section className=" bg-[#FEFEFF]" id="faq">
      <div className=" bg-gradient-to-r from-[#045726] via-[#0f8b3f] to-[#86e3ad] px-4 py-14 text-center shadow-[0_14px_32px_-14px_rgba(8,45,24,0.35)]  md:py-16  ">
        <h2 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-white/90 md:text-base">
          Everything businesses and customers ask before getting started with reward.
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 pb-12 sm:px-6 md:px-12 md:pb-16 lg:px-24 lg:pb-20 pt-10 ">

        <div className="grid grid-cols-1 gap-5 md:hidden">
          {mobileFaqs.map((item, index) => {
            const actualIndex = showAllMobile ? index : index;
            const isOpen = openIndex === actualIndex;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-outline-variant/30 bg-surface-container-low px-5 py-4 transition-colors hover:bg-surface-container-lowest"
              >
                <Button
                  variant="bare"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                  className="cursor-pointer"
                >
                  <span className="text-base font-bold tracking-tight text-on-surface-variant md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <HiChevronDown className="text-[20px]" />
                  </span>
                </Button>

                {isOpen && (
                  <p className="pt-3 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Button
            variant="outline"
            size="md"
            type="button"
            shine={false}
            onClick={() => {
              setShowAllMobile((prev) => !prev);
              setOpenIndex(null);
            }}
            className="px-8 py-2.5 font-semibold"
          >
            {showAllMobile ? "Show Less" : "Load More"}
          </Button>
        </div>

        <div className="hidden grid-cols-1 gap-5 md:grid md:grid-cols-2">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest px-5 py-4 transition-colors "
              >
                <Button
                  variant="bare"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cursor-pointer"
                >
                  <span className="text-base font-bold tracking-tight text-on-surface-variant md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <HiChevronDown className="text-[20px]" />
                  </span>
                </Button>

                {isOpen && (
                  <p className="pt-3 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
