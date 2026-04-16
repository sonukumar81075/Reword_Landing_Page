export const metadata = {
  title: "Contact Support | reward",
  description: "Get help with your reward merchant or customer experience.",
};

export default function ContactSupportPage() {
  return (
    <main className="mx-auto max-w-screen-xl px-6 pb-16 pt-28 md:px-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary">
        Contact Support
      </h1>
      <p className="mt-3 text-on-surface-variant">
        We are here to help merchants and customers get the best from reward.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
          <h2 className="text-xl font-bold text-primary">General Support</h2>
          <p className="mt-2 text-on-surface-variant">
            For account help, onboarding, or loyalty setup questions.
          </p>
          <p className="mt-4 font-semibold text-primary">support@reward.com</p>
        </section>

        <section className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
          <h2 className="text-xl font-bold text-primary">Merchant Success</h2>
          <p className="mt-2 text-on-surface-variant">
            For campaign strategy, retention ideas, and growth guidance.
          </p>
          <p className="mt-4 font-semibold text-primary">growth@reward.com</p>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
        <h2 className="text-xl font-bold text-primary">Typical Response Times</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-on-surface-variant">
          <li>General support: within 24 hours</li>
          <li>Urgent service issues: within 4 hours</li>
          <li>Billing and account updates: within 1 business day</li>
        </ul>
      </section>
    </main>
  );
}
