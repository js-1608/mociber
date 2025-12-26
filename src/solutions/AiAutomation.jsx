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



export default function AiAutomation() {
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
    question: "What is AI-powered security and automation?",
    answer:
      "AI-powered security uses machine learning, automation, and advanced analytics to detect threats in real time, respond autonomously, and predict risks faster than manual security operations."
  },
  {
    question: "Why is AI necessary for modern cybersecurity?",
    answer:
      "Attackers now use automation and AI themselves. Defensive AI is required to match their speed, scale, and sophistication while reducing analyst fatigue."
  },
  {
    question: "How does an AI-SOC differ from a traditional SOC?",
    answer:
      "An AI-SOC leverages automation, behavior analytics, and autonomous response to reduce alert noise, accelerate containment, and improve detection accuracy compared to manual SOC models."
  },
  {
    question: "Can AI security systems make mistakes?",
    answer:
      "Yes. Without proper governance, AI can generate false positives or blind spots. Mociber applies explainability, human oversight, and continuous tuning to ensure reliable outcomes."
  },
  {
    question: "Does Mociber help with AI governance and compliance?",
    answer:
      "Yes. Mociber implements AI governance frameworks, audit controls, and continuous monitoring aligned with data protection and cybersecurity regulations."
  },
  {
    question: "How does automation improve incident response time?",
    answer:
      "Automation eliminates manual investigation steps, enabling instant isolation, remediation, and escalation—often reducing response times from hours to minutes."
  },
  {
    question: "Is AI-powered security suitable for regulated industries?",
    answer:
      "Absolutely. BFSI, healthcare, government, and critical infrastructure organizations benefit the most due to scale, compliance requirements, and threat complexity."
  },
  {
    question: "What risks come from shadow AI tools?",
    answer:
      "Unauthorized AI tools can expose sensitive data, bypass security controls, and violate compliance requirements. Mociber helps detect, govern, and control shadow AI usage."
  },
  {
    question: "Can AI-powered security reduce operational costs?",
    answer:
      "Yes. Automation lowers analyst workload, reduces false alerts, and optimizes security investments while improving overall protection."
  },
  {
    question: "How can organizations start with AI-powered security?",
    answer:
      "Organizations should begin with an AI readiness and SOC maturity assessment to identify where automation and intelligence deliver the fastest business value."
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
                image="/solution.webp"
                heading={<>AI-Powered Security & Automation</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">Autonomous Cyber Defense Built for Speed, Scale, and Intelligence</h1>
                            <p className="mt-4 text-slate-200">
                                Cyber threats today evolve faster than human-only security teams can respond. Attackers leverage artificial intelligence, automation, and generative technologies to bypass controls, exploit cloud environments, and overwhelm security operations with precision and speed.
                            </p>
                            <p className="mt-4 text-slate-200">
                                Mociber’s AI-Powered Security & Automation transforms cybersecurity operations through intelligent detection, autonomous response, predictive analytics, and continuous governance—enabling enterprises to stay resilient, compliant, and ahead of AI-driven adversaries.</p>
                            <p className="mt-4 text-slate-200">
                                We combine human expertise with machine intelligence to deliver security that operates at the speed of modern threats.</p>
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
                            <h2 className="text-2xl font-semibold">Why Traditional Security Models Fall Short</h2>
                            <p className="mt-3 text-slate-200">
                                As geopolitics intensifies, organisations face targeted and persistent threats that traditional cyber programs are not built to handle. The intersection of political objectives and cyber operations produces unique operational, legal and
                                supply-chain challenges.
                            </p>

                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>Manual detection cannot keep pace with automated attacks
                                </li><li>SOC teams face alert fatigue and talent shortages
                                </li><li>Expanding cloud and SaaS ecosystems increase blind spots
                                </li><li>AI is deployed faster than it is governed or secured
                                </li><li>Static controls cannot adapt to evolving adversary behavior
                                </li><li>Compliance demands continuous, real-time monitoring
                                </li></ol>
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
                        title="Supply Chain Security - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
