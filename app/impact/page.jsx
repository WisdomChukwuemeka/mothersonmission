"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
const impactStats = [
  { value: 4500, suffix: "+", label: "Mothers Trained" },
  { value: 6000, suffix: "+", label: "Children Impacted" },
  { value: 85, suffix: "%", label: "Employment Rate" },
  { value: 7, suffix: "+", label: "States Covered" },
  { value: 40, suffix: "+", label: "Community Programs" },
//   { value: 2.5, suffix: "M", label: "Naira Distributed", prefix: "₦" },
    { value: 95, suffix: "%", label: "Health Outcomes Improved" },    
];

// ── Yearly highlights data ─────────────────────────────────────────
const yearlyHighlights = [
  {
    year: "1",
    title: "Expansion & Scale",
    achievements: [
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
    achievements: [
      "Reached 800+ mothers",
      "Partnered 5 Organizations",
    ],
    image: "/homeimage/teachtwo.png"
  },
  {
    year: "3",
    title: "Peace and Security",
    achievements: [
      "Peace and Security program",
      "Piloted economic empowerment program",
      "Launched first health outreach Lagos",
    ],
    image: "/homeimage/security.png"
  }
];

// ── Success metrics data ───────────────────────────────────────────
const successMetrics = [
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
const impactStories = [
  {
    name: "Onyedikachi Ogbonna",
    location: "Port Harcourt, Rivers State",
    program: "Leadership & Personal Development",
    before: "Struggling with self confidence and direction",
    after: "Now serving as leader",
    quote: "This organization didn't just teach me skills, it helped me discover my purpose. I went from hiding in the background to standing before my community with confidence.",
    image: "/testimony/nnena.png",
    stats: { income: "+150%", confidence: "Transformed", network: "200+ women" }
  },
  {
    name: "Fatima Al-Hassan",
    location: "Kano State",
    program: "Literacy & Vocational Training",
    before: "Illiterate, dependent on family for basic transactions",
    after: "Runs successful tailoring business, employs 3 apprentices",
    quote: "For 40 years I felt invisible because I couldn't read. Today I sign my own contracts and teach other women to sew. My children are proud of me.",
    image: "/homeimage/momtwo.png",
    stats: { income: "+300%", literacy: "Advanced", employees: "3 women" }
  },
  {
    name: "Favour Chukwuemeka",
    location: "Port Harcourt, Rivers State",
    program: "",
    before: "Stay at home woman with no community involvement",
    after: "Became a leading advocate for mothers and potential mothers in my community",
    quote: "I thought leadership was for politicians with degrees. Now I know that a woman's voice is the most powerful tool for community change.",
    image: "/homeimage/favour.png",
    stats: { reach: "1,000+ people", advocacy: "Active", confidence: "Skyrocketed" }
  }
];

// ── Financial transparency data ────────────────────────────────────
// const financialBreakdown = [
//   { category: "Program Delivery", percentage: 78, color: "bg-blue-500" },
//   { category: "Administration", percentage: 12, color: "bg-blue-300" },
//   { category: "Fundraising", percentage: 7, color: "bg-blue-200" },
//   { category: "Reserve", percentage: 3, color: "bg-blue-100" }
// ];

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
  }, []);

  return (
    <section ref={ref} className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Impact at a Glance</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Numbers that represent real lives transformed across Nigeria</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
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
    <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
      <p className="text-4xl lg:text-5xl font-black text-white tracking-tight">
        {prefix || ""}{displayValue}{suffix}
      </p>
      <p className="mt-2 text-blue-100 font-medium text-sm uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

// ── Yearly Timeline Component ──────────────────────────────────────
function YearlyTimeline() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Years of Transformation
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From humble beginnings to statewide impact, trace our growth and milestones
          </p>
        </div>

        {/* Year selector */}
        <div className="flex justify-center gap-4 mb-12">
          {yearlyHighlights.map((y, i) => (
            <button
              key={y.year}
              onClick={() => setActiveYear(i)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeYear === i 
                  ? "bg-blue-600 text-white shadow-lg scale-110" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {y.year}
            </button>
          ))}
        </div>

        {/* Active year content */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={yearlyHighlights[activeYear].image}
              alt={yearlyHighlights[activeYear].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-5xl font-black">{yearlyHighlights[activeYear].year}</p>
              <p className="text-xl font-semibold">{yearlyHighlights[activeYear].title}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {yearlyHighlights[activeYear].achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-200">
              {/* <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <span>View detailed {yearlyHighlights[activeYear].year} report</span>
                <span>→</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Success Metrics Grid ───────────────────────────────────────────
function SuccessMetricsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Measurable Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Success by the Numbers
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Real results from our programs that demonstrate our impact on mothers and potential mothers and communities across Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successMetrics.map((metric, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              {/* <span className="text-4xl mb-4 block">{metric.icon}</span> */}
              <p className="text-4xl font-black text-blue-600 mb-2">{metric.metric}</p>
              <h3 className="font-bold text-slate-900 mb-3">{metric.category}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{metric.description}</p>
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Real Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Before & After
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            See the tangible transformation in the lives of mothers we've served
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story selector */}
          <div className="space-y-4">
            {impactStories.map((story, i) => (
              <button
                key={i}
                onClick={() => setActiveStory(i)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeStory === i 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className={`text-sm ${activeStory === i ? "text-blue-100" : "text-slate-500"}`}>
                      {story.location} • {story.program}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active story details */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <div className="relative h-65 rounded-2xl overflow-hidden mb-6">
              <Image
                src={impactStories[activeStory].image}
                alt={impactStories[activeStory].name}
                fill
                className="object-contain"
              />
            </div>
            
            <blockquote className="text-xl italic text-slate-700 mb-8 border-l-4 border-blue-500 pl-6">
              "{impactStories[activeStory].quote}"
            </blockquote>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Before</p>
                <p className="text-slate-700 font-medium">{impactStories[activeStory].before}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-100">
                <p className="text-xs text-blue-600 uppercase tracking-wider mb-1">After</p>
                <p className="text-blue-900 font-medium">{impactStories[activeStory].after}</p>
              </div>
            </div>

            <div className="flex gap-4">
              {Object.entries(impactStories[activeStory].stats).map(([key, value]) => (
                <div key={key} className="flex-1 bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-blue-600">{value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{key}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Financial Transparency Section ─────────────────────────────────
// function FinancialTransparency() {
//   return (
//     <section className="py-24 bg-slate-900 text-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
//               Transparency
//             </span>
//             <h2 className="text-3xl md:text-4xl font-black mb-6">
//               Every Naira Accounted For
//             </h2>
//             <p className="text-slate-300 text-lg leading-relaxed mb-8">
//               We maintain the highest standards of financial integrity. 78% of every donation goes directly to program delivery, ensuring maximum impact for the mothers we serve.
//             </p>
            
//             <div className="space-y-4">
//               {financialBreakdown.map((item, i) => (
//                 <div key={i} className="flex items-center gap-4">
//                   <div className="w-32 text-sm font-medium text-slate-300">{item.category}</div>
//                   <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
//                     <div 
//                       className={`h-full ${item.color} rounded-full transition-all duration-1000`}
//                       style={{ width: `${item.percentage}%` }}
//                     />
//                   </div>
//                   <div className="w-12 text-right font-bold">{item.percentage}%</div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 flex gap-4">
//               <Link 
//                 href="/financials" 
//                 className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
//               >
//                 Download Annual Report
//                 <span>↓</span>
//               </Link>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
//               <h3 className="text-xl font-bold mb-6">2024 Financial Highlights</h3>
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center pb-4 border-b border-slate-700">
//                   <span className="text-slate-400">Total Revenue</span>
//                   <span className="text-2xl font-black text-green-400">₦125M</span>
//                 </div>
//                 <div className="flex justify-between items-center pb-4 border-b border-slate-700">
//                   <span className="text-slate-400">Program Expenses</span>
//                   <span className="text-2xl font-black text-white">₦97.5M</span>
//                 </div>
//                 <div className="flex justify-between items-center pb-4 border-b border-slate-700">
//                   <span className="text-slate-400">Mothers Served</span>
//                   <span className="text-2xl font-black text-blue-400">1,847</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-400">Cost per Mother</span>
//                   <span className="text-2xl font-black text-orange-400">₦52,800</span>
//                 </div>
//               </div>
//               <p className="mt-6 text-xs text-slate-500">
//                 *Audited by KPMG Nigeria. Full financial statements available upon request.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ── Geographic Reach Section ───────────────────────────────────────
function GeographicReach() {
  const states = [
    { name: "Rivers",  status: "Established" },
    { name: "Imo", count: 1200, status: "Established" },
    { name: "Lagos", count: 1200, status: "Established" },
    {name: "Ebonyi", status: "Growing" },
    {name: "London", status: "Growing" },
    { name: "Abuja", count: 1200, status: "Established" },
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Geographic Reach
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Across Nigeria
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Reaching mothers and potential mothers in diverse communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((state, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{state.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  state.status === "Established" ? "bg-green-100 text-green-700" :
                  state.status === "Growing" ? "bg-blue-100 text-blue-700" :
                  "bg-amber-100 text-amber-700"
                }`}>
                  {state.status}
                </span>
              </div>
              <div className="flex items-end gap-2">
                {/* <span className="text-3xl font-black text-blue-600">{state.count}</span> */}
                <span className="text-slate-500 mb-1">mothers and potential mothers reached</span>
              </div>
              <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${(state.count / 1200) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ────────────────────────────────────────────────────
function ImpactCTA() {
  return (
    <section className="py-24 bg-linear-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Help Us Write the Next Chapter
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          With your support, we can reach 10,000 more mothers by 2026. Every donation creates a ripple effect of transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="bg-blue-500/30 hover:bg-blue-500/50 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
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
    <div className="w-full bg-white font-sans antialiased">
      {/* ── HERO ── */}
      <section className="relative min-h-125 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/homeimage/heri.png"
            alt="Impact Report 2024"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-slate-900/70" />
        </div>
        
        <div className="relative z-10 h-full min-h-125 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-20">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Measurable Impact
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
              Measuring What Matters: <span className="text-blue-300">Lives Transformed</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              A comprehensive look at how Mothers on Mission International empowered 4,500+ mothers and potential mothers across Nation, creating lasting change for families and communities.
            </p>
          </div>
        </div>
      </section>

      <ImpactStatsSection />
      <YearlyTimeline />
      <SuccessMetricsSection />
      <ImpactStoriesSection />
      <GeographicReach />
      {/* <FinancialTransparency /> */}
      <ImpactCTA />

      {/* ── METHODOLOGY NOTE ── */}
      
    </div>
  );
}