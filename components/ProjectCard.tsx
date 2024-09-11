"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false, // Sunucu tarafında render etmeme
  }
);

interface Project {
  title: string;
  description: string;
  images: string[];
  slug: string;
}
const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 20 - 20 },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <MotionDiv
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="project-card    mt-8"
        whileHover={{ translateY: -20, scale: 1.02 }}
      >
        <div className="project-card text-center">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-2xl mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="pb-3 text-lg">{project.description}</p>
        </div>
      </MotionDiv>
    </Link>
  );
}
