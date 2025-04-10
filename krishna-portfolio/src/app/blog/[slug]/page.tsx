"use client";

import { useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// This would normally come from MDX files
const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-05-12",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=600&width=1200&text=Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js, the React framework for production.",
    readingTime: "5 min read",
    content:
      "This is a detailed blog post about getting started with Next.js. It would typically be loaded from an MDX file with much more content, including code examples, explanations, and tutorials.",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    date: "2023-06-24",
    tags: ["CSS", "Tailwind CSS", "Web Design"],
    image: "/placeholder.svg?height=600&width=1200&text=Tailwind+CSS",
    excerpt:
      "Discover how to build beautiful, responsive UIs with Tailwind CSS utility-first approach.",
    readingTime: "7 min read",
    content:
      "This is a detailed blog post about mastering Tailwind CSS. It would typically be loaded from an MDX file with much more content, including code examples, explanations, and tutorials.",
  },
  {
    slug: "framer-motion-animations",
    title: "Creating Smooth Animations with Framer Motion",
    date: "2023-08-15",
    tags: ["React", "Animation", "Framer Motion"],
    image: "/placeholder.svg?height=600&width=1200&text=Framer+Motion",
    excerpt:
      "Learn how to add beautiful animations to your React applications using Framer Motion.",
    readingTime: "6 min read",
    content:
      "This is a detailed blog post about creating animations with Framer Motion. It would typically be loaded from an MDX file with much more content, including code examples, explanations, and tutorials.",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    date: "2023-09-30",
    tags: ["TypeScript", "React", "Web Development"],
    image: "/placeholder.svg?height=600&width=1200&text=TypeScript",
    excerpt:
      "Improve your React code quality with these TypeScript best practices and patterns.",
    readingTime: "8 min read",
    content:
      "This is a detailed blog post about TypeScript best practices. It would typically be loaded from an MDX file with much more content, including code examples, explanations, and tutorials.",
  },
  {
    slug: "responsive-design-techniques",
    title: "Modern Responsive Design Techniques",
    date: "2023-11-05",
    tags: ["CSS", "Responsive Design", "Web Design"],
    image: "/placeholder.svg?height=600&width=1200&text=Responsive+Design",
    excerpt:
      "Explore modern techniques for creating responsive websites that work on any device.",
    readingTime: "6 min read",
    content:
      "This is a detailed blog post about responsive design techniques. It would typically be loaded from an MDX file with much more content, including code examples, explanations, and tutorials.",
  },
  {
    slug: "state-management-in-react",
    title: "State Management in React Applications",
    date: "2024-01-18",
    tags: ["React", "State Management", "Web Development"],
    image: "/placeholder.svg?height=600&width=1200&text=State+Management",
    excerpt:
      "Compare different state management solutions for React applications and when to use each.",
    readingTime: "9 min read",
    content:
      "This is a detailed blog post about state management in React. It would typically be loaded from an MDX file with much more content, including code examples, explanations, and tutorials.",
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center text-muted-foreground">
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

        <div className="mt-8 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">{post.excerpt}</p>

          <div className="mt-6">{post.content}</div>
        </div>
      </motion.div>
    </div>
  );
}
