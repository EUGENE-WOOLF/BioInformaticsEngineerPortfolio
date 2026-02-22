import { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Graph Neural Networks for Protein-Ligand Binding Affinity Prediction",
    authors: ["Yuri Doe", "Jane Smith", "John Doe"],
    journal: "Journal of Chemical Information and Modeling",
    year: 2024,
    link: "https://doi.org/10.1021/acs.jcim.xxxxxxx",
    abstract: "We present a novel GNN architecture that incorporates geometric priors for improved binding affinity prediction...",
    isPreprint: false
  },
  {
    id: "pub-2",
    title: "Accelerating Molecular Dynamics with JAX",
    authors: ["Yuri Doe", "Alice Wong"],
    journal: "bioRxiv",
    year: 2023,
    link: "https://doi.org/10.1101/2023.xx.xx.xxxxxx",
    abstract: "In this work, we demonstrate how JAX can be used to significantly speed up MD simulations through automatic differentiation and XLA compilation...",
    isPreprint: true
  }
];
