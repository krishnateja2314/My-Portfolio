import { getAllBlogs } from "@/lib/getBlogs";
import BlogList from "@/components/blog/BlogList";

export default function BlogPage() {
  const blogs = getAllBlogs();
  return <BlogList posts={blogs} />;
}
