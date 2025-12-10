"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowRight, Award, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

// --- IMPORTS FOR NAV & FOOTER ---
// Make sure your files are saved in these folders, or adjust the path
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// --- BRAND ASSETS & COLORS ---
const FOUNDER_IMAGE = "/harsh.webp"; 
const BRAND_BLUE = "#2B7ABC";
const BRAND_ORANGE = "#f97316";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen flex flex-col">
      
      {/* 1. NAVBAR (Fixed at Top) */}
      <Navbar />

      {/* 2. MAIN SCROLLABLE CONTENT */}
      <main className="flex-grow w-full overflow-hidden pt-20"> {/* pt-20 prevents nav overlap */}
        
        {/* Editorial Hero */}
        <HeroSection />

        {/* Sticky Scroll Vision */}
        <VisionSection />

        {/* Cinematic Founder Reveal */}
        <FounderSection />


        {/* 4. INTERACTIVE 3D VALUES */}
      <section className="py-32 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            {/* Heading in your Brand Blue */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#2B7ABC] mb-6">
              Why iBraine?
            </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-[#2B7ABC] to-orange-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TiltCard 
              title="Global Scale" 
              desc="Strategies that transcend borders. We have served clients in 20+ countries."
              icon={<Globe className="w-10 h-10 text-[#2B7ABC]" />} 
            />
            <TiltCard 
              title="Award Winning" 
              desc="Recognized for excellence in SEO, Performance Marketing, and Branding."
              icon={<Award className="w-10 h-10 text-orange-500" />} 
            />
            <TiltCard 
              title="Client Obsessed" 
              desc="1200+ Clients. 100% Satisfaction. We treat your business like our own."
              icon={<Users className="w-10 h-10 text-[#2B7ABC]" />} 
            />
          </div>
        </div>
      </section>

      </main>

      {/* 3. FOOTER (At Bottom) */}
      <Footer />
      
    </div>
  );
}

// =========================================================
//  SECTIONS COMPONENTS (Editorial Style with Brand Colors)
// =========================================================

// --- HERO SECTION ---
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="h-[90vh] relative flex flex-col justify-between p-6 md:p-12 border-b border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-start">
        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">( EST. 2010 )</span>
        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest text-right hidden md:block">
          Digital Marketing <br /> Agency
        </span>
      </div>

      <div className="relative z-10">
        <motion.h1 style={{ y }} className="text-[11vw] leading-[0.85] font-black uppercase text-slate-900 dark:text-white tracking-tighter">
          Beyond <br />
          {/* Gradient: Brand Blue #2B7ABC -> Orange */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B7ABC] to-orange-500">
            Boundaries.
          </span>
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-md">
           <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
             iBraine is not just an agency. It is a <span className="text-[#2B7ABC] font-bold">growth engine</span> for brands that refuse to settle for average.
           </p>
        </div>
        <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-bounce">
          <ArrowDownRight className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

// --- VISION SECTION ---
const VisionSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Sticky Title */}
        <div className="md:w-1/3">
          <div className="sticky top-32">
             <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
               The <span className="text-[#2B7ABC]">Vision</span>
             </h2>
             <div className="w-20 h-1 bg-orange-500" />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 space-y-24">
          <VisionItem 
            num="01" 
            title="Data Driven" 
            text="We don't guess. We analyze. Every campaign is backed by millions of data points, ensuring your budget drives actual revenue, not just vanity metrics." 
          />
          <VisionItem 
            num="02" 
            title="Global Reach" 
            text="With clients in 20+ countries, we understand the nuance of global markets. We bridge the gap between local culture and international appeal." 
          />
          <VisionItem 
            num="03" 
            title="Human Centric" 
            text="Technology is our tool, but people are our focus. We build relationships first, creating brand loyalty that lasts decades." 
          />
        </div>
      </div>
    </section>
  );
};

const VisionItem = ({ num, title, text }: { num: string, title: string, text: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className="group cursor-default"
    >
      <span className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-4 block group-hover:text-[#2B7ABC]/20 transition-colors">{num}</span>
      <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-[#2B7ABC] transition-colors">{title}</h3>
      <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">{text}</p>
    </motion.div>
  );
}

// --- FOUNDER SECTION (Dark Blue Theme) ---
const FounderSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    // Darkened Brand Blue Background
    <section className="relative py-32 bg-[#0f2b46] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div className="z-10 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-mono tracking-widest uppercase mb-2 block">The Architect</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Harsh Pareek</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">
              "15 years ago, I saw a gap in the market. Agencies were selling services, not solutions. iBraine was born to change that."
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-700/50">
               <div>
                  <h4 className="text-4xl font-bold text-[#2B7ABC]">15+</h4>
                  <p className="text-sm text-slate-400 mt-1 uppercase">Years Experience</p>
               </div>
               <div>
                  <h4 className="text-4xl font-bold text-[#2B7ABC]">1200+</h4>
                  <p className="text-sm text-slate-400 mt-1 uppercase">Clients Served</p>
               </div>
            </div>

            <Button className="!bg-white !text-[#0f2b46] hover:!bg-orange-500 hover:!text-white transition-colors rounded-none px-8 py-4">
              Connect on LinkedIn <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="relative h-[600px] w-full overflow-hidden order-1 md:order-2" ref={ref}>
          <motion.div 
             style={{ scale }}
             className="w-full h-full relative"
          >
             {/* Blue Tint Overlay */}
             <div className="absolute inset-0 bg-[#2B7ABC] mix-blend-color opacity-30 z-10" />
             <img 
               src={FOUNDER_IMAGE} 
               className="w-full h-full object-cover" 
               alt="Harsh Pareek" 
             />
          </motion.div>
          <div className="absolute top-4 right-4 w-full h-full border border-slate-600 -z-10 translate-x-4 -translate-y-4" />
        </div>

      </div>
    </section>
  );
};



// --- COMPONENT: 3D TILT CARD ---
const TiltCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ perspective: 2000 }}
      className="relative h-96 w-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-full h-full bg-white dark:bg-[#0f2b46] border border-[#2B7ABC]/20 p-8 flex flex-col justify-between hover:shadow-2xl hover:border-orange-500/50 transition-all group cursor-pointer"
      >
        <div className="bg-[#2B7ABC]/10 w-fit p-4 rounded-full group-hover:scale-110 transition-transform">
          {icon}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-[#0f2b46] dark:text-white mb-3">{title}</h3>
          <p className="text-slate-500 group-hover:text-[#2B7ABC] dark:group-hover:text-[#8ec5ff] transition-colors">
            {desc}
          </p>
        </div>

        <div className="w-full h-1 bg-slate-100 dark:bg-[#1a3d5e] overflow-hidden">
          <div className="w-full h-full bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
};