"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- Data: Technologies ---
const row1 = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const row2 = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
];

// --- Sub-Component: Tech Card ---
const TechCard = ({ item }: { item: { name: string; icon: string } }) => (
  <div className="flex items-center gap-4 px-6 py-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl min-w-[200px] hover:border-orange-500/50 transition-colors group">
    <div className="w-10 h-10 relative flex items-center justify-center">
      <img 
        src={item.icon} 
        alt={item.name} 
        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
      />
    </div>
    <span className="text-lg font-bold text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

// --- Sub-Component: Marquee Row ---
const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: typeof row1, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden relative w-full">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 pr-6 shrink-0"
        style={{ width: "max-content" }}
      >
        {/* Triple the items to ensure smooth infinite loop on wide screens */}
        {[...items, ...items, ...items].map((item, i) => (
          <TechCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export const TechStack = () => {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Powered by <span className="text-orange-500">Modern Tech</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          We use the latest frameworks and tools to build scalable, high-performance digital solutions.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative">
        
        {/* FADE EDGES (The "Cloud" Effect) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left */}
        <MarqueeRow items={row1} direction="left" speed={30} />

        {/* Row 2: Right */}
        <MarqueeRow items={row2} direction="right" speed={30} />

      </div>
    </section>
  );
};