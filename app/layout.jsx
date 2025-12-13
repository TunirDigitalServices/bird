import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ClientBootstrap from "./components/ClientBootstrap";
import Script from "next/script";


import "bootstrap/dist/css/bootstrap.min.css";
import "./template.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  metadataBase: new URL("https://www.bird-tc.com"),

  title:
    "Bird Training & Consulting — Là où l’humain et l’innovation avancent ensemble.",
  description:
    "Accompagner vos projets, développer vos équipes et intégrer progressivement l’innovation et l’intelligence artificielle, toujours au service de l’humain.",

  keywords: [
    "Bird Training",
    "Bird Consulting",
    "Formation IA",
    "Innovation",
    "Conseil entreprise",
    "Coaching professionnel",
    "Intelligence artificielle Tunisie",
    "Transformation digitale",
  ],

  // Canonical URL (VERY important)
  alternates: {
    canonical: "/",
  },

  // Robots for SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },

  // Favicons
  icons: {
    icon: "/bird.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
       

        <Navbar />
        {children}
        <Footer />
   
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
