// AiMss.jsx
import React from "react";
import {
  ShieldCheck,
  Brain,
  Zap,
  Radar,
  Cloud,
  Eye,
  Cpu,
  AlertTriangle,
  Database,
  Users,
  Workflow,
  Layers3,
  Target,
  CloudAlert,
  User2,
  Bot,
  Skull,
  ScanFace,
  BellRing,
  BrainCircuit,
  UserX,
} from "lucide-react";

import ContactCta from "@/components/ContactCta";
import FaqSection from "@/components/Faq";
import ServiceSolution from "@/components/ServiceSolution";
import KeyRisks from "@/components/Risks";

export default function AiMss() {
  const faqs = [
    {
      question: "What is AI-Powered Managed Security?",
      answer:
        "AI-Powered Managed Security uses artificial intelligence, machine learning, and automation to detect, predict, and respond to cyber threats in real time across modern environments.",
    },
    {
      question: "How is AI-Powered MSS different from traditional MSSP services?",
      answer:
        "Traditional MSSPs rely heavily on manual analysis, while AI-Powered Managed Security automates detection, prioritization, and response at machine speed.",
    },
    {
      question: "Does AI replace human SOC analysts?",
      answer:
        "No. AI augments human analysts by reducing noise and accelerating response, while security experts retain oversight, judgment, and decision authority.",
    },
    {
      question: "Can AI-Powered Managed Security prevent ransomware?",
      answer:
        "Yes. Predictive analytics, behavioral detection, and automated containment significantly reduce ransomware dwell time and business impact.",
    },
    {
      question: "Is AI-Powered security suitable for cloud and hybrid environments?",
      answer:
        "Absolutely. AI-Powered Managed Security is designed for cloud-native, SaaS, containerized, on-prem, and hybrid infrastructures.",
    },
    {
      question: "Which tools are commonly used in AI-Powered SOCs?",
      answer:
        "Common platforms include CrowdStrike Falcon, Microsoft Sentinel, Google Chronicle, Palo Alto Cortex XDR/XSOAR, Wiz, Recorded Future, and similar best-in-class technologies.",
    },
    {
      question: "Does AI-Powered Managed Security help with compliance requirements?",
      answer:
        "Yes. Continuous monitoring, automated control validation, and audit-ready reporting support ISO, SOC 2, GDPR, HIPAA, and other regulatory standards.",
    },
    {
      question: "How quickly can AI-Powered Managed Security be deployed?",
      answer:
        "Initial deployment typically begins within weeks, followed by continuous tuning and optimization as environments evolve.",
    },
    {
      question: "Is AI-Powered security cost-effective?",
      answer:
        "Yes. Automation reduces operational overhead and alert fatigue while improving detection accuracy and response efficiency.",
    },
    {
      question: "How can organizations start with AI-Powered Managed Security?",
      answer:
        "Organizations should begin with a SOC and cyber maturity assessment to identify gaps, define priorities, and build a phased implementation roadmap.",
    },
  ];


  const risks = [
    {
      title: "AI-Driven Cyber Attacks",
      subtext:
        "Adversaries leverage AI to generate adaptive malware, phishing, and social engineering techniques that bypass traditional security defenses.",
      icon: Bot,
    },
    {
      title: "Autonomous Ransomware Campaigns",
      subtext:
        "Self-propagating ransomware spreads, encrypts systems, and executes extortion at machine speed with minimal human involvement.",
      icon: Skull,
    },
    {
      title: "Deepfake & Digital Impersonation Threats",
      subtext:
        "AI-generated audio, video, and synthetic identities enable executive impersonation, financial fraud, and brand abuse.",
      icon: ScanFace,
    },
    {
      title: "Alert Fatigue & SOC Burnout",
      subtext:
        "Excessive low-fidelity alerts overwhelm analysts, delaying detection and response to truly high-impact threats.",
      icon: BellRing,
    },
    {
      title: "Compromised AI & Security Pipelines",
      subtext:
        "Attackers target ML models, training data, and inference pipelines to poison detection logic and reduce security effectiveness.",
      icon: BrainCircuit,
    },
    {
      title: "Cloud & Multi-Cloud Exposure",
      subtext:
        "AI workloads, containers, APIs, and serverless services significantly expand the attack surface across cloud environments.",
      icon: Cloud,
    },
    {
      title: "Insider Threat Amplification via AI",
      subtext:
        "Employees misuse AI tools to exfiltrate sensitive data, bypass security controls, or escalate privileges.",
      icon: UserX,
    },
    {
      title: "Automation & SOAR Misconfigurations",
      subtext:
        "Poorly designed automation and response playbooks introduce cascading failures instead of improving resilience.",
      icon: Workflow,
    },
  ];


  const solutions = [
    {
      title: "AI-Driven Managed SOC (24×7)",
      description:
        "Always-on security operations using AI-first detection, automated triage, and expert-validated response across endpoints, networks, cloud, and SaaS environments.",
      icon: ShieldCheck,
    },
    {
      title: "Extended Detection & Response (XDR) Operations",
      description:
        "Unified visibility and correlation across EDR, NDR, cloud, identity, and email security to eliminate blind spots and accelerate response.",
      icon: Layers3,
    },
    {
      title: "Predictive Threat Intelligence & Analytics",
      description:
        "Machine-learning models analyze attacker behavior, campaigns, and indicators to predict and disrupt threats before execution.",
      icon: Brain,
    },
    {
      title: "Autonomous Incident Response & SOAR",
      description:
        "Automated containment, isolation, rollback, and remediation using pre-approved playbooks executed in seconds.",
      icon: Zap,
    },
    {
      title: "AI-Enhanced Vulnerability & Exposure Management",
      description:
        "Intelligent prioritization of vulnerabilities based on exploit likelihood, attack paths, and real business impact.",
      icon: Target,
    },
    {
      title: "Cloud-Native & AI Workload Security",
      description:
        "Comprehensive protection for AI/ML pipelines, APIs, containers, and multi-cloud environments across AWS, Azure, and GCP.",
      icon: CloudAlert,
    },
    {
      title: "Digital Risk Protection & Deepfake Detection",
      description:
        "Detection of impersonation, fraud, leaked credentials, dark-web exposure, and synthetic media threats.",
      icon: Eye,
    },
    {
      title: "Insider Threat Monitoring with Behavioral AI",
      description:
        "Continuous behavior analysis to detect anomalous access patterns, data misuse, and privilege abuse by insiders.",
      icon: User2,
    },
  ];

  return (
    <div className="bg-[#060917] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b2df2]/30 via-[#0b1220] to-[#020617]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm">
              AI-Powered Managed Security Services
            </span>

            <h1 className="text-2xl  md:text-4xl lg:text-4xl font-bold ">
              Autonomous, Intelligent <br />
              <span className="text-cyan-400">24×7 Cyber Defense</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0">
              Cyber threats now move at machine speed. Attackers leverage automation,
              AI-driven malware, deepfakes, and large-scale attack campaigns that
              overwhelm traditional SOCs and manual security operations. Legacy SIEMs,
              rule-based alerts, and human-only monitoring can no longer keep pace.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition">
                Get AI SOC Assessment
              </button>
              <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition">
                Explore Capabilities
              </button>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl rounded-full hidden sm:block" />

            <div className="relative bg-[#0b1220] border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center lg:text-left">
                AI-Driven Security Metrics
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
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
          <h2 className="text-3xl md:text-4xl max-w-5xl font-extrabold text-white leading-tight  text-center m-auto mb-5">
            Why Traditional SOC & Managed Security Models Fail
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Failure icon={AlertTriangle} text="Manual triage cannot scale to modern attack volumes" />
            <Failure icon={Radar} text="Rule-based detection misses novel and polymorphic threats" />
            <Failure icon={Database} text="Legacy SIEMs lack real-time correlation and prediction" />
            <Failure icon={Users} text="Security skills shortages slow response times" />
            <Failure icon={Cloud} text="Cloud-native and AI workloads outpace static controls" />
            <Failure icon={Cpu} text="Reactive security cannot stop machine-speed attacks" />
          </div>

          <p className="text-xl text-slate-300">
            <span className="text-cyan-400 font-semibold">
              AI-Powered Managed Security replaces reaction with prediction,
            </span>{" "}
            automation, and governance.
          </p>
        </div>
      </section>

      {/* KEY RISKS */}
      <KeyRisks
        title="AI-Powered Managed Security Risks"
        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
        risks={risks}
      />

      <ServiceSolution solutions={solutions} heading={"Mociber AI-Powered Managed Security Solutions & Services"} />



      {/* ================= CTA ================= */}
      <ContactCta
        title="Deploy Autonomous Cyber Defense"
        subtitle="Start with an AI-powered SOC and cyber maturity assessment."
      />

      {/* ================= FAQ ================= */}
      <FaqSection
        title="AI-Powered Managed Security Services FAQs"
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

