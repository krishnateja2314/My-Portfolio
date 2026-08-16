import { getAllProjects } from "@/lib/projects";
import { getAllBlogs } from "@/lib/getBlogs";
import IntroHero from "@/components/home/IntroHero";
import HomeClient from "@/components/home/homeBlogs";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default async function Home() {
  const blogs = getAllBlogs().slice(0, 1);
  const allProjects = await getAllProjects();
  const featuredProjects = allProjects
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      <IntroHero />
      <FeaturedProjects projects={featuredProjects} />
      <HomeClient blogs={blogs} />
    </div>
  );
}
