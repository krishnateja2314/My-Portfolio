import { getAllBlogs } from "@/lib/getBlogs";
import BlogList from "@/components/blog/BlogList";
import type { BlogMeta } from "@/lib/getBlogs";

export default function BlogPage() {
  const blogs: BlogMeta[] = getAllBlogs();
  return <BlogList posts={blogs} />;
}
