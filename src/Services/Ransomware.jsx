import React, { useState } from "react";
import {
    ShieldCheck,
    Bot,
    Bug,
    AudioLines,
    Factory,
    CloudOff,
    GlobeLock,
    Truck,
    Brain,
    Lock,
    ChevronDown,
    ShieldAlert,
    DatabaseBackup,
    Shield,
    Users,
    Siren,
    GraduationCap,
    Database,
} from "lucide-react";

import {
    LockKeyhole,
    Building2,
    Cloud,
    Network,
    ShoppingBag,
    MailWarning,
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


export default function RansomwarePage() {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "What is ransomware resilience?",
            answer:
                "Ransomware resilience is the ability of an organization to prevent, detect, contain, and recover from ransomware attacks while maintaining business continuity and minimizing operational, financial, and reputational impact.",
        },
        {
            question: "How does Mociber help organizations recover without paying ransom?",
            answer:
                "Mociber combines immutable and air-gapped backups, isolated recovery environments, deception traps, and rapid response protocols to restore systems safely—without negotiating or paying attackers.",
        },
        {
            question: "What makes ransomware attacks more dangerous today?",
            answer:
                "Modern ransomware campaigns leverage AI-powered social engineering, double and triple extortion, supply chain compromise, automated lateral movement, and data exfiltration before encryption.",
        },
        {
            question: "How quickly can Mociber respond to a ransomware incident?",
            answer:
                "Our ransomware incident response specialists can engage within hours, providing rapid containment, forensic investigation, system restoration, and business recovery support.",
        },
        {
            question: "Does Mociber help with cyber insurance and compliance?",
            answer:
                "Yes. Mociber assists organizations with cyber insurance alignment, policy gap analysis, evidence collection, breach documentation, regulatory reporting, and post-incident compliance requirements.",
        },
        {
            question: "What industries are most targeted by ransomware?",
            answer:
                "Banking, healthcare, manufacturing, retail, government, education, logistics, and supply chain–dependent industries are among the most frequently targeted sectors.",
        },
        {
            question: "What makes Mociber’s ransomware resilience approach unique?",
            answer:
                "Mociber delivers a unified framework combining AI-driven detection, deception technology, resilient backup architecture, vendor risk intelligence, and business continuity planning.",
        },
        {
            question: "Can Mociber help with ransomware tabletop exercises and simulations?",
            answer:
                "Absolutely. We conduct executive war-room simulations, leadership decision drills, and full restoration exercises to validate ransomware readiness across technical and business teams.",
        },
        {
            question: "Do you provide 24/7 ransomware monitoring?",
            answer:
                "Yes. Our 24×7 SOC continuously monitors ransomware behaviors, anomalies, lateral movement indicators, and suspicious activity across endpoints, networks, and cloud environments.",
        },
        {
            question: "How can organizations start a ransomware resilience assessment with Mociber?",
            answer:
                "Organizations can initiate a ransomware resilience assessment by contacting us through the consultation form. Our specialists respond within 24 hours with a tailored assessment and roadmap.",
        },
    ];


    const solutions = [
        {
            title: "Ransomware Resilience Assessment & Risk Index",
            icon: ShieldAlert,
            description:
                "Establish a clear, quantifiable view of ransomware exposure across business, technology, and third-party ecosystems.",
            details: [
                "Complete ransomware risk profiling",
                "Business-critical system and dependency mapping",
                "Vendor exposure and lateral movement scoring",
                "Backup readiness and recovery time objective (RTO) analysis",
            ],
        },
        {
            title: "Immutable, Air-Gapped & Real-Time Backup Architecture",
            icon: DatabaseBackup,
            description:
                "Ensure data survivability and rapid recovery even during advanced ransomware events.",
            details: [
                "Immutable snapshot-based backups",
                "Air-gapped and cloud-isolated storage",
                "Real-time decoupled backup architecture",
                "Automated backup testing and failover validation",
            ],
        },
        {
            title: "AI-Driven Detection, Deception & Rapid Response",
            icon: Bot,
            description:
                "Detect ransomware activity early and automatically disrupt attack chains before encryption spreads.",
            details: [
                "Behavior-based AI detection engines",
                "Graph-based anomaly and lateral movement scoring",
                "Deception traps, honeypots, and ransomware lures",
                "Autonomous endpoint and network isolation",
            ],
        },
        {
            title: "Vendor & Supply Chain Risk Monitoring",
            icon: Users,
            description:
                "Reduce ransomware entry points introduced through third-party vendors and service providers.",
            details: [
                "Third-party security posture scoring",
                "Continuous vendor threat monitoring",
                "Breach likelihood and impact modeling",
                "Vendor compromise response and containment planning",
            ],
        },
        {
            title: "Incident Response, Business Continuity & War-Room Operations",
            icon: Siren,
            description:
                "Minimize downtime and financial impact through coordinated ransomware response and recovery operations.",
            details: [
                "Ransomware-specific response playbooks",
                "Containment, eradication, and forensic investigation",
                "Backup recovery and controlled system restoration",
                "Tabletop exercises and business continuity drills",
            ],
        },
        {
            title: "Cyber Insurance Advisory",
            icon: Shield,
            description:
                "Align technical readiness with cyber insurance requirements and post-breach obligations.",
            details: [
                "Policy gap and coverage analysis",
                "Ransom negotiation and decision playbooks",
                "Evidence and documentation readiness",
                "Breach notification and compliance alignment",
            ],
        },
        {
            title: "Executive, Employee & Leadership Awareness",
            icon: GraduationCap,
            description:
                "Reduce human-driven ransomware risk through targeted training and leadership preparedness.",
            details: [
                "AI-aware phishing and ransomware training",
                "Crisis leadership and executive workshops",
                "Ransom negotiation and decision simulations",
                "Social engineering and insider risk resilience training",
            ],
        },
    ];

    const risks = [
        {
            title: "Double & Triple Extortion",
            subtext:
                "Attackers encrypt data, steal sensitive information, threaten public leaks, and even target customers and business partners.",
            icon: LockKeyhole,
        },
        {
            title: "Supply Chain & Vendor Compromise",
            subtext:
                "Breaches in MSPs, software vendors, and third parties act as covert ransomware entry points into core environments.",
            icon: Users,
        },
        {
            title: "Disruption of Critical Operations",
            subtext:
                "Ransomware targeting ERP, finance, CRM, manufacturing, or healthcare systems can halt business operations entirely.",
            icon: Building2,
        },
        {
            title: "Cloud Ransomware & Misconfigurations",
            subtext:
                "Weak identity policies, exposed storage, and insecure SaaS integrations significantly expand ransomware attack paths.",
            icon: Cloud,
        },
        {
            title: "Rapid Lateral Movement",
            subtext:
                "Credential theft, automation tools, and living-off-the-land techniques enable attackers to spread across networks in minutes.",
            icon: Network,
        },
        {
            title: "Backup Corruption & Integrity Failures",
            subtext:
                "Attackers delete, encrypt, or poison backups—making recovery impossible without immutable and isolated backup controls.",
            icon: Database,
        },
        {
            title: "Ransomware-as-a-Service (RaaS) Growth",
            subtext:
                "Cybercriminal marketplaces dramatically increase ransomware scale, speed, and sophistication across industries.",
            icon: ShoppingBag,
        },
        {
            title: "AI-Driven Phishing & Social Engineering",
            subtext:
                "Hyper-realistic emails, voice spoofing, and deepfake impersonation dramatically increase initial compromise rates.",
            icon: MailWarning,
        },
        {
            title: "Weak Incident Response",
            subtext:
                "Delayed detection, unclear escalation paths, and outdated playbooks significantly increase downtime and losses.",
            icon: Siren,
        },
        {
            title: "Regulatory, Legal & Insurance Exposure",
            subtext:
                "Mandatory breach reporting, regulatory penalties, and tightening cyber insurance requirements amplify financial risk.",
            icon: Scale,
        },
    ];


    return (
        <div className="min-h-screen">
            <HeroBanner
                image="/Banners/About.jpg"
                heading={"Ransomware & Business Resilience"}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <main className="">
                {/* HERO / INTRO */}
                <motion.section id="intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl m-auto ">
                        <div className=" rounded-2xl py-16 p-4">
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-2">Ransomware & Business Resilience</h2>
                            <h4 className="font-semibold text-blue-500 mt-3">Recover Faster. Defend Smarter. Stay Operational Under Attack</h4>
                            <p className="mt-2 text-slate-300">
                                Ransomware remains one of the most disruptive and financially devastating cyber threats facing organizations today. Modern attacks combine encryption, data theft, extortion, and lateral movement—often executed by highly coordinated criminal groups and nation-state actors.
                            </p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber strengthens enterprise resilience through proactive preparation, AI-driven detection, immutable backups, vendor risk control, and rapid recovery frameworks.
                            </h4>
                            <p className="mt-2 text-slate-300">
                                We transform ransomware from a crisis into a manageable, recoverable event—allowing businesses to continue operating with confidence.                            </p>

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
                            <img src="/Services_Images/Ransomeware and Business Resilience.jpeg" className="w-full h-auto object-cover object-center" />
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
                                    src="/Services_Images/Ransomeware and Business Resilience 2.jpeg"
                                    alt="Integrated Risk Visualization"
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>

                            {/* RIGHT — TEXT */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white/95 mb-4">
                                    Key Challenges in Ransomware & Business Resilience
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Governments worldwide struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "AI-powered phishing and targeted attacks",
                                        "Backups lacking immutability or offline protection",
                                        "Vendor and supply chain weaknesses",
                                        "Shortage of skilled ransomware responders",
                                        "Outdated playbooks and untested recovery processes",
                                        "Complex threat landscape evolving faster than defenses",
                                        "Fragmented tools with no unified resilience strategy",
                                        "High financial impact and growing insurance exclusions"

                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Enterprises must adopt resilience-first cybersecurity—not just detection-only strategies.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <KeyRisks
                    title="Top Ransomware & Business Resilience Risks"
                    subtitle="Our AI research and global intelligence teams highlight nine critical risks transforming government cybersecurity:"
                    risks={risks}
                />
                <ServiceSolution solutions={solutions} heading={"Defense & Government Cybersecurity Solution"} />








                <YouTubeAutoplaySection />
                {/* SERVICES */}
                {/* <Service /> */}
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Ransomware & Business Resilience - FAQs"
                    subtitle="Common questions about Ransomware & Business Resilience services and solutions."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
