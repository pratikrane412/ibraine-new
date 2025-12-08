"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Check, Truck, Coffee, Car } from 'lucide-react';
import { Robot3D } from '@/components/ui/Robot3D';

// --- Icons ---
const XLogo = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const FacebookLogo = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.859-5.978.564 0 2.605.053 3.12.13v3.665h-2.153c-1.85 0-2.58.6-2.58 2.252v1.511h4.44l-1.003 3.667h-3.437v7.98H9.101z" /></svg>;
const InstagramLogo = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>;
const LinkedInLogo = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.62 5.08-4.425 5.08 0v8.321h5v-9.63c0-5.811-6.233-5.811-7.749-2.821v-2.55h-2.363z" /></svg>;

const socialLinks = [
  { name: 'Instagram', icon: InstagramLogo, url: '#' },
  { name: 'X', icon: XLogo, url: '#' },
  { name: 'LinkedIn', icon: LinkedInLogo, url: '#' },
  { name: 'Facebook', icon: FacebookLogo, url: '#' },
];

const servicesList = [
  "SEO Optimization", "Performance Marketing",
  "Social Media", "Google Analytics",
  "Web Development", "Affiliate Marketing",
  "Ecommerce"
];

// Reusable Input Component for the "Line Theme"
const LineInput = ({ placeholder, type = "text" }: { placeholder: string, type?: string }) => (
  <input 
    type={type}
    placeholder={placeholder}
    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
  />
);

export const Contact = () => {
  const [captchaSelected, setCaptchaSelected] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Robot & Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-tight tracking-tight mb-4"
            >
              Let's work <br/> 
              <span className="text-zinc-400 dark:text-zinc-600">together</span>
            </motion.h2>

            <div className="-ml-10 -mt-10">
              <Robot3D />
            </div>

            <div className="space-y-6 -mt-10 relative z-20">
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

            {/* Socials */}
            <div className="mt-12 relative z-20">
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

          {/* RIGHT: Detailed Line Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] mt-10 lg:mt-0">
            <form className="flex flex-col gap-8">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <LineInput placeholder="Full Name*" />
                </div>
                <div className="group relative">
                  <LineInput placeholder="Email Address*" type="email" />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <LineInput placeholder="Phone Number*" />
                </div>
                <div className="group relative">
                  <LineInput placeholder="Subject*" />
                </div>
              </div>

              {/* Row 3: Company & Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <LineInput placeholder="Company Name" />
                </div>
                <div className="group relative">
                  <LineInput placeholder="Website Link" />
                </div>
              </div>

              {/* Services Checkboxes - Styled Minimally */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">Services Required:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesList.map((service, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group select-none">
                      {/* Custom Box */}
                      <div className="relative w-5 h-5 border-2 border-zinc-300 dark:border-zinc-700 rounded flex items-center justify-center group-hover:border-orange-500 transition-colors">
                        <input type="checkbox" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" />
                        <Check size={14} className="text-orange-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="group relative">
                <textarea 
                  rows={3} 
                  placeholder="Share a brief of your requirements..." 
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-lg font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Human Check */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-b border-zinc-200 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Prove you are human: Select the <span className="font-bold text-zinc-900 dark:text-white">truck</span>.</p>
                <div className="flex gap-4">
                  {[Car, Coffee, Truck].map((Icon, i) => (
                    <button 
                      key={i} 
                      type="button"
                      onClick={() => setCaptchaSelected(i === 2 ? 'truck' : 'wrong')}
                      className={`p-2 rounded-lg transition-all ${
                        captchaSelected === 'truck' && i === 2 ? 'bg-orange-500 text-white shadow-lg' : 'text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button (Pill Style for consistency with Line Theme) */}
              <div className="pt-2">
                <button 
                  type="button"
                  className="group relative w-full py-5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                  </span>
                  {/* Hover Ripple Effect */}
                  <div className="absolute inset-0 bg-orange-600 dark:bg-orange-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};