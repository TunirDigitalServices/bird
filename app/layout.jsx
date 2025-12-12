import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ClientBootstrap from "./components/ClientBootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./template.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title:
    "Bird Training & Consulting — Là où l’humain et l’innovation avancent ensemble.",
  description:
    "Accompagner vos projets, développer vos équipes et intégrer progressivement l’innovation et l’intelligence artificielle, toujours au service de l’humain.",
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
        {/* Client-only wrapper */}
        {/* <ClientBootstrap> */}
        <Navbar />
        {children}
        <Footer />
        {/* </ClientBootstrap> */}
      </body>
    </html>
  );
}
