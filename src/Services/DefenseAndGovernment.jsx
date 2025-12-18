import React, { useState } from "react";
import {
    CrossIcon,
    ShieldCheck,
} from "lucide-react";

import {
    Bot,
    Bug,
    AudioLines,
    Factory,
    CloudOff,
    GlobeLock,
    Truck,
    Brain,
    Lock
} from "lucide-react";

import {
    Radar,
    ClipboardCheck,
    Fingerprint,
    Vote,
    ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactCta from "@/components/ContactCta";
import HeroBanner from "@/components/ServiceHero";
import Service from "@/components/Service";
import TrustedLogos from "@/components/TrustedLogos";
import ToolsTabs from "@/components/Tools";
import YouTubeAutoplaySection from "@/components/Video";
import KeyRisks from "../components/Risks";
import FaqSection from "@/components/Faq";

import ServiceSolution from "@/components/ServiceSolution";


export default function DefenseAndGovernmentPage() {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "What is AI-powered defense in government cybersecurity?",
            answer:
                "AI-powered defense uses artificial intelligence, machine learning, and automation to detect, prevent, and respond to nation-state attacks, cyberwarfare, disinformation, and critical infrastructure threats faster than traditional security systems.",
        },
        {
            question: "How does Mociber support national security agencies and government departments?",
            answer:
                "Mociber provides AI-driven threat intelligence, sovereign cloud security, OT/ICS protection, zero-trust frameworks, cyberwarfare readiness, and 24×7 monitoring tailored for ministries, defense agencies, public-sector bodies, and critical infrastructure organizations.",
        },
        {
            question: "What types of cyber threats do governments face today?",
            answer:
                "Governments face AI-generated malware, nation-state espionage, deepfake disinformation, zero-day exploits, supply-chain attacks, critical infrastructure sabotage, cloud sovereignty risks, and emerging quantum computing threats.",
        },
        {
            question: "Does Mociber offer cybersecurity for critical infrastructure?",
            answer:
                "Yes. Mociber secures power grids, water systems, transportation networks, healthcare, telecom, aviation, oil & gas, and other OT/ICS environments through AI-based anomaly detection and industrial-grade defense technologies.",
        },
        {
            question: "What is sovereign cloud security and why is it important?",
            answer:
                "Sovereign cloud security ensures that government data, identities, and workloads remain under national jurisdiction, isolated from foreign influence, global data laws, and unauthorized third-party access.",
        },
        {
            question: "Can Mociber help government agencies prevent deepfake and information warfare attacks?",
            answer:
                "Yes. Mociber provides AI-based deepfake detection, influence-monitoring analytics, election security frameworks, and counter-disinformation intelligence to protect public trust and national stability.",
        },
        {
            question: "Do you support compliance with defense and government regulations?",
            answer:
                "Absolutely. Mociber aligns agencies with NIST, CISA, ENISA, MITRE, IT Act, DPDP India, national data sovereignty standards, and ministry- or defense-specific regulatory requirements.",
        },
        {
            question: "How does Mociber detect nation-state cyberattacks quickly?",
            answer:
                "Our AI-driven threat intelligence engine analyzes global threat signals, geopolitical indicators, malware behavior, and cross-border attack patterns to identify nation-state activity in real time.",
        },
        {
            question: "Does Mociber provide SOC services for government agencies?",
            answer:
                "Yes. Mociber operates a military-grade, 24×7 Cyber Command Center delivering continuous monitoring, advanced threat hunting, incident response, and digital forensics for government environments.",
        },
        {
            question: "How can government organizations request an assessment or proposal from Mociber?",
            answer:
                "Government agencies can contact Mociber through the secure form on our website. Our defense cybersecurity specialists respond within 24 hours with a tailored assessment or proposal.",
        },
    ];




    const solutions = [
        {
            title: "AI-Powered National Threat Intelligence",
            icon: Radar,
            description:
                "Predict, detect, and correlate nation-state cyber threats before they impact national systems.",
            details: [
                "AI-based geopolitical risk analytics",
                "MITRE ATT&CK aligned threat detection",
                "Real-time cross-border intelligence correlation",
            ],
        },
        {
            title: "Zero-Trust Security for Government & Defense",
            icon: ShieldCheck,
            description:
                "Identity-first security architecture designed for ministries, defense agencies, and classified departments.",
            details: [
                "Multi-level identity and access governance",
                "Passwordless and hardware-based authentication",
                "Segmentation for sensitive and classified networks",
            ],
        },
        {
            title: "Critical Infrastructure Protection (ICS / OT / SCADA)",
            icon: Factory,
            description:
                "Protect power grids, transport, oil & gas, water, and healthcare systems from cyber sabotage.",
            details: [
                "AI-driven OT anomaly detection",
                "ICS firewalls and secure remote operations",
                "Compliance with NERC-CIP and NIST 800-82",
            ],
        },
        {
            title: "Digital Sovereignty & Government Cloud Security",
            icon: CloudOff,
            description:
                "Ensure national data sovereignty while modernizing government cloud infrastructure.",
            details: [
                "Sovereign encryption and independent key ownership",
                "Secure government cloud migrations",
                "Post-quantum cryptography readiness",
            ],
        },
        {
            title: "Cyberwarfare Readiness & Incident Response",
            icon: CrossIcon,
            description:
                "Prepare government institutions for cyber conflict and large-scale incidents.",
            details: [
                "Cyber range and war-game simulations",
                "Red team / blue team exercises",
                "24×7 nation-state threat hunting and war room response",
            ],
        },
        {
            title: "AI-Assisted Governance, Risk & Compliance",
            icon: ClipboardCheck,
            description:
                "Automated compliance monitoring across global and national regulations.",
            details: [
                "GDPR, DPDP India, NIS2, ISO 27001",
                "Defense-specific compliance frameworks",
                "Continuous audit and reporting readiness",
            ],
        },
        {
            title: "Public Sector Fraud & Identity Protection",
            icon: Fingerprint,
            description:
                "Protect citizen identities and prevent large-scale fraud across public systems.",
            details: [
                "AI-driven identity verification",
                "Document forgery detection",
                "Fraud analytics for public services",
            ],
        },
        {
            title: "Election Security & Counter-Disinformation",
            icon: Vote,
            description:
                "Safeguard democratic processes and public trust in elections.",
            details: [
                "Deepfake detection and media verification",
                "Influence and disinformation monitoring",
                "Election infrastructure hardening",
            ],
        },
    ];




    const risks = [
        {
            title: "AI-Enhanced Nation-State Attacks",
            subtext:
                "Autonomous malware, rapid reconnaissance, and AI-driven exploit chains reduce detection and response windows to seconds.",
            icon: Bot,
        },
        {
            title: "Zero-Day Warfare & Exploit Market Growth",
            subtext:
                "Unpatched vulnerabilities are weaponized at unprecedented speed, impacting ministries, military networks, and national systems.",
            icon: Bug,
        },
        {
            title: "Deepfake & Information Warfare",
            subtext:
                "Manipulated audio and video used to destabilize elections, influence policy decisions, and erode public trust.",
            icon: AudioLines,
        },
        {
            title: "ICS / OT Critical Infrastructure Attacks",
            subtext:
                "Power grids, water systems, aviation, oil & gas, and healthcare targeted through ICS and OT exploit campaigns.",
            icon: Factory,
        },
        {
            title: "Cloud Sovereignty Risks",
            subtext:
                "Sensitive national data hosted on foreign-controlled cloud platforms creates geopolitical, legal, and regulatory exposure.",
            icon: CloudOff,
        },
        {
            title: "Cross-Border Cyber Espionage",
            subtext:
                "Nation-state APTs infiltrate ministries, embassies, intelligence networks, and cloud APIs for long-term espionage.",
            icon: GlobeLock,
        },
        {
            title: "Defense Supply Chain Compromise",
            subtext:
                "Adversaries infiltrate defense contractors, logistics partners, and third-party vendors to breach government ecosystems.",
            icon: Truck,
        },
        {
            title: "AI Model Poisoning in Government Systems",
            subtext:
                "Manipulated datasets corrupt AI-driven intelligence, analytics platforms, and autonomous decision-making systems.",
            icon: Brain,
        },
    ];


    return (
        <div className="min-h-screen">
            <HeroBanner
                image="/Banners/About.jpg"
                heading={"AI-Powered Defense & Government Security"}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <main className="">
                {/* HERO / INTRO */}
                <motion.section id="intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl m-auto ">
                        <div className=" rounded-2xl py-16 p-4">
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-2">AI-Powered Defense & Government Security</h2>
                            <h4 className="font-semibold text-blue-500 mt-3">Smarter, Faster & Autonomous Protection for National Infrastructure</h4>
                            <p className="mt-2 text-slate-300">
                                Governments today face unprecedented threats—AI-generated cyberattacks, geopolitical conflicts, deepfake warfare, critical infrastructure vulnerabilities, and rapid cloud expansion. Traditional defenses can no longer keep pace with nation-state adversaries who weaponize AI, automate reconnaissance, and exploit zero-day vulnerabilities within seconds.
                            </p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber delivers next-generation, AI-driven cybersecurity built specifically for government agencies, defense organizations, and national-critical sectors.</h4>
                            <p className="mt-2 text-slate-300">
                                We combine <b>military-grade intelligence, sovereign cloud security, critical infrastructure protection, and autonomous cyber operations</b> to safeguard national assets from modern threats.
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
                                    src="https://skill-mine.com/wp-content/uploads/2022/10/hologram-padlock-sunset-panoramic-cityscape-bangkok-southeast-asia-concept-cyber-security-intelligence-multi-exposure-1024x683.jpg" // update path
                                    alt="Integrated Risk Visualization"
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>

                            {/* RIGHT — TEXT */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white/95 mb-4">
                                    Key Challenges for Governments & National Security
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Governments worldwide struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "Rapid escalation of AI-powered nation-state attacks",
                                        "Hybrid warfare combining cyber, physical, and psychological operations",
                                        "Legacy IT systems are unable to withstand modern threats",
                                        "Shortage of high-end cybersecurity talent",
                                        "Rising data sovereignty conflicts across borders",
                                        "Vulnerable national surveillance, biometrics & digital ID systems",

                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Mociber solves these challenges with a future-ready AI defense ecosystem.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* <section className="bg-linear-to-b from-[#081a33] to-[#000A1F] text-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-14 max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Defense & Government Cybersecurity Solutions
                            </h2>
                            <p className="mt-4 text-slate-300">
                                Mociber delivers an AI-powered national cyber defense architecture
                                built on automation, digital sovereignty, and compliance with global
                                frameworks including NIST, CISA, ENISA, MITRE, and CERT-In.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-14 items-start">

                            <div className="divide-y divide-white/10 lg:col-span-2">
                                {solutions.map((item, idx) => {
                                    const Icon = item.icon;
                                    const isOpen = open === idx;

                                    return (
                                        <div key={idx} className="py-6">
                                            <button
                                                onClick={() => setOpen(isOpen ? null : idx)}
                                                className="w-full flex items-start justify-between text-left gap-6"
                                            >
                                                <div className="flex gap-4">
                                                    <Icon className="w-6 h-6 text-cyan-400 mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="text-lg font-semibold">
                                                            {item.title}
                                                        </h3>

                                                    </div>
                                                </div>

                                                <ChevronDown
                                                    className={`w-5 h-5 mt-1 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {isOpen && (
                                                <>
                                                    <p className="text-sm text-slate-400 mt-4">
                                                        {item.description}
                                                    </p>
                                                    <ul className="mt-4 ml-10 text-sm text-slate-300 list-disc space-y-2">
                                                        {item.details.map((d, i) => (
                                                            <li key={i}>{d}</li>
                                                        ))}
                                                    </ul>
                                                </>

                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="hidden lg:block sticky top-28">
                                <div className="relative m-auto ">
                                    <img
                                        src="https://skill-mine.com/wp-content/uploads/2021/10/skillki.png"
                                        alt="Government Cyber Defense"
                                        className="w-auto m-auto rounded-lg shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0b1220]/70 to-transparent" />
                                </div>

                                <p className="mt-4 text-xs text-slate-400">
                                    AI-driven cyber defense for national infrastructure, defense agencies,
                                    and public sector institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                 <KeyRisks
                    title="Top Geo-Cyber Risks"
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
                    title="AI-Powered Defense & Government Security  FAQs"
                    subtitle="Common questions about our cybersecurity services, platforms, and approach."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
