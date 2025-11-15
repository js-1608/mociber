import React from "react"
import { motion } from "framer-motion"

export default function ClientsSection() {
    const logos = [
        "luminous", "santander", "sitemark", "bitstamp",
        "firstquadrant", "ionz", "umbrella", "realtriAI",
        "tripla", "siteGPT", "ultra", "solid"
    ]

    return (
        <>
        <section className="relative bg-[#000A1F] overflow-hidden py-36 flex flex-col items-center justify-center text-center">
            {/* Background blur effect */}

            {/* Floating Tags */}
            <motion.div
                initial={{ opacity: 0, y: -30, rotate: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hidden lg:flex absolute top-28 z-20 left-2/5 -translate-x-1/2 bg-[#0A0F2C]/80 border border-gray-700 text-gray-100 px-5 py-2 text-sm rounded-full shadow-lg backdrop-blur-md  items-center gap-2"
            >
                Agile Service
                <span className="w-0 h-0  border-l-8 border-l-transparent border-t-8 border-t-[#FF5E00] border-r-8 border-r-transparent"></span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30, rotate: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="hidden lg:flex absolute bottom-28 z-20 left-3/5 -translate-x-1/4 bg-[#0A0F2C]/80 border border-gray-700 text-gray-100 px-5 py-2 text-sm rounded-full shadow-lg backdrop-blur-md  items-center gap-2"
            >
                <span className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-[#FFD966] border-r-8 border-r-transparent"></span>
                Effective Security
            </motion.div>

            {/* Center Heading */}
            <h2 className="relative text-xl md:text-3xl font-bold z-20 text-white m-6">
                <span className="text-[#7A3EFF]">Clients</span>{" "}
                <span className="text-white">Worldwide</span>
            </h2>
            {/* <div className="absolute inset-0 bg-linear-to-b from-[#000A1F] via-[#001f5f99] to-[#000A1F] blur-4xl pointer-events-none max-w-4xl m-auto z-40"></div> */}
            <div className="absolute top-0 left-1/4 w-32 h-32 lg:w-96 lg:h-96 bg-[#000A1F]/60 lg:bg-[#000A1F]/90 rounded-full blur-3xl z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#000A1F]/60 lg:bg-[#000A1F]/90 rounded-full blur-3xl z-10"></div>

            {/* Carousels Container */}
            <div className="absolute w-full overflow-hidden py-10">
                {/* Top Row - Left to Right */}
                <motion.div
                    className="flex space-x-10 mb-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="bg-[#0A0F2C]/70 border border-gray-800 rounded-xl px-6 py-3 w-40 h-16 flex items-center justify-center text-gray-400 text-lg font-medium capitalize"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>

                {/* Bottom Row - Right to Left */}
                <motion.div
                    className="flex space-x-10"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="bg-[#0A0F2C]/70 border border-gray-800 rounded-xl px-6 py-3 w-40 h-16 flex items-center justify-center text-gray-400 text-lg font-medium capitalize"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
        </>
    )
}
