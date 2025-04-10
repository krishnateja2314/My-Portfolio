"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// This would normally come from MDX files
const projects = [
  {
    slug: "project-1",
    title: "E-commerce Platform",
    date: "2023-04-15",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    image: "/placeholder.svg?height=400&width=600&text=E-commerce",
    description:
      "A modern e-commerce platform with product listings, cart functionality, and secure checkout.",
  },
  {
    slug: "project-2",
    title: "Portfolio Website",
    date: "2023-06-22",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600&text=Portfolio",
    description:
      "A sleek portfolio website showcasing projects and skills with smooth animations.",
  },
  {
    slug: "project-3",
    title: "Task Management App",
    date: "2023-08-10",
    tags: ["Next.js", "TypeScript", "Supabase"],
    image: "/placeholder.svg?height=400&width=600&text=Task+App",
    description:
      "A productivity app for managing tasks, projects, and deadlines with real-time updates.",
  },
  {
    slug: "project-4",
    title: "Weather Dashboard",
    date: "2023-09-05",
    tags: ["React", "API Integration", "Chart.js"],
    image: "/placeholder.svg?height=400&width=600&text=Weather",
    description:
      "A weather dashboard displaying current conditions and forecasts with interactive charts.",
  },
  {
    slug: "project-5",
    title: "Recipe Finder",
    date: "2023-11-18",
    tags: ["Next.js", "API Integration", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600&text=Recipe",
    description:
      "A recipe finder app that allows users to search for recipes based on ingredients and dietary preferences.",
  },
  {
    slug: "project-6",
    title: "Social Media Dashboard",
    date: "2024-01-30",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600&text=Social+Media",
    description:
      "A dashboard for managing and analyzing social media accounts and engagement metrics.",
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on search query and selected tag
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
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
          My Projects
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Explore my latest work and personal projects
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Input
              placeholder="Search projects..."
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg border transition-colors hover:border-primary/50">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold">{project.title}</h2>
                      <p className="text-xs text-muted-foreground">
                        {new Date(project.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found matching your criteria.
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
