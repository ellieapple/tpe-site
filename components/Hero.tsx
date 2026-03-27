"use client";

import Image from "next/image";
import { motion, type Easing } from "framer-motion";

const ease: Easing = "easeOut";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-24"
      style={{ background: "#082933" }}
    >
      {/* Mountain silhouette background */}
      <div className="absolute inset-0 pointer-events-none select-none" style={{ opacity: 0.07 }}>
        <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full" aria-hidden="true" preserveAspectRatio="none">
          <path
            d="M0 400 L200 150 L380 280 L520 80 L680 220 L820 50 L960 200 L1100 100 L1260 250 L1440 120 L1440 400 Z"
            fill="#eea603"
          />
        </svg>
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(238,166,3,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(238,166,3,0.15)", border: "1px solid rgba(238,166,3,0.4)" }}
            >
              <span className="text-sm font-semibold" style={{ color: "#eea603" }}>
                ⚡ Ranked #1 Electrician in Bailey, CO
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Bailey&apos;s #1 Electrician —{" "}
              <span style={{ color: "#eea603" }}>
                Powering Homes &amp; Businesses Year-Round
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "#b7b6b6" }}
            >
              Licensed &amp; insured electrical services in Bailey, Conifer,
              Evergreen &amp; West Metro Denver. Same-day service available.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="tel:7204365746"
                className="font-bold text-lg px-8 py-4 rounded-xl text-center transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
                style={{ background: "#eea603", color: "#082933" }}
              >
                📞 Call Now: (720) 436-5746
              </a>
              <a
                href="#contact"
                className="border-2 font-bold text-lg px-8 py-4 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "#eea603", color: "#eea603" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#eea603";
                  e.currentTarget.style.color = "#082933";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#eea603";
                }}
              >
                Book a Free Estimate →
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
              style={{ color: "#b7b6b6" }}
            >
              {[
                "Licensed & Insured in Colorado",
                "Residential & Commercial",
                "Same-Day Service Available",
                "285 Corridor Specialist",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span style={{ color: "#eea603" }}>✓</span> {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Yeti mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{ background: "#eea603", opacity: 0.25 }}
              />
              <Image
                src="/assets/TPEYeti.png"
                alt="Tri Peaks Electric Service Yeti mascot — Bailey CO licensed electrician"
                width={480}
                height={480}
                className="relative w-72 sm:w-96 lg:w-[420px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 right-0 py-3" style={{ background: "#eea603" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 font-bold text-sm" style={{ color: "#082933" }}>
            {["⚡ Licensed & Insured", "⚡ #1 in Bailey", "⚡ Residential & Commercial", "⚡ Same-Day Available"].map(
              (t) => <span key={t}>{t}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
