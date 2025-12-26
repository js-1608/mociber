import React from "react";
import { Link } from "react-router-dom";

const industries = [
  {
    key: "Startups",
    title: "Startups",
    path: "/industries/startups",
    img: "/Industry/Startup.jpg",
    desc:
      "Every startup begins with an idea — we turn it into intelligent impact. Mociber empowers innovation with technology, security, and trust.",
  },
  {
    key: "BFSI",
    title: "BFSI",
    path: "/industries/Bfsi",
    img: "/Industry/BFSI.jpg",
    desc:
      "In finance, trust is the true currency. Mociber secures every transaction, process, and customer relationship with intelligence and integrity.",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    path: "/industries/healthcare",
    img: "/Industry/Healthcare.jpg",
    desc:
      "Every record matters, every breach is critical. Mociber safeguards healthcare ecosystems with proactive intelligence and compliance.",
  },
  {
    key: "gov",
    title: "Government & Public Sector",
    path: "/industries/gov",
    img: "/Industry/Government.jpg",
    desc:
      "National security starts with digital security. Mociber protects public infrastructure from evolving cyber threats while ensuring compliance.",
  },
  {
    key: "retail",
    title: "Retail & E-Commerce ",
    path: "/industries/retail",
    img: "/Industry/Retail.jpg",
    desc:
      "Retailers live on data, insights, and speed — a breach can stop it all. Mociber safeguards your digital storefront, customer data, and operational continuity.",
  },
  {
    key: "transportation",
    title: "Manufacturing",
    path: "/industries/manufacturing",
    img: "/Industry/Manufacturing.jpg",
    desc:
      "Industry 4.0 is powered by data — and protected by intelligence. Mociber ensures your manufacturing ecosystem is secure, connected, and future-ready.",
  },
  {
    key: "defense",
    title: "Aerospace & Defense ",
    path: "/industries/aerospace",
    img: "/Industry/Defense.jpg",
    desc:
      "Every mission depends on resilient systems. Mociber ensures aerospace and defense operations are protected, compliant, and future-ready.",
  },
  {
    key: "bank",
    title: "Telecom & Media",
    path: "/industries/telecom",
    img: "/Industry/Telecome.jpg",
    desc:
      " The future of telecom and media is connected, adaptive, and secure. Mociber leverages AI, automation, and deep technology to ensure resilience and innovation.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm inline-block px-3 py-1 rounded-full bg-white/5 text-blue-300 border">
            Industries
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
            AI and ML driven solutions for your industry
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            Secure critical systems and data across sectors with tailored strategies and enterprise-grade controls.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.key}
              to={ind.path}
              className="group block bg-[#071426] rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-blue-500 transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-sm text-gray-100">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{ind.title}</h3>
                <p className="mt-2 text-sm text-gray-400 lowercase">
                  cybersecurity solutions & services in {ind.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
