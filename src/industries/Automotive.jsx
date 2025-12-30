// Automotive.jsx
import HeroBanner from "@/components/ServiceHero";
import React from "react";
import { Link } from "react-router-dom";
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

export default function Automotive() {

    /* =======================
       AUTOMOTIVE RISKS
    ======================= */
    const risks = [
        {
            title: "Connected Vehicle & Telematics Attacks",
            subtext:
                "Insecure vehicle connectivity, infotainment systems, and telematics platforms expose vehicles to remote exploitation.",
            icon: Cloud,
        },
        {
            title: "Software-Defined Vehicle Vulnerabilities",
            subtext:
                "OTA updates, ECUs, and embedded software can be manipulated if integrity controls are weak.",
            icon: Code,
        },
        {
            title: "Autonomous & ADAS System Exploitation",
            subtext:
                "Compromise of sensors, cameras, LiDAR, and control algorithms impacts safety-critical decisions.",
            icon: Bug,
        },
        {
            title: "Manufacturing OT & Plant Cyber Risks",
            subtext:
                "Industrial control systems, robotics, and smart factories are targeted to disrupt production.",
            icon: Layers2Icon,
        },
        {
            title: "Automotive Supply Chain Compromise",
            subtext:
                "Tier-1 to Tier-n suppliers introduce cyber weaknesses that cascade across OEM ecosystems.",
            icon: Users,
        },
        {
            title: "Vehicle Data Privacy & Regulatory Exposure",
            subtext:
                "Collection of driver, location, and behavioral data creates privacy and compliance risk.",
            icon: Database,
        },
        {
            title: "Ransomware & Production Downtime",
            subtext:
                "Cyber extortion attacks halt assembly lines, logistics, and dealer operations.",
            icon: Zap,
        },
        {
            title: "Firmware & ECU Integrity Failures",
            subtext:
                "Tampered firmware or counterfeit components introduce hidden backdoors and safety risks.",
            icon: FileWarning,
        },
        {
            title: "Cloud & Backend Platform Breaches",
            subtext:
                "Connected vehicle backends, analytics platforms, and mobile apps become high-value targets.",
            icon: Cloud,
        },
        {
            title: "Limited Incident Detection & Response",
            subtext:
                "Lack of real-time monitoring across vehicles and plants delays cyber incident response.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       AUTOMOTIVE SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Automotive Cyber Risk & Threat Modeling",
            description:
                "Threat analysis across vehicles, ECUs, backend platforms, manufacturing systems, and suppliers.",
            icon: ShieldCheck,
        },
        {
            title: "Secure Vehicle Architecture & Security by Design",
            description:
                "Cybersecurity embedded into vehicle platforms from concept, design, and development.",
            icon: Layers2Icon,
        },
        {
            title: "Software, Firmware & OTA Security",
            description:
                "Code signing, secure boot, SBOMs, and integrity monitoring for vehicle software updates.",
            icon: Code,
        },
        {
            title: "Automotive OT & Manufacturing Security",
            description:
                "Protection of smart factories, robotics, PLCs, and industrial networks.",
            icon: Bug,
        },
        {
            title: "Supply Chain Cybersecurity & Vendor Risk Management",
            description:
                "Assessment, monitoring, and compliance enforcement across OEM and supplier networks.",
            icon: Users,
        },
        {
            title: "Automotive Cloud & Backend Platform Security",
            description:
                "Securing connected vehicle backends, APIs, mobile apps, and analytics platforms.",
            icon: Cloud,
        },
        {
            title: "Regulatory Compliance & Automotive Standards Alignment",
            description:
                "Alignment with ISO/SAE 21434, UNECE R155/R156, ISO 26262, GDPR, and regional regulations.",
            icon: FileCheck,
        },
        {
            title: "Incident Response & Automotive Cyber Crisis Management",
            description:
                "24×7 detection, forensics, containment, and recovery across vehicles and plants.",
            icon: Siren,
        },
    ];

    /* =======================
       AUTOMOTIVE FAQS
    ======================= */
    const faqs = [
        {
            question: "What is automotive cybersecurity?",
            answer:
                "Automotive cybersecurity protects vehicles, manufacturing systems, and connected platforms from threats impacting safety and operations.",
        },
        {
            question: "Why is cybersecurity critical for connected vehicles?",
            answer:
                "Connected vehicles expose digital attack surfaces that can affect driver safety, data privacy, and vehicle control.",
        },
        {
            question: "Which regulations apply to automotive cybersecurity?",
            answer:
                "ISO/SAE 21434, UNECE R155/R156, ISO 26262, GDPR, and regional data protection laws.",
        },
        {
            question: "How does cybersecurity impact vehicle safety?",
            answer:
                "Cyberattacks can manipulate sensors, software, or vehicle functions, directly impacting safety-critical systems.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/industries.jpeg"
                        alt="Automotive Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Automotive</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Secure, Compliant & Connected Mobility
                    </h2>
                    <p className="text-slate-300 mb-6">
                        The automotive industry is transforming through connected vehicles,
                        electric mobility, autonomous systems, and smart manufacturing.
                        Innovation accelerates—but so do cyber risks across vehicles, plants,
                        cloud platforms, and supply chains.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with safety, reliability, compliance,
                        and business continuity—from design to deployment.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1493238792000-8113da705763"
                        alt="Connected vehicle ecosystem"
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
                                        Why Automotive Cybersecurity Is Uniquely Challenging
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li> •	Long vehicle lifecycles with frequent software updates</li>
                                        <li> •	Safety-critical systems with zero tolerance for failure</li>
                                        <li> •	Highly distributed global supply chains</li>
                                        <li> •	Convergence of IT, OT, and vehicle systems</li>
                                        <li> •	Rapid regulatory evolution across regions</li>
                                        <li> •	Increasing reliance on cloud and AI-driven platforms</li>
                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        Automotive cybersecurity is inseparable from
                                        <span className="text-cyan-400">
                                            {" "}
                                            vehicle safety and brand trust.
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
                <LatestBlogsByTag tag="automotive" limit={3} />
            </section>

            <TrustedLogos />

            <KeyRisks
                title="Automotive Cyber Risks"
                subtitle="Top risks impacting vehicle safety, production continuity, and brand trust."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Automotive Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Automotive FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
