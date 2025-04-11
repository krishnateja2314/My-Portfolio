import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  title: string;
  slug: string;
  description: string;
  date: string; 
  tech: string[];
  repo?: string;
  demo?: string;
  images: string[];
  featured?: boolean;
  content?: string; 
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const dir = path.join(process.cwd(), "content", "projects");
  const files = await fs.readdir(dir);

  const projects = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data,content  } = matter(fileContent);
      return {...data,content } as ProjectMeta;
    })
  );

  return projects;
}
