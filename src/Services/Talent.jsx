import React from "react";
import {
    ShieldCheck,
    Users,
    Scale,
    ShieldAlert,
    DatabaseBackup,
    Database,

} from "lucide-react";
import {
  CloudRain,
  
  Truck,
  Factory,
  AlertTriangle,
  
  TrendingDown,
  ClipboardX,
} from "lucide-react";
import {

    LockKeyhole,
    Code,
    Siren,
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


export default function Talent() {

const faqs = [
  {
    question: "What is included in Mociber’s ESG Advisory services?",
    answer:
      "Mociber provides end-to-end ESG advisory services including ESG strategy and framework development, carbon accounting, supply chain ESG audits, ESG data and reporting automation, digital governance, and regulatory compliance aligned with global sustainability standards.",
  },
  {
    question: "Why is ESG important for modern organizations?",
    answer:
      "ESG strengthens investor confidence, reduces environmental and regulatory risk, improves compliance, enhances brand reputation, and supports long-term operational and financial resilience.",
  },
  {
    question: "Which ESG standards and frameworks does Mociber support?",
    answer:
      "Mociber supports leading global ESG frameworks including GRI, SASB, CSRD, TCFD, BRSR, UN Sustainable Development Goals (SDGs), and country-specific sustainability regulations.",
  },
  {
    question: "How does Mociber help with carbon accounting and climate risk?",
    answer:
      "We measure and model Scope 1, Scope 2, and Scope 3 emissions, assess climate-related risks, and design science-based carbon reduction and net-zero strategies aligned with global standards.",
  },
  {
    question: "Can Mociber help with supply chain ESG assessments?",
    answer:
      "Yes. Mociber evaluates supplier environmental impact, labor practices, governance controls, ethical sourcing, and compliance using structured ESG audit and due diligence models.",
  },
  {
    question: "How does Mociber ensure ESG reporting accuracy?",
    answer:
      "Through AI-driven ESG data pipelines, automated reporting workflows, validation checks, and audit-ready documentation aligned with regulatory and assurance requirements.",
  },
  {
    question: "Does Mociber support ESG governance and board oversight?",
    answer:
      "Absolutely. We design ESG governance structures, internal controls, KPIs, board-level oversight models, and accountability mechanisms to strengthen enterprise ESG maturity.",
  },
  {
    question: "How does Mociber address digital ESG risks?",
    answer:
      "Mociber assesses AI ethics, cyber governance, data privacy risks, and digital sustainability practices, enabling responsible AI adoption and transparent ESG reporting.",
  },
  {
    question: "What industries benefit from Mociber’s ESG advisory services?",
    answer:
      "Our ESG advisory services support BFSI, healthcare, manufacturing, telecom, government, energy, retail, and global enterprises pursuing sustainability and regulatory transformation.",
  },
  {
    question: "How can my organization begin its ESG journey with Mociber?",
    answer:
      "Simply contact us through the consultation form. A Mociber ESG specialist will engage within 24 hours to provide a tailored ESG assessment and implementation roadmap.",
  },
];








    const risks = [
        {
            title: "Climate & Environmental Exposure",
            subtext:
                "Extreme weather events, energy dependence, and environmental impacts threaten operational continuity and regulatory compliance.",
            icon: CloudRain,
        },
        {
            title: "Inaccurate or Non-Auditable ESG Data",
            subtext:
                "Poor ESG data quality, fragmented sources, and manual reporting processes create audit failures, investor distrust, and disclosure risks.",
            icon: Database,
        },
        {
            title: "Regulatory Non-Compliance",
            subtext:
                "Failure to meet CSRD, SEC Climate Rule, GRI, SASB, or BRSR requirements results in legal exposure, financial penalties, and reputational damage.",
            icon: Scale,
        },
        {
            title: "Supply Chain Sustainability Gaps",
            subtext:
                "Lack of visibility into supplier practices increases environmental, ethical, labor, and operational risk across the value chain.",
            icon: Truck,
        },
        {
            title: "Mismanaged Carbon Emissions",
            subtext:
                "Incomplete or inaccurate tracking of Scope 1, 2, and 3 emissions undermines climate commitments and regulatory readiness.",
            icon: Factory,
        },
        {
            title: "Greenwashing & ESG Misrepresentation",
            subtext:
                "Unsubstantiated sustainability claims expose organizations to regulatory scrutiny, lawsuits, and long-term brand damage.",
            icon: AlertTriangle,
        },
        {
            title: "Workforce, Ethics & Social Risk",
            subtext:
                "Weak diversity, health & safety, labor practices, and employee engagement erode trust among employees, customers, and regulators.",
            icon: Users,
        },
        {
            title: "Cyber Governance & Data Ethics Gaps",
            subtext:
                "Poor AI ethics, weak cyber governance, and inadequate data protection threaten ESG transparency and digital trust.",
            icon: ShieldAlert,
        },
        {
            title: "Financial & Operational Sustainability Risks",
            subtext:
                "ESG failures restrict access to capital, increase cost of financing, and weaken long-term business resilience.",
            icon: TrendingDown,
        },
        {
            title: "Weak Corporate Governance & Oversight",
            subtext:
                "Insufficient board oversight, internal controls, and accountability slow ESG maturity and strategic execution.",
            icon: ClipboardX,
        },
    ];



    const solutions = [
        {
            title: "Data Privacy Compliance & Governance",
            description:
                "Implementation and ongoing governance of enterprise-wide data privacy programs aligned with global regulations and industry frameworks.",
            extra:
                "GDPR · DPDP Act (India) · HIPAA · CCPA · ISO 27701 · ISO 27001 · NIST Privacy Framework · Automated audits & reporting",
            icon: ShieldCheck,
        },
        {
            title: "Data Discovery, Classification & Mapping",
            description:
                "AI-powered discovery and classification of sensitive data across on-premise, cloud, SaaS, endpoints, databases, and email systems.",
            extra:
                "PII & PHI discovery · Data lineage · Sensitivity labeling · Multi-cloud & SaaS visibility",
            icon: DatabaseBackup,
        },
        {
            title: "Data Protection Technologies",
            description:
                "Deployment of enterprise-grade technologies to safeguard sensitive data across its entire lifecycle—at rest, in use, and in transit.",
            extra:
                "Encryption & tokenization · Data masking & anonymization · Secure file transfers · Key management & vaulting",
            icon: LockKeyhole,
        },
        {
            title: "Privacy-by-Design for Applications & AI Systems",
            description:
                "Embedding privacy and security controls into application development, DevSecOps pipelines, and AI/ML model lifecycles.",
            extra:
                "SDLC & DevSecOps integration · AI governance controls · Model risk management · Privacy impact assessments (PIA/DPIA)",
            icon: Code,
        },
        {
            title: "Third-Party Risk & Vendor Compliance",
            description:
                "Continuous assessment and governance of vendors’ data handling practices, cyber posture, and contractual privacy obligations.",
            extra:
                "Vendor due diligence · Privacy & security questionnaires · Contractual compliance · Continuous monitoring",
            icon: Users,
        },
        {
            title: "Data Breach Response & Incident Management",
            description:
                "24×7 data breach response covering investigation, containment, regulatory notifications, and post-incident privacy assessments.",
            extra:
                "Digital forensics · Breach containment · Regulatory reporting · Incident response playbooks · Privacy impact analysis",
            icon: Siren,
        },
    ];



    return (
        <div className="min-h-screen">
            <HeroBanner
                image="/Banners/About.jpg"
                heading={<></>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <main className="">
                {/* HERO / INTRO */}
                <motion.section id="intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl m-auto ">
                        <div className=" rounded-2xl py-16 p-4">
                            <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">ESG Advisory</h2>
                            <h4 className="font-semibold text-blue-500">
                                Future-Ready. Responsible. Resilient.
                            </h4>
                            <p className="mt-2 text-slate-300">
                                Sustainability is no longer optional—it is a global business mandate. With rising regulatory expectations, investor scrutiny, climate risk, and the shift toward responsible operations, organizations must build ESG programs that are transparent, measurable, and integrated into core governance.
                            </p>
                            <h4 className="font-semibold text-blue-500">
                                Mociber’s ESG Advisory empowers enterprises to accelerate sustainability transformation using data intelligence, automation, governance frameworks, and climate-focused insights—ensuring resilience, compliance, and long-term value creation.
                            </h4>
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

                        <div className=" w-full h-64 md:h-82 rounded-2xl overflow-hidden  m-auto ">
                            <img src="https://skill-mine.com/wp-content/uploads/2024/06/12.jpg" className="w-full h-auto object-     object-center" />
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
                                    src="https://skill-mine.com/wp-content/uploads/2022/10/hologram-padlock-sunset-panoramic-cityscape-bangkok-southeast-asia-concept-cyber-security-intelligence-multi-exposure-1024x683.jpg" // update path
                                    alt="Integrated Risk Visualization"
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>

                            {/* RIGHT — TEXT */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white/95 mb-4">
                                    Key Challenges in ESG
                                </h3>

                                <p className="text-slate-300 leading-relaxed">
                                    Organizations today struggle with:
                                </p>

                                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-md text-slate-200">
                                    {[
                                        "Rapidly evolving ESG regulations across markets",
                                        "Inconsistent or inaccurate ESG data collection",
                                        "Complex measurement of Scope 3 emissions",
                                        "Rising climate-related risks impacting assets and operations",
                                        "Increasing stakeholder expectations for transparency",
                                        "Cyber governance, AI ethics, and digital sustainability issues",
                                        "Fragmented ESG ownership and poor governance alignment",
                                        "Fear of greenwashing or reputational exposure"

                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-base text-center font-semibold text-white mt-8">
                                    Mociber addresses these challenges with structured ESG frameworks, automated data intelligence, and globally aligned methodologies.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>



                <KeyRisks
                    title="Top ESG Risks Impacting Modern Enterprises"
                    subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                    risks={risks}
                />

                <ServiceSolution solutions={solutions} heading={"Mociber’s ESG Advisory Services"} />


                <YouTubeAutoplaySection />
                {/* SERVICES */}
                <Service />
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

                <FaqSection
                    title="Data Privacy & Protection — FAQs"
                    subtitle="Common questions about our Data Privacy & Protection."
                    faqs={faqs}
                />

            </main>
        </div>
    );
}
