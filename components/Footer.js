"use client";

import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";
import { LuShare2 } from "react-icons/lu";
import Button from "@/components/Button";

export default function Footer() {
  const pathname = usePathname();
  const isSupportPage =
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-service" ||
    pathname === "/contact-support" ||
    pathname === "/security";

  return (
    <footer
      className={`px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-24 ${
        isSupportPage ? "bg-[#0a5f2f]" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        <div className="col-span-2 space-y-6 md:col-span-1">
          <p
            className={`font-headline text-xl font-extrabold tracking-tight ${
              isSupportPage ? "text-white" : "text-primary"
            }`}
          >
            Revord
          </p>
          <p
            className={`text-sm leading-relaxed ${
              isSupportPage ? "text-white/80" : "text-slate-500"
            }`}
          >
            The digital architect for local loyalty. Simple, fast, and built for
            humans.
          </p>
          <div className="flex gap-4">
            <a
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                isSupportPage
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-slate-200 hover:bg-primary hover:text-white"
              }`}
              href="#"
            >
              <LuShare2 className="text-sm" />
            </a>
          </div>
        </div>
        <div>
          <h4
            className={`font-headline mb-6 text-base font-bold ${
              isSupportPage ? "text-white" : "text-primary"
            }`}
          >
            Product
          </h4>
          <ul
            className={`space-y-4 text-sm ${
              isSupportPage ? "text-white/75" : "text-slate-500"
            }`}
          >
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="#"
              >
                Merchant Dashboard
              </a>
            </li>
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="#"
              >
                Customer Experience
              </a>
            </li>
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="#"
              >
                Pricing Plans
              </a>
            </li>
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="#"
              >
                Release Notes
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className={`font-headline mb-6 text-base font-bold ${
              isSupportPage ? "text-white" : "text-primary"
            }`}
          >
            Support
          </h4>
          <ul
            className={`space-y-4 text-sm ${
              isSupportPage ? "text-white/75" : "text-slate-500"
            }`}
          >
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="/terms-of-service"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="/contact-support"
              >
                Contact Support
              </a>
            </li>
            <li>
              <a
                className={`underline-offset-4 hover:underline ${
                  isSupportPage ? "hover:text-white" : "hover:text-primary"
                }`}
                href="/security"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4
            className={`font-headline mb-6 text-base font-bold ${
              isSupportPage ? "text-white" : "text-primary"
            }`}
          >
            Subscribe
          </h4>
          <p
            className={`mb-4 text-sm ${
              isSupportPage ? "text-white/80" : "text-slate-500"
            }`}
          >
            Get the latest on local growth tips.
          </p>
          <div className="flex gap-2">
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
            >
              <HiArrowRight className="text-base" />
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`mx-auto mt-8 max-w-screen-2xl border-t pt-8 text-center text-sm md:mt-16 md:pt-16 ${
          isSupportPage
            ? "border-white/20 text-white/60"
            : "border-slate-200 text-slate-400"
        }`}
      >
        © 2024 Revord. The Digital Architect for Loyalty. All rights reserved.
      </div>
    </footer>
  );
}
