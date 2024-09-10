import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/app/data/projects";
import ImageSlider from "@/components/ImageSlider";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="container mx-auto">
      <section className="mx-1">
        <ImageSlider />
      </section>
      <section className="hero text-center bg-gray-300 mb-3 rounded-md px-5 py-5">
        <h1 className="text-3xl font-bold pb-4">
          Merhaba! Ben Deniz Gökbudak.
        </h1>
        <p className="text-lg lg:px-16 lg:mx-16">
          Yazılım geliştirme ve web tasarımı konularında deneyim ve tutkuya
          sahip bir profesyonelim. Bu sitede, yaratıcı projelerim, geliştirdiğim
          uygulamalar ve tasarımlarım hakkında bilgi bulabilirsiniz. Kendi
          projelerim ve iş dünyasındaki başarılarım hakkında daha fazla bilgi
          edinmek ve benimle iletişime geçmek için lütfen gezinin.
        </p>
      </section>

      <section className="featured-projects bg-gray-300 mb-3 px-5 py-5 rounded-md">
        <h2 className="text-2xl font-bold">Öne Çıkan Projeler</h2>
        <div className="project-grid lg:grid grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          Projeler
        </Link>
      </section>

      <section className="about bg-gray-300 px-5 py-5 rounded-md">
        <h2 className="text-2xl font-bold">Ben Kimim?</h2>
        <p className="pb-3 text-lg ">
          Merhaba! Ben Deniz Gökbudak,teknolojinin ve yaratıcı problemlerin
          peşinden koşan bir yazılım geliştiricisi ve web tasarımcısıyım. Bu web
          sitesinde, projelerim ve çalışmalarım hakkında kısa bir bilgi
          bulabilirsiniz. Daha detaylı bilgiler ve projeler için diğer sayfalara
          göz atabilirsiniz.
        </p>
        <Link
          href="/about"
          className="bg-white text-slate-700 active:bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-slate-500 hover:text-white outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          Hakkımda
        </Link>
      </section>
    </div>
  );
}
