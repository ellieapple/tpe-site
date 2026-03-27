"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Call or Book Online",
    description:
      "Call (720) 436-5746 or fill out the estimate form. We respond same day — typically within 2 hours during business hours.",
  },
  {
    number: "02",
    title: "Free On-Site Estimate",
    description:
      "David comes to you. We assess the job, walk you through exactly what's needed, and give you a clear upfront price — no surprises.",
  },
  {
    number: "03",
    title: "Professional Service, Done Right",
    description:
      "Licensed, permitted, and to code. We clean up after ourselves and don't leave until the job is complete and you're satisfied.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20" style={{ background: "#0a3444" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#b7b6b6" }}>
            Getting your electrical work done shouldn&apos;t be complicated. Here&apos;s what to expect.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden sm:block absolute top-10 left-[17%] right-[17%] h-px"
            style={{ background: "rgba(238,166,3,0.25)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Number circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-extrabold text-2xl mb-6 relative z-10"
                style={{
                  background: "#eea603",
                  color: "#082933",
                  boxShadow: "0 0 0 6px rgba(238,166,3,0.15)",
                }}
              >
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b7b6b6" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="tel:7204365746"
            className="font-bold text-lg px-10 py-4 rounded-full inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            style={{ background: "#eea603", color: "#082933" }}
          >
            📞 Start with a Free Call: (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
