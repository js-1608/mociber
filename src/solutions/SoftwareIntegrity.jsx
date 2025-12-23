// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import {
    Package,
    CloudOff,
    AlertTriangle,
    Container,
    Globe,
    KeyRound,
    Scan,
    BellOff,

    Bug,
    Target,
    PackageCheck,
    ShieldCheck,
    Wrench,
    Crosshair,
} from "lucide-react";

import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function SoftwareIntegrity() {




    const risks = [
        {
            title: "Software Supply Chain Vulnerabilities",
            subtext:
                "Compromised open-source libraries and third-party components introduce hidden risks across multiple applications and environments.",
            icon: Package,
        },
        {
            title: "Cloud & Infrastructure Misconfigurations",
            subtext:
                "Exposed storage, overly permissive IAM roles, and infrastructure-as-code drift lead to data breaches and unauthorized access.",
            icon: CloudOff,
        },
        {
            title: "Unpatched Critical CVEs & Zero-Day Exposure",
            subtext:
                "Rapid weaponization of disclosed vulnerabilities leaves organizations exposed during slow or manual patch cycles.",
            icon: AlertTriangle,
        },
        {
            title: "Runtime & Container Exploits",
            subtext:
                "Kernel-level attacks, container breakouts, and memory exploits bypass static scanning and compromise live workloads.",
            icon: Container,
        },
        {
            title: "Web Application & API Vulnerabilities",
            subtext:
                "OWASP Top 10 flaws, insecure APIs, and weak authentication enable data theft and account takeover attacks.",
            icon: Globe,
        },
        {
            title: "Identity & Credential Exposure",
            subtext:
                "Leaked secrets, tokens, and credentials allow attackers to move laterally and escalate privileges within environments.",
            icon: KeyRound,
        },
        {
            title: "Incomplete Asset Visibility",
            subtext:
                "Ephemeral cloud workloads, containers, and serverless services remain unscanned and unmanaged, creating blind spots.",
            icon: Scan,
        },
        {
            title: "Alert Fatigue & Slow Triage",
            subtext:
                "Excessive false positives overwhelm teams and delay remediation of truly exploitable vulnerabilities.",
            icon: BellOff,
        },
    ];






    const solutions = [
        {
            title: "Continuous Vulnerability Management (CVM)",
            description:
                "Ongoing discovery, classification, risk scoring, and remediation tracking across infrastructure, cloud, endpoints, and workloads.",
            icon: Scan,
        },
        {
            title: "Application Security Testing (SAST, DAST, IAST & SCA)",
            description:
                "Shift-left application security testing embedded into CI/CD pipelines to detect vulnerabilities early and reduce production risk.",
            icon: Bug,
        },
        {
            title: "Risk-Based Vulnerability Prioritization",
            description:
                "Advanced prioritization using CVSS, EPSS, Known Exploited Vulnerabilities (KEV), threat intelligence, and business impact context.",
            icon: Target,
        },
        {
            title: "Software Supply Chain Security & SBOM Management",
            description:
                "Generation, monitoring, and analysis of SBOMs to rapidly identify affected systems when new open-source vulnerabilities emerge.",
            icon: PackageCheck,
        },
        {
            title: "Runtime Protection & Validation",
            description:
                "Continuous runtime validation using RASP, EDR/XDR, and eBPF-based monitoring to detect exploitation attempts in real time.",
            icon: ShieldCheck,
        },
        {
            title: "Automated Patch & Remediation Orchestration",
            description:
                "Workflow-driven remediation using ServiceNow, Jira, and CI/CD integrations with rollback and change safety controls.",
            icon: Wrench,
        },
        {
            title: "Red Team Validation & Attack Simulation",
            description:
                "Continuous attack simulation mapped to MITRE ATT&CK to validate that vulnerabilities are effectively mitigated.",
            icon: Crosshair,
        },
    ];

    const faqs = [
        {
            question: "What is vulnerability management in cybersecurity?",
            answer:
                "Vulnerability management is the continuous process of identifying, prioritizing, remediating, and validating security weaknesses across systems, applications, and infrastructure.",
        },
        {
            question: "How is risk-based vulnerability management different from traditional scanning?",
            answer:
                "Risk-based programs prioritize vulnerabilities based on exploitability, real-world threat intelligence, and business impact—not just severity scores.",
        },
        {
            question: "Why are SBOMs important for vulnerability management?",
            answer:
                "SBOMs provide visibility into software components, enabling rapid identification of impacted systems when new vulnerabilities are disclosed.",
        },
        {
            question: "What tools does Mociber use for vulnerability management?",
            answer:
                "Mociber works with platforms such as Tenable, Qualys, Rapid7, Snyk, Veracode, CrowdStrike, Palo Alto Cortex XDR, and other best-in-class security tools.",
        },
        {
            question: "Can vulnerability management be automated?",
            answer:
                "Yes. Automation enables faster discovery, prioritization, patching, and validation, significantly reducing remediation time and operational overhead.",
        },
        {
            question: "How does Mociber handle cloud and container vulnerabilities?",
            answer:
                "We use continuous asset discovery, cloud security posture management, container image scanning, and runtime protection for cloud-native workloads.",
        },
        {
            question: "Is vulnerability management required for compliance?",
            answer:
                "Yes. Most regulations and security standards require continuous vulnerability identification, remediation, and evidence of control effectiveness.",
        },
        {
            question: "How often should vulnerabilities be tested?",
            answer:
                "Continuously. Modern cloud and DevOps environments change daily, making continuous testing essential for effective risk reduction.",
        },
        {
            question: "Does Mociber provide managed vulnerability services?",
            answer:
                "Yes. We offer fully managed and co-managed vulnerability management programs with defined SLAs, reporting, and continuous improvement.",
        },
        {
            question: "How can an organization start improving its vulnerability posture?",
            answer:
                "Start with a vulnerability maturity and exposure assessment to define priorities and build a focused 90-day remediation roadmap.",
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
                image="/Banners/About.jpg"
                heading={<>Red Teaming & AI</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">Real-World Adversarial Testing for Enterprise & Critical Infrastructure Security</h1>
                            <p className="mt-4 text-slate-200">
                                Modern cyber adversaries do not follow rules, scopes, or assumptions. They exploit human behavior, weak processes, technical gaps, and operational blind spots. Traditional vulnerability assessments and compliance audits are no longer sufficient to measure true cyber resilience.</p>
                            <p className="mt-4 text-slate-200">Mociber’s Red Teaming services simulate real-world attackers to test your organization’s ability to prevent, detect, respond to, and recover from advanced cyber threats.</p>
                            <p className="mt-4 text-slate-200">
                                Our adversarial engagements deliver measurable insight into how your people, processes, and technologies perform under realistic attack conditions.
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
                                    src="/banner (3).jpg"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section id="problems" className="mt-10 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold">Why Traditional Vulnerability Programs Fail</h2>


                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>CVE volume outpaces manual remediation</li>
                                <li>Tool sprawl creates noise without context</li>
                                <li>Scanning without exploitability prioritization wastes effort</li>
                                <li>DevOps speed outstrips security validation</li>
                                <li>Lack of SBOMs blocks rapid impact analysis</li>
                                <li>Runtime threats remain undetected</li>

                            </ol>
                            <p className="mt-3 text-slate-200">
                                Effective vulnerability management must be continuous, contextual, and automation-driven.
                            </p>
                        </div>

                        <aside className="bg-white/6 rounded-2xl p-6">
                            <h3 className="font-semibold">Quick Contacts</h3>
                            <div className="mt-3 text-slate-200 text-sm">
                                <div><strong>Sales:</strong> <a className="underline" href="mailto:sales@mociber.com">info@mociber.com</a></div>
                                <div className="mt-2"><strong>Security Ops:</strong> <a className="underline" href="mailto:soc@mociber.com">soc@mociber.com</a></div>
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
                        title="Key Vulnerability & Cyber Risks"
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"Mociber Vulnerability Management & Testing Solutions"} />




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
                        title="Vulnerability Management - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
