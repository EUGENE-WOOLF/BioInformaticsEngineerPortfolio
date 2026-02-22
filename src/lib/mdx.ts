import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    } as Project;
  });

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    meta: {
      id: slug,
      ...data,
    } as Project,
    content,
  };
}
