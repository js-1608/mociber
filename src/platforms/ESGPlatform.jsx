// AiMss.jsx
import React from "react";
import {

    Cloud,
    Database,
    Scan,
    ScrollTextIcon,
    TerminalSquare,
    Zap,
    EqualApproximatelyIcon,
    DatabaseZap,
    Factory,
    ClipboardList,

    Route,
    BrainCircuit,
    ShieldCheck,

} from "lucide-react";

import {
    CloudRain,
    Scale,
    BarChart4,
    Users2,
    Leaf,
    Truck,
    Gavel,
    Handshake,
} from "lucide-react";


import ContactCta from "@/components/ContactCta";
import FaqSection from "@/components/Faq";
import ServiceSolution from "@/components/ServiceSolution";
import KeyRisks from "@/components/Risks";
import HeroBanner from "@/components/ServiceHero";

export default function ESGPlatform() {
    const faqs = [
        {
            question: "What is ESG & Sustainability Management?",
            answer:
                "ESG & Sustainability Management is a structured approach to managing environmental impact, social responsibility, and governance practices using measurable, auditable, and regulatory-aligned frameworks."
        },
        {
            question: "Why is ESG important for enterprises?",
            answer:
                "ESG directly impacts regulatory compliance, investor confidence, operational resilience, brand reputation, and long-term business value creation."
        },
        {
            question: "Which ESG frameworks does Mociber support?",
            answer:
                "Mociber supports CSRD, EU Taxonomy, GRI, BRSR, CDP, SASB, TCFD, and relevant industry-specific ESG standards."
        },
        {
            question: "How does Mociber manage Scope 3 emissions?",
            answer:
                "Scope 3 emissions are managed through supplier data integration, lifecycle assessments, value-chain mapping, and AI-driven emissions modeling."
        },
        {
            question: "What tools are used for ESG reporting and carbon accounting?",
            answer:
                "Commonly used tools include IBM Envizi, Microsoft Sustainability Manager, SAP Sustainability Control Tower, Persefoni, and Watershed, integrated into a unified ESG reporting workflow."
        },
        {
            question: "Can ESG reporting be automated?",
            answer:
                "Yes. ESG automation improves data accuracy, reduces manual effort and cost, and ensures continuous audit readiness and traceability."
        },
        {
            question: "How does ESG link to enterprise risk management?",
            answer:
                "ESG risks—such as climate exposure, governance failures, and supply chain issues—directly influence financial, operational, regulatory, and reputational risk."
        },
        {
            question: "Is ESG mandatory for compliance?",
            answer:
                "In many jurisdictions, ESG disclosures are now mandatory, particularly for listed companies, large enterprises, and multinational organizations."
        },
        {
            question: "How long does an ESG transformation take?",
            answer:
                "Initial ESG reporting can often be achieved within a few months, while full ESG maturity is built through phased, multi-year implementation."
        },
        {
            question: "How can an organization start its ESG journey?",
            answer:
                "Organizations should begin with an ESG maturity and risk assessment to identify gaps, prioritize initiatives, and define a regulatory-aligned implementation roadmap."
        }
    ];





    const risks = [
        {
            title: "Climate & Environmental Exposure",
            subtext:
                "Extreme weather events, water stress, and resource scarcity disrupt business operations and global supply chains.",
            icon: CloudRain,
        },
        {
            title: "Regulatory Non-Compliance Risk",
            subtext:
                "Failure to meet ESG disclosure mandates such as CSRD, EU Taxonomy, SEC Climate Rules, and SEBI BRSR leads to penalties and enforcement actions.",
            icon: Scale,
        },
        {
            title: "Carbon Emissions Misreporting",
            subtext:
                "Inaccurate Scope 1, Scope 2, and Scope 3 emissions data undermines audit credibility, investor confidence, and regulatory trust.",
            icon: BarChart4,
        },
        {
            title: "Social & Labor Governance Failures",
            subtext:
                "DEI gaps, labor violations, and human rights issues create reputational damage and legal exposure.",
            icon: Users2,
        },
        {
            title: "Greenwashing & Misrepresentation Risk",
            subtext:
                "Unverified or misleading sustainability claims trigger litigation, regulatory scrutiny, and shareholder backlash.",
            icon: Leaf,
        },
        {
            title: "Supply Chain Sustainability Gaps",
            subtext:
                "Third-party vendors and suppliers introduce hidden environmental, ethical, and compliance risks.",
            icon: Truck,
        },
        {
            title: "Inefficient Resource & Energy Utilization",
            subtext:
                "Excessive energy and resource consumption increases operational costs and weakens sustainability performance.",
            icon: Zap,
        },
        {
            title: "ESG Data Fragmentation & Integrity Issues",
            subtext:
                "Disconnected data sources result in inconsistent ESG reporting, weak traceability, and audit failures.",
            icon: Database,
        },
        {
            title: "Weak Governance & Ethics Controls",
            subtext:
                "Poor transparency, ineffective board oversight, and weak ethics programs elevate enterprise-wide risk.",
            icon: Gavel,
        },
        {
            title: "Stakeholder Trust Erosion",
            subtext:
                "Inability to demonstrate measurable ESG impact leads to loss of investor, customer, and regulator confidence.",
            icon: Handshake,
        },
    ];



    const solutions = [
        {
            title: "ESG Data Automation & Centralized Reporting",
            description:
                "Automated ESG data collection and consolidation across departments, geographies, and supply chains aligned with CSRD, GRI, BRSR, CDP, SASB, and TCFD reporting frameworks.",
            icon: DatabaseZap,
        },
        {
            title: "Carbon Footprint Accounting & Emissions Intelligence",
            description:
                "AI-powered tracking of Scope 1, Scope 2, and Scope 3 emissions with predictive insights to support decarbonization and net-zero strategies.",
            icon: Factory,
        },
        {
            title: "ESG Risk Assessment & Governance Audits",
            description:
                "Comprehensive evaluation of environmental, social, and governance risks integrated with enterprise risk management and internal audit programs.",
            icon: ClipboardList,
        },
        {
            title: "Sustainable Supply Chain & Vendor ESG Management",
            description:
                "Supplier ESG scoring, due diligence, lifecycle emissions tracking, and continuous third-party sustainability monitoring.",
            icon: Truck,
        },
        {
            title: "Sustainability Strategy & Net-Zero Roadmapping",
            description:
                "Design and execution of long-term sustainability programs including renewable energy transition, circular economy initiatives, and social impact planning.",
            icon: Route,
        },
        {
            title: "AI-Driven Materiality & ESG Risk Modeling",
            description:
                "Advanced analytics to identify material ESG risks influencing regulatory exposure, investor expectations, and long-term business resilience.",
            icon: BrainCircuit,
        },
        {
            title: "ESG Assurance & Audit Readiness",
            description:
                "Audit-ready documentation, control validation, and external ESG reporting preparation to meet regulator, auditor, and investor scrutiny.",
            icon: ShieldCheck,
        },
        {
            title: "Governance, Ethics & Compliance Automation",
            description:
                "Automated board reporting, ethics risk management, whistleblower workflows, and policy compliance tracking to strengthen governance.",
            icon: Scale,
        },
    ];



    return (
        <div className="bg-[#060917] text-white overflow-hidden">
            <HeroBanner
                image="/Banners/About.jpg"
                heading={<>ESG & Sustainability Management</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            {/* ================= HERO ================= */}
            <section className="relative py-24 flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b2df2]/30 via-[#0b1220] to-[#020617]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl md:text-4xl font-bold leading-tight text-center">
                            Technology-Driven ESG Governance, Risk Control, and  <br />
                            <span className="text-cyan-400">Sustainable Business Transformation</span>
                        </h1>
                        <p className="mt-6 text-base text-slate-300 ">
                            Environmental, Social, and Governance (ESG) is no longer a reporting exercise—it is a board-level, investor-driven, and regulator-mandated business imperative. Organizations must demonstrate measurable sustainability performance, transparent governance, and defensible ESG data across global operations and supply chains.
                        </p>

                        <p className="mt-6 text-base text-slate-300">
                            Mociber’s ESG & Sustainability Management services help organizations move from fragmented compliance to integrated, technology-enabled sustainability leadership.
                            We combine AI, automation, advanced analytics, and global ESG frameworks to deliver audit-ready reporting, risk visibility, and long-term value creation.

                        </p>

                    </div>
                </div>
            </section>

            {/* ================= RISKS ================= */}


            {/* ================= WHY TRADITIONAL SOC FAILS ================= */}
            <section className="bg-[#050814] py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-10">
                        Why ESG Programs Commonly Fail
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Failure icon={Scan} text="Manual and spreadsheet-driven ESG data collection" />
                        <Failure icon={ScrollTextIcon} text="Rapidly evolving and overlapping ESG frameworks" />
                        <Failure icon={Database} text="Poor Scope 3 emissions visibility" />
                        <Failure icon={Cloud} text="Lack of automation and analytics" />
                        <Failure icon={TerminalSquare} text="High reporting costs and audit fatigue" />
                        <Failure icon={EqualApproximatelyIcon} text="Limited internal ESG expertise" />
                    </div>

                    <p className="text-xl text-slate-300">
                        <span className="text-cyan-400 font-semibold">
                            Effective ESG management requires technology,
                        </span>{" "}
                        governance, and intelligence—not just reporting.
                    </p>
                </div>
            </section>

            {/* KEY RISKS */}
            <KeyRisks
                title="ESG & Sustainability Risks"
                subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                risks={risks}
            />

            <ServiceSolution solutions={solutions} heading={"Mociber ESG & Sustainability Solutions & Servicess"} />


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
                title="ESG & Sustainability Management - FAQs"
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
