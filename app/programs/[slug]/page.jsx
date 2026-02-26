"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

/*
  Same data as main page.
  In production you would fetch from API.
*/
const programs = {
  "economic-empowerment": {
    title: "Economic Empowerment",
    image: "/programs/economic.jpg",
    content: `
      Our Economic Empowerment program provides mothers with practical 
      vocational skills, entrepreneurship mentorship, and access to small 
      business funding.

      Participants receive training in catering, tailoring, hairdressing,
      digital skills, and financial management.

      The goal is simple: help mothers build sustainable income and 
      strengthen their families.
    `,
  },

  "education-literacy": {
    title: "Education & Literacy",
    image: "/programs/education.jpg",
    content: `
      We provide adult literacy classes for mothers who were unable to
      complete formal education.

      Mothers learn reading, writing, and numeracy skills, enabling them
      to support their children's education and confidently navigate society.
    `,
  },

  "health-wellness": {
    title: "Health & Wellness",
    image: "/programs/health.jpg",
    content: `
      This program focuses on maternal healthcare, nutrition, and mental
      wellness support.

      Through community clinics and awareness campaigns, we ensure mothers
      receive the medical guidance they need.
    `,
  },

  "leadership-advocacy": {
    title: "Leadership & Advocacy",
    image: "/programs/leadership.jpg",
    content: `
      Leadership training equips mothers to take active roles in community
      development and governance.

      We provide civic education, public speaking workshops, and advocacy
      platforms to amplify women's voices.
    `,
  },
};

export default function SingleProgramPage() {
  const { slug } = useParams();
  const program = programs[slug];

  if (!program) {
    return <div className="p-20 text-center">Program not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Image */}
      <section className="relative h-[400px]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-black text-white text-center">
            {program.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line text-lg">
          {program.content}
        </p>

        <div className="mt-10">
          <Link
            href="/programs"
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back to Programs
          </Link>
        </div>
      </section>
    </div>
  );
}