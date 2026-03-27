import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import Specials from "@/components/Specials";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import ServiceArea from "@/components/ServiceArea";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ElectricalContractor"],
      "@id": "https://tpeservice.net/#business",
      name: "Tri Peaks Electric Service Inc.",
      alternateName: "TPE Service",
      description:
        "Licensed & insured electrician in Bailey, CO serving Conifer, Evergreen, West Metro Denver and the 285 Corridor. Specializing in panel upgrades, EV chargers, generators, and outdoor electrical.",
      url: "https://tpeservice.net",
      telephone: "+17204365746",
      email: "David@TPEService.net",
      image: "https://tpeservice.net/assets/TPEYeti.png",
      logo: "https://tpeservice.net/assets/TriPeaksService_CircleLogo.png",
      founder: { "@type": "Person", name: "David Martinez" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bailey",
        addressRegion: "CO",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Bailey" },
        { "@type": "City", name: "Conifer" },
        { "@type": "City", name: "Evergreen" },
        { "@type": "City", name: "Indian Hills" },
        { "@type": "City", name: "Pine" },
        { "@type": "City", name: "Morrison" },
        { "@type": "City", name: "Fairplay" },
        { "@type": "AdministrativeArea", name: "Jefferson County" },
        { "@type": "AdministrativeArea", name: "Park County" },
        { "@type": "City", name: "West Metro Denver" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Repairs & Troubleshooting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panel Upgrades & Replacements" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "EV Charger Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Backup Power & Generators" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodels & Additions" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Installations" } },
        ],
      },
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      sameAs: ["https://tpeservice.net"],
    },
    {
      "@type": "WebSite",
      "@id": "https://tpeservice.net/#website",
      url: "https://tpeservice.net",
      name: "Tri Peaks Electric Service Inc.",
      publisher: { "@id": "https://tpeservice.net/#business" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Offers />
        <Specials />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <HowItWorks />
        <ContactForm />
        <ServiceArea />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
