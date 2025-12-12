"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Check,
} from "lucide-react";
import { Robot3D } from "@/components/ui/Robot3D";

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

// --- ICONS ---
const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.17803 21.2268 4.77387 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2246 19.2154 20.8226 19.8146 20.295 20.295C19.7891 20.7963 19.176 21.1856 18.5 21.45C17.887 21.683 17.162 21.85 16.097 21.9C15.035 21.948 14.7 21.958 12.025 21.958C9.35 21.958 9.013 21.948 7.95 21.9C6.887 21.85 6.162 21.683 5.525 21.45C4.85698 21.1923 4.24674 20.8045 3.738 20.315C3.21889 19.8157 2.80976 19.2081 2.545 18.535C2.296 17.904 2.128 17.173 2.078 16.098C2.03 15.035 2.02 14.7 2.02 12.025C2.02 9.35 2.03 9.013 2.078 7.95C2.128 6.887 2.295 6.162 2.545 5.525C2.80202 4.86048 3.19326 4.25193 3.692 3.73C4.19233 3.22019 4.7969 2.81804 5.465 2.555C6.104 2.306 6.835 2.138 7.91 2.088C8.972 2.04 9.308 2.03 11.983 2.03L12 2ZM12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12C17 9.239 14.761 7 12 7ZM18.5 6.75C18.5 6.06 17.94 5.5 17.25 5.5C16.56 5.5 16 6.06 16 6.75C16 7.44 16.56 8 17.25 8C17.94 8 18.5 7.44 18.5 6.75ZM12 8.8C10.233 8.8 8.8 10.233 8.8 12C8.8 13.767 10.233 15.2 12 15.2C13.767 15.2 15.2 13.767 15.2 12C15.2 10.233 13.767 8.8 12 8.8Z" 
    />
  </svg>
);
const XLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.859-5.978.564 0 2.605.053 3.12.13v3.665h-2.153c-1.85 0-2.58.6-2.58 2.252v1.511h4.44l-1.003 3.667h-3.437v7.98H9.101z" />
  </svg>
);
const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
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

// Compact Input Component
const LineInput = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => (
  <div className="relative group w-full">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full block bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2.5 text-base font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none transition-colors peer"
      style={{ caretColor: BRAND_ORANGE }}
    />
    <div
      className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 peer-focus:w-full"
      style={{ backgroundColor: BRAND_ORANGE }}
    />
  </div>
);

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-5"
        style={{ backgroundColor: BRAND_ORANGE }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* LEFT COLUMN: Info & Socials (Aligned properly) */}
          <div className="flex flex-col h-full">
            
            {/* Top Section */}
            <div>
              {/* Header & Robot */}
              <div className="mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4"
                >
                  <span style={{ color: BRAND_ORANGE }}>Let's work</span> <br />
                  <span style={{ color: BRAND_BLUE }}>together</span>
                </motion.h2>

                <div className="h-[220px] w-full relative mb-2 -ml-4">
                  <Robot3D />
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 relative z-20 pl-2 lg:pl-4">
                {/* Email */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-0.5">
                      Email
                    </p>
                    <p className="text-base font-bold text-zinc-900 dark:text-white transition-colors">
                      <span className="group-hover:text-[#FF6B00] transition-colors">
                        info@ibraine.com
                      </span>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-0.5">
                      Location
                    </p>
                    <p className="text-base font-bold text-zinc-900 dark:text-white">
                      <span className="group-hover:text-[#FF6B00] transition-colors">
                        Mumbai, India
                      </span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-0.5">
                      Phone
                    </p>
                    <p className="text-base font-bold text-zinc-900 dark:text-white">
                      <span className="group-hover:text-[#FF6B00] transition-colors">
                        +91 9892 854 892
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials - Pushed to bottom to align with form end */}
            <div className="mt-auto relative z-20 pl-2 lg:pl-4 pb-8 lg:pt-12">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-3">
                Follow Us
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-105"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 rounded-[2rem] mt-6 lg:mt-0 border border-zinc-200 dark:border-zinc-800 shadow-sm h-full flex flex-col justify-center">
            <form className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <LineInput placeholder="Full Name*" />
                <LineInput placeholder="Email Address*" type="email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <LineInput placeholder="Phone Number*" />
                <LineInput placeholder="Subject*" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <LineInput placeholder="Company Name" />
                <LineInput placeholder="Website Link" />
              </div>

              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Services Required:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((service, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2.5 cursor-pointer group select-none"
                    >
                      <div
                        className="relative w-4 h-4 border-2 border-zinc-300 dark:border-zinc-700 rounded flex items-center justify-center transition-colors group-hover:border-current"
                        style={{ color: BRAND_ORANGE }}
                      >
                        <input
                          type="checkbox"
                          className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer"
                        />
                        <Check
                          size={12}
                          className="opacity-0 peer-checked:opacity-100 transition-opacity"
                          style={{ color: BRAND_ORANGE }}
                        />
                      </div>
                      <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Textarea - Reduced Rows to 1 to fix large gap */}
              <div className="relative group mb-6">
                <textarea
                  rows={1} 
                  placeholder="Share a brief of your requirements..."
                  className="w-full block bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2.5 text-base font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none transition-colors resize-none peer"
                  style={{ caretColor: BRAND_ORANGE }}
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 peer-focus:w-full"
                  style={{ backgroundColor: BRAND_ORANGE }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="button"
                  className="group relative w-full py-4 rounded-full text-white font-bold text-base hover:scale-[1.01] transition-transform duration-300 shadow-lg overflow-hidden"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message{" "}
                    <ArrowUpRight
                      size={18}
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