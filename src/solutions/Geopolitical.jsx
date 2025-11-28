// GeopoliticalSecurityPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/ServiceHero";
import ServiceDetail from "@/pages/Service";
import Service from "@/components/Service";

/**
 * GeopoliticalSecurityPage
 * - Single-file React component styled with Tailwind CSS
 * - Dark gradient background, white text
 * - Inline SVG icons (vector) — replace with your SVGs if you like
 *
 * Usage: import GeopoliticalSecurityPage from './GeopoliticalSecurityPage';
 * <GeopoliticalSecurityPage />
 */

function IconShield() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l7 3v5c0 5-3.5 9.7-7 12-3.5-2.3-7-7-7-12V5l7-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12h20M12 2c2.5 3 2.5 8 0 11M12 22c-2.5-3-2.5-8 0-11" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7.5L11 16.5M16 7.5L13 16.5" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconThreat() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M11 2h2v6h-2zM5 8l7-6 7 6v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GeopoliticalSecurityPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", service: "Geopolitical Risk Assessment", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to API
    console.log("Geopolitical lead:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const risks = [
    {
      title: "Nation-state Influence Operations",
      text: "Coordinated disinformation, targeted intrusion, and supply-chain manipulation driven by geopolitical agendas.",
      icon: <IconGlobe />,
    },
    {
      title: "Critical Infrastructure Targeting",
      text: "Attacks against energy, telecom, transport, and financial networks aimed at disruption or coercion.",
      icon: <IconNetwork />,
    },
    {
      title: "Sanctions & Supply Chain Pressure",
      text: "Targeted technology restrictions, forced vendor changes, and embargo-driven disruption to service availability.",
      icon: <IconShield />,
    },
    {
      title: "Proxy & Third-party Compromise",
      text: "Adversaries using contractors, vendors or open-source components to gain covert access.",
      icon: <IconThreat />,
    },
  ];

  const services = [
    {
      title: "Geopolitical Risk Assessment",
      text: "Country-level risk scoring, scenario modeling, and threat correlation using geopolitical indicators.",
      icon: <IconGlobe />,
    },
    {
      title: "Threat Intelligence & Attribution",
      text: "Attribution analysis, cluster detection and actor profiling to link activity to geopolitical drivers.",
      icon: <IconThreat />,
    },
    {
      title: "Resilient Architecture Design",
      text: "Network segmentation, multi-region failover, and supply-chain diversification to reduce single points of failure.",
      icon: <IconNetwork />,
    },
    {
      title: "Crisis Response & War-room",
      text: "Rapid containment, legal coordination, comms support and continuity plans tailored to geopolitically-driven incidents.",
      icon: <IconShield />,
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
        heading={<></>}
        subtext=""
        primaryCta=""
        secondaryCta=""
      />

      <div className="min-h-screen text-white bg-linear-to-b from-[#000A1F] to-[#0c1b34]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* HERO / INTRO */}
          <section className="grid md:grid-cols-2 gap-8 items-center bg-white/3 rounded-2xl p-8 md:p-12 shadow-lg">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold">Geopolitical Cybersecurity Solutions</h1>
              <p className="mt-4 text-slate-200">
                Geopolitics shapes modern cyber risk. Mociber provides tailored solutions that combine threat intelligence, strategic risk modeling, and resilient design to protect organisations exposed to nation-state activity,
                sanctions, and geopolitical disruption.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-white/80 mt-2" />
                  <div>
                    <strong className="block text-white">Intelligence-led</strong>
                    <span className="text-slate-200 text-sm">Actor attribution and geopolitical context drive our detection and response.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-white/80 mt-2" />
                  <div>
                    <strong className="block text-white">Resilience-first</strong>
                    <span className="text-slate-200 text-sm">Architecture and supply chain hardening reduce operational exposure.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a href="#services" className="inline-block border border-white/20 px-5 py-3 rounded-md text-white">View Solutions</a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              {/* side pic - replace src with a real asset */}
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-white/8">
                <img
                  alt="Geopolitical cybersecurity"
                  src="https://images.unsplash.com/photo-1605902711622-cfb43c44367d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b0ef4f4f7c9a4b8f1b8f8e2d8f8d9c8"
                  className="object-cover w-full h-64"
                />
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <section id="problems" className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">The Problem</h2>
              <p className="mt-3 text-slate-200">
                As geopolitics intensifies, organisations face targeted and persistent threats that traditional cyber programs are not built to handle. The intersection of political objectives and cyber operations produces unique operational, legal and
                supply-chain challenges.
              </p>

              <ol className="mt-4 space-y-3 list-decimal list-inside text-slate-200">
                <li>
                  <strong>Cross-border Complexity:</strong> Multiple jurisdictions, sanctions regimes and export controls complicate incident response and procurement.
                </li>
                <li>
                  <strong>Attribution & Actor Complexity:</strong> Distinguishing nation-state activity from criminal actors is hard, slowing decisions and response.
                </li>
                <li>
                  <strong>Supply Chain & Vendor Pressure:</strong> Forced vendor changes, compromised third parties, and component tampering create availability and integrity risks.
                </li>
              </ol>
            </div>

            <aside className="bg-white/6 rounded-2xl p-6">
              <h3 className="font-semibold">Why it matters</h3>
              <p className="mt-2 text-slate-200 text-sm">Geopolitical incidents can cause regulatory penalties, reputational damage, long outages, and strategic loss of market access.</p>
              <div className="mt-4 text-sm text-slate-300">
                <div><strong>Objective:</strong> Reduce uncertainty and preserve operations under geopolitical pressure.</div>
              </div>
            </aside>
          </section>

          {/* KEY RISKS */}
          <section id="risks" className="mt-10">
            <h2 className="text-2xl font-semibold">Key Risks</h2>
            <p className="text-slate-300 mt-2">Risks that are elevated during geopolitical tensions — prioritized for quick executive awareness.</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {risks.map((r, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="bg-white/4 rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center text-white">
                    <div className="text-white">{r.icon}</div>
                  </div>
                  <h4 className="font-semibold">{r.title}</h4>
                  <p className="text-slate-200 text-sm">{r.text}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* SERVICES & SOLUTIONS */}
          <section id="services" className="mt-10">
            <Service/>
          </section>

          {/* TOOLS & TECHNOLOGIES */}
          <section id="tools" className="mt-10 bg-white/3 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-black">Advanced Tools & Technologies We Expertise In</h2>
            <p className="text-sm text-slate-700 mt-2">A focused set of capabilities and platforms Mociber uses to manage geopolitical cyber risk (presentation-friendly).</p>

            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-slate-800">
              <ul className="space-y-2">
                {tools.slice(0, Math.ceil(tools.length / 2)).map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-black/80" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {tools.slice(Math.ceil(tools.length / 2)).map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-black/80" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA / CONTACT */}
          <section id="contact" className="mt-10 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 bg-white/4 rounded-2xl p-6">
              <ContactForm />
            </div>

            <aside className="bg-white/6 rounded-2xl p-6">
              <h3 className="font-semibold">Quick Contacts</h3>
              <div className="mt-3 text-slate-200 text-sm">
                <div><strong>Sales:</strong> <a className="underline" href="mailto:sales@mociber.com">sales@mociber.com</a></div>
                <div className="mt-2"><strong>Security Ops:</strong> <a className="underline" href="mailto:soc@mociber.com">soc@mociber.com</a></div>
                <div className="mt-3 text-xs text-slate-300">We respond to enterprise enquiries within 48 hours (business days).</div>
              </div>
              <div className="mt-6 border-t border-white/8 pt-4 text-sm text-slate-300">
                <div><strong>Affiliations:</strong></div>
                <div className="mt-2">ISO 27001 | NIST CSF | Cloud Security Alliance</div>
              </div>
            </aside>
          </section>

        </div>
      </div>
    </>
  );
}
