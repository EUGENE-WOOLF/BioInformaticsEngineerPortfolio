export type ProjectCategory = 'research' | 'ml' | 'bioinformatics' | 'software';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory[];
  tags: string[];
  problemStatement: string;
  role: string;
  techStack: string[];
  lessonsLearned: string[];
  results: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  status: 'ongoing' | 'completed' | 'archived';
  date: string;
  slug: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link: string;
  abstract: string;
  isPreprint?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  linkedSkills?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
