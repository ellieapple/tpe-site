"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const photos = [
  {
    src: "/assets/Outside Sauna.png",
    alt: "Outdoor sauna electrical hookup — Tri Peaks Electric Service, Bailey CO",
    caption: "Outdoor Sauna Hookup",
    location: "Bailey, CO",
  },
  {
    src: "/assets/hexigon office.png",
    alt: "Commercial office electrical installation — Tri Peaks Electric Service, Jefferson County CO",
    caption: "Office Electrical",
    location: "Conifer, CO",
  },
  {
    src: "/assets/ChatGPT Image Feb 20, 2026, 12_40_33 PM.png",
    alt: "Tri Peaks Electric Service job site — year-round electrical service Colorado",
    caption: "Year-Round Service",
    location: "285 Corridor, CO",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-20" style={{ background: "#082933" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Real Work. Real Results.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#b7b6b6" }}>
            Every job done right — from mountain cabins to commercial properties.
            See what Tri Peaks Electric delivers across the 285 Corridor.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: "1px solid rgba(238,166,3,0.2)" }}
              onClick={() => setLightbox(i)}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(238,166,3,0.2)")}
            >
              <div className="aspect-[4/3] relative" style={{ background: "#0a3444" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,41,51,0.8), transparent)" }}
                />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(238,166,3,0.9)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#082933">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#082933" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base">{photo.caption}</p>
                <p className="text-sm flex items-center gap-1" style={{ color: "#eea603" }}>
                  📍 {photo.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:7204365746"
            className="border-2 font-bold px-8 py-3 rounded-xl inline-block transition-all duration-200 hover:-translate-y-0.5"
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
            📞 Call to Discuss Your Project
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:opacity-70 transition-opacity z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1200}
              height={900}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "85vh" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-center"
              style={{ background: "rgba(8,41,51,0.9)" }}
            >
              <p className="text-white font-bold">{photos[lightbox].caption}</p>
              <p className="text-sm" style={{ color: "#eea603" }}>📍 {photos[lightbox].location}</p>
            </div>
          </div>
          {/* Prev / Next */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: "rgba(238,166,3,0.8)" }}
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}
          {lightbox < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: "rgba(238,166,3,0.8)" }}
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}
