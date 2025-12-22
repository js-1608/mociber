// AiMss.jsx
import React from "react";
import {
  ShieldCheck,
  Brain,
  Zap,
  Radar,
  Cloud,
  Lock,
  Eye,
  Cpu,
  Siren,
  Activity,
  AlertTriangle,
  Database,
  Users,
  Workflow,
  Layers,
} from "lucide-react";
import ContactCta from "@/components/ContactCta";
import FaqSection from "@/components/Faq";

export default function AiMss() {
  return (
    <div className="bg-[#060917] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b2df2]/30 via-[#0b1220] to-[#020617]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
              AI-Powered Managed Security Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Autonomous, Intelligent <br />
              <span className="text-cyan-400">24×7 Cyber Defense</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Cyber threats now move at machine speed. Our AI-Powered Managed Security
              Services detect, predict, and respond to attacks in real time—combining
              autonomous defense with expert human oversight.
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
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">
          AI-Driven Security Risks Enterprises Face Today
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <Risk icon={Brain} title="AI-Driven Cyber Attacks" />
          <Risk icon={Zap} title="Autonomous Ransomware Campaigns" />
          <Risk icon={Eye} title="Deepfake & Digital Impersonation" />
          <Risk icon={Activity} title="Alert Fatigue & SOC Burnout" />
          <Risk icon={Cpu} title="Compromised AI & ML Pipelines" />
          <Risk icon={Cloud} title="Cloud & Multi-Cloud Exposure" />
          <Risk icon={Users} title="Insider Threat Amplification" />
          <Risk icon={Workflow} title="SOAR & Automation Misconfigurations" />
        </div>
      </section>

      {/* ================= WHY TRADITIONAL SOC FAILS ================= */}
      <section className="bg-[#050814] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Why Traditional SOC Models Fail
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

      {/* ================= SOLUTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Mociber AI-Powered Managed Security Services
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <Service icon={Radar} title="AI-Driven Managed SOC (24×7)" />
          <Service icon={Layers} title="Extended Detection & Response (XDR)" />
          <Service icon={Brain} title="Predictive Threat Intelligence" />
          <Service icon={Zap} title="Autonomous Incident Response & SOAR" />
          <Service icon={ShieldCheck} title="AI-Enhanced Vulnerability Management" />
          <Service icon={Cloud} title="Cloud-Native & AI Workload Security" />
          <Service icon={Eye} title="Digital Risk & Deepfake Detection" />
          <Service icon={Users} title="Insider Threat Monitoring with Behavioral AI" />
          <Service icon={Siren} title="24×7 Cyber Incident Response" />
        </div>
      </section>

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

      {/* ================= FAQ ================= */}
      <FaqSection
        title="AI-Powered Managed Security FAQs"
        subtitle=""
        faqs={[
          {
            question: "What is AI-Powered Managed Security?",
            answer:
              "It uses AI, machine learning, and automation to detect, predict, and respond to cyber threats in real time.",
          },
          {
            question: "Does AI replace human SOC analysts?",
            answer:
              "No. AI removes noise and accelerates response while experts retain oversight and decision authority.",
          },
          {
            question: "Can this prevent ransomware?",
            answer:
              "Yes. Predictive analytics, behavioral detection, and automated containment significantly reduce ransomware impact.",
          },
          {
            question: "Is AI-Powered MSS suitable for cloud and hybrid environments?",
            answer:
              "Absolutely. It is designed for cloud-native, SaaS, containerized, and hybrid infrastructures.",
          },
        ]}
      />

      {/* ================= CTA ================= */}
      <ContactCta
        title="Deploy Autonomous Cyber Defense"
        subtitle="Start with an AI-powered SOC and cyber maturity assessment."
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

function Risk({ icon: Icon, title }) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">
      <Icon className="text-cyan-400 mb-4" />
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

function Failure({ icon: Icon, text }) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">
      <Icon className="text-cyan-400 mb-3" />
      <p className="text-slate-300">{text}</p>
    </div>
  );
}

function Service({ icon: Icon, title }) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">
      <Icon className="text-cyan-400 mb-4" />
      <h3 className="font-semibold">{title}</h3>
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
