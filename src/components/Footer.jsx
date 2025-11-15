import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#032152] to-[#000A1F] text-white pt-16 pb-8 px-6 border-t-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" className="w-24" alt="Mociber Logo" />
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Secure your cloud environments & ensure safe migration with
            compliance-ready solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.linkedin.com/company/mociber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition bg-blue-800 p-1 rounded"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.youtube.com/@mociber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition bg-blue-800 p-1 rounded"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://www.instagram.com/mociberofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition bg-blue-800 p-1 rounded"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>

        {/* Column 2 - Location */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Location</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            HN 470, White House Building, Ward 17, Noorpur, Uttar Pradesh,
            India, 246734
          </p>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
          <p className="text-gray-200 text-sm mb-2">+(91) 9811257526</p>
          <p className="text-gray-200 text-sm">connect@mociber.com</p>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe To Newsletter</h3>
          <p className="text-gray-200 text-sm mb-4">
            Stay informed with the latest cybersecurity news and expert tips.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex bg-white/90 rounded-md overflow-hidden w-full max-w-xs"
          >
            <input
              type="email"
              placeholder="Email Address *"
              className="flex-grow px-3 py-2 text-sm text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-700 px-4 py-2 font-medium hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-100">
          <p>
            Copyright © 2025 All Rights Reserved By 
            <span className="font-semibold"> Mociber Global Technologies.</span>
          </p>

          {/* Footer Links */}
          <ul className="flex gap-6">
            <li className="hover:text-white/80 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white/80 transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-white/80 transition">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-white/80 transition">
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="hover:text-white/80 transition">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
