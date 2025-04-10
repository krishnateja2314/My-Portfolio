import path from "path"

// Define the types for our MDX content
export interface ProjectMeta {
  title: string
  slug: string
  date: string
  tags: string[]
  image: string
  description: string
}

export interface BlogMeta {
  title: string
  slug: string
  date: string
  tags: string[]
  image: string
  excerpt: string
  readingTime: string
}

// Path to our content directories
const projectsDirectory = path.join(process.cwd(), "content/projects")
const blogDirectory = path.join(process.cwd(), "content/blog")

// Get all project files
export function getAllProjects(): ProjectMeta[] {
  // This is a mock function since we don't have actual MDX files in this example
  // In a real application, you would read from the file system

  // Example implementation:
  // const fileNames = fs.readdirSync(projectsDirectory)
  // const allProjectsData = fileNames.map(fileName => {
  //   const slug = fileName.replace(/\.mdx$/, '')
  //   const fullPath = path.join(projectsDirectory, fileName)
  //   const fileContents = fs.readFileSync(fullPath, 'utf8')
  //   const { data } = matter(fileContents)
  //
  //   return {
  //     slug,
  //     ...(data as Omit<ProjectMeta, 'slug'>)
  //   }
  // })

  // Return sorted by date
  // return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1))

  // For this example, we'll return mock data
  return [
    {
      slug: "project-1",
      title: "E-commerce Platform",
      date: "2023-04-15",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=400&width=600&text=E-commerce",
      description: "A modern e-commerce platform with product listings, cart functionality, and secure checkout.",
    },
    {
      slug: "project-2",
      title: "Portfolio Website",
      date: "2023-06-22",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600&text=Portfolio",
      description: "A sleek portfolio website showcasing projects and skills with smooth animations.",
    },
    // Add more mock projects as needed
  ]
}

// Get all blog posts
export function getAllBlogPosts(): BlogMeta[] {
  // This is a mock function since we don't have actual MDX files in this example
  // In a real application, you would read from the file system

  // Example implementation:
  // const fileNames = fs.readdirSync(blogDirectory)
  // const allBlogData = fileNames.map(fileName => {
  //   const slug = fileName.replace(/\.mdx$/, '')
  //   const fullPath = path.join(blogDirectory, fileName)
  //   const fileContents = fs.readFileSync(fullPath, 'utf8')
  //   const { data } = matter(fileContents)
  //
  //   return {
  //     slug,
  //     ...(data as Omit<BlogMeta, 'slug'>)
  //   }
  // })

  // Return sorted by date
  // return allBlogData.sort((a, b) => (a.date < b.date ? 1 : -1))

  // For this example, we'll return mock data
  return [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      date: "2023-05-12",
      tags: ["Next.js", "React", "Web Development"],
      image: "/placeholder.svg?height=400&width=800&text=Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
      readingTime: "5 min read",
    },
    {
      slug: "mastering-tailwind-css",
      title: "Mastering Tailwind CSS",
      date: "2023-06-24",
      tags: ["CSS", "Tailwind CSS", "Web Design"],
      image: "/placeholder.svg?height=400&width=800&text=Tailwind+CSS",
      excerpt: "Discover how to build beautiful, responsive UIs with Tailwind CSS utility-first approach.",
      readingTime: "7 min read",
    },
    // Add more mock blog posts as needed
  ]
}

// Get a single project by slug
export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  // In a real application, you would read from the file system
  // For this example, we'll filter the mock data
  return getAllProjects().find((project) => project.slug === slug)
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogMeta | undefined {
  // In a real application, you would read from the file system
  // For this example, we'll filter the mock data
  return getAllBlogPosts().find((post) => post.slug === slug)
}
