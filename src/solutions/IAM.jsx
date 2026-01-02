// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import {
    Users,
    ShieldAlert,
    Cloud,
    ShieldCheck,
    KeyRound,
    UserMinus,
    Ghost,
    Lock,
    Bot,
    ClipboardCheck,
    Key,
    SlidersHorizontal,
    LogIn,
    Activity,
    FileCheck,
    UsersRound,
} from "lucide-react";


import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function IAM() {



    const risks = [
        {
            title: "Credential Theft & Account Takeover",
            subtext:
                "Phishing, password reuse, MFA fatigue, and token theft remain the most exploited entry points for attackers.",
            icon: KeyRound,
        },
        {
            title: "Privileged Account Abuse",
            subtext:
                "Unsecured or unmanaged administrator accounts enable attackers to gain full control of systems and deploy ransomware.",
            icon: ShieldAlert,
        },
        {
            title: "Excessive & Over-Provisioned Access",
            subtext:
                "Users accumulate permissions over time, violating least-privilege principles and increasing insider and breach risk.",
            icon: UserMinus,
        },
        {
            title: "Shadow IT & Untracked Identities",
            subtext:
                "Unapproved SaaS applications, orphaned accounts, and unmanaged identities create invisible access paths.",
            icon: Ghost,
        },
        {
            title: "Weak or Missing MFA & Adaptive Controls",
            subtext:
                "Static authentication without contextual and risk-based controls enables attackers to bypass defenses.",
            icon: Lock,
        },
        {
            title: "SaaS Identity Sprawl",
            subtext:
                "Rapid cloud adoption creates fragmented identities, inconsistent access policies, and governance blind spots.",
            icon: Cloud,
        },
        {
            title: "Insecure API, Bot & Machine Identities",
            subtext:
                "Poorly secured service accounts, secrets, and APIs expose critical systems to automated and non-human attacks.",
            icon: Bot,
        },
        {
            title: "Insider Threats (Malicious or Accidental)",
            subtext:
                "Employees, contractors, or partners misuse legitimate access—intentionally or unintentionally—causing security incidents.",
            icon: Users,
        },
        {
            title: "Ineffective Access Reviews & Certifications",
            subtext:
                "Lack of periodic access audits allows outdated, toxic, and risky permissions to persist unnoticed.",
            icon: ClipboardCheck,
        },
        {
            title: "Poor Secrets, Key & Certificate Management",
            subtext:
                "Hard-coded credentials, exposed tokens, and unmanaged keys create direct and repeatable breach pathways.",
            icon: Key,
        },
    ];






    const solutions = [
        {
            title: "IAM Architecture & Zero Trust Identity Design",
            description:
                "Design and implementation of scalable IAM architectures aligned with Zero Trust principles, least-privilege access, and continuous identity verification.",
            icon: ShieldCheck,
        },
        {
            title: "Privileged Access Management (PAM)",
            description:
                "Secure vaulting, rotation, monitoring, and session recording of privileged credentials to eliminate admin-level abuse and lateral movement.",
            icon: KeyRound,
        },
        {
            title: "Identity Governance & Administration (IGA)",
            description:
                "Automated joiner-mover-leaver workflows, access certifications, role mining, and compliance-ready identity governance.",
            icon: UsersRound,
        },
        {
            title: "Access Control & Rights Management",
            description:
                "Fine-grained attribute-based and policy-based access control across applications, data, and infrastructure.",
            icon: SlidersHorizontal,
        },
        {
            title: "Single Sign-On (SSO), MFA & Adaptive Authentication",
            description:
                "Frictionless and secure authentication using contextual, risk-based access controls and strong MFA enforcement.",
            icon: LogIn,
        },
        {
            title: "Continuous Identity Threat Detection",
            description:
                "AI-driven detection of anomalous logins, privilege escalation, insider threats, and compromised identities.",
            icon: Activity,
        },
        {
            title: "Secrets, API & Machine Identity Security",
            description:
                "Secure lifecycle management of passwords, tokens, SSH keys, certificates, APIs, bots, and service accounts.",
            icon: Key,
        },
        {
            title: "Identity Compliance, Audit & Reporting",
            description:
                "Continuous compliance alignment with GDPR, ISO 27001, SOC 2, HIPAA, DPDP, NIST, and industry mandates.",
            icon: FileCheck,
        },
    ];





    const faqs = [
  {
    question: "What is IAM, PAM, and Rights Management?",
    answer:
      "IAM controls user identities and access, PAM secures high-risk privileged accounts, and Rights Management ensures least-privilege access to systems, applications, and data.",
  },
  {
    question: "Why is IAM critical for cybersecurity?",
    answer:
      "Most cyber breaches begin with compromised credentials. Strong IAM prevents unauthorized access and limits the impact of attacks by enforcing identity-based controls.",
  },
  {
    question: "What is Privileged Access Management (PAM)?",
    answer:
      "PAM secures administrator and high-risk accounts by vaulting credentials, monitoring and recording sessions, enforcing least privilege, and preventing privilege abuse.",
  },
  {
    question: "How does Zero Trust relate to IAM?",
    answer:
      "Zero Trust relies on IAM to continuously verify users, devices, and access requests, enforcing a never-trust, always-verify security model.",
  },
  {
    question: "Can IAM help prevent insider threats?",
    answer:
      "Yes. Continuous monitoring, access reviews, and behavior analytics help detect and prevent misuse of legitimate access—whether malicious or accidental.",
  },
  {
    question: "How does Mociber manage SaaS identity sprawl?",
    answer:
      "We centralize identity governance, enforce consistent access policies, and automate provisioning and deprovisioning across all SaaS platforms.",
  },
  {
    question: "Are APIs and machine identities part of IAM security?",
    answer:
      "Absolutely. APIs, bots, and service accounts must be secured and governed to prevent automated, large-scale, and non-human identity attacks.",
  },
  {
    question: "Does Mociber support compliance and audits?",
    answer:
      "Yes. We provide automated access reviews, audit trails, and compliance reporting aligned with global regulations and industry standards.",
  },
  {
    question: "Which industries benefit most from IAM & PAM?",
    answer:
      "BFSI, healthcare, government, telecom, manufacturing, and any organization handling regulated data or complex access environments benefit significantly.",
  },
  {
    question: "How can an organization start an IAM or PAM program?",
    answer:
      "The best starting point is an identity risk and maturity assessment to define the right roadmap, platforms, and security controls.",
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
                heading={<>IAM, PAM & Rights Management</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">Zero-Trust Identity Security for Modern, Cloud-First Enterprises</h1>
                            <p className="mt-4 text-slate-200">
                                Identity is the new security perimeter. As organizations adopt cloud, SaaS, APIs, automation, and remote work models, Identity & Access Management (IAM), Privileged Access Management (PAM), and Rights Management have become the most critical controls for preventing breaches, ensuring compliance, and maintaining digital trust.</p>
                            <p className="mt-4 text-slate-200">
                                Mociber delivers enterprise-grade IAM, PAM, and Rights Management programs that enforce Zero Trust, eliminate excessive access, secure privileged identities, and provide continuous visibility across users, devices, workloads, APIs, and machines.</p>
                            <p className="mt-4 text-slate-200">
                                Our approach transforms identity from a vulnerability into a strategic security advantage
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
                                     src="/SolutionsImages/IAM.jpeg"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section id="problems" className="mt-10 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold">Global IAM & PAM Challenges Enterprises Face</h2>


                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>	Fragmented identity systems across on-prem, cloud, and SaaS</li>
                                <li>	Manual access approvals prone to human error</li>
                                <li>	Legacy systems blocking Zero Trust adoption</li>
                                <li>	AI-driven attacks targeting authentication and tokens</li>
                                <li>	Limited visibility into privileged and non-human identities</li>
                                <li>	Increasing regulatory pressure for identity governance and auditability</li>
                                <li>	Balancing strong security with seamless user experience</li>

                            </ol>
                            <p className="mt-3 text-slate-200 font-bold">
                                Identity complexity is growing faster than traditional access controls can handle.
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
                        title="IAM, PAM & Rights Management Risks "
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"Mociber IAM, PAM & Rights Management Solutions"} />




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
                        title="IAM, PAM & Rights Management - FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
