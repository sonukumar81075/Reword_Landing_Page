export const metadata = {
  title: "Privacy Policy | Revord",
  description:
    "How Revord collects, uses, and protects customer and merchant data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-screen-xl px-6 pb-16 pt-28 md:px-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary">
        Privacy Policy
      </h1>
      <p className="mt-3 text-on-surface-variant">
        Last updated: April 10, 2026
      </p>

      <div className="mt-10 space-y-8 text-on-surface-variant">
        <section>
          <h2 className="text-2xl font-bold text-primary">Overview</h2>
          <p className="mt-2">
            Revord helps local businesses run digital loyalty programs through QR
            cards. We process only the data needed to provide loyalty services for
            merchants and customers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Data We Collect</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>Basic account and business profile details for merchants.</li>
            <li>Loyalty interaction data such as scans, stamps, and redemptions.</li>
            <li>Device/browser technical data for reliability and security.</li>
            <li>Support messages sent to Revord.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">How We Use Data</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>Operate and improve loyalty features and customer experience.</li>
            <li>Provide merchant analytics and campaign insights.</li>
            <li>Protect against fraud and suspicious activity.</li>
            <li>Respond to support requests and service updates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Data Sharing</h2>
          <p className="mt-2">
            Revord does not sell personal data. We only share data with trusted
            service providers needed to operate our platform, or when required by
            law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">Your Rights</h2>
          <p className="mt-2">
            Merchants and customers can request access, correction, or deletion of
            eligible data by contacting support.
          </p>
        </section>
      </div>
    </main>
  );
}
