"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// --- BRAND COLORS ---
const BRAND_BLUE = "#2B7ABC";
const BRAND_ORANGE = "#f97316";

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: "Coca-Cola",
    category: "Branding",
    year: "2023",
    description: "Reimagining the digital presence of a global icon. We focused on visceral, thirst-inducing imagery combined with micro-interactions that mimic the fizz of a fresh soda.",
    stats: ["+45% Engagement", "2M+ Impressions"],
    src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2660&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Fashion",
    category: "Ecommerce",
    year: "2024",
    description: "A high-performance storefront built for speed. We implemented headless architecture to ensure sub-second load times during peak fashion drops.",
    stats: ["0.4s Load Time", "+120% Sales"],
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Tech Goggles",
    category: "Product Design",
    year: "2023",
    description: "Designing the interface for the next generation of AR eyewear. Our focus was on spatial UI that feels intuitive and organic, not robotic.",
    stats: ["Red Dot Award", "50k Pre-orders"],
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Modern Architecture",
    category: "Real Estate",
    year: "2022",
    description: "A luxury property showcase platform. We used WebGL to allow potential buyers to virtually tour penthouses in 3D directly from their browser.",
    stats: ["300% ROI", "Sold Out in 2 Mo"],
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Neon Nights",
    category: "Photography",
    year: "2023",
    description: "A cyberpunk-inspired visual campaign for a nightlife brand. We used dynamic lighting effects and neon typography to capture the electric energy of the city.",
    stats: ["Award Winner", "Viral Campaign"],
    src: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Analog Sound",
    category: "Industrial Design",
    year: "2021",
    description: "Bringing tactile feel to a digital music platform. The UI mimics the physics of vinyl records and analog knobs for a nostalgic user experience.",
    stats: ["Top 10 App", "User Choice"],
    src: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen flex flex-col font-sans selection:bg-[#2B7ABC] selection:text-white">
      <Navbar />
      
      <main ref={containerRef} className="flex-grow w-full relative pt-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[60vh] flex flex-col justify-end pb-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-orange-500 font-mono tracking-widest uppercase text-sm mb-4 font-bold">
                Our Portfolio
              </p>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                Selected <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B7ABC] to-[#1e6091]">
                  Works.
                </span>
              </h1>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#2B7ABC]/5 rounded-full blur-[100px] pointer-events-none" />
        </section>

        {/* 2. PROJECT LIST */}
        <section className="relative w-full bg-slate-50 dark:bg-slate-900 py-32">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-32">
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
              />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 20, 
    stiffness: 100 
  });

  // Animation Transforms
  const rotateX = useTransform(smoothProgress, [0, 0.5], [85, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
      
      {/* --- IMAGE SIDE --- */}
      <div className="w-full lg:w-1/2 relative flex justify-center">
        <div style={{ perspective: "1000px" }} className="w-full flex justify-center">
          
          <motion.div 
            style={{ 
              rotateX, 
              scale, 
              opacity,
              transformOrigin: "bottom" 
            }} 
            // UPDATED CLASSES FOR VERTICAL SIZE:
            // 1. max-w-[400px]: Limits width so it doesn't stretch too wide.
            // 2. aspect-[3/4]: Forces strictly vertical portrait shape.
            // 3. w-full: Allows it to scale down on mobile but never exceed 400px.
            className="w-full max-w-[400px] aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group"
          >
             <img
               src={project.src}
               alt={project.title}
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.div>

        </div>
      </div>

      {/* --- DESCRIPTION SIDE --- */}
      <div className="w-full lg:w-1/2 relative">
        <motion.div 
          style={{ opacity }} 
          className="flex flex-col justify-center h-full"
        >
           <div className="flex items-center gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-[#2B7ABC] font-mono text-sm">0{index + 1}</span>
              <span className="text-slate-400 text-sm uppercase tracking-widest">{project.category}</span>
              <span className="ml-auto text-slate-400 text-sm">{project.year}</span>
           </div>

           <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-none hover:text-[#2B7ABC] transition-colors cursor-pointer">
             {project.title}
           </h2>

           <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
             {project.description}
           </p>

           <div className="grid grid-cols-2 gap-6 mb-10">
              {project.stats.map((stat: string, i: number) => (
                 <div key={i}>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.split(" ")[0]}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.split(" ").slice(1).join(" ")}</p>
                 </div>
              ))}
           </div>

           <button className="w-fit flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-[#2B7ABC] transition-colors group">
              View Case Study
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
           </button>

        </motion.div>
      </div>

    </div>
  );
};