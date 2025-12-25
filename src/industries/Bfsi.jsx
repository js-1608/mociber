// ServiceDetail.jsx
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

export default function Bfsi() {

    /* =======================
       BFSI RISKS
    ======================= */
    const risks = [
        {
            title: "Financial Fraud & Account Takeover",
            subtext:
                "Phishing, credential theft, SIM-swap fraud, and identity abuse cause direct financial losses and reputational damage.",
            icon: ShieldAlert,
        },
        {
            title: "Ransomware & Service Disruption",
            subtext:
                "Targeted ransomware attacks disrupt core banking, payment processing, and insurance operations.",
            icon: Zap,
        },
        {
            title: "Data Breaches & Privacy Violations",
            subtext:
                "Exposure of PII, financial records, and transaction data triggers regulatory penalties and loss of customer trust.",
            icon: Database,
        },
        {
            title: "Advanced Persistent Threats (APTs)",
            subtext:
                "Sophisticated attackers target BFSI institutions for long-term access, espionage, and systemic disruption.",
            icon: Bug,
        },
        {
            title: "Third-Party & Fintech Integration Risk",
            subtext:
                "APIs, fintech partners, and vendors introduce indirect cyber and compliance exposure.",
            icon: Users,
        },
        {
            title: "Cloud & Digital Banking Risks",
            subtext:
                "Misconfigurations and weak identity controls expose cloud-hosted banking platforms.",
            icon: Cloud,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Employees and contractors misuse privileged access to systems and sensitive financial data.",
            icon: Lock,
        },
        {
            title: "Regulatory & Compliance Failures",
            subtext:
                "Non-compliance with RBI, SEBI, IRDAI, PCI DSS, GDPR, or DPDP leads to penalties and audits.",
            icon: FileWarning,
        },
        {
            title: "Operational Resilience Gaps",
            subtext:
                "Weak BCP and DR planning impacts availability of critical financial services.",
            icon: Layers2Icon,
        },
        {
            title: "Delayed Detection & Incident Response",
            subtext:
                "Late threat detection increases financial loss, regulatory exposure, and systemic risk.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       BFSI SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "BFSI Cyber Risk Assessment & Threat Modeling",
            description:
                "Comprehensive assessment of banking, insurance, and payment ecosystems aligned with financial threat landscapes.",
            icon: ShieldCheck,
        },
        {
            title: "Fraud Detection & Financial Crime Prevention",
            description:
                "Behavioral analytics and advanced monitoring to detect fraud, account takeover, and transaction abuse.",
            icon: ShieldAlert,
        },
        {
            title: "Identity, Access & Privileged Management (IAM & PAM)",
            description:
                "Strong customer and workforce identity controls, MFA, Zero Trust access, and privileged account security.",
            icon: KeyRound,
        },
        {
            title: "Cloud & Digital Banking Security",
            description:
                "Secure architecture and monitoring for core banking, mobile banking, APIs, and fintech integrations.",
            icon: Cloud,
        },
        {
            title: "Regulatory Compliance & Audit Readiness",
            description:
                "End-to-end support for RBI, SEBI, IRDAI, PCI DSS, ISO 27001, SOC 2, GDPR, and DPDP compliance.",
            icon: FileCheck,
        },
        {
            title: "Third-Party & Vendor Risk Management",
            description:
                "Continuous assessment and monitoring of fintechs, service providers, and outsourcing partners.",
            icon: Users,
        },
        {
            title: "SOC 24×7 & Incident Response",
            description:
                "24×7 monitoring, threat intelligence, digital forensics, and rapid incident containment.",
            icon: Siren,
        },
        {
            title: "Business Continuity, DR & Operational Resilience",
            description:
                "Design and testing of BCP/DR frameworks aligned with financial regulator expectations.",
            icon: Layers2Icon,
        },
    ];

    /* =======================
       BFSI FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for BFSI organizations?",
            answer:
                "Cyber incidents in BFSI can cause direct financial loss, regulatory penalties, and erosion of customer trust.",
        },
        {
            question: "What are the biggest cyber threats facing banks and insurers?",
            answer:
                "Fraud, ransomware, data breaches, insider threats, and third-party risks are the most common threats.",
        },
        {
            question: "Which regulations apply to BFSI cybersecurity?",
            answer:
                "RBI, SEBI, IRDAI, PCI DSS, ISO 27001, SOC 2, GDPR, and DPDP are key regulations and standards.",
        },
        {
            question: "How does cybersecurity impact customer trust?",
            answer:
                "Secure systems protect customer data and transactions, directly influencing brand reputation and trust.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/Industries-banner.webp"
                        alt="BFSI Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">BFSI</span>
                    </h1>
                    {/* <p className="mt-6 text-lg text-slate-300 max-w-3xl">
                        Resilient, compliant, and trusted security for banks, NBFCs,
                        insurers, fintechs, and payment platforms.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
                            Get BFSI Security Assessment
                        </button>
                        <button className="border border-white/30 px-6 py-3 rounded-xl">
                            Talk to a BFSI Expert
                        </button>
                    </div> */}
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Secure Financial Operations, Compliance & Customer Trust
                    </h2>
                    <p className="text-slate-300 mb-6">
                        BFSI organizations operate in a high-risk, high-regulation
                        environment. Digital banking, cloud adoption, open APIs, and fintech
                        partnerships expand innovation while increasing cyber and
                        compliance risks.
                    </p>
                    <p className="text-slate-300">
                        Mociber delivers BFSI-focused cybersecurity, risk, and compliance
                        solutions that protect critical financial services while enabling
                        secure digital growth.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1553729459-efe14ef6055d"
                        alt="BFSI operations"
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
                                <div className="max-w-7xl mx-auto px-6">
                                    {/* Heading */}
                                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                                        Why Startups Need a Different Security Approach
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li>• High-value financial and personal data</li>
                                        <li>• Real-time transaction environments</li>
                                        <li>• Strict and evolving regulatory mandates</li>
                                        <li>• Integration with fintechs and open banking APIs</li>
                                        <li>• Zero tolerance for downtime</li>
                                        <li>• Constant targeting by cybercriminals and nation-state actors</li>

                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        Startups don’t need heavyweight security —
                                        <span className="text-cyan-400">
                                            {" "}
                                            they need smart, scalable, and automated security.
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
                title="BFSI Cyber & Operational Risks"
                subtitle="Top risks impacting financial stability, compliance, and trust."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s BFSI Cybersecurity Services & Solutions"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="BFSI FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
