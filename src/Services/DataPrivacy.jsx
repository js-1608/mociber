import React from "react";
import {
    ShieldCheck,
    Users,
    Scale,
    ShieldAlert,
    DatabaseBackup,
    LocateFixed,
    User2Icon,

} from "lucide-react";
import {
    CloudOff,
    UserX,
    Brain,
    EyeOff,
    KeyRound,
} from "lucide-react";
import {

    LockKeyhole,
    Code,
    Siren,
} from "lucide-react";

import { motion } from "framer-motion";
import ContactCta from "@/components/ContactCta";
import HeroBanner from "@/components/ServiceHero";
import Service from "@/components/Service";
import TrustedLogos from "@/components/TrustedLogos";
import ToolsTabs from "@/components/Tools";
import YouTubeAutoplaySection from "@/components/Video";
import KeyRisks from "../components/Risks";
import FaqSection from "@/components/Faq";

import ServiceSolution from "@/components/ServiceSolution";


export default function DataPrivacy() {


    const faqs = [
        {
            question: "What is included in Mociber’s Data Privacy & Protection services?",
            answer:
                "Mociber offers end-to-end data privacy and protection services including regulatory compliance (GDPR, PDPL, DPDP Act, HIPAA, CCPA), data discovery and classification, encryption and tokenization, privacy-by-design implementation, third-party risk management, and 24×7 data breach response.",
        },
        {
            question: "Why is data privacy important for modern organizations?",
            answer:
                "Strong data privacy prevents data breaches, ensures regulatory compliance, reduces legal and financial penalties, protects customer trust, and enables secure digital transformation across cloud, hybrid, and AI-driven environments.",
        },
        {
            question: "Does Mociber help with GDPR, PDPL, DPDP Act, and HIPAA compliance?",
            answer:
                "Yes. Mociber provides compliance frameworks, data mapping, DPIAs, policy development, technical control implementation, evidence collection, audit readiness, and ongoing governance for GDPR, DPDP Act, PDPL, HIPAA, CCPA, and other global privacy laws.",
        },
        {
            question: "What industries benefit from Mociber’s data privacy services?",
            answer:
                "Mociber supports BFSI, healthcare, government, telecom, retail, manufacturing, technology, fintech, and critical infrastructure sectors that require strong data protection and privacy governance.",
        },
        {
            question: "How does Mociber discover and classify sensitive data?",
            answer:
                "We use AI-powered discovery tools to locate, classify, and map sensitive data across on-premise environments, multi-cloud platforms, SaaS applications, email systems, databases, and endpoints—providing complete data visibility.",
        },
        {
            question: "What technologies does Mociber use for data protection?",
            answer:
                "Mociber implements enterprise-grade encryption, tokenization, data masking, anonymization, secure data transfer, and identity-based access controls using platforms such as Thales, Protegrity, Microsoft Purview, CipherTrust, and IBM Guardium.",
        },
        {
            question: "Can Mociber help during a data breach or ransomware incident?",
            answer:
                "Yes. Our 24×7 incident response team provides rapid containment, forensic investigation, breach impact assessment, regulatory reporting support, and recovery guidance for data breaches and ransomware incidents.",
        },
        {
            question: "How does Mociber manage third-party and vendor data privacy risks?",
            answer:
                "We assess vendors’ data handling practices, access controls, contractual obligations, and cyber posture using structured risk assessments, compliance reviews, and automated continuous monitoring dashboards.",
        },
        {
            question: "What is Privacy-by-Design and does Mociber implement it?",
            answer:
                "Privacy-by-Design embeds privacy and security controls directly into applications, processes, and AI systems. Mociber integrates these controls across the SDLC, DevSecOps pipelines, and AI/ML workflows.",
        },
        {
            question: "How can my organization start a data privacy assessment with Mociber?",
            answer:
                "Simply fill out the contact form on our website. A Mociber data privacy expert will connect with you within 24 hours to initiate a customized privacy assessment and roadmap.",
        },
    ];



    const risks = [
        {
            title: "Data Breaches & Unauthorized Access",
            subtext:
                "Credential theft, weak authentication, and system misconfigurations expose sensitive personal, financial, and business-critical data.",
            icon: ShieldAlert,
        },
        {
            title: "Cloud & SaaS Data Leakage",
            subtext:
                "Misconfigured cloud storage, insecure APIs, and unmanaged SaaS applications lead to accidental or malicious data exposure.",
            icon: CloudOff,
        },
        {
            title: "Insider Threats & Privilege Misuse",
            subtext:
                "Employees, contractors, or partners misuse excessive privileges—intentionally or unintentionally—causing data compromise.",
            icon: UserX,
        },
        {
            title: "AI & ML Data Misuse",
            subtext:
                "Poorly governed AI models create privacy risks through training data leakage, inference attacks, and unexplainable decisions.",
            icon: Brain,
        },
        {
            title: "Global Regulatory Non-Compliance",
            subtext:
                "Failure to meet GDPR, DPDP Act, HIPAA, CCPA, and other privacy regulations results in penalties, lawsuits, and reputational damage.",
            icon: Scale,
        },
        {
            title: "Weak Data Governance & Visibility",
            subtext:
                "Lack of data discovery, classification, and lineage prevents organizations from knowing where sensitive data resides or flows.",
            icon: DatabaseBackup,
        },
        {
            title: "Ransomware & Double Extortion Attacks",
            subtext:
                "Attackers encrypt systems and exfiltrate data, threatening public leaks even after ransom demands are met.",
            icon: LocateFixed,
        },
        {
            title: "Supply Chain & Third-Party Exposure",
            subtext:
                "Vendors and service providers mishandle data, creating shared liability and expanding the attack surface beyond the enterprise.",
            icon: User2Icon,
        },
        {
            title: "Shadow IT & Unmonitored Applications",
            subtext:
                "Unauthorized tools and applications create unknown data flows, bypassing security controls and compliance oversight.",
            icon: EyeOff,
        },
        {
            title: "Ineffective Encryption & Tokenization",
            subtext:
                "Outdated or missing cryptographic controls expose sensitive data during storage, processing, and transmission.",
            icon: KeyRound,
        },
    ];


    const solutions = [
        {
            title: "Data Privacy Compliance & Governance",
            description:
                "Implementation and ongoing governance of enterprise-wide data privacy programs aligned with global regulations and industry frameworks.",
            extra:
                "GDPR · DPDP Act (India) · HIPAA · CCPA · ISO 27701 · ISO 27001 · NIST Privacy Framework · Automated audits & reporting",
            icon: ShieldCheck,
        },
        {
            title: "Data Discovery, Classification & Mapping",
            description:
                "AI-powered discovery and classification of sensitive data across on-premise, cloud, SaaS, endpoints, databases, and email systems.",
            extra:
                "PII & PHI discovery · Data lineage · Sensitivity labeling · Multi-cloud & SaaS visibility",
            icon: DatabaseBackup,
        },
        {
            title: "Data Protection Technologies",
            description:
                "Deployment of enterprise-grade technologies to safeguard sensitive data across its entire lifecycle—at rest, in use, and in transit.",
            extra:
                "Encryption & tokenization · Data masking & anonymization · Secure file transfers · Key management & vaulting",
            icon: LockKeyhole,
        },
        {
            title: "Privacy-by-Design for Applications & AI Systems",
            description:
                "Embedding privacy and security controls into application development, DevSecOps pipelines, and AI/ML model lifecycles.",
            extra:
                "SDLC & DevSecOps integration · AI governance controls · Model risk management · Privacy impact assessments (PIA/DPIA)",
            icon: Code,
        },
        {
            title: "Third-Party Risk & Vendor Compliance",
            description:
                "Continuous assessment and governance of vendors’ data handling practices, cyber posture, and contractual privacy obligations.",
            extra:
                "Vendor due diligence · Privacy & security questionnaires · Contractual compliance · Continuous monitoring",
            icon: Users,
        },
        {
            title: "Data Breach Response & Incident Management",
            description:
                "24×7 data breach response covering investigation, containment, regulatory notifications, and post-incident privacy assessments.",
            extra:
                "Digital forensics · Breach containment · Regulatory reporting · Incident response playbooks · Privacy impact analysis",
            icon: Siren,
        },
    ];




    return (
        <div className="min-h-screen">
            <HeroBanner
                image="/Banners/About.jpg"
                heading={<></>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <main className="">
                {/* HERO / INTRO */}
                <motion.section id="intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl m-auto ">
                        <div className=" rounded-2xl py-16 p-4">
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">Data Privacy & Protection</h2>
                            <h4 className="font-semibold text-blue-500">Safeguard Sensitive Data. Strengthen Compliance. Build Digital Trust</h4>
                            <p className="mt-2 text-slate-300">
                                Data has become the most valuable—and most vulnerable—asset in today’s digital economy. With global privacy regulations tightening, cyberattacks rising, and data sprawled across multi-cloud ecosystems, organizations must adopt a proactive, intelligence-driven approach to privacy and protection.
                            </p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber helps companies protect sensitive information, ensure global regulatory compliance, and build digital trust through modern privacy frameworks, advanced data security technologies, and continuous monitoring.
                            </h4>
                            {/* <div className="mt-6 flex gap-3">
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#032152] text-white px-5 py-3 rounded-md">Contact Sales</Link>
                                <a href="#services" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-md">Our Services</a>
                            </div> */}

                            {/* <div className="rounded-lg border border-slate-100 p-6 ">
                                <h3 className="text-3xl font-semibold ">Why Mociber?</h3>
                                <p className="mt-3 text-sm text-slate-200">Faster detection, measurable risk reduction and compliance-first delivery — powered by AI, threat intelligence, and expert analysts.</p>

                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <div className="text-sm font-medium text-black">Compliance</div>
                                        <div className="text-xs text-slate-500 mt-1">ISO27001, SOC2, PCI</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <div className="text-sm font-medium text-black">Cloud</div>
                                        <div className="text-xs text-slate-500 mt-1">AWS, Azure, GCP</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className=" w-full h-64 md:h-82 rounded-2xl overflow-hidden  m-auto ">
                            <img src="https://skill-mine.com/wp-content/uploads/2024/06/12.jpg" className="w-full h-auto object-     object-center" />
                        </div>
                    </div>
                </motion.section>


                <TrustedLogos />


                {/* PROBLEM */}
                <section id="problems" className="mt-8 gap-6 max-w-7xl m-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className=" p-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">

                            {/* LEFT — IMAGE */}
                            <div className="flex justify-center">
                                <img
                                    src="https://skill-mine.com/wp-content/uploads/2022/10/hologram-padlock-sunset-panoramic-cityscape-bangkok-southeast-asia-concept-cyber-security-intelligence-multi-exposure-1024x683.jpg" // update path
                                    alt="Integrated Risk Visualization"
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>

                            {/* RIGHT — TEXT */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white/95 mb-4">
                                    Key Challenges in Data Privacy & Protection
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Organizations today struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "Fragmented and fast-evolving privacy regulations",
                                        "Increasing cloud misconfigurations",
                                        "Difficulty managing internal and privileged access",
                                        "Ransomware targeting sensitive data",
                                        "Lack of unified visibility across multi-cloud and SaaS systems",
                                        "AI-driven privacy risks and profiling concerns",
                                        "Weak vendor/third-party governance",
                                        "Poor implementation of Zero Trust security controls",



                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Mociber solves these challenges with privacy-by-design frameworks, automation, and continuous visibility.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <KeyRisks
                    title="Top Data Privacy & Protection Risks"
                    subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                    risks={risks}
                />
                <ServiceSolution solutions={solutions} heading={"Mociber’s Data Privacy & Protection Services"} />





                <YouTubeAutoplaySection />
                {/* SERVICES */}
                <Service />
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Data Privacy & Protection — FAQs"
                    subtitle="Common questions about our Data Privacy & Protection."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
