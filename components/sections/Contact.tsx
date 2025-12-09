"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Check,
  Truck,
  Coffee,
  Car,
} from "lucide-react";
import { Robot3D } from "@/components/ui/Robot3D";

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

// --- Icons ---
const XLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.859-5.978.564 0 2.605.053 3.12.13v3.665h-2.153c-1.85 0-2.58.6-2.58 2.252v1.511h4.44l-1.003 3.667h-3.437v7.98H9.101z" />
  </svg>
);
const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.62 5.08-4.425 5.08 0v8.321h5v-9.63c0-5.811-6.233-5.811-7.749-2.821v-2.55h-2.363z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: InstagramLogo, url: "#" },
  { name: "X", icon: XLogo, url: "#" },
  { name: "LinkedIn", icon: LinkedInLogo, url: "#" },
  { name: "Facebook", icon: FacebookLogo, url: "#" },
];

const servicesList = [
  "SEO Optimization",
  "Performance Marketing",
  "Social Media",
  "Google Analytics",
  "Web Development",
  "Affiliate Marketing",
  "Ecommerce",
];

// Reusable Input
const LineInput = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => (
  <div className="relative group">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none transition-colors peer"
      style={{ caretColor: BRAND_ORANGE }}
    />
    <div
      className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 peer-focus:w-full"
      style={{ backgroundColor: BRAND_ORANGE }}
    />
  </div>
);

export const Contact = () => {
  const [captchaSelected, setCaptchaSelected] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-5"
        style={{ backgroundColor: BRAND_ORANGE }}
      />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT: Robot & Info */}
          <div className="flex flex-col">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2"
            >
              <span style={{ color: BRAND_ORANGE }}>Let's work</span> <br />
              <span style={{ color: BRAND_BLUE }}>together</span>
            </motion.h2>

            {/* 3D ROBOT */}
            <div className="h-[300px] w-full relative -ml-10 mb-12">
              <Robot3D />
            </div>

            <div className="space-y-8 relative z-20 pl-4 lg:pl-8">
              {/* Email */}
              <div className="flex items-center gap-5 group cursor-pointer">
                {/* 
                   FIXED: Used explicit Tailwind arbitrary values for hover colors.
                   text-zinc-600: Dark Grey by default (Visible on White).
                   hover:bg-[#FF6B00]: Turns Orange on hover.
                   hover:text-white: Icon turns White on hover.
                */}
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Email
                  </p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white transition-colors">
                    <span className="group-hover:text-[#FF6B00] transition-colors">
                      info@ibraine.com
                    </span>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Location
                  </p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">
                    <span className="group-hover:text-[#FF6B00] transition-colors">
                      Mumbai, India
                    </span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Phone
                  </p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">
                    <span className="group-hover:text-[#FF6B00] transition-colors">
                      +91 9892 854 892
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12 relative z-20 pl-4 lg:pl-8">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Line Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] mt-10 lg:mt-0 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LineInput placeholder="Full Name*" />
                <LineInput placeholder="Email Address*" type="email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LineInput placeholder="Phone Number*" />
                <LineInput placeholder="Subject*" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LineInput placeholder="Company Name" />
                <LineInput placeholder="Website Link" />
              </div>

              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                  Services Required:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesList.map((service, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-3 cursor-pointer group select-none"
                    >
                      <div
                        className="relative w-5 h-5 border-2 border-zinc-300 dark:border-zinc-700 rounded flex items-center justify-center transition-colors group-hover:border-current"
                        style={{ color: BRAND_ORANGE }}
                      >
                        <input
                          type="checkbox"
                          className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer"
                        />
                        <Check
                          size={14}
                          className="opacity-0 peer-checked:opacity-100 transition-opacity"
                          style={{ color: BRAND_ORANGE }}
                        />
                      </div>
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <textarea
                  rows={3}
                  placeholder="Share a brief of your requirements..."
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none transition-colors resize-none peer"
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 peer-focus:w-full"
                  style={{ backgroundColor: BRAND_ORANGE }}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-b border-zinc-200 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Prove you are human: Select the{" "}
                  <span className="font-bold text-zinc-900 dark:text-white">
                    truck
                  </span>
                  .
                </p>
                <div className="flex gap-4">
                  {[Car, Coffee, Truck].map((Icon, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setCaptchaSelected(i === 2 ? "truck" : "wrong")
                      }
                      className={`p-2 rounded-lg transition-all ${
                        captchaSelected === "truck" && i === 2
                          ? "text-white shadow-lg"
                          : "text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                      }`}
                      style={
                        captchaSelected === "truck" && i === 2
                          ? { backgroundColor: BRAND_ORANGE }
                          : {}
                      }
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="group relative w-full py-5 rounded-full text-white font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-xl overflow-hidden"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message{" "}
                    <ArrowUpRight
                      size={20}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </span>
                  <div
                    className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ backgroundColor: BRAND_ORANGE }}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
