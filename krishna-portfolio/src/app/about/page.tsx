"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skillGroups: { title: string; skills: string[] }[] = [
    {
      title: "AI & Agents",
      skills: [
        "LangGraph",
        "LangChain",
        "Ollama",
        "LLM Tooling",
        "RAG",
        "Prompt Design",
        "Agent Orchestration",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Framer Motion",
      ],
    },
    {
      title: "Systems & Tooling",
      skills: [
        "Go",
        "C/C++",
        "Docker",
        "Nginx",
        "Git",
        "CI/CD",
        "Netlify",
        "Vercel",
      ],
    },
  ];

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mt-4 text-muted-foreground">
              A little more about who I am, what I build, and where I&apos;m
              headed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Story</h2>
            <p className="leading-relaxed">
              Ever since my dad brought home a laptop, I&apos;ve been hooked on
              gaming. From puzzles to boss fights, games were never just
              entertainment for me. They shaped the way I think, the way I
              solve problems, the way I sit with a hard thing until it
              cracks. I still genuinely believe gaming sharpened my thinking
              from a young age.
            </p>
            <p className="leading-relaxed">
              I got my PS4 in 9th grade, right when COVID hit. For a kid who
              loved games, it was a dream come true. I played a lot in 9th
              and 10th. Then 11th grade started and something flipped. I
              looked around and made a decision: I&apos;m going to crack IIT.
            </p>
            <p className="leading-relaxed">
              Between my dad pushing me to aim higher and the puzzle-solving
              habit gaming had drilled into me, I got there. I cracked into{" "}
              <span className="font-semibold">IIT Hyderabad</span>, and a new
              chapter opened up: development.
            </p>
            <p className="leading-relaxed">
              I started learning web dev in my semester break, not from any
              structured course, but from YouTube and a lot of stubborn
              trial and error. Curiosity turned into obsession pretty
              quickly. I joined the Lambda web dev club, shipped sites for
              Diesta and Cepheid, and built a full-stack cricket scoring
              app for our DBMS project.
            </p>
            <p className="leading-relaxed">
              Over the last year the ground moved under me. I started
              spending more and more time on{" "}
              <span className="font-semibold">AI and agentic systems</span>.
              Building tool-calling agents, wiring up LangGraph, poking at
              how far LLMs can actually be trusted to drive real systems.
              That interest turned into an on-site AI Engineer internship
              at <span className="font-semibold">Teradata</span>, where I
              built a meta-tooling agent that generates the tools the
              product&apos;s chatbot needs, automatically, whenever a new
              feature ships through CI/CD.
            </p>
            <p className="leading-relaxed">
              I still think of myself as a full-stack engineer at heart. I
              like being able to ship the whole thing. But the direction
              I&apos;m pushing hardest in right now is{" "}
              <span className="font-semibold">AI agents</span>. Still
              exploring, still building.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-start justify-center"
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border shadow-sm">
            <Image
              src="/about.jpg"
              alt="Krishna Teja"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 space-y-8"
      >
        <div>
          <h2 className="text-2xl font-semibold">Skills &amp; Expertise</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I reach for regularly
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={item}>
              <Card className="h-full">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-2.5 py-0.5 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  B.Tech in Computer Science &amp; Engineering
                  <br />
                  Indian Institute of Technology Hyderabad (2023 to 2027)
                  <br />
                  Sri Chaitanya Junior College, Hyderabad (2021 to 2023)
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI Engineer Intern @ Teradata (on-site)
                  <br />
                  Full-Stack Intern @ Noted
                  <br />
                  Web Dev Lead @ Diesta, IITH
                  <br />
                  Core Dev @ Lambda Web Dev Club
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How I Learn</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Self-taught via YouTube, papers, and shipping things.
                  <br />
                  I learn a stack by building something real in it.
                  <br />
                  Currently: agentic systems and quant tooling.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
