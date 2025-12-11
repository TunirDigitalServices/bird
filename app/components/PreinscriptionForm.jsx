"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Politiques";

export default function PreinscriptionForm() {
 const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    statut: "",
    domaine: "",
    message: "",
    consentement: false,
  });

  const [status, setStatus] = useState("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (status !== "idle") setStatus("idle");
  };




  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("/api/preinscriptions", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json(); // <-- read JSON from response

  //     if (res.ok) {
  //       setStatus("success");
  //       setFormData({ name: "", email: "", phone: "", message: "" });
  //     } else {
  //       console.error("Server error:", data); // <-- see error details
  //       setStatus("error");
  //       alert("Server error: " + data.error);
  //     }
  //   } catch (err) {
  //     console.error("Client error:", err);
  //     setStatus("error");
  //     alert("Client error: " + err.message);
  //   }

  //   setTimeout(() => setStatus(""), 5000);
  // };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consentement) {
      alert("Vous devez accepter la Politique de confidentialité.");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
      "service_j7j635n",
      "template_hla3wdr",
        {
          prenom: formData.prenom,
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          statut: formData.statut,
          domaine: formData.domaine,
          message: formData.message,
        },
        "F2kUjPKkZVikgZw4-"
      );

      setStatus("success");
      setFormData({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        statut: "",
        domaine: "",
        message: "",
        consentement: false,
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-us preinscription section" id="preinscription">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <div className="section-heading">
              <h6 className="subtitle">Préinscription</h6>
              <h2>Inscrivez-vous dès maintenant à notre événement</h2>
              <p>
                Remplissez ce formulaire pour réserver votre place. Vous
                recevrez un email de confirmation avec tous les détails.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-us-content">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  {/* Prénom */}
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Nom */}
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Téléphone */}
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="tel"
                        name="telephone"
                        placeholder="Numéro de téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>

                  {/* Statut */}
                  <div className="col-lg-6">
                    <fieldset>
                      <select
                        name="statut"
                        value={formData.statut}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Sélectionnez votre statut</option>
                        <option>Particulier</option>
                        <option>Étudiant</option>
                        <option>Entreprise</option>
                        <option>Organisation / Association</option>
                      </select>
                    </fieldset>
                  </div>

                  {/* Domaine (optionnel) */}
                  <div className="col-lg-6">
                    <fieldset>
                      <select
                        name="domaine"
                        value={formData.domaine}
                        onChange={handleChange}
                      >
                        <option value="">Domaine d’activité (optionnel)</option>
                        <option>Santé</option>
                        <option>Éducation</option>
                        <option>IT / Informatique</option>
                        <option>Finance</option>
                        <option>Marketing / Communication</option>
                        <option>Commerce</option>
                        <option>Autre</option>
                      </select>
                    </fieldset>
                  </div>

                  {/* Message / Commentaire (optionnel) */}
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        placeholder="Message / Commentaire (optionnel)"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>

                  {/* Consentement */}
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consentement"
                        name="consentement"
                        checked={formData.consentement}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="consentement">
                        J’ai lu et j’accepte la{" "}
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Politique de confidentialité
                        </button>
                        .
                      </label>
                    </div>
                  </div>

                  {/* Bouton d'envoi */}
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
                          : "S’inscrire maintenant"}
                      </button>
                    </fieldset>
                  </div>

                  {/* Messages de statut */}
                  {status === "success" && (
                    <p className="text-light mt-2">
                      Préinscription réussie ! Nous vous contacterons prochainement.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-danger mt-2">
                      Erreur, veuillez réessayer.
                    </p>
                  )}
                </div>
              </form>

              {/* Politique de confidentialité Modal */}
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h5> POLITIQUE DE CONFIDENTIALITÉ</h5>
                <p>
                  <strong> 1. Finalité du traitement :</strong> Les informations collectées (nom,
                  prénom, email, téléphone, statut et domaine d’activité) sont
                  utilisées uniquement pour : gérer votre inscription au
                  séminaire, vous envoyer les informations pratiques liées à
                  l’événement, vous contacter si nécessaire.
                </p>
                <p>
                   <strong> 2. Durée de conservation : </strong> Vos données seront conservées jusqu’à
                  la fin du séminaire, puis supprimées dans un délai maximal de
                  6 mois après l’événement.
                </p>
                <p>
                  <strong>3. Partage des données : </strong> Vos données ne sont jamais transmises à
                  des tiers, sauf obligation légale prévue par la loi
                  tunisienne.
                </p>
                <p>
                  <strong>4. Base légale : </strong> Le traitement repose sur votre consentement
                  explicite, donné lors de l’inscription.
                </p>
                <p>
                  <strong>5. Vos droits (Loi tunisienne n°2004-63) : </strong> Vous disposez d’un
                  droit : d’accès à vos données, de rectification, d’opposition
                  au traitement, de suppression. Pour exercer vos droits,
                  contactez : contact@bird-tc.com
                </p>
                <p>
                  <strong>6. Sécurité des données : </strong> Vos données sont traitées de manière
                  sécurisée et accessibles uniquement aux personnes autorisées
                  participant à l’organisation du séminaire.
                </p>
                <p> <strong>7. Responsable du traitement : </strong>BIRD Training & Consulting</p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
