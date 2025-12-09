"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

const reasons = [
  {
    title: "Strategy",
    percent: "60%",
    desc: "Marketing strategy doesn't have to be a guessing game."
  },
  {
    title: "Audience",
    percent: "95%",
    desc: "Target the right people with data-backed precision."
  },
  {
    title: "Keyword",
    percent: "70%",
    desc: "Rank higher for terms that actually convert to revenue."
  }
];

const stats = [
  { value: "25k", label: "Projects Completed" },
  { value: "8k", label: "Happy Customers" },
  { value: "15", label: "Years Experience" },
  { value: "98", label: "Awards Won" }
];

// --- Helper Component: Animated Counter ---
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numberMatch = value.match(/(\d+)/);
  const number = numberMatch ? parseInt(numberMatch[0]) : 0;
  const suffix = value.replace(number.toString(), '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100, duration: 2 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  return (
    <div ref={ref} className="flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </div>
  );
};

export const WhyChooseUs = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // FIX: Changed from "-85%" to "-360vw".
  // Calculation: Total Width (460vw) - Viewport Width (100vw) = 360vw to scroll.
  // This ensures it stops EXACTLY at the end of the 'Ready?' slide.
  const x = useTransform(smoothProgress, [0, 1], ["0vw", "-360vw"]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-white dark:bg-zinc-950 transition-colors duration-300">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />

        <motion.div style={{ x }} className="flex relative z-10">
          
          {/* =========================================
              PANEL 1: TITLE (100vw)
             ========================================= */}
          <div className="w-[100vw] h-screen flex flex-col justify-center shrink-0 border-r border-zinc-100 dark:border-zinc-800 relative px-10 md:px-32">
            <div className="absolute top-20 left-20 text-zinc-300"><Plus /></div>
            <div className="absolute bottom-20 right-20 text-zinc-300"><Plus /></div>

            <span className="font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: BRAND_ORANGE }}>
              Why Choose Us
            </span>
            
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.9] tracking-tighter whitespace-nowrap">
              <span style={{ color: BRAND_BLUE }}>Design</span> <br /> 
              <span className="ml-20 text-zinc-400 dark:text-zinc-700">&</span> 
              <span style={{ color: BRAND_ORANGE }}> Strategy</span>
            </h2>

            <div className="absolute right-[15%] top-[30%] hidden md:flex items-center justify-center w-40 h-40 rounded-full border border-zinc-300 dark:border-zinc-700 animate-spin-slow">
               <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                 • Scroll to Explore •
               </div>
            </div>
          </div>

          {/* =========================================
              PANEL 2: TEXT & CIRCLES (80vw)
             ========================================= */}
          <div className="w-[80vw] h-screen flex items-center justify-center shrink-0 border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="max-w-4xl px-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: BRAND_BLUE }}>
                KEYWORD, RESEARCH STRATEGY, <br/> SURVEY, & ANALYTICS
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-12 max-w-2xl">
                We dive deep into data to find the hidden opportunities your competitors are missing. It's not magic; it's math.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {['Google Ads', 'SEO', 'Analytics'].map((btn) => (
                  <div key={btn} className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-300 dark:border-zinc-700">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_ORANGE }}></div>
                    <span className="text-sm font-bold uppercase text-zinc-600 dark:text-zinc-300">{btn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================
              PANEL 3: CIRCLE STATS (80vw)
             ========================================= */}
          <div className="w-[80vw] h-screen flex items-center justify-center shrink-0 border-r border-zinc-100 dark:border-zinc-800">
            <div className="flex flex-col gap-12 w-full px-20">
              {reasons.map((item, i) => (
                <div key={i} className="flex items-center justify-between group border-b border-zinc-200 dark:border-zinc-800 pb-8">
                  <div>
                    <h4 className="text-2xl font-bold uppercase mb-2" style={{ color: BRAND_BLUE }}>
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className={`w-20 h-20 rounded-full border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:text-white transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-lg font-bold transition-colors" style={{ color: BRAND_ORANGE }}>
                      {item.percent}
                    </span>
                    <style jsx>{`
                      .group:hover .rounded-full {
                        background-color: ${BRAND_BLUE};
                        border-color: ${BRAND_BLUE};
                      }
                      .group:hover .rounded-full span {
                        color: white !important;
                      }
                    `}</style>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              PANEL 4: BIG NUMBERS (100vw)
             ========================================= */}
          <div 
            className="w-[100vw] h-screen flex items-center justify-center shrink-0 text-white"
            style={{ backgroundColor: BRAND_BLUE }} 
          >
            <div className="grid grid-cols-2 gap-x-20 gap-y-20 w-full max-w-6xl px-10">
              {stats.map((stat, i) => (
                <div key={i} className="border-l border-white/20 pl-8">
                  <div className="text-7xl md:text-9xl font-black mb-2 tracking-tighter flex">
                    <Counter value={stat.value} />
                  </div>
                  <p className="text-lg md:text-xl uppercase tracking-widest font-bold opacity-80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              PANEL 5: CONCLUSION (100vw)
             ========================================= */}
          <div className="w-[100vw] h-screen flex items-center justify-center shrink-0 relative">
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              style={{ backgroundColor: BRAND_ORANGE }} 
            >
               <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">Ready?</h2>
               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-transform duration-300">
                 <ArrowRight className="w-10 h-10" style={{ color: BRAND_ORANGE }} />
               </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};