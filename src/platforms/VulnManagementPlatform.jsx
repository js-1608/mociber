// AiMss.jsx
import React from "react";
import {

    Cloud,
    Database,
    LayoutDashboard,
    EyeOff,
    Scan,
    ScrollTextIcon,
    TerminalSquare,
    Globe,
    Bug,
    CloudOff,
    Filter,
    Clock,
    Link,
    BellOff,
    Radar,
    ScanSearch,
    SlidersHorizontal,
    Share2,
    CloudCog,
    Zap,
    Wrench,
    PackageSearch,

} from "lucide-react";

import ContactCta from "@/components/ContactCta";
import FaqSection from "@/components/Faq";
import ServiceSolution from "@/components/ServiceSolution";
import KeyRisks from "@/components/Risks";

export default function VulnManagementPlatform() {
    const faqs = [
        {
            question: "What is Vulnerability & Exposure Management?",
            answer:
                "Vulnerability & Exposure Management is the continuous process of identifying, prioritizing, and reducing vulnerabilities based on real exploitability, attack paths, and business impact."
        },
        {
            question: "How is AI-powered vulnerability management different?",
            answer:
                "AI-powered vulnerability management prioritizes issues using threat intelligence, exploit likelihood, and business context instead of relying only on static severity scores."
        },
        {
            question: "What is exposure management in cybersecurity?",
            answer:
                "Exposure management focuses on how vulnerabilities, misconfigurations, identities, and access paths combine to create real-world attack paths that attackers can exploit."
        },
        {
            question: "Which tools are used for AI-powered vulnerability management?",
            answer:
                "Common tools include Tenable, Qualys, Rapid7, Wiz, CrowdStrike Falcon Spotlight, Recorded Future, and ServiceNow, typically integrated into a unified exposure management workflow."
        },
        {
            question: "How does this help prevent ransomware attacks?",
            answer:
                "By identifying and remediating the vulnerabilities and exposures that ransomware groups actively exploit, organizations can significantly reduce the likelihood of ransomware incidents."
        },
        {
            question: "Is this suitable for cloud and hybrid environments?",
            answer:
                "Yes. AI-powered Vulnerability & Exposure Management is designed for cloud environments, containers, SaaS platforms, APIs, endpoints, and hybrid infrastructure."
        },
        {
            question: "Does vulnerability management support compliance requirements?",
            answer:
                "Yes. Continuous vulnerability and exposure management is a core requirement across most cybersecurity, privacy, and regulatory frameworks."
        },
        {
            question: "How often should vulnerabilities be assessed?",
            answer:
                "Continuously. Modern IT environments change daily, making periodic or point-in-time scans insufficient to manage real security risk."
        },
        {
            question: "Can remediation be automated safely?",
            answer:
                "Yes. Remediation automation is governed through approval workflows, testing, staged rollouts, and rollback mechanisms to ensure operational safety."
        },
        {
            question: "How can an organization start with Vulnerability & Exposure Management?",
            answer:
                "Organizations should begin with an exposure maturity assessment to identify gaps, prioritize risks, and define a phased remediation roadmap."
        }
    ];



    const risks = [
        {
            title: "Expanding Attack Surface Exposure",
            subtext:
                "Cloud assets, APIs, containers, IoT, and shadow IT continuously introduce new, unmanaged vulnerabilities.",
            icon: Globe,
        },
        {
            title: "Exploitable CVEs & Zero-Day Threats",
            subtext:
                "Public exploits and zero-day vulnerabilities are weaponized faster than manual remediation cycles can respond.",
            icon: Bug,
        },
        {
            title: "Cloud & Identity Misconfigurations",
            subtext:
                "Over-permissive IAM roles, exposed storage services, and weak API security create direct breach paths.",
            icon: CloudOff,
        },
        {
            title: "Poor Vulnerability Prioritization",
            subtext:
                "Severity-only scoring ignores exploitability, real attack paths, and true business impact.",
            icon: Filter,
        },
        {
            title: "Delayed Remediation & Patch Backlogs",
            subtext:
                "Manual workflows and resource constraints leave organizations exposed for weeks or months after discovery.",
            icon: Clock,
        },
        {
            title: "Supply Chain & Third-Party Exposure",
            subtext:
                "Vendors, SaaS integrations, and open-source components introduce indirect but high-impact security risks.",
            icon: Link,
        },
        {
            title: "Lack of Asset & Exposure Visibility",
            subtext:
                "Ephemeral cloud workloads, unmanaged devices, and shadow assets remain outside traditional scanning scope.",
            icon: EyeOff,
        },
        {
            title: "Alert Fatigue & Analyst Overload",
            subtext:
                "Excessive vulnerability findings dilute focus and slow response to truly critical threats.",
            icon: BellOff,
        },
    ];




    const solutions = [
        {
            title: "AI-Driven Asset Discovery & Attack Surface Management",
            description:
                "Continuous discovery of all assets across cloud, on-prem, endpoints, APIs, containers, OT environments, and shadow IT to eliminate blind spots.",
            icon: Radar,
        },
        {
            title: "Continuous Vulnerability Scanning & Validation",
            description:
                "Always-on vulnerability scanning combined with AI-based validation to reduce false positives and confirm exploitable risk.",
            icon: ScanSearch,
        },
        {
            title: "Risk-Based Vulnerability Prioritization",
            description:
                "Advanced correlation of CVSS, EPSS, Known Exploited Vulnerabilities (KEV), threat intelligence, and business context to focus on what matters most.",
            icon: SlidersHorizontal,
        },
        {
            title: "Exposure & Attack-Path Analysis",
            description:
                "Graph-based modeling to identify how attackers can pivot from initial weaknesses to full environment compromise.",
            icon: Share2,
        },
        {
            title: "Cloud, Container & API Exposure Management",
            description:
                "Detection and remediation of misconfigurations and vulnerabilities across AWS, Azure, GCP, Kubernetes, Docker, and serverless services.",
            icon: CloudCog,
        },
        {
            title: "Zero-Day & Exploit Intelligence Monitoring",
            description:
                "AI-driven tracking of emerging exploits, ransomware campaigns, and adversary techniques in real time.",
            icon: Zap,
        },
        {
            title: "Automated Patch & Remediation Orchestration",
            description:
                "Integration with ITSM and DevOps tools to automatically trigger patches, compensating controls, and security policy enforcement.",
            icon: Wrench,
        },
        {
            title: "Third-Party & Supply Chain Risk Management",
            description:
                "Continuous monitoring of vendor exposure, SaaS risk, and open-source dependency vulnerabilities across the supply chain.",
            icon: PackageSearch,
        },
        {
            title: "Executive Dashboards & Compliance Reporting",
            description:
                "CISO-ready dashboards delivering risk reduction metrics, MTTR tracking, SLA adherence, and audit-ready compliance reporting.",
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
                            AI-Powered Vulnerability & Exposure Management
                        </span>
                        <h1 className="text-5xl md:text-4xl font-bold leading-tight">
                            Predictive, Risk-Driven Vulnerability Reduction for <br />
                            <span className="text-cyan-400">Modern Enterprises</span>
                        </h1>
                        <p className="mt-6 text-base text-slate-300 max-w-xl">
                            Mociber’s AI-Powered Vulnerability & Exposure Management (AI-VEM) transforms vulnerability operations from reactive scanning into continuous, intelligence-led risk reduction.
                        </p>

                        <p className="mt-6 text-base text-slate-300 max-w-xl">
                            We combine AI, exploit intelligence, attack-path analytics, and automated remediation to help organizations focus on what is truly exploitable and business-critical.
                        </p>

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
                        Why Traditional Vulnerability Management Fails
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Failure icon={Scan} text="Scans generate noise, not priorities" />
                        <Failure icon={ScrollTextIcon} text="CVSS scores don’t reflect real attack likelihood" />
                        <Failure icon={Database} text="Exploit intelligence is not contextualized" />
                        <Failure icon={Cloud} text="Cloud, identity, and runtime exposure are fragmented" />
                        <Failure icon={TerminalSquare} text="Security teams lack automation and scale" />
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

            <ServiceSolution solutions={solutions} heading={"Mociber Vulnerability & Exposure Management Solutions"} />


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
                title="AI-Powered Vulnerability & Exposure Management - FAQs"
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
