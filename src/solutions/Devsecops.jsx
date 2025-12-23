// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import {
    DollarSign,
    GitBranch,
    PackageOpen,
    GitMerge,
    TrendingDown,

    BellRing,
    FileSearch,
    Eye,
    Layers3,


    Cpu,
    BrainCircuit,
    Activity,
    CloudCog,
    GraduationCap,
} from "lucide-react";

import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function Devsecops() {


    const risks = [
        {
            title: "Software Supply-Chain Vulnerabilities",
            subtext:
                "Insecure open-source dependencies, third-party libraries, and compromised build components introduce hidden attack vectors.",
            icon: PackageOpen,
        },
        {
            title: "CI/CD & Infrastructure-as-Code Misconfigurations",
            subtext:
                "Misconfigured pipelines and IaC templates expose secrets, permissions, and infrastructure to exploitation.",
            icon: GitMerge,
        },
        {
            title: "Undetected Data & Concept Drift",
            subtext:
                "Production ML models degrade over time due to unmonitored data drift and changing real-world conditions.",
            icon: TrendingDown,
        },
        {
            title: "Hidden Cloud, Compute & AI Cost Overruns",
            subtext:
                "Lack of visibility into cloud usage, training workloads, and inference costs leads to uncontrolled spend.",
            icon: DollarSign,
        },
        {
            title: "Alert Fatigue & Low Signal-to-Noise Ratio",
            subtext:
                "Excessive, low-quality alerts overwhelm teams, delaying response to real security and operational issues.",
            icon: BellRing,
        },
        {
            title: "Lack of Traceability & Compliance Evidence",
            subtext:
                "Insufficient lineage, logging, and audit trails in AI workflows create compliance and governance gaps.",
            icon: FileSearch,
        },
        {
            title: "Fragmented Observability",
            subtext:
                "Disconnected monitoring across applications, infrastructure, pipelines, and models limits root-cause visibility.",
            icon: Eye,
        },
        {
            title: "Tool Sprawl & Cultural Gaps",
            subtext:
                "Overlapping tools and misaligned Dev, Sec, Ops, and Data teams slow transformation and increase risk.",
            icon: Layers3,
        },
    ];




    const solutions = [
        {
            title: "Secure DevSecOps Pipeline Engineering",
            description:
                "Design and implementation of CI/CD pipelines with built-in SAST, SCA, DAST, policy-as-code, secrets management, and continuous security validation.",
            icon: GitBranch,
        },
        {
            title: "AIOps Platform Enablement & Automation",
            description:
                "Deployment of AI-driven operations platforms that predict incidents, correlate telemetry, automate remediation, and reduce downtime across hybrid and multi-cloud environments.",
            icon: Cpu,
        },
        {
            title: "MLOps Framework & Model Lifecycle Governance",
            description:
                "End-to-end model lifecycle management from data ingestion and training to deployment, monitoring, drift detection, retraining, and auditability.",
            icon: BrainCircuit,
        },
        {
            title: "Unified Observability & Telemetry Strategy",
            description:
                "Single-pane-of-glass visibility combining logs, metrics, traces, model metrics, and business KPIs to accelerate root-cause analysis and decision-making.",
            icon: Activity,
        },
        {
            title: "Cloud, Infrastructure & Cost Optimization",
            description:
                "Infrastructure-as-code maturity, FinOps integration, carbon-aware optimization, and multi-cloud governance for efficient and sustainable operations.",
            icon: CloudCog,
        },
        {
            title: "Transformation Advisory & Capability Building",
            description:
                "Operating model design, governance frameworks, tooling rationalization, and upskilling across Dev, Sec, Ops, and Data teams.",
            icon: GraduationCap,
        },
    ];


    const faqs = [
        {
            question: "What is DevSecOps, and why is it important?",
            answer:
                "DevSecOps integrates security into every phase of the software development lifecycle, reducing vulnerabilities while accelerating delivery and improving resilience.",
        },
        {
            question: "What is AIOps used for in enterprises?",
            answer:
                "AIOps applies AI and machine learning to IT operations to predict incidents, reduce alert noise, automate remediation, and improve overall system reliability.",
        },
        {
            question: "What is MLOps, and how does it differ from DevOps?",
            answer:
                "MLOps focuses on managing the full lifecycle of machine-learning models—including training, deployment, monitoring, governance, and retraining—beyond traditional application code.",
        },
        {
            question: "Why should DevSecOps, AIOps, and MLOps be integrated?",
            answer:
                "Integration breaks down silos, improves end-to-end visibility, strengthens security, and ensures applications and AI models operate reliably in production.",
        },
        {
            question: "Does Mociber support cloud-native and multi-cloud environments?",
            answer:
                "Yes. We design and operate DevSecOps, AIOps, and MLOps frameworks across hybrid, multi-cloud, and cloud-native environments.",
        },
        {
            question: "How does Mociber address AI governance and compliance?",
            answer:
                "We embed auditability, traceability, policy enforcement, and continuous monitoring across AI pipelines to meet regulatory and ethical requirements.",
        },
        {
            question: "Can AIOps really reduce downtime?",
            answer:
                "Yes. Predictive analytics, anomaly detection, and automated remediation significantly reduce mean time to detect (MTTD) and recover (MTTR).",
        },
        {
            question: "Is this approach suitable for regulated industries?",
            answer:
                "Absolutely. BFSI, healthcare, government, and critical infrastructure organizations benefit the most from integrated and governed pipelines.",
        },
        {
            question: "How do you control cloud and AI operational costs?",
            answer:
                "Through FinOps practices, telemetry-driven optimization, and AI-based cost forecasting to maintain cost transparency and control.",
        },
        {
            question: "How can organizations start with DevSecOps, AIOps, and MLOps?",
            answer:
                "The journey begins with a maturity and readiness assessment to define the right roadmap, tools, and governance model.",
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
                heading={<>DevSecOps, AIOps & MLOps</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">Secure Engineering, Intelligent Operations, and Production-Ready AI at Enterprise Scale</h1>
                            <p className="mt-4 text-slate-200">
                                Modern enterprises can no longer afford fragmented development, security, operations, and data science practices. Speed without security creates risk. AI without governance creates exposure. Operations without intelligence create inefficiency. </p>
                            <p className="mt-4 text-slate-200">
                                Mociber delivers an integrated DevSecOps, AIOps, and MLOps framework that embeds security by design, automates operations with AI, and operationalizes machine learning models reliably—at scale, and with measurable business impact.</p>
                            <p className="mt-4 text-slate-200">
                                We help organizations innovate faster while controlling risk, cost, and complexity.
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
                            <h2 className="text-2xl font-semibold">Key Industry Challenges Enterprises Face</h2>


                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>Siloed teams across development, security, operations, and data science</li>
                                <li>Security controls applied too late in the delivery lifecycle</li>
                                <li>Exploding complexity of cloud-native, containerized, and distributed systems</li>
                                <li>Alert fatigue and reactive incident management</li>
                                <li>Unmonitored ML model drift, bias, and performance decay</li>
                                <li>Lack of governance and auditability for AI pipelines</li>
                                <li>Escalating cloud and AI operational costs</li>
                                <li>Skill shortages and cultural resistance to integrated ways of working</li>
                            </ol>
                            <p className="mt-3 text-slate-200">
                                These challenges demand a unified, outcome-driven approach—not isolated tooling.
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
                        title="Top Risks in DevSecOps, AIOps & MLOps"
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"Mociber’s DevSecOps, AIOps & MLOps Services"} />




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
                        title="DevSecOps, AIOps & MLOps - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
