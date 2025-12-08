"use client";


import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./template.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load Bootstrap JS only on client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={`antialiased ${mounted ? `${geistSans.variable} ${geistMono.variable}` : ""}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
