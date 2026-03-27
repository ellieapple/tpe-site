"use client";

import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#051e26", borderTop: "1px solid rgba(238,166,3,0.2)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/TriPeaksService_CircleLogo.png"
              alt="Tri Peaks Electric Service Inc. — Bailey CO Electrician"
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#b7b6b6" }}>
              Licensed &amp; insured electrical contractor serving Bailey, CO and the 285 Corridor.
              Residential, commercial &amp; outdoor electrical — done right.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#eea603" }}>
              Contact
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#b7b6b6" }}>
              <div>
                <a
                  href="tel:7204365746"
                  className="text-white font-bold text-lg hover:underline transition-colors"
                  style={{ color: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eea603")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  (720) 436-5746
                </a>
              </div>
              <div>
                <a
                  href="mailto:David@TPEService.net"
                  style={{ color: "#b7b6b6" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eea603")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b7b6b6")}
                >
                  David@TPEService.net
                </a>
              </div>
              <div>Bailey, CO — 285 Corridor</div>
              <div style={{ color: "#b7b6b6", opacity: 0.7 }}>CO Electrical License #XXXXX</div>
              <div className="pt-1">
                <a
                  href="tel:7204365746"
                  className="font-bold text-sm px-5 py-2.5 rounded-lg inline-block transition-colors"
                  style={{ background: "#eea603", color: "#082933" }}
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "#eea603" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "#b7b6b6" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#eea603")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#b7b6b6")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(238,166,3,0.2)", color: "#b7b6b6" }}
        >
          <p>
            Licensed &amp; Insured | Bailey, CO |{" "}
            <strong style={{ color: "#b7b6b6" }}>
              &copy; 2026 Tri Peaks Electric Service Inc.
            </strong>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/assets/yellow bolt.PNG"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain opacity-80"
              aria-hidden
            />
            Serving the 285 Corridor &amp; West Metro Denver
          </p>
        </div>
      </div>
    </footer>
  );
}
