// app/data/projects.ts
interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const projectsData: Project[] = [
  {
    title: "Project 1",
    description: "Description 1",
    image: "/images/project1.jpg",
    slug: "project-1",
  },
  {
    title: "Project 2",
    description: "Description 2",
    image: "/images/project1.jpg",
    slug: "project-2",
  },
  {
    title: "Project 3",
    description: "Description 3",
    image: "/images/project1.jpg",
    slug: "project-3",
  },
  // Diğer projelerinizi buraya ekleyin
];

export default projectsData;
