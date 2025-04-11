"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeClient({ blogs }: { blogs: any[] }) {
  return (
    <section className="container px-4 md:px-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Latest Blog Post
        </h2>
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block mt-4 group"
          >
            <h3 className="text-xl font-semibold group-hover:underline">
              {blog.title}
            </h3>
            <p className="text-muted-foreground">{blog.date}</p>
          </Link>
        ))}
        <div className="mt-4">
          <Button variant="outline" asChild>
            <Link
              href="/blog"
              className="group inline-flex items-center transition-all"
            >
              Read All Blogs
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
