import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  images: string[];
  featured?: boolean;
}

export function getAllProjects(): ProjectMeta[] {
  const dir = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(dir);

  const projects = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return data as ProjectMeta;
  });

  return projects;
}
