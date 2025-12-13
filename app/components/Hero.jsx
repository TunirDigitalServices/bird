"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero__v6 section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-lg-11">
                <span
                  className="hero-subtitle text-uppercase"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                Accompagnement humain et Innovation
                </span>

                <h1
                  className="hero-title mb-3  "
                 
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Bird Training & Consulting — Là où l’humain et l’innovation
                  avancent ensemble.
                </h1>

                <p
                  className="hero-description mb-4 mb-lg-5 justify-text"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Accompagner vos projets, développer vos équipes et intégrer
                  progressivement l’innovation et l’intelligence artificielle,
                  toujours au service de l’humain.
                </p>

                <div className="cta d-flex gap-2 mb-4 mb-lg-5">
                  <Link href="#evennement" className="btn">
                    Événements
                  </Link>

                  <Link href="#contact" className="btn btn-white-outline">
                    Contactez-nous
                    <svg
                      className="lucide lucide-arrow-up-right ms-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>

                {/* Logos section can be added later if needed */}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-img position-relative">
              <Image
                className="img-card img-fluid"
                src="/images/birdCard.jpg"
                alt="Image illustrant nos services"
                width={500}
                height={400}
                data-aos="fade-down"
                data-aos-delay="600"
              />

              <Image
                className="img-main img-fluid rounded-4"
                src="/images/strategies.webp"
                alt="Image Hero"
                width={600}
                height={500}
                data-aos="fade-in"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
