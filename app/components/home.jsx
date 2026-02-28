"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import TeamSection from "./TeamSection";
import CoreValuesSection from "./CoreValuesSection";

// ── Animated counter hook ──────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Stats data ─────────────────────────────────────────────────────
const stats = [
  { value: 4800, suffix: "+", label: "Mothers Empowered" },
  { value: 32, suffix: "", label: "States Reached" },
  { value: 120, suffix: "+", label: "Community Programs" },
  { value: 15, suffix: "yrs", label: "Of Impact" },
];

// ── Programs data ──────────────────────────────────────────────────
const programs = [
  {
    icon: "🌱",
    title: "Economic Empowerment",
    description:
      "Equipping mothers with vocational skills, micro-finance access, and entrepreneurship mentorship to build sustainable livelihoods.",
    color: "from-blue-500 to-teal-600",
    image: "/programs/empowerment.png",
  },
  {
    icon: "📚",
    title: "Education & Literacy",
    description:
      "Adult literacy programs and scholarships ensuring every mother can read, write, and guide her children.",
    color: "from-blue-500 to-indigo-600",
    image: "/programs/education.png",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description:
      "Maternal health clinics, nutritional support, and mental-health awareness.",
    color: "from-rose-500 to-pink-600",
    image: "/programs/health.png",
  },
  {
    icon: "🗣️",
    title: "Leadership & Advocacy",
    description:
      "Civic training and platforms that amplify mothers' voices.",
    color: "from-amber-500 to-orange-600",
    image: "/programs/leadership.png",
  },
];

// ── Stories data ───────────────────────────────────────────────────
const stories = [
  {
    name: "Onyedikachi Ogbonna",
    role: "Accounatant • Port Harcourt",
    quote: "As a single woman seeking growth, purpose, and belonging, i found a welcoming and empowering community in Mothers on Mission International. The organization helped strengthen my faith, clarify my identity, and embrace my current season without pressure. Beyond my personal experience, i have seen lives, marriages, and families transformed. i describes it as a safe, nurturing space that uplifts and equips women in every stage of life",
    image: "/testimony/nnena.png",
    year: "2022",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Participant, Literacy & Personal Growth • Kano",
    quote:
      "I used to hide whenever forms needed to be filled or letters needed to be read. I felt ashamed that I could not read at my age. This program did more than teach me letters it restored my dignity. I can now read my Bible, help my children with homework, and speak with confidence. I no longer feel invisible. I feel seen, capable, and called.",
    image: "/homeimage/momtwo.png",
    year: "2023",
  },
  {
    name: "Ngozi Eze",
    role: "Participant, Leadership & Advocacy • Enugu",
    quote:
      "I joined as a quiet mother who avoided public speaking. During the leadership sessions, I realised that my voice matters in my community. Today, I serve in my ward and advocate for clean water and safer schools. I now understand that leadership is not about position it is about obedience to purpose. This foundation helped me step into mine.",
    image: "/homeimage/momtwo.png",
    year: "2024",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────
const faqs = [
  {
    q: "Who can apply to your programs?",
    a: "Any mother aged 18 and above residing in Nigeria is eligible. Priority is given to widows, single mothers, and women from low-income households.",
  },
  {
    q: "Are the programs free of charge?",
    a: "Yes. All our core programs are fully funded through donations and grants. Participants only need commitment and a willingness to grow.",
  },
  {
    q: "How long do the programs last?",
    a: "Program durations range from 3-month intensive workshops to 12-month mentorship journeys, depending on the track.",
  },
  {
    q: "How can I support or partner with you?",
    a: "You can donate, volunteer, or become a corporate partner. Visit our Contact page or click 'Get Involved' above to begin.",
  },
  {
    q: "Do you operate outside Nigeria?",
    a: "Our primary focus is Nigeria. We are actively exploring West African expansion partnerships for 2026.",
  },
];

// ── FAQ Item component ─────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        open ? "border-blue-400 bg-blue-50/50" : "border-slate-200 bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-800 pr-4">{q}</span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
            open ? "bg-blue-500 rotate-45" : "bg-slate-300"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-6 text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ── Stats Section (with intersection observer) ─────────────────────
function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-blue-700 py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} start={visible} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, 2200, start);
  return (
    <div className="group">
      <p className="text-4xl lg:text-5xl font-black text-white tracking-tight">
        {count.toLocaleString()}
        <span className="text-blue-300">{suffix}</span>
      </p>
      <p className="mt-2 text-blue-100 font-medium text-sm uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────
export const Home = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <div className="w-full bg-white font-sans antialiased">

           {/* ── HERO ── */}
      <section className="relative min-h-150 md:min-h-175 lg:min-h-200 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/homeimage/heri.png"
            alt="Mothers of the Nation"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>

        {/* Floating badge - hidden on small screens */}
        <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-white text-sm font-medium">Empowering Nigeria's Mothers Since 2016</span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full min-h-150 md:min-h-175 lg:min-h-200 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-10 py-20 md:py-0">
            <p className="text-orange-300 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
              MOTHERS ON MISSION INTERNATIONAL
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.15] max-w-2xl">
              Developing mothers & potential mothers to become{" "}
              <span className="text-orange-300 italic">catalysts</span>
              {" "}for change, compassion &amp; national growth.
            </h1>
            <p className="mt-4 md:mt-5 text-white/80 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed">
              We walk alongside Nigerian mothers, equipping, elevating, and
              empowering them to transform their families and communities.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/programs"
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-200 text-center"
              >
                See Our Programs
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all duration-200 text-center"
              >
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-blue-600 py-3 overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8 text-white/90 text-sm font-medium uppercase tracking-widest">
              {["Economic Empowerment", "Education & Literacy", "Maternal Health", "Leadership Training", "Community Building", "National Growth"].map((t) => (
                <span key={t} className="inline-flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── MISSION STRIP ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
         <div>
  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
    Our Mission
  </span>

  <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5">
    Empowering mothers and potential mothers to rise, lead, and fulfil God’s divine assignment.
  </h2>

  <p className="text-slate-600 leading-relaxed mb-6">
    We are a non governmental organisation committed to equipping
    mothers with the spiritual strength, practical skills, and leadership capacity
    they need to confidently run their homes, nurture their children, and impact
    their communities. We believe every mother carries a divine assignment 
    a purpose designed by God to shape generations and influence society for good.
  </p>

  <p className="text-slate-600 leading-relaxed mb-6">
    Through mentorship, education, entrepreneurship training, and spiritual
    development programs, we empower mothers to discover their calling,
    strengthen their families, and become pillars of wisdom, stability, and
    transformation within their communities.
  </p>

  <p className="text-slate-600 leading-relaxed mb-8">
    By investing in mothers, we invest in the future. When a mother is empowered,
    a home is strengthened, children are guided with purpose, and communities
    experience lasting, generational impact.
  </p>
</div>

          {/* Values grid */}
     <div className="grid grid-cols-2 gap-4">
  {[
    {
      icon: "💚",
      title: "Compassion",
      desc: "We meet every mother with dignity and unconditional respect.",
      image: "/mission/compassion.png",
    },
    {
      icon: "🔥",
      title: "Empowerment",
      desc: "We build capacity, not dependency.",
      image: "/mission/empowerment.png",
    },
    {
      icon: "🤝",
      title: "Community",
      desc: "Collective action amplifies individual change.",
      image: "/mission/herofive.png",
    },
    {
      icon: "⚖️",
      title: "Equity",
      desc: "We prioritise the most marginalised voices first.",
      image: "/mission/equity.png",
    },
  ].map((v) => (
    <div
      key={v.title}
      className="relative rounded-2xl overflow-hidden p-5 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{
        backgroundImage: `url(${v.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <span className="text-2xl">{v.icon}</span>
        <h3 className="font-bold mt-2 mb-1">{v.title}</h3>
        <p className="text-sm leading-relaxed">{v.desc}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      <CoreValuesSection />

      {/* ── PROGRAMS ── */}
      <section className=" pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
           
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Four pillars of transformation
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our holistic approach addresses the full spectrum of a mother's needs 
              economic, educational, physical, and civic.
            </p>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {programs.map((p) => (
    <div
      key={p.title}
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[280px] group hover:-translate-y-2 transition-all duration-300"
      style={{
        backgroundImage: `url(${p.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 p-6 text-white">
        <span className="text-3xl mb-3 block">{p.icon}</span>

        <h3 className="font-black text-lg mb-2">
          {p.title}
        </h3>

        <p className="text-sm text-white/80 leading-relaxed mb-4">
          {p.description}
        </p>

        <Link
          href="/programs"
          className="inline-flex items-center gap-1 text-sm font-semibold bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent hover:gap-3 transition-all duration-200"
        >
          Learn more →
        </Link>
      </div>
    </div>
  ))}
</div>

          <div className="mt-12 text-center">
            <Link
              href="/programs"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 active:scale-95"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT BANNER ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <Image
              src="/homeimage/momfour.png"
              alt="Mothers of the Nation"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Reach</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Every mother we reach is a{" "}
            <span className="text-blue-300">multiplier of change.</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Research shows that educated, economically stable mothers reinvest up to 90%
            of their income in their children's education and health. We don't just change
            one life  we change generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/impact"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Read Our Impact Report
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Stories of Change
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Voices from our community
            </h2>
          </div>

          {/* Story cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveStory(i)}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                  activeStory === i
                    ? " bg-white shadow-xl hover:border-blue-200"
                    : "border-transparent bg-white hover:border-blue-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-blue-100 shrink-0">
                    <Image src={s.image} alt={s.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{s.name}</p>
                    <p className="text-slate-500 text-xs">{s.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{s.quote}"</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-blue-600 text-xs font-semibold">Program Graduate {s.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <TeamSection />

      {/* ── PARTNERS ── */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-10">
            Trusted partners &amp; supporters
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50">
            {["IWPA", "UN Women", "USAID", "World Bank", "Ford Foundation", "CBN", "NDDC"].map((p) => (
              <span key={p} className="text-slate-700 font-black text-lg tracking-tight">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section className="py-24 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "💰",
              title: "Donate",
              desc: "Your gift directly funds programs, scholarships, and health clinics for mothers in need.",
              cta: "Give Today",
              href: "/donate",
              style: "bg-white text-blue-700",
            },
            {
              icon: "🙋",
              title: "Volunteer",
              desc: "Share your time and skills  as a mentor, facilitator, or community ambassador.",
              cta: "Join Us",
              href: "/volunteer",
              style: "bg-blue-600 border border-white/30 text-white",
            },
            {
              icon: "🏢",
              title: "Partner With Us",
              desc: "Align your company's CSR goals with measurable impact for Nigerian families.",
              cta: "Get in Touch",
              href: "/contact",
              style: "bg-blue-600 border border-white/30 text-white",
            },
          ].map((card) => (
            <div key={card.title} className={`${card.style} rounded-2xl p-8 flex flex-col`}>
              <span className="text-3xl mb-4">{card.icon}</span>
              <h3 className="font-black text-xl mb-3">{card.title}</h3>
              <p className={`text-sm leading-relaxed flex-1 ${card.style.includes("white text") ? "text-slate-600" : "text-white/80"}`}>
                {card.desc}
              </p>
              <Link
                href={card.href}
                className={`mt-6 inline-block text-center font-bold px-5 py-3 rounded-xl transition-all duration-200 ${
                  card.style.includes("bg-white")
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/15 hover:bg-white/25 text-white border border-white/20"
                }`}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Common questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="text-2xl">📬</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-slate-900 mb-3">
            Stay connected with our mission
          </h2>
          <p className="text-slate-500 mb-7">
            Get program updates, impact reports, and stories of change delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-slate-400 text-xs">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Tailwind keyframe for marquee  injected as a style tag */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};