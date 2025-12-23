// AiMss.jsx
import React from "react";
import {

    Radar,
    Cloud,
    Cpu,
    AlertTriangle,
    Database,
    Users,
    Layers,
    ClipboardCheck,
    FileSearch,
    BookOpenCheck,
    AlertCircle,
    LayoutDashboard,
    ShieldAlert,
    EyeOff,
    FileSpreadsheet,
    FileWarning,
    Activity,
    Link2Off,
    BarChart3,
    CheckCircle2,
    Archive,
} from "lucide-react";

import ContactCta from "@/components/ContactCta";
import FaqSection from "@/components/Faq";
import ServiceSolution from "@/components/ServiceSolution";
import KeyRisks from "@/components/Risks";

export default function Grc() {
    const faqs = [
        {
            question: "What is a GRC & Auditing platform?",
            answer:
                "A GRC & Auditing platform centralizes governance, risk management, compliance, and audit processes into a single, integrated system."
        },
        {
            question: "Why do organizations need a GRC platform?",
            answer:
                "Organizations use GRC platforms to manage regulatory complexity, reduce enterprise risk, improve audit efficiency, and provide real-time visibility to leadership."
        },
        {
            question: "Which regulations and standards does the platform support?",
            answer:
                "The platform supports ISO 27001, ISO 22301, SOC 2, GDPR, DPDP India, HIPAA, PCI DSS, RBI, SEBI, and sector-specific regulatory frameworks."
        },
        {
            question: "Can audits be automated using a GRC platform?",
            answer:
                "Yes. Audit planning, automated evidence collection, issue tracking, and reporting can be largely automated to reduce manual effort and audit fatigue."
        },
        {
            question: "How does GRC integrate with cybersecurity and IT systems?",
            answer:
                "GRC platforms integrate with SIEM, ITSM, IAM, cloud platforms, and vulnerability management tools to provide unified risk and compliance visibility."
        },
        {
            question: "Is the GRC platform suitable for large enterprises?",
            answer:
                "Yes. The platform is highly scalable and designed to support complex, multi-entity, and global enterprise environments."
        },
        {
            question: "Does GRC help with third-party and vendor risk?",
            answer:
                "Absolutely. Third-party and vendor risk assessments, continuous monitoring, and compliance tracking are core capabilities of the platform."
        },
        {
            question: "How long does GRC platform implementation take?",
            answer:
                "Initial implementation typically takes 8–16 weeks, depending on organizational size, regulatory scope, and integration complexity."
        },
        {
            question: "Does the platform support continuous compliance?",
            answer:
                "Yes. Continuous control monitoring enables ongoing compliance validation instead of periodic, point-in-time checks."
        },
        {
            question: "How can an organization start with a GRC platform?",
            answer:
                "Organizations should start with a GRC maturity and gap assessment to define requirements, prioritize risks, and build an effective implementation roadmap."
        }
    ];





    const risks = [
        {
            title: "Regulatory Non-Compliance Exposure",
            subtext:
                "Failure to meet evolving regulatory requirements can result in penalties, enforcement actions, and loss of market trust.",
            icon: ShieldAlert,
        },
        {
            title: "Fragmented Risk Visibility",
            subtext:
                "Risks are assessed in silos, preventing leadership from understanding aggregated and enterprise-wide exposure.",
            icon: EyeOff,
        },
        {
            title: "Manual & Inefficient Audits",
            subtext:
                "Spreadsheet-driven audits increase cost, human error, and audit fatigue while delaying assurance outcomes.",
            icon: FileSpreadsheet,
        },
        {
            title: "Inconsistent Policy & Control Management",
            subtext:
                "Outdated, unmanaged, or inconsistently applied policies weaken governance and create compliance gaps.",
            icon: FileWarning,
        },
        {
            title: "Poor Third-Party & Vendor Risk Oversight",
            subtext:
                "Suppliers, vendors, and partners introduce hidden compliance, security, and operational risks without proper oversight.",
            icon: Users,
        },
        {
            title: "Lack of Continuous Control Monitoring",
            subtext:
                "Controls are assessed periodically instead of continuously, allowing failures and weaknesses to persist unnoticed.",
            icon: Activity,
        },
        {
            title: "Weak Risk-to-Compliance Mapping",
            subtext:
                "Organizations struggle to demonstrate how identified risks are mitigated through controls and compliance actions.",
            icon: Link2Off,
        },
        {
            title: "Limited Board & Executive Reporting",
            subtext:
                "Leadership lacks real-time, decision-ready visibility into organizational risk and compliance posture.",
            icon: BarChart3,
        },
        {
            title: "Ineffective Issue Remediation Tracking",
            subtext:
                "Audit findings and risk issues are not tracked to closure, leading to repeat observations and unresolved exposure.",
            icon: CheckCircle2,
        },
        {
            title: "Audit & Evidence Management Gaps",
            subtext:
                "Evidence collection remains manual, inconsistent, and difficult to validate during regulatory examinations.",
            icon: Archive,
        },
    ];






    const solutions = [
        {
            title: "Enterprise Risk Management (ERM)",
            description:
                "Centralized identification, assessment, scoring, and continuous monitoring of strategic, operational, cyber, financial, and regulatory risks across the enterprise.",
            icon: Layers,
        },
        {
            title: "Compliance Management & Regulatory Mapping",
            description:
                "Automated compliance tracking aligned with ISO 27001, ISO 22301, SOC 2, GDPR, DPDP India, HIPAA, PCI DSS, RBI, SEBI, and industry-specific regulations.",
            icon: ClipboardCheck,
        },
        {
            title: "Integrated Audit Management",
            description:
                "End-to-end internal and external audit lifecycle management—from audit planning and fieldwork to reporting and remediation tracking.",
            icon: FileSearch,
        },
        {
            title: "Policy, Control & Procedure Management",
            description:
                "Centralized policy libraries, control mapping, version control, approvals, and automated attestation workflows to strengthen governance.",
            icon: BookOpenCheck,
        },
        {
            title: "Continuous Control Monitoring (CCM)",
            description:
                "Real-time validation of controls using automated evidence collection, continuous testing, and exception detection.",
            icon: Activity,
        },
        {
            title: "Third-Party & Vendor Risk Management (TPRM)",
            description:
                "Vendor onboarding, risk assessments, due diligence, continuous monitoring, and contract compliance tracking to reduce third-party exposure.",
            icon: Users,
        },
        {
            title: "Issue, Incident & Remediation Tracking",
            description:
                "Closed-loop tracking of audit findings, risk issues, incidents, and corrective actions with SLA enforcement and accountability.",
            icon: AlertCircle,
        },
        {
            title: "Board, Risk & Compliance Dashboards",
            description:
                "Role-based dashboards for boards, executives, auditors, and risk owners delivering real-time, decision-ready insights.",
            icon: LayoutDashboard,
        },
    ];


    return (
        <div className="bg-[#060917] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b2df2]/30 via-[#0b1220] to-[#020617]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                            GRC & Auditing Platform
                        </span>
                        <h1 className="text-5xl md:text-4xl font-bold leading-tight">
                            Unified Governance, Risk, Compliance, and Audit <br />
                            <span className="text-cyan-400">Intelligence for Digital Enterprises </span>
                        </h1>
                        <p className="mt-6 text-base text-slate-300 max-w-xl">
                            Mociber’s GRC & Auditing Platform delivers a centralized, automated, and intelligence-driven system to manage governance, enterprise risk, compliance obligations, and audits across the organization and its ecosystem.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
                                Get AI SOC Assessment
                            </button>
                            <button className="border border-white/20 px-6 py-3 rounded-xl">
                                Explore Capabilities
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl rounded-full" />
                        <div className="relative bg-[#0b1220] border border-white/10 rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                AI-Driven Security Metrics
                            </h3>
                            <div className="grid grid-cols-2 gap-6 text-sm">
                                <Stat label="Threat Signals / Day" value="10M+" />
                                <Stat label="Mean Response Time" value="< 30 sec" />
                                <Stat label="Automation Coverage" value="90%" />
                                <Stat label="SOC Availability" value="24×7×365" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RISKS ================= */}


            {/* ================= WHY TRADITIONAL SOC FAILS ================= */}
            <section className="bg-[#050814] py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-10">
                        Why Traditional GRC & Audit Programs Fail
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Failure icon={AlertTriangle} text="Disconnected tools for risk, compliance, and audits" />
                        <Failure icon={Radar} text="Manual data collection and evidence management" />
                        <Failure icon={Database} text="Point-in-time compliance instead of continuous assurance" />
                        <Failure icon={Users} text="Poor integration with IT, security, and business systems" />
                        <Failure icon={Cloud} text="Limited automation and analytics" />
                        <Failure icon={Cpu} text="High cost of recurring audits" />
                    </div>

                    <p className="text-xl text-slate-300">
                        <span className="text-cyan-400 font-semibold">
                            Modern GRC requires a  
                        </span>{" "}
                       platform approach—not isolated processes
                    </p>
                </div>
            </section>

            {/* KEY RISKS */}
            <KeyRisks
                title="GRC & Auditing Risks"
                subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                risks={risks}
            />

            <ServiceSolution solutions={solutions} heading={"Mociber’s Adversarial ML & LLM Security Services"} />


            {/* ================= HOW IT WORKS ================= */}
            <section className="bg-[#050814] py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        How AI-Powered Managed Security Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-center">
                        <Step number="01" title="Collect" text="Signals from endpoints, identity, cloud, SaaS, network, and email." />
                        <Step number="02" title="Analyze" text="ML models correlate behavior and predict attack paths." />
                        <Step number="03" title="Respond" text="SOAR playbooks contain and remediate threats in seconds." />
                        <Step number="04" title="Govern" text="Human experts validate actions, tune models, and ensure compliance." />
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <ContactCta
                title="Deploy Autonomous Cyber Defense"
                subtitle="Start with an AI-powered SOC and cyber maturity assessment."
            />

            {/* ================= FAQ ================= */}
            <FaqSection
                title="AI-Powered Managed Security FAQs"
                subtitle=""
                faqs={faqs}
            />
        </div>
    );
}

/* ================= COMPONENTS ================= */

function Stat({ label, value }) {
    return (
        <div>
            <p className="text-cyan-400 font-bold text-xl">{value}</p>
            <p className="text-slate-400">{label}</p>
        </div>
    );
}


function Failure({ icon: Icon, text }) {
    return (
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 flex gap-1">
            <Icon className="text-cyan-400 mb-3" />
            <p className="text-slate-300">{text}</p>
        </div>
    );
}

function Step({ number, title, text }) {
    return (
        <div>
            <p className="text-cyan-400 text-3xl font-bold mb-2">{number}</p>
            <h4 className="font-semibold mb-2">{title}</h4>
            <p className="text-slate-400 text-sm">{text}</p>
        </div>
    );
}
