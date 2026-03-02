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
    name: "Nnenna Ogbonna",
    location: "Port Harcourt, Rivers State",
    // program: "Leadership & Personal Development",
    before: "Struggling with self confidence and direction",
    after: "Now serving as leader",
    quote: "This organization didn't just teach me skills, it helped me discover my purpose. I went from hiding in the background to standing before my community with confidence.",
    image: "/testimony/nnenaone.png",
    stats: { income: "+150%", confidence: "Transformed", network: "200+ women" }
  },
  {
  name: "Lilian Anyanwu",
  location: "Port Harcourt, Rivers State",
//   program: "Women Empowerment & Financial Development",
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
  // program: "Spiritual & Personal Development",
  before: "Lacked direction, confidence, and clear educational and spiritual foundation",
  after: "Grew spiritually, academically, and professionally with renewed purpose",
  quote: "God transformed my life through this commission. From feeling like a nobody without direction, I have grown in faith, education, and confidence. Today I stand secure in my identity and purpose, all by His grace.",
  image: "/ceo/chinasaone.png",
  stats: { growth: "Spiritual & Academic", identity: "Renewed", confidence: "Transformed" }
},
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
      <p className="text-3xl lg:text-5xl font-black text-white tracking-tight">
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
    <section className="py-12 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
    {/* Header */}
    <div className="text-center mb-10 md:mb-16">
      <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
        Real Stories
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
        Before & After
      </h2>
      <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base px-4">
        See the tangible transformation in the lives of mothers we've served
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
      {/* Story selector */}
      <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
        {impactStories.map((story, i) => (
          <button
            key={i}
            onClick={() => setActiveStory(i)}
            className={`w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 ${
              activeStory === i 
                ? "bg-blue-600 text-white shadow-lg" 
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
                <Image 
                  src={story.image} 
                  alt={story.name} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 48px, 64px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-base md:text-lg truncate">{story.name}</h3>
                <p className={`text-xs md:text-sm truncate ${
                  activeStory === i ? "text-blue-100" : "text-slate-500"
                }`}>
                  {story.location} • {story.program}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Active story details */}
      <div className="bg-slate-50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 order-1 lg:order-2">
        {/* Image */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6">
          <Image
            src={impactStories[activeStory].image}
            alt={impactStories[activeStory].name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        
        {/* Quote */}
        <blockquote className="text-base md:text-lg lg:text-xl italic text-slate-700 mb-4 md:mb-6 border-l-4 border-blue-500 pl-4 md:pl-6">
          "{impactStories[activeStory].quote}"
        </blockquote>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Before</p>
            <p className="text-slate-700 font-medium text-sm md:text-base">
              {impactStories[activeStory].before}
            </p>
          </div>
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-blue-100">
            <p className="text-xs text-blue-600 uppercase tracking-wider mb-1">After</p>
            <p className="text-blue-900 font-medium text-sm md:text-base">
              {impactStories[activeStory].after}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {Object.entries(impactStories[activeStory].stats).map(([key, value]) => (
            <div key={key} className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 text-center">
              <p className="text-lg md:text-2xl font-black text-blue-600 truncate">{value}</p>
              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider truncate">
                {key}
              </p>
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


function GallerySection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Moments & Activities
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Capturing the transformative journey of mothers and communities across Nigeria
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <p className="text-xs font-bold text-slate-800">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                {/* View Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Activity Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[2px] bg-blue-600 rounded-full" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {item.activity}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{item.location}</span>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-700 font-bold px-8 py-4 rounded-full transition-all duration-300 group">
            <span>View All Activities</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

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
      <GallerySection />
      {/* <FinancialTransparency /> */}
      <ImpactCTA />

      {/* ── METHODOLOGY NOTE ── */}
      
    </div>
  );
}