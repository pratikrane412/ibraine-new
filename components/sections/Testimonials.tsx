"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// --- Real Data based on your screenshot context ---
const reviews = [
  {
    name: "Ahmed Hassan",
    role: "Business Owner, UAE",
    content: "The website design they created for our fintech startup is absolutely stunning. Clean, modern, and converts like crazy. Our investor meetings became so much easier.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Emma Thompson",
    role: "E-commerce Director, Australia",
    content: "Working with this team was seamless. They took our rough ideas and turned them into a polished, professional website that perfectly captures our brand. The feedback has been overwhelmingly positive.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "CEO, Singapore",
    content: "Coming from Webflow templates, this custom design was a game-changer. They understood our brand identity perfectly. The attention to detail is incredible.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    role: "Marketing Director, South Korea",
    content: "They transformed our outdated agency website into something that actually wins us clients. The portfolio showcase and case study layouts are designed so well that our lead quality improved dramatically.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sofia Rodriguez",
    role: "Product Manager, Spain",
    content: "The SaaS dashboard design exceeded all our expectations. Complex data visualization made simple and beautiful. Our enterprise clients love the clean interface.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "James Anderson",
    role: "Growth Director, UK",
    content: "The landing page design they created has tripled our conversion rates. Beautiful animations, clear messaging, and a user flow that just works. Best investment we've made.",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Amara Okafor",
    role: "Design Director, Nigeria",
    content: "From concept to launch, they were professional, creative, and responsive. The design system they built for us is now being used across all our digital products.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Michael Roberts",
    role: "VP Product, USA",
    content: "Their UI/UX expertise is world-class. They redesigned our entire platform and made it accessible, beautiful, and incredibly user-friendly. Retention improved by 45%.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Lucas Silva",
    role: "Agency Owner, Brazil",
    content: "The mobile app design they created is absolutely gorgeous. Every screen, every micro-interaction, every color choice feels intentional. Highly recommended.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

// Split data into 3 columns
const chunk1 = reviews.slice(0, 3);
const chunk2 = reviews.slice(3, 6);
const chunk3 = reviews.slice(6, 9);

const TestimonialCard = ({ data }: { data: typeof reviews[0] }) => (
  <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl mb-6 break-inside-avoid transition-colors duration-300">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
      ))}
    </div>
    <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed text-sm md:text-base font-medium">
      "{data.content}"
    </p>
    <div className="flex items-center gap-4">
      <img src={data.img} alt={data.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-zinc-800" />
      <div>
        <h4 className="text-zinc-900 dark:text-white font-bold text-sm">{data.name}</h4>
        <p className="text-zinc-500 text-xs">{data.role}</p>
      </div>
    </div>
  </div>
);

// Marquee Column Component
const MarqueeColumn = ({ items, duration }: { items: typeof reviews, duration: number }) => (
  <div className="relative h-full overflow-hidden">
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-50%" }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="flex flex-col"
    >
      {/* Render items twice to create seamless loop */}
      {[...items, ...items].map((item, i) => (
        <TestimonialCard key={i} data={item} />
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6">
            <Quote className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Our Clients <span className="text-zinc-400">Reviews</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl mx-auto">
            Check out what our clients have to say about our work. We are proud to have worked with some of the best in the industry.
          </p>
        </div>

        {/* 
           MASONRY MARQUEE GRID 
           Height is fixed to contain the scrolling content.
           Mask image creates the fade effect at top and bottom.
        */}
        <div className="relative h-[800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden 
             [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          
          {/* Column 1 - Slow Speed */}
          <MarqueeColumn items={chunk1} duration={45} />
          
          {/* Column 2 - Medium Speed (Hidden on mobile) */}
          <div className="hidden md:block">
            <MarqueeColumn items={chunk2} duration={35} />
          </div>

          {/* Column 3 - Fast Speed (Hidden on tablet/mobile) */}
          <div className="hidden lg:block">
            <MarqueeColumn items={chunk3} duration={40} />
          </div>

        </div>

      </div>
    </section>
  );
};