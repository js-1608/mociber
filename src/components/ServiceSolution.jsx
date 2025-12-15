import { motion } from "framer-motion";

export default function ServiceSolution({
  title = "Mociber’s Cybersecurity Services & Solutions",
  subtitle = "Industry-grade cybersecurity, built for enterprise scale.",
  services = [],
}) {
  return (
    <section className="relative px-6 py-24 mt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#000A1F] via-[#0b1e3c] to-[#000A1F]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Services Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4da3ff]/40 to-transparent" />

          <div className="space-y-10">
            {services.map((service, idx) => {
              // const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="relative flex gap-6"
                >
                  {/* Icon Rail */}
                  <div className="hidden lg:flex flex-col items-center">
                    {/* <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e6f0ff] to-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-[#032152]" />
                    </div> */}
                  </div>

                  {/* Card */}
                  <div className="group flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-[#4da3ff]/40 transition">
                    <div className="flex items-start gap-4">
                      {/* Mobile Icon */}
                      <div className="lg:hidden w-12 h-12 rounded-xl bg-linear-to-br from-[#e6f0ff] to-white flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#032152]" />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-xl">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>

                        {service.extra && (
                          <p className="mt-4 text-sm text-[#8bbcff] font-medium">
                            {service.extra}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Accent */}
                    <span className="block mt-6 h-px w-full bg-linear-to-r from-transparent via-[#4da3ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
