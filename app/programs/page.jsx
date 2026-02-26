"use client";

import Image from "next/image";
import Link from "next/link";

/* 
  Central program data
  Slug is important — it controls the URL
*/
const programs = [
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    description:
      "Equipping mothers with vocational skills, business training, and access to micro-finance.",
    image: "/programs/economic.jpg",
  },
  {
    slug: "education-literacy",
    title: "Education & Literacy",
    description:
      "Adult literacy classes and scholarships that help mothers guide their families academically.",
    image: "/programs/education.jpg",
  },
  {
    slug: "health-wellness",
    title: "Health & Wellness",
    description:
      "Maternal health clinics, nutrition support, and mental wellness awareness programs.",
    image: "/programs/health.jpg",
  },
  {
    slug: "leadership-advocacy",
    title: "Leadership & Advocacy",
    description:
      "Leadership training that empowers mothers to influence policy and community development.",
    image: "/programs/leadership.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[400px]">
        <Image
          src="/homeimage/momfour.png"
          alt="Our Programs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Our Programs
          </h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-60">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">
                  {program.title}
                </h2>
                <p className="text-slate-600 mb-5">
                  {program.description}
                </p>

                {/* Dynamic link to single program page */}
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  View Program →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}