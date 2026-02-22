import { experiences } from "@/content/experience/data";
import { skills } from "@/content/skills/data";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Globe, MapPin } from "lucide-react";

export const metadata = {
  title: "Resume | BioTech & ML Portfolio",
  description: "Curriculum Vitae and professional background.",
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Curriculum Vitae</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my professional and academic background.
          </p>
        </div>
        <Button className="rounded-full shadow-lg">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm space-y-12">
        {/* Header */}
        <div className="border-b pb-8 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary">Yuri Doe</h2>
          <p className="text-xl font-medium">Computational Biologist & ML Engineer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@example.com</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Cambridge, MA</span>
            <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> portfolio.example.com</span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider text-primary flex items-center gap-4">
            Experience
            <div className="grow h-px bg-border"></div>
          </h3>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <span className="text-sm font-medium text-muted-foreground">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="font-semibold text-primary/80">{exp.company} • {exp.location}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider text-primary flex items-center gap-4">
            Skills
            <div className="grow h-px bg-border"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill) => (
              <div key={skill.category} className="space-y-2">
                <h4 className="font-bold text-sm uppercase text-primary/70">{skill.category}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider text-primary flex items-center gap-4">
            Education
            <div className="grow h-px bg-border"></div>
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
              <h4 className="text-lg font-bold">M.S. in Computational Biology</h4>
              <span className="text-sm font-medium text-muted-foreground">2022 – 2024</span>
            </div>
            <p className="font-semibold text-primary/80">University of California, Berkeley</p>
            <p className="text-sm text-muted-foreground">Relevant Coursework: Advanced Algorithms, Population Genomics, Deep Learning in Biology.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
