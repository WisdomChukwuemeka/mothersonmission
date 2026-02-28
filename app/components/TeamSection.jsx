const board = [
  { name: "Dr. A. Akiyode", role: "Board Member", img: "https://kimpact.org.ng/storage/kimpact-team/board/Dr Akiyode.png" },
  { name: "Prof. Olu Ogunsakin", role: "Board Member", img: "https://kimpact.org.ng/storage/kimpact-team/board/Professor-Olu-Ogunsakin-e1580836429104.png" },
  { name: "Prof. Remi Sonaiya", role: "Board Member", img: "https://kimpact.org.ng/storage/kimpact-team/board/Sonaiya.png" },
  { name: "Ene Ede", role: "Board Member", img: "https://kimpact.org.ng/storage/kimpact-team/board/ene-ede.png" },
  { name: "Femi Adefila", role: "Board Member", img: "https://kimpact.org.ng/storage/kimpact-team/board/femi-adefila-02 1.png" },
  { name: "Kehinde Adeniyi", role: "Board Member", img: "https://kimpact.org.ng/storage/kimpact-team/board/kehinde.png" },
];

const management = [
  {
  name: "Amb. Vivian Anyanwu",
  role: "Co-Founder",
  img: "ceo/ceo.png",
  bio: "Visionary leader and development advocate, driving strategic growth and empowering mothers and potential mothers through impactful programs and community transformation initiatives.",
},
{
  name: "Amb. Jarlath Anyanwu",
  role: "Co-Founder",
  img: "ceo/ceotwo.png",
  bio: "Strategic leader and community advocate, supporting organizational growth and advancing initiatives that empower mothers, potential mothers and strengthen families.",
},
  {
  name: "Rev Dr. Emmanuel Ojukwu",
  role: "Patron",
  img: "/management/emmanuel.png",
  bio: "Clergy leader and governance advocate, providing strategic guidance and moral support to strengthen families and advance community development initiatives.",
},
  {
  name: "Vero John David",
  role: "Imo State Coordinator",
  img: "/management/vera.png",
  bio: "State coordinator providing leadership and oversight for programs, driving community engagement and impact across Imo State.",
},
  {
  name: "Leticia Ebenezer",
  role: "Lagos State Coordinator",
  img: "/management/leticia.png",
  bio: "State coordinator overseeing programs and driving community engagement initiatives across Lagos State.",
},
  {
    name: "Onyedikachi Nnenna",
    role: "Finance",
    img: "/testimony/nnena.png",
    bio: "Digital Polymath with a passion for technology and communication. Currently heads the IT Department of KDI.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-10 md:px-16">
   

      <div className="text-center mb-12">
        <p className="text-[11px] font-bold text-gray-500 tracking-[3px] uppercase text-kblue-light mb-2">
          Faces of Mother's on mission
        </p>
        <h2 className="font-playfair text-blue-950 text-3xl md:text-4xl font-extrabold text-kblue">
          The Board of Directors and Management Team
        </h2>
        <div className="w-14 h-1 bg-kgold mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {management.map((m) => (
          <div
            key={m.name}
            className="flex gap-4 items-start p-5 rounded-xl bg-gray-50 hover:shadow-md transition-shadow"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h4 className="text-[14px] text-blue-950 font-bold text-kblue mb-0.5">
                {m.name}
              </h4>
              <p className="text-[11px] font-bold text-gray-700 uppercase tracking-wider text-kgold mb-2">
                {m.role}
              </p>
              <p className="text-[12px] text-gray-500 leading-relaxed">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
