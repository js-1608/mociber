// EnergyOilGas.jsx
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

export default function EnergyOilGas() {

    /* =======================
       ENERGY, OIL & GAS RISKS
    ======================= */
    const risks = [
        {
            title: "OT, ICS & SCADA System Attacks",
            subtext:
                "Industrial control systems managing drilling, refining, pipelines, and power generation are prime targets for disruption.",
            icon: Bug,
        },
        {
            title: "Nation-State & Advanced Persistent Threats",
            subtext:
                "State-sponsored attackers target energy infrastructure to disrupt economies and geopolitical stability.",
            icon: ShieldAlert,
        },
        {
            title: "Ransomware & Operational Shutdowns",
            subtext:
                "Ransomware halts refineries, pipelines, power plants, and distribution networks.",
            icon: Zap,
        },
        {
            title: "Pipeline, Refinery & Grid Disruption",
            subtext:
                "Cyber manipulation of safety, pressure, or flow systems causes physical and environmental damage.",
            icon: TrendingDown,
        },
        {
            title: "Legacy Systems & Aging Infrastructure",
            subtext:
                "Outdated OT assets lack modern security controls and cannot be easily patched.",
            icon: FileWarning,
        },
        {
            title: "Remote Operations & IIoT Exposure",
            subtext:
                "IIoT sensors and remote monitoring systems introduce new attack vectors.",
            icon: Cloud,
        },
        {
            title: "Supply Chain & Contractor Cyber Risk",
            subtext:
                "Engineering firms and service providers introduce indirect access into core systems.",
            icon: Users,
        },
        {
            title: "Environmental & Regulatory Non-Compliance",
            subtext:
                "Cyber incidents trigger environmental spills, safety events, and regulatory violations.",
            icon: FileCheck,
        },
        {
            title: "Cloud & Energy Data Platform Breaches",
            subtext:
                "Energy analytics, trading platforms, and operational data become high-value targets.",
            icon: Database,
        },
        {
            title: "Limited Visibility & Incident Response",
            subtext:
                "Disconnected IT and OT environments delay coordinated detection and response.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       ENERGY, OIL & GAS SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Energy Cyber Risk & Threat Modeling",
            description:
                "Threat assessments aligned with energy-specific adversaries, attack scenarios, and operational impact.",
            icon: ShieldCheck,
        },
        {
            title: "OT, ICS & SCADA Cybersecurity",
            description:
                "Protection of control systems across refineries, pipelines, power plants, and substations.",
            icon: Bug,
        },
        {
            title: "IT–OT Network Segmentation & Zero Trust",
            description:
                "Segmentation and controlled access between corporate IT and operational networks.",
            icon: Layers2Icon,
        },
        {
            title: "Digital Oilfield & Smart Grid Security",
            description:
                "Securing IIoT sensors, telemetry, analytics platforms, and automation systems.",
            icon: Cloud,
        },
        {
            title: "Energy Supply Chain & Contractor Risk Management",
            description:
                "Continuous cyber risk monitoring of vendors, EPCs, and service providers.",
            icon: Users,
        },
        {
            title: "Regulatory Compliance & Energy Standards Alignment",
            description:
                "Support for NERC CIP, IEC 62443, ISO 27001, ISO 22301, and regional energy regulations.",
            icon: FileCheck,
        },
        {
            title: "Incident Response & Energy Cyber Crisis Management",
            description:
                "24×7 detection, forensics, containment, and coordinated IT/OT incident response.",
            icon: Siren,
        },
        {
            title: "Business Continuity, DR & Operational Resilience",
            description:
                "Design and testing of resilience programs to maintain energy delivery.",
            icon: Zap,
        },
    ];

    /* =======================
       ENERGY FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for Energy, Oil & Gas companies?",
            answer:
                "Cyber incidents can disrupt energy supply, endanger safety, cause environmental damage, and impact national security.",
        },
        {
            question: "What are the biggest cyber threats to the energy sector?",
            answer:
                "OT attacks, ransomware, nation-state threats, supply chain compromise, and legacy system vulnerabilities.",
        },
        {
            question: "What is OT and ICS cybersecurity?",
            answer:
                "It protects control systems like SCADA, PLCs, and DCS that manage physical energy operations.",
        },
        {
            question: "Which regulations apply to Energy & Oil & Gas cybersecurity?",
            answer:
                "NERC CIP, IEC 62443, ISO 27001, ISO 22301, and regional energy regulations.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/Industries-banner.webp"
                        alt="Energy Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Energy, Oil & Gas</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Protecting Critical Energy Infrastructure & Operations
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Digital oilfields, smart grids, connected refineries, LNG terminals,
                        and renewable integration have transformed efficiency—but massively
                        expanded the cyber attack surface.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with operational safety, reliability,
                        and uninterrupted energy supply—where downtime is not acceptable.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1581091870627-3f9c1d43d6c8"
                        alt="Energy operations"
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
                                        Why Energy & Oil & Gas Security Is Uniquely Challenging
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li> •	Convergence of IT, OT, and IIoT environments</li>
                                        <li> •	Safety-critical systems with real-world physical impact</li>
                                        <li> •	Long asset lifecycles and legacy technologies</li>
                                        <li> •	Highly regulated environmental and safety requirements</li>
                                        <li> •	Remote and geographically dispersed operations</li>
                                        <li> •	Increasing targeting by cybercriminals and nation-state actors</li>


                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In the energy sector, cybersecurity failures translate directly into
                                        <span className="text-cyan-400">
                                            {" "}
                                            safety, environmental, and national security risks.
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
                <LatestBlogsByTag tag="energy-oil-gas" limit={3} />
            </section>

            <TrustedLogos />

            <KeyRisks
                title="Energy, Oil & Gas Cyber Risks"
                subtitle="Top risks impacting safety, reliability, and national infrastructure."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Energy, Oil & Gas Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Energy, Oil & Gas FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
