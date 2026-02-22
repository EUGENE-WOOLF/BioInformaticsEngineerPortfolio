"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Mail, Globe } from "lucide-react";

export function Hero() {
  const words = "Building the future of Bioinformatics through intelligent software.".split(" ");

  return (
    <section className="relative container mx-auto px-4 pt-16 md:pt-24 pb-28 md:pb-40 flex flex-col items-center justify-center min-h-[80vh]">
      {/* Interactive DNA Helix SVG (Simplified but Aesthetic) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20 pointer-events-none">
        <svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[800px] animate-slow-spin">
          {[...Array(20)].map((_, i) => (
            <motion.g 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.circle
                cx={300 + Math.sin(i * 0.5) * 100}
                cy={i * 40}
                r="4"
                fill="currentColor"
                className="text-primary"
                animate={{
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
              <motion.circle
                cx={300 - Math.sin(i * 0.5) * 100}
                cy={i * 40}
                r="4"
                fill="currentColor"
                className="text-primary/40"
                 animate={{
                  x: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
              <motion.line
                x1={300 + Math.sin(i * 0.5) * 100}
                y1={i * 40}
                x2={300 - Math.sin(i * 0.5) * 100}
                y2={i * 40}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="space-y-8 max-w-4xl text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next-Gen Computational Biology
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-foreground leading-[1.1]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="inline-block mr-[0.2em]"
            >
              {word === "Bioinformatics" ? (
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Bridging the gap between <span className="text-foreground">biological complexity</span> and 
          <span className="text-foreground"> algorithmic intelligence</span> to accelerate drug discovery.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-6"
        >
          <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group">
            <Link href="/projects">
              Explore Research <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <div className="flex items-center gap-4">
             <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-primary/20 hover:bg-primary/5 transition-all text-lg font-medium" asChild>
                <a href="mailto:contact@example.com">
                  Let's Connect
                </a>
             </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="pt-12 flex items-center justify-center gap-8 text-muted-foreground/40"
        >
          <Globe className="h-6 w-6" />
          <Github className="h-6 w-6" />
          <div className="h-[1px] w-12 bg-muted-foreground/20" />
          <span className="text-xs font-mono uppercase tracking-[0.3em]">Based in Cambridge, MA</span>
        </motion.div>
      </div>
    </section>
  );
}
