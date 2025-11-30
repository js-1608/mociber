import React, { useState } from "react";
import { Mail, Phone, ShieldCheck, AlertTriangle, CloudLightning, Lock, Users, Video } from "lucide-react";
import { motion } from "framer-motion";
import ContactCta from "@/components/ContactCta";
import HeroBanner from "@/components/ServiceHero";
import Service from "@/components/Service";
import { Link } from "react-router";
import TrustedLogos from "@/components/TrustedLogos";
import ToolsTabs from "@/components/Tools";
import YouTubeAutoplaySection from "@/components/Video";

// MociberCybersecurityPage.jsx
// Single-file React component styled with Tailwind CSS
// Default export: <MociberCybersecurityPage />

export default function MociberCybersecurityPage() {


    const risks = [
        { title: "Ransomware & Extortion", icon: ShieldCheck },
        { title: "Zero-Day Exploits", icon: AlertTriangle },
        { title: "Supply Chain Attacks", icon: Users },
        { title: "Cloud Misconfigurations", icon: CloudLightning },
        { title: "Identity & Access Compromise", icon: Lock },
        { title: "Phishing & Social Engineering", icon: Mail },
        { title: "AI-Powered Attacks", icon: AlertTriangle },
        { title: "DDoS & Infrastructure Disruption", icon: ShieldCheck },
    ];


    const tools = [
        "CrowdStrike Falcon",
        "SentinelOne",
        "Microsoft Defender XDR",
        "Splunk",
        "Tenable One",
        "Wiz",
        "Recorded Future",
        "Okta",
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
                        <div className=" rounded-2xl py-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold mt-6 mb-10">Intelligence-led Cybersecurity for the Modern Enterprise</h2>
                            <p className="mt-4 text-slate-300">In an era where digital transformation drives growth, Mociber helps organizations stay resilient with AI-enabled, compliance-first cybersecurity across network, cloud, endpoint, identity, and OT/IoT systems.</p>

                            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-6 h-6 text-[#032152] mt-1" />
                                    <div>
                                        <strong>24×7 SOC</strong>
                                        <div className="text-sm text-slate-500">Real-time detection & response</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Lock className="w-6 h-6 text-[#032152] mt-1" />
                                    <div>
                                        <strong>Zero Trust</strong>
                                        <div className="text-sm text-slate-500">Identity-first secure architecture</div>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-6 flex gap-3">
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#032152] text-white px-5 py-3 rounded-md">Contact Sales</Link>
                                {/* <a href="#services" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-md">Our Services</a> */}
                            </div>

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
                            <img src="https://skill-mine.com/wp-content/uploads/2024/06/12.jpg" className="w-full h-auto object-cover object-center" />
                        </div>
                    </div>
                </motion.section>


                <TrustedLogos />


                {/* PROBLEM */}
                <section id="problems" className="mt-8  gap-6 max-w-7xl m-auto ">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-2xl bg-gradient-to-br from-[#061025] to-[#00102a] shadow-2xl ring-1 ring-white/5 p-8 "
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white/95 mb-4">
                            The Problem — Modern Cybersecurity Challenges
                        </h3>

                        <p className="text-slate-300  leading-relaxed ">
                            Threats evolve faster than organizations can adapt. Limited visibility,
                            legacy systems, cloud misconfigurations and a global skills shortage make
                            it hard to achieve comprehensive protection.
                        </p>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2  text-md text-slate-200">
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Fragmented toolsets with poor central visibility
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Rapid cloud migrations creating misconfigurations
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Shortage of skilled security professionals
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                AI-driven threat automation and deepfakes
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Third-party & supply-chain risks
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3ec3ff] mt-2" />
                                Regulatory complexity and compliance gaps
                            </li>
                        </ul>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                            <div className="inline-flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                                <Lock className="w-5 h-5 text-[#bfe8ff]" />
                                <div>
                                    <div className="text-md text-slate-200 font-semibold">Reduced breach window</div>
                                    <div className="text-xs text-slate-400">Faster containment and recovery</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                                <ShieldCheck className="w-5 h-5 text-[#bfe8ff]" />
                                <div>
                                    <div className="text-md text-slate-200 font-semibold">Faster mean time to detect</div>
                                    <div className="text-xs text-slate-400">Actionable alerts aligned to risk</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>




                {/* KEY RISKS */}
                <section id="risks" className="mt-10 max-w-7xl m-auto">
                    <h3 className="text-3xl md:text-3xl font-semibold text-center">Key Risks</h3>
                    <p className="text-slate-200 mt-2 text-center">Top risks enterprises face — prioritized for impact and exploitability.</p>

                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {risks.map((r, idx) => {
                            const Icon = r.icon;
                            return (
                                <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * idx }} className="bg-white/4 rounded-xl p-4 shadow-sm" >
                                    <div className=" items-start gap-3 "  data-aos="zoom-in">
                                        <div className="w-16 h-16 rounded-lg m-auto bg-gradient-to-br from-[#e6f0ff] to-white flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-[#032152]" />
                                        </div>
                                        <div className="text-center mt-4">
                                            <div className="font-medium text-lg">{r.title}</div>
                                            <div className="text-sm text-slate-500 mt-1">High-impact & evolving attack vector</div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>



                <YouTubeAutoplaySection />
                {/* SERVICES */}
                <Service />
                <ToolsTabs />



                {/* CTA / CONTACT */}
                <ContactCta id="contact" />

            </main>
        </div>
    );
}
