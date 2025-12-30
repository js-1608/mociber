import React from 'react';
import ClientsSection from '@/components/ClientSection';
import { Shield, Gem, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PartnersCarousel from '@/components/partners';
import Hero from '@/components/Hero';
import { useState, useEffect } from 'react';
import ContactCta from '@/components/ContactCta';
import IndustriesSection from '@/components/Industries';
import TestimonialsSection from '@/components/Testimonial';
import TrustedLogos from '@/components/TrustedLogos';
import { Link } from 'react-router';
import Video from '@/components/Video';
import Service from '@/components/Service';
import LatestBlogsByTag from '@/industries/IndustiresBlogs';

const Home = () => {



    const faqs = [
        {
            q: "Q1: Why is cybersecurity important for my business?",
            a:
                "Cybersecurity protects your business from data breaches, financial loss, and reputational damage. Implementing strong security controls helps maintain customer trust and keeps your operations running.",
        },
        {
            q: "Q2: What industries do you provide cybersecurity services for?",
            a:
                "We work with businesses across many industries including finance, healthcare, e-commerce, and technology—tailoring solutions to each sector’s compliance and risk profile.",
        },
        {
            q: "Q3: Do small businesses really need cybersecurity?",
            a:
                "Yes. Small businesses are often targets because they may have weaker defenses. Security measures scaled to your size can prevent costly incidents.",
        },
        {
            q: "Q4: How quickly can you respond to a cyber threat?",
            a:
                "Our incident response team can be activated immediately. Response time depends on the service level but we prioritize rapid triage and containment.",
        },
        {
            q: "Q5: Is your solution customizable for my industry?",
            a:
                "Absolutely — we assess your systems and risks, then combine tools, policies, and training that fit your industry and business needs.",
        },
    ];

    function IconPlus() {
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    function IconMinus() {
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }




    const blogs = [
        {
            img: "/blogimages/blog (1).jpg",
            title: "Digital Leadership in the Age of AI and ML",
            author: "Johnson",
            date: "11/12/2024",
        },
        {
            img: "/blogimages/blog (2).jpg",
            title: "The changing roles of CISOs and GRC Consultants",
            author: "Johnson",
            date: "18/12/2024",
        },
        {
            img: "/blogimages/blog (3).jpg",
            title: "How Mociber transforming the change by emerging technologies",
            author: "Johnson",
            date: "27/12/2024",
        },
    ];

    const [openIndex, setOpenIndex] = useState(1); // default open second item like screenshot

    const toggle = (i) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };
    return (
        <>
            <Hero />
            <ClientsSection />
            <div className="w-full py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="relative col-span-1 order-1 lg:order-none">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl flex items-start">
                                <div className="w-full h-full">
                                    <img
                                        src="/underfourty/1 (2).png"
                                        alt="About Us"
                                        className="w-full h-auto object-cover rounded-3xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-8 col-span-2 order-2 lg:order-none">
                            {/* Main Description */}
                            <div className="space-y-6">
                                <h2 class="relative text-2xl md:text-5xl font-bold  text-white " data-aos="fade-up">
                                    Message from Founder & CEO
                                </h2>
                                <p>“We started Mociber because the world didn’t need another security company — it needed a simpler one.”</p>
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">

                                    Too many businesses live in fear of what they don’t understand — endless tools,
                                    constant alerts, and complex technologies that solve one problem but create three more. We saw this
                                    struggle and decided to change it. At Mociber, we believe security is not just about firewalls and
                                    compliance — it’s about peace of mind, continuity, and the freedom to grow without fear.
                                    <br />
                                    Our mission is to simplify cybersecurity and digital transformation through intelligence,
                                    automation, and human understanding. Guided by Agility, Innovation, Intelligence, and Trust,
                                    we build solutions that evolve with your business — proactive, adaptive, and beautifully simple. Because when technology gets human, transformation becomes real.

                                    <br />
                                    We harness the power of AI, automation, and emerging technologies to create proactive defenses —
                                    from predictive threat analytics and zero-trust frameworks to managed detection, response,
                                    and resilience systems.

                                </p>
                            </div>

                            {/* Team Members Section */}
                            {/* <div className="flex flex-wrap items-center gap-4">
                                <div className="flex -space-x-3">
                                    {teamMembers.map((member, index) => (
                                        <div
                                            key={member.id}
                                            className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-[#0d1b2a] overflow-hidden"
                                        >
                                            <div
                                                className={`w-full h-full ${index === 0
                                                    ? "bg-gradient-to-br from-gray-400 to-gray-600"
                                                    : index === 1
                                                        ? "bg-gradient-to-br from-blue-400 to-blue-600"
                                                        : index === 2
                                                            ? "bg-gradient-to-br from-amber-400 to-amber-600"
                                                            : index === 3
                                                                ? "bg-gradient-to-br from-green-400 to-green-600"
                                                                : "bg-gradient-to-br from-pink-400 to-pink-600"
                                                    } flex items-center justify-center text-white font-semibold`}
                                            >
                                                {member.name.charAt(0)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Our experts combine advanced
                                    <br className="hidden sm:block" /> technology with years
                                </p>
                            </div> */}

                            {/* Bottom Section - Reviews and Founder */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                                {/* Google Reviews */}
                                {/* <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                                <path
                                                    fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                />
                                                <path
                                                    fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                />
                                                <path
                                                    fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                />
                                                <path
                                                    fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-white font-semibold text-lg">
                                            Google Reviews
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-blue-500 text-blue-500"
                                            />
                                        ))}
                                        <span className="text-white font-bold text-xl ml-2">(4.9)</span>
                                    </div>
                                </div> */}

                                {/* Founder Info */}
                                <div className="space-y-2">
                                    <h3 className="text-white text-2xl font-bold">Mohsin Margoob</h3>
                                    <p className="text-gray-400">Founder and CEO – Mociber (Global 40 Under 40)</p>
                                </div>
                            </div>

                            {/* Circular Badge */}
                            {/* <div className="flex justify-center lg:justify-end pt-6">
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                                    <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center animate-spin-slow">
                                        <svg className="w-full h-full" viewBox="0 0 100 100">
                                            <defs>
                                                <path
                                                    id="circlePath"
                                                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                                />
                                            </defs>
                                            <text className="text-[8px] fill-white font-medium uppercase tracking-wider">
                                                <textPath href="#circlePath" startOffset="0%">
                                                    More About Us • More About Us •
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-lg m-1">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>


            </div>



            <Service />




            <Video />
            <PartnersCarousel />

            <div className="w-full py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                            {/* Header */}
                            <div>
                                <div className="flex items-center gap-2 mb-4 border p-2 w-62 rounded-full">
                                    <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                                    <span className="text-gray-400 text-sm font-medium">Manages Security Service</span>
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-6" data-aos="fade-up">
                                    Future ready AI-Driven SOCaaS that goes beyond defense
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We don't just stop attacks—we prepare your business to withstand them. By combining proactive defense, real-time intelligence, and immediate incident response.

                                </p>
                            </div>

                            {/* Stats Box */}
                            {/* <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="text-6xl font-bold text-white">95%</div>
                                        <div className="relative">
                                            <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                                                "Cybersecurity is not just about protecting systems, it's about protecting trust."
                                            </p>
                                            <div className="absolute -right-4 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                            {/* Service Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Proactive Threat Detection */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        AI-Driven Threat Detection
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We don't just wait for threats to strike - our advanced monitoring tools identify.                                    </p>
                                </div>

                                {/* Tailored Security Solutions */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Gem className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Zero Trust Cybersecurity
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Protect from zero-day threats by isolating unknowns at run-time until they are analyzed and verdict, good or bad.
                                    </p>
                                </div>
                                {/* Proactive Threat Detection */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Endpoints, Networks, Clouds
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        protects endpoints, networks, and cloud workloads from zero-day threats and allows you to run your business without fear of malware or ransomware.
                                    </p>
                                </div>

                                {/* Tailored Security Solutions */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Gem className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Embedded EPP, EDR, MDR, XDR Platform
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Complete SOC at one place SIEM, EDR, NDR, MDR, XDR as a service 24*7
                                    </p>
                                </div>
                            </div>

                            {/* <div className="w-full bg-gradient-to-r from-[#0040FF] to-[#001F5F] text-white font-semibold hover:opacity-90 rounded-lg px-5 py-2 text-center">
                                <Link to="/about">
                                    Learn More →
                                </Link>
                            </div> */}
                        </div>

                        {/* Right Side - Images Grid */}
                        <div className="relative">
                            {/* Decorative Dots */}
                            <div className="absolute -top-8 -left-8 grid grid-cols-9 gap-2">
                                {[...Array(27)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${i === 13 ? 'bg-blue-500' : 'bg-blue-900/50'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Top Left - Professional with tech background */}
                                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900">
                                    <img src="/Industry/SOC-HWCH.jpg" className='cover  w-full' alt="cybersecurity image" />
                                </div>

                                {/* Top Right - Person at desk */}
                                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900">
                                    <img src="/Industry/SOCaaS-Front Page.jpg" className='cover  h-full' alt="cybersecurity image" />

                                </div>

                                {/* Bottom - Person working at night */}
                                <div className="relative rounded-2xl overflow-hidden col-span-2 aspect-[2/1] bg-gradient-to-br from-slate-800 to-slate-950">
                                    <div className="absolute inset-0">
                                        <img src="/Industry/SOC-Benefits.jpg" alt="cybersecurity image" />

                                    </div>

                                    {/* Experience Badge */}
                                    <div className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-6 py-3 shadow-2xl backdrop-blur-sm border border-blue-400/30">
                                        <div className="flex items-center gap-3">
                                            <div className="text-white">
                                                <div className="text-3xl font-bold">5+</div>
                                            </div>
                                            <div className="text-white text-sm font-medium">
                                                Years Of Experience
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <IndustriesSection />


            {/* security implemented by */}
            <TrustedLogos />

            <div className="min-h-screen text-white flex flex-col items-center py-20 px-6">
                {/* Tag */}

                <div className="flex items-center gap-2 mb-4 border p-2 w-36 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                    <span className="text-gray-400 text-sm font-medium">Our blog post</span>
                </div>

                {/* Title */}
                <h2 className="text-center text-3xl md:text-4xl font-extrabold mt-6 mb-10" data-aos="fade-up">
                    Read Our Latest Blog
                </h2>

                {/* Blog Cards */}
                <LatestBlogsByTag tag="cybersecurity" limit={3} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
                    {blogs.map((blog, i) => (
                        <div
                            key={i}
                            className="bg-[#151522] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={blog.img}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-3 leading-snug">
                                    {blog.title}
                                </h3>
                                {/* <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <span>👤</span>
                                        <span>Posted by {blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>📅</span>
                                        <span>{blog.date}</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="min-h-screen  text-white px-6 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left column: intro */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                            <span className="text-sm bg-[#0b1220] px-3 py-1 rounded-full text-blue-200" >Frequently Asked Questions</span>
                        </div>

                        <h1 className=" text-3xl md:text-4xl font-extrabold  mb-10" data-aos="fade-up">
                            Everything you want to <span className="text-blue-300">know cybersecurity</span>
                        </h1>

                        <p className="text-gray-300 mb-8 max-w-xl">
                            From service details to protection strategies, we provide clear explanations to help you make informed decisions.
                        </p>


                        {/* <div className="pt-4">
                            <Button className="bg-gradient-to-r from-[#0040FF] to-[#001F5F] text-white font-semibold hover:opacity-90 rounded-lg px-5 py-3">
                                View All FAQs →
                            </Button>
                        </div> */}
                    </div>

                    {/* Right column: accordion */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {faqs.map((f, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div
                                        key={i}
                                        className="bg-[#0b1220] rounded-xl shadow-sm overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between p-5 cursor-pointer"
                                            onClick={() => toggle(i)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(i); }}
                                            aria-expanded={isOpen}
                                        >
                                            <div className="text-left">
                                                <div className="text-sm text-gray-300 font-medium">{f.q}</div>
                                            </div>

                                            <div className={`flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-500">
                                                    {isOpen ? <IconMinus /> : <IconPlus />}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Panel */}
                                        <div
                                            className={`px-5 pb-5 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                                            aria-hidden={!isOpen}
                                        >
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {f.a}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <TestimonialsSection />

            <ContactCta />


        </>
    );
};

export default Home;