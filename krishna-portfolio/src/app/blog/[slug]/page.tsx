import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPost from "@/components/blog/BlogPost";
import { getAllBlogs } from "@/lib/getBlogs";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const posts = getAllBlogs();
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Strip frontmatter first
  const { content } = matter(fileContent);

  const mdx = await compileMDX({ source: content });

  return <BlogPost post={post} mdx={mdx.content} />;
}
