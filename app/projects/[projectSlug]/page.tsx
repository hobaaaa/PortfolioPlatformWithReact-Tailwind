// app/projects/[projectSlug]/page.tsx

import { notFound } from "next/navigation";
import projectsData from "@/app/data/projects";
import Image from "next/image";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    projectSlug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { projectSlug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.projectSlug);

  if (!project) {
    console.log("Project not found, redirecting to default component");
    notFound();
    return null; // notFound çağrıldığında return null ekleyin
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={600}
        priority
      />
      <p>{project.description}</p>
    </div>
  );
}
