"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    images?: string[];
    excerpt: string;
    readingTime: string;
  };
  mdx: React.ReactNode;
}

export default function BlogPost({ post, mdx }: BlogPostProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-16 px-4 md:px-8">
      {/* Back Button */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readingTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        {post.images?.[0] && (
          <div className="mt-10 overflow-hidden rounded-xl shadow-sm border">
            <Image
              src={post.images[0]}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <article
          className="mt-12 prose prose-gray dark:prose-invert max-w-none
             prose-img:rounded-xl prose-img:shadow-md prose-img:border
             prose-img:my-8 prose-img:mx-auto prose-img:max-w-full
             prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed"
        >
          {mdx}
        </article>
      </motion.div>
    </div>
  );
}
