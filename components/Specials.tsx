"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specials = [
  {
    title: "30A 240V Inlet",
    description: "Generator inlet installation — power your home during outages with a 30-amp 240V connection.",
    pdf: "/specials/Special - 30A 240V Inlet.pdf",
    icon: "🔌",
  },
  {
    title: "50A 240V Inlet",
    description: "Heavy-duty generator inlet for larger homes and equipment. 50-amp 240V installation.",
    pdf: "/specials/Special - 50A 240V Inlet.pdf",
    icon: "⚡",
  },
  {
    title: "50A 240V EV Charger Outlet",
    description: "Dedicated EV charging outlet — compatible with all major electric vehicle brands.",
    pdf: "/specials/Special - 50A 240V EV Charger Outlet.pdf",
    icon: "🚗",
  },
  {
    title: "Hot Tub Hookup",
    description: "Complete hot tub and spa electrical installation including dedicated circuit, GFCI & permits.",
    pdf: "/specials/Special - Hot Tub.pdf",
    icon: "♨️",
  },
  {
    title: "Panel Replacement",
    description: "Full electrical panel replacement with updated breakers, wiring and code compliance.",
    pdf: "/specials/Special - Panel Replacement.pdf",
    icon: "🔧",
  },
  {
    title: "Service Upgrade",
    description: "Upgrade your electrical service to 200A or 400A for modern power demands and EV readiness.",
    pdf: "/specials/Special - Service Upgrade.pdf",
    icon: "⬆️",
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
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors"
                  style={{ background: "rgba(238,166,3,0.15)" }}
                >
                  {special.icon}
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
            className="font-bold text-lg px-10 py-4 rounded-xl inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            style={{ background: "#eea603", color: "#082933" }}
          >
            📞 Call (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
