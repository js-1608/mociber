// AerospaceDefense.jsx
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
import { Link } from "react-router";

export default function AerospaceDefense() {

    /* =======================
       AEROSPACE & DEFENSE RISKS
    ======================= */
    const risks = [
        {
            title: "Nation-State & Advanced Persistent Threats (APTs)",
            subtext:
                "State-sponsored actors target defense networks to steal classified data and disrupt national security operations.",
            icon: ShieldAlert,
        },
        {
            title: "Defense Supply Chain Compromise",
            subtext:
                "Tiered suppliers introduce vulnerabilities attackers exploit to infiltrate prime contractors.",
            icon: Users,
        },
        {
            title: "Intellectual Property & Classified Data Theft",
            subtext:
                "Theft of weapons designs, avionics software, satellite data, and military research.",
            icon: FileWarning,
        },
        {
            title: "OT, ICS & Weapon System Exploitation",
            subtext:
                "Unsecured OT controlling manufacturing, testing, and defense systems becomes a high-impact target.",
            icon: Bug,
        },
        {
            title: "Space & Satellite Cyber Threats",
            subtext:
                "GPS spoofing, satellite command hijacking, and ground-station attacks disrupt ISR capabilities.",
            icon: Cloud,
        },
        {
            title: "Insider Threats & Privileged Abuse",
            subtext:
                "Cleared personnel and contractors misuse access intentionally or accidentally.",
            icon: Lock,
        },
        {
            title: "Regulatory & Export Control Non-Compliance",
            subtext:
                "Failure to meet ITAR, EAR, CMMC, NIST, or DFARS leads to penalties and contract loss.",
            icon: FileCheck,
        },
        {
            title: "Ransomware & Operational Disruption",
            subtext:
                "Cyber extortion halts production lines, MRO operations, and defense readiness.",
            icon: Zap,
        },
        {
            title: "Software & Firmware Integrity Failures",
            subtext:
                "Tampered avionics, embedded systems, and defense software introduce hidden backdoors.",
            icon: Code,
        },
        {
            title: "Limited Visibility Across Classified Networks",
            subtext:
                "Segregated environments create blind spots that delay detection and response.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       AEROSPACE & DEFENSE SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Defense Cyber Risk & Threat Intelligence",
            description:
                "Continuous monitoring of geopolitical threats, APT activity, and defense-specific adversaries.",
            icon: ShieldCheck,
        },
        {
            title: "CMMC, NIST & Defense Compliance Programs",
            description:
                "Readiness and implementation for CMMC 2.0, NIST 800-171/53, ITAR, EAR, and DFARS.",
            icon: FileCheck,
        },
        {
            title: "Secure Defense IT & Zero Trust Architecture",
            description:
                "Zero Trust security for classified, restricted, and enterprise defense networks.",
            icon: Layers2Icon,
        },
        {
            title: "OT, ICS & Weapon System Cybersecurity",
            description:
                "Protection of manufacturing systems, avionics labs, and defense operational technology.",
            icon: Bug,
        },
        {
            title: "Defense Supply Chain & Third-Party Risk Management",
            description:
                "Cyber risk assessment and enforcement across defense suppliers and partners.",
            icon: Users,
        },
        {
            title: "Software, Firmware & Embedded System Integrity",
            description:
                "Code signing, SBOMs, and integrity monitoring for avionics and defense software.",
            icon: Code,
        },
        {
            title: "Incident Response, Cyber Warfare & Crisis Management",
            description:
                "24×7 cyber war-rooms, forensics, and coordinated response to high-impact attacks.",
            icon: Siren,
        },
        {
            title: "Secure Cloud & Defense Digital Transformation",
            description:
                "Secure adoption of government-approved cloud platforms with strict data sovereignty.",
            icon: Cloud,
        },
    ];

    /* =======================
       AEROSPACE & DEFENSE FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for Aerospace & Defense organizations?",
            answer:
                "Cyberattacks can compromise national security, weapon systems, classified data, and mission readiness.",
        },
        {
            question: "What regulations apply to Aerospace & Defense cybersecurity?",
            answer:
                "CMMC 2.0, NIST 800-171, NIST 800-53, ITAR, EAR, DFARS, and government mandates.",
        },
        {
            question: "How does Mociber help with CMMC compliance?",
            answer:
                "We deliver readiness assessments, remediation, control implementation, and audit preparation.",
        },
        {
            question: "Can cybersecurity prevent nation-state attacks?",
            answer:
                "While no defense is perfect, layered controls and threat intelligence significantly reduce risk.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/industries.jpeg"
                        alt="Aerospace and Defense Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Aerospace & Defense</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Mission-Critical Security for National Defense & Aerospace Systems
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Aerospace & Defense organizations operate at the intersection of
                        national security, advanced engineering, and highly classified data.
                        Digital transformation expands capability—but also the attack surface.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with mission assurance, regulatory
                        compliance, and operational resilience.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1523966211575-eb4a0170c45b"
                        alt="Defense operations"
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
                                        Why Aerospace & Defense Security Is Uniquely Challenging
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li> •	Highly targeted by nation-state adversaries</li>
                                        <li> •	Strict regulatory and contractual compliance requirements</li>
                                        <li> •	Long lifecycle of legacy and embedded systems</li>
                                        <li> •	Complex global supplier ecosystems</li>
                                        <li> •	Segregation of classified, restricted, and open networks</li>
                                        <li> •	High consequences of operational failure</li>
                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        Cybersecurity in A&D is not about IT protection—it is about
                                        <span className="text-cyan-400">
                                            {" "}
                                            mission continuity and national security.
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
                <LatestBlogsByTag tag="aerospaceDefense" limit={3} />
            </section>

            <TrustedLogos />

            <KeyRisks
                title="Aerospace & Defense Cyber Risks"
                subtitle="Top risks impacting mission assurance, national security, and compliance."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Aerospace & Defense Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Aerospace & Defense FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
