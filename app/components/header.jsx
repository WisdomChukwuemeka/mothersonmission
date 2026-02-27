"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";
import { navLinks } from "./data";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false);  // has user scrolled?
  const [menuOpen, setMenuOpen] = useState(false);   // mobile menu open/closed

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // ── Detect scroll to change navbar background ─────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile menu when route changes ──────────────────
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50 shadow-md opacity-100">
        <div>
          <header className="relative flex items-center justify-between px-8 py-3 bg-white">
            <Link href="/">
            <div className="flex items-center">
              <div className="mr-1">
                <Image
                  src="/logo/logo.png"
                  alt="MOM Logo"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xl font-bold text-black uppercase">MOM</span>
            </div>
            </Link>
              <nav className="hidden md:flex items-center gap-1">
           {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? " text-orange-700"
                      : scrolled
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-gray-700 hover:text-orange-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

            <div className="hidden md:flex bg-blue-700 rounded-full w-fit h-fit py-1.5">
              <i className="bi bi-search text-white pl-4 px-3"></i>
              <p className="text-white pr-4 text-sm">Explore our resources</p>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#063B73"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="menu-button" width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="menu-button" d="M12.1032 19.2383H10.6582L10.6464 13.7873L7.94443 18.2985H7.26305L4.56104 13.8577V19.2383H3.1043V11.0148H4.36133L7.62724 16.4658L10.8344 11.0148H12.0914L12.1032 19.2383ZM15.8517 17.9578H20.4921V19.2383H14.3245V11.0148H20.3276V12.2953H15.8517V14.4334H19.8225V15.6904H15.8517V17.9578ZM27.9863 11.0148H29.5018V19.2383H28.2448L23.7101 13.6698V19.2383H22.1946V11.0148H23.4516L27.9863 16.5833V11.0148ZM35.2415 19.3558C32.9859 19.3558 31.6349 18.0517 31.6349 15.6552V11.0148H33.1621V15.5964C33.1621 17.2881 33.9257 18.0165 35.2532 18.0165C36.5807 18.0165 37.3326 17.2881 37.3326 15.5964V11.0148H38.8363V15.6552C38.8363 18.0517 37.4853 19.3558 35.2415 19.3558Z" fill="#063B73"></path>
                  <line className="menu-button" x1="40" y1="25.8811" x2="2" y2="25.8811" stroke="#063B73" strokeWidth="0.904762"></line>
                  <line className="menu-button" x1="40" y1="1.45238" x2="2" y2="1.45238" stroke="#063B73" strokeWidth="0.904762"></line>
                  <line className="menu-button" x1="40" y1="29.5002" x2="2" y2="29.5002" stroke="#063B73" strokeWidth="0.904762"></line>
                  <line className="menu-button" x1="40" y1="5.07152" x2="2" y2="5.07153" stroke="#063B73" strokeWidth="0.904762"></line>
                </svg>
              )}
            </button>
          </header>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden pb-4">
            <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-white text-orange-700"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Donate button inside mobile menu */}
          <Link
            href="/donate"
            className="mt-3 bg-blue-600 text-white text-center font-bold px-4 py-3 rounded-xl"
          >
            Donate Now
          </Link>
        </nav>
        </div>
          )}
        </div>
      </div>
    </>
  )
}