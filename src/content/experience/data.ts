import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "MIT Media Lab",
    role: "Research Assistant",
    location: "Cambridge, MA",
    startDate: "2024-06",
    current: true,
    description: [
      "Developing machine learning models for protein-ligand binding affinity prediction.",
      "Optimizing molecular dynamics simulations using JAX-based frameworks.",
      "Collaborating with experimentalists to validate computational results."
    ],
    linkedSkills: ["Python", "PyTorch", "Structural Biology"]
  },
  {
    id: "2",
    company: "BioTech Innovators",
    role: "Bioinformatics Intern",
    location: "Remote",
    startDate: "2023-05",
    endDate: "2023-08",
    current: false,
    description: [
      "Built automated pipelines for processing single-cell RNA-seq data.",
      "Reduced processing time by 40% through parallelization in Nextflow.",
      "Visualized differential gene expression for multidisciplinary teams."
    ],
    linkedSkills: ["R", "Genomics", "Docker"]
  }
];
