import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPost from "@/components/blog/BlogPost";
import { getAllBlogs } from "@/lib/getBlogs";

type BlogPostData = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  images?: string[];
  excerpt: string;
  readingTime: string;
};

// Remove the unused PageProps interface and use inline types instead
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const posts = getAllBlogs() as BlogPostData[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content } = matter(fileContent);
  const mdx = await compileMDX({ source: content });

  return <BlogPost post={post} mdx={mdx.content} />;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = getAllBlogs() as BlogPostData[];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllBlogs() as BlogPostData[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { notFound: true };

  return {
    title: post.title,
    description: post.excerpt,
  };
}
