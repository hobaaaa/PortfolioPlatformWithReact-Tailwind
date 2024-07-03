import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto bg-violet-300 p-3 rounded-md">
      <h1 className="text-2xl font-bold">Contact</h1>
      <div className="my-5 md:grid grid-flow-col gap-4 ">
        <Image
          src="/images/contact.jpg"
          width={500}
          height={500}
          alt="Contact picture"
          className="mx-auto"
        ></Image>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          rem recusandae quo doloribus nam placeat explicabo, fuga fugiat porro
          nostrum expedita consequuntur architecto beatae voluptatum. Incidunt
          assumenda commodi, sequi unde sit quos fugit eum. Atque odit ratione,
          suscipit deserunt nesciunt pariatur vel incidunt porro id sit
          repudiandae natus adipisci beatae similique quos exercitationem nobis
          harum mollitia delectus! Quae nesciunt temporibus officiis architecto,
          quisquam consequatur natus. Laboriosam vitae, ratione quo corporis
          magnam deleniti adipisci eius nobis labore blanditiis amet quidem id
          mollitia aut nam neque deserunt alias a odit. Nobis porro iure fugiat
          quo alias deleniti, dolorum nostrum voluptates totam et.
        </p>
      </div>
    </div>
  );
}
