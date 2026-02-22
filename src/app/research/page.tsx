import { publications } from "@/content/research/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Research | BioTech & ML Portfolio",
  description: "Academic publications, preprints, and lab collaborations.",
};

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 space-y-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Research & Publications</h1>
        <p className="text-lg text-muted-foreground">
          My academic work focused on the intersection of deep learning and structural biology.
        </p>
      </div>

      <section className="space-y-8">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2>Academic Publications</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub) => (
            <Card key={pub.id} className="border-muted/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  </CardTitle>
                  {pub.isPreprint && (
                    <Badge variant="outline" className="shrink-0">Preprint</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pub.authors.join(", ")}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span>{pub.journal}</span>
                  <span className="text-muted-foreground">•</span>
                  <span>{pub.year}</span>
                </div>
                <p className="text-sm text-muted-foreground italic line-clamp-2">
                  "{pub.abstract}"
                </p>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  Read Paper <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h2>Lab Affiliations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6 space-y-2">
              <h3 className="font-bold">MIT Media Lab</h3>
              <p className="text-sm text-muted-foreground">Biomolecular Design Group</p>
              <p className="text-sm">Advisor: Prof. Kevin Esvelt</p>
            </CardContent>
          </Card>
          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6 space-y-2">
              <h3 className="font-bold">Broad Institute</h3>
              <p className="text-sm text-muted-foreground">Genomic Analysis Platform</p>
              <p className="text-sm">Collaborator: Dr. Anne Carpenter</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
