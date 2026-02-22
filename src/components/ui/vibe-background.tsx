"use client";

import { motion } from "framer-motion";

export function VibeBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Dynamic Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Modern Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.2] dark:opacity-[0.3]" 
        style={{
          backgroundImage: `linear-gradient(to right, oklch(var(--border) / 0.5) 1px, transparent 1px), 
                            linear-gradient(to bottom, oklch(var(--border) / 0.5) 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)"
        }}
      />

      {/* Subtle Floating Particles/Shapes placeholder */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
