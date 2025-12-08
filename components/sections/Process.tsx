"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileSearch, Map, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Deep Audit",
    desc: "We start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal.",
    icon: FileSearch,
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We build a custom roadmap focusing on high-impact keywords and conversion rate optimization to ensure growth.",
    icon: Map,
  },
  {
    id: "03",
    title: "Execution",
    desc: "Our team deploys code updates, content, and ad campaigns while you focus on running your business.",
    icon: Rocket,
  },
  {
    id: "04",
    title: "Scale",
    desc: "We analyze data weekly to cut waste and double down on what drives revenue, ensuring long-term dominance.",
    icon: BarChart3,
  },
];

// Connector: Darker in Light Mode for visibility
const ConnectorLeftToRight = () => (
  <svg
    className="absolute top-full left-[20%] w-[60%] h-24 hidden md:block z-0 pointer-events-none text-orange-500/50 dark:text-orange-500/40"
    viewBox="0 0 400 100"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M 0 0 Q 0 50 200 50 Q 400 50 400 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="8 8"
      fill="none"
    />
  </svg>
);

const ConnectorRightToLeft = () => (
  <svg
    className="absolute top-full left-[20%] w-[60%] h-24 hidden md:block z-0 pointer-events-none text-orange-500/50 dark:text-orange-500/40"
    viewBox="0 0 400 100"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M 400 0 Q 400 50 200 50 Q 0 50 0 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="8 8"
      fill="none"
    />
  </svg>
);

export const Process = () => {
  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-black overflow-hidden relative transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200/20 via-zinc-50 to-zinc-50 dark:from-orange-900/20 dark:via-black dark:to-black -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors">
            Our Complete <span className="text-zinc-400">Process</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto transition-colors">
            From the first audit to the final sale, our workflow is designed for
            speed and precision.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28 relative">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0; // Steps 2, 4
            const Icon = step.icon;

            return (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* COLUMN 1: The Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 flex justify-center relative z-10"
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-800 text-white p-8 md:p-10 rounded-[2rem] max-w-md w-full shadow-2xl shadow-orange-500/20 dark:shadow-none hover:scale-105 transition-transform duration-300 border border-orange-400/20">
                      <div className="w-14 h-14 bg-white text-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                        <Icon size={28} />
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-orange-50 leading-relaxed font-medium text-sm md:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* COLUMN 2: The Massive Text */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 text-center md:text-left relative"
                  >
                    <h2
                      className={`text-[5rem] md:text-[8rem] font-black leading-none tracking-tighter ${
                        isEven ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      {/* FIX 1: "STEP" Text Gradient */}
                      {/* Light Mode: Dark Gray | Dark Mode: White fade */}
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600 dark:from-white dark:to-zinc-700 block transition-all">
                        STEP
                      </span>

                      {/* FIX 2: "Number" Text Gradient */}
                      {/* Light Mode: Visible Gray | Dark Mode: Faded Gray */}
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 to-zinc-200 dark:from-zinc-700 dark:to-zinc-900 block transition-all">
                        {step.id}
                      </span>
                    </h2>
                  </motion.div>
                </div>

                {/* Connecting Lines */}
                {index !== steps.length - 1 &&
                  (isEven ? (
                    <ConnectorRightToLeft />
                  ) : (
                    <ConnectorLeftToRight />
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
