import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className=" m-7 p-3">
      <h1 className="text-4xl font-bold text-center py-5 border-b border-black">
        İletişim
      </h1>
      <div className="md:grid grid-cols-2 gap-5">
        <div className="mx-4 pt-3 container mx-auto text-center">
          <ul className="mx-4 pt-3">
            <li className="p-4">
              <h3 className="font-bold md:inline">Tel: </h3>
              <p className="md:inline">0(553) 666 2353</p>
            </li>
            <li className="p-4">
              <h3 className="font-bold md:inline">Email: </h3>
              <p className="md:inline">denizgokbudak@gmail.com</p>
            </li>
            <li className="p-4">
              <h3 className="font-bold md:inline">Adres: </h3>
              <p className="md:inline">
                Değirmenönü Mh. 1739 Sk. No:18 Daire:7 Merkezefendi/DENİZLİ
              </p>
            </li>
          </ul>
        </div>
        <Contact />
      </div>
    </div>
  );
}
