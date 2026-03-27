"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Electrical Repairs & Troubleshooting",
    description:
      "Outlet and switch repairs, breaker issues, circuit diagnostics, and fault-finding. Fast response across Bailey, Conifer & Evergreen.",
    image: "/assets/Yeti Meter.png",
    imageAlt: "Tri Peaks Electric yeti with meter — electrical diagnostics Bailey CO",
  },
  {
    title: "Panel Upgrades & Replacements",
    description:
      "Full panel replacements, 200A service upgrades, subpanel installation. Meet modern electrical demands safely and to code.",
    image: "/assets/Yeti Electrical Panel.png",
    imageAlt: "Tri Peaks Electric yeti with panel — panel upgrade Bailey CO",
  },
  {
    title: "EV Charger Installation",
    description:
      "Level 2 charger installation, 50A 240V dedicated outlets. Compatible with Tesla, Ford, GM, Rivian & all EV brands.",
    image: "/assets/Yeti EV Charger.png",
    imageAlt: "Tri Peaks Electric yeti with EV charger — EV charger installation Colorado",
  },
  {
    title: "Lighting Installation",
    description:
      "Indoor/outdoor lighting, recessed lighting, LED upgrades, security lights, and landscape lighting along the 285 Corridor.",
    image: null,
    icon: "Lighting",
  },
  {
    title: "Backup Power & Generators",
    description:
      "Standby and portable generator installation, transfer switch wiring, whole-home backup power for mountain properties.",
    image: null,
    icon: "Generator",
  },
  {
    title: "Remodels & Additions",
    description:
      "Basement finishing, kitchen remodeling, home additions, and outbuilding electrical. Full wiring from rough-in to finish.",
    image: "/assets/Yeti Electrical Cord.png",
    imageAlt: "Tri Peaks Electric yeti with cord — remodel electrical wiring Colorado",
  },
  {
    title: "General Installations",
    description:
      "Ceiling fans, whole-home surge protection, smoke detectors, hot tub wiring, outdoor outlets, and more.",
    image: null,
    icon: "General",
  },
];

function IconPlaceholder({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    Lighting: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6L12 18l-3.7-3C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
      </svg>
    ),
    Generator: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v3M10.5 13.5l1.5-1.5 1.5 1.5" />
      </svg>
    ),
    General: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34 3.93 3.93M12 20v-2M12 6V4" />
      </svg>
    ),
  };
  return (
    <div
      className="flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
      style={{ background: "rgba(238,166,3,0.12)", border: "1px solid rgba(238,166,3,0.2)" }}
    >
      {icons[type]}
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20" style={{ background: "#082933" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Our Electrical Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#b7b6b6" }}>
            Full-service licensed electrician for homes, businesses, and properties
            throughout the 285 Corridor and West Metro Denver.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
              style={{
                background: "#0a3444",
                border: "1px solid rgba(238,166,3,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.15)")}
            >
              {service.image ? (
                <div className="flex justify-center mb-5">
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    width={120}
                    height={120}
                    className="h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ) : (
                <IconPlaceholder type={service.icon!} />
              )}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#b7b6b6" }}>
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
                style={{ color: "#eea603" }}
              >
                Get a Free Quote →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:7204365746"
            className="font-bold text-lg px-10 py-4 rounded-full inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            style={{ background: "#eea603", color: "#082933" }}
          >
            Call for a Free Estimate: (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
