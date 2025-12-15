import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * FaqSection
 * Usage:
 * <FaqSection
 *   title="Cybersecurity – FAQs"
 *   subtitle="Common questions about our cybersecurity services, platforms, and approach."
 *   faqs={faqs}
 * />
 */

export default function FaqSection({
  title = "FAQs",
  subtitle,
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative px-6 py-20 ">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b to-[#0c1b34] from-[#000A1F]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-white font-medium text-base md:text-lg">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-300"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-300 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
