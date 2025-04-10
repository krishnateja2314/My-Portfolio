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
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "Figma",
    "UI/UX",
    "Responsive Design",
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
              Get to know more about my background, skills, and passion for
              creating amazing web experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Story</h2>
            <p className="leading-relaxed">
              Hello! I&apos;m a passionate web developer with a keen eye for
              design and a love for creating intuitive, user-friendly
              experiences. My journey in web development began several years
              ago, and I&apos;ve been honing my skills ever since.
            </p>
            <p className="leading-relaxed">
              I specialize in building modern web applications using React,
              Next.js, and TypeScript. I&apos;m passionate about clean code,
              accessibility, and creating performant web experiences that
              delight users.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying
              the outdoors.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border">
            <Image
              src="/placeholder.svg?height=600&width=600&text=About+Me"
              alt="About Me"
              fill
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
          <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.div key={skill} variants={item}>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Bachelor&apos;s Degree in Computer Science
                  <br />
                  University Name, 2018-2022
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Frontend Developer at Company Name
                  <br />
                  2022 - Present
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Certifications</h3>
                <p className="text-sm text-muted-foreground">
                  Web Development Certification
                  <br />
                  UI/UX Design Fundamentals
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
