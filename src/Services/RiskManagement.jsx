import React from "react";
import {
    ShieldCheck,
    AlertTriangle,
    Users,
    Lock,
    CloudLightning,
    Bot,
    Cpu,
    FileWarning,
    KeyRound,
    WifiOff,
    Radar,
    Eye,
    Siren,
    GraduationCap,
    Cloud,
    Layers,
    Globe,
    BarChart3,
    LifeBuoy,
    LayoutDashboard,
    Presentation,
    Globe2,
    ShieldAlert,
    Network,
    FileCheck2,
    BadgeAlert,
    TrendingDown,
    AlertOctagon,
    Leaf,
    Satellite,
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


export default function RiskManagementPage() {


    const faqs = [
        {
            question: "What is Enterprise Risk Management (ERM)?",
            answer:
                "Enterprise Risk Management (ERM) is a holistic framework that identifies, assesses, and manages risks across strategic, operational, cyber, financial, regulatory, and reputational domains to ensure enterprise-wide resilience.",
        },
        {
            question: "Why do organizations need ERM today?",
            answer:
                "Rising geopolitical tensions, cyber warfare, AI disruption, supply chain fragility, and complex global regulations require a unified, intelligence-driven ERM program to ensure business continuity and stability.",
        },
        {
            question: "How is ERM different from traditional risk management?",
            answer:
                "Traditional risk management operates in silos. ERM integrates all risks across the enterprise into a single governance and reporting structure, enabling better strategic decision-making.",
        },
        {
            question: "Does Mociber design and implement complete ERM frameworks?",
            answer:
                "Yes. Mociber designs and implements end-to-end ERM frameworks aligned with COSO ERM, ISO 31000, NIST, and industry-specific regulatory requirements.",
        },
        {
            question: "Can ERM help predict and prepare for future risks?",
            answer:
                "Yes. Using AI-driven analytics, real-time intelligence, and scenario-based modeling, ERM helps forecast emerging risks before they cause operational or financial disruption.",
        },
        {
            question: "Does Mociber support cyber, AI, and digital risk management?",
            answer:
                "Absolutely. Mociber integrates cyber risk, AI governance, cloud risk, data governance, and digital resilience into a unified ERM operating model.",
        },
        {
            question: "Does Mociber provide geopolitical and geoeconomic risk monitoring?",
            answer:
                "Yes. We deliver real-time geopolitical and geoeconomic intelligence to help organizations anticipate regulatory, supply chain, operational, and investment risks.",
        },
        {
            question: "Which industries benefit most from ERM?",
            answer:
                "BFSI, healthcare, energy, government, telecom, manufacturing, retail, and multinational or highly regulated enterprises benefit most from ERM.",
        },
        {
            question: "Can Mociber help with business continuity and crisis management?",
            answer:
                "Yes. As part of ERM, we provide business continuity planning, crisis simulations, tabletop exercises, resilience engineering, and executive war-gaming.",
        },
        {
            question: "How can an organization begin its ERM journey with Mociber?",
            answer:
                "Organizations can begin by contacting our advisory team. We start with a risk maturity assessment and deliver a tailored roadmap for enterprise-wide risk transformation.",
        },
    ];



    const solutions = [
        {
            title: "Geopolitical & Geoeconomic Volatility",
            description:
                "Conflicts, sanctions, political disruptions, and economic instability impacting global business operations.",
            icon: Globe2,
        },
        {
            title: "Cyber Warfare & Digital Threat Escalation",
            description:
                "State-sponsored attacks, ransomware, AI-powered malware, and cross-border cyber campaigns.",
            icon: ShieldAlert,
        },
        {
            title: "AI, Automation & Algorithmic Risk",
            description:
                "AI bias, model drift, data poisoning, ungoverned automation, and adversarial machine learning attacks.",
            icon: Bot,
        },
        {
            title: "Third-Party & Multi-Tier Supply Chain Weaknesses",
            description:
                "Hidden risks across vendors, cloud providers, logistics partners, and technology suppliers.",
            icon: Network,
        },
        {
            title: "Regulatory & Data Governance Uncertainty",
            description:
                "Rapidly evolving regulations including DPDP, GDPR, NIS2, AI Act, ESG mandates, and sectoral frameworks.",
            icon: FileCheck2,
        },
        {
            title: "Financial & Credit Market Instability",
            description:
                "Market stress, liquidity shocks, inflation volatility, and global financial uncertainty.",
            icon: TrendingDown,
        },
        {
            title: "Operational Disruptions & Business Continuity Gaps",
            description:
                "Infrastructure failures, natural disasters, insider threats, and technology breakdowns.",
            icon: AlertOctagon,
        },
        {
            title: "ESG, Sustainability & Climate Risks",
            description:
                "Climate events, energy shortages, ESG reporting gaps, and sustainability compliance failures.",
            icon: Leaf,
        },
        {
            title: "Critical Infrastructure & Satellite Vulnerabilities",
            description:
                "Targeted attacks on national grids, satellites, OT/ICS systems, and communication networks.",
            icon: Satellite,
        },
    ];


    const risks = [
        {
            title: "Enterprise-Wide Risk Assessment & Maturity Benchmarking",
            subtext:
                "Full-spectrum assessment covering strategic, cyber, operational, financial, compliance, and reputational risk domains.",
            icon: ShieldCheck,
        },
        {
            title: "Integrated ERM Framework Design",
            subtext:
                "Design and deployment of ERM programs aligned to COSO ERM, ISO 31000, NIST, and global standards with clear governance, risk appetite, and reporting structures.",
            icon: Layers,
        },
        {
            title: "Geopolitical & Geoeconomic Risk Intelligence",
            subtext:
                "Real-time monitoring of global developments to anticipate operational, regulatory, supply chain, and investment impacts.",
            icon: Globe,
        },
        {
            title: "Cyber Risk Quantification & Scenario-Based Modelling",
            subtext:
                "Simulation of ransomware, APT campaigns, data breaches, cloud compromise, and AI-enabled threats using advanced modeling techniques.",
            icon: BarChart3,
        },
        {
            title: "Third-Party & Supply Chain Risk Management (TPRM)",
            subtext:
                "Vendor risk scoring, tiered supplier visibility, continuous monitoring, and assurance reporting across ecosystems.",
            icon: Users,
        },
        {
            title: "AI & Automation Risk Governance",
            subtext:
                "Bias testing, adversarial risk analysis, model monitoring, algorithmic controls, and compliance with AI regulations.",
            icon: Bot,
        },
        {
            title: "Business Continuity, Crisis & Resilience Management",
            subtext:
                "Continuity planning, resilience architecture, redundancy design, tabletop exercises, and war-room operations.",
            icon: LifeBuoy,
        },
        {
            title: "GRC Platform Implementation",
            subtext:
                "Deployment of unified governance, risk, and compliance platforms for real-time enterprise risk visibility.",
            icon: LayoutDashboard,
        },
        {
            title: "Executive Risk Coaching & War-Gaming",
            subtext:
                "Board-level risk training, crisis simulations, cyber war-games, and strategic scenario planning.",
            icon: GraduationCap,
        },
        {
            title: "Board Reporting & Enterprise Risk Insights",
            subtext:
                "Custom dashboards, predictive analytics, and decision-ready risk insight packs for executive leadership.",
            icon: Presentation,
        },
    ];


    return (
        <div className="min-h-screen">
            <HeroBanner
                image="/Banners/About.jpg"
                heading={"Enterprise Risk Management"}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <main className="">
                {/* HERO / INTRO */}
                <motion.section id="intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl m-auto ">
                        <div className=" rounded-2xl py-16 p-4">
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-2">Integrated Risk Intelligence for a Volatile, High-Velocity World</h2>
                            <h4 className="font-semibold text-blue-500 mt-3">Integrated Risk Intelligence for a Volatile, High-Velocity World</h4>
                            <p className="mt-2 text-slate-300">
                                Enterprises today face an unprecedented combination of geopolitical instability, cyber warfare, AI-driven threats, regulatory complexity, and operational disruptions. Traditional risk approaches—siloed, reactive, compliance-only—no longer protect organizations in a rapidly shifting global landscape.                            </p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber’s Enterprise Risk Management (ERM) practice delivers a unified, intelligence-driven approach to risk governance that helps organizations predict, prepare, and respond to threats across strategic, operational, cyber, financial, reputational, and regulatory domains.                                </h4>
                            <p className="mt-2 text-slate-300">
                                We help enterprises turn uncertainty into competitive advantage.
                            </p>

                            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-6 h-6 text-[#032152] mt-1" />
                                    <div>
                                        <strong>24×7 SOC</strong>
                                        <div className="text-sm text-slate-500">Real-time detection & response</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Lock className="w-6 h-6 text-[#032152] mt-1" />
                                    <div>
                                        <strong>Zero Trust</strong>
                                        <div className="text-sm text-slate-500">Identity-first secure architecture</div>
                                    </div>
                                </li>
                            </ul>

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

                        <div className=" w-full h-64 md:h-96 rounded-2xl overflow-hidden  m-auto">
                            <img src="https://skill-mine.com/wp-content/uploads/2024/06/12.jpg" className="w-full h-auto object-cover object-center" />
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
                                    src="/security_image.jpg" // update path
                                    alt="Integrated Risk Visualization"
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>

                            {/* RIGHT — TEXT */}
                            <div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white/95 mb-4">
                                    The Problem — Integrated Risk
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Threats evolve faster than organizations can adapt. Limited visibility,
                                    legacy systems, cloud misconfigurations and a global skills shortage make
                                    it hard to achieve comprehensive protection.
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "Fragmented risk ownership across departments",
                                        "Limited visibility of interconnected risks",
                                        "Outdated reporting and manual risk processes",
                                        "Insufficient analytics and predictive intelligence",
                                        "High dependence on vendors and global supply chain actors",
                                        "Lack of cybersecurity–business risk integration",
                                        "Shortage of ERM, GRC, cyber, and geopolitical experts",
                                        "Reactive crisis response instead of proactive anticipation",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Modern risk requires modern intelligence
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>





                <ServiceSolution solutions={solutions} heading={"Top Enterprise Risks Reshaping Global Organizations"} />
                <KeyRisks
                    title="Mociber’s Enterprise Risk Management Services"
                    subtitle="Top risks enterprises face — prioritized for impact and exploitability."
                    risks={risks}
                />


                <YouTubeAutoplaySection />
                {/* SERVICES */}
                {/* <Service /> */}
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Enterprise Risk Management - FAQs "
                    subtitle=""
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
