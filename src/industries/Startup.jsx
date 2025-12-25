// ServiceDetail.jsx
import HeroBanner from "@/components/ServiceHero";
import React from "react";
import {
  ShieldCheck,
  Cloud,
  Code,
  Lock,
  Users,
  Database,
  Bug,
  Zap,
  FileCheck,
  ShieldAlert,
  TrendingDown,
  FileWarning,
  Layers2Icon,
  GitBranch,
  KeyRound,
  Siren,
} from "lucide-react";
import FaqSection from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import KeyRisks from "@/components/Risks";
import ServiceSolution from "@/components/ServiceSolution";
import TrustedLogos from "@/components/TrustedLogos";
import IndustriesLatestBlogs from "./IndustiresBlogs";


export default function ServiceDetail() {

  const risks = [
    {
      title: "Early-Stage Data Breaches",
      subtext:
        "Weak access controls and misconfigured cloud environments expose sensitive customer and business data.",
      icon: Database,
    },
    {
      title: "Cloud Misconfigurations & Shadow IT",
      subtext:
        "Rapid cloud adoption without governance leads to exposed storage, APIs, credentials, and unmanaged SaaS usage.",
      icon: Cloud,
    },
    {
      title: "Insecure Product Development",
      subtext:
        "Speed-focused development introduces application, API, and source code vulnerabilities.",
      icon: Code,
    },
    {
      title: "Compliance & Regulatory Gaps",
      subtext:
        "Lack of readiness for SOC 2, ISO 27001, GDPR, DPDP, or PCI DSS delays enterprise sales and funding.",
      icon: FileWarning,
    },
    {
      title: "API & Integration Attacks",
      subtext:
        "Poorly secured APIs expose platforms to data scraping, abuse, and account takeover.",
      icon: Bug,
    },
    {
      title: "Identity & Access Weaknesses",
      subtext:
        "Shared credentials, weak MFA, and over-privileged access significantly increase breach risk.",
      icon: Lock,
    },
    {
      title: "Third-Party & Open-Source Risk",
      subtext:
        "Dependencies, SaaS tools, and vendors introduce hidden security, legal, and supply-chain exposure.",
      icon: Users,
    },
    {
      title: "Ransomware & Operational Disruption",
      subtext:
        "Single ransomware or extortion incidents can halt operations and severely damage brand credibility.",
      icon: Zap,
    },
    {
      title: "Lack of Incident Response Readiness",
      subtext:
        "Absence of response plans, tooling, and expertise increases impact and recovery time during incidents.",
      icon: ShieldAlert,
    },
    {
      title: "Investor & Customer Trust Erosion",
      subtext:
        "Security incidents and failed audits negatively affect valuation, funding, and partnerships.",
      icon: TrendingDown,
    },
  ];



  const solutions = [
    {
      title: "Startup Cyber Risk & Security Baseline Assessment",
      description:
        "Quick, cost-effective assessment of cloud environments, applications, APIs, identities, and data exposure to identify immediate risks and priorities.",
      icon: ShieldCheck,
    },
    {
      title: "Secure-by-Design Product & Architecture Review",
      description:
        "Embedding security into product design, APIs, and platform architecture to reduce systemic risk before scale.",
      icon: Layers2Icon,
    },
    {
      title: "Cloud Security & Configuration Hardening",
      description:
        "Securing AWS, Azure, and GCP environments using least-privilege IAM, secure configurations, and continuous monitoring.",
      icon: Cloud,
    },
    {
      title: "Application & API Security Testing",
      description:
        "Vulnerability testing for web apps, mobile apps, and APIs aligned with OWASP standards to prevent exploit-driven attacks.",
      icon: Bug,
    },
    {
      title: "DevSecOps & Secure Software Development",
      description:
        "Integrating security controls into CI/CD pipelines to maintain release velocity without compromising security.",
      icon: GitBranch,
    },
    {
      title: "Compliance Readiness for Startups",
      description:
        "Lean, fast-track readiness for SOC 2, ISO 27001, GDPR, DPDP, and PCI DSS to accelerate enterprise deals and funding.",
      icon: FileCheck,
    },
    {
      title: "Identity, Access & Secrets Management",
      description:
        "Strong IAM, MFA enforcement, and secrets management for founders, developers, and operations teams.",
      icon: KeyRound,
    },
    {
      title: "Third-Party & SaaS Risk Management",
      description:
        "Assessment and governance of SaaS tools, vendors, and open-source dependencies to reduce hidden risk exposure.",
      icon: Users,
    },
    {
      title: "Incident Response Planning & Startup SOC Support",
      description:
        "Incident response playbooks, lightweight monitoring, and on-demand response support tailored for startups.",
      icon: Siren,
    },
  ];


  const faqs = [
    {
      question: "Why do startups need cybersecurity early?",
      answer: "Early security avoids costly breaches, protects customer trust, and prevents delays in funding and enterprise deals.",
    },
    {
      question: "Is cybersecurity expensive for startups?",
      answer: "No. Lean, automation-first security keeps cost low and scales with growth.",
    },
    {
      question: "Which compliance standards matter most?",
      answer: "SOC 2, ISO 27001, GDPR, DPDP, and PCI DSS depending on customers and industry.",
    },
    {
      question: "How does security help fundraising?",
      answer: "Investors prefer startups with clear security posture and audit readiness.",
    },
  ];
  return (
    <div className="">

      {/* ---------------- HERO BANNER ---------------- */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/Industries-banner.webp"
            alt="Startup Cybersecurity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220cc] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight  text-center">
            Cybersecurity Built for <span className="text-cyan-400">Startups</span>
          </h1>
          {/* <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Secure growth, protect investor confidence, and achieve compliance
            readiness—without slowing innovation or increasing burn.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
              Get Security Assessment
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-xl">
              Talk to an Expert
            </button>
          </div> */}
        </div>
      </section>

      {/* ---------------- STARTUP REALITY ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">
            Secure Growth, Investor Trust, and Regulatory Readiness for High-Growth Startups
          </h2>
          <p className="text-slate-300 mb-6">
            Startups grow fast, innovate faster, and often operate with limited security resources. Cloud-native platforms, rapid product releases, APIs, and global customers create massive opportunities—but also expose startups to <b className="text-blue-500">cyber threats, data breaches, compliance failures, and investor risk.</b></p>
          <p className="text-slate-300 mb-6"><b className="text-blue-500">Mociber helps startups embed security, compliance, and resilience from Day One</b>, enabling safe scaling, faster enterprise deals, and investor confidence—without slowing innovation or increasing burn.</p>
          <p className="text-slate-300 mb-6">Our approach focuses on <b className="text-blue-500"></b>lean security, automation-first compliance, and risk-based controls <b />designed specifically for early-stage, growth-stage, and scale-up startups.<br />

          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
            alt="Startup engineering team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* MAIN CONTENT + RIGHT SIDEBAR */}
      <main className="max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — main content */}
          <article className="lg:col-span-8 space-y-10">
            {/* Overview / Key benefits */}
            <div className="bg-[#000A1F] text-white overflow-hidden">
              <section className="bg-[#071226] text-white p-2 lg:p-4 rounded-2xl">
                <div className="max-w-7xl mx-auto">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                    Why BFSI Security Is Uniquely Complex
                  </h2>

                  {/* Bullet Points */}
                  <ul className="space-y-1 text-slate-300 text-lg">
                    <li>• Limited security budgets and teams</li>
                    <li>• Rapid product and feature releases</li>
                    <li>• Cloud-first and API-driven architectures</li>
                    <li>• High dependency on third-party services</li>
                    <li>• Strong pressure from investors and enterprise customers</li>
                  </ul>

                  {/* Highlight Line */}
                  <p className="mt-10 text-xl font-medium text-white">
                    In BFSI, cybersecurity is inseparable from
                    <span className="text-cyan-400">
                      {" "}
                      financial stability and customer confidence.
                    </span>
                  </p>
                </div>
              </section>

              {/* Blogs */}
              <section id="case-studies" className="space-y-6 mt-8 p-2 lg:p-4">
                <h3 className="text-3xl md:text-4xl font-semibold mb-8">Blogs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <IndustriesLatestBlogs category="industries" limit={2} />
                </div>
              </section>



            </div>
          </article>

          {/* Right — sticky sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Quick facts / metrics */}
              <div className="bg-[#071226] p-6 rounded-xl border border-white/6">
                <h4 className="text-lg font-semibold mb-3">Quick facts</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><strong>99.99%</strong> availability SLA</li>
                  <li><strong>32%</strong> avg. cost reduction</li>
                  <li><strong>Automated</strong> compliance checks</li>
                </ul>
              </div>

              {/* Contact CTA */}
              <div id="contact" className="bg-linear-to-br from-[#6f2df2] to-[#5b2bd6] p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-2">Talk to an expert</h4>
                <p className="text-sm text-white/90 mb-4">Book a free consultation to discuss migration strategy and security plan.</p>
                <a href="#" className="block text-center bg-white text-[#4b21b8] px-4 py-3 rounded-md font-semibold">Request a consultation</a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <TrustedLogos />

      <KeyRisks
        title="Startup Cyber & Business Risks"
        subtitle="Top risks enterprises face — prioritized for impact and exploitability."
        risks={risks}
      />


      {/* ---------------- SOLUTIONS ---------------- */}
      <ServiceSolution solutions={solutions} heading={"Mociber’s Cybersecurity Services & Solutions"} />


      <ContactCta id="contact" />

      {/* ---------------- FAQ ---------------- */}
      <FaqSection
        title="Startup FAQs"
        subtitle=""
        faqs={faqs}
      />




    </div>
  );
}
