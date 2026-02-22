import { getAllProjects } from "@/lib/mdx";
import { ProjectGrid } from "@/components/project-grid";

export const metadata = {
  title: "Projects | BioTech & ML Portfolio",
  description: "A showcase of my research, software, and machine learning projects in bioinformatics.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 space-y-12">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my work spanning computational biology, deep learning, 
          and software engineering.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </div>
  );
}
