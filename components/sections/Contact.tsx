"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';

// --- Fixed SVG Icons (Single line paths to prevent errors) ---
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
  { name: 'Instagram', icon: InstagramLogo, url: '#' },
  { name: 'X', icon: XLogo, url: '#' },
  { name: 'LinkedIn', icon: LinkedInLogo, url: '#' },
  { name: 'Facebook', icon: FacebookLogo, url: '#' },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT: Heading & Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-tight tracking-tight mb-8"
            >
              Let's work <br/> 
              <span className="text-zinc-400 dark:text-zinc-600">together</span>
            </motion.h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Email</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">info@ibraine.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Location</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">Mumbai, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Phone</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">+91 9892 854 892</p>
                </div>
              </div>
            </div>

            {/* Social Orbs */}
            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url}
                    className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Minimalist Line Form (Smaller Text) */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem]">
            <form className="flex flex-col gap-8">
              
              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="What's your name?"
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="group relative">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="Tell us about your project"
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="button"
                  className="group relative w-28 h-28 rounded-full bg-orange-500 text-white flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-xl"
                >
                  <span className="text-base font-bold z-10">Send</span>
                  <ArrowUpRight size={20} className="mt-1 z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                  {/* Hover Ripple Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-orange-500 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};