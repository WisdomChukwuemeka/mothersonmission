// components/Navbar.jsx
// ─────────────────────────────────────────────────────────
// NAVBAR
// The top navigation bar shown on every page.
// Features:
//  - Logo on the left
//  - Navigation links in the middle
//  - "Donate" button on the right
//  - Mobile hamburger menu that slides open/closes
//  - Background changes when you scroll down (transparent → white)
// ─────────────────────────────────────────────────────────

"use client"; // Needed because we use useState and scroll events

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";

export default function Navbar() {
  // ── State ────────────────────────────────────────────────
  const [menuOpen, setMenuOpen] = useState(false);   // mobile menu open/closed
  const [scrolled, setScrolled]  = useState(false);  // has user scrolled?

  const pathname = usePathname(); // current URL path e.g. "/about"

  // ── Detect scroll to change navbar background ─────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile menu when route changes ──────────────────
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <></>
    // <header
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     scrolled || menuOpen
    //       ? "bg-white shadow-md shadow-slate-100"
    //       : "bg-transparent"
    //   }`}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16 md:h-20">

    //       {/* ── LOGO ──────────────────────────────────────── */}
    //       <Link href="/" className="flex items-center gap-3 group">
    //         {/* Green circle logo mark */}
    //         <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
    //           <span className="text-white font-black text-lg" style={{ fontFamily: "serif" }}>M</span>
    //         </div>
    //         <div className="hidden sm:block">
    //           <p className={`font-black text-sm leading-tight ${scrolled || menuOpen ? "text-slate-900" : "text-white"}`}>
    //             Mothers of the Nation
    //           </p>
    //           <p className={`text-xs font-medium ${scrolled || menuOpen ? "text-slate-400" : "text-white/60"}`}>
    //             Foundation
    //           </p>
    //         </div>
    //       </Link>

    //       {/* ── DESKTOP NAVIGATION LINKS ──────────────────── */}
    //       <nav className="hidden md:flex items-center gap-1">
    //         {navLinks.map((link) => {
    //           const isActive = pathname === link.href;
    //           return (
    //             <Link
    //               key={link.href}
    //               href={link.href}
    //               className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
    //                 isActive
    //                   ? "bg-emerald-100 text-emerald-700"
    //                   : scrolled
    //                   ? "text-slate-700 hover:bg-slate-100"
    //                   : "text-white/90 hover:bg-white/10"
    //               }`}
    //             >
    //               {link.label}
    //             </Link>
    //           );
    //         })}
    //       </nav>

    //       {/* ── RIGHT SIDE: DONATE BUTTON + HAMBURGER ─────── */}
    //       <div className="flex items-center gap-3">
    //         {/* Donate button — visible on desktop */}
    //         <Link
    //           href="/donate"
    //           className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-200"
    //         >
    //           Donate Now
    //         </Link>

    //         {/* Hamburger button — visible on mobile only */}
    //         <button
    //           onClick={() => setMenuOpen(!menuOpen)}
    //           aria-label="Toggle menu"
    //           className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors ${
    //             scrolled || menuOpen ? "text-slate-900" : "text-white"
    //           }`}
    //         >
    //           {/* Three lines that animate into an X */}
    //           <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
    //           <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
    //           <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* ── MOBILE MENU DROPDOWN ──────────────────────────── */}
    //   <div
    //     className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
    //       menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
    //     }`}
    //   >
    //     <nav className="px-4 py-4 flex flex-col gap-1">
    //       {navLinks.map((link) => {
    //         const isActive = pathname === link.href;
    //         return (
    //           <Link
    //             key={link.href}
    //             href={link.href}
    //             className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
    //               isActive
    //                 ? "bg-emerald-100 text-emerald-700"
    //                 : "text-slate-700 hover:bg-slate-50"
    //             }`}
    //           >
    //             {link.label}
    //           </Link>
    //         );
    //       })}
    //       {/* Donate button inside mobile menu */}
    //       <Link
    //         href="/donate"
    //         className="mt-3 bg-emerald-600 text-white text-center font-bold px-4 py-3 rounded-xl"
    //       >
    //         Donate Now
    //       </Link>
    //     </nav>
    //   </div>
    // </header>
  );
}
