"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
            className="group mt-6 block rounded-lg border p-4 transition hover:shadow-sm md:flex md:items-start md:gap-6"
          >
            {blog.images?.[0] && (
              <div className="relative w-full max-w-[300px] aspect-video rounded-md overflow-hidden border">
                <Image
                  src={blog.images[0]}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            <div className="mt-4 md:mt-0 space-y-2">
              <h3 className="text-xl font-semibold group-hover:underline">
                {blog.title}
              </h3>

              <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-4">
                <span>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                {blog.readingTime && (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blog.readingTime}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {blog.tags?.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}

        <div className="mt-6">
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
