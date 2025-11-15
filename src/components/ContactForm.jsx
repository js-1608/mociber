"use client";
import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  // replace these with your EmailJS IDs
  const EMAILJS_SERVICE_ID = "service_lkeqog6";
  const EMAILJS_TEMPLATE_ID = "template_zygqk0q";
  const EMAILJS_PUBLIC_KEY = "qimB7tqfME4B7ZAFS";

  function resetStatusAfter(delay = 4000) {
    setTimeout(() => setStatus(null), delay);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus(null);

    try {
      const res = await sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      // EmailJS returns something like { status: 200, text: "OK" } on success
      if (res.status === 200) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
    } finally {
      setSending(false);
      resetStatusAfter(4500);
    }
  };

  return (
    <div>
      <div className="bg-[#061025] border border-white/6 rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-semibold mb-3">Get In Touch</h3>
        <p className="text-gray-400 mb-6">
          We Simplifying Everything. Are You Ready to Simplify the Complexities?
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300 block mb-1">First Name *</label>
              <input
                name="firstName"
                required
                className="w-full bg-[#071026] border border-white/6 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your First Name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Last Name *</label>
              <input
                name="lastName"
                required
                className="w-full bg-[#071026] border border-white/6 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Last Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300 block mb-1">Email Address *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-[#071026] border border-white/6 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Email Address"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Phone Number *</label>
              <input
                name="phone"
                required
                className="w-full bg-[#071026] border border-white/6 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full bg-[#071026] border border-white/6 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Any Message..."
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 bg-linear-to-r from-indigo-600 to-blue-500 px-5 py-3 rounded-md font-semibold shadow-md hover:scale-[1.01] transition disabled:opacity-60"
            >
              {sending ? "Sending..." : "Submit Form"}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* status message */}
          {status === "success" && (
            <div className="text-sm text-green-400 mt-2">Thanks — we received your message and will reply soon.</div>
          )}
          {status === "error" && (
            <div className="text-sm text-rose-400 mt-2">Oops — something went wrong. Please try again later.</div>
          )}
        </form>
      </div>
    </div>
  );
}
