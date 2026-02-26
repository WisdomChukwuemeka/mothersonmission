// app/about/page.jsx
// ─────────────────────────────────────────────────────────
// ABOUT PAGE  (route: /about)
// Tells the full story of the foundation:
//  - Hero banner
//  - Our story / history
//  - Statistics
//  - Our approach
//  - Partners
// ─────────────────────────────────────────────────────────

import Link from "next/link";
import { stats, partners } from "../components/data";
import { PageHero, SectionLabel, AnimatedCounter } from "../components/UI";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "About Us | Mothers of the Nation Foundation",
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <PageHero
        badge="About Us"
        title="We exist for every Nigerian mother."
        subtitle="Learn about our history, mission, and the approach that has helped us reach 4,800+ mothers across 32 states."
      />

      {/* ── OUR STORY ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <SectionLabel text="Our Story" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5">
              Founded on the belief that mothers are Nigeria's greatest untapped resource.
            </h2>
           <div className="text-slate-600 leading-relaxed">
  {/* Image floated left */}
  <div className="float-left mr-6 mb-4 w-48 md:w-64">
    <Image
      src="/ceo/ceo.png"   // put your image inside /public
      alt="Founders of Mothers of the Mission"
      width={300}
      height={300}
      className="rounded-2xl object-cover shadow-md"
    />
  </div>

  <p className="mb-4">
    Mothers of the Mission was established in 2016 by Amb. Vivian
    Anyanwu and Amb. Jarlath Anyanwu after years of field research revealed a consistent pattern: the
    fastest route to community transformation was investing in the mother at
    the centre of every household.
  </p>

  <p className="mb-4">
    What began as a small literacy programme serving 30 women in Port Harcourt has
    grown into a national organisation with field offices in six geopolitical
    zones, 200+ trained facilitators, and a network of over 4,800 program
    graduates.
  </p>

  <p>
    We are registered with the Corporate Affairs Commission of Nigeria and
    accredited by the Federal Ministry of Women Affairs. Our programs are
    externally evaluated every two years to ensure maximum impact.
  </p>

  {/* Clear float so layout doesn't break */}
  <div className="clear-both"></div>
</div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-blue-700 rounded-3xl p-8 text-white">
              <h3 className="font-black text-2xl mb-6">Our Journey</h3>
              <div className="space-y-5">
                {[
                  { icon: <FaStar />, event: "Encourage the Broken." },
                  { icon: <FaStar />, event: "Capacity for Exploit." },
                  { icon: <FaStar />, event: "Raising An Outstanding Teenager." },
                  { icon: <FaStar />, event: "National Workshop on women, peace and security." },
                  { icon: <FaStar />, event: "The Power of Touching Lives." },
                  { icon: <FaStar />, event: "An Amazing Woman." },
                  { icon: <FaStar />, event: "Campaign Against Drug Abuse And Violence." },
                  { icon: <FaStar />, event: "The Purpose Driven Youth Banquet." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <span className="font-black text-orange-300 w-12 shrink-0">{item.icon}</span>
                    <span className="text-emerald-100 text-sm leading-relaxed">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATISTICS ─────────────────────────────────── */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── OUR APPROACH ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <SectionLabel text="Our Approach" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              How we create lasting change
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our model is built on three interlocking principles that together produce
              deep, durable transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Meet mothers where they are",
                desc: "We run programmes in local languages, in community halls, churches, and mosques. We eliminate travel and childcare as barriers to participation.",
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                num: "02",
                title: "Holistic, not siloed",
                desc: "A mother who can read but cannot feed her children has not been truly empowered. We address economic, educational, health, and civic needs together.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                num: "03",
                title: "Build peer networks",
                desc: "Every graduate joins a cooperative of 10-20 peers. These networks provide social support, business referrals, and collective advocacy power for years after the program.",
                color: "bg-orange-100 text-orange-700",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-md transition-all">
                <span className={`inline-block px-3 py-1 rounded-lg text-sm font-black mb-4 ${item.color}`}>
                  {item.num}
                </span>
                <h3 className="font-black text-slate-900 text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ───────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-8">
            Our Partners &amp; Supporters
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
            {partners.map((p) => (
              <span key={p} className="text-slate-700 font-black text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-emerald-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">Join our mission</h2>
          <p className="text-emerald-100 mb-8">
            Whether you donate, volunteer, or simply share our work — you are part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="bg-white text-emerald-700 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors">
              Donate Now
            </Link>
            <Link href="/contact" className="btn-white">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
