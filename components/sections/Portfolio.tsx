"use client";
import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity 
} from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Coca-Cola",
    category: "Branding",
    src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2660&auto=format&fit=crop",
    speed: 0.1, 
    align: "left", 
  },
  {
    id: 2,
    title: "Urban Fashion",
    category: "Ecommerce",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    speed: 0.3, 
    align: "right", 
  },
  {
    id: 3,
    title: "Tech Goggles",
    category: "Product Design",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    speed: 0.2, 
    align: "left", 
  },
  {
    id: 4,
    title: "Modern Architecture",
    category: "Real Estate",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
    speed: 0.4, 
    align: "right", 
  },
  {
    id: 5,
    title: "Neon Nights",
    category: "Photography",
    src: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2000&auto=format&fit=crop",
    speed: 0.2, 
    align: "left", 
  },
  {
    id: 6,
    title: "Analog Sound",
    category: "Industrial Design",
    src: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=2000&auto=format&fit=crop",
    speed: 0.3, 
    align: "right", 
  },
];

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-zinc-50 relative w-full">
      
      {/* 1. FIXED BACKGROUND TYPOGRAPHY */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[20vw] md:text-[25vw] font-black leading-none text-zinc-900 opacity-10 select-none tracking-tighter">
          WORK
        </h1>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 2. SCROLLABLE CONTENT LAYER */}
      <div ref={containerRef} className="relative z-10 -mt-[100vh] w-full max-w-7xl mx-auto px-4 md:px-8 pb-40">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[40vh] flex items-center justify-center md:justify-start pt-32"
        >
          <div className="md:ml-12 lg:ml-24">
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight">
              Selected Works
            </h2>
            <p className="text-zinc-500 mt-4 text-lg max-w-md">
              A curated collection of branding, product design, and digital experiences that push boundaries.
            </p>
            <div className="h-1 w-20 bg-zinc-900 mt-6" />
          </div>
        </motion.div>

        {/* Projects List */}
        {projects.map((project, i) => (
          <ParallaxImage 
            key={project.id} 
            project={project} 
            index={i} 
          />
        ))}
      </div>
    </section>
  );
};

const ParallaxImage = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  
  // Track when this specific item is in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // "start end" = top of img hits bottom of screen
  });

  // --- SMOOTH PHYSICS ---
  // This makes the scroll value "lag" slightly for a luxurious feel
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 20, 
    stiffness: 100 
  });

  // --- TRANSFORMS (Linked to Scroll) ---
  // 0.0 -> 0.5 means: from "just entering screen" to "halfway up the screen"
  
  // 1. ROTATION: Goes from 80deg (sleeping) to 0deg (standing)
  const rotateX = useTransform(smoothProgress, [0, 0.4], [80, 0]);
  
  // 2. OPACITY: Goes from 0 (invisible) to 1 (visible)
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  
  // 3. SCALE: Goes from 0.8 (small) to 1 (full size)
  const scale = useTransform(smoothProgress, [0, 0.4], [0.8, 1]);

  // 4. PARALLAX Y: Existing floating effect
  const y = useTransform(smoothProgress, [0, 1], [0, -100 * project.speed]);

  const getAlignClass = () => {
    switch (project.align) {
      case "left": return "md:mr-auto md:ml-0 lg:ml-12"; 
      case "right": return "md:ml-auto md:mr-0 lg:mr-12";
      default: return "mx-auto";
    }
  };

  return (
    <motion.div 
      ref={ref} 
      className={`relative w-full mb-32 md:mb-48 ${getAlignClass()}`}
      style={{ maxWidth: "600px", y }} // Parallax container
    >
      
      {/* 3D PERSPECTIVE WRAPPER */}
      <div className="group relative aspect-[4/5] [perspective:1000px]">
        
        {/* INNER ANIMATED CARD */}
        <motion.div
          style={{ 
            rotateX, // Linked to scroll
            opacity, // Linked to scroll
            scale,   // Linked to scroll
          }}
          className="w-full h-full relative origin-bottom rounded-xl overflow-hidden shadow-2xl bg-zinc-900"
        >
          <img
            src={project.src}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        </motion.div>
      </div>

      {/* TEXT LABELS */}
      <motion.div 
        style={{ opacity }} // Text also fades in/out with scroll
        className={`mt-6 flex flex-col ${project.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
      >
         <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-none">
            {project.title}
         </h2>
         <p className="text-sm md:text-md text-zinc-500 font-bold uppercase tracking-widest mt-2">
            {project.category}
         </p>
      </motion.div>
    </motion.div>
  );
};