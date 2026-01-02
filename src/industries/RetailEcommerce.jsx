// RetailEcommerce.jsx
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

export default function RetailEcommerce() {

    /* =======================
       RETAIL & E-COMMERCE RISKS
    ======================= */
    const risks = [
        {
            title: "Payment Fraud & Card-Not-Present Attacks",
            subtext:
                "Fraudsters exploit checkout flows, stolen cards, and bot networks to execute large-scale payment abuse.",
            icon: ShieldAlert,
        },
        {
            title: "Customer Data Breaches & Privacy Violations",
            subtext:
                "Exposure of PII, credentials, and purchase history leads to penalties and loss of brand trust.",
            icon: Database,
        },
        {
            title: "Web Application & API Exploits",
            subtext:
                "Vulnerabilities in storefronts, mobile apps, and APIs enable account takeover and data scraping.",
            icon: Code,
        },
        {
            title: "Bot Attacks & Automated Abuse",
            subtext:
                "Credential stuffing, scalping, inventory hoarding, and price scraping disrupt revenue.",
            icon: Bug,
        },
        {
            title: "Cloud & Platform Misconfigurations",
            subtext:
                "Improperly secured cloud storage, databases, and IAM roles expose retail data.",
            icon: Cloud,
        },
        {
            title: "Third-Party & Supply Chain Risk",
            subtext:
                "Payment gateways, plugins, logistics providers, and SaaS tools introduce attack paths.",
            icon: Users,
        },
        {
            title: "Ransomware & Website Downtime",
            subtext:
                "Service outages during peak sales periods cause immediate revenue loss.",
            icon: Zap,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Employees or contractors misuse access to customer data or backend systems.",
            icon: Lock,
        },
        {
            title: "POS & In-Store System Compromise",
            subtext:
                "Malware targeting POS terminals leads to card data theft and compliance violations.",
            icon: FileWarning,
        },
        {
            title: "Limited Fraud Detection & Incident Response",
            subtext:
                "Delayed detection increases chargebacks, financial loss, and reputational damage.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       RETAIL & E-COMMERCE SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Retail Cyber Risk Assessment & Threat Modeling",
            description:
                "Assessment of e-commerce platforms, mobile apps, POS systems, and cloud infrastructure.",
            icon: ShieldCheck,
        },
        {
            title: "Fraud Detection & Transaction Security",
            description:
                "Behavioral analytics to detect payment fraud, account takeover, and abuse in real time.",
            icon: ShieldAlert,
        },
        {
            title: "Application, API & Web Security",
            description:
                "Secure development, testing, and protection of storefronts, apps, and integrations.",
            icon: Code,
        },
        {
            title: "Bot Management & Abuse Prevention",
            description:
                "Detection and mitigation of malicious bots targeting checkout and inventory.",
            icon: Bug,
        },
        {
            title: "Cloud & E-Commerce Platform Security",
            description:
                "Secure configuration and monitoring for Shopify, Magento, WooCommerce, and custom stacks.",
            icon: Cloud,
        },
        {
            title: "Payment Security & PCI DSS Compliance",
            description:
                "Support for PCI DSS, tokenization, encryption, and secure payment workflows.",
            icon: FileCheck,
        },
        {
            title: "Identity, Access & Privileged Management",
            description:
                "Strong IAM, MFA, and least-privilege access for staff and vendors.",
            icon: KeyRound,
        },
        {
            title: "Third-Party & Vendor Risk Management",
            description:
                "Continuous assessment of payment providers, logistics partners, and SaaS tools.",
            icon: Users,
        },
        {
            title: "Security Operations & Retail Incident Response",
            description:
                "24×7 monitoring, forensics, and rapid containment of retail cyber incidents.",
            icon: Siren,
        },
    ];

    /* =======================
       RETAIL & E-COMMERCE FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for retail and e-commerce businesses?",
            answer:
                "Cyber incidents directly impact revenue, customer trust, and brand reputation.",
        },
        {
            question: "What are the biggest cyber threats to e-commerce platforms?",
            answer:
                "Payment fraud, data breaches, bot attacks, ransomware, and third-party compromise.",
        },
        {
            question: "How does cybersecurity help reduce online fraud?",
            answer:
                "Through real-time monitoring, behavioral analytics, and strong identity controls.",
        },
        {
            question: "What is PCI DSS and why is it important for retailers?",
            answer:
                "PCI DSS is a payment security standard required to protect cardholder data and avoid penalties.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/industries.jpeg"
                        alt="Retail and E-Commerce Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Retail & E-Commerce</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Securing Omnichannel Commerce & Customer Trust
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Retail and e-commerce organizations operate in always-on,
                        high-volume digital environments. Omnichannel platforms, mobile apps,
                        cloud infrastructure, and digital payments drive growth—but also
                        expand cyber risk.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with revenue protection, customer
                        experience, and operational resilience.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="/IndustriesImages/Retail and E-Commerce.jpeg"
                        alt="Omnichannel retail operations"
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
                                        <li> •	High transaction volumes and peak traffic events</li>
                                        <li> •	Always-on digital storefronts with zero downtime tolerance</li>
                                        <li> •	Rapid feature releases and frequent integrations</li>
                                        <li> •	Distributed attack surface across cloud, apps, POS, and APIs</li>
                                        <li> •	Strong dependence on customer trust and brand reputation</li>
                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In retail, cybersecurity directly
                                        <span className="text-cyan-400">
                                            {" "}
                                            protects revenue and customer loyalty.
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
                <LatestBlogsByTag tag="retail-Ecommerce" limit={3} />
            </section>

            <TrustedLogos />

            <KeyRisks
                title="Retail & E-Commerce Cyber Risks"
                subtitle="Top risks impacting revenue, customer trust, and availability."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Retail & E-Commerce Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Retail & E-Commerce FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
