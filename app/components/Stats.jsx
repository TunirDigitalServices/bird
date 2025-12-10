"use client";

import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    import("@srexi/purecounterjs").then((module) => {
      new module.default();
    });
  }, []);

  return (
    <div className="section fun-facts ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="row ">

                {/* Professionnels formés */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="1200"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Professionnels formés</p>
                  </div>
                </div>

                {/* Formations réalisées */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="2500"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Formations réalisées</p>
                  </div>
                </div>

                {/* Entreprises accompagnées */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="85"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Entreprises accompagnées</p>
                  </div>
                </div>

                {/* Années d’expertise */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter end">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="12"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Années d’expertise</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
