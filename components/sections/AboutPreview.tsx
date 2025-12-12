"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, BarChart3, Fingerprint, Globe, Layers, LayoutGrid, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

// --- DATA: THE DOSSIER FILES ---
const cards = [
  {
    id: 1,
    tab: "Identity",
    title: "Who We Are",
    headline: "Digital Intelligence.",
    desc: "iBraine is not just an agency; we are a growth engine. Born in 2010, we bridge the gap between creative storytelling and data-driven infrastructure. We don't believe in luck. We believe in engineering success through code, content, and strategy.",
    tags: ["Est. 2010", "Mumbai HQ", "Global Team"],
    icon: Fingerprint,
    color: "bg-white dark:bg-zinc-900",
    textColor: "text-zinc-900 dark:text-white",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
  },
  {
    id: 2,
    tab: "Capabilities",
    title: "What We Do",
    headline: "Full-Stack Growth.",
    desc: "We replace fragmented vendors with a unified ecosystem. From complex SEO architectures to high-octane performance marketing and enterprise web development, our capabilities are designed to scale with your ambition.",
    tags: ["SEO & Content", "Performance Ads", "Web Dev", "App Logic"],
    icon: Layers,
    color: "bg-[#2B7ABC]", // Brand Blue
    textColor: "text-white",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    tab: "Impact",
    title: "The Results",
    headline: "$50M+ Revenue Generated.",
    desc: "We move beyond vanity metrics. Likes and clicks don't pay bills—revenue does. We have helped 1,200+ clients across 20 countries dominate their markets. Our work is measured in ROI, Retention, and real-world Impact.",
    tags: ["1.2k Clients", "98% Retention", "20+ Countries"],
    icon: BarChart3,
    color: "bg-[#FF6B00]", // Brand Orange
    textColor: "text-white",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
  },
];

export const AboutPreview = () => {
  const containerRef = useRef(null);
  
  // We make the scroll container 3x height to allow scrolling through cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-zinc-100 dark:bg-black">
      
      {/* BACKGROUND HEADER (Visible at start) */}
      <div className="h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden">
        <h2 className="text-[12vw] font-black text-zinc-200 dark:text-zinc-900 tracking-tighter leading-none select-none">
          THE AGENCY
        </h2>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      </div>

      {/* THE STACK CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-4 absolute top-0 left-0 right-0 h-full">
        {cards.map((card, index) => {
          // Calculate dynamic range for each card based on scroll
          // Each card enters at a specific % of the scroll
          const targetScale = 1 - (cards.length - index) * 0.05; 
          
          return (
            <Card 
                key={index} 
                i={index} 
                card={card} 
                progress={scrollYProgress} 
                range={[index * 0.25, 1]} 
                targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

// --- SINGLE CARD COMPONENT ---
const Card = ({ i, card, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Transform Logic:
  // As user scrolls, the card slides up (y).
  // Once it hits the top, it scales down slightly (scale) to create the "stack" effect.
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]); // Inner image parallax
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Calculate top position offset so cards stack visibly
  const topOffset = 40 + (i * 20); 

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
            scale, 
            top: topOffset,
            // We use a spring-like ease for smoothness
            transition: "all 0.5s ease-out"
        }}
        className={`relative w-full h-[600px] md:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 origin-top flex flex-col md:flex-row ${card.color} ${card.textColor}`}
      >
        
        {/* LEFT: TEXT CONTENT (60%) */}
        <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-between relative z-10">
            
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-current opacity-60 text-xs font-bold uppercase tracking-widest">
                    <card.icon size={14} />
                    {card.tab}
                </div>
                <span className="font-mono text-xl font-bold opacity-40">0{card.id}</span>
            </div>

            {/* Main Body */}
            <div>
                <h3 className="text-4xl md:text-6xl font-black mb-6 leading-[0.9] tracking-tight">
                    {card.headline}
                </h3>
                <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed max-w-lg mb-8">
                    {card.desc}
                </p>

                {/* Tags Grid */}
                <div className="flex flex-wrap gap-3">
                    {card.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-md text-sm font-bold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer / CTA */}
            <div className="pt-8 border-t border-current border-opacity-10 flex items-center gap-4">
                <Link href="/about" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4 decoration-2">
                    Full Dossier <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>

        {/* RIGHT: IMAGE (40%) */}
        <div className="w-full md:w-[40%] relative overflow-hidden h-full">
            <motion.div style={{ scale: imageScale }} className="relative w-full h-full">
                <Image 
                    src={card.img} 
                    alt={card.title} 
                    fill 
                    className="object-cover"
                />
                {/* Overlay for text readability on mobile if stacked vertically, or style */}
                <div className="absolute inset-0 bg-black/10" />
            </motion.div>
            
            {/* Watermark Logo/Text */}
            <div className="absolute bottom-6 right-6 opacity-50">
                <LayoutGrid size={40} className="text-white drop-shadow-lg" />
            </div>
        </div>

      </motion.div>
    </div>
  );
};