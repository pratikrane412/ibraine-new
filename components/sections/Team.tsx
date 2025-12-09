"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

// --- BRAND COLORS ---
const BRAND_ORANGE = "#FF6B00";
const BRAND_BLUE = "#2B7ABC";

const teamMembers = [
  {
    name: "Kamal Abraham",
    role: "CEO, Alaska",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Selina Gomaze",
    role: "Jr. Executive",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Pedrik V.",
    role: "Logo Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Thomas Ribbon",
    role: "Sr. Designer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Jonathon Deo",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Angel D.",
    role: "Jr. Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sarah K.",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Michael B.",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
  <div className="w-[300px] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-xl">
    {/* Image Container */}
    <div className="h-[320px] w-full overflow-hidden relative">
      <Image
        src={member.image}
        alt={member.name}
        fill // <--- ADD THIS. It tells Next.js to fill the parent container.
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Good for performance
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Text Content */}
    <div
      className="p-6 border-t border-zinc-100 dark:border-zinc-800 group-hover:border-orange-500/50 transition-colors"
      style={{ borderTopColor: "transparent" }}
    >
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        {member.role}
      </p>

      {/* LinkedIn Button - BRAND BLUE on Hover */}
      <button className="flex items-center gap-2 text-xs font-bold text-zinc-400 transition-colors uppercase tracking-wider group/btn">
        <div
          className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 transition-colors group-hover/btn:text-white"
          // We use inline styles for specific brand color hovers that Tailwind classes can't always target dynamically in groups easily without custom config
        >
          <Linkedin size={16} className="group-hover/btn:text-[#2B7ABC]" />
        </div>
        <span className="group-hover/btn:text-[#2B7ABC] transition-colors">
          LinkedIn
        </span>
      </button>
    </div>

    {/* Hover Border Effect (Brand Orange) */}
    <style jsx>{`
      .group:hover {
        border-color: ${BRAND_ORANGE};
      }
    `}</style>
  </div>
);

export const Team = () => {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* 1. Header Animation (Slides up) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {/* Brand Blue Text */}
            <span style={{ color: BRAND_BLUE }}>
              The talented team behind
            </span>{" "}
            <br />
            {/* Brand Orange Text */}
            <span style={{ color: BRAND_ORANGE }}>the creative design</span>
          </h2>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-sm text-lg">
          Our dedication and commitment to excellence ensure that your business
          thrives in the ever-evolving digital realm.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* 2. Top Row Animation */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex overflow-hidden"
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 pr-8"
            style={{ width: "max-content" }}
          >
            {[...teamMembers, ...teamMembers].map((member, i) => (
              <TeamCard key={`row1-${i}`} member={member} />
            ))}
          </motion.div>
        </motion.div>

        {/* 3. Bottom Row Animation */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex overflow-hidden"
        >
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 pr-8"
            style={{ width: "max-content" }}
          >
            {[...teamMembers, ...teamMembers].reverse().map((member, i) => (
              <TeamCard key={`row2-${i}`} member={member} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
