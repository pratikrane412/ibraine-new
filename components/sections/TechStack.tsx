"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- BRAND COLORS ---
const BRAND_BLUE = "#2B7ABC";
const BRAND_ORANGE = "#FF6B00";

// ... (Data Arrays Remain the Same) ...
// Ensure you have the `row1` and `row2` arrays here

const row1 = [
  { name: "Next.js", icon: "/tech/Next.js.png" },
  { name: "React", icon: "/tech/React.png" },
  { name: "Angular", icon: "/tech/Angular.png" },
  { name: "TypeScript", icon: "/tech/TypeScript.png" },
  { name: "Tailwind", icon: "/tech/Tailwind CSS.png" },
  { name: "Django", icon: "/tech/Django.png" },
  { name: "FastAPI", icon: "/tech/FastAPI.png" },
  { name: "Android", icon: "/tech/Android.png" },
  { name: "Node.js", icon: "/tech/Node.js.png" },
  { name: "Python", icon: "/tech/Python.png" },
  { name: "AWS", icon: "/tech/AWS.png" },
  { name: "MongoDB", icon: "/tech/MongoDB.png" },
];

const row2 = [
  { name: "Figma", icon: "/tech/Figma.png" },
  { name: "Canva", icon: "/tech/Canva.png" },
  { name: "Adobe Photoshop", icon: "/tech/Adobe Photoshop.png" },
  { name: "Adobe Illustrator", icon: "/tech/Adobe Illustrator.png" },
  { name: "Shopify", icon: "/tech/Shopify.png" },
  { name: "Google Analytics", icon: "/tech/Google Analytics.png" },
  { name: "Meta", icon: "/tech/Meta.png" },
  { name: "Google Ads", icon: "/tech/Google Ads.png" },
  { name: "WordPress", icon: "/tech/WordPress.png" },
];

// --- Sub-Component: Tech Card ---
const TechCard = ({ item }: { item: { name: string; icon: string } }) => (
  <div className="flex items-center gap-4 px-6 py-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl min-w-[200px] hover:border-orange-500/50 transition-colors group">
    <div className="w-10 h-10 relative flex items-center justify-center">
      {/* 
         FIX: Added width={40} and height={40} 
         Since the parent div is w-10 h-10 (40px), these values match perfectly.
      */}
      <Image
        src={item.icon}
        alt={item.name}
        width={40}
        height={40}
        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <span className="text-lg font-bold text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

// ... (Rest of the component remains the same)

// --- Sub-Component: Marquee Row ---
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 20,
}: {
  items: typeof row1;
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden relative w-full">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 pr-6 shrink-0"
        style={{ width: "max-content" }}
      >
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
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span style={{ color: BRAND_BLUE }}>Powered by</span>{" "}
          <span style={{ color: BRAND_ORANGE }}>Modern Tech</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          We use the latest frameworks and tools to build scalable,
          high-performance digital solutions.
        </p>
      </div>
      <div className="flex flex-col gap-6 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={35} />
      </div>
    </section>
  );
};
