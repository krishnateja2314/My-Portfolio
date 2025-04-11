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
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "FastAPI",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Hugo",
    "Tailwind CSS",
    "Git",
    "Netlify",
    "Vercel",
    "express.js",
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
              A little more about who I am, what I do, and how I got here.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Story</h2>
            <p className="leading-relaxed">
              Ever since my dad brought home a laptop, I’ve been hooked on
              gaming. From puzzles to boss fights, games have always been more
              than entertainment they’ve shaped how I think, solve problems, and
              approach challenges. I genuinely believe gaming sharpened my
              critical thinking from a young age.
            </p>
            <p className="leading-relaxed">
              I got my PS4 in 9th grade right when the world was hit by COVID.
              For a kid who loved games, it was a dream come true. I played a
              lot during 9th and 10th, but when 11th grade hit, a switch
              flipped. I realized gaming wouldn’t get me anywhere unless I
              focused. That’s when I made a decision I’m going to crack IIT.
            </p>
            <p className="leading-relaxed">
              With my dad always pushing me to aim higher and the puzzle-solving
              mindset gaming gave me, I made it. I cracked into{" "}
              <span className="font-semibold">IIT Hyderabad</span> , and from
              there, a new chapter began: development.
            </p>
            <p className="leading-relaxed">
              I started learning web dev during my semester break not from
              courses, but from YouTube. That curiosity turned into passion. I
              joined the Lambda web dev club, built sites for Diesta and
              Cepheid, and created a full-stack cricket scoring app for our DBMS
              project.
            </p>
            <p className="leading-relaxed">
              Today, I’m still gaming. But now I’m also building. Creating.
              Learning. That balance of play and purpose is what keeps me going.
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
              src="/about.jpg"
              alt="Krishna Teja"
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
        className="mt-16 space-y-8"
      >
        <div>
          <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I use regularly
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
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
                  B.Tech in Computer Science & Engineering
                  <br />
                  Indian Institute of Technology Hyderabad (2023–2027)
                  <br />
                  Sri Chaitanya Junior College, Hyderabad (2021–2023)
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Web Intern @ Noted (Feb 2025 – Present)
                  <br />
                  Web Dev Lead @ Diesta Club, IITH
                  <br />
                  Core Dev @ Lambda Web Dev Club
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Certifications</h3>
                <p className="text-sm text-muted-foreground">
                  Self-taught via YouTube & open-source projects.
                  <br />
                  Constantly learning by building.
                  <br />
                  Exploring new tech and tools.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
