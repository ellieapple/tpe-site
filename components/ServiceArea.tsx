"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  "Bailey",
  "Conifer",
  "Evergreen",
  "Indian Hills",
  "Pine",
  "Morrison",
  "Fairplay",
  "Jefferson County",
  "Park County",
  "West Metro Denver",
];

export default function ServiceArea() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20" style={{ background: "#0a3444" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
              Where We Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
              Serving the 285 Corridor &amp; Beyond
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#b7b6b6" }}>
              Based in Bailey, CO, we serve the entire 285 Corridor from West Metro Denver to Park County.
              Whether you&apos;re in a mountain community or the foothills, Tri Peaks Electric is your
              local licensed electrician.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {areas.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-sm font-medium px-4 py-2 rounded-full text-white transition-colors"
                  style={{ background: "#082933", border: "1px solid rgba(238,166,3,0.3)" }}
                >
                  📍 {area}
                </motion.span>
              ))}
            </div>

            <a
              href="tel:7204365746"
              className="font-bold text-lg px-8 py-4 rounded-xl inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              style={{ background: "#eea603", color: "#082933" }}
            >
              📞 Call Your Local Electrician
            </a>
          </motion.div>

          {/* Right — mountain graphic */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-sm aspect-square rounded-3xl flex flex-col items-center justify-center p-8"
              style={{ background: "#082933", border: "1px solid rgba(238,166,3,0.3)" }}
            >
              <svg viewBox="0 0 300 200" className="w-full" style={{ opacity: 0.75 }} aria-label="Colorado mountain range service area">
                {[[30, 20], [80, 10], [140, 25], [200, 8], [260, 18], [50, 40], [180, 30]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="1.5" fill="#eea603" opacity="0.8" />
                ))}
                <path
                  d="M0 160 L60 60 L100 100 L160 20 L220 90 L270 50 L300 80 L300 200 L0 200 Z"
                  fill="#082933"
                  stroke="#eea603"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 180 L40 120 L80 150 L130 80 L180 140 L240 100 L300 130 L300 200 L0 200 Z"
                  fill="#0a3444"
                />
                <path d="M160 20 L140 55 L180 55 Z" fill="white" opacity="0.6" />
                <path d="M270 50 L255 75 L285 75 Z" fill="white" opacity="0.4" />
              </svg>
              <p className="font-bold text-lg mt-2" style={{ color: "#eea603" }}>285 Corridor</p>
              <p className="text-sm" style={{ color: "#b7b6b6" }}>Bailey, CO &amp; Surrounding Areas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
