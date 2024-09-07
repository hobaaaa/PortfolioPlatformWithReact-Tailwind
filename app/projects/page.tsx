// app/projects/page.tsx

import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/app/data/projects"; // projectsData'yı import ediyoruz

export default function ProjectsPage() {
  return (
    <div className="container mx-auto bg-gray-300 p-3 rounded-md pb-8">
      <h1 className="text-4xl font-bold text-center py-5 border-b border-black">
        Projeler
      </h1>
      <div className="project-grid md:grid grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
