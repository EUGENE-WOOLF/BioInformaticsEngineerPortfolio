import { experiences } from "@/content/experience/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Experience | BioTech & ML Portfolio",
  description: "Work history, internships, and professional contributions.",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 space-y-12">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Experience</h1>
        <p className="text-lg text-muted-foreground">
          My professional journey in research and software engineering.
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            
            {/* Card Content */}
            <Card className="w-[calc(100%-4rem)] md:w-[45%] border-muted/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <p className="font-medium text-primary">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.linkedSkills?.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
