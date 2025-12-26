import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#0b1220] text-white py-20 mt-20">
      <div className="max-w-5xl mx-auto px-6 space-y-8">

        <header>
          <h1 className="text-3xl md:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </header>

        <p className="text-slate-300">
          Mociber (“we”, “our”, “us”) is committed to protecting the privacy,
          confidentiality, and security of personal and organizational data.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard information when you access our website, platforms, and
          services.
        </p>

        <Section title="1. Information We Collect">
          <ul className="list-disc ml-5 space-y-2 text-slate-300">
            <li>Personal information such as name, email, phone, organization</li>
            <li>Technical data including IP address, browser, device details</li>
            <li>Business and security data provided during service delivery</li>
          </ul>
        </Section>

        <Section title="2. How We Use Information">
          <ul className="list-disc ml-5 space-y-2 text-slate-300">
            <li>To deliver and improve cybersecurity, GRC, ESG, and risk services</li>
            <li>To respond to inquiries, demos, and support requests</li>
            <li>To meet legal, regulatory, and compliance obligations</li>
          </ul>
        </Section>

        <Section title="3. Data Sharing">
          <p className="text-slate-300">
            We do not sell personal data. Information is shared only with
            authorized partners, service providers, or regulators when required
            by law.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p className="text-slate-300">
            We implement enterprise-grade security controls including encryption,
            access controls, monitoring, and secure infrastructure practices.
          </p>
        </Section>

        <Section title="5. Your Rights">
          <p className="text-slate-300">
            You may request access, correction, deletion, or restriction of your
            data by contacting us at{" "}
            <span className="text-cyan-400">privacy@mociber.com</span>.
          </p>
        </Section>

        <Section title="6. Updates">
          <p className="text-slate-300">
            This policy may be updated periodically. Continued use of our
            services constitutes acceptance of the updated policy.
          </p>
        </Section>

      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}
