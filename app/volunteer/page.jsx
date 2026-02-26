// app/volunteer/page.jsx
// ─────────────────────────────────────────────────────────
// VOLUNTEER PAGE  (route: /volunteer)
// Explains volunteer roles and shows a sign-up form.
// ─────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import { PageHero, SectionLabel } from "../components/UI";

const roles = [
  { icon: "📖", title: "Literacy Facilitator",   desc: "Teach reading, writing, and numeracy to adult learners." },
  { icon: "💼", title: "Business Mentor",         desc: "Guide program graduates as they launch or grow their businesses." },
  { icon: "🏥", title: "Health Educator",          desc: "Share maternal & child health knowledge in communities." },
  { icon: "📸", title: "Media & Comms",            desc: "Document stories, run social media, or design materials." },
  { icon: "⚖️", title: "Legal Aid Volunteer",      desc: "Help mothers understand their rights and navigate legal issues." },
  { icon: "💻", title: "Digital Skills Trainer",   desc: "Teach mothers to use smartphones, the internet, and apps." },
];

export default function VolunteerPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", role:"", availability:"", bio:"" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <>
      

      {/* ── VOLUNTEER ROLES ─────────────────────────────── */}
      <section className="pt-20  bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-0">
            <SectionLabel text="How You Can Help" />
            <h2 className="text-3xl font-black text-slate-900 mb-3">Become a Volunteer</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Whether you can spare two hours a week or two months there's a role for you.
            </p>
          </div>
       
        </div>
      </section>

      {/* ── VOLUNTEER FORM ──────────────────────────────── */}
      <section className="py-0 bg-white pb-20">
        <div className="max-w-2xl mx-auto px-6">

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center">
              <span className="text-5xl">🙌</span>
              <h3 className="font-black text-xl text-slate-900 mt-4 mb-2">Application received!</h3>
              <p className="text-slate-500">
                Thank you, {form.name || "friend"}! Our volunteer coordinator will contact you within 3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 ..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Role *</label>
                  <select name="role" value={form.role} onChange={handleChange} required
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">Choose a role</option>
                    {roles.map((r) => <option key={r.title}>{r.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Availability *</label>
                <select name="availability" value={form.availability} onChange={handleChange} required
                  className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Select availability</option>
                  <option>Weekdays (daytime)</option>
                  <option>Weekdays (evenings)</option>
                  <option>Weekends only</option>
                  <option>Flexible</option>
                  <option>Remote / Online only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Tell us about yourself *
                </label>
                <textarea name="bio" value={form.bio} onChange={handleChange} required rows={4}
                  placeholder="Your background, skills, and why you want to volunteer..."
                  className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <button type="submit" className="bg-blue-950 h-fit p-2 w-full rounded-full">Submit Application →</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
