"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Helper Component for the Animation ---
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // 1. Detect when the number is on screen
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // 2. Parse the string (e.g., "$50M+")
  // Extract the number (50)
  const numberMatch = value.match(/(\d+)/);
  const number = numberMatch ? parseInt(numberMatch[0]) : 0;
  
  // Extract text before and after the number
  const parts = value.split(number.toString());
  const prefix = parts[0] || "";
  const suffix = parts[1] || "";

  // 3. Setup Motion Values
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 30, 
    stiffness: 100,
    duration: 2 // Slower, smoother counting
  });
  
  // 4. Transform the raw number into a rounded integer string
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  return (
    <span ref={ref} className="flex justify-center">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const stats = [
    { label: "Revenue Generated", value: "$50M+" },
    { label: "Active Clients", value: "120+" },
    { label: "Retention Rate", value: "98%" },
    { label: "Years Experience", value: "12+" },
  ];

  return (
    <section className="py-20 border-b border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Animated Counter Value */}
              <h3 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight transition-colors">
                <Counter value={stat.value} />
              </h3>
              
              {/* Static Label */}
              <p className="text-zinc-600 dark:text-zinc-500 text-sm md:text-base uppercase tracking-wider font-medium transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};