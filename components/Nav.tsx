"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}
        style={{ background: "#082933" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/assets/TPEYeti.png"
                alt="Tri Peaks Electric Service — Bailey CO"
                width={44}
                height={44}
                className="h-11 w-auto"
                priority
              />
              <span className="hidden sm:block font-bold text-sm leading-tight" style={{ color: "#b7b6b6" }}>
                TRI PEAKS<br />
                <span style={{ color: "#eea603" }}>ELECTRIC SERVICE</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-medium text-sm tracking-wide transition-colors cursor-pointer"
                  style={{ color: "#b7b6b6" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eea603")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b7b6b6")}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:7204365746"
                className="font-bold px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base transition-all duration-200 shadow-lg whitespace-nowrap hover:-translate-y-0.5"
                style={{ background: "#eea603", color: "#082933" }}
              >
                (720) 436-5746
              </a>

              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div
              className="lg:hidden border-t py-2"
              style={{ background: "#0a3444", borderColor: "rgba(238,166,3,0.25)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-4 py-3 font-medium transition-colors cursor-pointer"
                  style={{ color: "#b7b6b6" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eea603")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b7b6b6")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile bottom call bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden py-3 px-4 flex items-center justify-center gap-4 shadow-2xl"
        style={{ background: "#eea603" }}
      >
        <a
          href="tel:7204365746"
          className="flex items-center gap-2 font-extrabold text-base"
          style={{ color: "#082933" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call (720) 436-5746
        </a>
        <span style={{ color: "#082933", opacity: 0.4 }}>|</span>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
          className="font-bold text-sm underline underline-offset-2 cursor-pointer"
          style={{ color: "#082933" }}
        >
          Free Estimate
        </a>
      </div>
    </>
  );
}
