const board = [
  { name: "Amb. Vivian Anyanwu", role: "Board Member", img: "ceo/ceo.png" },
  { name: "Amb. Jarlath Anyanwu", role: "Board Member", img: "ceo/ceotwo.png" },
  { name: "Happiness Chinasa Anyanwu", role: "Board Member", img: "ceo/chinasa.png" },
  { name: "Rev Dr. Emmanuel Ojukwu", role: "Patron", img: "/management/emmanuel.png" },
];


const management = [
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
  bio: "Finance lead overseeing financial planning, budgeting, and accountability to ensure transparent and sustainable operations.",
},
{
  name: "Success Ukalike",
  role: "Rivers State Coordinator",
  img: "/management/success.png",
  bio: "State coordinator providing leadership and oversight for programs, driving community engagement and impact across Rivers State.",
},
{
  name: "Bibian Nnenna Amah",
  role: "London Coordinator",
  img: "/management/bibian.png",
  bio: "International coordinator leading programs and strengthening community engagement initiatives across London.",
},
{
  name: "Chukudebelu Ugochi",
  role: "Abuja Coordinator",
  img: "/management/ugochi.png",
  bio: "Coordinator overseeing programs and leading community engagement efforts to drive meaningful impact across Abuja.",
},
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-10 md:px-16">
   <div className="text-center mb-4">
        <p className="text-[11px] font-bold tracking-[3px] uppercase text-kblue-light mb-2">
          Faces of Mother's on mission
        </p>
        <h2 className="font-playfair text-3xl text-blue-950 md:text-4xl font-extrabold">
          The Board
        </h2>
        <div className="w-14 h-1 bg-orange-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 xl:gap-0 justify-center">
        {board.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-sm"
            />
            <h4 className="text-[12px] font-bold text-blue-950 uppercase tracking-wide">
              {member.name}
            </h4>
            <p className="text-[11px] text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
    
        <h2 className="font-playfair text-blue-950 text-3xl md:text-4xl font-extrabold">
          Management
        </h2>
        <div className="w-14 h-1 bg-orange-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
