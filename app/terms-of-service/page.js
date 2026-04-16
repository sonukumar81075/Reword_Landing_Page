export const metadata = {
  title: "Terms of Service | reward",
  description: "Terms governing use of the reward loyalty platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-screen-xl px-6 pb-16 pt-28 md:px-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary">
        Terms of Service
      </h1>
      <p className="mt-3 text-on-surface-variant">
        Last updated: April 10, 2026
      </p>

      <div className="mt-10 space-y-8 text-on-surface-variant">
        <section>
          <h2 className="text-2xl font-bold text-primary">Acceptance of Terms</h2>
          <p className="mt-2">
            By using reward, you agree to these Terms. If you do not agree, do
            not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Merchant Responsibilities</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>Provide accurate business details and campaign information.</li>
            <li>Use fair and lawful loyalty rules for customers.</li>
            <li>Protect account credentials and staff access.</li>
            <li>Comply with local consumer and data laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Customer Use</h2>
          <p className="mt-2">
            Customers may use reward cards for legitimate rewards activity only.
            Abuse, fraud, or attempts to manipulate reward flows may result in
            restrictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Service Availability</h2>
          <p className="mt-2">
            We work to keep reward reliable but do not guarantee uninterrupted
            access at all times.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Termination</h2>
          <p className="mt-2">
            reward may suspend or terminate access for serious misuse, fraud,
            security risks, or legal requirements.
          </p>
        </section>
      </div>
    </main>
  );
}
