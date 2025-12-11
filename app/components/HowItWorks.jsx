"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="section howitworks__v1" id="how-it-works">
      <div className="container">
        {/* Title */}
        <div className="row mb-5">
          <div className="col-md-6 text-center mx-auto">
            <span className="subtitle text-uppercase mb-3" data-aos="fade-up">
             Comment ça marche?
            </span>
            <h2 data-aos="fade-up" data-aos-delay="100">
              Notre Processus
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="justify-text">
              <strong>
                Un processus clair et structuré pour faire avancer vos projets,
                consolider vos équipes et intégrer l’innovation de manière
                progressive.
              </strong>
            </p>
          </div>
        </div>

        <div className="row g-md-5">
          {/* Step 1 */}
          <div className="col-md-6 col-lg-3">
            <div
              className="step-card text-center h-100 d-flex flex-column position-relative"
              data-aos="fade-up"
            >
              <div data-aos="fade-right" data-aos-delay="500">
                <Image
                  className="arch-line"
                  src="/images/arch-line.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <span className="step-number rounded-circle fw-bold mb-5 mx-auto">
                1
              </span>
              <h3 className="fs-5 mb-4">Analyse & diagnostic</h3>
              <p  className="justify-text"> 
                Nous évaluons vos besoins, vos équipes et vos objectifs pour
                définir la meilleure stratégie et clarifier vos priorités.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="step-card reverse text-center h-100 d-flex flex-column position-relative">
              <div data-aos="fade-right" data-aos-delay="1100">
                <Image
                  className="arch-line reverse"
                  src="/images/arch-line-reverse.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <span className="step-number rounded-circle fw-bold mb-5 mx-auto">
                2
              </span>
              <h3 className="fs-5 mb-4">Plan d’action personnalisé</h3>
              <p  className="justify-text">
                Nous élaborons un programme adapté à votre organisation,
                incluant conseils, ateliers ou séminaires ou formations selon
                vos besoins et objectifs.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="step-card text-center h-100 d-flex flex-column position-relative">
              <div data-aos="fade-right" data-aos-delay="1700">
                <Image
                  className="arch-line"
                  src="/images/arch-line.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <span className="step-number rounded-circle fw-bold mb-5 mx-auto">
                3
              </span>
              <h3 className="fs-5 mb-4">Mise en œuvre</h3>
              <p  className="justify-text">
                Accompagnement concret pour appliquer les recommandations et
                expérimenter les solutions proposées.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="step-card last text-center h-100 d-flex flex-column position-relative">
              <span className="step-number rounded-circle fw-bold mb-5 mx-auto">
                4
              </span>
              <h3 className="fs-5 mb-4">Suivi & amélioration</h3>
              <p  className="justify-text">
                Nous mesurons les progrès, ajustons les actions et vous
                fournissons un suivi pour assurer un impact durable et des
                résultats concrets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
