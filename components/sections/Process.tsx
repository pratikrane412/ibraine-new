"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FileSearch, Map, Rocket, BarChart3, CheckCircle2 } from "lucide-react";

// --- DATA (iBraine Content & Colors) ---
const steps = [
  {
    id: "01",
    title: "Deep Audit",
    desc: "We start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal.",
    icon: FileSearch,
    color: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-200",
    shadow: "shadow-blue-500/20",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We build a custom roadmap focusing on high-impact keywords and conversion rate optimization to ensure growth.",
    icon: Map,
    color: "bg-orange-500",
    text: "text-orange-600",
    border: "border-orange-200",
    shadow: "shadow-orange-500/20",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Execution",
    desc: "Our team deploys code updates, content, and ad campaigns while you focus on running your business.",
    icon: Rocket,
    color: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-200",
    shadow: "shadow-blue-500/20",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Scale",
    desc: "We analyze data weekly to cut waste and double down on what drives revenue, ensuring long-term dominance.",
    icon: BarChart3,
    color: "bg-orange-500",
    text: "text-orange-600",
    border: "border-orange-200",
    shadow: "shadow-orange-500/20",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  // Smooth out the line filling animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Process</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              From audit to automation, we handle the complexities of digital growth so you don't have to.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* BACKGROUND LINE (Static Grey) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

          {/* ANIMATED LINE (Gradient Fill) */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-blue-400 to-orange-500 -translate-x-1/2 z-10"
          />

          {/* Steps Container */}
          <div className="flex flex-col gap-24 md:gap-32">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }} // Triggers when 20% of element is in view
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 1. IMAGE COLUMN */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isEven ? 50 : -50, scale: 0.9 },
          visible: { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" } 
          },
        }}
        className="w-full md:w-1/2 pl-12 md:px-0 relative group"
      >
        {/* Decorative Blur behind image */}
        <div className={`absolute -inset-4 rounded-xl opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40 ${step.color}`} />
        
        <div className={`relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl ${step.shadow}`}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={step.img}
            alt={step.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          {/* Glass Badge */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 flex justify-between items-center shadow-sm">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</span>
            <span className={`text-xs font-bold ${step.text} flex items-center gap-1`}>
              In Progress <div className={`w-1.5 h-1.5 rounded-full ${step.color} animate-pulse`} />
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. CENTER DOT */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
        <motion.div
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1, transition: { delay: 0.2, type: "spring", stiffness: 200 } }
          }}
          className={`w-8 h-8 rounded-full border-4 border-white dark:border-zinc-950 shadow-lg ${step.color} flex items-center justify-center`}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </div>

      {/* 3. TEXT COLUMN */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isEven ? -30 : 30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }
          },
        }}
        className={`w-full md:w-1/2 pl-12 md:px-0 ${!isEven ? "md:text-right" : "md:text-left"}`}
      >
        {/* Icon */}
        <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg ${step.color} text-white ${!isEven && "md:ml-auto"}`}
        >
          <step.icon size={28} />
        </motion.div>

        {/* Title */}
        <motion.h3 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl font-bold text-zinc-900 dark:text-white mb-4"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6"
        >
          {step.desc}
        </motion.p>

        {/* List Points */}
        <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className={`flex flex-col gap-2 ${!isEven ? "md:items-end" : "md:items-start"}`}
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full w-fit">
            <CheckCircle2 size={14} className={step.text} />
            <span>Certified Method</span>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};