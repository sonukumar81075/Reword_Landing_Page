import { Shield, Fingerprint, Zap, QrCode } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Secure system",
    desc: "Built with modern security practices for your peace of mind.",
  },
  {
    icon: Fingerprint,
    title: "No OTP friction",
    desc: "Smooth entry without endless verification codes.",
  },
  {
    icon: Zap,
    title: "Fast login",
    desc: "Get customers from scan to stamp in seconds.",
  },
  {
    icon: QrCode,
    title: "Reliable QR validation",
    desc: "Each scan ties cleanly to your store’s rules.",
  },
];

export default function TrustSecurity() {
  return (
    <section className="border-b border-slate-200/60 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trust & security
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Simple for people — solid under the hood.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/60 bg-slate-soft/40 p-6 transition hover:border-primary/20 hover:bg-white hover:shadow-md"
            >
              <item.icon
                className="h-8 w-8 text-primary"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
