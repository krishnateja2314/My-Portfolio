"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
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
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Krishna Teja</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I’m a CS undergrad at IIT Hyderabad, self-taught via YouTube,
                  and currently building fullstack web apps with chill vibes and
                  clean code.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/profile.jpg"
                  alt="Krishna Teja"
                  width={600}
                  height={600}
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
              icon: <Code className="h-5 w-5 text-primary" />,
              title: "Fullstack Dev",
              desc: "I build powerful web apps from front to back.",
              tech: "Next.js, React, FastAPI, MongoDB, MySQL, Tailwind CSS",
            },
            {
              icon: <Layers className="h-5 w-5 text-primary" />,
              title: "Dev + Design Fusion",
              desc: "Functional *and* aesthetic interfaces.",
              tech: "Hugo, Figma, Accessible Design",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary" />,
              title: "Speed + Simplicity",
              desc: "Optimized for fast, smooth, SEO-friendly performance.",
              tech: "Netlify, Nginx, Lighthouse best practices",
            },
          ].map((itemProps, idx) => (
            <motion.div variants={item} key={idx}>
              <Card>
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
