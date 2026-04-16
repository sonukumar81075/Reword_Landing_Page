export const metadata = {
  title: "Security | reward",
  description: "How reward secures merchant and customer loyalty data.",
};

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-screen-xl px-6 pb-16 pt-28 md:px-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary">
        Security
      </h1>
      <p className="mt-3 text-on-surface-variant">
        Security is built into how reward handles loyalty operations.
      </p>

      <div className="mt-10 space-y-8 text-on-surface-variant">
        <section>
          <h2 className="text-2xl font-bold text-primary">Platform Protection</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>Encrypted data transmission in transit.</li>
            <li>Access controls for merchant and internal accounts.</li>
            <li>Activity monitoring to detect suspicious behavior.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Fraud Prevention</h2>
          <p className="mt-2">
            reward supports anti-abuse controls including scan limits, validation
            checks, and redemption tracking to protect loyalty programs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Incident Response</h2>
          <p className="mt-2">
            We maintain procedures to investigate, contain, and communicate
            security events with affected customers where required.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Report a Concern</h2>
          <p className="mt-2">
            To report a security issue, email us at{" "}
            <span className="font-semibold text-primary">security@reward.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
