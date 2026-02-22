"use client"

import { useState } from "react"
import { Project, ProjectCategory } from "@/types"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectGridProps {
  projects: Project[]
}

const categories: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: "All", value: "all" },
  { label: "Bioinformatics", value: "bioinformatics" },
  { label: "Machine Learning", value: "ml" },
  { label: "Research", value: "research" },
  { label: "Software", value: "software" },
]

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>("all")

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category.includes(filter as ProjectCategory))

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={filter === cat.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(cat.value)}
            className="rounded-full px-6"
          >
            {cat.label}
          </Button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectGridItem key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

function ProjectGridItem({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <ProjectCard project={project} />
    </motion.div>
  )
}
