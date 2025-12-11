"use client";
import Image from "next/image";

import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="section EventAPropos">
        <div className="container">
          <div className="row">
            {/* Accordion Section */}
            <div className="col-lg-7 ">
              <div className="accordion" id="accordionExample">
                {/* 5 — Pourquoi participer */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                   className="accordion-button" // removed 'collapsed'
      type="button"
      // removed data-bs-toggle so it can't be collapsed
      aria-expanded="true"
      aria-controls="collapseFive"
      disabled // optional: prevents clicking
                    >
                      Pourquoi participer ?
                    </button>
                  </h2>
                  <div
                     id="collapseFive"
    className="accordion-collapse collapse show" // added 'show' to open by default
    aria-labelledby="headingFive"
    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          {" "}
                          <strong style={{ fontWeight: "600px" }}>
                            Premiers repères :{" "}
                          </strong>
                          obtenez des clés claires pour comprendre l’IA et ses
                          usages, même si vous n’êtes pas expert.
                        </li>
                        <li>
                          <strong style={{ fontWeight: "600px" }}>
                            Exemples concrets :{" "}
                          </strong>{" "}
                          repartez avec des idées et conseils pour intégrer l’IA
                          dans votre quotidien professionnel.
                        </li>
                        <li>
                          <strong style={{ fontWeight: "600px" }}>
                            Découverte et perspectives :{" "}
                          </strong>{" "}
                          Cette rencontre ouvre la voie à des workshops et
                          masterclass plus approfondis proposés par Bird
                          Training & Consulting.
                        </li>
                        <li>
                          {" "}
                          <strong style={{ fontWeight: "600px" }}>
                            Réseautage et partage :{" "}
                          </strong>
                          échangez avec d’autres professionnels et découvrez des
                          pistes pour vos projets.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 6 — Pour qui */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Pour qui ?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Entrepreneurs, dirigeants, managers, formateurs…
                        </li>
                        <li>Tous ceux qui veulent découvrir l’IA</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Text */}
            <div className="col-lg-5 align-self-center right-side-animator">
              <div className="section-heading">
                <h6 className="subTitle">À propos du séminaire</h6>
                <h2>
                  Séminaire Découverte – Pourquoi l’Intelligence Artificielle ?
                </h2>
                <p>
                  Cette session découverte propose une introduction simple et
                  accessible à l’Intelligence Artificielle. Elle vous permettra
                  de : Définir l’IA sans jargon Découvrir son utilité concrète
                  dans le quotidien professionnel Comprendre comment l’IA peut
                  vous faire gagner du temps, stimuler votre créativité et
                  faciliter la prise de décision Explorer des exemples
                  d’applications concrètes de l’IA, adaptées à différents
                  profils
                </p>
                {/* <div className="main-button">
                  <a href="#inscription">S’inscrire</a>
                </div> */}
              </div>

              <div
                className="d-flex align-items-center mt-4 animator"
                style={{ marginLeft: "60px" }}
              >
                <Image
                  src="/images/imen2.jpg" // must be inside /public/images/
                  alt="Imen Regaïeg"
                  width={60}
                  height={60}
                  className="rounded-circle me-3"
                  style={{ objectFit: "cover" }}
                />

                <div>
                  <p className="m-0" style={{ fontSize: "14px", opacity: 0.8 }}>
                    Animé par
                  </p>
                  <h6 className="m-0" style={{ fontWeight: 600 }}>
                    Imen Regaïeg
                  </h6>
                  <p className="m-0" style={{ fontSize: "14px", opacity: 0.8 }}>
                    Directrice bancaire & Formatrice en finance, management et
                    IA
                  </p>
                </div>
              </div>

              {/* Organisé par */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="events-footer d-flex flex-wrap justify-content-center align-items-center text-center text-md-center text-start"
        style={{
          marginTop: "60px",
          backgroundColor: "#CBB88C",
          width: "100%",
          marginLeft: "60px",
          padding: "15px",
          gap: "30px",
        }}
      >
        <span className="text-white flex-grow-1 flex-md-grow-0">
          Organisé par : <strong>BIRD TRAINING & CONSULTING</strong>
        </span>
        <span className="text-white flex-grow-1 flex-md-grow-0">
          Où : <strong>Le Corail Suites Hotel – Berges du Lac 2</strong>
        </span>
        <span className="text-white flex-grow-1 flex-md-grow-0">
          Quand : <strong>19 Décembre 2025</strong>
        </span>
        <span className="text-white flex-grow-1 flex-md-grow-0">
          Heure : <strong>15h</strong>
        </span>
      </div>
    </>
  );
}
