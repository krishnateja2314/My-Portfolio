import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogs() {
  const files = fs.readdirSync(blogDirectory);

  return files.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: data.slug || filename.replace(/\.mdx?$/, ''),
    };
  });
}
