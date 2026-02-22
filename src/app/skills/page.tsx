import { skills } from "@/content/skills/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Microscope, Wrench } from "lucide-react";

export const metadata = {
  title: "Skills | BioTech & ML Portfolio",
  description: "Technical skills and expertise in bioinformatics, ML, and software engineering.",
};

const iconMap: Record<string, any> = {
  "Programming": Code2,
  "ML & Data Science": Database,
  "Bioinformatics": Microscope,
  "Tools & DevOps": Wrench,
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 space-y-12">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Skills & Expertise</h1>
        <p className="text-lg text-muted-foreground">
          A breakdown of my technical toolkit across various domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup) => {
          const Icon = iconMap[skillGroup.category] || Code2;
          return (
            <Card key={skillGroup.category} className="border-muted/50">
              <CardHeader className="pb-3 flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-muted/50">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 space-y-6">
        <h2 className="text-2xl font-bold">Continuous Learning</h2>
        <p className="text-muted-foreground max-w-2xl">
          I am constantly expanding my expertise in generative biology and distributed computing. 
          Currently exploring protein design using diffusion models and improving my Rust skills for high-performance bioinformatics tools.
        </p>
      </div>
    </div>
  );
}
