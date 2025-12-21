// GovernmentPublicSector.jsx
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

export default function GovernmentPublicSector() {

    /* =======================
       GOVERNMENT & PUBLIC SECTOR RISKS
    ======================= */
    const risks = [
        {
            title: "Nation-State & Advanced Persistent Threats",
            subtext:
                "Government networks are prime targets for espionage, sabotage, and geopolitical cyber operations.",
            icon: ShieldAlert,
        },
        {
            title: "Ransomware & Service Disruption",
            subtext:
                "Attacks on public services and municipalities disrupt essential citizen services.",
            icon: Zap,
        },
        {
            title: "Citizen Data Breaches & Privacy Violations",
            subtext:
                "Exposure of identity, health, financial, and biometric data erodes public trust.",
            icon: Database,
        },
        {
            title: "Legacy Systems & Aging Infrastructure",
            subtext:
                "Outdated platforms lack modern security controls and are difficult to patch.",
            icon: FileWarning,
        },
        {
            title: "Critical Infrastructure Cyber Attacks",
            subtext:
                "Energy, transport, water, healthcare, and smart city systems are targeted for disruption.",
            icon: Layers2Icon,
        },
        {
            title: "Insider Threats & Privileged Abuse",
            subtext:
                "Employees and contractors misuse authorized access intentionally or accidentally.",
            icon: Lock,
        },
        {
            title: "Supply Chain & Vendor Cyber Risk",
            subtext:
                "Third-party service providers introduce hidden vulnerabilities.",
            icon: Users,
        },
        {
            title: "Cloud & Digital Government Platform Exposure",
            subtext:
                "Misconfigured cloud services and APIs expose citizen portals and e-governance platforms.",
            icon: Cloud,
        },
        {
            title: "Regulatory & Compliance Failures",
            subtext:
                "Non-compliance with cyber laws and audit requirements leads to penalties and scrutiny.",
            icon: FileCheck,
        },
        {
            title: "Limited Incident Response & Crisis Readiness",
            subtext:
                "Delayed detection increases the impact of cyber incidents on public services.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       GOVERNMENT & PUBLIC SECTOR SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Government Cyber Risk Assessment & Threat Modeling",
            description:
                "Assessment of ministries, agencies, public services, and critical infrastructure environments.",
            icon: ShieldCheck,
        },
        {
            title: "National & Public Sector SOC Services",
            description:
                "24×7 monitoring, threat intelligence, and incident response aligned with government mandates.",
            icon: Siren,
        },
        {
            title: "Secure Digital Government & e-Governance Platforms",
            description:
                "Security-by-design for citizen portals, digital identity systems, and public services.",
            icon: Code,
        },
        {
            title: "Critical Infrastructure & OT Security",
            description:
                "Protection of power, transport, water, healthcare, and smart city systems.",
            icon: Bug,
        },
        {
            title: "Identity, Access & Privileged Management",
            description:
                "Strong identity governance, MFA, and privileged access controls.",
            icon: KeyRound,
        },
        {
            title: "Cloud & Data Sovereignty Security",
            description:
                "Secure adoption of government-approved clouds with residency controls.",
            icon: Cloud,
        },
        {
            title: "Regulatory Compliance & Audit Readiness",
            description:
                "Alignment with national cyber laws, ISO 27001, NIST, and audit frameworks.",
            icon: FileCheck,
        },
        {
            title: "Third-Party & Public Sector Vendor Risk Management",
            description:
                "Continuous assessment of IT service providers and system integrators.",
            icon: Users,
        },
        {
            title: "Cyber Incident Response & National Crisis Management",
            description:
                "Coordinated response, forensics, and recovery for high-impact incidents.",
            icon: Zap,
        },
    ];

    /* =======================
       GOVERNMENT & PUBLIC SECTOR FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for government and public sector organizations?",
            answer:
                "Cyber incidents can disrupt essential services, expose citizen data, and threaten national security.",
        },
        {
            question: "What are the biggest cyber threats to the public sector?",
            answer:
                "Nation-state attacks, ransomware, data breaches, insider threats, and supply chain compromise.",
        },
        {
            question: "How does cybersecurity impact citizen trust?",
            answer:
                "Secure systems protect personal data and ensure reliable services, building public confidence.",
        },
        {
            question: "What regulations apply to government cybersecurity?",
            answer:
                "National cyber laws, data protection acts, ISO 27001, NIST frameworks, and audit standards.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
                        alt="Government Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Government & Public Sector</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Secure, Compliant & Citizen-Centric Digital Governance
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Governments are accelerating digital transformation to deliver
                        citizen services, enable smart cities, and modernize infrastructure.
                        This expansion also increases exposure to cyber threats and regulatory risk.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with public trust, regulatory accountability,
                        and mission continuity.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1589395937772-f67057e2336e"
                        alt="Digital government services"
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
                                        Why Retail & E-Commerce Security Is Uniquely Challenging
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li>•	High-value citizen and national data </li>
                                        <li>•	Complex regulatory and oversight requirements
                                        </li><li>•	Large-scale legacy environments
                                        </li><li>•	Public accountability and transparency expectations
                                        </li><li>•	Interconnected critical infrastructure systems
                                        </li><li>•	Constant targeting by cybercriminals and hostile nation-states

                                        </li></ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In the public sector, cybersecurity failures directly affect 
                                        <span className="text-cyan-400">
                                            {" "}
                                            citizens, safety, and national stability.
                                        </span>
                                    </p>
                                </div>
                            </section>

                            {/* Case studies */}
                            <section id="case-studies" className="space-y-6 mt-8 p-2 lg:p-4">
                                <h3 className="text-3xl md:text-4xl font-semibold mb-8">Case studies</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[1, 2].map((i) => (
                                        <article key={i} className="bg-[#071226] rounded-xl overflow-hidden border border-white/6 shadow-md">
                                            <img
                                                src={`https://images.unsplash.com/photo-1505686994434-e3cc3d4a5f6d?q=80&w=1200&auto=format&fit=crop`}
                                                alt={`case ${i}`}
                                                className="w-full h-44 object-cover"
                                            />
                                            <div className="p-5">
                                                <h4 className="font-semibold mb-2">Cloud migration for GlobalBank</h4>
                                                <p className="text-sm text-gray-300 mb-3">Reduced TCO by 32% and improved security posture across core systems.</p>
                                                <a href="#" className="text-sm inline-flex items-center gap-2 text-indigo-300">Read story →</a>
                                            </div>
                                        </article>
                                    ))}
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
                title="Government & Public Sector Cyber Risks"
                subtitle="Top risks impacting citizen services, trust, and national stability."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Government & Public Sector Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Government & Public Sector FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
