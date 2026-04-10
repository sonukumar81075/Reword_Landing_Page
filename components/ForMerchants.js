import {
  SlidersHorizontal,
  CalendarClock,
  Download,
  BadgeCheck,
  LayoutDashboard,
} from "lucide-react";

const items = [
  {
    icon: SlidersHorizontal,
    title: "Set stamp rules",
    desc: "Define how many stamps unlock each reward.",
  },
  {
    icon: CalendarClock,
    title: "Limit scans per day",
    desc: "Keep visits fair and prevent abuse.",
  },
  {
    icon: Download,
    title: "Download branded QR",
    desc: "Print-ready assets that match your brand.",
  },
  {
    icon: BadgeCheck,
    title: "Approve rewards easily",
    desc: "One-tap redemption from your dashboard.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard control",
    desc: "See activity and manage your program in one place.",
  },
];

export default function ForMerchants() {
  return (
    <section
      id="merchants"
      className="border-b border-slate-200/60 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              For merchants
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to run loyalty without a spreadsheet or a
              second job.
            </p>
            <a
              href="#cta"
              className="mt-8 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark"
            >
              List your business
            </a>
          </div>
          <ul className="grid gap-4 sm:grid-cols-1">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200/80 bg-slate-soft/30 p-5 transition hover:border-primary/15 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-slate-200/80">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
