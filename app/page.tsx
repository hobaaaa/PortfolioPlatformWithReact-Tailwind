import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/app/data/projects";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="mx-4 pt-3 container mx-auto ">
      <section className="hero text-center bg-gray-300 mb-3 rounded-md px-5 py-5">
        <h1 className="text-3xl font-bold">Hello, my name is Deniz.</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, harum
          nulla dolores eos ipsum omnis, in soluta consequuntur dignissimos
          aliquid saepe consectetur voluptatum reprehenderit iusto, aliquam
          doloribus repellat distinctio facere.
        </p>
      </section>

      <section className="featured-projects bg-gray-300 mb-3 px-5 py-5 rounded-md">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="project-grid lg:grid grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          All Projects
        </Link>
      </section>

      <section className="about bg-gray-300 px-5 py-5 rounded-md">
        <h2 className="text-2xl font-bold">Who Am I?</h2>
        <p className="pb-3 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          quia illum quis sapiente autem placeat, deserunt totam laudantium
          corrupti at suscipit et. Assumenda sapiente at consequuntur ratione
          ullam aperiam molestias.
        </p>
        <Link
          href="/about"
          className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          About Me
        </Link>
      </section>
    </div>
  );
}
