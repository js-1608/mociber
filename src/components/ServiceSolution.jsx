import { motion } from "framer-motion";

export default function ServiceSolution({ heading, solutions }) {
  return (
    <section className="relative px-6 py-18 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b to-[#081a33] via-[#020617] from-[#000A1F]" />

      {/* Subtle Grid Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top,_#4da3ff22,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto ">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight max-w-4xl text-center m-auto">
              {heading}
            </h2>

        {/* RIGHT: Service Cards */}
        <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8 mt-16">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-7 backdrop-blur-md hover:border-[#4da3ff]/40 hover:shadow-[0_0_30px_#4da3ff1a] transition"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e6f0ff] to-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#032152]" />
                  </div>

                  {/* Index */}
                  <span className="text-xs font-bold text-[#4da3ff]/60">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-white font-semibold text-lg leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Extra */}
                {item.extra && (
                  <p className="mt-4 text-xs text-[#8bbcff] font-medium">
                    {item.extra}
                  </p>
                )}

                {/* Bottom Glow */}
                <span className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-[#4da3ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
