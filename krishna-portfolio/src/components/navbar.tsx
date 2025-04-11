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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-sm font-medium py-2 transition-colors hover:text-primary",
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link href="/resume">Resume</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t w-full"
        >
          <div className="container py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative flex items-center text-base font-medium px-4 py-2 rounded-md transition-all",
                  pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="mobile-navbar-indicator"
                    className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
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
