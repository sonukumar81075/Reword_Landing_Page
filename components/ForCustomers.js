import { Smartphone, Stamp, MapPin, Gift } from "lucide-react";

const items = [
  {
    icon: Smartphone,
    title: "No app needed",
    desc: "Works in the browser — fast signup, zero clutter.",
  },
  {
    icon: Stamp,
    title: "Track your stamps",
    desc: "See progress on your digital card anytime.",
  },
  {
    icon: MapPin,
    title: "Discover nearby stores",
    desc: "Map-based discovery of places using Revord.",
  },
  {
    icon: Gift,
    title: "Claim rewards easily",
    desc: "Redeem in-store when your card is complete.",
  },
];

export default function ForCustomers() {
  return (
    <section
      id="customers"
      className="border-b border-slate-200/60 bg-gradient-to-b from-slate-soft/50 to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            For customers
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Built for phones first — scan, stamp, done.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-50 text-primary ring-1 ring-lime-100">
                <item.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
