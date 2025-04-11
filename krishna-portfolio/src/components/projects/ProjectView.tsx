"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectMeta } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function ProjectView({
  project,
  mdx,
}: {
  project: ProjectMeta;
  mdx: React.ReactNode;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setActiveImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="mb-8">
        <Link
          href="/projects"
          className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
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
              {project.tech.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Project Screenshots</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Screenshot ${i + 1}`}
                width={600}
                height={400}
                onClick={() => openLightbox(src)}
                className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 border"
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <Dialog
          open={lightboxOpen}
          onClose={closeLightbox}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 z-10"
              >
                <X className="w-5 h-5" />
              </button>
              {activeImage && (
                <Image
                  src={activeImage}
                  alt="Enlarged screenshot"
                  width={1200}
                  height={800}
                  className="w-full max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
          {project.repo && (
            <Button variant="outline" asChild>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>

        <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>
        <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
          {mdx}
        </div>
      </motion.div>
    </div>
  );
}
