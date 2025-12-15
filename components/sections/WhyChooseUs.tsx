"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MoveRight, Star, Trophy } from 'lucide-react';

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

// --- PORTFOLIO DATA ---
const projects = [
  {
    id: "01",
    client: "Coca-Cola",
    category: "Global Branding",
    desc: "Reimagining the digital presence of a global icon with visceral, thirst-inducing 3D imagery.",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2660&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "02",
    client: "Urban Fashion",
    category: "Ecommerce Experience",
    desc: "A headless commerce platform built for high-frequency fashion drops with sub-second load times.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "03",
    client: "Vision Pro",
    category: "Product Design",
    desc: "Spatial UI design for the next generation of augmented reality eyewear. Intuitive and organic.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "04",
    client: "Skyline Arch",
    category: "Real Estate",
    desc: "WebGL-powered luxury property showcase allowing virtual 3D penthouse tours.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
    year: "2022"
  }
];

export const WhyChooseUs = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-white dark:bg-zinc-950 font-sans">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Noise Texture */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div style={{ x }} className="flex relative z-10">
          
          {/* =========================================
              PANEL 1: INTRO (Redesigned)
             ========================================= */}
          <div className="w-[100vw] h-screen flex flex-col justify-between shrink-0 border-r border-zinc-100 dark:border-zinc-800 relative p-10 md:p-24 overflow-hidden">
            
            {/* Background Watermark Text */}
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 text-[30vh] font-black text-zinc-50 dark:text-zinc-900 pointer-events-none select-none z-0">
                CASES
            </div>

            {/* Top Content */}
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[2px] w-12 bg-orange-500"></div>
                    <span className="font-bold tracking-[0.2em] uppercase text-sm" style={{ color: BRAND_ORANGE }}>
                    Portfolio
                    </span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 dark:text-white mb-8">
                Selected <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B7ABC] to-blue-400">
                    Works.
                </span>
                </h2>

                <p className="max-w-md text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    A curation of digital experiences where strategy meets design. We don't just build websites; we build business assets.
                </p>
            </div>

            {/* Bottom Content (Stats & Interaction) */}
            <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-10">
                
                {/* Stats Row */}
                <div className="flex gap-8 md:gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Trophy size={18} className="text-yellow-500" />
                            <span className="font-bold text-xl text-slate-900 dark:text-white">98</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Awards Won</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Star size={18} className="text-orange-500" />
                            <span className="font-bold text-xl text-slate-900 dark:text-white">4.9</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Client Rating</p>
                    </div>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Scroll</p>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">to Explore</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center animate-spin-slow">
                        <MoveRight className="text-zinc-900 dark:text-white" />
                    </div>
                </div>

            </div>
          </div>

          {/* =========================================
              PANEL 2, 3, 4, 5: PROJECTS (Unchanged)
             ========================================= */}
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[100vw] h-screen flex flex-col lg:flex-row shrink-0 border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20"
            >
              <div className="w-full lg:w-[40%] h-full flex flex-col justify-center px-10 lg:px-20 relative z-10">
                 <span className="text-8xl font-black text-zinc-200/50 dark:text-zinc-800/50 absolute top-10 left-10 -z-10 select-none">
                    {project.id}
                 </span>
                 <div className="mb-3 flex items-center gap-3">
                    <span className="px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                        {project.year}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND_ORANGE }}>
                        {project.category}
                    </span>
                 </div>
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                    {project.client}
                 </h3>
                 <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-sm">
                    {project.desc}
                 </p>
                 <button className="group flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                    <span className="w-10 h-10 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-[#2B7ABC] group-hover:text-white group-hover:border-[#2B7ABC] transition-all duration-300">
                        <ArrowUpRight size={18} />
                    </span>
                    View Case Study
                 </button>
              </div>
              <div className="w-full lg:w-[60%] h-full relative overflow-hidden group">
                 <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                 <img 
                    src={project.img} 
                    alt={project.client} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
            </div>
          ))}

          {/* =========================================
              PANEL 6: OUTRO CTA (Unchanged)
             ========================================= */}
          <div className="w-[100vw] h-screen flex items-center justify-center shrink-0 relative bg-[#2B7ABC]">
            <div className="text-center p-8 text-white">
               <h2 className="text-5xl md:text-7xl font-black mb-8">View All <br/> Projects</h2>
               <div className="flex justify-center">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-transform duration-300 text-[#2B7ABC]">
                   <ArrowUpRight className="w-8 h-8" />
                 </div>
               </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};