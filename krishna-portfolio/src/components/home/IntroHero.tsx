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
                  I’m a CS undergrad at IIT Hyderabad, passionate about building
                  great websites. I love to create things that live on the
                  internet, whether it’s a website, a web app, or a blog. I’m
                  always looking for new challenges and opportunities to learn
                  and grow as a developer.
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
              title: "Fullstack Engineering",
              desc: "I build scalable fullstack apps with both frontend polish and backend power.",
              tech: "Next.js, React, FastAPI, Node.js, MySQL, MongoDB, REST APIs",
            },
            {
              icon: <Layers className="h-5 w-5 text-primary" />,
              title: "CMS + Static Site Dev",
              desc: "From event portals to club sites — I've built fast static sites with real-world content teams.",
              tech: "Hugo, Markdown, Netlify, Excel-as-DB, Git-based CMS",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary" />,
              title: "Performance & SEO",
              desc: "I care about clean structure, fast loads, and discoverability.I do something unique in every project.",
              tech: "structured SEO, Nginx, responsive & accessible UIs",
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
