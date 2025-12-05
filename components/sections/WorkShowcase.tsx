"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Coca-Cola Rebrand",
    category: "Brand Identity",
    // Vertical Image (Fashion/Brand)
    src: "https://images.unsplash.com/photo-1613539246066-78db6ec4d61d?q=80&w=1287&auto=format&fit=crop", 
    align: "self-start", // Left
    color: "bg-red-600"
  },
  {
    id: 2,
    title: "TechFlow Mobile App",
    category: "UI/UX Design",
    // Vertical Image (Mobile UI)
    src: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop", 
    align: "self-end", // Right
    color: "bg-blue-600"
  },
  {
    id: 3,
    title: "Nike Air Campaign",
    category: "Art Direction",
    // Vertical Image (Product/Poster)
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop", 
    align: "self-start", // Left
    color: "bg-orange-500"
  },
  {
    id: 4,
    title: "Lumina S.A.A.S",
    category: "Web Development",
    // Vertical Image (Abstract/Tech)
    src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop", 
    align: "self-end", // Right
    color: "bg-purple-600"
  }
];

// --- Single Project Card Component ---
const ProjectCard = ({ project, i }: { project: any, i: number }) => {
  const ref = useRef(null);
  
  // Parallax Logic:
  // As the card scrolls through the view, we translate it slightly on Y axis 
  // to give it that "floating" disconnected feel from the background.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div 
      ref={ref} 
      className={`w-full md:w-[45%] flex flex-col gap-6 mb-32 md:mb-64 ${project.align} relative z-10`}
    >
      <motion.div 
        style={{ y }} // Apply Parallax Y movement
        className="group relative"
      >
        {/* The Card Container: VERTICAL ASPECT RATIO */}
        <div className="aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 relative">
          
          {/* Image */}
          <img 
            src={project.src} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating 'View' Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 delay-75">
             <div className={`w-24 h-24 ${project.color} rounded-full flex items-center justify-center text-white shadow-xl`}>
                <ArrowUpRight size={40} />
             </div>
          </div>
        </div>

        {/* Project Info (Outside Card for clean look) */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between border-b border-zinc-300 dark:border-zinc-800 pb-4">
             <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                {project.title}
             </h3>
             <span className="text-xs font-bold border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-full uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
               2024
             </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
             <div className={`w-2 h-2 rounded-full ${project.color}`} />
             <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
               {project.category}
             </p>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export const WorkShowcase = () => {
  return (
    <section className="relative bg-white dark:bg-black transition-colors duration-300">
      
      {/* 
         1. STICKY BACKGROUND WRAPPER
         This holds the "WORK" text fixed in the center while cards scroll over it.
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <h2 className="text-[25vw] font-black uppercase text-zinc-100 dark:text-zinc-900/40 leading-none tracking-tighter select-none mix-blend-difference">
          WORK
        </h2>
      </div>

      {/* 
         2. SCROLLING CONTAINER
         The negative margin top pulls this list UP to start over the sticky background.
      */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 -mt-[100vh] pb-32">
        
        {/* Intro Spacing */}
        <div className="h-[50vh]" />

        {/* The List */}
        <div className="flex flex-col w-full">
          {projects.map((project, i) => (
            <ProjectCard key={i} i={i} project={project} />
          ))}
        </div>

        {/* Footer Button */}
        <div className="flex justify-center mt-20 pb-32">
          <button className="relative px-10 py-5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold text-lg hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            View All Case Studies
          </button>
        </div>

      </div>

    </section>
  );
};