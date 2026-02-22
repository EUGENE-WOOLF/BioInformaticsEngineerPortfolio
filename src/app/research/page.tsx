"use client";

import { publications } from "@/content/research/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, GraduationCap, FileText, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
         <Microscope className="w-96 h-96 text-primary rotate-12" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
          Academic Contributions
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Research & <span className="text-muted-foreground/40">Publications</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My academic work focused on the intersection of deep learning and structural biology, 
          pioneering new methods for biomolecular simulation and mapping.
        </p>
      </motion.div>

      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 text-2xl font-bold tracking-tight">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2>Academic Publications</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {publications.map((pub) => (
            <motion.div key={pub.id} variants={item} whileHover={{ y: -5 }} className="group">
              <Card className="bg-card/40 backdrop-blur-md border-muted/50 group-hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start gap-6">
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 mb-2">
                         <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{pub.year}</span>
                         <span className="w-4 h-[1px] bg-muted-foreground/30"></span>
                         <span className="text-[10px] font-medium text-muted-foreground uppercase">{pub.journal}</span>
                       </div>
                      <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors cursor-pointer">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          {pub.title}
                        </a>
                      </CardTitle>
                    </div>
                    {pub.isPreprint && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-none uppercase text-[10px] font-bold px-3 py-1">Preprint</Badge>
                    )}
                  </div>
                  <p className="text-base text-muted-foreground/80 font-medium pt-2">
                    {pub.authors.join(", ")}
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-6">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-primary/20 rounded-full" />
                    <p className="text-sm text-muted-foreground italic leading-relaxed pl-6">
                      "{pub.abstract}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                     <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                    >
                      View Publication <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                    
                    <div className="flex items-center gap-2 text-muted-foreground/40">
                      <FileText className="h-4 w-4" />
                      <span className="text-[10px] font-mono">PDF AVAILABLE</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 text-2xl font-bold tracking-tight">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h2>Lab Affiliations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="bg-primary/5 border-primary/10 hover:bg-primary/10 transition-colors group">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-primary/20 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="font-black text-primary italic">MIT</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">MIT Media Lab</h3>
                    <p className="text-sm text-primary font-medium tracking-tight">Biomolecular Design Group</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">Focusing on gene-drive architecture and protein-protein interaction networks.</p>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase">Advisor: Prof. Kevin Esvelt</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Card className="bg-primary/5 border-primary/10 hover:bg-primary/10 transition-colors group">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-primary/20 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="font-black text-primary italic">BRD</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Broad Institute</h3>
                    <p className="text-sm text-primary font-medium tracking-tight">Genomic Analysis Platform</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">Collaborating on large-scale cell painting assays and morphological profiling.</p>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase">Collaborator: Dr. Anne Carpenter</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
