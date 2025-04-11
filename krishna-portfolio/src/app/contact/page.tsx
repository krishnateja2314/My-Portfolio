"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      const response = await fetch("https://formspree.io/f/xpwpbzar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok || response.status === 200) {
        toast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message", {
          description:
            result?.errors?.[0]?.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Error sending message", {
        description: "Something went wrong. Try again later.",
      });
    }

    toast.success("Message sent!", {
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="container py-16 px-4 md:px-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Me
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
          Have a question or want to collaborate? Feel free to drop a message!
        </p>
      </div>

      {/* Content Grid */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              I’m open to freelance projects, internships, collaborations, and
              all things web. Let’s build something cool together.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="mr-3 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  cs23btech11028@iith.ac.in
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-3 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+91 6304403876</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">Sending...</span>
              ) : (
                <span className="flex items-center transition-all">
                  Send Message
                  <Send
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
