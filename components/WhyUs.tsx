"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trustPoints = [
  {
    title: "Licensed & Insured in Colorado",
    description:
      "Fully licensed electrical contractor. All work performed to code with proper permitting when required.",
  },
  {
    title: "Ranked #1 Electrician in Bailey",
    description:
      "Top-ranked on Google for Bailey, CO. Trusted by homeowners and businesses across Park & Jefferson County.",
  },
  {
    title: "Residential & Commercial",
    description:
      "Whether it's a mountain cabin or a commercial office, we handle electrical for all property types.",
  },
  {
    title: "Year-Round Outdoor Electrical Solutions",
    description:
      "Saunas, hot tubs, outdoor living, generators — we specialize in the unique electrical needs of Colorado mountain properties.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20" style={{ background: "#0a3444" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — trust points */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
              Why Tri Peaks
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-8">
              Why Choose Tri Peaks Electric?
            </h2>

            <div className="space-y-6">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(238,166,3,0.2)" }}
                    >
                      <Image
                        src="/assets/yellow bolt.PNG"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{point.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#b7b6b6" }}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Yeti + pull quote */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <Image
              src="/assets/TPEYetii.png"
              alt="Tri Peaks Electric Yeti mascot — Bailey CO licensed electrician"
              width={320}
              height={380}
              className="w-64 sm:w-72 h-auto drop-shadow-2xl mb-8"
              loading="lazy"
            />
            <blockquote
              className="rounded-xl p-6 text-left w-full max-w-sm"
              style={{
                background: "#082933",
                borderLeft: "4px solid #eea603",
              }}
            >
              <p className="font-extrabold text-xl mb-2" style={{ color: "#eea603" }}>
                &ldquo;Powering Projects — Even in Winter&rdquo;
              </p>
              <footer className="text-sm" style={{ color: "#b7b6b6" }}>
                — David Martinez, Owner &amp; Master Electrician
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
