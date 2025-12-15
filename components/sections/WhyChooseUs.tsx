"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

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
    category: "Ecommerce",
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

  // --- CALCULATION FOR SCROLL DISTANCE ---
  // 1 Intro + 4 Projects + 1 Outro = 6 Panels total.
  // Formula: -(TotalPanels - 1) * 100vw
  const x = useTransform(smoothProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    // Height determines scroll length. 
    <section ref={targetRef} className="relative h-[600vh] bg-white dark:bg-zinc-950">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div style={{ x }} className="flex relative z-10">
          
          {/* =========================================
              PANEL 1: INTRO TITLE (100vw)
             ========================================= */}
          <div className="w-[100vw] h-screen flex flex-col justify-center shrink-0 border-r border-zinc-100 dark:border-zinc-800 relative px-10 md:px-24">
            <div className="absolute top-10 left-10 text-zinc-300"><Plus size={24} /></div>
            
            <span className="font-bold tracking-[0.3em] uppercase mb-4 block text-sm md:text-base" style={{ color: BRAND_ORANGE }}>
              Our Portfolio
            </span>
            
            {/* Reduced font size for better scaling */}
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.95] tracking-tighter whitespace-nowrap text-slate-900 dark:text-white">
              Selected <br /> 
              <span style={{ color: BRAND_BLUE }}>Works.</span>
            </h2>

            <div className="mt-8 flex items-center gap-4 text-zinc-500">
               <div className="h-[1px] w-16 bg-zinc-300"></div>
               <span className="text-xs md:text-sm uppercase tracking-widest">Scroll to Explore</span>
            </div>
          </div>

          {/* =========================================
              PANEL 2, 3, 4, 5: PROJECTS (100vw EACH)
             ========================================= */}
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[100vw] h-screen flex flex-col lg:flex-row shrink-0 border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20"
            >
              
              {/* Left: Project Info */}
              <div className="w-full lg:w-[40%] h-full flex flex-col justify-center px-10 lg:px-20 relative z-10">
                 {/* Background Number - Reduced Opacity & Size */}
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

                 {/* Project Title - Scaled Down */}
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

              {/* Right: Project Image */}
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
              PANEL 6: OUTRO CTA (100vw)
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