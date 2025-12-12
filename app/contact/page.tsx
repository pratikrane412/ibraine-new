"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, Mail, MapPin, Phone, Check, 
  Truck, Coffee, Car, Send, Facebook, Linkedin, Twitter, Instagram 
} from "lucide-react";

// --- ASSUMED IMPORTS (Adjust paths as needed) ---
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Robot3D } from "@/components/ui/Robot3D"; // The component we built earlier

// --- BRAND COLORS ---
const BRAND_BLUE = "#2B7ABC";
const BRAND_ORANGE = "#FF6B00";

const servicesList = [
  "SEO Optimization",
  "Social Media",
  "Web Development",
  "Ecommerce",
  "Performance Marketing",
  "Google Analytics",
  "Affiliate Marketing"
];

// --- SUB-COMPONENTS ---

// 1. Sleek Line Input (Unique Style)
const LineInput = ({ placeholder, type = "text" }: { placeholder: string; type?: string }) => (
  <div className="relative group">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 text-lg font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors peer"
      style={{ caretColor: BRAND_ORANGE }}
    />
    <div className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-500 ease-out peer-focus:w-full" style={{ backgroundColor: BRAND_ORANGE }} />
  </div>
);

// 2. Info Card
const ContactCard = ({ icon: Icon, title, value, sub }: any) => (
  <div className="flex items-start gap-4 p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#2B7ABC] transition-colors duration-300">
      <Icon size={20} className="text-[#2B7ABC] group-hover:text-white transition-colors duration-300" />
    </div>
    <div>
      <h4 className="font-bold text-zinc-900 text-lg">{title}</h4>
      <p className="text-zinc-600 font-medium">{value}</p>
      {sub && <p className="text-zinc-400 text-sm mt-1">{sub}</p>}
    </div>
  </div>
);

export default function ContactPage() {
  const [captchaSelected, setCaptchaSelected] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-zinc-900">
      <Navbar />

      {/* 1. PAGE HERO (Brand Blue) */}
      <div className="relative h-[400px] overflow-hidden bg-[#2B7ABC]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B7ABC] to-[#1a5f91]">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[80px]" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
             <div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                  Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Us</span>
                </h1>
                <p className="text-blue-100 text-lg max-w-lg leading-relaxed">
                  Ready to start your digital transformation? Let's discuss how we can help your business grow.
                </p>
             </div>

             {/* Breadcrumbs */}
             <div className="flex items-center gap-2 text-sm text-blue-100 mb-2">
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">Page</span>
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span className="text-blue-300">/</span>
                <span className="text-white font-medium">Contact</span>
             </div>
          </motion.div>
        </div>
        
        {/* Bottom Curve */}
        <svg className="absolute bottom-0 left-0 w-full h-12 md:h-24 text-white fill-current" viewBox="0 0 1440 100" preserveAspectRatio="none">
           <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* --- LEFT COLUMN: INFO & ROBOT --- */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-span-5 flex flex-col h-full"
          >
            {/* 3D Robot Container */}
            <div className="h-[350px] w-full relative -ml-12 lg:-ml-20 mb-8 pointer-events-none">
                <Robot3D />
            </div>

            {/* Content Text */}
            <div className="mb-10">
                <h3 className="text-3xl font-bold mb-4">Let's build something <br/> <span className="text-[#2B7ABC]">extraordinary.</span></h3>
                <p className="text-zinc-500 leading-relaxed">
                    We help brands and businesses stand out in the digital era. Whether you need a website, a marketing campaign, or a complete rebrand, we are here to help.
                </p>
            </div>

            {/* Contact Details Stack */}
            <div className="flex flex-col gap-4">
                <ContactCard 
                    icon={Mail} 
                    title="Email Us" 
                    value="info@ibraine.com" 
                    sub="Online 24/7"
                />
                <ContactCard 
                    icon={Phone} 
                    title="Call Us" 
                    value="+91 9892 854 892" 
                    sub="Mon-Fri, 9am - 6pm"
                />
                <ContactCard 
                    icon={MapPin} 
                    title="Visit Us" 
                    value="Office No. 2, Chandra Niwas CHS, Off Old Police Lane" 
                    sub="Andheri East, 400069"
                />
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="lg:col-span-7"
          >
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <form className="flex flex-col gap-10">
                
                {/* Inputs */}
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

                {/* Services */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6">Services Required:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {servicesList.map((service, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group select-none">
                        <div className="relative w-5 h-5 border-2 border-zinc-300 rounded flex items-center justify-center transition-colors group-hover:border-[#FF6B00]">
                           <input type="checkbox" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" />
                           <Check size={14} className="opacity-0 peer-checked:opacity-100 transition-opacity text-[#FF6B00]" />
                        </div>
                        <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="w-full block bg-transparent border-b border-zinc-300 py-4 text-lg font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none transition-colors resize-none peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-500 ease-out peer-focus:w-full" style={{ backgroundColor: BRAND_ORANGE }} />
                </div>

                {/* Captcha */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-b border-zinc-200">
                    <p className="text-sm text-zinc-500">Prove you are human: Select the <span className="font-bold text-zinc-900">truck</span>.</p>
                    <div className="flex gap-4">
                      {[Car, Coffee, Truck].map((Icon, i) => (
                         <button 
                            key={i}
                            type="button" 
                            onClick={() => setCaptchaSelected(i === 2 ? 'truck' : 'wrong')}
                            className={`p-3 rounded-xl transition-all ${captchaSelected === 'truck' && i === 2 ? 'text-white shadow-lg scale-110' : 'text-zinc-400 hover:bg-zinc-200'}`}
                            style={captchaSelected === 'truck' && i === 2 ? { backgroundColor: BRAND_ORANGE } : {}}
                         >
                            <Icon size={22} />
                         </button>
                      ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="button" 
                    className="group relative w-full py-5 rounded-full text-white font-bold text-lg hover:scale-[1.01] active:scale-[0.99] transition-transform duration-300 shadow-xl overflow-hidden"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        Send Message <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </span>
                    {/* Liquid Fill Effect */}
                    <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: BRAND_ORANGE }} />
                  </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 3. FULL WIDTH MAP SECTION */}
      <section className="relative w-full h-[500px] bg-zinc-100 border-t border-zinc-200">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8643934377926!2d72.85333557597157!3d19.113589982098675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c830900b7325%3A0x629636253c070c79!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="grayscale-[50%] hover:grayscale-0 transition-all duration-700"
          ></iframe>
      </section>

      <Footer />
    </div>
  );
}