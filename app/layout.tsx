import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electrician Bailey CO | Tri Peaks Electric Service | (720) 436-5746",
  description:
    "Licensed electrician in Bailey, CO serving Conifer, Evergreen & West Metro Denver. Panel upgrades, EV chargers, generators & more. Call (720) 436-5746.",
  keywords:
    "electrician Bailey CO, electrician Conifer CO, West Metro Denver electrician, EV charger installation Colorado, panel upgrade Bailey CO, 285 corridor electrician, residential electrician Park County",
  metadataBase: new URL("https://tpeservice.net"),
  openGraph: {
    title: "Electrician Bailey CO | Tri Peaks Electric Service | (720) 436-5746",
    description:
      "Licensed electrician in Bailey, CO serving Conifer, Evergreen & West Metro Denver. Panel upgrades, EV chargers, generators & more. Call (720) 436-5746.",
    url: "https://tpeservice.net",
    siteName: "Tri Peaks Electric Service Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/TPEYeti.png",
        width: 1200,
        height: 630,
        alt: "Tri Peaks Electric Service Inc. — Bailey, CO Electrician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Bailey CO | Tri Peaks Electric Service",
    description:
      "Licensed electrician in Bailey, CO. Panel upgrades, EV chargers, generators & more. Call (720) 436-5746.",
  },
  alternates: {
    canonical: "https://tpeservice.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-tpe-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
