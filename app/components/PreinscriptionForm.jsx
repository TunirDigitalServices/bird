"use client";

export default function PreinscriptionForm() {
  return (
    <div className="contact-us preinscription section " id="contact" >
      <div className="container">
        <div className="row">
          {/* Section gauche : Informations */}
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h6 className="subtitle">Préinscription</h6>
              <h2>Inscrivez-vous dès maintenant à notre événement</h2>
              <p>
                Remplissez ce formulaire pour réserver votre place. Vous
                recevrez un email de confirmation avec tous les détails.
              </p>
              <div className="special-offer">
                <span className="offer">
                  off
                  <br />
                  <em>50%</em>
                </span>
                <h6>
                  Valide jusqu'au: <em>12 Déc 2025</em>
                </h6>
                <h4>
                  Offre <em>50%</em>!
                </h4>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Section droite : Formulaire */}
          <div className="col-lg-6">
            <div className="contact-us-content">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  {/* Nom */}
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Votre Nom..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Email */}
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Votre Email..."
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Numéro de téléphone */}
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Votre Numéro de Téléphone..."
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Message / Commentaire */}
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Votre message ou commentaire..."
                      ></textarea>
                    </fieldset>
                  </div>

                  {/* Bouton envoyer */}
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Préinscription maintenant
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
