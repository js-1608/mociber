// Manufacturing.jsx
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

export default function Manufacturing() {

    /* =======================
       MANUFACTURING RISKS
    ======================= */
    const risks = [
        {
            title: "OT, ICS & SCADA Attacks",
            subtext:
                "Industrial control systems managing production lines and robotics are targeted for disruption and sabotage.",
            icon: Bug,
        },
        {
            title: "Ransomware & Production Downtime",
            subtext:
                "Cyber extortion attacks halt manufacturing operations, causing financial loss and supply chain delays.",
            icon: Zap,
        },
        {
            title: "Intellectual Property & Trade Secret Theft",
            subtext:
                "Designs, formulas, and production data are stolen through cyber espionage and insider threats.",
            icon: FileWarning,
        },
        {
            title: "Legacy Systems & Unsupported Equipment",
            subtext:
                "Aging machines and controllers lack modern security controls and patching capabilities.",
            icon: Layers2Icon,
        },
        {
            title: "IIoT & Smart Factory Exposure",
            subtext:
                "Connected sensors, devices, and automation platforms introduce new attack vectors.",
            icon: Cloud,
        },
        {
            title: "Supply Chain & Vendor Cyber Risk",
            subtext:
                "Third-party suppliers and system integrators create indirect access paths into manufacturing networks.",
            icon: Users,
        },
        {
            title: "Safety System Manipulation",
            subtext:
                "Cyber manipulation of safety controls puts personnel and facilities at physical risk.",
            icon: ShieldAlert,
        },
        {
            title: "Cloud & Manufacturing Data Breaches",
            subtext:
                "MES, ERP integrations, and analytics platforms expose sensitive operational data.",
            icon: Database,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Employees and contractors misuse authorized access to production systems.",
            icon: Lock,
        },
        {
            title: "Limited Visibility & Incident Response",
            subtext:
                "Disconnected IT and OT monitoring delays detection and response to attacks.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       MANUFACTURING SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Manufacturing Cyber Risk Assessment & Threat Modeling",
            description:
                "Holistic assessment of plants, production lines, OT assets, and digital manufacturing platforms.",
            icon: ShieldCheck,
        },
        {
            title: "OT, ICS & SCADA Security",
            description:
                "Protection of PLCs, DCS, robotics, and industrial networks across smart factories.",
            icon: Bug,
        },
        {
            title: "IT–OT Network Segmentation & Zero Trust",
            description:
                "Controlled separation and access between corporate IT and production environments.",
            icon: Layers2Icon,
        },
        {
            title: "Smart Factory & IIoT Security",
            description:
                "Securing sensors, automation systems, and connected devices with continuous monitoring.",
            icon: Cloud,
        },
        {
            title: "Manufacturing Supply Chain & Vendor Risk Management",
            description:
                "Assessment and monitoring of suppliers, OEMs, and system integrators.",
            icon: Users,
        },
        {
            title: "Cloud, MES & ERP Security",
            description:
                "Protection of manufacturing execution systems, ERP integrations, and analytics platforms.",
            icon: Database,
        },
        {
            title: "Regulatory Compliance & Industrial Standards Alignment",
            description:
                "Support for IEC 62443, ISO 27001, ISO 22301, and industry regulations.",
            icon: FileCheck,
        },
        {
            title: "Incident Response & Manufacturing Cyber Crisis Management",
            description:
                "24×7 detection, forensics, containment, and recovery for production environments.",
            icon: Siren,
        },
    ];

    /* =======================
       MANUFACTURING FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for manufacturing organizations?",
            answer:
                "Cyber incidents can stop production, compromise safety, and disrupt global supply chains.",
        },
        {
            question: "What are the biggest cyber threats to manufacturing?",
            answer:
                "OT attacks, ransomware, IP theft, legacy system vulnerabilities, and supply chain compromise.",
        },
        {
            question: "What is OT and ICS cybersecurity?",
            answer:
                "It protects industrial control systems that manage machines, robots, and production processes.",
        },
        {
            question: "How does ransomware impact manufacturing plants?",
            answer:
                "Ransomware can shut down production lines, causing major financial and operational losses.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/industries.jpeg"
                        alt="Manufacturing Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Manufacturing</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Securing Smart Factories & Digital Manufacturing Ecosystems
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Manufacturing organizations are rapidly adopting Industry 4.0,
                        robotics, IIoT, cloud analytics, and AI-driven automation. These
                        innovations improve efficiency—but expose environments to cyber
                        threats that directly impact safety and uptime.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with operational safety, uptime, and
                        business resilience—without slowing innovation.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1581093458791-9c6f9d1c9f9f"
                        alt="Smart factory operations"
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
                                        Why Manufacturing Cybersecurity Is Uniquely Challenging
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li>•	Convergence of IT, OT, and IIoT systems</li>
                                        <li>•	Safety-critical operations with real-world physical impact</li>
                                        <li>•	Long asset lifecycles and legacy equipment</li>
                                        <li>•	Complex global supply chains</li>
                                        <li>•	Zero tolerance for unplanned downtime</li>
                                        <li>•	Increasing targeting by cybercriminals and nation-state actors</li>

                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In manufacturing, cybersecurity failures directly affect
                                        <span className="text-cyan-400">
                                            {" "}
                                            safety, revenue, and brand reputation.
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
                <LatestBlogsByTag tag="manufacturing" limit={3} />
            </section>

            <TrustedLogos />

            <KeyRisks
                title="Manufacturing Cyber Risks"
                subtitle="Top risks impacting safety, production continuity, and supply chains."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Manufacturing Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Manufacturing FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
