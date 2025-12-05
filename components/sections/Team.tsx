"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Kamal Abraham",
    role: "CEO, Alaska",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Selina Gomaze",
    role: "Jr. Executive",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Pedrik V.",
    role: "Logo Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Thomas Ribbon",
    role: "Sr. Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Jonathon Deo",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Angel D.",
    role: "Jr. Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sarah K.",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Michael B.",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  }
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="w-[300px] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors group">
    <div className="h-[320px] w-full overflow-hidden relative">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
      />
      {/* Overlay Gradient for text readability if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{member.name}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">{member.role}</p>
      
      <button className="flex items-center gap-2 text-xs font-bold text-zinc-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
        <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
          <Linkedin size={16} />
        </div>
        LinkedIn
      </button>
    </div>
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
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4">
            The talented team behind <br />
            <span className="text-orange-500">the creative design</span>
          </h2>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-sm text-lg">
          Our dedication and commitment to excellence ensure that your business thrives in the ever-evolving digital realm.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        
        {/* 2. Top Row Animation (Slides up with delay) */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex overflow-hidden"
        >
          {/* Infinite Scroll Inner Loop */}
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

        {/* 3. Bottom Row Animation (Slides up with more delay) */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex overflow-hidden"
        >
          {/* Infinite Scroll Inner Loop */}
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