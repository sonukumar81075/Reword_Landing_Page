import { QrCode, Check } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-primary/15 blur-2xl"
        aria-hidden
      />
      <div className="relative rounded-[2rem] border border-slate-200/80 bg-slate-900 p-2 shadow-2xl shadow-primary/10">
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-50 to-white">
          <div className="border-b border-slate-100 bg-white/90 px-4 py-3">
            <p className="text-center text-xs font-semibold text-slate-800">
              Café Luna
            </p>
            <p className="text-center text-[10px] text-slate-500">
              Buy 5 drinks, get 1 free
            </p>
          </div>
          <div className="px-4 py-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Your stamps
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 text-xs font-semibold transition-colors ${
                    i <= 3
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-dashed border-slate-200 bg-white text-slate-300"
                  }`}
                >
                  {i <= 3 ? (
                    <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  ) : (
                    <span>{i}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-soft/80 px-3 py-3">
              <div>
                <p className="text-[10px] font-medium text-slate-500">
                  Scan at checkout
                </p>
                <p className="text-xs font-semibold text-slate-800">
                  Tap to collect
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <QrCode className="h-9 w-9 text-primary" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
