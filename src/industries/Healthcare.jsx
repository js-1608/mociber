// Healthcare.jsx
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

export default function Healthcare() {

    /* =======================
       HEALTHCARE RISKS
    ======================= */
    const risks = [
        {
            title: "Patient Data Breaches & PHI Exposure",
            subtext:
                "Electronic health records, diagnostic data, and PHI are prime targets for cybercriminals.",
            icon: Database,
        },
        {
            title: "Ransomware Attacks on Hospitals & Clinics",
            subtext:
                "Ransomware disrupts clinical operations, emergency services, and patient care.",
            icon: Zap,
        },
        {
            title: "Medical Device & IoMT Vulnerabilities",
            subtext:
                "Connected medical devices and IoMT systems lack strong security controls and are difficult to patch.",
            icon: Bug,
        },
        {
            title: "Legacy Clinical Systems & Unsupported Software",
            subtext:
                "Outdated EHRs, lab systems, and imaging platforms introduce exploitable weaknesses.",
            icon: FileWarning,
        },
        {
            title: "Telemedicine & Digital Health Platform Risks",
            subtext:
                "Insecure telehealth platforms expose patient consultations and clinical workflows.",
            icon: Cloud,
        },
        {
            title: "Insider Threats & Privileged Misuse",
            subtext:
                "Clinical staff, administrators, and contractors misuse or accidentally expose patient data.",
            icon: Lock,
        },
        {
            title: "Regulatory & Compliance Failures",
            subtext:
                "Non-compliance with HIPAA, HITECH, GDPR, DPDP, and health regulations leads to penalties.",
            icon: FileCheck,
        },
        {
            title: "Cloud & Health Data Misconfigurations",
            subtext:
                "Improperly secured cloud storage and APIs expose massive volumes of health data.",
            icon: Cloud,
        },
        {
            title: "Third-Party & HealthTech Vendor Risk",
            subtext:
                "Labs, insurers, SaaS providers, and device vendors introduce indirect cyber risk.",
            icon: Users,
        },
        {
            title: "Limited Detection & Incident Response",
            subtext:
                "Delayed response increases patient impact, downtime, and regulatory exposure.",
            icon: TrendingDown,
        },
    ];

    /* =======================
       HEALTHCARE SOLUTIONS
    ======================= */
    const solutions = [
        {
            title: "Healthcare Cyber Risk Assessment & Threat Modeling",
            description:
                "Comprehensive assessment of hospitals, clinics, HealthTech platforms, and digital care ecosystems.",
            icon: ShieldCheck,
        },
        {
            title: "Patient Data Protection & Privacy Engineering",
            description:
                "Encryption, access controls, consent management, and privacy-by-design for PHI.",
            icon: Database,
        },
        {
            title: "Medical Device & IoMT Security",
            description:
                "Risk assessment, network segmentation, and monitoring for connected medical devices.",
            icon: Bug,
        },
        {
            title: "Cloud & Digital Health Platform Security",
            description:
                "Secure design and monitoring for EHRs, telemedicine platforms, APIs, and health data lakes.",
            icon: Cloud,
        },
        {
            title: "Identity, Access & Privileged Management",
            description:
                "Strong IAM, MFA, and role-based access controls for clinical and administrative users.",
            icon: KeyRound,
        },
        {
            title: "Regulatory Compliance & Audit Readiness",
            description:
                "Support for HIPAA, HITECH, GDPR, DPDP, ISO 27001, SOC 2, and healthcare regulations.",
            icon: FileCheck,
        },
        {
            title: "Third-Party & HealthTech Vendor Risk Management",
            description:
                "Continuous assessment of SaaS providers, device manufacturers, and service partners.",
            icon: Users,
        },
        {
            title: "Security Operations & Healthcare Incident Response",
            description:
                "24×7 monitoring, threat intelligence, forensics, and rapid response to cyber incidents.",
            icon: Siren,
        },
    ];

    /* =======================
       HEALTHCARE FAQS
    ======================= */
    const faqs = [
        {
            question: "Why is cybersecurity critical for healthcare organizations?",
            answer:
                "Cyber incidents can disrupt patient care, expose sensitive health data, and threaten patient safety.",
        },
        {
            question: "What are the biggest cyber threats to hospitals and HealthTech companies?",
            answer:
                "Ransomware, data breaches, medical device vulnerabilities, insider threats, and cloud misconfigurations.",
        },
        {
            question: "What regulations apply to healthcare cybersecurity?",
            answer:
                "HIPAA, HITECH, GDPR, DPDP, ISO 27001, SOC 2, and regional health data protection laws.",
        },
        {
            question: "How does ransomware impact healthcare operations?",
            answer:
                "It can shut down clinical systems, delay treatment, and compromise emergency services.",
        },
    ];

    return (
        <div>

            {/* ================= HERO ================= */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/Industries-banner.webp"
                        alt="Healthcare Cybersecurity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-center">
                        Cybersecurity Built for{" "}
                        <span className="text-cyan-400">Healthcare</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Protecting Patient Data, Clinical Systems & Digital Health Innovation
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Healthcare and HealthTech organizations are rapidly adopting EHRs,
                        telemedicine, medical IoT, cloud platforms, and AI-driven diagnostics.
                        These innovations improve care—but significantly increase cyber and
                        regulatory risk.
                    </p>
                    <p className="text-slate-300">
                        Mociber aligns cybersecurity with patient safety, trust, and
                        uninterrupted care delivery—without slowing innovation.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                        alt="Healthcare operations"
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
                                        Why Healthcare Cybersecurity Is Uniquely Critical
                                    </h2>

                                    {/* Bullet Points */}
                                    <ul className="space-y-1 text-slate-300 text-lg">
                                        <li> •	Patient safety depends on system availability and integrity</li>
                                        <li> •	Health data has high black-market value</li>
                                        <li> •	Complex ecosystems of providers, insurers, and vendors</li>
                                        <li> •	Strict global privacy and health regulations</li>
                                        <li> •	Long lifecycle of medical devices and clinical systems</li>
                                        <li> •	Zero tolerance for downtime in critical care</li>

                                    </ul>

                                    {/* Highlight Line */}
                                    <p className="mt-10 text-xl font-medium text-white">
                                        In healthcare, cybersecurity failures can directly

                                        <span className="text-cyan-400">
                                            {" "}
                                            impact human lives.
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
                title="Healthcare & HealthTech Cyber Risks"
                subtitle="Top risks impacting patient safety, privacy, and clinical continuity."
                risks={risks}
            />

            <ServiceSolution
                heading="Mociber’s Healthcare & HealthTech Cybersecurity Services"
                solutions={solutions}
            />

            <ContactCta />

            <FaqSection
                title="Healthcare & HealthTech FAQs"
                subtitle=""
                faqs={faqs}
            />

        </div>
    );
}
