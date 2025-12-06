"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate success response
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="section contact__v2 bg-light py-5" id="contact">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-5">
          <div className="col-md-8 col-lg-7 mx-auto text-center">
            <span
              className="subtitle text-uppercase mb-3 text-primary"
              data-aos="fade-up"
            >
              Contact
            </span>
            <h2 className="h2 fw-bold mb-3" data-aos="fade-up">
              Contactez Bird Consulting & Training
            </h2>
            <p data-aos="fade-up">
              Vous avez des questions sur nos programmes de formation, nos
              services de consulting ou nos solutions basées sur l’IA ?
              Contactez-nous et nos experts vous guideront pour développer le
              potentiel de votre entreprise.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Info with primary background */}
          <div className="col-md-5">
            <div
              className="h-100 p-4 d-flex flex-column justify-content-center bg-primary text-white rounded shadow-sm"
              data-aos="fade-up"
            >
              <div className="d-flex flex-column gap-4">
                {/* Phone */}
                <div className="d-flex gap-3">
                  <div
                    className="icon bg-white text-primary rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="bi bi-telephone fs-4"></i>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p className="mb-1 fw-bold">Téléphone</p>
                    <p className="mb-0 text-white">+216 94 660 185</p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex gap-3">
                  <div
                    className="icon bg-white text-primary rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="bi bi-envelope fs-4"></i>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p className="mb-1 fw-bold">Email</p>
                    <p className="mb-0 text-white">contact@bird-tc.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="d-flex gap-3">
                  <div
                    className="icon bg-white text-primary rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="bi bi-geo-alt fs-4"></i>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p className="mb-1 fw-bold">Adresse</p>
                    <address className="mb-0 text-white">
                      Bloc A, 3ᵉ étage, bureau A1, Immeuble Henda, 10 rue de
                      l’Île de Rhodes, 1053 Les Berges du Lac 2, Tunis, Tunisie
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div
              className="card shadow-sm border-0 p-4 h-100"
              data-aos="fade-up"
            >
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button className="btn btn-primary fw-semibold" type="submit">
                  Envoyer le message
                </button>

                {status === "success" && (
                  <div className="alert alert-success mt-2">
                    Message envoyé avec succès !
                  </div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger mt-2">
                    L’envoi du message a échoué.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
