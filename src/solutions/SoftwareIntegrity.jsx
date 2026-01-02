// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import {
    PackageX,
    GitPullRequest,
    MemoryStick,
    RefreshCcw,
    ShieldOff,
    Fingerprint,
    Boxes,
    UserX,
    Cpu,
    Activity,
    ClipboardList,
    ShieldCheck,
    BadgeCheck,
    FileCheck,
} from "lucide-react";

import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function SoftwareIntegrity() {





    const risks = [
        {
            title: "Software Supply Chain Tampering",
            subtext:
                "Compromised third-party libraries, dependencies, or build tools introduce malicious code into otherwise trusted software.",
            icon: PackageX,
        },
        {
            title: "CI/CD Pipeline Compromise",
            subtext:
                "Attackers manipulate build servers, pipelines, or artifacts to inject rogue binaries during automated build and release processes.",
            icon: GitPullRequest,
        },
        {
            title: "Runtime Code Injection & Memory Tampering",
            subtext:
                "Unauthorized modification of running applications enables stealthy persistence, data theft, and evasion of static controls.",
            icon: MemoryStick,
        },
        {
            title: "Unauthorized Updates & Rollback Attacks",
            subtext:
                "Fake updates or forced downgrades are used to reintroduce known vulnerabilities or deliver malicious payloads.",
            icon: RefreshCcw,
        },
        {
            title: "Counterfeit or Repackaged Software",
            subtext:
                "Seemingly legitimate software components are altered, repackaged, and redistributed with embedded malware.",
            icon: ShieldOff,
        },
        {
            title: "Lack of Software Provenance & Traceability",
            subtext:
                "Organizations cannot verify where code originated, how it was built, or whether it was altered across the supply chain.",
            icon: Fingerprint,
        },
        {
            title: "Open-Source Component Risk",
            subtext:
                "Unverified or unmanaged open-source dependencies expose environments to hidden vulnerabilities and malicious inserts.",
            icon: Boxes,
        },
        {
            title: "Insider Threats in Build Environments",
            subtext:
                "Privileged developers or administrators abuse access to introduce unauthorized or malicious changes into software.",
            icon: UserX,
        },
        {
            title: "Firmware & Embedded Software Integrity Failures",
            subtext:
                "IoT, OT, and device firmware are tampered with due to weak signing, validation, and update verification mechanisms.",
            icon: Cpu,
        },
        {
            title: "Absence of Continuous Integrity Monitoring",
            subtext:
                "Organizations fail to detect when production software deviates from its trusted baseline over time.",
            icon: Activity,
        },
    ];




    const solutions = [
        {
            title: "End-to-End Software Integrity Assessment",
            description:
                "Comprehensive evaluation of software assets, CI/CD pipelines, dependencies, provenance gaps, and runtime integrity risks across the entire software lifecycle.",
            icon: ClipboardList,
        },
        {
            title: "Secure Build Pipeline Hardening & Artifact Attestation",
            description:
                "Implementation of signed builds, immutable artifacts, cryptographic attestations, CI/CD gating controls, and Software Bill of Materials (SBOM).",
            icon: ShieldCheck,
        },
        {
            title: "Runtime Integrity Monitoring & Verification",
            description:
                "Continuous verification that deployed software remains unaltered, detecting code injection, memory tampering, and execution anomalies in real time.",
            icon: Activity,
        },
        {
            title: "Open-Source Governance & SBOM Management",
            description:
                "Discovery, tracking, and risk management of open-source components with full lineage visibility, policy enforcement, and remediation workflows.",
            icon: Boxes,
        },
        {
            title: "Update Mechanism & Patch Integrity Security",
            description:
                "Securing auto-update and patching systems using signature validation, rollback protection, and tamper-resistant delivery controls.",
            icon: RefreshCcw,
        },
        {
            title: "Counterfeit Software Detection & Authenticity Assurance",
            description:
                "Identification of repackaged or fraudulent software through code-signing verification, provenance validation, and runtime authenticity checks.",
            icon: BadgeCheck,
        },
        {
            title: "Compliance, Governance & Audit Readiness",
            description:
                "Alignment with ISO 27001, secure software lifecycle controls, emerging software assurance regulations, and automated audit evidence generation.",
            icon: FileCheck,
        },
    ];

    const faqs = [
        {
            question: "What is software integrity?",
            answer:
                "Software integrity ensures that software is authentic, unmodified, and behaves exactly as intended throughout its entire lifecycle.",
        },
        {
            question: "Why is software integrity important for cybersecurity?",
            answer:
                "Compromised software can bypass traditional security controls, leading to data breaches, ransomware infections, and large-scale systemic risk.",
        },
        {
            question: "What is a software supply chain attack?",
            answer:
                "A software supply chain attack occurs when adversaries compromise third-party components, build systems, or update mechanisms to insert malicious code into trusted software.",
        },
        {
            question: "How does Mociber help protect software integrity?",
            answer:
                "Mociber secures the entire software lifecycle—from source code and build pipelines to deployment, updates, and continuous runtime integrity monitoring.",
        },
        {
            question: "What is an SBOM and why does it matter?",
            answer:
                "A Software Bill of Materials (SBOM) lists all components used in software, enabling visibility, traceability, faster vulnerability response, and effective risk management.",
        },
        {
            question: "Can software integrity be monitored continuously?",
            answer:
                "Yes. Continuous runtime integrity monitoring detects unauthorized changes, tampering, and anomalies even after software has been deployed.",
        },
        {
            question: "Is software integrity required for compliance?",
            answer:
                "Increasingly, yes. Many cybersecurity standards and regulations now expect strong software provenance, integrity controls, and auditability.",
        },
        {
            question: "Which industries need software integrity the most?",
            answer:
                "BFSI, healthcare, government, critical infrastructure, SaaS providers, and IoT-heavy organizations benefit the most from strong software integrity controls.",
        },
        {
            question: "Does software integrity slow down DevOps?",
            answer:
                "No. When embedded correctly into DevSecOps pipelines, software integrity enables faster and safer releases with reduced rework and incident response effort.",
        },
        {
            question: "How can an organization start improving software integrity?",
            answer:
                "Organizations should begin with a software integrity assessment to identify gaps and define a phased, risk-driven improvement roadmap.",
        },
    ];




    const tools = [
        "Threat Intelligence Platforms (TIPs) & IOC feeds",
        "ATK Simulation & Red Teaming Tools",
        "Supply Chain Mapping & Dependency Analysis",
        "Cloud resilience / Multi-region failover tooling",
        "Identity & Privilege hardening (PAM, Strong MFA)",
        "Policy & Compliance Automation (export controls, sanctions monitoring)",
    ];

    return (
        <>
            <HeroBanner
                image="/solution.webp"
                heading={<>Software Integrity</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">End-to-End Trust, Assurance, and Protection Across the Software Lifecycle</h1>
                            <p className="mt-4 text-slate-200">
                                In today’s hyper-connected, cloud-native, and dependency-driven digital ecosystem, software integrity has become a critical business and national security concern. Organizations rely on complex software supply chains built from open-source components, third-party libraries, CI/CD pipelines, and automated update mechanisms. Any compromise at any stage can result in hidden backdoors, malicious insertions, operational disruption, regulatory exposure, and loss of trust.</p>
                            <p className="mt-4 text-slate-200">Mociber enables organizations to ensure that the software they build, deploy, and operate is authentic, untampered, verifiable, and continuously trustworthy—across development, build, delivery, deployment, updates, and runtime.</p>
                            <p className="mt-4 text-slate-200">
                                We position software integrity not as a point control, but as a continuous assurance discipline embedded into DevSecOps and business operations.
                            </p>
                            <div className="mt-6 flex gap-3">
                                <Link to="/services/cybersecurity" className="inline-block border border-white/20 px-5 py-3 rounded-md text-white">View Solutions</Link>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            {/* side pic - replace src with a real asset */}
                            <div className="w-full max-w rounded-lg overflow-hidden border border-white/8">
                                <img
                                    alt="Geopolitical cybersecurity"
                                    src="/SolutionsImages/Software Integrity.jpeg"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section id="problems" className="mt-10 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold">Industry Challenges in Software Integrity</h2>


                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>Highly complex and opaque software supply chains</li>
                                <li>Accelerated DevOps cycles outpacing assurance controls</li>
                                <li>Integrity treated only at development, not runtime</li>
                                <li>Fragmented tools with no end-to-end visibility</li>
                                <li>Increasing regulatory expectations for software assurance</li>
                                <li>Attackers targeting update mechanisms and build systems</li>
                                <li>Limited metrics to measure integrity maturity</li>
                            </ol>
                            <p className="mt-3 text-slate-200">
                                Modern software changes continuously—integrity assurance must do the same.
                            </p>
                        </div>

                        <aside className="bg-white/6 rounded-2xl p-6">
                            <h3 className="font-semibold">Quick Contacts</h3>
                            <div className="mt-3 text-slate-200 text-sm">
                                <div><strong>Mobile No.:</strong> <a className="underline" href="tel:+(91) 9811257526">+(91) 9811257526</a></div>
                                <div className="mt-2"><strong>Email</strong> <a className="underline" href="mailto:connect@mociber.com">connect@mociber.com</a></div>
                                <div className="mt-3 text-xs text-slate-300">We respond to enterprise enquiries within 48 hours (business days).</div>
                            </div>
                            <div className="mt-6 border-t border-white/8 pt-4 text-sm text-slate-300">
                                <div><strong>Affiliations:</strong></div>
                                <div className="mt-2">ISO 27001 | NIST CSF | Cloud Security Alliance</div>
                            </div>
                        </aside>
                    </section>

                    {/* KEY RISKS */}
                    <KeyRisks
                        title="Software Integrity Risks"
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"Mociber Software Integrity Solutions & Services"} />




                    {/* TOOLS & TECHNOLOGIES */}
                    <section id="tools" className="mt-10 bg-white/3 rounded-2xl m-6 p-6 max-w-7xl">
                        <h2 className="text-2xl font-semibold ">Advanced Tools & Technologies We Expertise In</h2>
                        <p className="text-sm text-slate-100 mt-2">A focused set of capabilities and platforms Mociber uses to manage geopolitical cyber risk (presentation-friendly).</p>

                        <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-slate-100">
                            <ul className="space-y-2">
                                {tools.slice(0, Math.ceil(tools.length / 2)).map((t, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 w-2 h-2 rounded-full bg-blue-900" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {tools.slice(Math.ceil(tools.length / 2)).map((t, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 w-2 h-2 rounded-full bg-blue-900" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* CTA / CONTACT */}
                    <ContactCta id="contact" />

                    <FaqSection
                        title="Software Integrity - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
