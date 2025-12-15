"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Globe, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AboutPreview = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col lg:flex-row relative overflow-hidden"
    >
      
      {/* 
        1. LEFT COLUMN: VISUAL 
      */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] lg:min-h-screen relative overflow-hidden group order-1">
        <motion.div style={{ scale: scaleImg }} className="w-full h-full relative">
            <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                alt="Strategic Planning"
                fill
                className="object-cover"
                priority 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
        </motion.div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group shadow-lg">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
            </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end text-white">
            <div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Global Reach</p>
                <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-xl md:text-2xl font-bold">20+ Countries</span>
                </div>
            </div>
            <div className="text-right">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Revenue Driven</p>
                <div className="flex items-center gap-2 justify-end">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    <span className="text-xl md:text-2xl font-bold">$50M+</span>
                </div>
            </div>
        </div>
      </div>

      {/* 
        2. RIGHT COLUMN: CONTENT 
        FIXED PADDING: Reduced 'lg:p-24' to 'lg:p-12 xl:p-20' to give text more width on laptops.
      */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-20 relative bg-white dark:bg-black lg:border-l border-zinc-200 dark:border-zinc-800 order-2">
        
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <motion.div style={{ y: yText }} className="relative z-10">
            
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <span className="px-3 py-1 rounded-full border border-orange-500 text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Est. 2010
                </span>
                <span className="px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Mumbai HQ
                </span>
            </div>

            {/* 
               TYPOGRAPHY FIX:
               text-4xl (Mobile) -> text-6xl (Tablet)
               lg:text-5xl (Laptop Split Screen - Reduced to fit 50% width)
               xl:text-6xl (Desktop)
               2xl:text-7xl (Ultrawide)
            */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-zinc-900 dark:text-white leading-[0.95] tracking-tighter mb-6 md:mb-8 break-words">
                DIGITAL <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    INTELLIGENCE.
                </span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8 md:mb-10 max-w-xl text-justify lg:text-left">
                We bridge the gap between creative storytelling and data-driven infrastructure. <strong className="text-zinc-900 dark:text-white">iBraine</strong> isn't just an agency; we are a growth engine designed to help brands dominate their market through precision, speed, and scale.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 border-t border-b border-zinc-200 dark:border-zinc-800 py-6 md:py-8">
                {['Strategic Planning', 'Advanced SEO', 'Performance Marketing', 'Brand Identity', 'Web Development', 'Data Analytics'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-500" />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-zinc-800 dark:text-zinc-300 uppercase tracking-wide">{item}</span>
                    </div>
                ))}
            </div>

            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                <Link href="/about" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-zinc-900 dark:bg-white text-white dark:text-black overflow-hidden rounded-none font-bold uppercase tracking-widest transition-all hover:bg-blue-600 dark:hover:bg-zinc-200 text-xs md:text-sm">
                    <span className="relative z-10 flex items-center gap-2">
                        Read Full Story <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>
                
                <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white">1.2k+</span>
                    <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider">Clients Empowered</span>
                </div>
            </div>

        </motion.div>
      </div>

    </section>
  );
};