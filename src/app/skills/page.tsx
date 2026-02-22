"use client";

import { skills } from "@/content/skills/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Database, Microscope, Wrench, Binary, Cpu, Activity, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: Record<string, any> = {
  "Programming": Code2,
  "ML & Data Science": Database,
  "Bioinformatics": Microscope,
  "Tools & DevOps": Wrench,
};

const categoryVibes: Record<string, any> = {
  "Programming": { icon: Binary, color: "text-blue-400" },
  "ML & Data Science": { icon: Cpu, color: "text-purple-400" },
  "Bioinformatics": { icon: Activity, color: "text-emerald-400" },
  "Tools & DevOps": { icon: Zap, color: "text-orange-400" },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: any = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
          Technical Arsenal
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Skills & <span className="text-muted-foreground/40">Expertise</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A multi-disciplinary toolkit designed to tackle the most complex problems 
          in biological computation and machine learning infrastructure.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skillGroup) => {
          const Icon = iconMap[skillGroup.category] || Code2;
          const Vibe = categoryVibes[skillGroup.category] || { icon: Code2, color: "text-primary" };
          const VibeIcon = Vibe.icon;

          return (
            <motion.div key={skillGroup.category} variants={item} whileHover={{ y: -8 }} className="group">
              <Card className="h-full bg-card/40 backdrop-blur-md border-muted/50 group-hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <VibeIcon className="w-24 h-24" />
                </div>

                <CardHeader className="p-8 pb-4 flex flex-col items-start gap-4">
                  <div className={`p-3 rounded-xl bg-primary/5 border border-primary/10 ${Vibe.color} shadow-sm group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skillItem) => (
                      <Badge key={skillItem} variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] font-bold uppercase tracking-tighter px-2.5 py-1 group-hover:bg-primary/10 transition-colors">
                        {skillItem}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <div className="h-1 w-full bg-muted/30 relative overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative group bg-primary/5 rounded-[2rem] p-10 md:p-16 border border-primary/10 space-y-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em]">
            <Binary className="h-4 w-4" />
            Continuous Evolution
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Beyond the <span className="text-primary/40">Current Stack</span></h2>
          <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
            I am constantly expanding my expertise in <span className="text-foreground">generative biology</span> and <span className="text-foreground">distributed computing</span>. 
            Currently exploring protein design using diffusion models and architecting high-performance Rust internals 
            for genomic scalability.
          </p>
          <div className="pt-4">
             <Button variant="link" className="text-primary p-0 text-lg font-bold group/btn" asChild>
                <Link href="/projects" className="flex items-center">
                  Follow my learning journey <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
             </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

