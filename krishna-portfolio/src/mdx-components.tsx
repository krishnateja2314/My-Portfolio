import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use custom components for markdown elements
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight mt-8 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="leading-7 mb-4">{children}</p>,
    a: ({ href, children }) => (
      <Link
        href={href as string}
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-md my-6"
        {...(props as any)}
        alt={props.alt || ""}
      />
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded-sm font-mono text-sm">
        {children}
      </code>
    ),
    ...components,
  };
}
