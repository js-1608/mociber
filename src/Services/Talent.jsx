import React from "react";
import {
    Siren,
    BrainCircuit,
    DollarSign,
    Cpu,
    GlobeLock,
    Factory,
    RefreshCcw,
    ShieldAlert,
    ShieldCheck,
    CloudCog,
    Briefcase,
    Scale,
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


export default function Talent() {

    const faqs = [
        {
            question: "What is Niche Talent, and why is it important?",
            answer:
                "Niche Talent refers to highly specialized professionals with deep expertise in cybersecurity, AI, cloud engineering, GRC, data protection, and emerging technologies. Organizations rely on niche talent to accelerate digital transformation, reduce risk, and maintain a competitive advantage.",
        },
        {
            question: "Which industries require niche talent the most?",
            answer:
                "BFSI, healthcare, government, telecom, IT services, manufacturing, and critical infrastructure sectors face the highest demand due to increasing cyber threats, regulatory pressures, and rapid digital modernization.",
        },
        {
            question: "How does Mociber source and verify niche talent?",
            answer:
                "Mociber leverages global talent intelligence networks, AI-driven sourcing, multi-stage technical evaluations, certification validation, background checks, and performance screening to ensure quality and reliability.",
        },
        {
            question: "Can Mociber provide on-demand or project-based talent?",
            answer:
                "Yes. We deploy on-demand cloud engineers, cybersecurity analysts, DevSecOps experts, AI specialists, and crisis response professionals for short-term, project-based, or long-term engagements.",
        },
        {
            question: "Does Mociber offer leadership-level talent such as CISOs or CIOs?",
            answer:
                "Absolutely. Mociber provides fractional and interim CISOs, CIOs, CDOs, CTOs, and transformation leaders to drive strategic programs, risk initiatives, and enterprise change.",
        },
        {
            question: "What tools and technologies do Mociber’s specialists support?",
            answer:
                "Our talent supports leading platforms including AWS, Azure, GCP, Kubernetes, Terraform, CrowdStrike, SentinelOne, Databricks, OneTrust, ServiceNow, and other enterprise-grade technologies.",
        },
        {
            question: "Can Mociber support regulatory and compliance requirements?",
            answer:
                "Yes. We provide specialists with expertise in ISO 27001, SOC 2, GDPR, DPDP Act, HIPAA, PCI DSS, ESG, and privacy engineering to support audits and regulatory compliance.",
        },
        {
            question: "How quickly can Mociber deploy niche talent?",
            answer:
                "Depending on urgency and role complexity, Mociber can deploy niche talent within 24–72 hours for critical roles and within a few days for complex or large-scale project requirements.",
        },
        {
            question: "Does Mociber offer global or region-specific talent?",
            answer:
                "We offer both globally vetted professionals and region-specific specialists aligned with local regulations, data residency requirements, and geopolitical considerations.",
        },
        {
            question: "How can organizations request niche talent from Mociber?",
            answer:
                "Organizations can reach out through our contact form. A Mociber talent advisory expert will respond within 24 hours to assess requirements and initiate deployment.",
        },
    ];

    const solutions = [
        {
            title: "Cybersecurity & GRC Specialized Talent",
            description:
                "Deployment of certified cybersecurity and governance professionals to strengthen security operations, risk management, and regulatory compliance.",
            extra:
                "SOC · Threat Intelligence · DFIR · Penetration Testing · Cloud Security · Risk & Compliance · Governance",
            icon: ShieldCheck,
        },
        {
            title: "On-Demand Digital & Cloud Engineering Pods",
            description:
                "Rapidly scalable engineering pods delivering secure cloud, platform, and automation capabilities aligned to business priorities.",
            extra:
                "Cloud Engineers · DevSecOps · SREs · Kubernetes Architects · Automation Engineers",
            icon: CloudCog,
        },
        {
            title: "AI, Data & Emerging Technology Talent",
            description:
                "Specialized talent to design, secure, and govern advanced AI, data, and automation platforms across the enterprise.",
            extra:
                "GenAI · ML Engineering · LLM Security · Data Engineering · AI Governance · Automation Architecture",
            icon: BrainCircuit,
        },
        {
            title: "Interim Leadership & Fractional Executives",
            description:
                "Experienced interim and fractional executives providing strategic leadership during transformation, crisis, or growth phases.",
            extra:
                "Fractional CISO · CIO · CDO · CTO · Cyber Program Leaders · Transformation Heads",
            icon: Briefcase,
        },
        {
            title: "Compliance & Regulatory Talent",
            description:
                "On-demand compliance and privacy specialists supporting audits, certifications, regulatory readiness, and continuous governance.",
            extra:
                "GDPR · DPDP · ISO 27001 · SOC 2 · HIPAA · PCI DSS · ESG · Privacy Engineering",
            icon: Scale,
        },
        {
            title: "Crisis Response & Incident Support Talent",
            description:
                "Immediate access to highly specialized experts for cyber incidents, ransomware events, and high-impact security crises.",
            extra:
                "Breach Analysts · Digital Forensics · Ransomware Negotiators · Threat Hunters · Incident Responders",
            icon: Siren,
        },
    ];


    const risks = [
        {
            title: "Severe Shortage of Specialized Skills",
            subtext:
                "Global demand for expertise in AI, cybersecurity, cloud-native engineering, digital forensics, and GRC significantly exceeds available talent.",
            icon: BrainCircuit,
        },
        {
            title: "Rising Talent Costs & High Attrition",
            subtext:
                "Skill scarcity drives premium compensation, while competition from big tech and global consulting firms accelerates attrition.",
            icon: DollarSign,
        },
        {
            title: "Cyber, Cloud & AI Readiness Gaps",
            subtext:
                "Workforce capabilities lag behind rapidly evolving cyber threats, cloud architectures, and AI-driven technologies.",
            icon: Cpu,
        },
        {
            title: "Geopolitical & Compliance Constraints",
            subtext:
                "Cross-border hiring restrictions, sanctions, data residency laws, and regulatory barriers limit access to global talent pools.",
            icon: GlobeLock,
        },
        {
            title: "Supply Chain & Operational Skill Gaps",
            subtext:
                "Lack of specialists in resilience engineering, ESG compliance, risk intelligence, and digital operations weakens execution.",
            icon: Factory,
        },
        {
            title: "Legacy-to-Modern Infrastructure Migration Risks",
            subtext:
                "Shortage of experts capable of securely modernizing legacy systems increases transformation delays and operational risk.",
            icon: RefreshCcw,
        },
        {
            title: "Privacy, Data & AI Governance Shortfalls",
            subtext:
                "Rising regulatory and ethical demands outpace the availability of privacy engineers, AI governance, and data protection specialists.",
            icon: ShieldAlert,
        },
        {
            title: "Crisis Response & Incident Readiness Gaps",
            subtext:
                "Organizations struggle to rapidly source threat hunters, DFIR analysts, and incident responders during critical cyber events.",
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
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">Niche Talent Services</h2>
                            <h4 className="font-semibold text-blue-500">
                                Specialized Talent That Accelerates Innovation, Resilience & Competitive Advantage
                            </h4>
                            <p className="mt-2 text-slate-300">
                                Digital transformation, AI disruption, rising cyber threats, regulatory complexity, and global workforce shortages have intensified the need for Niche Talent—highly skilled, domain-specific professionals who can solve complex challenges, drive modernization, and enable organizations to scale with confidence.
                            </p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber provides specialized, globally vetted talent across cybersecurity, cloud, AI, data, GRC, and transformation programs—helping enterprises fill critical gaps quickly and sustainably.
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
                                    Key Challenges in Niche Talent
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Organizations today struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "Global deficit of 85+ million skilled professionals",
                                        "40% higher demand for AI, cybersecurity, cloud, and GRC talent",
                                        "Digital transformation creating roles faster than talent can be trained",
                                        "Hybrid skills spanning cyber + cloud + compliance are extremely rare",
                                        "Slow hiring cycles delay innovation, cloud migration, and security programs",
                                        "Competition from global tech giants and government agencies limits access to top talent"

                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Niche talent has become a strategic differentiator—not just an HR requirement.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>



                <KeyRisks
                    title="Top Niche Talent Risks"
                    subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                    risks={risks}
                />

                <ServiceSolution solutions={solutions} heading={"Mociber’s Niche Talent Services & Solutions"} />


                <YouTubeAutoplaySection />
                {/* SERVICES */}
                <Service />
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Niche Talent Services — FAQs"
                    subtitle="Common questions about our Data Privacy & Protection."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
