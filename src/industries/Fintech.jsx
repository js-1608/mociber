// Fintech.jsx
import HeroBanner from "@/components/ServiceHero";
import React from "react";
import {
    ShieldCheck,
    Cloud,
    Code,
    Lock,
    Users,
    Database,
    Bug,
    Zap,
    FileCheck,
    ShieldAlert,
    TrendingDown,
    FileWarning,
    Layers2Icon,
    GitBranch,
    KeyRound,
    Siren,
} from "lucide-react";
import FaqSection from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import KeyRisks from "@/components/Risks";
import ServiceSolution from "@/components/ServiceSolution";
import TrustedLogos from "@/components/TrustedLogos";
import IndustriesLatestBlogs from "./IndustiresBlogs";

export default function Fintech() {

    /* =======================
       FINTECH RISKS
    ======================= */
    const risks = [
        {
            title: "Digital Fraud & Transaction Abuse",
            subtext:
                "Account takeover, payment fraud, mule networks, and automated attacks exploit real-time transaction platforms.",
            icon: ShieldAlert,
        },
        {
            title: "API & Open Banking Exploitation",
            subtext:
                "Poorly secured APIs expose customer data, payment flows, and partner integrations.",
            icon: Bug,
        },
        {
            title: "Cloud-Native & Microservices Exposure",
            subtext:
                "Misconfigurations in cloud infrastructure, containers, and serverless services lead to data breaches.",
            icon: Cloud,
        },
        {
            title: "Identity Theft & Authentication Bypass",
            subtext:
                "Credential stuffing, SIM-swap fraud, and MFA fatigue attacks compromise user and admin accounts.",
            icon: Lock,
        },
        {
            title: "Data Privacy & Regulatory Violations",
            subtext:
                "Exposure of PII, financial, and behavioral data results in penalties and reputational damage.",
            icon: Database,
        },
        {
            title: "Third-Party & Embedded Finance Risk",
            subtext:
                "BaaS providers, payment gateways, and partners introduce indirect cyber and compliance risk.",
            icon: Users,
        },
        {
            title: "Ransomware & Platform Downtime",
            subtext:
                "Disruption of payment, lending, or trading platforms directly impacts revenue and trust.",
            icon: Zap,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Developers and support teams misuse access to sensitive systems and production data.",
            icon: KeyRound,
        },
        {
            title: "Compliance & Audit Gaps",
            subtext:
                "Failure to meet PCI DSS, RBI, SEBI, SOC 2, or ISO 27001 delays funding and expansion.",
            icon: FileWarning,
        },
        {
            title: "Limited Detection & Incident Response",
            subtext:
                "Delayed response increases financial loss, customer impact, and regulator scrutiny.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       FINTECH SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "FinTech Cyber Risk Assessment & Threat Modeling",
            description:
                "Comprehensive assessment of platforms, APIs, cloud infrastructure, and transaction flows.",
            icon: ShieldCheck,
        },
        {
            title: "Fraud Detection & Financial Crime Prevention",
            description:
                "Behavioral analytics, anomaly detection, and transaction monitoring to reduce fraud and abuse.",
            icon: ShieldAlert,
        },
        {
            title: "API & Application Security",
            description:
                "Secure design, testing, and monitoring of APIs, mobile apps, and web platforms.",
            icon: Code,
        },
        {
            title: "Identity, Authentication & Access Security",
            description:
                "Strong IAM, MFA, customer identity protection, and privileged access management.",
            icon: KeyRound,
        },
        {
            title: "Cloud & DevSecOps Security",
            description:
                "Secure CI/CD pipelines, container security, IaC controls, and cloud posture management.",
            icon: GitBranch,
        },
        {
            title: "Data Protection & Privacy Engineering",
            description:
                "Encryption, tokenization, consent management, and privacy-by-design implementation.",
            icon: Database,
        },
        {
            title: "Regulatory Compliance & Audit Readiness",
            description:
                "Support for PCI DSS, ISO 27001, SOC 2, RBI, SEBI, GDPR, DPDP, and global regulations.",
            icon: FileCheck,
        },
        {
            title: "Third-Party & Embedded Finance Risk Management",
            description:
                "Continuous monitoring of BaaS providers, partners, and service vendors.",
            icon: Users,
        },
        {
            title: "Security Operations & Incident Response",
            description:
                "24×7 monitoring, threat intelligence, forensics, and rapid incident containment.",
            icon: Siren,
        },
    ];

    /* =======================
       FINTECH FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for FinTech companies?",
            answer:
                "FinTech platforms handle real-time financial transactions and sensitive data, making them prime targets for fraud and cyberattacks.",
        },
        {
            question: "What are the biggest cyber risks in FinTech?",
            answer:
                "Fraud, API attacks, identity theft, cloud misconfigurations, and regulatory non-compliance.",
        },
        {
            question: "Which regulations apply to FinTech cybersecurity?",
            answer:
                "PCI DSS, ISO 27001, SOC 2, RBI, SEBI, GDPR, DPDP, and region-specific financial regulations.",
        },
        {
            question: "How does cybersecurity impact FinTech growth?",
            answer:
                "Strong security enables customer trust, regulatory approval, partnerships, and faster market expansion.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/Industries-banner.webp"
                        alt="FinTech Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight  text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">FinTech</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Secure, Scalable & Compliant Digital Finance
                    </h2>
                    <p className="text-slate-300 mb-6">
                        FinTech organizations operate at the intersection of speed,
                        innovation, customer trust, and regulation. APIs, cloud-native
                        platforms, embedded finance, and real-time payments expand growth
                        while increasing cyber risk.
                    </p>
                    <p className="text-slate-300">
                        Mociber delivers FinTech-focused cybersecurity, risk, and
                        compliance solutions that protect platforms while enabling
                        rapid innovation and regulatory alignment.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1565372910294-0a9b7b4f1a8f"
                        alt="FinTech operations"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* MAIN CONTENT + RIGHT SIDEBAR */}
            <main className="max-w-7xl mx-auto pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left — main content */}
                    <article className="lg:col-span-8 space-y-10">
                        {/* Overview / Key benefits */}
                        <div className="bg-[#000A1F] text-white overflow-hidden">
                            <section className="bg-[#071226] text-white p-2 lg:p-4 rounded-2xl">
                                <div className="max-w-7xl mx-auto">
                                    {/* Heading */}
                                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                        Why FinTech Security Is Uniquely Challenging
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li>•	High transaction volumes and real-time processing</li>
                                        <li>•	Rapid product releases and continuous innovation</li>
                                        <li>•	Heavy reliance on APIs, cloud, and third-party services</li>
                                        <li>•	Cross-border regulatory requirements</li>
                                        <li>•	Zero tolerance for downtime or fraud</li>
                                        <li>•	Continuous pressure from regulators, partners, and investors</li>

                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In FinTech, security failures directly impact
                                        <span className="text-cyan-400">
                                            {" "}
                                            valuation, growth, and survival.
                                        </span>
                                    </p>
                                </div>
                            </section>

                            {/* Blogs */}
                            <section id="case-studies" className="space-y-6 mt-8 p-2 lg:p-4">
                                <h3 className="text-3xl md:text-4xl font-semibold mb-8">Blogs</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <IndustriesLatestBlogs category="industries" limit={2} />
                                </div>
                            </section>



                        </div>
                    </article>

                    {/* Right — sticky sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {/* Quick facts / metrics */}
                            <div className="bg-[#071226] p-6 rounded-xl border border-white/6">
                                <h4 className="text-lg font-semibold mb-3">Quick facts</h4>
                                <ul className="text-sm text-gray-300 space-y-2">
                                    <li><strong>99.99%</strong> availability SLA</li>
                                    <li><strong>32%</strong> avg. cost reduction</li>
                                    <li><strong>Automated</strong> compliance checks</li>
                                </ul>
                            </div>

                            {/* Contact CTA */}
                            <div id="contact" className="bg-linear-to-br from-[#6f2df2] to-[#5b2bd6] p-6 rounded-xl shadow-lg">
                                <h4 className="text-lg font-semibold mb-2">Talk to an expert</h4>
                                <p className="text-sm text-white/90 mb-4">Book a free consultation to discuss migration strategy and security plan.</p>
                                <a href="#" className="block text-center bg-white text-[#4b21b8] px-4 py-3 rounded-md font-semibold">Request a consultation</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <TrustedLogos />

            <KeyRisks
                title="FinTech Cyber & Operational Risks"
                subtitle="Top risks impacting growth, compliance, and customer trust."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s FinTech Cybersecurity Services & Solutions"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="FinTech FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
