"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    title: "Protein Design Research",
    description: "Developing GNNs for predicting protein binding affinity at MIT Media Lab.",
    status: "Active Research",
  },
  {
    title: "Open Source Bioinformatics Tooling",
    description: "Contributing to state-of-the-at MSA alignment pipelines for genomic scalability.",
    status: "Ongoing Effort",
  },
];

export function CurrentlyWorkingOn() {
  return (
    <section className="container mx-auto px-4 py-24 relative overflow-hidden">
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] uppercase font-black tracking-widest border border-primary/10">
            Real-time Focus
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Currently <span className="text-muted-foreground/40">working on</span></h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            The active projects and specialized research areas I am currently pioneering.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/40 backdrop-blur-md border-muted/50 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{activity.title}</h3>
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[10px] font-bold uppercase py-1">
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">{activity.description}</p>
                  
                  <div className="pt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-xs font-bold uppercase tracking-widest">Active Track</span>
                    <div className="h-[1px] w-8 bg-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
