export const dynamicParams = true;
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/projects";
import ProjectView from "@/components/projects/ProjectView";
import { compileMDX } from "next-mdx-remote/rsc";

// Define and export the Project type
export type Project = {
  slug: string;
  title: string;
  description?: string;
  content: string;
};

// Properly type the props according to Next.js expectations
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectSlugPage(props: PageProps) {
  // Await the params promise
  const { slug } = await props.params;
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.content) {
    notFound();
  }

  const mdxContent = await compileMDX<{ content: string }>({
    source: project.content,
    options: {
      parseFrontmatter: true,
    },
  });

  return <ProjectView project={project} mdx={mdxContent.content} />;
}

export async function generateMetadata(props: PageProps) {
  // Await the params promise
  const { slug } = await props.params;
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { notFound: true };

  return {
    title: project.title,
    description: project.description || "Project details",
  };
}
