"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Map, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  { 
    id: "01", 
    title: "Deep Audit", 
    desc: "We start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal.",
    icon: FileSearch 
  },
  { 
    id: "02", 
    title: "Strategy", 
    desc: "We build a custom roadmap focusing on high-impact keywords and conversion rate optimization to ensure growth.",
    icon: Map 
  },
  { 
    id: "03", 
    title: "Execution", 
    desc: "Our team deploys code updates, content, and ad campaigns while you focus on running your business.",
    icon: Rocket 
  },
  { 
    id: "04", 
    title: "Scale", 
    desc: "We analyze data weekly to cut waste and double down on what drives revenue, ensuring long-term dominance.",
    icon: BarChart3 
  }
];

// Updated Connector: ORANGE Dashed Line
const ConnectorLeftToRight = () => (
  <svg className="absolute top-full left-[20%] w-[60%] h-24 hidden md:block z-0 pointer-events-none text-orange-500/40" viewBox="0 0 400 100" fill="none" preserveAspectRatio="none">
    <path d="M 0 0 Q 0 50 200 50 Q 400 50 400 100" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="none" />
  </svg>
);

const ConnectorRightToLeft = () => (
  <svg className="absolute top-full left-[20%] w-[60%] h-24 hidden md:block z-0 pointer-events-none text-orange-500/40" viewBox="0 0 400 100" fill="none" preserveAspectRatio="none">
    <path d="M 400 0 Q 400 50 200 50 Q 0 50 0 100" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="none" />
  </svg>
);

export const Process = () => {
  return (
    <section className="py-32 px-4 bg-black overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Complete Process</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From the first audit to the final sale, our workflow is designed for speed and precision.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32 relative">
          
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0; // Steps 2, 4
            const Icon = step.icon;

            return (
              <div key={index} className="relative">
                
                <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* COLUMN 1: The ORANGE Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 flex justify-center relative z-10"
                  >
                    {/* 
                        CHANGE: Card is now Orange Gradient
                        Text is White
                    */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 md:p-12 rounded-[2.5rem] max-w-md w-full shadow-[0_0_50px_rgba(234,88,12,0.3)] hover:scale-105 transition-transform duration-300 border border-orange-400/20">
                      
                      {/* Icon Box: White background, Orange Icon */}
                      <div className="w-16 h-16 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Icon size={32} />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                      <p className="text-orange-50 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* COLUMN 2: The Massive "STEP 0X" Text */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 text-center md:text-left relative"
                  >
                    
                    <h2 className={`text-[6rem] md:text-[10rem] font-black leading-none tracking-tighter ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700 block">
                        STEP
                      </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-600 to-zinc-900 block">
                        {step.id}
                      </span>
                    </h2>
                  </motion.div>

                </div>

                {/* Connecting Lines */}
                {index !== steps.length - 1 && (
                  isEven ? <ConnectorRightToLeft /> : <ConnectorLeftToRight />
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};