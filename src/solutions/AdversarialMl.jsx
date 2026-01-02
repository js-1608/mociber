// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import {
    ShieldCheck,
    Crosshair,
    Boxes,
    Fingerprint,
    FileCheck,
    GitBranch,
    ShieldOff,
    FlaskConical,
    Copy,
    AlertCircle,
    Bot,
    EyeOff,
    PackageX,
    Layers3,
    SlidersHorizontal,
    Radar,
} from "lucide-react";


import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function AdversarialMl() {


    const risks = [
        {
            title: "Prompt Injection & Jailbreak Attacks",
            subtext:
                "Malicious inputs override system instructions, bypass guardrails, and force unsafe or unauthorized model behavior.",
            icon: ShieldOff,
        },
        {
            title: "Model Poisoning & Training Backdoors",
            subtext:
                "Manipulated datasets or embedded triggers during training compromise model behavior in production environments.",
            icon: FlaskConical,
        },
        {
            title: "Model Extraction & Intellectual Property Theft",
            subtext:
                "Attackers replicate or infer proprietary models through repeated queries and systematic output analysis.",
            icon: Copy,
        },
        {
            title: "Adversarial Inputs & Evasion Techniques",
            subtext:
                "Carefully crafted text, image, or audio perturbations cause misclassification or unsafe model responses.",
            icon: AlertCircle,
        },
        {
            title: "Autonomous Agent Manipulation",
            subtext:
                "Chained LLM agents are exploited to escalate privileges, trigger unintended actions, or bypass workflow controls.",
            icon: Bot,
        },
        {
            title: "Inference-Time Data Leakage",
            subtext:
                "Sensitive training data or user information is unintentionally exposed through model responses.",
            icon: EyeOff,
        },
        {
            title: "AI Supply Chain & Third-Party Model Risk",
            subtext:
                "Pre-trained models, plugins, and fine-tuned assets introduce hidden vulnerabilities and trust gaps.",
            icon: PackageX,
        },
        {
            title: "Multi-Modal Attack Vectors",
            subtext:
                "Combined text, image, audio, and API-based attacks exploit weaknesses across cross-modal AI pipelines.",
            icon: Layers3,
        },
        {
            title: "Guardrail & Safety Failures",
            subtext:
                "Weak prompt controls, misalignment, and emergent behaviors undermine trust, safety, and compliance.",
            icon: SlidersHorizontal,
        },
        {
            title: "Lack of Continuous Monitoring & Incident Readiness",
            subtext:
                "Without ongoing adversarial testing and monitoring, models drift and remain vulnerable to new attack techniques.",
            icon: Radar,
        },
    ];


    const solutions = [
        {
            title: "Adversarial Red Teaming for LLMs & Agents",
            description:
                "Simulated real-world attacks including prompt injection, jailbreaks, agent chaining, and model extraction to validate AI guardrails and security controls.",
            icon: Crosshair,
        },
        {
            title: "Model Supply Chain Assurance & Model-SBOM",
            description:
                "End-to-end provenance tracking, third-party model vetting, dependency mapping, and continuous risk scoring across AI and LLM components.",
            icon: Boxes,
        },
        {
            title: "Robustness Hardening & Adversarial Training",
            description:
                "Generation of adversarial examples, poisoned-data detection, resilience tuning, and secure fine-tuning strategies to harden models against attacks.",
            icon: ShieldCheck,
        },
        {
            title: "Model Theft Detection & Watermarking",
            description:
                "Query anomaly detection, usage analytics, watermarking, and intellectual property protection for proprietary AI and LLM models.",
            icon: Fingerprint,
        },
        {
            title: "Continuous AI Security Monitoring & Incident Response",
            description:
                "Always-on monitoring for adversarial behavior, model drift, misuse, and AI-specific incident response playbooks and workflows.",
            icon: Radar,
        },
        {
            title: "AI Security Governance, Audit & Compliance",
            description:
                "Enterprise AI governance frameworks, adversarial readiness metrics, audit evidence generation, and executive dashboards aligned with global AI regulations.",
            icon: FileCheck,
        },
        {
            title: "Secure MLOps & DevSecML Integration",
            description:
                "Embedding adversarial testing, security gates, and telemetry into CI/CD pipelines for secure ML and LLM development and deployment.",
            icon: GitBranch,
        },
    ];


    const faqs = [
        {
            question: "What is Adversarial Machine Learning security?",
            answer:
                "Adversarial ML security focuses on protecting AI models from malicious inputs, poisoned data, model theft, and manipulation that can alter model behavior or leak sensitive information.",
        },
        {
            question: "Why are LLMs vulnerable to adversarial attacks?",
            answer:
                "LLMs process natural language and multi-modal inputs, making them susceptible to prompt injection, jailbreaks, data leakage, and misuse when guardrails and monitoring are weak.",
        },
        {
            question: "What is prompt injection and why is it dangerous?",
            answer:
                "Prompt injection occurs when attackers override system instructions using crafted inputs, causing AI systems to generate harmful, misleading, or unauthorized outputs.",
        },
        {
            question: "How does Mociber secure enterprise AI and LLM systems?",
            answer:
                "Mociber applies adversarial red-teaming, continuous monitoring, model supply chain assurance, secure MLOps integration, and enterprise-grade AI governance frameworks.",
        },
        {
            question: "Can AI models be stolen or copied?",
            answer:
                "Yes. Model extraction attacks can replicate proprietary models through repeated queries. Mociber mitigates this using watermarking, query anomaly detection, and rate controls.",
        },
        {
            question: "Does Mociber support AI compliance and governance?",
            answer:
                "Yes. We help organizations meet AI security, governance, and audit requirements aligned with emerging global AI regulations and enterprise risk frameworks.",
        },
        {
            question: "Are autonomous AI agents at risk?",
            answer:
                "Absolutely. Autonomous agents can be manipulated to perform unintended or unsafe actions. Mociber tests and secures agent workflows using supervision, guardrails, and behavior validation.",
        },
        {
            question: "Is adversarial testing a one-time activity?",
            answer:
                "No. Adversarial threats evolve continuously. Ongoing testing, monitoring, and validation are essential to maintain AI and LLM security over time.",
        },
        {
            question: "Which industries need Adversarial ML security the most?",
            answer:
                "Financial services, healthcare, government, technology, telecom, and enterprises deploying LLMs or autonomous systems at scale benefit the most.",
        },
        {
            question: "How can organizations start securing their AI systems?",
            answer:
                "Organizations should begin with an adversarial readiness assessment to identify vulnerabilities across data pipelines, models, agents, and inference environments.",
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
                heading={<>Adversarial ML & LLM Security</>}
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
                                    src="/SolutionsImages/Adversarial.jpeg"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section id="problems" className="mt-10 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold">Why Traditional Security Fails for AI Systems</h2>


                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>AI systems are deployed faster than they are secured</li>
                                <li>Adversarial threats evolve more rapidly than static controls</li>
                                <li>Model behavior is opaque and difficult to predict</li>
                                <li>AI supply chains lack transparency and standardized assurance</li>
                                <li>Multi-modal and agent-based systems multiply risk complexity</li>
                                <li>Few organizations have AI-specific incident response playbooks</li>
                            </ol>
                            <p className="mt-3 text-slate-200">
                                AI security requires purpose-built adversarial defense—not traditional application security alone.
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
                        title="Critical Adversarial Risks Facing AI & LLM Systems"
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"Mociber’s Adversarial ML & LLM Security Services"} />




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
                        title="Adversarial ML & LLM Security - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
