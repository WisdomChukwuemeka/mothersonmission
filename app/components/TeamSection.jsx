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
    name: "Bukola Idowu",
    role: "Executive Director",
    img: "https://kimpact.org.ng/storage/kimpact-team/pb.png",
    bio: "Founding ED of KDI, a leader in public policy and development. Has transformed KDI into a top Nigerian youth-led non-profit, spearheading advocacy for youth development and electoral reforms.",
  },
  {
    name: "Oluwafemi Adebayo",
    role: "Head of Research",
    img: "https://kimpact.org.ng/storage/kimpact-team/femi.jpg",
    bio: "Democracy Data Analyst and Electoral Security Expert, leading research at KDI. Has worked on major democracy projects in Nigeria and globally.",
  },
  {
    name: "Oluwakemi Akinyemi",
    role: "Head of Finance",
    img: "https://kimpact.org.ng/storage/kimpact-team/kemi.jpg",
    bio: "Leads the Finance Department at KDI, ensuring financial accountability and organizational sustainability.",
  },
  {
    name: "Abiodun Banjoko",
    role: "Head of Programs, Citizen Participation",
    img: "https://kimpact.org.ng/storage/kimpact-team/abiodun.jpg",
    bio: "Dedicated program manager leading citizen engagement and participation programs to improve the election process.",
  },
  {
    name: "Victor Adewumi",
    role: "Head of IT & Media",
    img: "https://kimpact.org.ng/storage/kimpact-team/victor.jpg",
    bio: "Digital Polymath with a passion for technology and communication. Currently heads the IT Department of KDI.",
  },
  {
    name: "Umar Dan'asabe Muhammed",
    role: "Head of Programs, Elections",
    img: "https://kimpact.org.ng/storage/kimpact-team/dan.jpg",
    bio: "Leads KDI's election programs, coordinating monitoring, reporting and advocacy activities across Nigeria.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-10 md:px-16">
      <div className="text-center mb-12">
        <p className="text-[11px] font-bold tracking-[3px] uppercase text-kblue-light mb-2">
          Faces of Mother's on mission
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-extrabold text-kblue">
          The Board
        </h2>
        <div className="w-14 h-1 bg-kgold mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
        {board.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-sm"
            />
            <h4 className="text-[12px] font-bold text-kblue uppercase tracking-wide">
              {member.name}
            </h4>
            <p className="text-[11px] text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-extrabold text-kblue">
          The Management
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
              <h4 className="text-[14px] font-bold text-kblue mb-0.5">
                {m.name}
              </h4>
              <p className="text-[11px] font-bold uppercase tracking-wider text-kgold mb-2">
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
