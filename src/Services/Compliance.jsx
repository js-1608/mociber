import React from "react";
import {
  ShieldCheck,
  Users,
  Lock,
  Bot,
  Siren,
  Scale,
  ShieldAlert,
  FileX,
  ClipboardList,
  LifeBuoy,
} from "lucide-react";

import {
  FileSearch,
  Layers,
  CheckCircle,
  Activity,
  FileText,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";
import ContactCta from "@/components/ContactCta";
import HeroBanner from "@/components/ServiceHero";
import Service from "@/components/Service";
import TrustedLogos from "@/components/TrustedLogos";
import ToolsTabs from "@/components/Tools";
import YouTubeAutoplaySection from "@/components/Video";
import KeyRisks from "../components/Risks";
import FaqSection from "@/components/Faq";

import ServiceSolution from "@/components/ServiceSolution";

export default function Compliance() {
  const faqs = [
    {
      question: "What is included in Mociber’s Compliance & Auditing services?",
      answer:
        "Mociber provides end-to-end compliance management, internal and external audit readiness, GRC framework development, policy creation and modernization, third-party and vendor audits, automated compliance monitoring, and regulatory advisory aligned with global standards.",
    },
    {
      question: "Why is compliance important for modern organizations?",
      answer:
        "Compliance reduces legal and regulatory risk, avoids penalties and fines, builds customer and stakeholder trust, protects sensitive data, improves governance, and strengthens long-term operational resilience.",
    },
    {
      question: "Which compliance standards does Mociber support?",
      answer:
        "Mociber supports ISO 27001, ISO 27701, ISO 22301, SOC 2, GDPR, DPDP India, HIPAA, PCI DSS, NIST, RBI cybersecurity guidelines, and industry-specific regulatory frameworks.",
    },
    {
      question: "What industries benefit from Mociber’s compliance services?",
      answer:
        "BFSI, healthcare, retail, technology, government, telecom, manufacturing, energy, and other regulated industries benefit from Mociber’s compliance, audit, and governance services.",
    },
    {
      question:
        "Can Mociber help with internal and external audit preparation?",
      answer:
        "Yes. Mociber conducts audit gap assessments, documentation restructuring, evidence collection automation, process readiness validation, and remediation planning to ensure successful internal and external audits.",
    },
    {
      question: "Does Mociber offer automated compliance monitoring?",
      answer:
        "Absolutely. Mociber deploys AI-powered continuous compliance monitoring dashboards, automated policy tracking, real-time control testing, and continuous audit trails for proactive audit readiness.",
    },
    {
      question: "What is a GRC framework and why is it important?",
      answer:
        "A GRC (Governance, Risk, and Compliance) framework integrates governance, risk management, and compliance into a unified operating model, enabling consistent controls, better decision-making, and regulatory alignment.",
    },
    {
      question:
        "How does Mociber handle third-party and vendor compliance risks?",
      answer:
        "Mociber evaluates vendor security controls, contractual compliance, data handling practices, cyber posture, and supply-chain risks through structured assessments and continuous third-party monitoring.",
    },
    {
      question:
        "Can Mociber assist with GDPR, SOC 2, or DPDP India compliance?",
      answer:
        "Yes. Mociber provides implementation guidance, documentation support, data mapping, risk assessments, DPO advisory, and audit assistance for GDPR, SOC 2, DPDP India, and other regulations.",
    },
    {
      question:
        "How can my organization start a compliance assessment with Mociber?",
      answer:
        "Organizations can begin by filling out our contact form. A Mociber compliance specialist will reach out within 24 hours to assess requirements and propose a structured compliance roadmap.",
    },
  ];

  const risks = [
    {
      title: "Regulatory Non-Compliance",
      subtext:
        "Frequent changes across privacy, cybersecurity, ESG, and financial regulations increase exposure to penalties, sanctions, and legal action.",
      icon: Scale,
    },
    {
      title: "Data Protection & Privacy Violations",
      subtext:
        "Weak data handling, access controls, and monitoring lead to violations of GDPR, HIPAA, and global privacy laws.",
      icon: ShieldAlert,
    },
    {
      title: "Ineffective Internal Controls",
      subtext:
        "Outdated, inconsistent, or undocumented controls fail audit scrutiny and increase fraud and operational risk.",
      icon: FileX,
    },
    {
      title: "Cybersecurity Incidents & Breach Reporting Failures",
      subtext:
        "Ransomware, insider threats, and cloud breaches compromise regulatory reporting and compliance obligations.",
      icon: Siren,
    },
    {
      title: "Third-Party / Vendor Risk",
      subtext:
        "Non-compliant vendors and service providers create shared regulatory liabilities and supply-chain exposure.",
      icon: Users,
    },
    {
      title: "Audit Trail Integrity Failures",
      subtext:
        "Incomplete, inconsistent, or manipulated logs undermine audit accuracy, transparency, and forensic investigations.",
      icon: ClipboardList,
    },
    {
      title: "AI & Automation Governance Gaps",
      subtext:
        "Unregulated AI models introduce bias, inaccurate decisions, and non-compliant automated actions.",
      icon: Bot,
    },
    {
      title: "Operational Resilience & Business Continuity Issues",
      subtext:
        "Inability to withstand disruptions violates uptime requirements, reporting obligations, and continuity regulations.",
      icon: LifeBuoy,
    },
  ];

  const solutions = [
    {
      title: "End-to-End Compliance Management",
      description:
        "Holistic compliance programs covering mapping, implementation, control assessment, monitoring, and continuous improvement across global regulations.",
      extra:
        "ISO 27001 · ISO 27701 · ISO 22301 · SOC 2 · HIPAA · GDPR · PCI DSS · NIST CSF · DPDP India",
      icon: ShieldCheck,
    },
    {
      title: "Internal & External Audit Support",
      description:
        "Audit-ready frameworks enabling smooth internal and external audits with reduced disruption and faster closure.",
      extra:
        "Readiness assessments · Documentation restructuring · Evidence automation · Gap remediation planning",
      icon: FileSearch,
    },
    {
      title: "Governance, Risk & Compliance (GRC) Framework Development",
      description:
        "Design and deployment of scalable enterprise GRC models that unify governance, risk, compliance, and cyber assurance.",
      icon: Layers,
    },
    {
      title: "Third-Party Compliance & Vendor Risk Assessment",
      description:
        "End-to-end vendor governance to reduce shared regulatory exposure and supply-chain compliance risk.",
      extra:
        "Supplier audits · Cyber posture evaluation · Contractual compliance checks · Continuous monitoring",
      icon: Users,
    },
    {
      title: "Cybersecurity Compliance & Technical Controls Testing",
      description:
        "Independent validation of endpoint, network, cloud, and identity security controls against global benchmarks.",
      icon: CheckCircle,
    },
    {
      title: "Automated Compliance Monitoring & Continuous Audit",
      description:
        "AI-powered dashboards, automated alerts, real-time policy tracking, and continuous audit trails for ongoing assurance.",
      icon: Activity,
    },
    {
      title: "Policy Creation, Review & Modernization",
      description:
        "Development and modernization of cybersecurity, privacy, governance, and operational policies aligned to regulatory mandates.",
      icon: FileText,
    },
    {
      title: "Regulatory Intelligence & Advisory",
      description:
        "Proactive guidance on evolving global regulations and their business impact, enabling informed and timely compliance decisions.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroBanner
        image="/Banners/About.jpg"
        heading={<>Compliance & Auditing Services</>}
        subtext=""
        primaryCta=""
        secondaryCta=""
      />

      <main className="">
        {/* HERO / INTRO */}
        <motion.section
          id="intro"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-b from-[#000A1F] to-[#0c1b34]"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl m-auto ">
            <div className=" rounded-2xl py-16 p-4">
              <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-2">
                Compliance & Auditing Services
              </h2>
              <h4 className="font-semibold text-blue-500">
                Strengthen Governance. Build Trust. Achieve Regulatory
                Excellence
              </h4>
              <p className="mt-2 text-slate-300">
                In today’s world of rapidly shifting regulations, rising cyber
                threats, and complex digital ecosystems, organizations must
                demonstrate compliance—not just claim it. Traditional, manual
                audit processes can no longer keep pace with global standards or
                regulatory expectations.
              </p>
              <h4 className="font-semibold text-blue-500">
                Mociber helps enterprises establish a modern, automated,
                risk-driven compliance framework that ensures continuous
                governance, audit readiness, and regulatory alignment across all
                functions.
              </h4>
              <p className="mt-2 text-slate-300">
                We blend regulatory intelligence, AI-powered automation, and
                deep domain expertise to create a compliance posture that is
                sustainable, defensible, and future-ready.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#032152] mt-1" />
                  <div>
                    <strong>24×7 SOC</strong>
                    <div className="text-sm text-slate-500">
                      Real-time detection & response
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-[#032152] mt-1" />
                  <div>
                    <strong>Zero Trust</strong>
                    <div className="text-sm text-slate-500">
                      Identity-first secure architecture
                    </div>
                  </div>
                </li>
              </ul>

              {/* <div className="mt-6 flex gap-3">
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#032152] text-white px-5 py-3 rounded-md">Contact Sales</Link>
                                <a href="#services" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-md">Our Services</a>
                            </div> */}

              {/* <div className="rounded-lg border border-slate-100 p-6 ">
                                <h3 className="text-3xl font-semibold ">Why Mociber?</h3>
                                <p className="mt-3 text-sm text-slate-200">Faster detection, measurable risk reduction and compliance-first delivery — powered by AI, threat intelligence, and expert analysts.</p>

                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <div className="text-sm font-medium text-black">Compliance</div>
                                        <div className="text-xs text-slate-500 mt-1">ISO27001, SOC2, PCI</div>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <div className="text-sm font-medium text-black">Cloud</div>
                                        <div className="text-xs text-slate-500 mt-1">AWS, Azure, GCP</div>
                                    </div>
                                </div>
                            </div> */}
            </div>

            <div className=" w-full h-64 md:h-96 rounded-2xl overflow-hidden  m-auto">
              <img
                src="/Services_Images/GRC and Audit.jpeg"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </motion.section>

        <TrustedLogos />

        {/* PROBLEM */}
        <section id="problems" className="mt-8 gap-6 max-w-7xl m-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className=" p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
              {/* LEFT — IMAGE */}
              <div className="flex justify-center">
                <img
                src="/Services_Images/GRC and Audit 2.jpeg"
                  alt="Integrated Risk Visualization"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>

              {/* RIGHT — TEXT */}
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white/95 mb-4">
                  Key Challenges in Compliance and Auditing
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Enterprises typically struggle with:
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                  {[
                    "Fragmented documentation and manual audit processes",
                    "Inconsistent controls across departments and technologies",
                    "Limited visibility into compliance posture",
                    "Complex vendor ecosystems",
                    "High cost of non-compliance (fines, legal liability, reputational damage)",
                    "Lack of automation for monitoring, reporting, and audit readiness",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-base text-center font-semibold text-white mt-8">
                  Mociber solves these challenges with automation-first,
                  intelligence-driven compliance programs.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <KeyRisks
          title="Top Enterprise Compliance & Auditing Risks"
          subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
          risks={risks}
        />

        <ServiceSolution
          solutions={solutions}
          heading={"Mociber’s Cybersecurity Services & Solutions"}
        />

        <YouTubeAutoplaySection />
        {/* SERVICES */}
        {/* <Service /> */}
        <ToolsTabs />

        {/* CTA / CONTACT */}
        <ContactCta id="contact" />

        <FaqSection
          title="Compliance & Auditing Services – FAQs"
          subtitle="Common questions about our cybersecurity services, platforms, and approach."
          faqs={faqs}
        />
      </main>
    </div>
  );
}
