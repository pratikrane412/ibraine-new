"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  Megaphone, 
  Monitor, 
  BarChart2, 
  PenTool, 
  CheckCircle2 
} from 'lucide-react';

const services = [
  {
    id: "seo",
    title: "SEO & Content",
    icon: Search,
    description: "We don't guess. We engineer content that ranks.",
    details: [
      "Technical SEO Audits",
      "Semantic Keyword Strategy",
      "High-Authority Backlinking",
      "Local SEO Dominance",
      "Conversion Copywriting"
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: "ads",
    title: "Performance Marketing",
    icon: Megaphone,
    description: "Every dollar spent must bring two dollars back.",
    details: [
      "Meta Ads (FB/Insta) Scaling",
      "Google PPC & Shopping",
      "LinkedIn B2B Lead Gen",
      "Retargeting Funnels",
      "A/B Creative Testing"
    ],
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2612&auto=format&fit=crop"
  },
  {
    id: "dev",
    title: "Web Development",
    icon: Monitor,
    description: "Websites that load in milliseconds, not seconds.",
    details: [
      "Custom Next.js Development",
      "Shopify & E-commerce",
      "Headless CMS (Sanity/Strapi)",
      "Interactive 3D Experiences",
      "API Integrations"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    icon: BarChart2,
    description: "Stop flying blind. See exactly what works.",
    details: [
      "GA4 Migration & Setup",
      "Google Tag Manager",
      "Looker Studio Dashboards",
      "User Journey Mapping",
      "Conversion Rate Optimization (CRO)"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "brand",
    title: "Brand Strategy",
    icon: PenTool,
    description: "Building an identity that customers remember.",
    details: [
      "Logo & Identity Systems",
      "Brand Voice Guidelines",
      "Social Media Aesthetic",
      "Packaging Design",
      "Pitch Deck Design"
    ]
  }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      
      {/* 
         CHANGE 1: max-w-[90%] instead of max-w-7xl 
         This forces the content to stretch almost to the edges.
      */}
      <div className="w-full max-w-[1800px] w-[95%] mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Everything you need.<br />
            <span className="text-zinc-400">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            We operate as a plug-and-play growth engine for your business. Select a capability to learn more.
          </p>
        </div>

        {/* 
           CHANGE 2: Adjusted Column Ratios 
           lg:w-1/4 for tabs, lg:w-3/4 for the content card.
           This makes the image/content area HUGE.
        */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[600px]">
          
          {/* LEFT COLUMN: Navigation Tabs */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`group flex items-center gap-4 p-4 md:p-6 rounded-2xl text-left transition-all duration-300 border ${
                    isActive 
                      ? "bg-white dark:bg-zinc-900 border-orange-500/50 shadow-lg dark:shadow-orange-900/10 scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${
                    isActive ? "bg-orange-500 text-white" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                  }`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg transition-colors ${
                      isActive ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="active-arrow"
                      className="ml-auto text-orange-500 hidden xl:block"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Dynamic Content Display */}
          <div className="w-full lg:w-3/4 relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col md:flex-row"
              >
                {/* Text Content */}
                <div className="p-8 md:p-16 md:w-[40%] flex flex-col justify-center border-r border-zinc-100 dark:border-zinc-800">
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                      {services[activeTab].title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                      {services[activeTab].description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Deliverables</p>
                    <ul className="space-y-4">
                      {services[activeTab].details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 size={20} className="text-orange-500 flex-shrink-0" />
                          <span className="text-base font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-10 self-start px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-80 transition-opacity">
                    Explore {services[activeTab].title}
                  </button>
                </div>

                {/* Image Side - Now takes up 60% of the card for impact */}
                <div className="md:w-[60%] h-64 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-10 md:w-20" />
                  <img 
                    src={services[activeTab].image || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"} 
                    alt={services[activeTab].title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Color Overlay for consistency */}
                  <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};