"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
        "Agent Orchestration",
      ],
    },
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Go", "C/C++", "Java", "SQL"],
    },
    {
      title: "Backend",
      skills: [
        "FastAPI",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Framer Motion",
      ],
    },
    {
      title: "Tooling",
      skills: ["Docker", "Nginx", "CI/CD", "Git", "Vercel", "Netlify"],
    },
  ];

  const experience: {
    title: string;
    org: string;
    period: string;
    bullets: string[];
  }[] = [
    {
      title: "AI Engineer Intern (On-site)",
      org: "Teradata",
      period: "2026",
      bullets: [
        "Built a LangGraph-based meta-tooling agent that auto-generates tools and skills for the product's homepage chatbot whenever a new feature ships through CI/CD.",
        "Designed a self-critique loop and validation gate so generated tools are verified before they reach the live chatbot runtime.",
        "Integrated the agent with internal CI/CD via a FastAPI service; shipped as a Docker service inside Teradata's environment.",
      ],
    },
    {
      title: "Full-Stack Intern",
      org: "Noted",
      period: "Feb 2025 to Present",
      bullets: [
        "Owned a large slice of a multi-tenant SaaS control panel. Roughly 10k lines across backend and frontend, 13 MongoDB models, and 20+ API endpoints.",
        "Built a domain-hierarchical policy engine (tenant, domain, sub-domain) with automatic threshold enforcement and full audit trails.",
        "Frontend on React 18 + TypeScript + Vite with TanStack Router/Query and Zustand; backend on Node.js + Express 5 + MongoDB with JWT, TOTP, and Google OAuth.",
      ],
    },
    {
      title: "Web Dev Head",
      org: "Diesta, IIT Hyderabad",
      period: "Sep 2024 to Feb 2025",
      bullets: [
        "Led a team of six to build the official interdepartmental fest portal with live event tracking and result management.",
        "Used Next.js with Excel-as-DB for zero-friction updates by non-tech organizers; handled domain setup and SEO.",
      ],
    },
    {
      title: "Core Developer",
      org: "Lambda Web Dev Club, IIT Hyderabad",
      period: "Aug 2024 to Apr 2025",
      bullets: [
        "Built a static site for Cepheid using Hugo + Go so non-devs could update content via Markdown.",
        "Shipped a full-stack MERN cricket tournament manager and automated club emails with Google Apps Script.",
      ],
    },
  ];

  const projects: { title: string; desc: string; stack: string[] }[] = [
    {
      title: "PEAD-X: Quant Trading Bot",
      desc: "A production bot that trades Post-Earnings Announcement Drift on Indian equities. Local AI extraction pipeline (Ollama + Qwen 2.5), real-time Fyers WebSocket monitor, multi-tier exits, strict risk controls.",
      stack: ["Python", "FastAPI", "Next.js", "LangGraph", "Ollama", "PostgreSQL"],
    },
    {
      title: "Teradata Meta-Tooling Agent",
      desc: "LangGraph agent that generates chatbot tools automatically on every CI/CD rollout, with a self-critique gate before deployment.",
      stack: ["Python", "LangGraph", "FastAPI", "Docker"],
    },
    {
      title: "Tenant Configuration Control Panel",
      desc: "Multi-tenant SaaS for auth, attendance, and academic-policy enforcement with domain-hierarchical policy resolution and lazy user linking.",
      stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Real-Time Video Upscaling & Frame Generation",
      desc: "Research project on live video super-resolution and frame interpolation. Benchmarked PSNR/SSIM against latency budgets.",
      stack: ["Python", "PyTorch", "CUDA", "OpenCV"],
    },
    {
      title: "Cricket Tournament Management App",
      desc: "Full-stack tournament manager with live scoring, role-based access, and admin portal.",
      stack: ["React", "FastAPI", "MySQL", "Nginx"],
    },
    {
      title: "Cepheid IITH: Astronomy Club Site",
      desc: "A static site built with Hugo and Go so non-devs on the club team can update content with plain Markdown.",
      stack: ["Hugo", "Go", "Netlify"],
    },
  ];

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Resume
          </h1>
          <p className="mt-2 text-muted-foreground">
            My professional experience, projects, and skills
          </p>
        </div>
        <Button asChild className="w-full sm:w-auto">
          <a href="/resume/Krishna_Resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* LEFT SECTION */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Hyderabad, India</p>
              <p>
                <a
                  href="mailto:cs23btech11028@iith.ac.in"
                  className="text-foreground hover:underline break-all"
                >
                  cs23btech11028@iith.ac.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+916304403876"
                  className="text-foreground hover:underline"
                >
                  +91 63044 03876
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/krishnateja2314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  github.com/krishnateja2314
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/krishna-teja-pulipati-1b9574323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  linkedin.com/in/krishna-teja-pulipati
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground">IIT Hyderabad</h3>
                <p>B.Tech in Computer Science (2023 to 2027)</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  Sri Chaitanya Jr College
                </h3>
                <p>MPC (2021 to 2023)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Experience</h2>

            {experience.map((role) => (
              <Card key={`${role.title}-${role.org}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    {role.title} · {role.org}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{role.period}</p>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="list-disc pl-4 space-y-2">
                    {role.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <Separator />

          {/* Projects */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Selected Projects</h2>
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              {projects.map((proj) => (
                <Card key={proj.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{proj.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-muted-foreground">{proj.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <Separator />

          {/* Extracurriculars */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Extracurriculars</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground">
                  Annual Fest Coordinator
                </h3>
                <p>IIT Hyderabad · Aug 2024 to Mar 2025</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  Core Member · Glitch Club (Gaming)
                </h3>
                <p>IIT Hyderabad · Aug 2024 to Mar 2025</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
