"use client";

import { useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// This would normally come from MDX files
const projects = [
  {
    slug: "project-1",
    title: "E-commerce Platform",
    date: "2023-04-15",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    image: "/placeholder.svg?height=600&width=1200&text=E-commerce",
    description:
      "A modern e-commerce platform with product listings, cart functionality, and secure checkout.",
    content:
      "This is a detailed description of the e-commerce project. It would typically be loaded from an MDX file with much more content, including details about the project goals, challenges, solutions, and outcomes.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "project-2",
    title: "Portfolio Website",
    date: "2023-06-22",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/placeholder.svg?height=600&width=1200&text=Portfolio",
    description:
      "A sleek portfolio website showcasing projects and skills with smooth animations.",
    content:
      "This is a detailed description of the portfolio project. It would typically be loaded from an MDX file with much more content, including details about the project goals, challenges, solutions, and outcomes.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "project-3",
    title: "Task Management App",
    date: "2023-08-10",
    tags: ["Next.js", "TypeScript", "Supabase"],
    image: "/placeholder.svg?height=600&width=1200&text=Task+App",
    description:
      "A productivity app for managing tasks, projects, and deadlines with real-time updates.",
    content:
      "This is a detailed description of the task management project. It would typically be loaded from an MDX file with much more content, including details about the project goals, challenges, solutions, and outcomes.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "project-4",
    title: "Weather Dashboard",
    date: "2023-09-05",
    tags: ["React", "API Integration", "Chart.js"],
    image: "/placeholder.svg?height=600&width=1200&text=Weather",
    description:
      "A weather dashboard displaying current conditions and forecasts with interactive charts.",
    content:
      "This is a detailed description of the weather dashboard project. It would typically be loaded from an MDX file with much more content, including details about the project goals, challenges, solutions, and outcomes.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "project-5",
    title: "Recipe Finder",
    date: "2023-11-18",
    tags: ["Next.js", "API Integration", "Tailwind CSS"],
    image: "/placeholder.svg?height=600&width=1200&text=Recipe",
    description:
      "A recipe finder app that allows users to search for recipes based on ingredients and dietary preferences.",
    content:
      "This is a detailed description of the recipe finder project. It would typically be loaded from an MDX file with much more content, including details about the project goals, challenges, solutions, and outcomes.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "project-6",
    title: "Social Media Dashboard",
    date: "2024-01-30",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
    image: "/placeholder.svg?height=600&width=1200&text=Social+Media",
    description:
      "A dashboard for managing and analyzing social media accounts and engagement metrics.",
    content:
      "This is a detailed description of the social media dashboard project. It would typically be loaded from an MDX file with much more content, including details about the project goals, challenges, solutions, and outcomes.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
        </div>

        <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
          <h2>Project Overview</h2>
          <p>{project.description}</p>

          <div className="mt-6">{project.content}</div>
        </div>
      </motion.div>
    </div>
  );
}
