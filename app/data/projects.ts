interface Project {
  title: string;
  description: string;
  images: string[];
  slug: string;
}

const projectsData: Project[] = [
  {
    title: "Safir Havuz",
    description: "Safir Havuz firması için yaptığımız websitemizdir.",
    images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
    slug: "project-1",
  },
  {
    title: "Birtürk İnşaat",
    description: "Birtürk İnşaat firması için yaptığımız websitemizdir.",
    images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
    slug: "project-2",
  },
  {
    title: "Atomm Petshop",
    description: "Atomm Petshop firması için yaptığımız websitemizdir.",
    images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
    slug: "project-3",
  },
  {
    title: "Weather App",
    description: "Weather App Next.JS ile yapılmış bir havadurumu uygulamasıdır.",
    images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
    slug: "project-3",
  },
  {
    title: "Blog App",
    description: "Blog App Next.JS ile yapılmış bir blog uygulamasıdır..",
    images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
    slug: "project-3",
  },
  {
    title: "News App",
    description: "News App Next.JS ile yapılmış bir haberler uygulamasıdır.",
    images: ["/images/project1.jpg","/images/project1.jpg","/images/project1.jpg"],
    slug: "project-3",
  },
  // Dİğer Projeleri buraya ekleyeceğiz.
];

export default projectsData;
