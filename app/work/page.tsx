"use client";
import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring 
} from "framer-motion";
import { Navbar } from "@/components/layout/Navbar"; 
import { Footer } from "@/components/layout/Footer"; 

// --- DATA ---
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

// --- MAIN PAGE COMPONENT ---
export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen flex flex-col font-sans">
      
      {/* 1. NAVBAR */}
      <Navbar />

      <main className="flex-grow w-full relative">
        
        {/* 2. STICKY BACKGROUND TYPOGRAPHY (Layer 0) */}
        {/* This stays fixed while content scrolls over it */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <h1 className="text-[20vw] md:text-[25vw] font-black leading-none text-zinc-200 dark:text-zinc-800 opacity-90 select-none tracking-tighter">
            WORK
          </h1>
          {/* Grid Texture Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* 3. SCROLLABLE CONTENT LAYER (Layer 10) */}
        {/* -mt-[100vh] pulls this up to overlap the sticky container */}
        <div ref={containerRef} className="relative z-10 -mt-[100vh] w-full max-w-7xl mx-auto px-4 md:px-8 pb-40">
          
          {/* Heading Section (Intro) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[40vh] flex items-center justify-center md:justify-start pt-32"
          >
            <div className="md:ml-12 lg:ml-24">
              <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
                Selected Works
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-lg max-w-md">
                A curated collection of branding, product design, and digital experiences that push boundaries.
              </p>
              <div className="h-1 w-20 bg-[#2B7ABC] mt-6" />
            </div>
          </motion.div>

          {/* Animated Project List */}
          {projects.map((project, i) => (
            <ParallaxImage 
              key={project.id} 
              project={project} 
              index={i} 
            />
          ))}
        </div>

      </main>

      {/* 4. FOOTER (Relative, sits at bottom) */}
      <div className="relative z-20 bg-zinc-50 dark:bg-black">
        <Footer />
      </div>
    </div>
  );
}

// --- PARALLAX IMAGE COMPONENT ---
const ParallaxImage = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  
  // Track scroll for this item
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // --- SMOOTH PHYSICS ---
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 20, 
    stiffness: 100 
  });

  // --- ANIMATION TRANSFORMS ---
  // 1. ROTATION: Lying flat (80deg) -> Standing up (0deg)
  const rotateX = useTransform(smoothProgress, [0, 0.4], [80, 0]);
  
  // 2. OPACITY: Fade in
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  
  // 3. SCALE: Grow slightly
  const scale = useTransform(smoothProgress, [0, 0.4], [0.8, 1]);

  // 4. PARALLAX Y: Move up faster than scroll
  const y = useTransform(smoothProgress, [0, 1], [0, -100 * project.speed]);

  // Alignment Logic
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
      // Responsive widths: 400px on small laptops, 600px on large screens
      className={`relative w-full mb-32 md:mb-48 ${getAlignClass()} max-w-[90vw] md:max-w-[450px] xl:max-w-[600px]`}
      style={{ maxWidth: "600px", y }} 
    >
      
      {/* 3D PERSPECTIVE CONTAINER */}
      <div className="group relative aspect-[4/5] [perspective:1000px]">
        
        {/* INNER ANIMATED CARD */}
        <motion.div
          style={{ 
            rotateX, 
            opacity, 
            scale,   
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
        style={{ opacity }} 
        className={`mt-6 flex flex-col ${project.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
      >
         <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
            {project.title}
         </h2>
         <p className="text-sm md:text-md text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mt-2">
            {project.category}
         </p>
      </motion.div>
    </motion.div>
  );
};