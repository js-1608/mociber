"use client";
import ContactCta from "@/components/ContactCta";
import React, { useState } from "react";

/**
 * IndustryStartupsCybersecurity.jsx
 * - Tailwind CSS required
 * - Drop into pages/ or components/ and wire APIs where noted
 *
 * Props:
 * - companyName (string)
 * - heroImg (string) override hero image
 * - onContact (fn) optional callback receiving form data
 *
 * Replace sample data with your real content as needed.
 */

export default function Startup({
  companyName = "Mociber",
  heroImg = "/Banners/About.jpg",
  onContact = null,
}) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Basic client-side validation
    if (!form.name || !form.email) return alert("Please enter name and email.");
    // If caller provided handler, call it
    if (typeof onContact === "function") {
      onContact(form);
    }
    // TODO: replace with API call (POST to /api/leads) in production
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  const offerings = [
    {
      id: "o1",
      title: "Security-by-Design Architecture",
      desc: "Embed security into product and platform decisions early — threat models, secure defaults, and architecture reviews.",
      icon: "🏗️",
    },
    {
      id: "o2",
      title: "Lean Incident Response",
      desc: "Practical runbooks and playbooks for fast containment, tailored for small teams with limited resources.",
      icon: "🚨",
    },
    {
      id: "o3",
      title: "DevSecOps & CI/CD Security",
      desc: "Automated SCA, SAST, dependency management and security gates straight into CI pipelines.",
      icon: "⚙️",
    },
    {
      id: "o4",
      title: "Threat Intelligence for Startups",
      desc: "Relevant, noise-reduced signals and prioritized IOCs so you act on what's important, not everything.",
      icon: "🔎",
    },
  ];

  const stats = [
    { id: "s1", value: "3–5x", label: "Faster incident containment" },
    { id: "s2", value: "60%", label: "Reduction in false positives" },
    { id: "s3", value: "95%", label: "Dev pipeline coverage (SAST/SCA)" },
  ];

  const caseStudies = [
    {
      id: "c1",
      title: "Seed-stage SaaS: achieved SOC-lite in 6 weeks",
      company: "SecuredApp",
      snippet:
        "Implemented automated SCA + incident playbooks — reduced mean time to detect by 4x and freed developer time.",
    },
    {
      id: "c2",
      title: "Series A Fintech: PCI-lite readiness",
      company: "FinStart",
      snippet:
        "Architected tokenization model and introduced continuous compliance checks to accelerate customer onboarding.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(3,33,82,0.7), rgba(3,33,82,0.6)), url(${heroImg})` }}
        aria-label="Startups in cybersecurity hero"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <p className="uppercase text-sm tracking-widest text-amber-200">Industry focus</p>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
                Security solutions for startups — move fast, stay secure
              </h1>
              <p className="mt-4 text-slate-200 max-w-xl">
                We help early-stage and growth-stage cybersecurity startups build secure products, scale operations, and gain customer trust — without slowing development.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-block px-5 py-3 bg-amber-500 text-black font-semibold rounded-lg shadow hover:scale-[1.02] transition">
                  Request a Demo
                </a>
                <a href="#offerings" className="inline-block px-5 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
                  See Offerings
                </a>
              </div>

              {/* quick stats */}
              <ul className="mt-8 flex gap-6">
                {stats.map((s) => (
                  <li key={s.id} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold">{s.value}</span>
                    <span className="text-sm text-slate-200">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block rounded-xl overflow-hidden shadow-lg">
              {/* illustrative panel — replace with real screenshot or product image */}
              <div className="bg-white p-6">
                <h3 className="text-lg font-semibold mb-2">Startup quick pack</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Pre-built security templates, starter playbooks, and CI/CD integrations to secure your MVP quickly.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-none bg-slate-100 rounded p-2">🔧</div>
                    <div>
                      <div className="font-medium">Automated dependency scanning</div>
                      <div className="text-xs text-slate-500">Weekly scans with prioritized fixes</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-none bg-slate-100 rounded p-2">🧭</div>
                    <div>
                      <div className="font-medium">Threat mapping</div>
                      <div className="text-xs text-slate-500">Focused on your tech stack and market</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <a href="#contact" className="inline-block px-4 py-2 bg-[#032152] text-white rounded">Talk to an engineer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STARTUPS CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Why startups choose us</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            We align security goals with product velocity. Our approach focuses on high-impact, low-friction controls that free your team to build.
          </p>

          <div id="offerings" className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o) => (
              <div key={o.id} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
                <div className="text-2xl">{o.icon}</div>
                <h3 className="mt-3 font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES / SUCCESS */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Startup success stories</h2>
              <p className="text-slate-600 mt-1">Small teams, big outcomes — real examples.</p>
            </div>
            <a href="#resources" className="text-sm text-amber-600">See all resources →</a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {caseStudies.map((c) => (
              <blockquote key={c.id} className="p-5 rounded-lg border-l-4 border-amber-300 bg-amber-50">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-slate-700 mt-2">{c.snippet}</p>
                <footer className="text-xs text-slate-500 mt-3">— {c.company}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES CTA */}
      <section id="resources" className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-slate-800 to-[#032152] text-white rounded-xl p-8">
          <div>
            <h3 className="text-2xl font-bold">Resources tailored for startup founders & engineers</h3>
            <p className="mt-2 text-slate-200 max-w-xl">E-books, playbooks, and live workshops to help your security and product teams ship with confidence.</p>
            <div className="mt-4 flex gap-3">
              <a href="/ebooks" className="px-4 py-2 bg-amber-400 text-black rounded font-semibold">Download E-books</a>
              <a href="/webinars" className="px-4 py-2 border border-white/30 rounded">Watch Webinars</a>
            </div>
          </div>
          <div className="text-sm text-slate-200">
            <ul className="space-y-2">
              <li>✅ Starter security blueprint for SaaS</li>
              <li>✅ CI/CD security checklist</li>
              <li>✅ Incident response templates</li>
            </ul>
          </div>
        </div>
      </section>

        {/* CONTACT FORM */}

        <ContactCta/>
    </main>
  );
}
