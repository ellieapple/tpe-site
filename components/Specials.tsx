"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function IconInlet() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <circle cx="9" cy="14" r="1" fill="#eea603" />
      <circle cx="15" cy="14" r="1" fill="#eea603" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconEV() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5" />
      <circle cx="15" cy="17" r="2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M17 11h4l2 3" />
    </svg>
  );
}

function IconHotTub() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
      <path d="M5 20v-6a7 7 0 0 1 14 0v6" />
      <path d="M5 20h14" />
      <path d="M7 9c0-1.1.9-2 2-2" />
      <path d="M15 9c0-1.1-.9-2-2-2" />
    </svg>
  );
}

function IconPanel() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <path d="M9 6h6M9 10h6M9 14h4" />
      <circle cx="7" cy="6" r="1" fill="#eea603" />
      <circle cx="7" cy="10" r="1" fill="#eea603" />
      <circle cx="7" cy="14" r="1" fill="#eea603" />
    </svg>
  );
}

function IconUpgrade() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 11 12 6 7 11" />
      <line x1="12" y1="6" x2="12" y2="18" />
      <path d="M5 21h14" />
    </svg>
  );
}

const specials = [
  {
    title: "30A 240V Inlet",
    description: "Generator inlet installation — power your home during outages with a 30-amp 240V connection.",
    pdf: "/specials/Special - 30A 240V Inlet.pdf",
    Icon: IconInlet,
  },
  {
    title: "50A 240V Inlet",
    description: "Heavy-duty generator inlet for larger homes and equipment. 50-amp 240V installation.",
    pdf: "/specials/Special - 50A 240V Inlet.pdf",
    Icon: IconBolt,
  },
  {
    title: "50A 240V EV Charger Outlet",
    description: "Dedicated EV charging outlet — compatible with all major electric vehicle brands.",
    pdf: "/specials/Special - 50A 240V EV Charger Outlet.pdf",
    Icon: IconEV,
  },
  {
    title: "Hot Tub Hookup",
    description: "Complete hot tub and spa electrical installation including dedicated circuit, GFCI & permits.",
    pdf: "/specials/Special - Hot Tub.pdf",
    Icon: IconHotTub,
  },
  {
    title: "Panel Replacement",
    description: "Full electrical panel replacement with updated breakers, wiring and code compliance.",
    pdf: "/specials/Special - Panel Replacement.pdf",
    Icon: IconPanel,
  },
  {
    title: "Service Upgrade",
    description: "Upgrade your electrical service to 200A or 400A for modern power demands and EV readiness.",
    pdf: "/specials/Special - Service Upgrade.pdf",
    Icon: IconUpgrade,
  },
];

export default function Specials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-20" style={{ background: "#0a3444" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
            Transparent Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Transparent Pricing Specials
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#b7b6b6" }}>
            No surprises. Click any card to see our special pricing on the most common electrical projects.
            Know what to expect before you call.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((special, i) => (
            <motion.a
              key={special.title}
              href={special.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "#082933",
                border: "1px solid rgba(238,166,3,0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#eea603")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.3)")}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: "rgba(238,166,3,0.15)" }}
                >
                  <special.Icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{special.title}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#b7b6b6" }}>
                    {special.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                    style={{ color: "#eea603" }}
                  >
                    Click for pricing →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div
          className="mt-12 text-center rounded-2xl p-8"
          style={{ background: "#082933", border: "1px solid rgba(238,166,3,0.3)" }}
        >
          <h3 className="text-white font-bold text-xl mb-2">Don&apos;t see your project?</h3>
          <p className="mb-6" style={{ color: "#b7b6b6" }}>
            We handle all electrical work. Call for a free estimate — no commitment, no pressure.
          </p>
          <a
            href="tel:7204365746"
            className="font-bold text-lg px-10 py-4 rounded-full inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            style={{ background: "#eea603", color: "#082933" }}
          >
            Call (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
