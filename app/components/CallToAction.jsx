"use client";

import { useEffect } from "react";

export default function CallToAction() {
  useEffect(() => {
    // Keep this for AOS animations if needed
  }, []);

  return (
    <div
      className="section fun-facts text-center"
      style={{ marginTop: "100px", padding: "80px 20px" }}
    >
      <div className="container">
        <h1
          className="mb-0 text-light"
          data-aos="fade-up"
          data-aos-delay="0"
          style={{ fontWeight: 600, lineHeight: 1.3 }}
        >
          Faites avancer vos projets avec l’humain et l’innovation comme moteurs.
        </h1>
      </div>
    </div>
  );
}
