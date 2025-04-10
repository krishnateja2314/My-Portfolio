"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// This would normally come from MDX files
const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-05-12",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=400&width=800&text=Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js, the React framework for production.",
    readingTime: "5 min read",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    date: "2023-06-24",
    tags: ["CSS", "Tailwind CSS", "Web Design"],
    image: "/placeholder.svg?height=400&width=800&text=Tailwind+CSS",
    excerpt:
      "Discover how to build beautiful, responsive UIs with Tailwind CSS utility-first approach.",
    readingTime: "7 min read",
  },
  {
    slug: "framer-motion-animations",
    title: "Creating Smooth Animations with Framer Motion",
    date: "2023-08-15",
    tags: ["React", "Animation", "Framer Motion"],
    image: "/placeholder.svg?height=400&width=800&text=Framer+Motion",
    excerpt:
      "Learn how to add beautiful animations to your React applications using Framer Motion.",
    readingTime: "6 min read",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    date: "2023-09-30",
    tags: ["TypeScript", "React", "Web Development"],
    image: "/placeholder.svg?height=400&width=800&text=TypeScript",
    excerpt:
      "Improve your React code quality with these TypeScript best practices and patterns.",
    readingTime: "8 min read",
  },
  {
    slug: "responsive-design-techniques",
    title: "Modern Responsive Design Techniques",
    date: "2023-11-05",
    tags: ["CSS", "Responsive Design", "Web Design"],
    image: "/placeholder.svg?height=400&width=800&text=Responsive+Design",
    excerpt:
      "Explore modern techniques for creating responsive websites that work on any device.",
    readingTime: "6 min read",
  },
  {
    slug: "state-management-in-react",
    title: "State Management in React Applications",
    date: "2024-01-18",
    tags: ["React", "State Management", "Web Development"],
    image: "/placeholder.svg?height=400&width=800&text=State+Management",
    excerpt:
      "Compare different state management solutions for React applications and when to use each.",
    readingTime: "9 min read",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search query and selected tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Thoughts, tutorials, and insights on web development and design
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTag && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="h-9"
              >
                Clear filter
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="grid gap-6 md:grid-cols-[2fr_3fr] items-start rounded-lg border p-4 transition-colors hover:border-primary/50">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readingTime}
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag(null);
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
