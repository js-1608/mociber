// TelecomMedia.jsx
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

export default function TelecomMedia() {

    /* =======================
       TELECOM & MEDIA RISKS
    ======================= */
    const risks = [
        {
            title: "Network Infrastructure & 5G Attacks",
            subtext:
                "Core networks, RAN, signaling systems, and 5G slices are targeted to disrupt connectivity and services.",
            icon: Bug,
        },
        {
            title: "Distributed Denial of Service (DDoS) Attacks",
            subtext:
                "Large-scale DDoS attacks impact voice, data, streaming, and digital services.",
            icon: Zap,
        },
        {
            title: "Subscriber Data Breaches & Privacy Violations",
            subtext:
                "Exposure of customer PII, CDRs, and location data triggers regulatory penalties and trust loss.",
            icon: Database,
        },
        {
            title: "OTT, Streaming & Content Platform Exploitation",
            subtext:
                "Vulnerabilities in streaming and media platforms lead to piracy, outages, and revenue leakage.",
            icon: FileWarning,
        },
        {
            title: "API & Digital Service Abuse",
            subtext:
                "Billing, provisioning, and service APIs are abused for fraud and unauthorized access.",
            icon: Code,
        },
        {
            title: "Fraud, Revenue Leakage & SIM Abuse",
            subtext:
                "SIM swap fraud, interconnect fraud, and subscription abuse directly impact revenue.",
            icon: ShieldAlert,
        },
        {
            title: "Cloud & Virtualized Network Misconfigurations",
            subtext:
                "NFV, SDN, and cloud-hosted telecom platforms expose critical systems.",
            icon: Cloud,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Employees, vendors, or contractors misuse access to networks and customer data.",
            icon: Lock,
        },
        {
            title: "Regulatory & Compliance Failures",
            subtext:
                "Non-compliance with telecom and data protection regulations leads to fines and sanctions.",
            icon: FileCheck,
        },
        {
            title: "Limited Incident Detection & Response",
            subtext:
                "Delayed detection increases downtime, customer churn, and regulatory exposure.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       TELECOM & MEDIA SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Telecom & Media Cyber Risk Assessment",
            description:
                "Comprehensive assessment of network infrastructure, digital platforms, cloud, and content ecosystems.",
            icon: ShieldCheck,
        },
        {
            title: "Network, 5G & Core Infrastructure Security",
            description:
                "Protection of core networks, RAN, signaling systems, and virtualized telecom infrastructure.",
            icon: Bug,
        },
        {
            title: "DDoS Protection & Network Resilience",
            description:
                "Advanced detection and mitigation of volumetric and application-layer DDoS attacks.",
            icon: Zap,
        },
        {
            title: "Digital Platform, OTT & Streaming Security",
            description:
                "Securing streaming platforms, CDNs, CMS, and media delivery pipelines.",
            icon: Layers2Icon,
        },
        {
            title: "API, Billing & Service Security",
            description:
                "Protection of APIs supporting provisioning, billing, charging, and digital services.",
            icon: Code,
        },
        {
            title: "Subscriber Identity & Access Security",
            description:
                "IAM, fraud detection, and protection against SIM swap and account takeover.",
            icon: KeyRound,
        },
        {
            title: "Cloud, NFV & Edge Security",
            description:
                "Securing cloud-native network functions, edge platforms, and virtualized services.",
            icon: Cloud,
        },
        {
            title: "Regulatory Compliance & Telecom Governance",
            description:
                "Alignment with telecom regulations, data protection laws, ISO 27001, and industry standards.",
            icon: FileCheck,
        },
        {
            title: "SOC, Threat Intelligence & Incident Response",
            description:
                "24×7 monitoring, threat intelligence, forensics, and rapid response at telecom scale.",
            icon: Siren,
        },
    ];

    /* =======================
       TELECOM & MEDIA FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for telecom and media companies?",
            answer:
                "Cyber incidents can disrupt national connectivity, expose customer data, and cause massive revenue loss.",
        },
        {
            question: "What are the biggest cyber threats in the telecom industry?",
            answer:
                "Network attacks, DDoS, fraud, data breaches, API abuse, and insider threats.",
        },
        {
            question: "How does cybersecurity protect telecom revenue?",
            answer:
                "By preventing fraud, service abuse, downtime, and customer churn.",
        },
        {
            question: "What is 5G security and why does it matter?",
            answer:
                "5G security protects virtualized, software-defined networks powering next-generation services.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                        alt="Telecom Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Telecom & Media</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Protecting Networks, Content, Customers & Revenue
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Telecom and media organizations operate always-on, high-availability
                        digital ecosystems. 5G, OTT platforms, cloud-native cores, edge
                        computing, and massive customer bases expand capability—but also
                        cyber risk.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with network reliability, customer
                        experience, regulatory compliance, and revenue protection.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                        alt="Telecom operations"
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
                                        <li> •	Always-on, high-availability networks</li>
                                        <li> •	Massive customer and data volumes</li>
                                        <li> •	Convergence of IT, OT, cloud, and network systems</li>
                                        <li> •	Rapid rollout of 5G, edge, and digital services</li>
                                        <li> •	Strict regulatory and lawful interception requirements</li>
                                        <li> •	High impact of outages on brand and revenue</li>


                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In Telecom & Media, cybersecurity failures directly affect national connectivity, 
                                        <span className="text-cyan-400">
                                            {" "}
                                            customer trust, and business continuity.
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
                title="Telecom & Media Cyber Risks"
                subtitle="Top risks impacting network availability, customer trust, and revenue."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Telecom & Media Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Telecom & Media FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
