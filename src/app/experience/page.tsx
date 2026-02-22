"use client";

import { experiences } from "@/content/experience/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: any = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-20 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
          Professional Journey
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Experience & <span className="text-muted-foreground/40">History</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Pioneering the intersection of biotechnology and artificial intelligence through 
          hands-on research and high-performance software engineering.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            variants={item}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot Animation */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125 duration-300">
               <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </div>
            
            {/* Card Content */}
            <Card className="w-[calc(100%-4rem)] md:w-[45%] bg-card/40 backdrop-blur-md border-muted/50 group-hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <CardHeader className="p-8 pb-4 relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                    <p className="font-black text-primary uppercase tracking-wider text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 text-xs text-muted-foreground/60 font-medium mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary/40" />
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary/40" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6 relative">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 shadow-[0_0_5px_rgba(var(--primary-rgb),0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-muted/30">
                  {exp.linkedSkills?.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[10px] font-bold uppercase tracking-tighter bg-primary/5 text-primary border-none px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
