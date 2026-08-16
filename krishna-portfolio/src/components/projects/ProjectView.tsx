"use client";
import { useCallback, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectMeta } from "@/lib/projects";

export default function ProjectView({
  project,
  mdx,
}: {
  project: ProjectMeta;
  mdx: React.ReactNode;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = project.images ?? [];
  const hasImages = images.length > 0;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showNext = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length, hasImages]);

  const showPrev = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length, hasImages]);

  // Arrow key navigation inside the lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, showNext, showPrev]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeImage = hasImages ? images[activeIndex] : null;

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16 max-w-4xl">
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
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {project.title}
          </h1>
          {project.description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
              {project.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1.5 h-4 w-4" />
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <span className="text-muted-foreground/40">·</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        {hasImages && (
          <div className="mt-12">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-xl font-semibold tracking-tight">
                Screenshots
              </h2>
              <p className="text-xs text-muted-foreground">
                Click any image to open the viewer · use{" "}
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">
                  ←
                </kbd>{" "}
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">
                  →
                </kbd>{" "}
                to navigate
              </p>
            </div>
            <div
              className={
                images.length === 1
                  ? "grid gap-4"
                  : images.length === 2
                  ? "grid gap-4 sm:grid-cols-2"
                  : "grid gap-4 sm:grid-cols-2 md:grid-cols-3"
              }
            >
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-video overflow-hidden rounded-lg border bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Open screenshot ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox / Carousel Modal */}
        <Dialog
          open={lightboxOpen}
          onClose={closeLightbox}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Panel className="relative w-full max-w-6xl">
              {/* Close */}
              <button
                onClick={closeLightbox}
                aria-label="Close viewer"
                className="absolute -top-2 right-0 sm:top-2 sm:right-2 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev */}
              {images.length > 1 && (
                <button
                  onClick={showPrev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Next */}
              {images.length > 1 && (
                <button
                  onClick={showNext}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              {/* Active image */}
              <div className="relative flex items-center justify-center">
                {activeImage && (
                  <Image
                    src={activeImage}
                    alt={`${project.title} screenshot ${activeIndex + 1}`}
                    width={1600}
                    height={1000}
                    className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
                    priority
                  />
                )}
              </div>

              {/* Counter + thumbnails */}
              {images.length > 1 && (
                <div className="mt-4 flex flex-col items-center gap-3">
                  <p className="text-xs text-white/70">
                    {activeIndex + 1} / {images.length}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {images.map((src, i) => (
                      <button
                        key={"thumb-" + i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={
                          "relative h-14 w-20 overflow-hidden rounded border transition " +
                          (i === activeIndex
                            ? "border-white ring-2 ring-white"
                            : "border-white/30 opacity-70 hover:opacity-100")
                        }
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="mt-10 flex flex-wrap gap-3">
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

        <article className="article mt-12 mx-auto">{mdx}</article>
      </motion.div>
    </div>
  );
}
