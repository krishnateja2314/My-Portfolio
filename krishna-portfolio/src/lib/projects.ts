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
    files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map(async (filename) => {
        const filePath = path.join(dir, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);
        return {
          title: data.title ?? "Untitled",
          slug: data.slug ?? filename.replace(/\.mdx?$/, ""),
          description: data.description ?? "",
          date: data.date ?? "",
          tech: data.tech ?? [],
          repo: data.repo || undefined,
          demo: data.demo || undefined,
          images: data.images ?? [],
          featured: Boolean(data.featured),
          content,
        } as ProjectMeta;
      })
  );

  // Newest first
  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
