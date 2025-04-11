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
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Resume
          </h1>
          <p className="mt-2 text-muted-foreground">
            My professional experience and skills
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
              <p>📍 Hyderabad, India</p>
              <p>
                📧{" "}
                <a
                  href="mailto:cs23btech11028@iith.ac.in"
                  className="text-foreground hover:underline"
                >
                  cs23btech11028@iith.ac.in
                </a>
              </p>
              <p>
                📞{" "}
                <a
                  href="tel:+916304403876"
                  className="text-foreground hover:underline"
                >
                  +91 63044 03876
                </a>
              </p>
              <p>
                💻{" "}
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
                🔗{" "}
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
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Python",
                "C/C++",
                "JavaScript",
                "Go",
                "HTML/CSS",
                "SQL",
                "React",
                "Node.js",
                "Express.js",
                "FastAPI",
                "Hugo",
                "Git",
                "VS Code",
                "PyCharm",
              ].map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-medium">IIT Hyderabad</h3>
                <p>BTech in Computer Science (2023 – 2027)</p>
              </div>
              <div>
                <h3 className="font-medium">Sri Chaitanya Jr College</h3>
                <p>MPC (2021 – 2023)</p>
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

            {/* Noted */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Web Intern</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Noted · Feb 2025 – Present
                </p>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Working on full-stack features for a startup product.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Diesta */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Web Dev Head · Diesta
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  IIT Hyderabad · Sep 2024 – Feb 2024
                </p>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    Built a live event-tracking portal for campus competitions.
                  </li>
                  <li>
                    Used Next.js and Google APIs. Hosted and maintained with
                    custom domain.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lambda */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Core Developer · Lambda Club
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  IIT Hyderabad · Aug 2024 – Apr 2024
                </p>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Built a static website with Hugo and Go.</li>
                  <li>Developed a full-stack web app using MERN stack.</li>
                  <li>Automated emails using Google Apps Script.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <Separator />

          {/* Projects */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="space-y-6 text-sm">
              {[
                {
                  title: "Event Management Web App",
                  desc: "Full-stack app using React, MongoDB, Express.js. Auth and REST API implemented.",
                  stack: ["React", "Express.js", "MongoDB", "Git"],
                },
                {
                  title: "Cricket Tournament Management App",
                  desc: "Role-based score manager and viewer portal using FastAPI and React.",
                  stack: ["FastAPI", "React", "MySQL"],
                },
                {
                  title: "Cepheid Club Website",
                  desc: "Static site using Hugo. Designed for non-devs to update via Markdown.",
                  stack: ["Hugo", "Go", "Git"],
                },
                {
                  title: "Assembly Code Simulator",
                  desc: "Built RISC-V architecture simulator with cache/memory simulation in C++.",
                  stack: ["C++"],
                },
              ].map((proj) => (
                <Card key={proj.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{proj.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {proj.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
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
                <h3 className="font-medium">Annual Fest Coordinator</h3>
                <p>IIT Hyderabad · Aug 2024 – Mar 2025</p>
              </div>
              <div>
                <h3 className="font-medium">
                  Core Member · Glitch Club (Gaming)
                </h3>
                <p>IIT Hyderabad · Aug 2024 – Mar 2025</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
