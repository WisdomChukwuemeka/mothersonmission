// components/Footer.jsx
// ─────────────────────────────────────────────────────────
// FOOTER
// Shown at the bottom of every page.
// Contains: logo, quick links, contact info, social icons,
//           newsletter signup, and copyright line.
// ─────────────────────────────────────────────────────────

"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./data";

export default function Footer() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* ── MAIN FOOTER GRID ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg" style={{ fontFamily: "serif" }}>M</span>
              </div>
              <div>
                <p className="font-black text-white text-sm leading-tight">Mothers of the Nation</p>
                <p className="text-slate-400 text-xs">Foundation</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Developing mothers to become catalysts for change, compassion, and
              national growth. Serving Nigeria since 2009.
            </p>

            {/* Newsletter */}
            {submitted ? (
              <div className="bg-emerald-800/40 border border-emerald-700 text-emerald-300 px-4 py-3 rounded-xl text-sm">
                ✓ Thank you! You're now subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/volunteer" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>12 Unity Road, Wuse Zone 5,<br />Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+2348001234567" className="hover:text-emerald-400 transition-colors">
                  +234 800 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@mnfoundation.org" className="hover:text-emerald-400 transition-colors">
                  hello@mnfoundation.org
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Facebook", icon: "f", href: "#" },
                { label: "Twitter/X", icon: "x", href: "#" },
                { label: "Instagram", icon: "in", href: "#" },
                { label: "LinkedIn", icon: "li", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────── */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Mothers of the Nation Foundation. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
