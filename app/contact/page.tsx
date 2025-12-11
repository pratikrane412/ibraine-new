"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const servicesList = [
  "SEO Optimization",
  "Social Media",
  "Web Development",
  "Ecommerce",
  "Performance Marketing",
  "Google Analytics",
  "Affiliate Marketing"
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-900">
      <Navbar />

      {/* 1. HEADER SECTION (Brand Blue) */}
      <div className="relative h-[350px] overflow-hidden bg-[#2B7ABC]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B7ABC] to-[#1e6091]">
          {/* Decorative Circles */}
          <div className="absolute top-[-50%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[80px]" />
          
          {/* Wave SVG */}
          <svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
             <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">Contacts</h1>
             <div className="flex items-center justify-end gap-2 text-sm text-blue-100">
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">04</span>
                <a href="/" className="hover:text-white transition-colors">Homepage</a>
                <span className="text-blue-300">/</span>
                <span className="text-white font-medium">Contacts</span>
             </div>
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 relative z-10 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT: CONTACT FORM (Matches Screenshot) --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500" />
              
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                Get In Touch
              </h3>

              <form className="space-y-8">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Full Name*" placeholder="John Doe" />
                  <InputGroup label="Email Address*" placeholder="john@example.com" type="email" />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Phone Number*" placeholder="+91 12345 6789" />
                  <InputGroup label="Subject*" placeholder="Project Inquiry" />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Company Name" placeholder="Your Company" />
                  <InputGroup label="Website Link" placeholder="https://website.com" />
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Services Required:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {servicesList.map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-[#2B7ABC] checked:border-[#2B7ABC] transition-colors" />
                          <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1 top-1" viewBox="0 0 14 14" fill="none">
                            <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-slate-600 group-hover:text-[#2B7ABC] transition-colors font-medium text-sm">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-[#2B7ABC] to-[#1e6091] hover:from-[#1e6091] hover:to-[#2B7ABC] text-white px-10 py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* --- RIGHT: MAP & INFO (Matches Screenshot) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Map Card */}
            <div className="h-[400px] relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8643934377926!2d72.85333557597157!3d19.113589982098675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c830900b7325%3A0x629636253c070c79!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Floating Address Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-md">
                        <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">Mumbai Office</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Office No. 2, Chandra Niwas CHS, Off Old Police Lane, Andheri East, Mumbai – 400069
                        </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4">
               <InfoCard 
                 icon={<Mail />} 
                 title="Email Us" 
                 content="info@ibraine.com" 
                 href="mailto:info@ibraine.com" 
                 color="text-orange-500"
               />
               <InfoCard 
                 icon={<Phone />} 
                 title="Call Us" 
                 content="+91 98928 54892" 
                 href="tel:+919892854892" 
                 color="text-[#2B7ABC]"
               />
            </div>

            {/* Socials */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex justify-between items-center">
               <span className="font-bold text-slate-500">Follow Us:</span>
               <div className="flex gap-3">
                  <SocialBtn icon={<Facebook size={18} />} />
                  <SocialBtn icon={<Twitter size={18} />} />
                  <SocialBtn icon={<Linkedin size={18} />} />
                  <SocialBtn icon={<Instagram size={18} />} />
               </div>
            </div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// --- SUB-COMPONENTS ---

const InputGroup = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div className="space-y-2 group">
    <label className="text-sm font-bold text-slate-400 group-focus-within:text-[#2B7ABC] transition-colors">{label}</label>
    <div className="relative">
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2B7ABC] focus:bg-transparent transition-all"
      />
    </div>
  </div>
);

const InfoCard = ({ icon, title, content, href, color }: { icon: any, title: string, content: string, href: string, color: string }) => (
  <a href={href} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md hover:border-orange-200 transition-all group">
    <div className={`w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 ${color} group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</p>
      <p className="text-lg font-bold text-slate-800 group-hover:text-[#2B7ABC] transition-colors">{content}</p>
    </div>
  </a>
);

const SocialBtn = ({ icon }: { icon: any }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#2B7ABC] hover:text-white hover:border-[#2B7ABC] transition-all">
    {icon}
  </a>
);