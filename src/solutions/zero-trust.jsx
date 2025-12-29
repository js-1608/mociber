// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import { ChartBarIcon, FileDigit, Globe2, GlobeLock, MoveDownLeft, Proportions, } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";
import {
  ShieldAlert,
  MoveRight,
  UserX,
  AppWindow,
  Laptop,
  CloudOff,
  Users,
  Network,
  EyeOff,
  Bot,
} from "lucide-react";


export default function ZeroTrustPage() {



  const risks = [
    {
      title: "Identity Compromise & Credential Theft",
      subtext:
        "Stolen passwords, MFA fatigue attacks, and token abuse allow attackers to impersonate legitimate users.",
      icon: ShieldAlert,
    },
    {
      title: "Lateral Movement After Initial Breach",
      subtext:
        "Flat networks enable attackers to move freely once inside, reaching high-value systems undetected.",
      icon: MoveRight,
    },
    {
      title: "Over-Privileged Access",
      subtext:
        "Excessive permissions violate least-privilege principles and create high-impact exploitation paths.",
      icon: UserX,
    },
    {
      title: "Shadow IT & Unsanctioned SaaS Usage",
      subtext:
        "Unapproved applications introduce unmanaged identities, data leakage, and critical visibility gaps.",
      icon: AppWindow,
    },
    {
      title: "Unsecured Endpoints & Devices",
      subtext:
        "BYOD, unmanaged laptops, IoT, and OT devices connect without proper validation or posture checks.",
      icon: Laptop,
    },
    {
      title: "Cloud & API Misconfigurations",
      subtext:
        "Weak IAM roles, exposed APIs, and permissive policies enable privilege escalation in cloud platforms.",
      icon: CloudOff,
    },
    {
      title: "Third-Party & Vendor Identity Risk",
      subtext:
        "Partners and contractors introduce indirect access paths with limited governance and oversight.",
      icon: Users,
    },
    {
      title: "Weak Network Segmentation",
      subtext:
        "Broad access zones allow attackers and insiders to reach sensitive assets unnecessarily.",
      icon: Network,
    },
    {
      title: "Lack of Continuous Visibility",
      subtext:
        "Disconnected monitoring tools delay detection of anomalous access and identity misuse.",
      icon: EyeOff,
    },
    {
      title: "AI-Enabled & Automated Attacks",
      subtext:
        "Attackers use automation and AI to rapidly test identities, sessions, and access controls at scale.",
      icon: Bot,
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
        heading={<>Zero Trust Security & Architecture</>}
        subtext=""
        primaryCta=""
        secondaryCta=""
      />

      <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
        <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
          {/* HERO / INTRO */}

          <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
            <div>
              <h1 className="text-3xl md:text-3xl font-bold">Identity-First, Policy-Driven Cyber Defense for Hybrid, Cloud & Enterprise Environments</h1>
              <p className="mt-4 text-slate-200">
                The traditional network perimeter is no longer relevant. Users, devices, applications, APIs, and data now operate across cloud, SaaS, remote work, OT, and IoT environments—making implicit trust a critical security flaw.
              </p>
              <p className="mt-4 text-slate-200">
                Zero Trust Security is built on one uncompromising principle: Never Trust, Always Verify.
                Mociber designs and implements enterprise-grade Zero Trust architectures that continuously validate identity, device posture, access context, and behavior—reducing breach impact, preventing lateral movement, and meeting modern regulatory expectations.

              </p>
               <p className="mt-4 text-slate-200">Our Zero Trust programs are aligned with NIST 800-207, CISA Zero Trust Maturity Model, and leading industry frameworks, while remaining practical, scalable, and business-aligned.</p>
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
              <h2 className="text-2xl font-semibold">Why Perimeter-Based Security Fails</h2>


              <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                <li>	Hybrid and remote work dissolve network boundaries</li>
                <li>	Identity sprawl across cloud and SaaS breaks centralized control</li>
                <li>	Legacy systems resist granular segmentation</li>
                <li>	Compliance now demands identity-based access and continuous verification</li>
                <li>	Attackers exploit weak authentication faster than controls adapt</li>

              </ol>
              <p className="mt-3 text-slate-200">
                Zero Trust replaces assumptions with verification—every request, every time.
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
