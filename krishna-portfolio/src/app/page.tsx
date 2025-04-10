import { getAllProjects } from "@/lib/projects";
import { getAllBlogs } from "@/lib/getBlogs";
import IntroHero from "@/components/home/IntroHero";
import HomeClient from "@/components/home/homeBlogs";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  const blogs = getAllBlogs().slice(-2, -1);
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      <IntroHero />
      <FeaturedProjects projects={featuredProjects} />
      <HomeClient blogs={blogs} />
    </div>
  );
}
