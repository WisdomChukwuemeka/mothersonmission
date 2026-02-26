// components/UI.jsx
// ─────────────────────────────────────────────────────────
// REUSABLE UI COMPONENTS
// Small building blocks used across multiple pages.
// Import any of these wherever you need them.
// ─────────────────────────────────────────────────────────

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ── PageHero ───────────────────────────────────────────────
// A dark hero banner used at the top of every inner page.
// Props:
//   title   - main heading text
//   subtitle - smaller text beneath
//   badge   - small label above the title (optional)
export function PageHero({ title, subtitle, badge }) {
  return (
    <section className="relative bg-slate-900 overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-10" />
                  <Image
                    src="/homeimage/momone.png"
                    alt="Mothers of the Nation"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                  />
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {badge && (
          <span className="inline-block bg-blue-950 text-white text-2xl font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Contact({ title, subtitle, badge }) {
  return (
    <section className="relative bg-slate-900 overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-10" />
                  <Image
                    src="/homeimage/momthree.png"
                    alt="Mothers of the Nation"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                  />
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {badge && (
          <span className="inline-block bg-blue-950 text-white text-2xl font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

// ── SectionLabel ───────────────────────────────────────────
// The small green pill labels above section headings.
// Props:  text - the label text
export function SectionLabel({ text }) {
  return (
    <span className="inline-block bg-blue-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
      {text}
    </span>
  );
}

// ── AnimatedCounter ────────────────────────────────────────
// Counts up from 0 to a target number when it enters the screen.
// Props:
//   value  - the target number
//   suffix - text after the number e.g. "+" or "yrs"
//   label  - description below the number
export function AnimatedCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Start counting when element scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate the number
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const duration = 2000;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-black text-white">
        {count.toLocaleString()}
        <span className="text-white">{suffix}</span>
      </p>
      <p className="mt-2 text-emerald-100 text-sm font-medium uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

// ── FAQItem ────────────────────────────────────────────────
// An accordion item for the FAQ section.
// Props:
//   q - the question string
//   a - the answer string
export function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        open ? "border-emerald-400 bg-emerald-50/40" : "border-slate-200 bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-800 pr-4">{q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
            open ? "bg-emerald-500 rotate-45" : "bg-slate-300"
          }`}
        >
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}>
        <p className="px-6 text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ── TestimonialCard ────────────────────────────────────────
// Displays a quote card for stories/testimonials.
export function TestimonialCard({ story, compact = false }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Quote mark */}
      <span className="text-5xl text-emerald-200 font-black leading-none mb-2">"</span>

      <p className="text-slate-600 text-sm leading-relaxed italic flex-1 mb-4">
        {compact && story.quote.length > 160
          ? story.quote.slice(0, 160) + "…"
          : story.quote}
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
          {story.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-800 text-sm">{story.name}</p>
          <p className="text-slate-400 text-xs">{story.location} · {story.program}</p>
        </div>
      </div>
    </div>
  );
}

// ── ProgramCard ────────────────────────────────────────────
// Card displayed in the programs grid.
export function ProgramCard({ program }) {
  return (
    <div
      className={`${program.bg} ${program.border} border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col`}
    >
      <span className="text-3xl mb-4">{program.icon}</span>
      <h3 className="font-black text-slate-800 text-xl mb-2">{program.title}</h3>
      <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${program.textColor}`}>
        {program.tagline}
      </p>
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{program.description}</p>
    </div>
  );
}
