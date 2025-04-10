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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Resume
          </h1>
          <p className="mt-2 text-muted-foreground">
            My professional experience and skills
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="space-y-2">
              <p className="text-sm">San Francisco, CA</p>
              <p className="text-sm">hello@example.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">HTML</Badge>
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">Git</Badge>
              <Badge variant="outline">Figma</Badge>
              <Badge variant="outline">UI/UX Design</Badge>
              <Badge variant="outline">Responsive Design</Badge>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm text-muted-foreground">
                  University Name, 2018-2022
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Languages</h2>
            <div className="space-y-2">
              <p className="text-sm">English (Native)</p>
              <p className="text-sm">Spanish (Intermediate)</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <CardTitle className="text-base">
                      Frontend Developer
                    </CardTitle>
                    <div className="flex items-center">
                      <Badge variant="outline">2022 - Present</Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium">
                    Company Name, San Francisco, CA
                  </p>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>
                      Developed and maintained responsive web applications using
                      React and Next.js
                    </li>
                    <li>
                      Collaborated with designers to implement UI/UX designs
                      with Tailwind CSS
                    </li>
                    <li>
                      Improved application performance by optimizing code and
                      assets
                    </li>
                    <li>
                      Worked with cross-functional teams to deliver features on
                      time
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <CardTitle className="text-base">
                      Web Developer Intern
                    </CardTitle>
                    <div className="flex items-center">
                      <Badge variant="outline">Summer 2021</Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium">
                    Internship Company, San Francisco, CA
                  </p>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>
                      Assisted in developing web applications using React and
                      JavaScript
                    </li>
                    <li>
                      Implemented responsive designs using CSS and Bootstrap
                    </li>
                    <li>Participated in code reviews and team meetings</li>
                    <li>Gained experience with version control using Git</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <Separator />

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <CardTitle className="text-base">
                      E-commerce Platform
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-2">
                    A modern e-commerce platform with product listings, cart
                    functionality, and secure checkout.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <CardTitle className="text-base">
                      Task Management App
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-2">
                    A productivity app for managing tasks, projects, and
                    deadlines with real-time updates.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <Separator />

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Web Development Certification</h3>
                <p className="text-sm text-muted-foreground">
                  Certification Provider, 2022
                </p>
              </div>
              <div>
                <h3 className="font-medium">UI/UX Design Fundamentals</h3>
                <p className="text-sm text-muted-foreground">
                  Design Academy, 2023
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
