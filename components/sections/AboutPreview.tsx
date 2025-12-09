"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion'; 
import { ArrowRight, Quote, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

// --- ANIMATION VARIANTS (Typed to fix error) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const AboutPreview = () => {
  const containerRef = useRef(null);
  
  // Parallax for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="py-32 px-4 bg-white dark:bg-zinc-950 overflow-hidden relative transition-colors duration-300">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-8"
        >
          <motion.div variants={fadeInUp}>
             <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: BRAND_ORANGE }}>
               Who We Are
             </span>
             <h2 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
               Digital <br />
               <span style={{ color: BRAND_BLUE }}>Intelligence.</span>
             </h2>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="md:max-w-xs mt-8 md:mt-0"
          >
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
              We bridge the gap between creative design and technical performance to build brands that don't just survive, but dominate.
            </p>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: THE VISUAL */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden group shadow-2xl">
                <motion.div style={{ y: yImg }} className="h-[120%] w-full relative -top-[10%]">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
                    alt="Office Meeting"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Magnetic Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 border border-white/30">
                      <Play fill="white" className="w-8 h-8 text-white ml-1" />
                   </div>
                </div>

                {/* Rotating Badge Bottom Right */}
                <motion.div 
                  style={{ rotate: rotateBadge }}
                  className="absolute -bottom-12 -right-12 w-40 h-40 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center z-20 border-[8px] border-zinc-50 dark:border-black"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                    <path id="circlePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="fill-zinc-900 dark:fill-white text-[12px] font-bold uppercase tracking-widest">
                      <textPath href="#circlePath2">
                        • Since 2010 • Proven Results
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE WRITTEN CONTENT */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            
            {/* 1. The Hook */}
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
              Leveraging Technology to <br/>
              <span className="inline-block relative">
                Drive Business Growth
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-500/20 -z-10" />
              </span>
            </motion.h3>

            {/* 2. The Detailed Text */}
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
              <motion.p variants={fadeInUp}>
                <strong className="text-zinc-900 dark:text-white">iBraine</strong> is a one-stop online marketing company that provides end-to-end digital marketing solutions. Our team of professionals is expert in Search Engine Optimization, Pay-per-Click, Social Media Marketing, Affiliate Marketing, and Website Design.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Whether your objective is leads, sales, traffic, branding, or awareness, we have a solution. We understand your needs and work towards offering complete service satisfaction.
              </motion.p>
            </div>

            {/* 3. Founder Quote Block */}
            <motion.div variants={slideInRight} className="bg-zinc-100 dark:bg-zinc-900/50 border-l-4 border-orange-500 p-8 rounded-r-2xl mb-10 relative">
              <Quote className="absolute top-4 right-4 text-zinc-300 dark:text-zinc-700 w-10 h-10" />
              <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200 italic mb-6 relative z-10">
                "We don't believe in one-size-fits-all. Every brand has a unique DNA, and our job is to decode it and amplify it to the world."
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-40 h-40 rounded-full bg-zinc-300 overflow-hidden shrink-0 border-2 border-orange-500">
                   <img 
                      src="/harsh.webp" 
                      alt="Founder" 
                      className="w-full h-full object-cover" 
                   />
                </div>
                <div>
                   <p className="text-lg font-bold text-zinc-900 dark:text-white">Harsh Pareek</p>
                   <p className="text-sm font-bold text-orange-500 uppercase tracking-wider">Co-Founder</p>
                </div>
              </div>
            </motion.div>

            {/* 4. Stats Strip */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <div>
                <h4 className="text-3xl font-black text-zinc-900 dark:text-white mb-1">16+</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-zinc-900 dark:text-white mb-1">1.2k</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-zinc-900 dark:text-white mb-1">20+</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Countries</p>
              </div>
            </motion.div>

            {/* 5. CTA */}
            <motion.div variants={fadeInUp} className="mt-10">
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-lg hover:gap-4 transition-all" style={{ color: BRAND_BLUE }}>
                Read Our Full Story <ArrowRight />
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};