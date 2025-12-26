import React from "react";
import { Phone, Mail, Map } from "lucide-react";
import ContactForm from "@/components/ContactForm";
export default function Contact() {
  const contactCards = [
    {
      title: "Contact Us",
      lines: ["+(91) 9811257526"],
      icon: Phone,
    },
    {
      title: "Address",
      lines: ["HN 470, White House Building, Ward 17, Noorpur, Uttar Pradesh, India, 246734"],
      icon: Map,
    },
    {
      title: "Email Us",
      lines: ["connect@mociber.com"],
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* HERO / BANNER */}
      <header className="py-36 bg-linear-to-r from-[#032152] to-[#000A1F] border-b-2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact <span className="text-indigo-300">us</span>
          </h1>
          <nav className="text-sm text-gray-300">
            <span className="opacity-80">Home</span>
            <span className="mx-2">/</span>
            <span className="opacity-100 font-medium">Contact Us</span>
          </nav>
        </div>
      </header>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((c, idx) => (
            <div key={idx} className="bg-[#041226] border border-white/6 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-linear-to-br from-indigo-700 to-indigo-500 flex items-center justify-center">
                  <c.icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                  {c.lines.map((l, i) => (
                    <p key={i} className="text-sm text-gray-300">{l}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section (map / left and form right) */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: heading + map */}
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="bg-indigo-800/40 text-indigo-200 px-3 py-1 rounded-full text-sm">Get In Touch</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Contact us <span className="text-indigo-300">today!</span>
              </h2>
              <p className="text-gray-300 max-w-xl mb-6">
                Have questions or need expert cybersecurity support? Our team is ready to guide you with tailored solutions.
              </p>
            </div>

            {/* Map + small contact details under */}
            <div className="bg-transparent rounded-lg overflow-hidden border border-white/6">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.560754741965!2d78.40745741075699!3d29.145517975285877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bbb71242c8d97%3A0xdbdad76653c35303!2sMociber%20Global%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1766737632878!5m2!1sen!2sin"
                className="w-full h-80 md:h-[420px] border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Contact Form (moved to its own component) */}
          <div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
