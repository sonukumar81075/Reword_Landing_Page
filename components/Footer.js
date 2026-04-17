"use client";

import { HiArrowRight } from "react-icons/hi2";
import { LuShare2 } from "react-icons/lu";
import Button from "@/components/Button";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#0a5f2f] px-4 pb-8 pt-10 sm:px-6 sm:pt-12 md:px-12 md:pb-10 md:pt-14 lg:px-16 lg:pt-14 xl:bg-[#FFFFFF] xl:px-24 xl:pt-[12vw]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 hidden bg-[url('/images/Hero_section/footer_background.png')] bg-cover bg-top bg-no-repeat xl:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-[#FFFFFF]/5 via-[#FFFFFF]/02 to-[#FFFFFF]/6 xl:block" />
      </div>

      <div className="relative z-[1] mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4 xl:pt-10">
        <div className="space-y-3">
          <p
            className="font-headline text-xl font-extrabold tracking-tight text-white"
          >
            reward
          </p>
          <p className="text-sm leading-relaxed text-white/85">
            The digital architect for local loyalty. Simple, fast, and built for
            humans.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-white transition-colors hover:bg-white/28"
              href="#"
            >
              <LuShare2 className="text-sm" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline mb-6 text-base font-bold text-white">
            Product
          </h4>
          <ul className="space-y-3 text-sm text-white/82">
            <li>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href="#"
              >
                Merchant Dashboard
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href="#"
              >
                Customer Experience
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href="#"
              >
                Pricing Plans
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline mb-6 text-base font-bold text-white">
            Support
          </h4>
          <ul className="space-y-3 text-sm text-white/82">
            <li>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href="/contact-support"
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-headline mb-5 text-base font-bold text-white">
            Subscribe
          </h4>
          <p className="mb-3 text-sm text-white/85">
            Get the latest on local growth tips.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              className="h-11 w-full rounded-lg border-0 bg-white px-4 text-sm leading-normal text-slate-700 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary"
              placeholder="Email"
              type="email"
            />
            <Button
              variant="icon"
              size="icon"
              type="button"
              aria-label="Subscribe"
              className="w-full sm:w-auto"
            >
              <HiArrowRight className="text-base" />
            </Button>
          </div>
        </div>
      </div>
      <div
        className="relative z-[1] mx-auto mt-6 max-w-screen-2xl border-t border-white/24 pt-6 text-center text-xs text-white/70 sm:text-sm md:mt-8 md:pt-8"
      >
        © 2026 reward. The Digital Architect for Loyalty. All rights reserved.
      </div>
    </footer>
  );
}
