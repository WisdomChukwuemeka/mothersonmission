"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gallery } from "../components/data";

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

// ── Impact Stats data ──────────────────────────────────────────────
const impactStats =[
  { value: 4500, suffix: "+", label: "Mothers Trained" },
  { value: 6000, suffix: "+", label: "Children Impacted" },
  { value: 85, suffix: "%", label: "Employment Rate" },
  { value: 7, suffix: "+", label: "States Covered" },
  { value: 40, suffix: "+", label: "Community Programs" },
//   { value: 2.5, suffix: "M", label: "Naira Distributed", prefix: "₦" },
  { value: 95, suffix: "%", label: "Health Outcomes Improved" },    
];

// ── Yearly highlights data ─────────────────────────────────────────
const yearlyHighlights =[
  {
    year: "1",
    title: "Expansion & Scale",
    achievements:[
      "Launched in various states including imo, lagos, abuja and rivers state",
      "Trained 1,200 new mothers in vocational skills",
      "Distributed food items and financial aid to 23+ families",
      "Opened 1 new health clinics"
    ],
    image: "/homeimage/teachone.png"
  },
  {
    year: "2",
    title: "Digital Transformation",
    achievements:[
      "Reached 800+ mothers",
      "Partnered 5 Organizations",
    ],
    image: "/homeimage/teachtwo.png"
  },
  {
    year: "3",
    title: "Peace and Security",
    achievements:[
      "Peace and Security program",
      "Piloted economic empowerment program",
      "Launched first health outreach Lagos",
    ],
    image: "/homeimage/security.png"
  }
];

// ── Success metrics data ───────────────────────────────────────────
const successMetrics =[
  {
    category: "Economic Empowerment",
    metric: "85%",
    description: "of program graduates report increased financial status and independence",
    icon: "💰"
  },
  {
    category: "Health",
    metric: "95%",
    description: "mothers received free maternal health screenings and care",
    icon: "🏥"
  },
  {
    category: "Leadership",
    metric: "156",
    description: "mothers now serving in community leadership positions",
    icon: "🎤"
  }
];

// ── Testimonial data ───────────────────────────────────────────────
const impactStories =[
  {
    name: "Nnenna Ogbonna",
    location: "Port Harcourt, Rivers State",
    before: "Struggling with self confidence and direction",
    after: "Now serving as leader",
    quote: "This organization didn't just teach me skills, it helped me discover my purpose. I went from hiding in the background to standing before my community with confidence.",
    image: "/testimony/nnenaone.png",
    stats: { income: "+150%", confidence: "Transformed", network: "200+ women" }
  },
  {
    name: "Lilian Anyanwu",
    location: "Port Harcourt, Rivers State",
    before: "Had limited financial knowledge and lacked confidence to invest",
    after: "Became financially informed and successfully invested with significant returns",
    quote: "The teachings I received gave me the courage to pursue financial knowledge and take bold steps. What started as a small investment became a testimony of growth and empowerment.",
    image: "/testimony/lilianone.png",
    stats: { investment_growth: "+550%", empowerment: "Financially Confident", impact: "Inspired Others" }
  },
  {
    name: "Favour Chukwuemeka",
    location: "Port Harcourt, Rivers State",
    program: "",
    before: "Stay at home woman with no community involvement",
    after: "Became a leading advocate for mothers and potential mothers in my community",
    quote: "I thought leadership was for politicians with degrees. Now I know that a woman's voice is the most powerful tool for community change.",
    image: "/testimony/favour.png",
    stats: { reach: "1,000+ people", advocacy: "Active", confidence: "Skyrocketed" }
  },
  {
    name: "Happiness Chinasa Anyanwu",
    location: "Port Harcourt, Rivers State",
    before: "Lacked direction, confidence, and clear educational and spiritual foundation",
    after: "Grew spiritually, academically, and professionally with renewed purpose",
    quote: "God transformed my life through this commission. From feeling like a nobody without direction, I have grown in faith, education, and confidence. Today I stand secure in my identity and purpose, all by His grace.",
    image: "/ceo/chinasaone.png",
    stats: { growth: "Spiritual & Academic", identity: "Renewed", confidence: "Transformed" }
  },
];

// ── Stats Section Component ────────────────────────────────────────
function ImpactStatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  },[]);

  return (
    <section ref={ref} className="bg-slate-900 py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
            Impact at a Glance
          </span>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Numbers that represent real lives transformed across Nigeria
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 text-center divide-y-0 md:divide-x divide-slate-800">
          {impactStats.map((s, i) => (
            <ImpactStatCard key={i} {...s} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactStatCard({ value, suffix, label, prefix, start }) {
  const isDecimal = value % 1 !== 0;
  const count = useCountUp(value * (isDecimal ? 10 : 1), 2200, start);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-4">
        {prefix || ""}{displayValue}<span className="text-orange-500 font-medium">{suffix}</span>
      </p>
      <p className="text-slate-400 font-semibold text-xs md:text-sm uppercase tracking-[0.15em]">
        {label}
      </p>
    </div>
  );
}

// ── Yearly Timeline Component ──────────────────────────────────────
function YearlyTimeline() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-orange-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
            Years of Transformation
          </h2>
          <p className="text-slate-600 font-light text-lg">
            From humble beginnings to statewide impact, trace our growth and milestones.
          </p>
        </div>

        {/* Year selector (Editorial Tab style) */}
        <div className="flex justify-center gap-8 md:gap-16 mb-16 border-b border-slate-200">
          {yearlyHighlights.map((y, i) => (
            <button
              key={y.year}
              onClick={() => setActiveYear(i)}
              className={`pb-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 relative ${
                activeYear === i 
                  ? "text-slate-900" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Year {y.year}
              {activeYear === i && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-orange-600"></span>
              )}
            </button>
          ))}
        </div>

        {/* Active year content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-slate-200 group">
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={yearlyHighlights[activeYear].image || '/homeimage/placeholder.png'}
              alt={yearlyHighlights[activeYear].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-tight">
              {yearlyHighlights[activeYear].title}
            </h3>
            <ul className="space-y-6">
              {yearlyHighlights[activeYear].achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-6 group">
                  <span className="flex-shrink-0 text-orange-500 font-serif italic text-xl mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-slate-600 font-light text-lg leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Success Metrics Grid ───────────────────────────────────────────
function SuccessMetricsSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Success by the Numbers
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-light max-w-md md:text-right">
            Real results from our programs that demonstrate our impact on mothers and communities across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successMetrics.map((metric, i) => (
            <div key={i} className="bg-stone-50 rounded-sm p-10 border-t-2 border-transparent hover:border-orange-500 transition-colors duration-500">
              <p className="text-5xl font-light text-slate-900 mb-6 tracking-tighter">
                {metric.metric}
              </p>
              <h3 className="font-medium text-xl text-slate-900 mb-4 tracking-tight">
                {metric.category}
              </h3>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Impact Stories Section ─────────────────────────────────────────
function ImpactStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-orange-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
            Real Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
            Before & After
          </h2>
          <p className="text-slate-600 font-light text-lg">
            See the tangible transformation in the lives of mothers we've served.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Story Selector (Sidebar) */}
          <div className="lg:col-span-4 space-y-2 flex flex-col">
            {impactStories.map((story, i) => (
              <button
                key={i}
                onClick={() => setActiveStory(i)}
                className={`w-full text-left p-6 transition-all duration-300 border-l-2 focus:outline-none ${
                  activeStory === i 
                    ? "border-orange-600 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]" 
                    : "border-slate-200 hover:border-slate-300 hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-200">
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      fill 
                      className="object-cover grayscale"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 tracking-tight">{story.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1 truncate">
                      {story.location}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Story Details (Main Area) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 border border-slate-100 shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)] rounded-sm">
            
            <div className="relative aspect-video rounded-sm overflow-hidden mb-10 group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image
                src={impactStories[activeStory].image}
                alt={impactStories[activeStory].name}
                fill
                className="object-cover filter xl:grayscale group-hover:grayscale-0 transition-all duration-700 object-top"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
            
            <blockquote className="text-xl md:text-2xl lg:text-3xl italic font-light text-slate-800 leading-relaxed mb-10 relative">
              <span className="text-5xl text-orange-200 font-serif absolute -top-4 -left-6 opacity-50">"</span>
              <span className="relative z-10">{impactStories[activeStory].quote}</span>
            </blockquote>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Before</p>
                <p className="text-slate-600 font-light leading-relaxed">
                  {impactStories[activeStory].before}
                </p>
              </div>
              <div className="pl-0 sm:pl-8 sm:border-l border-slate-100">
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-3">After</p>
                <p className="text-slate-900 font-medium leading-relaxed">
                  {impactStories[activeStory].after}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Geographic Reach Section ───────────────────────────────────────
function GeographicReach() {
  const states =[
    { name: "Rivers", status: "Established" },
    { name: "Imo", count: 1200, status: "Established" },
    { name: "Lagos", count: 1200, status: "Established" },
    { name: "Ebonyi", status: "Growing" },
    { name: "London", status: "Growing" },
    { name: "Abuja", count: 1200, status: "Established" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
            Geographic Reach
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
            Across Nigeria & Beyond
          </h2>
          <p className="text-slate-600 font-light text-lg">
            Reaching mothers and potential mothers in diverse communities.
          </p>
        </div>

        <div className="space-y-2">
          {states.map((state, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-slate-100 group">
              <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-1/3">
                <h3 className="text-xl font-medium text-slate-900 tracking-tight">{state.name}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${
                  state.status === "Established" ? "text-slate-500 bg-slate-100" :
                  "text-orange-600 bg-orange-50"
                }`}>
                  {state.status}
                </span>
              </div>
              
              <div className="flex-1 flex items-center justify-end gap-6 w-full">
                {state.count ? (
                  <>
                    <span className="text-sm font-medium text-slate-400 whitespace-nowrap">
                      {state.count.toLocaleString()} reached
                    </span>
                    <div className="hidden sm:block h-1 w-32 bg-slate-100 rounded-none overflow-hidden">
                      <div 
                        className="h-full bg-slate-800 transition-all duration-1000"
                        style={{ width: `${(state.count / 1200) * 100}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <span className="text-sm font-light italic text-slate-400">Data expanding</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Gallery Section ────────────────────────────────────────────────
function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col justify-center items-center mb-16 gap-2">
          <div className="max-w-2xl">
            <span className="text-orange-500 text-center font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Moments & Activities
            </h2>
          </div>
          <p className="text-slate-400 text-center text-lg font-light max-w-md ">
            Capturing the transformative journey of mothers and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {gallery.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-square md:aspect-4/5 overflow-hidden bg-slate-900 cursor-pointer"
            >
              <Image
                src={item.image || '/homeimage/placeholder.png'}
                alt={item.title || 'Gallery image'}
                fill
                className="object-cover filter xl:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {item.activity && (
                  <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-widest mb-3 block">
                    {item.activity}
                  </span>
                )}
                
                <h3 className="font-medium text-xl text-white mb-2 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.date && (
                    <span>
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  )}
                  {item.location && item.date && <span className="w-1 h-1 bg-slate-600 rounded-full" />}
                  {item.location && <span>{item.location}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 group">
            <span>View Full Archive</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}

// ── CTA Section ────────────────────────────────────────────────────
function ImpactCTA() {
  return (
    <section className="py-32 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8">
          Help Us Write the Next Chapter
        </h2>
        <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          With your support, we can reach 10,000 more mothers by 2026. Every donation creates a ripple effect of transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="/donate"
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="bg-transparent border border-slate-600 hover:bg-slate-800 text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Main Impact Report Page Component ──────────────────────────────
export default function ImpactReportPage() {
  return (
    <div className="w-full pb-5 bg-stone-50 font-sans antialiased selection:bg-orange-200 selection:text-orange-900">
      
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homeimage/heri.png"
            alt="Impact Report"
            fill
            className="object-cover opacity-50 mix-blend-overlay grayscale"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              
              <span className="text-orange-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
                Measurable Impact
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-8">
              Measuring What Matters: <br className="hidden md:block"/>
              <span className="text-slate-400 italic font-light">Lives Transformed.</span>
            </h1>
            
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              A comprehensive look at how Mothers on Mission International empowered 4,500+ mothers and potential mothers across the nation, creating lasting change for families and communities.
            </p>
          </div>
        </div>
      </section>

      <ImpactStatsSection />
      <YearlyTimeline />
      <SuccessMetricsSection />
      <ImpactStoriesSection />
      <GeographicReach />
      <GallerySection />
      {/* <FinancialTransparency /> */}
      <ImpactCTA />

    </div>
  );
}