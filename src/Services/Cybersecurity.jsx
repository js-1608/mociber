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


export default function MociberCybersecurityPage() {


    const faqs = [
        {
            question: "What is included in Mociber’s cybersecurity services?",
            answer:
                "Mociber provides end-to-end cybersecurity including SOC 24×7 monitoring, cloud security, zero trust architecture, threat intelligence, vulnerability management, incident response, OT/IoT security, and compliance support.",
        },
        {
            question: "Why do enterprises need 24×7 SOC monitoring?",
            answer:
                "A Security Operations Center (SOC) provides continuous threat detection, rapid incident response, and real-time monitoring to stop cyberattacks before they impact operations.",
        },
        {
            question: "What industries does Mociber support?",
            answer:
                "We secure BFSI, healthcare, government, telecom, retail, manufacturing, energy, technology, and critical infrastructure sectors.",
        },
        {
            question: "Does Mociber help with cloud security for AWS, Azure, and GCP?",
            answer:
                "Yes. We secure workloads across AWS, Azure, and Google Cloud using identity-based controls, workload protection, and cloud security posture management.",
        },
        {
            question: "Can Mociber help during a ransomware attack?",
            answer:
                "Yes. Our incident response team performs containment, forensics, negotiation support, and recovery to minimize downtime and financial loss.",
        },
        {
            question: "What is Zero Trust Architecture?",
            answer:
                "Zero Trust is a security model where every user, device, and action must be verified continuously—eliminating implicit trust inside corporate networks.",
        },
        {
            question: "Does Mociber offer cybersecurity for OT/IoT and industrial systems?",
            answer:
                "Yes. We protect SCADA, ICS, and industrial IoT systems with specialized OT security controls and continuous monitoring.",
        },
        {
            question: "How does Mociber help with regulatory compliance?",
            answer:
                "We align organizations with ISO 27001, SOC2, PCI-DSS, HIPAA, GDPR, NIST, RBI, and DPDP through audits, documentation, and automated compliance frameworks.",
        },
        {
            question: "What tools and technologies does Mociber use?",
            answer:
                "We use enterprise-grade platforms such as CrowdStrike, SentinelOne, Wiz, Prisma Cloud, Splunk, QRadar, Tenable, Qualys, Okta, CyberArk, and Recorded Future.",
        },
        {
            question: "How can I get a cybersecurity assessment for my organization?",
            answer:
                "You can request an assessment through our contact form, and our cybersecurity specialists will reach out within 24 hours.",
        },
    ];



    const solutions = [
        {
            title: "Managed Security Operations Center (SOC 24×7)",
            description:
                "Always-on monitoring, AI-driven threat detection, log correlation, and rapid incident response across endpoints, networks, and cloud.",
            icon: ShieldCheck,
        },
        {
            title: "Vulnerability Management & Attack Surface Intelligence",
            description:
                "Continuous discovery, exploit-based prioritization, attack surface mapping, and remediation strategy.",
            icon: Radar,
        },
        {
            title: "Cloud Security & Zero Trust Architecture",
            description:
                "Secure AWS, Azure, and GCP using identity-first access, workload protection, and micro-segmentation.",
            icon: Cloud,
        },
        {
            title: "Threat Intelligence & Digital Risk Protection",
            description:
                "Dark-web intelligence, brand abuse monitoring, leaked credential detection, APT and geopolitical threat insights.",
            icon: Eye,
        },
        {
            title: "Governance, Risk & Compliance (GRC)",
            description:
                "Compliance readiness, audits, and continuous control monitoring across global frameworks.",
            extra:
                "ISO 27001 · SOC 2 · HIPAA · PCI DSS · GDPR · NIST · RBI · DPDP (India)",
            icon: Lock,
        },
        {
            title: "Incident Response & Cyber Crisis Management",
            description:
                "War-room operations, ransomware containment, forensics, negotiation support, and recovery.",
            icon: Siren,
        },
        {
            title: "OT / IoT & Industrial Cybersecurity",
            description:
                "Specialized security for SCADA, ICS, and industrial networks with continuous OT visibility.",
            icon: Cpu,
        },
        {
            title: "Cybersecurity Awareness & Human Risk Management",
            description:
                "AI-based phishing simulations, human risk scoring, and tailored employee security training.",
            icon: GraduationCap,
        },
    ];


    const risks = [
        {
            title: "Ransomware & Extortion Attacks",
            subtext: "Encryption, data theft, and operational shutdowns driven by criminal and state-backed groups.",
            icon: ShieldCheck,
        },
        {
            title: "Zero-Day Exploits & Unpatched Vulnerabilities",
            subtext: "Unknown or unpatched flaws enabling covert infiltration and system compromise.",
            icon: AlertTriangle,
        },
        {
            title: "Supply Chain & Third-Party Attacks",
            subtext: "Compromised vendors, software, or dependencies used as indirect attack vectors.",
            icon: Users,
        },
        {
            title: "Insider Threats & Compromised Identities",
            subtext: "Unauthorized access by employees, contractors, or attackers using stolen credentials.",
            icon: Lock,
        },
        {
            title: "Cloud Security Misconfigurations",
            subtext: "Weak IAM controls, open storage buckets, and misconfigured cloud workloads exposing data.",
            icon: CloudLightning,
        },
        {
            title: "Advanced AI-Generated Attacks",
            subtext: "AI-driven phishing, malware, bots, and deepfake-based social engineering campaigns.",
            icon: Bot,
        },
        {
            title: "OT / IoT Security Vulnerabilities",
            subtext: "Poorly secured industrial and connected devices impacting critical operations.",
            icon: Cpu,
        },
        {
            title: "Data Privacy & Compliance Failures",
            subtext: "Regulatory violations (GDPR, HIPAA, PCI-DSS) caused by weak security controls.",
            icon: FileWarning,
        },
        {
            title: "Credential Theft & Account Takeover",
            subtext: "Password reuse, session hijacking, MFA bypass, and identity abuse.",
            icon: KeyRound,
        },
        {
            title: "DDoS & Critical Infrastructure Disruption",
            subtext: "High-volume attacks targeting BFSI, telecom, healthcare, and public sector networks.",
            icon: WifiOff,
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
                            <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-2">Cybersecurity Services for Modern Enterprises</h2>
                            <h4 className="font-semibold text-blue-500">AI-Driven, Intelligence-Led, Compliance-Aligned Protection for a Digital World</h4>
                            <p className="mt-2 text-slate-300">
                                The threat landscape is evolving faster than organizations can respond. Ransomware, cloud breaches, insider misuse, AI-powered attacks, and supply-chain intrusions now challenge every industry. Security is no longer a technical task—it is a strategic business requirement.
                            </p>
                            <h4 className="font-semibold text-blue-500">Mociber provides end-to-end cybersecurity services built on AI, automation, global intelligence, and industry best practices.</h4>
                            <p className="mt-2 text-slate-300">
                                We help enterprises secure their networks, cloud environments, identities, endpoints, data, OT/IoT systems, and external digital footprint with unmatched speed and accuracy.                            </p>

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
                <section id="problems" className="mt-8  gap-6 max-w-7xl m-auto ">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-2xl bg-gray-100/10 shadow-2xl ring-1 ring-white/5 p-8 "
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white/95 mb-4">
                            The Problem — Modern Cybersecurity Challenges
                        </h3>

                        <p className="text-slate-300  leading-relaxed ">
                            Threats evolve faster than organizations can adapt. Limited visibility,
                            legacy systems, cloud misconfigurations and a global skills shortage make
                            it hard to achieve comprehensive protection.
                        </p>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2  text-md text-slate-200">
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Multi-cloud complexity & expanding attack surfaces
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Remote workforce security gaps
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Lack of skilled cybersecurity professionals
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Legacy tools without automation
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                High dependency on third-party vendors
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Fragmented tools & lack of central visibility
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Compliance pressure across global regulations
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Increasing sophistication of threat actors
                            </li>

                        </ul>


                        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                            <div className="inline-flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                                <Lock className="w-5 h-5 text-[#bfe8ff]" />
                                <div>
                                    <div className="text-md text-slate-200 font-semibold">Reduced breach window</div>
                                    <div className="text-xs text-slate-400">Faster containment and recovery</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                                <ShieldCheck className="w-5 h-5 text-[#bfe8ff]" />
                                <div>
                                    <div className="text-md text-slate-200 font-semibold">Faster mean time to detect</div>
                                    <div className="text-xs text-slate-400">Actionable alerts aligned to risk</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-base text-center font-semibold text-white mt-8">
                            Organizations need integrated, intelligent, and scalable cybersecurity — not isolated point solutions.
                        </p>
                    </motion.div>
                </section>

                <ServiceSolution solutions={solutions} heading={"Mociber’s Cybersecurity Services & Solutions"} />

                <KeyRisks
                    title="Key Cybersecurity Risks"
                    subtitle="Top risks enterprises face — prioritized for impact and exploitability."
                    risks={risks}
                />



                <YouTubeAutoplaySection />
                {/* SERVICES */}
                <Service />
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Cybersecurity – FAQs"
                    subtitle="Common questions about our cybersecurity services, platforms, and approach."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
