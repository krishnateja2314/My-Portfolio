"use client";

import { ProjectMeta } from "@/lib/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedProjects({
  projects,
}: {
  projects: ProjectMeta[];
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Some of my recent work that I&apos;m proud of
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary/50">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {project.images[0] ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                        No preview
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" asChild>
            <Link
              href="/projects"
              className="group inline-flex items-center transition-all"
            >
              View All Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
