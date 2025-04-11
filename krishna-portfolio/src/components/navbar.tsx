"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full flex flex-col items-center transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            Portfolio
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link href="/resume">Resume</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t"
        >
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
