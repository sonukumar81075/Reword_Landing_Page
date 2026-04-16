import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden pb-12 pt-24 md:pb-16 md:pt-28 lg:min-h-screen lg:pb-20 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-bg-band absolute left-[-30%] top-[18%] h-44 w-[160%] rounded-full bg-gradient-to-r from-primary/20 via-lime-300/30 to-tertiary-container/25 blur-3xl" />
        <div className="hero-bg-band-delayed absolute left-[-35%] bottom-[10%] h-40 w-[170%] rounded-full bg-gradient-to-r from-emerald-200/30 via-primary/20 to-lime-200/30 blur-3xl" />
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
              <Button
                variant="primary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.rewardlelo.com/merchant/signup"
                className="w-fit text-center font-bold"
              >
                List your business
              </Button>
              <Button
                variant="secondary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.rewardlelo.com"
                className="w-fit text-center font-bold"
              >
                Start as customer
              </Button>
            </div>
          </div>
          <div className="group relative hero-visual-enter">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-emerald-100/70 via-lime-100/50 to-yellow-100/40 blur-3xl" />
            <div className="relative rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-[0_20px_40px_rgba(15,139,63,0.12)] sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-2xl border-l-[6px] border-t-[6px] border-primary/70 sm:h-20 sm:w-20" />
                <div className="absolute -right-2 -bottom-2 h-16 w-16 rounded-br-2xl border-b-[6px] border-r-[6px] border-tertiary-container/85 sm:h-20 sm:w-20" />
                <div className="absolute left-3 top-3 h-3 w-3 rounded-full bg-primary/70 shadow-[0_0_18px_rgba(15,139,63,0.45)]" />
                <div className="absolute bottom-3 right-3 h-3 w-3 rounded-full bg-tertiary-container/90 shadow-[0_0_20px_rgba(213,165,20,0.35)]" />
              </div>
              <div className="relative overflow-hidden rounded-xl bg-[#121926] p-1.5 sm:p-2 ring-1 ring-white/10">
                <Image
                  alt="RewardLelo App UI"
                  className="hero-phone-float h-[300px] w-full rounded-lg object-contain sm:h-[400px] lg:h-[520px]"
                  src="/images/logo/image.png"
                  width={1200}
                  height={1000}
                  quality={100}
                  priority
                />
                <span
                  aria-hidden
                  className="hero-scan-line pointer-events-none absolute inset-y-1 left-0 w-[34%] rounded-lg"
                />
              </div>
              <div className="hero-badge-float absolute -bottom-5 left-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl sm:-bottom-6 sm:-left-6 sm:gap-3 sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed sm:h-12 sm:w-12">
                  <HiSparkles className="text-primary" />
                </div>
                <div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">Reward Unlocked</p><p className="text-sm font-bold text-primary sm:text-base">Free Latte Claimed!</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
