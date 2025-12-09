"use client";

export default function CeQueVousGagnez() {
  return (
    <div className="contact-us section  cequevousgagnez" id="benefits" >
      <div className="container">
        <div className="row">
          {/* Section gauche : Informations */}
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h6 className="subtitle">Ce que vous gagnez</h6>
              <h2>Avec Bird, vous bénéficiez de :</h2>
              <p>
                Grâce à notre accompagnement, vos projets avancent concrètement et vos équipes deviennent autonomes tout en intégrant progressivement l’innovation et l’IA.
              </p>
              {/* <div className="special-offer">
                <span className="offer">
                  gains
                  <br />
                  <em>100%</em>
                </span>
                <h6>
                  Avantages concrets pour vous et vos équipes
                </h6>
                <h4>
                  Performance <em>optimisée</em>!
                </h4>
              </div> */}
            </div>
          </div>

          {/* Section droite : Liste des gains */}
          <div className="col-lg-6">
            <div className="contact-us-content">
              <ul className="list-unstyled text-light">
                <li>✔ Clarté sur vos projets et priorités</li>
                <li>✔ Équipes renforcées et autonomes</li>
                <li>✔ Décisions plus éclairées grâce aux outils intelligents</li>
                <li>✔ Intégration progressive de l’innovation et de l’IA</li>
                <li>✔ Projets qui avancent concrètement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
