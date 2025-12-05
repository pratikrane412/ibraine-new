"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, Send } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
];

const footerLinks = [
  { title: "Sitemap", links: ["Home", "Services", "Work", "About Us"] },
  { title: "Services", links: ["SEO Optimization", "Paid Ads", "Web Development", "Content Strategy"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-50 dark:bg-black pt-20 overflow-hidden transition-colors duration-300">
      
      {/* 1. TOP GRADIENT BORDER */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          
          {/* LEFT: CTA SECTION */}
          <div className="lg:w-1/2">
            
            {/* 
               UPDATED HEADING COLORS 
               "Ready to" -> Logo Blue (#2B7ABC)
               "Scale Up?" -> Logo Orange (text-orange-500)
            */}
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-[#2B7ABC]">
              Ready to <br />
              <span className="text-orange-500">Scale Up?</span>
            </h2>

            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mb-8">
              Don't let your competitors win. Get a custom digital strategy audit today.
            </p>
            
            {/* Newsletter Input */}
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-4 text-zinc-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors pr-12 placeholder:text-zinc-400"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors">
                <Send size={24} />
              </button>
            </div>
          </div>

          {/* RIGHT: LINKS GRID */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((column, i) => (
              <div key={i}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors font-medium flex items-center gap-1 group">
                        {link}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM: SOCIALS & COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-32 md:pb-8 border-t border-zinc-200 dark:border-zinc-900 relative z-20">
          <div className="flex gap-4 mb-6 md:mb-0">
            {socialLinks.map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-zinc-400 text-sm">
            © 2024 iBraine Digital. All rights reserved.
          </p>
        </div>
      </div>

      {/* MASSIVE BACKGROUND WATERMARK */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
        <h1 className="text-[18vw] font-black text-center text-zinc-200 dark:text-zinc-900 tracking-tighter uppercase translate-y-[20%]">
          iBraine
        </h1>
      </div>

      {/* Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 z-30 w-12 h-12 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
      >
        <ArrowUpRight size={20} />
      </button>

    </footer>
  );
};