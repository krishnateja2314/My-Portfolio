import { getAllProjects } from "@/lib/projects"; // update import path if needed
import ProjectList from "@/components/projects/ProjectList";

export default async function ProjectsPage() {
  const projects = await getAllProjects(); // from your MDX parser
  return <ProjectList projects={projects} />;
}
