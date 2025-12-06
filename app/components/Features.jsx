"use client";

export default function Features() {
  return (
    <section className="section features__v2" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="d-lg-flex p-5 rounded-4 content"
              data-aos="fade-in"
            >
              <div className="row">
                {/* Left */}
                <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-11">
                      <div className="h-100 d-flex flex-column justify-content-between">
                        <div>
                          <h2 className="mb-4">
                            Pourquoi choisir Bird Training & Consulting ?
                          </h2>
                          <p className="mb-5">
                            Nous aidons les organisations à améliorer leur
                            management grâce à des formations pratiques, un
                            accompagnement ciblé et des solutions IA qui
                            rendent les équipes plus performantes et autonomes.
                          </p>
                        </div>
                        <a
                          className="glightbox btn btn-play d-inline-flex align-items-center gap-2"
                          href="https://www.youtube.com/watch?v=DQx96G4yHd8"
                          data-gallery="video"
                        >
                          <i className="bi bi-play-fill"></i> Voir la
                          présentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-lg-7">
                  <div className="row justify-content-end">
                    <div className="col-lg-11">
                      <div className="row">
                        <div className="col-sm-6" data-aos="fade-up">
                          <div className="icon text-center mb-3">
                            <i className="bi bi-person-check fs-4"></i>
                          </div>
                          <h3 className="fs-6 fw-bold mb-2">
                            Formations pratiques
                          </h3>
                          <p>
                            Des contenus orientés résultats, basés sur des
                            situations réelles.
                          </p>
                        </div>

                        <div
                          className="col-sm-6"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <div className="icon text-center mb-3">
                            <i className="bi bi-graph-up fs-4"></i>
                          </div>
                          <h3 className="fs-6 fw-bold mb-2">
                            Diagnostic & optimisation
                          </h3>
                          <p>
                            Audit, analyse des équipes et recommandations
                            ciblées.
                          </p>
                        </div>

                        <div
                          className="col-sm-6"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <div className="icon text-center mb-3">
                            <i className="bi bi-cpu fs-4"></i>
                          </div>
                          <h3 className="fs-6 fw-bold mb-2">Outils IA intégrés</h3>
                          <p>
                            Automatisation, analyse intelligente et gain de
                            productivité.
                          </p>
                        </div>

                        <div
                          className="col-sm-6"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          <div className="icon text-center mb-3">
                            <i className="bi bi-headset fs-4"></i>
                          </div>
                          <h3 className="fs-6 fw-bold mb-2">
                            Accompagnement sur mesure
                          </h3>
                          <p>
                            Coaching individuel ou d’équipe avec suivi continu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Right */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
