"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  MousePointerClick, 
  BarChart2, 
  Share2, 
  Mail 
} from 'lucide-react';

const services = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    icon: Search,
    shortDesc: "Health and care consulting refers to the practice of providing expert advice.",
    details: ["Technical SEO Audits", "Semantic Keyword Strategy", "High-Authority Backlinking", "Local SEO Dominance"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: "ppc",
    title: "Paid Search Marketing",
    icon: MousePointerClick,
    shortDesc: "Helping clients improve their marketing and sales strategies to increase value.",
    details: ["Google Ads Management", "RoAS Optimization", "A/B Creative Testing", "Retargeting Campaigns"],
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2612&auto=format&fit=crop"
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization",
    icon: BarChart2,
    shortDesc: "Health and care consulting refers to the practice of providing expert advice.",
    details: ["User Journey Mapping", "Heatmap Analysis", "Landing Page Redesign", "Checkout Funnel Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "social",
    title: "Social Media Marketing",
    icon: Share2,
    shortDesc: "Health and care consulting refers to the practice of providing expert advice.",
    details: ["Social Media Design", "Custom Ad Strategy", "Social Media Management", "Unique Ads Campaigns"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "email",
    title: "Email Marketing Solutions",
    icon: Mail,
    shortDesc: "Providing financial advice, including cost reduction strategies and risk management.",
    details: ["Automated Drip Sequences", "Newsletter Design", "List Segmentation", "Re-engagement Campaigns"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
  }
];

export const Services = () => {
  // We now sync activeId with hoveredService for the hover-expand effect
  const [activeId, setActiveId] = useState<string | null>(null);
  
  // Mouse Position Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotate = useTransform(mouseX, [0, 1000], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  return (
    <section 
      className="py-24 px-4 md:px-8 bg-[#f8f9fa] dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">Explore Our Solutions</h2>
          </div>
          <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-bold text-sm hover:opacity-80 transition-opacity">
            Explore More
          </button>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800">
          {services.map((service) => {
            const isActive = activeId === service.id;
            const Icon = service.icon;

            return (
              <div 
                key={service.id}
                // CHANGE 1: Expand on Hover
                onMouseEnter={() => setActiveId(service.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 ${
                  isActive ? "bg-white dark:bg-zinc-900" : "hover:bg-white dark:hover:bg-zinc-900/30"
                }`}
              >
                {/* Main Row */}
                <div 
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 cursor-pointer items-center relative z-20"
                >
                  <div className="md:col-span-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                      isActive 
                        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400" 
                        : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500"
                    }`}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <h3 className={`text-xl font-bold transition-colors ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-900 dark:text-white"
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="md:col-span-2 flex justify-start md:justify-end items-center gap-2 group">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white underline decoration-zinc-300 underline-offset-4 group-hover:text-blue-600 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${isActive ? "rotate-90 text-blue-600" : "group-hover:translate-x-1"}`} />
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-8 pb-8 relative z-20">
                        <div className="md:col-span-4 hidden md:block"></div>
                        <div className="md:col-span-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.details.map((detail, i) => (
                              <motion.div 
                                key={i}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                                className="flex items-center gap-3"
                              >
                                <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                                </div>
                                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        FLOATING IMAGE COMPONENT 
      */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.85, scale: 1 }} // CHANGE 2: Opacity 0.85 for Transparency
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{ 
              left: mouseX, 
              top: mouseY,
              translateX: "-50%",
              translateY: "-50%",
              rotate: rotate
            }}
            className="fixed z-50 pointer-events-none hidden md:block w-[300px] h-[200px] rounded-2xl overflow-hidden border-4 border-white/50 shadow-2xl"
          >
            {services.map((s) => (
              s.id === activeId && (
                <img 
                  key={s.id}
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover"
                />
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};