import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  images: string[]; 
  excerpt: string;
  readingTime: string;
};

export function getAllBlogs(): BlogMeta[] {
  const postsDir = path.join(process.cwd(), "content", "blog");
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      images: data.images,
      excerpt: data.excerpt,
      readingTime: data.readingTime,
    };
  });
}
