"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="about__v4 section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="row justify-content-end">
              <div className="col-md-11 mb-4 mb-md-0 ">
                <span
                  className="subtitle text-uppercase mb-3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Qui sommes-nous ?
                </span>

                <h2 className="mb-4 " data-aos="fade-up" data-aos-delay="100">
                  <strong>Bird Training & Consulting : Transformer vos idées, renforcer
                  vos équipes et innover avec sens.</strong>
                </h2>

                <div data-aos="fade-up" data-aos-delay="200" className="justify-text">
                  <p >
                    Bird Training & Consulting est un cabinet de conseil dédié à
                    l’accompagnement des{" "}
                    <strong>entrepreneurs, managers et organisations.</strong>{" "}
                    Nous combinons{" "}
                    <strong>
                      conseil, ateliers pratiques, séminaires et formations
                    </strong>{" "}
                    pour transformer vos idées en projets concrets et orienter
                    durablement votre développement.
                  </p>
                  <p>
                    Avec un focus affirmé sur{" "}
                    <strong>
                      l’innovation et l’intelligence artificielle — toujours
                      centrées sur l’humain{" "}
                    </strong>{" "}
                    — nous vous aidons à comprendre, maîtriser et intégrer ces
                    leviers de manière progressive et adaptée à votre réalité.
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
                  className="d-flex flex-row flex-wrap list-unstyled gap-3 features justify-text"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">
                      Innovation centrée sur l’humain
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">
                      Transformation concrète des idées
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">
                      Approche progressive et adaptée
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">Expertise en IA et innovation</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon rounded-circle text-center">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text">Accompagnement durable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="img-wrap position-relative">
              <Image
                className="img-fluid rounded-4"
                src="/images/about_6-min.jpg"
                alt="About Bird Training & Consulting"
                width={680}
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
                  <p className="fs-5 mb-0 justify-text">
                    Transformer vos idées en projets concrets et accompagner vos
                    équipes à intégrer l’innovation et l’intelligence
                    artificielle, toujours au service de l’humain.
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
