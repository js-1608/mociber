import React from "react";

import {
    Network,
    Code,
    Puzzle,
    ShieldOff,
    Layers,
    Cpu,
    UserX,
    CloudOff,
    Scale,
    Truck,
} from "lucide-react";


import {


    ClipboardCheck,
    ShieldCheck,
    Cloud,
    Radar,
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


export default function SupplyChain() {

    const faqs = [
        {
            question: "What is supply chain security?",
            answer:
                "Supply chain security protects organizations from cyber, operational, and regulatory risks introduced by vendors, software providers, hardware suppliers, and global logistics partners.",
        },
        {
            question: "Why are supply chain attacks increasing?",
            answer:
                "Attackers increasingly target suppliers because they often have weaker security controls, making them easier entry points into high-value organizations and critical systems.",
        },
        {
            question: "How does Mociber secure software supply chains?",
            answer:
                "Mociber implements secure SDLC practices, SBOM validation, dependency and vulnerability scanning, code integrity verification, and DevSecOps controls to reduce software supply chain risk.",
        },
        {
            question: "What is third-party risk management (TPRM)?",
            answer:
                "Third-party risk management involves assessing, monitoring, and governing vendors to prevent security breaches, data exposure, operational disruption, and regulatory non-compliance.",
        },
        {
            question: "Can Mociber monitor my vendors in real time?",
            answer:
                "Yes. We provide continuous monitoring for vendor security incidents, breach exposure, dark-web activity, misconfigurations, and high-risk behaviors.",
        },
        {
            question: "Do you assess SaaS and cloud platforms for security?",
            answer:
                "Absolutely. Mociber evaluates SaaS platforms, cloud services, APIs, data flows, encryption controls, identity governance, and access management.",
        },
        {
            question: "What standards guide Mociber’s supply chain security approach?",
            answer:
                "Our approach aligns with NIST SP 800-161, ISO 27036, SOC 2, DPDP Act, GDPR, Cloud Security Alliance (CSA) guidance, and industry-specific regulatory frameworks.",
        },
        {
            question: "How does Zero Trust apply to supply chain security?",
            answer:
                "Zero Trust ensures every vendor interaction is authenticated, least-privileged, segmented, continuously monitored, and validated—reducing lateral movement and breach impact.",
        },
        {
            question: "How does Mociber help prevent counterfeit hardware risks?",
            answer:
                "We validate device authenticity, perform tampering and integrity checks, and assess suppliers based on geopolitical exposure, manufacturing risk, and supply provenance.",
        },
        {
            question: "How can my organization start a supply chain security program with Mociber?",
            answer:
                "Simply contact us through our website. Mociber’s supply chain security specialists will conduct a rapid assessment to map risks and define a tailored security roadmap.",
        },
    ];





    const solutions = [
        {
            title: "Third-Party & Fourth-Party Risk Management (TPRM)",
            description:
                "End-to-end assessment and governance of vendors and extended supplier ecosystems to reduce cyber, operational, and regulatory exposure.",
            extra:
                "Vendor onboarding · Continuous monitoring · Risk scoring · Compliance validation · NIST · ISO · SOC 2 · GDPR · DPDP · CSA",
            icon: Network,
        },
        {
            title: "Software Supply Chain Security",
            description:
                "Protection of software development and delivery pipelines through secure SDLC, DevSecOps controls, and continuous vulnerability management.",
            extra:
                "SBOM creation · Dependency scanning · Code integrity checks · DevSecOps · Automated remediation",
            icon: Code,
        },
        {
            title: "Vendor Compliance & Assurance Audits",
            description:
                "In-depth audits of supplier security, privacy, ESG, and regulatory controls to ensure measurable assurance and accountability.",
            extra:
                "Cybersecurity maturity audits · Privacy & data handling · ESG alignment · Regulatory adherence",
            icon: ClipboardCheck,
        },
        {
            title: "Zero Trust Supply Chain Architecture",
            description:
                "Implementation of Zero Trust principles across vendor access, integrations, and data exchanges to prevent lateral movement and misuse.",
            extra:
                "Least-privilege access · Strong identity management · Micro-segmentation · Secure APIs · Continuous validation",
            icon: ShieldCheck,
        },
        {
            title: "Cloud & SaaS Vendor Security Assessments",
            description:
                "Comprehensive security assessments of cloud and SaaS providers to protect data flows, integrations, and shared responsibility models.",
            extra:
                "SaaS risk assessments · API security · Encryption controls · Access governance · Cloud posture reviews",
            icon: Cloud,
        },
        {
            title: "Threat Intelligence & Attack Surface Monitoring",
            description:
                "Advanced intelligence-led monitoring to identify supplier breaches, exposed assets, and emerging risks before impact.",
            extra:
                "Vendor breach alerts · Dark web monitoring · Exposed credentials · Geopolitical risk indicators · Attack surface visibility",
            icon: Radar,
        },
    ];






    const risks = [
        {
            title: "Third-Party Breaches",
            subtext:
                "Attackers compromise suppliers or service providers and use them as an entry point into your internal systems and data.",
            icon: Network,
        },
        {
            title: "Software Supply Chain Attacks",
            subtext:
                "Malicious code is injected during software development, updates, or distribution—creating trusted but compromised components.",
            icon: Code,
        },
        {
            title: "Vulnerable Open-Source Components",
            subtext:
                "Outdated or unpatched open-source libraries introduce hidden vulnerabilities across applications and platforms.",
            icon: Puzzle,
        },
        {
            title: "Weak Vendor Cyber Controls",
            subtext:
                "Suppliers with immature security practices become the weakest link in the enterprise security posture.",
            icon: ShieldOff,
        },
        {
            title: "Multi-Tier Vendor Blind Spots",
            subtext:
                "Risks buried within third-, fourth-, or fifth-tier suppliers remain invisible, unmanaged, and unmitigated.",
            icon: Layers,
        },
        {
            title: "Counterfeit or Tampered Hardware",
            subtext:
                "Illegitimate or altered hardware components introduce backdoors into networks, OT systems, and IoT environments.",
            icon: Cpu,
        },
        {
            title: "Vendor Insider Threats",
            subtext:
                "Contractors or third-party users with excessive or unmanaged access misuse or leak sensitive enterprise data.",
            icon: UserX,
        },
        {
            title: "Data Exposure via SaaS Applications",
            subtext:
                "Misconfigured SaaS platforms, APIs, and integrations leak confidential data across cloud environments.",
            icon: CloudOff,
        },
        {
            title: "Supplier Compliance Failures",
            subtext:
                "Non-compliant vendors expose organizations to regulatory penalties, legal action, and reputational damage.",
            icon: Scale,
        },
        {
            title: "Operational Disruptions in Global Logistics",
            subtext:
                "Geopolitical instability, cyber incidents, and supply shortages disrupt logistics, manufacturing, and service delivery.",
            icon: Truck,
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
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">Supply Chain Security</h2>
                            <h4 className="font-semibold text-blue-500">
                                Protecting Your Enterprise from Vendor, Software, and Global Supply Chain Risks</h4>
                            <p className="mt-2 text-slate-300">
                                Today’s enterprises rely on vast networks of vendors, cloud services, logistics partners, IT suppliers, and open-source components. This interconnected ecosystem accelerates innovation—but also exposes organizations to significant cyber, operational, and compliance risks. </p>
                            <p className="mt-2 text-slate-300">Modern adversaries increasingly target suppliers, inject malicious code into software updates, tamper with hardware, or exploit insecure cloud integrations. Disruptions across global logistics, third-party breaches, and geopolitical instability further elevate risk.</p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber delivers an intelligence-driven, Zero Trust Supply Chain Security framework that protects your business from end to end—across vendors, SaaS, code, hardware, and operational ecosystems. </h4>
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
                                    Key Challenges in Supply Chain Security
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Organizations today struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "Exploding number of third-party SaaS tools and shadow IT",
                                        "Growing attack surface across distributed global supply chains",
                                        "Limited visibility of deep-tier vendors and code dependencies",
                                        "Lack of standardized security practices among global suppliers",
                                        "Geopolitical tensions affecting hardware sourcing",
                                        "New compliance mandates (NIST SP 800-161, ISO 27036, DPDP Act, EU CRA)",
                                        "Inconsistent vendor reporting and poor transparency",
                                        "Rise of software tampering and hardware implant attacks"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Organizations must adopt continuous vendor monitoring, Zero Trust access, and deep software supply chain validation to stay protected.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>



                <KeyRisks
                    title="Top Supply Chain Security Risks"
                    subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                    risks={risks}
                />

                <ServiceSolution solutions={solutions} heading={" Mociber’s Supply Chain Security Services"} />


                <YouTubeAutoplaySection />
                {/* SERVICES */}
                <Service />
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Supply Chain Security - FAQs"
                    subtitle="Common questions about our Data Privacy & Protection."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
