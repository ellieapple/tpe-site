"use client";

export default function CTABanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #082933 0%, #0a3d52 50%, #082933 100%)" }}
    >
      {/* Gold glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#eea603", opacity: 0.08 }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#eea603", opacity: 0.08 }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
          Get Started Today
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#b7b6b6" }}>
          Call or book online today. We serve Bailey, Conifer, Evergreen, and the entire 285 Corridor.
          Fast response — licensed &amp; insured.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <a
            href="tel:7204365746"
            className="font-extrabold text-xl px-10 py-5 rounded-full transition-all duration-200 shadow-2xl hover:-translate-y-1"
            style={{ background: "#eea603", color: "#082933" }}
          >
            Call (720) 436-5746
          </a>
          <a
            href="#contact"
            className="border-2 font-extrabold text-xl px-10 py-5 rounded-full transition-all duration-200 hover:-translate-y-1"
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
            Book Free Estimate →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#b7b6b6" }}>
          {["Free Estimates", "Licensed & Insured", "Same-Day Available", "No Surprise Pricing"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span style={{ color: "#eea603" }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
