"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IntroHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Krishna Teja</span>
                </h1>
                <p className="max-w-[620px] text-muted-foreground md:text-xl leading-relaxed">
                  CS undergrad at IIT Hyderabad. I build full-stack products
                  end to end, and over the last year I&apos;ve been going
                  deep on{" "}
                  <span className="text-foreground font-medium">
                    AI agents
                  </span>
                  . LangGraph, tool-calling, and figuring out how far LLMs
                  can actually be trusted to drive real systems. Recently
                  on-site at Teradata as an AI Engineer intern.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center transition-all"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative aspect-square w-full max-w-[320px] md:max-w-[420px] overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                <Image
                  src="/goa.jpeg"
                  alt="Krishna Teja"
                  fill
                  sizes="(max-width: 768px) 320px, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container px-4 md:px-6 mt-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: <Bot className="h-5 w-5 text-primary" />,
              title: "AI Agents & Tooling",
              desc: "Building tool-calling agents that actually ship. Schema-validated outputs, self-critique loops, and hard guardrails.",
              tech: "LangGraph, LangChain, Ollama, LLM tool synthesis, RAG",
            },
            {
              icon: <Code className="h-5 w-5 text-primary" />,
              title: "Full-Stack Engineering",
              desc: "End-to-end product work, from data models to the last pixel, with a bias for shipping.",
              tech: "Next.js, React, TypeScript, FastAPI, Node.js, MongoDB, PostgreSQL",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary" />,
              title: "Systems & Performance",
              desc: "I care about the boring stuff. Latency, correctness, and code that doesn't fall over at 2 AM.",
              tech: "Docker, Nginx, WebSockets, CI/CD, observability, SEO",
            },
          ].map((itemProps, idx) => (
            <motion.div variants={item} key={idx} className="h-full">
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardHeader className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    {itemProps.icon}
                    {itemProps.title}
                  </CardTitle>
                  <CardDescription>{itemProps.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {itemProps.tech}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
