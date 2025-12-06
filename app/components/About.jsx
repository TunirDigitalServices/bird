"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="about__v4 section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="row justify-content-end">
              <div className="col-md-11 mb-4 mb-md-0">
                <span
                  className="subtitle text-uppercase mb-3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Qui sommes-nous ?
                </span>

                <h2 className="mb-4" data-aos="fade-up" data-aos-delay="100">
                  Bird Training & Consulting : Développer les leaders,
                  renforcer les équipes et améliorer la performance
                </h2>

                <div data-aos="fade-up" data-aos-delay="200">
                  <p>
                    Bird Training & Consulting est un cabinet spécialisé dans
                    la formation, le coaching et l’accompagnement en management.
                    Nous aidons les entreprises à renforcer leurs équipes,
                    développer leurs leaders et installer une culture de
                    performance durable.
                  </p>
                  <p>
                    Grâce à une approche moderne, humaine et axée sur les
                    résultats, nous combinons expertise managériale et outils
                    d’intelligence artificielle pour fournir des solutions
                    rapides, efficaces et mesurables.
                  </p>
                </div>

                <h4
                  className="small fw-bold mt-4 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Nos valeurs & notre vision
                </h4>

                <ul
                  className="d-flex flex-row flex-wrap list-unstyled gap-3 features"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">Excellence & Leadership</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">Approche humaine & positive</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">
                      Solutions intelligentes basées sur l’IA
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">Résultats mesurables</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">Collaboration & transparence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="img-wrap position-relative">
              <Image
                className="img-fluid rounded-4"
                src="/images/about_2-min.jpg"
                alt="FreeBootstrap.net image placeholder"
                width={600}
                height={400}
                data-aos="fade-up"
                data-aos-delay="0"
              />

              <div
                className="mission-statement p-4 rounded-4 d-flex gap-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="mission-icon text-center rounded-circle">
                  <i className="bi bi-lightbulb fs-4"></i>
                </div>
                <div>
                  <h3 className="text-uppercase">Notre mission</h3>
                  <p className="fs-5 mb-0">
                    Accompagner les organisations vers un niveau supérieur de
                    performance grâce à des formations pratiques, un coaching
                    personnalisé et des outils intelligents basés sur l’IA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
