  "use client";
  import React, { useRef } from "react";
  import { motion, useScroll, useTransform, useSpring } from "framer-motion";
  import { ArrowUpRight } from "lucide-react";
  import { Navbar } from "@/components/layout/Navbar"; 
  import { Footer } from "@/components/layout/Footer";

  const projects = [
    {
      id: 1,
      title: "Coca-Cola",
      category: "Global Branding",
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2660&auto=format&fit=crop",
      color: "#E41E2B"
    },
    {
      id: 2,
      title: "Urban Drops",
      category: "Ecommerce",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
      color: "#18181b"
    },
    {
      id: 3,
      title: "Vision Pro",
      category: "Product Design",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
      color: "#2563eb"
    },
    {
      id: 4,
      title: "Skyline Arch",
      category: "Real Estate",
      img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
      color: "#059669"
    },
  ];

  export default function WorkPage() {
    return (
      <div className="bg-white dark:bg-zinc-950 font-sans">
        <div className="relative z-50">
          <Navbar />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            
            {/* --- LEFT COLUMN: STICKY TITLE --- */}
            <div className="w-full lg:w-[40%] h-[50vh] lg:h-screen lg:sticky lg:top-32 flex flex-col justify-center px-8 md:px-16 z-10 pointer-events-none">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <p className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">Featured</p>
                  <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] mb-8">
                    Work<span className="text-blue-600">.</span>
                  </h1>
                  <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                    Highlights of cases that we've built with passion. 
                  </p>
              </motion.div>
            </div>

            {/* --- RIGHT COLUMN: THE CURTAIN STACK --- */}
            <div className="w-full lg:w-[60%]">
              {projects.map((project, i) => (
                <ProjectItem key={i} index={i} project={project} />
              ))}
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // --- THE CURTAIN ITEM ---
  function ProjectItem({ project, index }: { project: any, index: number }) {
    const container = useRef(null);
    
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start']
    });

    // --- SMOOTHING LOGIC START ---
    // We wrap the raw scroll progress in a spring physics simulation.
    // stiffness: Lower = more loose/fluid.
    // damping: Higher = more drag/butter feel (less bounce).
    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100, 
      damping: 20,
      restDelta: 0.001
    });

    // Apply the smoothed progress to the transform
    const imageY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
    // --- SMOOTHING LOGIC END ---

    return (
      <div 
          ref={container} 
          className="h-screen sticky top-0 flex items-center justify-center p-0 lg:p-0 z-0"
      >
          {/* THE CARD */}
          <div className="relative w-full h-full lg:h-screen bg-white dark:bg-zinc-950 flex flex-col justify-center border-t border-zinc-100 dark:border-zinc-900">
              
              <div className="w-full h-full relative overflow-hidden group">
                  
                  {/* IMAGE WITH SMOOTH PARALLAX */}
                  <motion.div style={{ y: imageY }} className="w-full h-[120%] relative">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  </motion.div>

                  {/* TEXT CONTENT OVERLAY */}
                  <div className="absolute bottom-12 left-8 md:bottom-20 md:left-16 z-20 text-white pointer-events-auto">
                      <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80" style={{ color: project.color }}>
                          {project.category}
                      </p>
                      <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                          {project.title}
                      </h2>
                      <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:gap-6 transition-all">
                          View Case <ArrowUpRight size={18} />
                      </button>
                  </div>

                  {/* NUMBER */}
                  <div className="absolute top-32 right-10 z-20 mix-blend-difference text-white">
                    <span className="text-2xl font-mono">0{index + 1}</span>
                  </div>
              </div>

          </div>
      </div>
    )
  }