"use client";

import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary-rgb), 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <Card className="flex flex-col h-full overflow-hidden border-muted/50 bg-card/50 backdrop-blur-sm group-hover:border-primary/40 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/5">
        <CardHeader className="p-0">
          <div className="aspect-[16/10] bg-muted relative overflow-hidden">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-gradient-to-br from-primary/10 to-transparent">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-50">
                  {project.category[0]}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </CardHeader>

        <CardContent className="p-6 flex-grow space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="capitalize text-[10px] font-medium tracking-tight bg-primary/10 text-primary border-none"
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-muted-foreground/80 bg-muted/50 px-2.5 py-1 rounded-full border border-border/50"
              >
                #{tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[10px] text-muted-foreground/60 py-1">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all underline-offset-4 hover:underline"
          >
            Explore Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="View Github Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            )
            }
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
