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
const stats =[
  { value: 4500, suffix: "+", label: "Mothers Empowered" },
  { value: 7, suffix: "+", label: "States Reached" },
  { value: 40, suffix: "+", label: "Community Programs" },
  { value: 10, suffix: "yrs", label: "Of Impact" },
];

// ── Programs data ──────────────────────────────────────────────────
const programs =[
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
const stories =[
  {
    name: "Nnenna Ogbonna",
    quote: "As a single lady, I once wondered if there was a space where I could truly grow, belong, and be equipped without feeling overlooked or pressured into a particular season of life. I longed for a community that understood that purpose, faith, and growth are not reserved for marriage alone. Joining Mothers on Mission International changed that perspective completely. From the onset, it became clear that this is a community created for every woman—single or married—meeting us exactly where we are. Through this forum, I have been strengthened in my faith, refined in my thinking, and encouraged to live intentionally in my current season. I have gained clarity about purpose, identity, and the importance of becoming whole, prepared, and grounded as a woman. Beyond my personal experience, I have witnessed how lives have been positively impacted across different stages of life—marriages strengthened, women encouraged, and families transformed through shared teachings, prayers, and genuine sisterhood. Mothers on Mission International is more than a community; it is a safe space where women are nurtured, empowered, and equipped to live on mission, regardless of their marital status. I am deeply grateful for the vision, the leadership, and the opportunity to be part of a forum that truly values and uplifts women in every season.",
    quoteone: "As a single woman seeking purpose and belonging, I found a nurturing and empowering community in Mothers on Mission International. It strengthened my faith, clarified my identity, and helped me embrace my season with confidence. I have also witnessed lives and families transformed through this commission.",
    image: "/testimony/nnenaone.png",
    year: "2022",
  },
  {
    name: "Happiness Chinasa Anyanwu",
    quoteone: "God transformed my life through Mothers on Mission International. From lacking direction and confidence, I have grown spiritually, academically, and professionally. This community of faith and love reshaped my identity and gave me a renewed sense of purpose. Glory to God for this journey of transformation.",
    quote:
      "I stand here as a living proof that God can pick a 'nobody' from the dust and set them among princes. Before I truly met the Lord, I was a person without direction, lacking both spiritual standards and educational qualifications. However, today in this very community of love, faith and growth Mothers on Mission International (Mom) , God has changed my identity from nobody to somebody. My spiritual growth and maturity , educational qualifications, professions, skills and many others are all by the the grace and mercy of God Almighty through this very commission. Glory to the Lord Almighty",
    image: "/ceo/chinasaone.png",
    year: "2023",
  },
  {
    name: "Lilian Anyanwu",
    quoteone: "Through the guidance and teachings in Mothers on Mission International, I gained both spiritual and financial empowerment. Inspired to invest despite limited knowledge, I stepped out in faith and saw remarkable growth. This commission equips women spiritually, emotionally, and financially for lasting impact.",
    quote: "Praise God, i want to appreciate God for using our leader to inspire or feed us not just spiritual but also physical. During one of our offline gathering, our lead pastor was speaking about self empowerment/development, while the teaching was going on, she made mention of buying shares, but before that period , i was having the zeal to buy shares but i lack knowledge on how to go about it. Her teaching prompted me into seeking for knowledge which i later got from a platform on facebook. After aquiring basic training on shares, i went ahead to buy a particular share with 12,000 naira. To cut the long story short, the share i bought for 12,000 naira appreciated to 79,000 naira within a period of few months. Am glad to announce that, here in mother's on mission, we are well equipped both spiritual, emotionally, financially and maritally.",
    image: "/testimony/lilianone.png",
    year: "2024",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────
const faqs =[
  {
    q: "Who can apply to your programs?",
    a: "Every mothers and potential mothers in Nigeria. We prioritise those facing the greatest barriers to opportunity, but all are welcome to apply.",
  },
  {
    q: "Are the programs free of charge?",
    a: "Yes. All our programs are fully funded through donations and grants. Participants only need commitment and a willingness to grow.",
  },
  {
    q: "How can I support or partner with you?",
    a: "You can donate, volunteer, or become a corporate partner. Visit our Contact page or click 'Get Involved' above to begin.",
  },
  {
    q: "Do you operate outside Nigeria?",
    a: "Yes, We are actively exploring Africa and International expansion for 2026.",
  },
];

// ── FAQ Item component ─────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${open ? 'text-orange-600' : 'text-slate-900 group-hover:text-orange-600'}`}>
          {q}
        </span>
        <span className="relative flex h-6 w-6 items-center justify-center shrink-0">
          <span className={`absolute h-px w-full bg-slate-900 transition-all duration-300 ${open ? 'bg-orange-600' : ''}`}></span>
          <span className={`absolute h-full w-px bg-slate-900 transition-all duration-300 ${open ? 'rotate-90 bg-orange-600 opacity-0' : ''}`}></span>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}

// ── Stats Section (with intersection observer) ─────────────────────
function StatsSection() {
  const ref = useRef(null);
  const[visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  },[]);

  return (
    <section ref={ref} className="bg-slate-900 py-20 md:py-28 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center divide-x-0 md:divide-x divide-slate-800">
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
    <div className="flex flex-col items-center justify-center">
      <p className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-3">
        {count.toLocaleString()}
        <span className="text-orange-500 font-medium">{suffix}</span>
      </p>
      <p className="text-slate-400 font-semibold text-xs md:text-sm uppercase tracking-[0.15em]">
        {label}
      </p>
    </div>
  );
}

const heroImages =[
  "/homeimage/heri.png",
  "/homeimage/mom.png",
  "/homeimage/momthree.png",
];

// ── Main Component ─────────────────────────────────────────────────
export const Home = () => {
  const[activeStory, setActiveStory] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 30000); 
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="w-full pb-3 bg-stone-50 font-sans antialiased text-slate-900 selection:bg-orange-200 selection:text-orange-900">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden flex items-center">
        {/* Background Images with Crossfade */}
        <div className="absolute inset-0 bg-slate-950">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Mothers of mission international"
              fill
              className={`object-cover object-center transition-opacity duration-3000 ease-in-out ${
                index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              priority={index === 0}
              sizes="100vw"
            />
          ))}
          {/* Editorial Dark linear Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-3">
              <p className="text-orange-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
                Mothers on Christain Mission International
              </p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-8">
              Developing mothers to become <span className="text-orange-400 italic font-light">catalysts</span> for change & national growth.
            </h1>
            
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mb-12">
              We walk alongside Nigerian mothers, equipping, elevating, and
              empowering them to transform their families and communities from the ground up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/programs"
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 text-center"
              >
                See Our Programs
              </Link>
              <Link
                href="/about"
                className="group relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 text-center"
              >
                What We Do
              </Link>
            </div>
          </div>
        </div>

        {/* Minimalist Slide Indicators */}
        <div className="absolute bottom-10 left-12 sm:left-12 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 transition-all duration-500 rounded-full ${
                index === currentImageIndex 
                  ? "bg-orange-500 w-6" 
                  : "bg-white/30 hover:bg-white/50 w-6"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-slate-950 border-b border-slate-800 overflow-hidden flex items-center">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-12 px-6 text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">
              {["Economic Empowerment", "Education & Literacy", "Maternal Health", "Leadership Training", "Community Building", "National Growth"].map((t) => (
                <span key={t} className="inline-flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600/60" />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── MISSION STRIP ── */}
      <section className="bg-stone-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-[1.15] tracking-tight mb-8">
              Empowering mothers to rise, lead, and fulfil God’s divine assignment.
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                We are a non-governmental organisation committed to equipping
                mothers with the spiritual strength, practical skills, and leadership capacity
                they need to confidently run their homes, nurture their children, and impact
                their communities. We believe every mother carries a divine assignment—a purpose designed by God to shape generations.
              </p>
              <p>
                Through mentorship, education, entrepreneurship training, and spiritual
                development programs, we empower mothers to discover their calling,
                strengthen their families, and become pillars of wisdom and
                transformation.
              </p>
              <p className="font-medium text-slate-900">
                By investing in mothers, we invest in the future. When a mother is empowered,
                a home is strengthened, and communities experience lasting generational impact.
              </p>
            </div>
          </div>

          {/* Staggered Editorial Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6 mt-0 md:mt-12">
              {[
                { title: "Compassion", desc: "Dignity and respect.", image: "/mission/compassion.png" },
                { title: "Community", desc: "Collective action.", image: "/mission/herofive.png" },
              ].map((v) => (
                <div key={v.title} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                  <Image src={v.image || '/homeimage/placeholder.png'} alt={v.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-white text-xl font-medium tracking-tight mb-1">{v.title}</h3>
                    <p className="text-slate-300 text-sm font-light">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              {[
                { title: "Empowerment", desc: "Building capacity.", image: "/mission/empowerment.png" },
                { title: "Equity", desc: "Marginalised voices first.", image: "/mission/equity.png" },
              ].map((v) => (
                <div key={v.title} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                  <Image src={v.image || '/homeimage/placeholder.png'} alt={v.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-white text-xl font-medium tracking-tight mb-1">{v.title}</h3>
                    <p className="text-slate-300 text-sm font-light">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />
      
      <CoreValuesSection />

      {/* ── PROGRAMS ── */}
      <section className="py-24 md:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col justify-center items-center mb-16 gap-2">
            <div className="max-w-2xl">
              <span className="text-orange-600 text-center font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                Four pillars of transformation
              </h2>
            </div>
            <p className="text-slate-600 text-center text-lg font-light max-w-md md:text-right">
              Addressing the full spectrum of a mother's needs economic, educational, physical, and civic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className="group relative h-[450px] overflow-hidden rounded-sm flex flex-col justify-end bg-slate-900"
              >
                {/* Background Image & Overlays */}
                <div className="absolute inset-0">
                  <Image src={p.image || '/homeimage/placeholder.png'} alt={p.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/50 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="relative z-10 p-8 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-medium text-white mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 font-light text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {p.description}
                  </p>
                  <Link
                    href="/programs"
                    className="inline-flex items-center text-xs font-semibold text-orange-400 uppercase tracking-widest group-hover:text-orange-300 transition-colors"
                  >
                    Learn more <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT BANNER ── */}
      <section className="relative overflow-hidden bg-slate-900 py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homeimage/momfour.png"
            alt="Mothers of the Nation"
            fill
            className="object-cover object-center mix-blend-overlay opacity-30 grayscale"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-sm mb-6">Our Reach</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-8">
            Every mother we reach is a <span className="italic font-light text-slate-300">multiplier of change.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Research shows that educated, economically stable mothers reinvest up to 90%
            of their income in their children's education and health. We don't just change
            one life—we change generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/impact"
              className="bg-white hover:bg-stone-100 text-slate-900 text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300"
            >
              Read Impact Report
            </Link>
            <Link
              href="/donate"
              className="border border-white/30 hover:bg-white/10 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-orange-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Stories of Change</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Voices from our community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {stories.map((s, i) => {
              const isExpanded = expanded[i];
              return (
                <div key={i} className="group flex flex-col bg-white p-10 rounded-sm shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 h-full">
                  <div className="mb-8">
                    <span className="text-6xl text-slate-200 font-serif leading-none absolute -mt-4 -ml-4">"</span>
                    <p className="text-slate-600 text-base leading-relaxed relative z-10 font-light italic">
                      {isExpanded ? s.quote : s.quoteone}
                    </p>
                    <button
                      onClick={() => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))}
                      className="mt-4 text-xs font-semibold text-orange-600 uppercase tracking-widest hover:text-orange-700 focus:outline-none transition-colors"
                    >
                      {isExpanded ? "Read Less" : "Read Full Story"}
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
                      <Image src={s.image} alt={s.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm tracking-tight">{s.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── TEAM ── */}
      <TeamSection />

      {/* ── PARTNERS ── */}
      <section className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold mb-12">
            Trusted Partners & Supporters
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {["IAWPA", "Feast of Esther", "Kingdom Workers Assembly", "Scippra Global", "Elect Ladies"].map((p) => (
              <span key={p} className="text-slate-400 hover:text-slate-800 transition-colors duration-300 font-bold text-xl md:text-2xl tracking-tight grayscale hover:grayscale-0">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section className="py-24 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Join the movement
            </h2>
            <p className="mt-6 text-slate-400 font-light text-lg">
              Your involvement allows us to expand our reach and deepen our impact across Nigeria and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Donate", desc: "Your gift directly funds programs, scholarships, and health clinics for mothers in need.", cta: "Give Today", href: "/donate" },
              { title: "Volunteer", desc: "Share your time and skills as a mentor, facilitator, or community ambassador.", cta: "Join Us", href: "/volunteer" },
              { title: "Partner", desc: "Align your company's CSR goals with measurable impact for Nigerian families.", cta: "Get in Touch", href: "/contact" },
            ].map((card) => (
              <div key={card.title} className="bg-slate-800/50 border border-slate-700/50 p-10 flex flex-col items-start hover:bg-slate-800 transition-colors duration-300 rounded-sm">
                <h3 className="font-semibold text-2xl text-white mb-4">{card.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-10 flex-1">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold uppercase tracking-widest flex items-center gap-2 group transition-colors"
                >
                  {card.cta} 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-orange-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Information</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="border-t border-slate-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-slate-900 pt-8 pb-24 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Stay connected
          </h2>
          <p className="text-slate-400 font-light text-lg mb-10">
            Get program updates, impact reports, and stories of change delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-slate-800/50 border border-slate-700 rounded-sm px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all font-light"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-slate-500 text-xs font-medium tracking-wide">
            WE RESPECT YOUR PRIVACY. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>

      {/* Tailwind keyframe for marquee injected as a style tag */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};