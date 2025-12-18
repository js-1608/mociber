import React from "react";
import {

    Radar,
    Scan,
    ShieldCheck,
    Target,
    ClipboardCheck,

    Siren,
} from "lucide-react";
import {
    Smartphone,
    Factory,
    Cpu,
    Wifi,
    Shuffle,
    AlertOctagon,
    Network,
    ArrowLeftRight,
    Activity,
    Bug,
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


export default function OtIot() {

    const faqs = [
        {
            question: "What does OT, IoT & Edge Security include?",
            answer:
                "OT, IoT & Edge Security includes asset and device discovery, continuous threat detection, Zero Trust segmentation, supply chain security, compliance alignment, secure edge architecture, and dedicated OT incident response.",
        },
        {
            question: "Why are OT and IoT environments highly vulnerable?",
            answer:
                "OT and IoT environments often rely on legacy systems, lack regular patching cycles, use weak authentication mechanisms, and were originally designed for uptime and availability rather than cybersecurity.",
        },
        {
            question: "How does Mociber secure critical infrastructure and industrial systems?",
            answer:
                "Mociber uses ICS-specific monitoring, AI-driven anomaly detection, Zero Trust access controls, network segmentation, and 24×7 MDR-OT operations to protect critical infrastructure.",
        },
        {
            question: "Which industries benefit most from OT/IoT security?",
            answer:
                "Manufacturing, healthcare, energy, utilities, banking, transportation, oil & gas, and government agencies benefit most from robust OT and IoT security programs.",
        },
        {
            question: "Does Mociber support compliance like IEC 62443 and NIST 800-82?",
            answer:
                "Yes. Mociber helps organizations implement, audit, and maintain compliance with global OT and ICS security standards including IEC 62443, NIST 800-82, and related frameworks.",
        },
        {
            question: "Can Mociber protect IoT devices against botnets and ransomware?",
            answer:
                "Absolutely. Our solutions prevent device hijacking, block lateral movement, mitigate DDoS attacks, and stop ransomware from spreading into OT and industrial environments.",
        },
        {
            question: "How fast can Mociber respond to an OT/IoT cyber incident?",
            answer:
                "Mociber’s OT incident response specialists provide rapid containment, digital forensics, and operational recovery—often within hours of threat detection.",
        },
        {
            question: "What tools does Mociber use for OT/IoT threat detection?",
            answer:
                "We leverage industry-leading platforms such as Nozomi Networks, Claroty, Dragos, Microsoft Defender for IoT, Tenable.ot, and Palo Alto Networks IoT Security.",
        },
        {
            question: "How does Zero Trust work in industrial environments?",
            answer:
                "Zero Trust enforces micro-segmentation, identity-based access, encrypted communications, least-privilege policies, and continuous validation across IT–OT environments.",
        },
        {
            question: "How can organizations start their OT/IoT security program with Mociber?",
            answer:
                "Organizations can contact Mociber through the website form. We begin with an OT/IoT visibility assessment and then build a customized security and compliance roadmap.",
        },
    ];




    const risks = [
        {
            title: "Unauthorized Device Access",
            subtext:
                "Unmanaged or improperly authenticated IoT and OT devices are compromised, enabling attackers to gain initial access.",
            icon: Smartphone,
        },
        {
            title: "Industrial Ransomware Attacks",
            subtext:
                "Ransomware spreads from IT environments into OT networks, causing shutdowns across factories, hospitals, and utilities.",
            icon: Factory,
        },
        {
            title: "Firmware & Hardware Tampering",
            subtext:
                "Supply-chain manipulation embeds malicious code within chips, components, or firmware updates.",
            icon: Cpu,
        },
        {
            title: "Vulnerable Edge Nodes",
            subtext:
                "Poorly secured gateways and edge devices are exploited as low-resistance entry points into OT environments.",
            icon: Wifi,
        },
        {
            title: "IT–OT Lateral Movement",
            subtext:
                "Attackers pivot across converged IT and OT networks to reach mission-critical control systems.",
            icon: Shuffle,
        },
        {
            title: "Legacy OT Systems Without Patching",
            subtext:
                "Aging industrial equipment runs unsupported operating systems with known vulnerabilities and CVEs.",
            icon: AlertOctagon,
        },
        {
            title: "IoT Botnets & DDoS Attacks",
            subtext:
                "Mass-compromised devices are weaponized to launch large-scale DDoS and disruption campaigns.",
            icon: Network,
        },
        {
            title: "Insecure APIs & M2M Communications",
            subtext:
                "Unprotected machine-to-machine communication and APIs expose sensitive operational data and controls.",
            icon: ArrowLeftRight,
        },
        {
            title: "Data Integrity Attacks",
            subtext:
                "Manipulated sensor readings and telemetry lead to incorrect decisions, safety risks, and operational failures.",
            icon: Activity,
        },
        {
            title: "Zero-Day Exploits in Smart Devices",
            subtext:
                "Previously unknown vulnerabilities in IoT and OT devices are rapidly exploited before patches exist.",
            icon: Bug,
        },
    ];






    const solutions = [
        {
            title: "OT & IoT Threat Detection (24/7 MDR-OT)",
            description:
                "Continuous monitoring and threat hunting across industrial and IoT environments using AI-driven, ICS-aware detection capabilities.",
            extra:
                "24×7 monitoring · ICS anomaly detection · Threat hunting · Behavioral analytics · OT SOC",
            icon: Radar,
        },
        {
            title: "Asset Discovery & Attack Surface Mapping",
            description:
                "Agentless discovery of all OT, IoT, and edge assets with continuous visibility, risk scoring, and vulnerability mapping.",
            extra:
                "Device identification · Risk scoring · Vulnerability mapping · Shadow asset detection · Continuous visibility",
            icon: Scan,
        },
        {
            title: "Zero Trust Security for OT, IoT & Edge",
            description:
                "Implementation of Zero Trust principles to prevent lateral movement and unauthorized access across converged IT–OT environments.",
            extra:
                "Micro-segmentation · Identity-based access · Least privilege · Policy enforcement · Continuous validation",
            icon: ShieldCheck,
        },
        {
            title: "Firmware & Supply Chain Security Validation",
            description:
                "Validation of firmware, hardware components, and suppliers to prevent embedded threats and supply-chain compromise.",
            extra:
                "Firmware integrity checks · Digital signature validation · SBOM analysis · Supplier risk scoring",
            icon: Cpu,
        },
        {
            title: "OT / ICS Red Teaming & Adversary Simulation",
            description:
                "Realistic attack simulations to identify exploitable paths across industrial control systems and OT networks.",
            extra:
                "MITRE ATT&CK for ICS · OT penetration testing · Adversary emulation · Attack path analysis",
            icon: Target,
        },
        {
            title: "OT / IoT Compliance & Governance",
            description:
                "Design and implementation of OT security governance aligned with global industrial cybersecurity standards.",
            extra:
                "IEC 62443 · NIST 800-82 · ISA99 · OT risk assessments · Compliance readiness",
            icon: ClipboardCheck,
        },
        {
            title: "Secure Edge Architecture & Hardening",
            description:
                "Hardening of edge and gateway devices to ensure trusted execution, secure connectivity, and resilient operations.",
            extra:
                "Secure boot · Encrypted communications · Hardware-backed key storage · Hardened configurations",
            icon: Wifi,
        },
        {
            title: "Incident Response for OT & IoT Ecosystems",
            description:
                "Dedicated OT incident response teams delivering rapid containment, forensics, recovery, and resilience planning.",
            extra:
                "OT digital forensics · Containment & recovery · Safety impact analysis · Post-incident resilience plans",
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
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">OT, IoT & Edge Security</h2>
                            <h4 className="font-semibold text-blue-500">
                                Protecting Critical Infrastructure, Industrial Systems & Intelligent Devices with AI-Driven Cyber Defense
                            </h4>
                            <p className="mt-2 text-slate-300">
                                Operational Technology (OT), Internet of Things (IoT), and Edge Computing now power manufacturing lines, medical devices, energy grids, logistics networks, and smart cities. While this hyper-connected ecosystem accelerates efficiency, it also creates one of the largest and fastest-growing attack surfaces across modern enterprises.                            </p>
                            <p className="mt-2 text-slate-300">Threat actors—including ransomware groups, cybercriminal syndicates, and nation-state adversaries—aggressively target these environments because they lack standardization, run on legacy systems, and cannot tolerate downtime.</p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber secures mission-critical OT, IoT, and Edge environments with intelligence-led defense, a visibility-first architecture, Zero Trust segmentation, and 24/7 monitoring, all designed specifically for high-availability ecosystems.                            </h4>
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
                                    Key Challenges in OT/IoT/Edge Security
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Organizations today struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "OT equipment designed for uptime, not cybersecurity",
                                        "Lack of global IoT security standards",
                                        "Limited visibility into devices outside core networks",
                                        "Inability to patch continuously running industrial systems",
                                        "Expanding IT–OT–IoT convergence with poorly defined boundaries",
                                        "Weak supply-chain controls and foreign-sourced components",
                                        "Nation-state threats targeting critical infrastructure",
                                        "AI-driven exploit discovery speeding up attacker capabilities"


                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Organizations need a unified cybersecurity model that understands both the physical and digital layers of industrial environments.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>



                <KeyRisks
                    title="Top OT, IoT & Edge Security Risks"
                    subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                    risks={risks}
                />

                <ServiceSolution solutions={solutions} heading={"Mociber’s OT, IoT & Edge Security Solutions"} />


                <YouTubeAutoplaySection />
                {/* SERVICES */}
                {/* <Service /> */}
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
