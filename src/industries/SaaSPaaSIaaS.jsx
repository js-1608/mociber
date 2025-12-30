// SaaSPaaSIaaS.jsx
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
import LatestBlogsByTag from "./IndustiresBlogs";
import { Link } from "react-router-dom";

export default function SaaSPaaSIaaS() {

    /* =======================
       SAAS, PAAS & IAAS RISKS
    ======================= */
    const risks = [
        {
            title: "Multi-Tenant Data Exposure",
            subtext:
                "Logical isolation failures expose customer data across shared cloud environments.",
            icon: Database,
        },
        {
            title: "Cloud Misconfigurations & Over-Permissive Access",
            subtext:
                "Weak IAM roles, exposed storage, and insecure APIs create direct breach paths.",
            icon: Cloud,
        },
        {
            title: "Insecure Software Development Practices",
            subtext:
                "Rapid development cycles introduce vulnerabilities that reach production systems.",
            icon: Code,
        },
        {
            title: "API & Platform Abuse",
            subtext:
                "Public and partner APIs are exploited for data scraping and privilege escalation.",
            icon: Bug,
        },
        {
            title: "Supply Chain & Open-Source Dependency Risk",
            subtext:
                "Compromised libraries, CI/CD pipelines, and third-party services introduce backdoors.",
            icon: FileWarning,
        },
        {
            title: "Ransomware & Platform Availability Attacks",
            subtext:
                "Disruption of cloud workloads or SaaS platforms impacts thousands of customers.",
            icon: Zap,
        },
        {
            title: "Identity & Account Takeover",
            subtext:
                "Credential theft, token abuse, and MFA fatigue attacks compromise accounts.",
            icon: Lock,
        },
        {
            title: "Compliance & Data Residency Violations",
            subtext:
                "Failure to meet GDPR, SOC 2, ISO 27001, or DPDP impacts market access.",
            icon: FileCheck,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Developers, SREs, or operators misuse elevated access to sensitive systems.",
            icon: ShieldAlert,
        },
        {
            title: "Limited Visibility Across Code & Cloud",
            subtext:
                "Disconnected tooling delays detection across development and runtime environments.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       SAAS, PAAS & IAAS SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Cloud Platform Risk Assessment & Architecture Review",
            description:
                "Evaluation of SaaS, PaaS, and IaaS architectures, tenancy models, and trust boundaries.",
            icon: ShieldCheck,
        },
        {
            title: "Secure Software Development & DevSecOps Enablement",
            description:
                "Security embedded into SDLC with SAST, DAST, SCA, secrets management, and CI/CD hardening.",
            icon: GitBranch,
        },
        {
            title: "Cloud Infrastructure & Configuration Security",
            description:
                "Continuous monitoring and hardening of AWS, Azure, and Google Cloud environments.",
            icon: Cloud,
        },
        {
            title: "API & Platform Security Engineering",
            description:
                "Design, testing, and runtime protection of APIs, microservices, and platform services.",
            icon: Code,
        },
        {
            title: "Identity, Access & Privileged Management",
            description:
                "Strong IAM, MFA, least-privilege access, and JIT controls for cloud teams.",
            icon: KeyRound,
        },
        {
            title: "Software Supply Chain & Integrity Assurance",
            description:
                "SBOMs, dependency governance, build signing, and artifact verification.",
            icon: Layers2Icon,
        },
        {
            title: "Compliance, Trust & Audit Readiness",
            description:
                "Support for SOC 2, ISO 27001, ISO 27701, GDPR, DPDP, HIPAA, and customer audits.",
            icon: FileCheck,
        },
        {
            title: "Cloud SOC, Monitoring & Incident Response",
            description:
                "24×7 detection, threat intelligence, and rapid response across cloud platforms.",
            icon: Siren,
        },
        {
            title: "Business Continuity & Platform Resilience",
            description:
                "Design and testing of DR, backup, and high-availability strategies.",
            icon: Zap,
        },
    ];

    /* =======================
       SAAS, PAAS & IAAS FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for SaaS, PaaS, and IaaS providers?",
            answer:
                "A single security failure can impact thousands of customers and damage platform trust.",
        },
        {
            question: "What are the biggest risks for SaaS and cloud platforms?",
            answer:
                "Data exposure, misconfigurations, insecure APIs, supply chain vulnerabilities, and compliance failures.",
        },
        {
            question: "How does DevSecOps improve cloud security?",
            answer:
                "By embedding security into development pipelines and reducing vulnerabilities before deployment.",
        },
        {
            question: "What is shared responsibility in cloud security?",
            answer:
                "Providers secure infrastructure, while platform owners secure configurations, identities, and data.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/industries.jpeg"
                        alt="Cloud Platform Security"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">SaaS, PaaS & IaaS</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Secure Cloud Platforms & Trusted Software at Scale
                    </h2>
                    <p className="text-slate-300 mb-6">
                        SaaS, PaaS, and IaaS providers power mission-critical business
                        operations through cloud platforms, APIs, and continuous delivery.
                        Speed and scale introduce security, operational, and compliance risk.
                    </p>
                    <p className="text-slate-300">
                        Mociber integrates cloud security, DevSecOps, and compliance-by-design
                        from code to cloud—enabling secure growth and customer trust.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                        alt="SaaS platform operations"
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
                                        Why Telecom & Media Security Is Uniquely Complex
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li> •	Shared-responsibility cloud models</li>
                                        <li> •	Always-on, globally distributed platforms</li>
                                        <li> •	Continuous deployment and rapid feature releases</li>
                                        <li> •	Heavy reliance on APIs and automation</li>
                                        <li> •	High customer trust and uptime expectations</li>
                                        <li> •	Strict regulatory and contractual obligations</li>


                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        For cloud providers, security failures scale instantly
                                        <span className="text-cyan-400">
                                            {" "}
                                            across customers and geographies.
                                        </span>
                                    </p>
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
                                <Link to="contact" className="block text-center bg-white text-[#4b21b8] px-4 py-3 rounded-md font-semibold">Request a consultation</Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Blogs */}
            <section id="case-studies" className="space-y-2 mt-2  max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Blogs</h3>
                <LatestBlogsByTag tag="saas-Ai" limit={3} />
            </section>
            <TrustedLogos />

            <KeyRisks
                title="SaaS, PaaS & IaaS Cyber Risks"
                subtitle="Top risks impacting platform trust, availability, and compliance."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s SaaS, PaaS & IaaS Security Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="SaaS, PaaS & IaaS FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
