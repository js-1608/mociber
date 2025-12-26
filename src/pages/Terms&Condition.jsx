import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="bg-[#0b1220] text-white py-20 mt-20">
      <div className="max-w-5xl mx-auto px-6 space-y-8">

        <header>
          <h1 className="text-3xl md:text-4xl font-bold">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </header>

        <p className="text-slate-300">
          By accessing or using Mociber’s website, platforms, or services, you
          agree to these Terms & Conditions. If you do not agree, please
          discontinue use.
        </p>

        <Section title="1. Services">
          <p className="text-slate-300">
            Mociber provides cybersecurity, risk, ESG, compliance, and digital
            intelligence services. Service offerings may evolve over time.
          </p>
        </Section>

        <Section title="2. Acceptable Use">
          <ul className="list-disc ml-5 space-y-2 text-slate-300">
            <li>No unauthorized access, attacks, or misuse</li>
            <li>No copying or redistribution of proprietary content</li>
            <li>No unlawful or harmful activity</li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p className="text-slate-300">
            All content, trademarks, software, and materials are the property of
            Mociber and protected under applicable laws.
          </p>
        </Section>

        <Section title="4. Confidentiality">
          <p className="text-slate-300">
            Any confidential information shared during engagements must be kept
            confidential unless disclosure is legally required.
          </p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p className="text-slate-300">
            To the maximum extent permitted by law, Mociber shall not be liable
            for indirect, incidental, or consequential damages.
          </p>
        </Section>

        <Section title="6. Governing Law">
          <p className="text-slate-300">
            These terms are governed by the laws of India.
          </p>
        </Section>

        <Section title="7. Contact">
          <p className="text-slate-300">
            For legal inquiries, contact{" "}
            <span className="text-cyan-400">legal@mociber.com</span>.
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
