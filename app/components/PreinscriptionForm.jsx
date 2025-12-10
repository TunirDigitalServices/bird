"use client";

import { useState } from "react";

export default function PreinscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle"); // hide previous message
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/preinscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // <-- read JSON from response

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      console.error("Server error:", data); // <-- see error details
      setStatus("error");
      // alert("Server error: " + data.error); 
    }
  } catch (err) {
    console.error("Client error:", err);
    setStatus("error");
    // alert("Client error: " + err.message);
  }

  setTimeout(() => setStatus(""), 5000);
};

  return (
    <div className="contact-us preinscription section" id="preinscription">
      <div className="container">
        <div className="row">
          {/* Section gauche : Informations */}
          <div className="col-lg-4 align-self-center">
            <div className="section-heading">
              <h6 className="subtitle">Préinscription</h6>
              <h2>Inscrivez-vous dès maintenant à notre événement</h2>
              <p>
                Remplissez ce formulaire pour réserver votre place. Vous
                recevrez un email de confirmation avec tous les détails.
              </p>
              {/* <div className="special-offer">
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
              </div> */}
            </div>
          </div>

          {/* Section droite : Formulaire */}
          <div className="col-lg-8">
            <div className="contact-us-content">
              <form id="contact-form" onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleChange}
                        // required
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
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
                        disabled={status === "loading"}
                      >
                        {status === "loading"
                          ? "Envoi..."
                          : "Préinscription maintenant"}
                      </button>
                    </fieldset>
                  </div>
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <p className="text-light mt-2">Préinscription réussie !</p>
                )}
                {status === "error" && (
                  <p className="text-danger mt-2">
                    Erreur, veuillez réessayer.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
