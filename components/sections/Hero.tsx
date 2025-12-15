"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

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
      // Changed min-h-[110vh] to h-screen and added justify-center for perfect centering
      className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-zinc-950"
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
            src="/video/7414128-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/80 dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent dark:from-[#050505] dark:via-transparent dark:to-transparent" />
      </div>

      {/* 2. CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto mt-10 md:mt-0"
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
          <span className="inline-block font-black">
            <span style={{ color: "#FF6B00" }}>i</span>
            <span style={{ color: "#2B7ABC" }}>Braine</span>
          </span>{" "}
          To <br className="hidden md:block" />
          See The Future Of <br />
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#2B7ABC] animate-gradient">
            {text}
          </span>
          <span className="animate-pulse text-[#FF6B00] font-light">|</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Stop blending in. iBraine fuses high-end aesthetic design with
          algorithmic marketing strategies to crush your competition.
        </p>

        <div className="flex justify-center gap-4">
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
    </section>
  );
};