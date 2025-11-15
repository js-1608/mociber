import JobsSection from "@/components/JobSection";
import LifeAtMociberAccordion from "@/components/LifeAtMociber";
import HeroBanner from "@/components/ServiceHero";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const Career = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: "Learn Relentlessly",
            desc: "We believe growth never stops. Every project, challenge, and conversation is an opportunity to learn, upskill, and lead.",
        },
        {
            title: "Own What You Build",
            desc: "We trust our people with responsibility and autonomy — because great outcomes come from ownership, not oversight.",
        },
        {
            title: "Collaborate Without Boundaries",
            desc: "From engineers to consultants, every idea matters. We thrive in an open, inclusive culture where collaboration fuels innovation.",
        },
        {
            title: "Innovate with Purpose",
            desc: "We don’t innovate for the sake of it — we simplify, secure, and sustain businesses with real-world impact.",
        },
        {
            title: "Empower Each Other",
            desc: "We rise by lifting others. Mentorship, recognition, and support define how we grow as a team.",
        },
        {
            title: "Diversity Drives Strength",
            desc: "Different perspectives create better solutions. We celebrate individuality and value inclusion across all we do.",
        },
        {
            title: "Integrity in Action",
            desc: "Transparency, honesty, and ethics guide our work — even when no one’s watching.",
        },
        {
            title: "Balance and Well-being",
            desc: "We care about results and people. Flexibility, wellness, and respect for personal time are part of our DNA.",
        },
        {
            title: "Lead with Impact",
            desc: "We encourage everyone — from interns to leaders — to make decisions that create lasting value for our clients and communities.",
        },
        {
            title: "Build for the Future",
            desc: "Every role at Mociber contributes to shaping a safer, smarter, and sustainable digital world.",
        },
    ];
    return (
        <>
            <HeroBanner
                image="/Banners/Career.jpg"
                heading={<></>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />
            {/* <LifeAtMociberAccordion/> */}

            <section className="py-16 px-6 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left: image collage */}
                    <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
                        <div className="w-full relative">
                            {/* big main image */}
                            <div className="rounded-2xl overflow-hidden border border-white/6 shadow-lg">
                                <img

                                    src="/about/career.jpg"
                                    alt="Team discussing"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: heading + cards */}
                    <div className="lg:col-span-6">
                        <div className="max-w-4xl lg:ml-6">
                           

                            <h2 className=" text-3xl md:text-4xl font-extrabold  mb-5" data-aos="fade-up">
                                Mociber as an
                                <span className="text-blue-600">Employer</span>
                            </h2>

                            <p className="text-gray-300 mb-8">
                                At Mociber, we believe great companies are built by great people. As an employer, we foster a culture of curiosity, collaboration, and continuous growth — where every voice is heard, every idea matters, and innovation thrives. Our teams work across cybersecurity, business continuity, digital transformation, and sustainability, united by one mission: to simplify everything. We empower our people to lead with purpose, learn without limits, and create real impact — for our clients, our communities, and their own careers.                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-20 px-6">
                <div className="max-w-7xl mx-auto ">

                    {/* INTRO SECTION */}
                    <div className=" text-center">
                        <h2 className="text-4xl md:text-5xl font-bold ">
                            Life at  <span className="text-blue-600">Mociber</span>
                        </h2>

                        <p className="text-lg  leading-relaxed">
                            At Mociber, we’re simplifying complexity — securing what matters most and empowering businesses worldwide to grow fearlessly.
                        </p>
                    </div>

                    <section className="w-full">
                        <div className="max-w-7xl mx-auto">

                            {/* Transparent Frosted Background Wrapper */}
                            <div className="
                            rounded-3xl p-10 
                            backdrop-blur-2xl 
                        ">

                                <div className="grid md:grid-cols-5 gap-6">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="
                            backdrop-blur-xl 
                            border border-white/20 
                            p-6 rounded-2xl 
                            transition
                            hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                        "
                                            data-aos="fade-up"
                                        >
                                            <h3 className="text-lg font-semibold mb-2 text-white/90">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-white/70">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </section>




                </div>
            </section>
            <JobsSection />



        </>
    );
};

export default Career;