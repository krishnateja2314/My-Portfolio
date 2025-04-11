export const dynamicParams = true;
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/projects";
import ProjectView from "@/components/projects/ProjectView";
import { compileMDX } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectSlugPage({ params }: Props) {
  const [allProjects, { slug }] = await Promise.all([getAllProjects(), params]);

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }
  const mdxContent = await compileMDX<{ content: string }>({
    source: project.content,
  });

  return <ProjectView project={project} mdx={mdxContent.content} />;
}
