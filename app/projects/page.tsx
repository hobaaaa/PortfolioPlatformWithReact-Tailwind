// app/projects/page.tsx

import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/app/data/projects"; // projectsData'yı import ediyoruz

export default function ProjectsPage() {
  return (
    <div className="mx-4 pt-3 container mx-auto ">
      <div className="featured-projects bg-gray-300 mb-3 px-5 py-5 rounded-md">
        <h1 className="text-3xl font-bold">All Project</h1>
        <div className="project-grid lg:grid grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
