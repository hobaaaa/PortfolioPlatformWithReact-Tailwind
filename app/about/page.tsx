import SkillBar from "@/components/Skill";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto bg-gray-300 p-3 rounded-md pb-8">
      <h1 className="text-4xl font-bold text-center py-5 border-b border-black">
        Hakkımda
      </h1>
      <div className="my-5 md:grid grid-flow-col grid-cols-3 gap-4 ">
        <Image
          src="/images/about-me.jpg"
          width={200}
          height={230}
          alt="About picture"
          className="mx-auto rounded-lg shadow-2xl m-6"
        ></Image>
        <div className="col-span-2 text-center p-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit rem recusandae quo doloribus nam placeat explicabo,
            fuga fugiat porro nostrum expedita consequuntur architecto beatae
            voluptatum. Incidunt assumenda commodi, sequi unde sit quos fugit
            eum. Atque odit ratione, suscipit deserunt nesciunt pariatur vel
            incidunt porro id sit repudiandae natus adipisci beatae similique
            quos exercitationem nobis harum mollitia delectus! Quae nesciunt
            temporibus officiis architecto, quisquam consequatur natus.
            Laboriosam vitae, ratione quo corporis magnam deleniti adipisci eius
            nobis labore blanditiis amet quidem id mollitia aut nam neque
            deserunt alias a odit. Nobis porro iure fugiat quo alias deleniti,
            dolorum nostrum voluptates totam et.
          </p>
        </div>
      </div>
      <SkillBar />
    </div>
  );
}
