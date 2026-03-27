"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Verified Customer",
    location: "285 Corridor, CO",
    stars: 5,
    text: "David and Charles arrived on short notice — after their full work day — to provide an estimate and then fixed the issue after hours. You don't find that kind of dedication often. Couldn't recommend them more.",
    service: "After-Hours Emergency",
  },
  {
    name: "Verified Customer",
    location: "Bailey, CO",
    stars: 5,
    text: "Charles was incredibly knowledgeable and completed our lighting upgrade project ahead of schedule and within budget. Clean work, no surprises — exactly what you want from an electrician.",
    service: "Lighting Upgrade",
  },
  {
    name: "Verified Customer",
    location: "Conifer, CO",
    stars: 5,
    text: "They responded within 30 minutes to repair a severed electrical line. Fast, professional, and got everything back up safely. Tri Peaks is who you call when it matters.",
    service: "Emergency Repair",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#eea603" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20" style={{ background: "#0a3444" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
            What Customers Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stars count={5} />
            <span className="font-bold text-white text-lg">4.9</span>
            <span style={{ color: "#b7b6b6" }} className="text-sm">· Based on 47+ Google Reviews</span>
          </div>
          <a
            href="https://www.google.com/search?q=Tri+Peaks+Electric+Service+Bailey+CO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:underline transition-colors"
            style={{ color: "#eea603" }}
          >
            See all reviews on Google →
          </a>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "#082933",
                border: "1px solid rgba(238,166,3,0.2)",
              }}
            >
              {/* Stars + service */}
              <div className="flex items-center justify-between">
                <Stars count={review.stars} />
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(238,166,3,0.15)", color: "#eea603" }}
                >
                  {review.service}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#d1d5db" }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid rgba(238,166,3,0.15)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: "#eea603", color: "#082933" }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-xs" style={{ color: "#b7b6b6" }}>{review.location}</p>
                </div>
                <div className="ml-auto">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google review">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "#b7b6b6" }}>
          Based on verified customer experiences — David, swap in Google review names/links when ready.
        </p>
      </div>
    </section>
  );
}
