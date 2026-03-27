"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function IconMilitary() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  );
}

function IconNew() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconCommunity() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLoyalty() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

const offers = [
  {
    title: "Veterans & Military",
    discount: "10% Off",
    description: "Active duty, veterans & military families. Thank you for your service.",
    pdf: "/offers/Offer - Military.pdf",
    Icon: IconMilitary,
    badge: "MILITARY",
  },
  {
    title: "New Customers",
    discount: "$40 Off",
    description: "First-time customers — save $40 on any electrical service.",
    pdf: "/offers/Offer - New Customer.pdf",
    Icon: IconNew,
    badge: "NEW",
  },
  {
    title: "First Responders, Teachers & Seniors",
    discount: "10% Off",
    description: "Firefighters, EMTs, police, teachers & seniors — your community discount.",
    pdf: "/offers/Offer - Seniors.pdf",
    Icon: IconCommunity,
    badge: "COMMUNITY",
  },
  {
    title: "Welcome Back",
    discount: "$25 Off",
    description: "Returning customers — save $25 on any service. We appreciate your loyalty.",
    pdf: "/offers/Offer - Welcome Back.pdf",
    Icon: IconLoyalty,
    badge: "LOYALTY",
  },
];

export default function Offers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offers" className="py-20" style={{ background: "#082933" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
            Save Money
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Save With Our Special Offers
          </h2>
          <p className="text-lg" style={{ color: "#b7b6b6" }}>
            Click any offer to view &amp; download — mention at time of service. Cannot be combined.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <motion.a
              key={offer.title}
              href={offer.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: "#0a3444", border: "2px solid rgba(238,166,3,0.5)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#eea603")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.5)")}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  className="text-xs font-extrabold px-3 py-1 rounded-full tracking-wider"
                  style={{ background: "#eea603", color: "#082933" }}
                >
                  {offer.badge}
                </span>
              </div>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2"
                style={{ background: "rgba(238,166,3,0.12)", border: "1px solid rgba(238,166,3,0.2)" }}
              >
                <offer.Icon />
              </div>

              <div className="font-extrabold text-3xl mb-2" style={{ color: "#eea603" }}>
                {offer.discount}
              </div>
              <h3 className="text-white font-bold text-base mb-2 leading-tight">{offer.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#b7b6b6" }}>
                {offer.description}
              </p>
              <span
                className="inline-block font-bold text-sm px-5 py-2 rounded-full transition-colors"
                style={{ background: "#eea603", color: "#082933" }}
              >
                View Offer
              </span>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "#b7b6b6" }}>
          Must mention offer when booking. One offer per service visit. Call{" "}
          <a href="tel:7204365746" className="hover:underline font-medium" style={{ color: "#eea603" }}>
            (720) 436-5746
          </a>{" "}
          to schedule.
        </p>
      </div>
    </section>
  );
}
