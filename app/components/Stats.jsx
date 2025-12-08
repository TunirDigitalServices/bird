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
                {/* Happy Students */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="500"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Happy Students</p>
                  </div>
                </div>

                {/* Course Hours */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="900"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Course Hours</p>
                  </div>
                </div>

                {/* Companies Accompanied */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="75"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Companies Accompanied</p>
                  </div>
                </div>

                {/* Years Experience */}
                <div className="col-lg-3 col-md-6">
                  <div className="counter end">
                    <h2
                      className="timer count-title count-number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-duration="2"
                    >
                      0
                    </h2>
                    <p className="count-text">Years Experience</p>
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
