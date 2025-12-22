// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import { AlignVerticalJustifyCenter, BriefcaseConveyorBeltIcon, ChartBarIcon, FileDigit, Globe2, Globe2Icon, GlobeIcon, GlobeLock, icons, MoveDownLeft, Network, Proportions, RegexIcon, Satellite, Shield, Theater, ToolCase } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function CloudMigration() {
    const risks = [
        {
            title: "AI-Adaptive Malware & Evasive Attacks",
            subtext:
                "Malware dynamically alters behavior in real time to bypass signature-based, rule-based, and static detection controls.",
            icon: Shield
        },
        {
            title: "Automated Phishing & Social Engineering",
            subtext:
                "Generative AI enables hyper-personalized phishing, voice spoofing, and impersonation attacks at massive scale.",
            icon: GlobeIcon
        },
        {
            title: "Adversarial Attacks on Security Models",
            subtext:
                "Attackers manipulate inputs and signals to mislead AI detection engines and evade alerts.",
            icon: Theater
        },
        {
            title: "Model Poisoning & Data Integrity Risks",
            subtext:
                "Compromised or tainted training data degrades model accuracy, reliability, and trustworthiness.",
            icon: Shield
        },
        {
            title: "AI-Enabled Credential Abuse",
            subtext:
                "Machine-learning bots automate credential stuffing, session abuse, and account takeover attacks at scale.",
            icon: Network
        },
        {
            title: "Over-Automation Without Governance",
            subtext:
                "Uncontrolled automation can trigger false positives, service disruptions, or missed threats without human oversight.",
            icon: ChartBarIcon
        },
        {
            title: "Shadow AI & Unauthorized Tools",
            subtext:
                "Unapproved AI models and tools introduce data leakage risks, IP exposure, and compliance violations.",
            icon: GlobeIcon
        },
        {
            title: "Unsecured AI Pipelines & APIs",
            subtext:
                "Training, inference, and automation pipelines create new attack surfaces when APIs and workflows are not secured.",
            icon: Network
        },
        {
            title: "Opaque AI Decisions",
            subtext:
                "Lack of explainability and transparency creates audit, compliance, and accountability gaps.",
            icon: Proportions
        },
        {
            title: "Regulatory & Ethical AI Exposure",
            subtext:
                "Mismanaged AI security can violate data protection laws, cybersecurity mandates, and industry regulations.",
            icon: RegexIcon
        }
    ];




    const solutions = [
        {
            title: "AI-Adaptive Threat Detection & Defense",
            description:
                "Behavior-based and AI-powered detection to identify adaptive malware, polymorphic attacks, and evasive techniques beyond signatures and static rules.",
            icon: Shield
        },
        {
            title: "AI-Resilient Phishing & Social Engineering Protection",
            description:
                "Advanced detection for AI-generated phishing, voice spoofing, impersonation, and deepfake-based social engineering attacks.",
            icon: GlobeIcon
        },
        {
            title: "Adversarial ML Defense & Model Hardening",
            description:
                "Protection against adversarial inputs, model evasion techniques, and manipulation targeting AI detection engines.",
            icon: Theater
        },
        {
            title: "Model Integrity & Data Poisoning Protection",
            description:
                "Safeguards for training data, model pipelines, and inference workflows to preserve accuracy, integrity, and trust.",
            icon: Proportions
        },
        {
            title: "AI-Driven Identity & Credential Abuse Prevention",
            description:
                "Detection and mitigation of automated credential stuffing, session abuse, and account takeover using ML-driven bots.",
            icon: Network
        },
        {
            title: "Human-in-the-Loop AI Governance",
            description:
                "Controlled automation with approval workflows, guardrails, and oversight to prevent false positives and operational disruption.",
            icon: ChartBarIcon
        },
        {
            title: "Shadow AI Discovery & Control",
            description:
                "Discovery, monitoring, and governance of unauthorized AI tools to prevent data leakage, IP exposure, and compliance violations.",
            icon: Globe2
        },
        {
            title: "Secure AI Pipelines & API Protection",
            description:
                "Security controls for AI training, inference, orchestration pipelines, and APIs to reduce emerging attack surfaces.",
            icon: FileDigit
        },
        {
            title: "Explainable & Auditable AI Security",
            description:
                "Transparent, explainable AI decisions with audit trails to support compliance, accountability, and forensic analysis.",
            icon: RegexIcon
        },
        {
            title: "Regulatory & Ethical AI Risk Management",
            description:
                "Alignment with global AI, cybersecurity, and data protection regulations through policy, governance, and continuous monitoring.",
            icon: GlobeLock
        }
    ];




    const faqs = [
        {
            question: "What is cloud computing and migration?",
            answer:
                "Cloud computing and migration involve moving applications, data, and infrastructure from on-premises environments to cloud platforms to improve scalability, resilience, agility, and innovation."
        },
        {
            question: "Why is security critical during cloud migration?",
            answer:
                "Without proper security controls, cloud migration can expose sensitive data, create misconfigurations, and lead to compliance violations and cyberattacks."
        },
        {
            question: "What cloud platforms does Mociber support?",
            answer:
                "Mociber supports AWS, Microsoft Azure, and Google Cloud Platform, including hybrid and multi-cloud environments."
        },
        {
            question: "How does Zero Trust improve cloud security?",
            answer:
                "Zero Trust enforces continuous verification of users, devices, and workloads, significantly reducing the risk of unauthorized access and lateral movement in cloud environments."
        },
        {
            question: "Can Mociber help with multi-cloud governance?",
            answer:
                "Yes. Mociber provides centralized visibility, automated compliance enforcement, policy management, and cost optimization across multiple cloud providers."
        },
        {
            question: "How do you prevent downtime during cloud migration?",
            answer:
                "We use phased migration approaches, dependency mapping, automated testing, and rollback strategies to minimize business disruption."
        },
        {
            question: "Is cloud migration compliant with regulations like GDPR or HIPAA?",
            answer:
                "Yes, when properly designed. Mociber ensures encryption, strong access controls, data residency management, and audit readiness aligned with regulatory requirements."
        },
        {
            question: "How do you control cloud costs after migration?",
            answer:
                "Through FinOps practices, continuous usage monitoring, automated cost policies, and ongoing optimization to eliminate waste and control spend."
        },
        {
            question: "Is cloud suitable for AI and data analytics workloads?",
            answer:
                "Absolutely. Cloud platforms provide scalable, high-performance environments for AI, machine learning, and advanced analytics when secured and governed correctly."
        },
        {
            question: "How can an organization start its cloud migration journey?",
            answer:
                "Organizations should begin with a cloud readiness and risk assessment to define the right migration strategy, security controls, and operating model."
        }
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
                heading={<>Cloud Computing & Migration</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">Secure, Scalable, and Intelligent Cloud Transformation for Modern Enterprises

                            </h1>
                            <p className="mt-4 text-slate-200">
                                Cloud computing is no longer just an IT upgrade—it is a core business strategy. Organizations worldwide are adopting cloud platforms to improve agility, enable digital innovation, support AI workloads, and optimize costs. However, rapid cloud adoption without the right security, governance, and migration strategy exposes enterprises to significant cyber, compliance, and operational risks.                            </p>
                            <p className="mt-4 text-slate-200">
                                Mociber enables secure, compliant, and future-ready cloud transformation by combining
                                security-first architecture, intelligent migration, Zero Trust principles, and AI-driven
                                governance across single, hybrid, and multi-cloud environments.</p>
                            <p className="mt-4 text-slate-200">
                                We help enterprises move to the cloud with confidence—without disruption, data loss, or compliance gaps.
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
                            <h2 className="text-2xl font-semibold">Key Cloud Computing & Migration Risks Enterprises Face</h2>
                            <p className="mt-3 text-slate-200">
                                Without strong governance, these risks can negate the benefits of cloud adoption.
                            </p>

                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>Cloud misconfigurations leading to data breaches</li>
                                <li>Identity and access control weaknesses</li>
                                <li>Vendor lock-in and limited portability</li>
                                <li>Unplanned downtime and regional outages</li>
                                <li>Escalating and unpredictable cloud costs</li>
                                <li>Shadow IT and unauthorized cloud usage</li>
                                <li>API and container security vulnerabilities</li>
                                <li>Compliance failures and data sovereignty violations</li>
                                <li>Insecure SaaS and third-party integrations</li>
                                <li>Uncontrolled AI/ML workloads and automation pipelines</li>

                            </ol>
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
                        title="Key AI-Driven Security Risks Facing Organizations"
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"  Mociber’s AI-Powered Security & Automation Services"} />




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
                        title="Cloud Computing & Migration - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
