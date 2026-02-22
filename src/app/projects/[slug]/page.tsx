import { getProjectBySlug, getAllProjects } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Calendar, CheckCircle2, ListTodo } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectData = await getProjectBySlug(slug);

  if (!projectData) {
    notFound();
  }

  const { meta, content } = projectData;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl space-y-12">
      <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to Projects
      </Link>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {meta.category.map((cat) => (
            <Badge key={cat} variant="default" className="capitalize">
              {cat}
            </Badge>
          ))}
          <Badge variant="outline" className="capitalize">
            {meta.status}
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{meta.title}</h1>
        
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {new Date(meta.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          {meta.githubUrl && (
            <a href={meta.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 prose dark:prose-invert max-w-none">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed">{meta.problemStatement}</p>
          </section>

          <section className="mt-8">
            <MDXRemote source={content} />
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-xl border space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <ListTodo className="h-5 w-5 text-primary" />
              Role
            </h3>
            <p className="text-sm text-muted-foreground">{meta.role}</p>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl border space-y-4">
            <h3 className="font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {meta.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-background">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl border space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Key Results
            </h3>
            <ul className="space-y-2">
              {meta.results.map((result, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary">•</span> {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
