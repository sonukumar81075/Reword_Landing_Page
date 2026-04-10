import {
  HiOutlineArrowTrendingUp,
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineNoSymbol,
  HiOutlineQrCode,
  HiOutlineShieldCheck,
  HiOutlineXCircle,
} from "react-icons/hi2";

export default function ProblemSolution() {
  const problems = [
    {
      icon: HiOutlineNoSymbol,
      title: "Paper cards get lost",
      desc: "80% of paper stamp cards are never completed or lost within a week.",
    },
    {
      icon: HiOutlineNoSymbol,
      title: "App fatigue is real",
      desc: "Customers refuse to download yet another app for a single store.",
    },
    {
      icon: HiOutlineChartBar,
      title: "No clear retention visibility",
      desc: "Owners cannot quickly see who returns, when they return, or which rewards perform best.",
    },
    {
      icon: HiOutlineClock,
      title: "Checkout flow gets delayed",
      desc: "Complex loyalty steps slow staff and create friction during busy hours.",
    },
  ];

  const solutions = [
    {
      icon: HiOutlineQrCode,
      title: "Instant Digital Wallet",
      desc: "Cards live in the browser or Apple/Google Wallet. Zero friction.",
    },
    {
      icon: HiOutlineArrowTrendingUp,
      title: "Data-driven growth",
      desc: "Know exactly who your best customers are and when they visit.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Simple anti-abuse controls",
      desc: "Set clear scan limits and validation rules without making checkout complicated.",
    },
    {
      icon: HiOutlineBolt,
      title: "Fast checkout experience",
      desc: "Scan, stamp, and redeem in seconds so staff move quickly and customers stay happy.",
    },
  ];

  return (
    <section id="problem-solution" className="bg-surface-container-low py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-4xl lg:text-5xl">
            Why local businesses struggle
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-on-surface-variant md:text-base">
            Traditional loyalty programs are often too expensive, too complex,
            or too easy to ignore.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-rose-700">
              <HiOutlineXCircle className="text-sm" />
              The Problem
            </div>
            <ul className="space-y-7">
              {problems.map((item, index) => (
                <li key={item.title} className="flex gap-5">
                  <div className="flex w-12 flex-shrink-0 flex-col items-center">
                    <item.icon className="rounded-full border border-primary bg-transparent p-1.5 text-[32px] text-primary md:p-2 md:text-[38px]" />
                    {index !== problems.length - 1 && (
                      <span className="mt-2 w-[2px] flex-1 bg-primary/90" aria-hidden />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-lg font-bold leading-tight text-primary md:text-[1.35rem]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-on-surface-variant md:text-base">{item.desc}</p>
                    {index !== problems.length - 1 && (
                      <div className="mt-6 border-b border-outline-variant/35" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center justify-center lg:flex">
           
          </div>

          <div>
            <div className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              <HiOutlineCheckCircle className="text-sm" />
              The Revord Solution
            </div>
            <ul className="space-y-7">
              {solutions.map((item, index) => (
                <li key={item.title} className="flex gap-5">
                  <div className="flex w-12 flex-shrink-0 flex-col items-center">
                    <item.icon className="rounded-full border border-primary bg-transparent p-1.5 text-[32px] text-primary md:p-2 md:text-[38px]" />
                    {index !== solutions.length - 1 && (
                      <span className="mt-2 w-[2px] flex-1 bg-primary/90" aria-hidden />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-lg font-bold leading-tight text-primary md:text-[1.35rem]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-on-surface-variant md:text-base">{item.desc}</p>
                    {index !== solutions.length - 1 && (
                      <div className="mt-6 border-b border-outline-variant/35" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
