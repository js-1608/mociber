// ValuesSection.jsx
import ContactCta from "@/components/ContactCta";
import CountriesSection from "@/components/Countries";
import HeroBanner from "@/components/ServiceHero";
import OurTeamSection from "@/components/Team";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";



export default function About() {
    const imgMain = "/underfourty/1 (1).jpg";

    const pillars = [
        {
            title: "Right Mindset",
            desc: "We think with clarity, purpose, and a customer-first attitude.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 3" />
                </svg>
            ),
        },
        {
            title: "Right Concept",
            desc: "We design ideas that are simple, secure, and scalable.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
            ),
        },
        {
            title: "Right Team",
            desc: "We unite experts who innovate with agility, intelligence, and trust.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m1-6a4 4 0 11-8 0 4 4 0 018 0zm8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            title: "Right Solution",
            desc: "We deliver tailored, outcome-driven solutions that fit your business.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19.4 15a7 7 0 10-14.8 0" />
                </svg>
            ),
        },
        {
            title: "Right Delivery",
            desc: "We execute with precision, transparency, and measurable impact.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4" />
                </svg>
            ),
        },
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
            <section className="py-16 px-6 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left: image collage */}
                    <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
                        <div className="w-full relative">
                            {/* big main image */}
                            <div className="rounded-2xl overflow-hidden border border-white/6 shadow-lg">
                                <img

                                    src={imgMain}
                                    alt="Team discussing"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: heading + cards */}
                    <div className="lg:col-span-6">
                        <div className="max-w-4xl lg:ml-6">
                            <div className="mb-4 inline-flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                                <span className="text-sm bg-[#0b1220] px-3 py-1 rounded-full text-blue-200 border border-white/5">Our Values</span>
                            </div>

                            <h2 className=" text-3xl md:text-4xl font-extrabold  mb-5" data-aos="fade-up">
                                We make complex cybersecurity & digital  <span className="text-blue-300">transformation simple.</span>
                            </h2>

                            <p className="text-gray-300 mb-8">
                                Too many businesses live in fear of what they don’t understand — endless tools, constant alerts, and fragmented processes. At Mociber, we simplify the complexity with clear strategy, intelligent automation, and trust-first engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-linear-to-b from-[#000A1F] to-[#011f52] text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Heading + image */}
                    <div className="lg:col-span-5">
                        <h3 className="text-sm uppercase text-gray-400 mb-4">Vision  Mission & Values</h3>
                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-6">
                            Simplifying the Future with Emerging Technologies. 
                            </h2>

                        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                            <img src="/about/vision.jpg" alt="Robot" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Right: Vision + Mission */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="pb-4">
                                <h4 className="text-lg font-semibold text-white">Our Mision</h4>
                                <div className="h-0.5 w-24 bg-cyan-400 my-3 rounded" />
                                <p className="text-gray-300">
                                    To enable organizations to thrive in the digital age by protecting their sensitive data and critical systems from emerging threats, and contribute to making the world a sustainable place for ourselves and future generations.                                    </p>
                            </div>

                            <div className="pb-4">
                                <h4 className="text-lg font-semibold text-white">Our Vission</h4>
                                <div className="h-0.5 w-24 bg-cyan-400 my-3 rounded" />
                                <p className="text-gray-300">
                                    To be a trusted strategic partner of organizations, institutions, and government agencies in the field of cybersecurity, business continuity, digital transformation, and sustainability.    </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white">Our Values</h4>
                                <div className="h-0.5 w-24 bg-cyan-400 my-3 rounded" />

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className=" text-cyan-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20l9-12H3l9 12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Agility- Move fast, adapt faster</div>
                                            {/* <p className="text-gray-400 text-sm">We design advanced solutions that push the boundaries of robotics and AI to solve real-world problems.</p> */}
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className=" text-cyan-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20l9-12H3l9 12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Innovation – Always building what’s next</div>
                                            {/* <p className="text-gray-400 text-sm">We design advanced solutions that push the boundaries of robotics and AI to solve real-world problems.</p> */}
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className=" text-cyan-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20l9-12H3l9 12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Intelligence – Data-driven decisions</div>
                                            {/* <p className="text-gray-400 text-sm">We design advanced solutions that push the boundaries of robotics and AI to solve real-world problems.</p> */}
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className=" text-cyan-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20l9-12H3l9 12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Trust - Integrity at every step</div>
                                            {/* <p className="text-gray-400 text-sm">We design advanced solutions that push the boundaries of robotics and AI to solve real-world problems.</p> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <CountriesSection />

            <section className="py-16 px-6 ">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-blue-200" >
                                <span className="w-2 h-2 rounded-full bg-blue-400" />
                               Our Business Approach
                            </div>
                            <h2 className="mt-2 text-3xl font-extrabold">How we deliver predictable, secure outcomes</h2>
                            <p className="mt-2 text-gray-200 max-w-2xl">We follow a disciplined, customer-first approach across mindset, concept, team, solution and delivery — ensuring every engagement is clear, measurable, and aligned to your business goals.</p>
                        </div>
                        <div className="hidden md:flex items-center gap-3">
                            {/* <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium shadow">Get a roadmap</button> */}
                            <Link to="/contact" className="px-4 py-2 rounded-lg border border-slate-200">Connect Now</Link>
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <article key={i} className="group bg-white/5 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                                            {p.icon}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-lg font-semibold ">{p.title}</h3>
                                        <p className="mt-2 text-sm">{p.desc}</p>
                                    </div>
                                </div>

                                {/* <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-400">Approach {i + 1}</div>
                                    <a href="#" className="text-emerald-600 text-sm font-medium">Read case study →</a>
                                </div> */}
                            </article>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    {/* <div className="mt-8 md:hidden flex gap-3">
                        <button className="flex-1 px-4 py-3 rounded-lg bg-emerald-600 text-white font-medium">Get a roadmap</button>
                        <button className="flex-1 px-4 py-3 rounded-lg border border-slate-200">Learn more</button>
                    </div> */}
                </div>
            </section>
            <OurTeamSection />
            <ContactCta />
            <WhyMociber/>


        </>
    );
}



// WhyMociber.jsx
// Small responsive React + Tailwind section that highlights Mociber's key stats

const stats = [
  { value: "5+", label: "Years Experience", sub: "Deep industry experience" },
  { value: "50+", label: "Niche Talent", sub: "Specialised security experts" },
  { value: "10+", label: "Countries", sub: "Global presence & partners" },
  { value: "200+", label: "Media Coverage", sub: "Thought leadership & press" },
];

 function WhyMociber() {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-[#050617] via-[#071026] to-[#061229] text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div>
            <h3 className="text-sm uppercase text-blue-300">Why Mociber</h3>
            <h2 className="text-3xl font-extrabold mt-2">Proven security leadership that simplifies complexity</h2>
            <p className="text-gray-300 mt-3 max-w-xl">We combine deep technical expertise, disciplined delivery, and customer-first thinking to protect organisations and enable digital transformation — reliably and sustainably.</p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold shadow">Talk to an Expert</Link>
            {/* <Link to="" className="px-4 py-2 rounded-lg border border-white/10">Explore Services</Link> */}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${i === 1 ? 'bg-white/5 border-white/10' : 'bg-white/3 border-white/5'} shadow-sm`}> 
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="mt-2 text-sm text-gray-200">{s.label}</div>
              <div className="mt-3 text-xs text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}