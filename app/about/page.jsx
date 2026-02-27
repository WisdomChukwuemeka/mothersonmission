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
import Image from "next/image";
import { stats, partners } from "../components/data";
import { PageHero, SectionLabel, AnimatedCounter } from "../components/UI";
import { FaStar } from "react-icons/fa";

export const metadata = {
  title: "About Us | Mothers of the Nation Foundation",
  description: "Learn about our history, mission, and impact. Since 2016, we've reached 4,800+ mothers across 32 states in Nigeria through education, economic empowerment, and community development.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-3 bg-white">
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <PageHero
        badge="About Us"
        title="We exist for every Nigerian mother."
        subtitle="Learn about our history, mission, and the approach that has helped us reach 4,800+ mothers across 32 states."
      />

      {/* ── OUR STORY ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <article className="prose prose-lg max-w-none">
              <SectionLabel text="Our Story" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                Founded on the belief that mothers are Nigeria's greatest untapped resource.
              </h2>
              
              <div className="text-slate-600 leading-relaxed space-y-4">
                <div className="float-left mr-6 mb-4 w-48 md:w-64 not-prose">
                  <figure className="m-0">
                    <Image
                      src="/ceo/ceo.png"
                      alt="Ambassadors Vivian and Jarlath Anyanwu, Founders of Mothers of the Nation Foundation"
                      width={300}
                      height={300}
                      className="rounded-2xl object-cover shadow-lg"
                      priority
                    />
                    <figcaption className="mt-2 text-xs text-slate-500 text-center font-medium">
                      Amb. Vivian & Jarlath Anyanwu, Co-Founders
                    </figcaption>
                  </figure>
                </div>

                <p>
                  Mothers on Mission International (MOM) was established in 2016 by 
                  <strong> Amb. Vivian Anyanwu</strong> and <strong className="pr-1">Amb. Jarlath Anyanwu.</strong> 
                  Mothers on Mission International is a non denominational, non-political, non-profit 
                  organization dedicated to empowering Nigerian mothers through spiritual growth, education, economic opportunities, and community development.
                  The organization was born out of a shared conviction that 
                  empowering mothers is the most effective way to create lasting change in Nigeria and the world at large.
                </p>

                <p>
                  What began as a small literacy programme serving 8 women in Port Harcourt has
                  grown into a national organisation with field offices in six geopolitical
                  zones, 200+ trained facilitators, and a network of over 4,800 program
                  graduates.
                </p>

                <p>
                  Our impact is not just in numbers, but in the stories of transformation we see.
                  Mothers who were once isolated and struggling to provide for their families
                  are now running successful businesses, advocating for their communities, and
                  breaking cycles of poverty for their children. We are proud of how far we've come,
                  but even more excited about the work ahead to reach millions more mothers across Nigeria and globally.
                </p>
              </div>
            </article>

            {/* Timeline Card */}
            <aside className="lg:sticky lg:top-24">
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">
                  Milestones & Initiatives
                </h3>
                <ul className="space-y-4">
                  {[
                    "Encourage the Broken",
                    "Capacity for Exploit",
                    "Raising An Outstanding Teenager",
                    "National Workshop on Women, Peace and Security",
                    "The Power of Touching Lives",
                    "An Amazing Woman",
                    "Campaign Against Drug Abuse And Violence",
                    "The Purpose Driven Youth Banquet",
                  ].map((event, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-amber-400 shrink-0" aria-hidden="true">
                        <FaStar size={14} />
                      </span>
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {event}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── STATISTICS ─────────────────────────────────── */}
      <section className="bg-slate-900 py-16" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Our Impact Statistics</h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter 
                key={stat.label} 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <SectionLabel text="Our Approach" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How we create lasting change
            </h2>
            <p className="text-slate-600 text-lg">
              Our model is built on three interlocking principles that together produce
              deep, durable transformation.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Meet mothers where they are",
                desc: "We run programmes in local languages, in community halls, churches, and mosques. We eliminate travel and childcare as barriers to participation.",
                accent: "border-l-4 border-emerald-500",
              },
              {
                num: "02",
                title: "Holistic, not siloed",
                desc: "A mother who can read but cannot feed her children has not been truly empowered. We address economic, educational, health, and civic needs together.",
                accent: "border-l-4 border-blue-500",
              },
              {
                num: "03",
                title: "Build peer networks",
                desc: "Every graduate joins a cooperative of 10-20 peers. These networks provide social support, business referrals, and collective advocacy power for years after the program.",
                accent: "border-l-4 border-amber-500",
              },
            ].map((item) => (
              <article 
                key={item.num} 
                className={`bg-white rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow ${item.accent}`}
              >
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 block">
                  Principle {item.num}
                </span>
                <h3 className="font-bold text-slate-900 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ───────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <header className="text-center mb-10">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
              Our Partners & Supporters
            </p>
          </header>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partners.map((partner) => (
              <span 
                key={partner} 
                className="text-slate-700 font-semibold text-lg tracking-tight"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join our mission
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Whether you donate, volunteer, or simply share our work — you are part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate" 
              className="inline-flex items-center justify-center bg-white text-slate-900 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Donate Now
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center border-2 border-slate-600 text-white font-semibold px-8 py-4 rounded-lg hover:border-slate-400 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}