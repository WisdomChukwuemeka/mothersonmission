// app/contact/page.jsx
// ─────────────────────────────────────────────────────────
// CONTACT PAGE  (route: /contact)
// A full contact page with:
//  - Contact details (address, phone, email)
//  - A working contact form (frontend-only, no backend needed)
//  - FAQ teaser
// ─────────────────────────────────────────────────────────

"use client"; // Needed because we use useState for the form

import { useState } from "react";
import { Contact, SectionLabel } from "../components/UI";
import { faqs } from "../components/data";
import { FAQItem } from "../components/UI";

export default function ContactPage() {
  // Form state — one object to hold all field values
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Update a single field in the form
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // In a real project you would send `form` to an API here.
    // For now we just show a success message.
    setSubmitted(true);
  }

  return (
    <>
      <Contact
        badge="Contact Us"
        title="We'd love to hear from you."
        subtitle="Whether you want to apply, donate, volunteer, or partner — get in touch and our team will respond within 48 hours."
      />

      {/* ── CONTACT GRID ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-5 gap-12">

          {/* ── LEFT: Contact info ─── (2 cols) ────────── */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <SectionLabel text="Get In Touch" />
              <h2 className="text-2xl font-black text-slate-900 mb-2">Contact information</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our team is based in Abuja with field offices across Nigeria.
              </p>
            </div>

            {/* Info cards */}
            {[
              {
                icon: "📍",
                title: "Head Office",
                lines: ["2 Salvation Close, Off Wamadi, Asonye Street", "Port Harcourt, Rivers State, Nigeria"],
              },
              {
                icon: "📞",
                title: "Phone",
                lines: ["+234 903 328 1949", "Mon – Fri, 8am – 5pm"],
              },
              {
                icon: "✉️",
                title: "Email",
                lines: ["mothersonmissioninternational@gmail.com", "Available 24/7"],
              },
              {
                icon: "🕒",
                title: "Office Hours",
                lines: ["Monday – Friday: 8am – 5pm", "Saturday: 9am – 1pm"],
              },
            ].map((info) => (
              <div key={info.title} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                {/* <span className="text-2xl mt-0.5">{info.icon}</span> */}
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">{info.title}</p>
                  {info.lines.map((line) => (
                    <p key={line} className="text-slate-500 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Contact form ─── (3 cols) ─────────── */}
          <div className="md:col-span-3">
            {submitted ? (
              // Success state
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-emerald-50 border border-emerald-200 rounded-3xl">
                <h3 className="font-black text-2xl text-slate-900 mb-2">Message sent!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you for reaching out. A member of our team will reply within 48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", subject:"", message:"" }); }}
                  className="mt-6 btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              // Form
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-5"
              >
                <h3 className="font-black text-slate-900 text-xl mb-2">Send us a message</h3>

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Amara Okonkwo"
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 ..."
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option>Program Application</option>
                      <option>Donation / Funding</option>
                      <option>Volunteering</option>
                      <option>Corporate Partnership</option>
                      <option>Media Inquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white resize-none"
                  />
                </div>

                <button type="submit" className="bg-blue-950 h-fit p-2 rounded-full w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── MINI FAQ ────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Quick Answers" />
            <h2 className="text-2xl font-black text-slate-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 4).map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
