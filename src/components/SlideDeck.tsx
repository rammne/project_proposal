"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Server, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  Search, 
  Smartphone, 
  Database, 
  Globe, 
  Lock, 
  Clock, 
  DollarSign,
  CheckCircle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Slide Data Structure
type Slide = {
  id: number;
  type: "title" | "split" | "critical" | "cards" | "diagram" | "tech" | "financial" | "timeline" | "investment" | "retainer" | "closing";
  title?: string;
  subtitle?: string;
  content?: any;
  footer?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    title: "Digital Reputation & Infrastructure Modernization",
    subtitle: "Transitioning from Rental Liabilities to Sovereign Assets",
    footer: "Prepared by [Your Name]"
  },
  {
    id: 2,
    type: "split",
    title: "The Current Reality",
    content: {
      points: [
        { icon: Globe, text: "Currently 'Renting' infrastructure (Webflow)" },
        { icon: Database, text: "Zero data ownership or sovereignty" },
        { icon: Smartphone, text: "Bleeding enrollments due to mobile incompatibility" }
      ]
    }
  },
  {
    id: 3,
    type: "critical",
    title: "The Reputation Liability",
    content: {
      headline: "The 'Broken Front Door'",
      text: "The #2 result on Google is a negative forum thread about a past tragedy. This is the first thing parents see. It is a digital liability that requires an engineered solution."
    }
  },
  {
    id: 4,
    type: "cards",
    title: "Three Strategic Pillars",
    content: [
      { 
        title: "Risk Mitigation", 
        text: "Suppressing negative search results via SEO engineering.",
        icon: Shield 
      },
      { 
        title: "Conversion Optimization", 
        text: "Fixing the 'Mobile Problem' (80% of applicants are on mobile).",
        icon: Smartphone 
      },
      { 
        title: "Asset Ownership", 
        text: "Moving from OpEx (Rent) to CapEx (Owned Asset).",
        icon: Server 
      }
    ]
  },
  {
    id: 5,
    type: "diagram",
    title: "Controlling the Narrative",
    subtitle: "The 'Barnacle SEO' Solution",
    content: {
      text: "We will create official profiles on LinkedIn, Medium, and Crunchbase + use Schema Markup to push the Reddit thread to Page 2."
    }
  },
  {
    id: 6,
    type: "tech",
    title: "Engineering, Not Just Web Design",
    subtitle: "The Enterprise Stack",
    content: {
      tech: ["Next.js", "Docker", "Payload CMS"],
      argument: "This is a self-healing, secure, containerized system. We own the code."
    }
  },
  {
    id: 7,
    type: "financial",
    title: "Financial Efficiency",
    content: {
      current: { label: "Webflow (Current)", cost: "$350/year", type: "Eternal Rent" },
      proposed: { label: "VPS (Proposed)", cost: "$72/year", type: "Owned Utility" },
      text: "80% reduction in annual operating costs."
    }
  },
  {
    id: 8,
    type: "timeline",
    title: "Implementation Timeline (16 Weeks)",
    content: [
      { weeks: "1-4", phase: "Strategic Design & Gap Analysis" },
      { weeks: "5-10", phase: "Core Engineering & Data Migration" },
      { weeks: "11-14", phase: "Brand Defense Implementation" },
      { weeks: "16", phase: "Launch & Training" }
    ]
  },
  {
    id: 9,
    type: "investment",
    title: "Investment Breakdown",
    content: {
      amount: "P150,000",
      note: "One-time investment",
      items: ["UI/UX Design", "Custom Next.js Engineering", "Database Virtualization", "Security Hardening"],
      narrative: "Equivalent to the tuition of just 1.5 students. If this saves 2 enrollments, it pays for itself."
    }
  },
  {
    id: 10,
    type: "retainer",
    title: "Reputation Guard & Security Insurance",
    content: {
      price: "P15,000 / Month",
      sub: "(Optional but Recommended)",
      text: "The internet changes. This covers monthly SEO audits to keep Reddit buried, server security patching, and uptime monitoring."
    }
  },
  {
    id: 11,
    type: "closing",
    title: "Secure Our Future",
    subtitle: "Let's turn our digital presence from a liability into our strongest asset."
  }
];

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden relative selection:bg-blue-500/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header/Logo Placeholder */}
        <div className="absolute top-8 left-12 text-slate-500 text-sm tracking-widest uppercase font-semibold">
          Project Proposal
        </div>

        {/* Slide Container */}
        <div className="flex-1 flex items-center justify-center p-12 max-w-7xl mx-auto w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full h-full flex flex-col justify-center"
            >
              {renderSlideContent(slides[currentSlide])}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Progress */}
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-4">
          <div className="flex justify-between items-end px-4">
             <div className="text-slate-500 text-sm">
              {currentSlide + 1} / {slides.length}
             </div>
             <div className="flex gap-4">
               <button 
                 onClick={handlePrev}
                 disabled={currentSlide === 0}
                 className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors disabled:opacity-30 text-slate-200 backdrop-blur-sm"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={handleNext}
                 disabled={currentSlide === slides.length - 1}
                 className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors disabled:opacity-30 text-slate-200 backdrop-blur-sm"
               >
                 <ChevronRight size={24} />
               </button>
             </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function renderSlideContent(slide: Slide) {
  switch (slide.type) {
    case "title":
      return (
        <div className="text-center flex flex-col items-center gap-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-slate-100 to-blue-200"
          >
            {slide.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-slate-400 font-light max-w-3xl"
          >
            {slide.subtitle}
          </motion.p>
          {slide.footer && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-slate-600 uppercase tracking-widest text-sm"
            >
              {slide.footer}
            </motion.div>
          )}
        </div>
      );

    case "split":
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-12 text-slate-100">{slide.title}</h2>
            <div className="space-y-8">
              {slide.content.points.map((point: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 text-xl text-slate-300"
                >
                  <div className="p-4 rounded-xl bg-slate-800/50 text-blue-400">
                    <point.icon size={28} />
                  </div>
                  <span>{point.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center p-8">
             {/* Visualization for 'Renting' */}
             <div className="text-center">
                <AlertTriangle size={64} className="mx-auto text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-amber-500">Vulnerability Detected</h3>
                <p className="mt-2 text-slate-500">Platform Dependency Risk</p>
             </div>
          </div>
        </div>
      );

    case "critical":
      return (
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 px-6 py-2 rounded-full bg-red-900/20 text-red-400 border border-red-900/50 text-sm font-bold uppercase tracking-wider">
            Critical Liability
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">{slide.title}</h2>
          
          <motion.div 
             initial={{ scale: 0.95, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="w-full bg-white text-slate-900 rounded-lg p-6 shadow-2xl max-w-2xl mx-auto mb-8 border-l-4 border-red-500"
          >
            <div className="flex gap-4 items-start">
              <div className="mt-1">
                <Search className="text-blue-600" />
              </div>
              <div className="text-left">
                 <div className="text-blue-800 text-xl font-medium hover:underline cursor-pointer">
                   Reddit: Truth about [College Name] tragedy...
                 </div>
                 <div className="text-green-700 text-sm mb-1">www.reddit.com › r › city › comments</div>
                 <div className="text-slate-600 text-sm">
                   Detailed discussion about the recent incident involving...
                 </div>
              </div>
            </div>
          </motion.div>

          <p className="text-2xl text-slate-400 leading-relaxed">
            {slide.content.text}
          </p>
        </div>
      );

    case "cards":
      return (
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">{slide.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {slide.content.map((card: any, i: number) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors"
              >
                <div className="mb-6 text-blue-400 bg-blue-900/20 p-4 rounded-xl inline-block">
                  <card.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case "diagram":
      return (
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-2xl text-blue-400 mb-16">{slide.subtitle}</p>
          
          <div className="relative py-12">
             {/* Main Node */}
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="w-32 h-32 bg-blue-600 rounded-full mx-auto flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(37,99,235,0.5)]"
             >
               <span className="font-bold text-lg">Official Site</span>
             </motion.div>

             {/* Satellites */}
             {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-24 h-24 flex items-center justify-center"
                  style={{
                    marginTop: -48,
                    marginLeft: -48,
                    transform: `rotate(${i * 120}deg) translate(180px) rotate(-${i * 120}deg)`
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center border border-slate-700"
                  >
                     <span className="text-xs font-bold text-slate-400">
                       {["LinkedIn", "Medium", "Crunchbase"][i]}
                     </span>
                  </motion.div>
                </div>
             ))}
             
             {/* Connection Lines */}
             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30">
               <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeDasharray="10 10" className="text-blue-500 animate-spin-slow" />
             </svg>
          </div>

          <p className="mt-12 text-xl text-slate-400 max-w-2xl mx-auto">
            {slide.content.text}
          </p>
        </div>
      );

    case "tech":
      return (
        <div className="flex flex-col md:flex-row gap-12 items-center">
           <div className="flex-1">
              <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-2xl text-blue-400 mb-8">{slide.subtitle}</p>
              <p className="text-xl text-slate-300 mb-8 border-l-4 border-blue-500 pl-6 italic">
                "{slide.content.argument}"
              </p>
           </div>
           <div className="flex-1 grid grid-cols-1 gap-6 w-full">
              {slide.content.tech.map((tech: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center justify-between"
                >
                  <span className="font-mono text-xl">{tech}</span>
                  <CheckCircle className="text-green-500" size={20} />
                </motion.div>
              ))}
           </div>
        </div>
      );

    case "financial":
       return (
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-16 text-center">{slide.title}</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-12">
             {/* Current */}
             <div className="flex-1 bg-slate-900/30 p-8 rounded-2xl border border-red-900/30 flex flex-col items-center opacity-70">
                <div className="text-red-400 font-bold uppercase tracking-wider mb-2">Rent (Liability)</div>
                <div className="text-4xl font-bold mb-2">{slide.content.current.cost}</div>
                <div className="text-slate-500">{slide.content.current.label}</div>
             </div>
             
             {/* Proposed */}
             <div className="flex-1 bg-blue-900/20 p-8 rounded-2xl border border-blue-500/50 flex flex-col items-center transform scale-110 shadow-2xl">
                <div className="text-blue-400 font-bold uppercase tracking-wider mb-2">Owned (Asset)</div>
                <div className="text-5xl font-bold mb-2 text-white">{slide.content.proposed.cost}</div>
                <div className="text-blue-200">{slide.content.proposed.label}</div>
             </div>
          </div>
          <p className="text-center text-2xl text-green-400 font-bold">
            {slide.content.text}
          </p>
        </div>
       );

    case "timeline":
      return (
        <div className="w-full">
           <h2 className="text-4xl font-bold mb-16 text-center">{slide.title}</h2>
           <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2" />
             <div className="grid grid-cols-4 gap-4">
                {slide.content.map((item: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="relative pt-12 text-center"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-950 border-4 border-blue-500 rounded-full z-10" />
                     <div className="text-blue-400 font-bold text-lg mb-2">Week {item.weeks}</div>
                     <div className="text-slate-300 text-sm font-medium px-4">{item.phase}</div>
                  </motion.div>
                ))}
             </div>
           </div>
        </div>
      );

    case "investment":
      return (
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 text-right border-r border-slate-800 pr-16">
             <div className="text-slate-400 text-xl mb-2">{slide.content.note}</div>
             <div className="text-7xl md:text-8xl font-bold text-white mb-4">{slide.content.amount}</div>
             <p className="text-lg text-slate-500 italic max-w-md ml-auto">
               {slide.content.narrative}
             </p>
          </div>
          <div className="flex-1">
             <h3 className="text-2xl font-bold mb-8 text-blue-400">Includes:</h3>
             <ul className="space-y-4">
               {slide.content.items.map((item: string, i: number) => (
                 <motion.li 
                   key={i}
                   initial={{ x: 20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.4 + i * 0.1 }}
                   className="flex items-center gap-4 text-xl"
                 >
                   <div className="w-2 h-2 bg-blue-500 rounded-full" />
                   {item}
                 </motion.li>
               ))}
             </ul>
          </div>
        </div>
      );

    case "retainer":
      return (
        <div className="text-center max-w-4xl mx-auto">
           <div className="inline-block p-4 rounded-full bg-blue-900/20 text-blue-400 mb-8">
             <Shield size={48} />
           </div>
           <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
           <div className="text-4xl text-slate-200 font-bold mb-2">{slide.content.price}</div>
           <div className="text-slate-500 mb-12">{slide.content.sub}</div>
           <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
             {slide.content.text}
           </p>
        </div>
      );

    case "closing":
      return (
        <div className="text-center">
          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.5 }}
          >
             <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
               {slide.title}
             </h2>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-blue-400 font-light max-w-3xl mx-auto"
          >
            {slide.subtitle}
          </motion.p>
          <motion.button
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5 }}
             className="mt-16 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
             onClick={() => window.location.reload()}
          >
            Replay Presentation
          </motion.button>
        </div>
      );

    default:
      return <div>Slide content missing</div>;
  }
}

