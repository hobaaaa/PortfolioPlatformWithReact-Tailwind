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
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center py-5 border-b border-black">
        {project.title}
      </h1>
      <div className="md:grid grid-cols-2 gap-4 md:my-6 mx-3">
        {/* Görselleri map ile render ediyoruz */}
        {project.images.map((imageSrc, index) => (
          <Image
            key={index} // Her bir görsel için benzersiz bir key kullanıyor
            src={imageSrc}
            alt={`${project.title} image ${index + 1}`}
            width={800}
            height={600}
            priority
            className="my-4 md:my-0 py-2 md:py-0 mx-auto rounded"
          />
        ))}
      </div>
      <p className="text-xl font-medium text-center">{project.description}</p>
    </div>
  );
}
