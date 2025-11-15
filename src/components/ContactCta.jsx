import React, { useState } from "react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

export default function ContactCta() {
  
    return (
        <div className="min-h-screen flex items-center justify-center  px-4 py-16">
            {/* Outer gradient frame */}
            <div className="w-full max-w-7xl p-1 rounded-3xl bg-linear-to-br from-[#18024e]  to-[#5b2bd6]  shadow-2xl">
                {/* Inner container (dark panels) */}
                <div className="bg-[#070612] rounded-3xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left card */}
                    <div className="relative rounded-2xl bg-linear-to-b from-[#090613] to-[#0e0816] p-8 overflow-hidden border border-white/5">
                        {/* small top badge */}
                        <div className="inline-flex items-center gap-2 bg-[#0c0620] text-sm border  text-[#dcd6ff] px-3 py-1 rounded-full mb-6 w-max">
                            <svg className="w-4 h-4 text-[#b9a7ff]" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2v20M2 12h20" stroke="#b9a7ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            You are here
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                            Let's Connect                        </h2>
                        <p className="text-sm text-gray-300 mb-6 max-w-md">
                           Initiating your journey to cybersecurity and resilience.
                        </p>

                        {/* contact items */}
                        <ul className="space-y-4 text-gray-200">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.63-3.01 19 19 0 0 1-6-6A19 19 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.86.35 1.7.68 2.5a1 1 0 0 1-.24 1l-1.6 1.6a16 16 0 0 0 6 6l1.6-1.6a1 1 0 0 1 1-.24c.8.33 1.64.56 2.5.68a1 1 0 0 1 .75 1V22z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">+(91) 9811257526</span>
                            </li>

                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 8l7.5 5L21 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">connect@mociber.com</span>
                            </li>

                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center text-orange-300">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">HN 470, White House Building, Ward 17, Noorpur, Uttar Pradesh, India, 246734</span>
                            </li>
                        </ul>

                        {/* decorative orb bottom-left */}
                        {/* <div className="absolute left-6 bottom-6 w-44 h-36 rounded-full bg-gradient-to-tr from-[#6f2df2] via-[#7f5cff] to-[#2b1b6b] opacity-90 filter blur-sm transform rotate-12 pointer-events-none" aria-hidden /> */}
                    </div>

                    {/* Right card: form */}
                    <div className=" border-white/5 shadow-xl">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}
