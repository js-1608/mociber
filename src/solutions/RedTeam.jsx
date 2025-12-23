// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import { Link } from "react-router";
import KeyRisks from "@/components/Risks";
import {
    KeyRound,
    Crosshair,
    Route,
    Radar,
    Shuffle,
    Users,
    Network,
    Sliders,
    Server,
    AlertOctagon,
    BarChart3,
    GitMerge,
    AlertTriangle,
} from "lucide-react";
import ContactCta from "@/components/ContactCta";
import ServiceSolution from "@/components/ServiceSolution";
import FaqSection from "@/components/Faq";
import YouTubeAutoplaySection from "@/components/Video";



export default function RedTeam() {

    const risks = [
        {
            title: "Undetected Attack Paths",
            subtext:
                "Security controls appear effective in isolation but fail when chained together by skilled adversaries to reach critical assets.",
            icon: Route,
        },
        {
            title: "Ineffective Detection & Response",
            subtext:
                "SOC teams fail to detect or contain sophisticated attacks within acceptable timeframes due to tooling gaps and alert overload.",
            icon: Radar,
        },
        {
            title: "Lateral Movement & Privilege Escalation",
            subtext:
                "Attackers move silently across networks and escalate privileges without triggering meaningful alerts.",
            icon: Shuffle,
        },
        {
            title: "Social Engineering & Human Exploitation",
            subtext:
                "Phishing, pretexting, and insider manipulation exploit human weaknesses to bypass technical security controls.",
            icon: Users,
        },
        {
            title: "Perimeter & Network Segmentation Failures",
            subtext:
                "Flat or poorly segmented networks allow attackers to pivot freely once initial access is achieved.",
            icon: Network,
        },
        {
            title: "Identity & Credential Abuse",
            subtext:
                "Compromised credentials enable long-term persistence and stealthy access that blends in with legitimate activity.",
            icon: KeyRound,
        },
        {
            title: "Security Control Misconfiguration",
            subtext:
                "EDR, SIEM, firewalls, and IAM tools are deployed but poorly tuned, misaligned, or not continuously validated.",
            icon: Sliders,
        },
        {
            title: "Business-Critical System Exposure",
            subtext:
                "High-value and mission-critical assets remain accessible during attacks due to weak asset prioritization.",
            icon: Server,
        },
        {
            title: "Incident Response Gaps",
            subtext:
                "Lack of playbooks, coordination, authority, or rehearsals delays containment, eradication, and recovery.",
            icon: AlertOctagon,
        },
        {
            title: "Executive & Board Visibility Gaps",
            subtext:
                "Leadership lacks realistic insight into true cyber readiness, attack feasibility, and business risk exposure.",
            icon: BarChart3,
        },
    ];


    const solutions = [
        {
            title: "Full-Scope Adversary Simulation",
            description:
                "End-to-end attack scenarios simulating external, internal, and hybrid threat vectors aligned with real-world threat actors and tactics.",
            icon: Crosshair,
        },
        {
            title: "Network, Infrastructure & Application Red Teaming",
            description:
                "Targeted exploitation testing across networks, servers, endpoints, applications, and cloud environments to identify real attack paths.",
            icon: Network,
        },
        {
            title: "Identity & Privilege-Based Attack Testing",
            description:
                "Simulation of credential theft, privilege escalation, and abuse of IAM and PAM controls to test identity resilience.",
            icon: KeyRound,
        },
        {
            title: "Social Engineering & Insider Threat Simulation",
            description:
                "Controlled phishing, vishing, physical intrusion, and insider threat scenarios to evaluate human and process weaknesses.",
            icon: Users,
        },
        {
            title: "Purple Teaming (Red + Blue Collaboration)",
            description:
                "Live collaboration between red teams and SOC/IR teams to improve detection, response, and defensive tooling effectiveness.",
            icon: GitMerge,
        },
        {
            title: "Detection Engineering & Use-Case Validation",
            description:
                "Testing and tuning SIEM, XDR, EDR, and SOAR detection use cases against real-world attack techniques.",
            icon: Radar,
        },
        {
            title: "Incident Response & Crisis Readiness Exercises",
            description:
                "Tabletop and live-fire simulations validating executive decision-making, legal response, communications, and operational readiness.",
            icon: AlertTriangle,
        },
    ];

    const faqs = [
        {
            question: "What is red teaming in cybersecurity?",
            answer:
                "Red teaming is an adversarial security assessment that simulates real-world attackers to test an organization’s detection, response, and overall cyber resilience.",
        },
        {
            question: "How is red teaming different from penetration testing?",
            answer:
                "Penetration testing focuses on identifying vulnerabilities, while red teaming evaluates how effectively an organization can detect, respond to, and contain an active, multi-stage attack.",
        },
        {
            question: "Who should conduct red teaming exercises?",
            answer:
                "Enterprises, financial institutions, healthcare organizations, government agencies, and critical infrastructure providers benefit most from red teaming engagements.",
        },
        {
            question: "How often should red teaming be performed?",
            answer:
                "Red teaming should be conducted at least annually or after significant changes to infrastructure, identity systems, or security architecture.",
        },
        {
            question: "Does red teaming disrupt business operations?",
            answer:
                "No. Engagements are carefully scoped and executed to avoid operational disruption while delivering realistic and actionable results.",
        },
        {
            question: "What is purple teaming?",
            answer:
                "Purple teaming is a collaborative approach where red teams and blue teams work together to improve detection, response, and defensive capabilities in real time.",
        },
        {
            question: "Does red teaming help with compliance?",
            answer:
                "Yes. Many regulations and security frameworks recommend or require adversarial testing to validate the effectiveness of security controls.",
        },
        {
            question: "What outcomes should organizations expect from red teaming?",
            answer:
                "Improved detection capabilities, faster incident response, reduced breach impact, and clear executive visibility into real-world cyber risk.",
        },
        {
            question: "Can red teaming test people and processes?",
            answer:
                "Yes. Red teaming evaluates technology, human behavior, and operational processes together to assess true organizational readiness.",
        },
        {
            question: "How can we start a red teaming engagement?",
            answer:
                "The engagement typically begins with a threat-based scoping and readiness assessment to align objectives, rules of engagement, and expectations.",
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
                image="/Banners/About.jpg"
                heading={<>Red Teaming & AI</>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />

            <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
                <div className="max-w-7xl mx-auto px-1 lg:px-6 py-12">
                    {/* HERO / INTRO */}

                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-6  shadow-lg">
                        <div>
                            <h1 className="text-3xl md:text-3xl font-bold">Real-World Adversarial Testing for Enterprise & Critical Infrastructure Security</h1>
                            <p className="mt-4 text-slate-200">
                                Modern cyber adversaries do not follow rules, scopes, or assumptions. They exploit human behavior, weak processes, technical gaps, and operational blind spots. Traditional vulnerability assessments and compliance audits are no longer sufficient to measure true cyber resilience.</p>
                            <p className="mt-4 text-slate-200">Mociber’s Red Teaming services simulate real-world attackers to test your organization’s ability to prevent, detect, respond to, and recover from advanced cyber threats.</p>
                            <p className="mt-4 text-slate-200">
                                Our adversarial engagements deliver measurable insight into how your people, processes, and technologies perform under realistic attack conditions.
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
                            <h2 className="text-2xl font-semibold">Challenges in Red Teaming</h2>


                            <ol className="mt-4 space-y-2 list-decimal list-inside text-slate-200">
                                <li>Compliance-driven testing does not reflect real attacker behavior</li>
                                <li>Point-in-time assessments miss evolving threats</li>
                                <li>Automated scans ignore human and process weaknesses</li>
                                <li>Blue teams rarely face sustained, stealthy adversaries</li>
                                <li>Security investments are not validated end-to-end</li>


                            </ol>
                            <p className="mt-3 text-slate-200">
                                Red teaming measures real cyber resilience—not theoretical security.
                            </p>
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
                        title="Red Teaming Risks "
                        subtitle="Modern organizations face a combination of regulatory, operational, and cyber risks that directly impact compliance integrity:"
                        risks={risks}
                    />
                    <YouTubeAutoplaySection />

                    <ServiceSolution solutions={solutions} heading={"Mociber Red Teaming Solutions & Services"} />




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
                        title="Red Teaming & AI – FAQs"
                        subtitle="Common questions about our Data Privacy & Protection."
                        faqs={faqs}
                    />
                </div>
            </div>
        </>
    );
}
