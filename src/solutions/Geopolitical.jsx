// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import { AlignVerticalJustifyCenter, BriefcaseConveyorBeltIcon, ChartBarIcon, FileDigit, Globe2, Globe2Icon, GlobeIcon, GlobeLock, icons, MoveDownLeft, Network, Proportions, Satellite, Shield, Theater, ToolCase } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function GeopoliticalSecurityPage() {
  const risks = [
    {
      title: "State-Sponsored Advanced Persistent Threats (APTs)",
      subtext:
        "Highly resourced nation-state actors conducting long-term espionage and disruption campaigns against governments, BFSI, telecom, defense, and critical industries.",
      icon: GlobeIcon,
    },
    {
      title: "Critical Infrastructure Cyber Attacks",
      subtext:
        "Targeted cyber operations against energy grids, transportation systems, healthcare, water utilities, and telecom causing large-scale operational paralysis.",
      icon: Network,
    },
    {
      title: "Cyber Espionage & Strategic Intelligence Theft",
      subtext:
        "Theft of intellectual property, defense data, trade secrets, and national intelligence assets to gain geopolitical and economic advantage.",
      icon: Shield,
    },
    {
      title: "Supply Chain Cyber Warfare",
      subtext:
        "Compromise of third-party vendors, MSPs, and software supply chains to infiltrate and control entire digital ecosystems.",
      icon: BriefcaseConveyorBeltIcon,
    },
    {
      title: "Disinformation & Psychological Operations (PSYOPS)",
      subtext:
        "AI-generated propaganda, deepfakes, and information warfare campaigns manipulating public opinion, elections, markets, and social stability.",
      icon: AlignVerticalJustifyCenter,
    },
    {
      title: "Zero-Day Exploit Weaponization",
      subtext:
        "Stockpiling and deployment of unknown vulnerabilities by nation-states to bypass defenses and gain strategic cyber superiority.",
      icon: Shield,
    },
    {
      title: "AI-Driven Autonomous Cyber Attacks",
      subtext:
        "Self-learning malware and automated attack frameworks that adapt in real time to evade detection and response mechanisms.",
      icon: Network,
    },
    {
      title: "Ransomware as a Geopolitical Tool",
      subtext:
        "State-aligned criminal groups targeting hospitals, banks, and infrastructure to destabilize economies and exert political pressure.",
      icon: ToolCase,
    },
    {
      title: "Satellite & Space-Based Cyber Threats",
      subtext:
        "GPS spoofing, satellite hijacking, and cyber attacks on space-based communication, navigation, and surveillance systems.",
      icon: Satellite,
    },
    {
      title: "Cross-Border Regulatory & Sanctions Risk",
      subtext:
        "Conflicting national laws, sanctions, and data sovereignty requirements disrupting global operations and digital resilience.",
      icon: Globe2,
    },
  ];


  const solutions = [
    {
      title: "Zero Trust Maturity Assessment",
      description:
        "Comprehensive evaluation of identity, device, network, data, and application security posture aligned with NIST 800-207 and CISA Zero Trust maturity models.",
      icon: Proportions
    },
    {
      title: "Identity & Access Governance (IGA) Implementation",
      description:
        "Centralized IAM covering SSO, MFA, PAM, Just-In-Time (JIT) access, and full identity lifecycle governance across cloud, on-prem, OT, and IoT environments.",
      icon: GlobeLock
    },
    {
      title: "Network Micro-Segmentation Architecture",
      description:
        "Granular segmentation at user, workload, and application levels to prevent lateral movement and contain breaches by design.",
      icon: ChartBarIcon
    },
    {
      title: "Continuous Authentication & Policy Engine Deployment",
      description:
        "Risk-based, adaptive access controls using behavioral analytics, contextual signals, and real-time policy enforcement.",
      icon: MoveDownLeft
    },
    {
      title: "Zero Trust for Cloud & Multi-Cloud Environments",
      description:
        "Identity-first security with workload isolation, API governance, and consistent policy enforcement across AWS, Azure, and GCP.",
      icon: Globe2
    },
    {
      title: "Threat Detection, Response & Automation",
      description:
        "Real-time monitoring, anomaly detection, and automated policy enforcement integrated with SOC, SIEM, SOAR, and XDR platforms.",
      icon: FileDigit
    }
  ];



  const faqs = [
    {
      question: "What is geopolitical risk in cybersecurity?",
      answer:
        "Geopolitical risk in cybersecurity refers to threats arising from political instability, state-sponsored cyberattacks, sanctions, conflicts, and international tensions that impact digital systems and operations.",
    },
    {
      question: "How does cyber warfare affect businesses?",
      answer:
        "Cyber warfare can disrupt operations, steal sensitive data, damage critical infrastructure, manipulate markets, and expose organizations to regulatory and reputational risk.",
    },
    {
      question: "What are state-sponsored cyber attacks?",
      answer:
        "State-sponsored cyber attacks are cyber operations conducted or supported by nation-states, often involving advanced persistent threats (APTs) targeting strategic industries and government entities.",
    },
    {
      question: "How does Mociber help manage geopolitical cyber risks?",
      answer:
        "Mociber combines real-time geopolitical intelligence, AI-powered cyber defense, predictive risk modeling, and coordinated crisis response to protect organizations from global cyber threats.",
    },
    {
      question: "Which industries are most exposed to geopolitical cyber warfare?",
      answer:
        "Financial services, energy, healthcare, telecom, government, defense, and multinational enterprises are among the most targeted sectors for geopolitical cyber attacks.",
    },
    {
      question: "Can geopolitical risk impact cloud and supply chains?",
      answer:
        "Yes. Sanctions, regional conflicts, and cyber warfare often disrupt cloud hosting environments, third-party vendors, software supply chains, and cross-border data flows.",
    },
    {
      question: "Does Mociber provide 24/7 monitoring for geopolitical threats?",
      answer:
        "Yes. Mociber offers continuous 24/7 monitoring through advanced Security Operations Centers (SOCs) integrated with geopolitical intelligence platforms.",
    },
    {
      question: "How does AI improve geopolitical risk management?",
      answer:
        "AI enables early-warning detection, advanced pattern recognition, and predictive forecasting of geopolitical events and cyber threats before they escalate.",
    },
    {
      question: "Is compliance part of geopolitical cyber risk management?",
      answer:
        "Absolutely. Conflicting regulations, sanctions, and regional cyber laws require strong compliance alignment, which Mociber integrates directly into its cybersecurity solutions.",
    },
    {
      question: "How can organizations start improving geopolitical cyber resilience?",
      answer:
        "The first step is an intelligence-led geopolitical and cyber risk assessment to identify exposure, prioritize threats, and define a long-term resilience roadmap.",
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
        heading={<>Geopolitical Risk & Cyber Warfare</>}
        subtext=""
        primaryCta=""
        secondaryCta=""
      />

      <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
        <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
          {/* HERO / INTRO */}

          <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
            <div>
              <h1 className="text-3xl md:text-3xl font-bold">Intelligence-Led Protection Against State-Sponsored Threats, Hybrid Warfare, and Global Instability</h1>
              <p className="mt-4 text-slate-200">
                In an era of escalating geopolitical tensions, economic fragmentation, and state-sponsored cyber operations, cyber warfare has become a strategic instrument of power. Organizations are no longer collateral damage—they are primary targets. Financial systems, critical infrastructure, supply chains, healthcare networks, and digital platforms are increasingly weaponized to achieve political, economic, and strategic objectives
              </p>
              <p className="mt-4 text-slate-200">
                Mociber helps enterprises and governments anticipate, withstand, and recover from geopolitical and cyber warfare risks through intelligence-driven monitoring, AI-powered cyber defense, and resilient risk management frameworks.
                Our approach shifts organizations from reactive defense to predictive, decision-ready resilience.
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
                  src="/SolutionsImages/Geopolitical.jpeg"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <section id="problems" className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">Major Challenges Organizations Face Today</h2>
              <p className="mt-3 text-slate-200">
                As geopolitics intensifies, organisations face targeted and persistent threats that traditional cyber programs are not built to handle. The intersection of political objectives and cyber operations produces unique operational, legal and
                supply-chain challenges.
              </p>

              <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                <li>	Fragmentation of global political alliances</li>
                <li>	Rapid expansion of state-backed cyber warfare units</li>
                <li>	AI and emerging technologies accelerating attack sophistication</li>
                <li>	Highly vulnerable global supply chains</li>
                <li>	Regulatory conflicts across jurisdictions</li>
                <li>	Insider threats influenced by political agendas</li>
                <li>	Sanctions forcing risky technology and vendor decisions</li>
                <li>	Rising cyberattacks on energy, finance, healthcare, and telecom sectors</li>
              </ol>
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
            title="Top Supply Chain Security Risks"
            subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
            risks={risks}
          />
          <YouTubeAutoplaySection />

          <ServiceSolution solutions={solutions} heading={" Mociber Zero Trust Solutions & Services"} />




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
