const items = [
  { icon: "⚡", label: "Licensed & Insured" },
  { icon: "⭐", label: "#1 in Bailey, CO" },
  { icon: "🏠", label: "Residential & Commercial" },
  { icon: "📅", label: "Same-Day Available" },
  { icon: "🏔️", label: "285 Corridor Specialist" },
];

export default function TrustBar() {
  return (
    <div className="w-full py-6" style={{ background: "#0a3444", borderTop: "1px solid rgba(238,166,3,0.15)", borderBottom: "1px solid rgba(238,166,3,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(238,166,3,0.18)" }}
              >
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-white whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
