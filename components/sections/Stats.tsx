"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// --- BRAND COLORS ---
// Used in the gradient logic below
const BRAND_GRADIENT = "from-[#FF6B00] to-[#2B7ABC]";

// --- Helper Component for the Animation ---
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  // 1. Detect when the number is on screen
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 2. Parse the string (e.g., "$50M+")
  const numberMatch = value.match(/(\d+)/);
  const number = numberMatch ? parseInt(numberMatch[0]) : 0;

  const parts = value.split(number.toString());
  const prefix = parts[0] || "";
  const suffix = parts[1] || "";

  // 3. Setup Motion Values
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2,
  });

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
    { label: "Active Clients", value: "1200+" },
    { label: "Websites Delivered", value: "200+" },
    { label: "Retention Rate", value: "98%" },
    { label: "Years Experience", value: "16+" },
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
              className="flex flex-col items-center"
            >
              {/* 
                 VALUE: Applied Brand Gradient (Orange -> Blue)
                 This makes the numbers look metallic/premium and branded.
              */}
              <h3
                className={`text-4xl md:text-6xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${BRAND_GRADIENT}`}
              >
                <Counter value={stat.value} />
              </h3>

              {/* Decorative Accent Line (Brand Blue) */}
              <div className="h-1 w-8 rounded-full bg-[#2B7ABC] mb-3 opacity-50" />

              {/* Label */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base uppercase tracking-wider font-bold transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
