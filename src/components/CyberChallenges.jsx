import { motion } from "framer-motion";
import {
  Cloud,
  Laptop,
  Users,
  Wrench,
  Link2,
  LayoutGrid,
  FileLock,
  Skull,
} from "lucide-react";

/**
 * CyberChallenges
 * Usage:
 * <CyberChallenges challenges={challenges} />
 */

export default function CyberChallenges({
  title = "Key Challenges in Cybersecurity",
  subtitle = "Enterprises struggle with:",
  challenges = [],
  conclusion,
}) {
  return (
    <section className="relative  px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#000A1F] to-[#0c1b34]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            {title}
          </h3>
          <p className="mt-3 text-slate-300 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#4da3ff]/40 transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e6f0ff] to-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#032152]" />
                </div>

                {/* Text */}
                <p className="text-white font-medium leading-snug">
                  {item.text}
                </p>

                {/* Hover Accent */}
                <span className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-[#4da3ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion */}
        {conclusion && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-14  rounded-2xl border border-[#4da3ff]/30 bg-[#0b1e3c] p-8"
          >
            <p className="text-lg md:text-xl font-semibold text-white">
              {conclusion}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
