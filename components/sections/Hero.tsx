"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from 'next/image';

const words = [
  "Search Engine Optimization.",
  "Performance Marketing.",
  "Web Design & Development.",
  "Social Media Marketing.",
  "Google Analytics.",
  "Content Marketing.",
  "Email Marketing.",
];

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[110vh] flex flex-col items-center pt-32 px-4 overflow-hidden bg-zinc-950"
    >
      {/* 1. VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/80 dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent dark:from-[#050505] dark:via-transparent dark:to-transparent" />
      </div>

      {/* 2. CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-300">
            Accepting New Clients for 2026
          </span>
        </motion.div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-zinc-900 dark:text-white leading-[1.1] min-h-[3em] md:min-h-[2.5em]">
          Explore {" "}
          {/* 
             1. STATIC TEXT: i (Orange), Braine (Blue)
          */}
          <span className="inline-block font-black">
            <span style={{ color: "#FF6B00" }}>i</span>
            <span style={{ color: "#2B7ABC" }}>Braine</span>
          </span>{" "}
          To <br className="hidden md:block" />
          See The Future Of <br />
          
          {/* 
             2. TYPEWRITER TEXT: Gradient from Orange to Blue
          */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#2B7ABC] animate-gradient">
            {text}
          </span>
          {/* Blinking Cursor */}
          <span className="animate-pulse text-[#FF6B00] font-light">|</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Stop blending in. iBraine fuses high-end aesthetic design with
          algorithmic marketing strategies to crush your competition.
        </p>

        <div className="flex justify-center gap-4 mb-20">
          <Button className="h-14 px-8 text-lg shadow-xl shadow-orange-500/20 z-20">
            Start Growing
          </Button>
          <Button
            variant="outline"
            className="h-14 px-8 text-lg z-20 text-zinc-900 dark:text-white border-zinc-300 dark:border-white/20"
          >
            View Our Work
          </Button>
        </div>
      </motion.div>

      {/* 3. VISUALS */}
      <div className="relative z-10 w-full max-w-6xl h-[400px] mt-8 pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0, rotateX: 20 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] md:w-[800px] h-[500px] bg-white dark:bg-zinc-900 rounded-t-3xl border-t border-x border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        >
          <div className="h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center gap-2 px-4 border-b border-zinc-200 dark:border-zinc-700">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-4 w-64 h-6 bg-zinc-200 dark:bg-zinc-700 rounded-md opacity-50"></div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-90 dark:opacity-80"
            alt="Dashboard"
            width={1200}
            height={800}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute left-4 md:left-20 top-20 bg-white/80 dark:bg-zinc-800/80 p-5 rounded-2xl shadow-xl border border-zinc-200 dark:border-white/10 w-64 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Revenue (Q4)</p>
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                $124,500
              </p>
            </div>
          </div>
          <div className="h-16 flex items-end gap-1">
            {[40, 60, 45, 70, 85, 60, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex-1 bg-green-500 rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};