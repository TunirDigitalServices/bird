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
                  Formation • Coaching • Solutions IA
                </span>

                <h1
                  className="hero-title mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Renforcez vos équipes. Accélérez la performance. Dirigez avec
                  clarté.
                </h1>

                <p
                  className="hero-description mb-4 mb-lg-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Bird Consulting & Training aide les organisations à
                  développer leurs leaders, renforcer les équipes et optimiser
                  les performances grâce à des formations modernes, du
                  consulting stratégique et des solutions basées sur
                  l’intelligence artificielle.
                </p>

                <div className="cta d-flex gap-2 mb-4 mb-lg-5">
                  <Link href="#" className="btn">
                    Réserver une consultation
                  </Link>

                  <Link href="#" className="btn btn-white-outline">
                    En savoir plus
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
