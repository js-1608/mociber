import { motion } from "framer-motion";

/**
 * KeyRisks
 * Usage:
 * <KeyRisks
 *   title="Key Cybersecurity Risks"
 *   subtitle="Top risks enterprises face — prioritized for impact and exploitability."
 *   risks={risks}
 * />
 */

export default function KeyRisks({
  title = "Key Risks",
  subtitle,
  risks = [],
}) {
  return (
    <section
      id="risks"
      className="relative mt-20 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b to-[#081a33] from-[#020617]" />

      <div className="max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Risk Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((risk, idx) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-[#4da3ff]/40 transition"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-[#4da3ff]/10 to-transparent" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-linear-to-br from-[#e6f0ff] to-white flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#032152]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-white font-semibold text-lg leading-snug">
                    {risk.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {risk.subtext}
                  </p>
                </div>

                {/* Accent line */}
                <span className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-[#4da3ff]/40 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
