"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const offers = [
  {
    title: "Veterans & Military",
    discount: "10% Off",
    description: "Active duty, veterans & military families. Thank you for your service.",
    pdf: "/offers/Offer - Military.pdf",
    icon: "🎖️",
    badge: "MILITARY",
  },
  {
    title: "New Customers",
    discount: "$40 Off",
    description: "First-time customers — save $40 on any electrical service.",
    pdf: "/offers/Offer - New Customer.pdf",
    icon: "⭐",
    badge: "NEW",
  },
  {
    title: "First Responders, Teachers & Seniors",
    discount: "10% Off",
    description: "Firefighters, EMTs, police, teachers & seniors — your community discount.",
    pdf: "/offers/Offer - Seniors.pdf",
    icon: "🏅",
    badge: "COMMUNITY",
  },
  {
    title: "Welcome Back",
    discount: "$25 Off",
    description: "Returning customers — save $25 on any service. We appreciate your loyalty.",
    pdf: "/offers/Offer - Welcome Back.pdf",
    icon: "🔄",
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
              style={{
                background: "#0a3444",
                border: "2px solid rgba(238,166,3,0.5)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#eea603")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.5)")}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  className="text-xs font-extrabold px-3 py-1 rounded-full tracking-wider"
                  style={{ background: "#eea603", color: "#082933" }}
                >
                  {offer.badge}
                </span>
              </div>

              <div className="text-4xl mb-3 mt-2">{offer.icon}</div>
              <div className="font-extrabold text-3xl mb-2" style={{ color: "#eea603" }}>
                {offer.discount}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">{offer.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#b7b6b6" }}>
                {offer.description}
              </p>
              <span
                className="inline-block font-bold text-sm px-5 py-2 rounded-lg transition-colors"
                style={{ background: "#eea603", color: "#082933" }}
              >
                Click to View Offer
              </span>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "#b7b6b6" }}>
          Must mention offer when booking. One offer per service visit. Call{" "}
          <a href="tel:7204365746" className="hover:underline" style={{ color: "#eea603" }}>
            (720) 436-5746
          </a>{" "}
          to schedule.
        </p>
      </div>
    </section>
  );
}
