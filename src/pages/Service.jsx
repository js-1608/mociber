// ServiceDetail.jsx
import HeroBanner from "@/components/ServiceHero";
import React from "react";


export default function ServiceDetail() {
    return (
        <div className="min-h-screen bg-linear-to-b from-[#050613] via-[#071431] to-[#0b0b19] text-white">

            <HeroBanner
                image="service.jpg"
                heading={<><span className=" text-3xl">Identity & Access Management</span>  <span className="block text-xl">Redefining Digital Trust</span></>}
                subtext="Empower your enterprise with intelligent identity governance..."
                primaryCta={{ label: "Request a Consultation", to: "/contact" }}
                secondaryCta={{ label: "Explore Our IAM Solutions", to: "/solutions/iam" }}
            />


            {/* HERO / BREADCRUMB */}
            {/* <header className="pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-7">
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                                Secure Cloud Migration
                            </h1>
                            <p className="text-gray-300 max-w-3xl mb-6">
                                Plan, migrate and optimize your cloud estate with enterprise-grade security controls, compliance alignment, and minimal downtime.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 bg-linear-to-r from-[#0040FF] to-[#001F5F] px-5 py-3 rounded-full font-semibold shadow-lg hover:brightness-105 transition"
                                >
                                    Contact our experts
                                </a>

                                <a
                                    href="#case-studies"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/7 transition"
                                >
                                    View case studies
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-white/6">
                                <img
                                    src="https://images.unsplash.com/photo-1605902711622-cfb43c44367e?q=80&w=1200&auto=format&fit=crop"
                                    alt="Cloud migration"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4 bg-gradient-to-t from-black/50 to-transparent">
                                    <p className="text-xs text-gray-300">Service snapshot</p>
                                    <h3 className="text-lg font-semibold">Enterprise cloud migration</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}

            {/* MAIN CONTENT + RIGHT SIDEBAR */}
            <main className="max-w-7xl mx-auto px-6 pb-20 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left — main content */}
                    <article className="lg:col-span-8 space-y-10">
                        {/* Overview / Key benefits */}
                        <section className="bg-[#071026] rounded-2xl p-6 border border-white/6 shadow-sm">
                            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                            <p className="text-gray-300 mb-4">
                                Our Secure Cloud Migration service helps organizations move workloads to public, private, or hybrid clouds with a secure-by-design approach. We reduce risk through automated security checks, validated migration runbooks, and continuous monitoring.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Planning & assessment",
                                    "Security & compliance",
                                    "Automated migration",
                                    "Validation & optimization",
                                ].map((b) => (
                                    <div key={b} className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-md bg-linear-to-br from-[#6f2df2] to-[#5b2bd6] flex items-center justify-center text-white text-lg font-bold">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{b}</h4>
                                            <p className="text-gray-400 text-sm">Short description about {b.toLowerCase()} and why it matters.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technical capabilities */}
                        <section className="space-y-6">
                            <h3 className="text-xl font-semibold">Technical capabilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#071a2f] rounded-xl p-5 border border-white/6">
                                    <h4 className="font-semibold mb-2">Cloud security architecture</h4>
                                    <p className="text-gray-300 text-sm mb-3">Design secure landing zones with least-privilege access, network segmentation, and encrypted data flows.</p>
                                    <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                                        <li>Identity & access management</li>
                                        <li>Network micro-segmentation</li>
                                        <li>Encrypted storage & transit</li>
                                    </ul>
                                </div>

                                <div className="bg-[#071a2f] rounded-xl p-5 border border-white/6">
                                    <h4 className="font-semibold mb-2">Automation & migration tools</h4>
                                    <p className="text-gray-300 text-sm mb-3">Use tested runbooks and automated tooling to reduce human error and speed migrations.</p>
                                    <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                                        <li>Validated runbooks</li>
                                        <li>Automated cutover</li>
                                        <li>Rollback & failover plans</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Process / How we work */}
                        <section className="bg-[#071026] rounded-2xl p-6 border border-white/6">
                            <h3 className="text-xl font-semibold mb-4">How we work</h3>
                            <ol className="space-y-4 text-sm text-gray-300">
                                <li>
                                    <strong className="text-white">Assess:</strong> Discovery workshops and risk assessment to build the migration strategy.
                                </li>
                                <li>
                                    <strong className="text-white">Plan:</strong> Design secure landing zones and migration runbooks.
                                </li>
                                <li>
                                    <strong className="text-white">Migrate:</strong> Automated migrations with validation and monitoring.
                                </li>
                                <li>
                                    <strong className="text-white">Optimize:</strong> Ongoing cost & performance tuning and managed security.
                                </li>
                            </ol>
                        </section>

                        {/* Case studies */}
                        <section id="case-studies" className="space-y-6">
                            <h3 className="text-xl font-semibold">Case studies</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2].map((i) => (
                                    <article key={i} className="bg-[#071226] rounded-xl overflow-hidden border border-white/6 shadow-md">
                                        <img
                                            src={`https://images.unsplash.com/photo-1505686994434-e3cc3d4a5f6d?q=80&w=1200&auto=format&fit=crop`}
                                            alt={`case ${i}`}
                                            className="w-full h-44 object-cover"
                                        />
                                        <div className="p-5">
                                            <h4 className="font-semibold mb-2">Cloud migration for GlobalBank</h4>
                                            <p className="text-sm text-gray-300 mb-3">Reduced TCO by 32% and improved security posture across core systems.</p>
                                            <a href="#" className="text-sm inline-flex items-center gap-2 text-indigo-300">Read story →</a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="bg-[#071026] rounded-2xl p-6 border border-white/6">
                            <h3 className="text-xl font-semibold mb-4">Frequently asked questions</h3>
                            <dl className="space-y-3 text-sm text-gray-300">
                                <div>
                                    <dt className="font-medium text-white">How long does a migration typically take?</dt>
                                    <dd className="mt-1">Timeline depends on scope — small apps: weeks, large estates: months. Our runbooks reduce downtime.</dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-white">Do you support hybrid cloud?</dt>
                                    <dd className="mt-1">Yes — we design secure hybrid topologies and seamless connectivity between on-prem and cloud.</dd>
                                </div>
                            </dl>
                        </section>
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

                            {/* Downloadable resources */}
                            <div className="bg-[#071226] p-6 rounded-xl border border-white/6">
                                <h4 className="text-lg font-semibold mb-3">Resources</h4>
                                <ul className="text-sm text-gray-300 space-y-2">
                                    <li><a href="#" className="text-indigo-300 hover:underline">Migration checklist (PDF)</a></li>
                                    <li><a href="#" className="text-indigo-300 hover:underline">Security design guide</a></li>
                                </ul>
                            </div>

                            {/* Contact details */}
                            <div className="bg-[#071226] p-6 rounded-xl border border-white/6">
                                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                                <p className="text-sm text-gray-300">sales@yourcompany.com</p>
                                <p className="text-sm text-gray-300">+1 (555) 555-5555</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>



        </div>
    );
}
