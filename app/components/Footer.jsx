"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer pt-5 pb-5 bg-primary text-white">
      <div className="container">
        {/* Logo */}
        <div className="d-flex justify-content-start mb-4">
          <Image
            src="/images/Logotc-new.png"
            alt="Bird Consulting & Training"
            width={40}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

       

        {/* Footer Links */}
        <div className="row justify-content-between mb-5 g-xl-5">
          {/* À propos */}
          <div className="col-md-3 mb-5 mb-lg-0">
            <h3 className="mb-3 text-white">À propos</h3>
            <p className="mb-4 text-light">
              Bird Consulting & Training aide les entreprises à se développer grâce à des formations sur mesure, du consulting et des solutions basées sur l'IA.
            </p>
          </div>

          {/* Entreprise */}
          <div className="col-md-3 mb-5 mb-lg-0">
            <h3 className="mb-3 text-white">Entreprise</h3>
            <ul className="list-unstyled">
              <li><a href="page-about.html" className="text-light text-decoration-none">Leadership</a></li>
              <li><a href="page-careers.html" className="text-light text-decoration-none">Carrières</a></li>
              <li><a href="page-case-studies.html" className="text-light text-decoration-none">Études de cas</a></li>
              <li><a href="page-terms-conditions.html" className="text-light text-decoration-none">Conditions générales</a></li>
              <li><a href="page-privacy-policy.html" className="text-light text-decoration-none">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-5 mb-lg-0">
            <h3 className="mb-3 text-white">Contact</h3>
            <p className="d-flex mb-3 text-light align-items-start">
              <i className="bi bi-geo-alt-fill me-3 text-white"></i>
              <span>Bloc A, 3ᵉ étage, bureau A1, Immeuble Henda, 10 rue de l’Île de Rhodes, 1053 Les Berges du Lac 2, Tunis, Tunisie</span>
            </p>
            <a className="d-flex mb-3 text-light text-decoration-none" href="mailto:info@birdconsulting.com">
              <i className="bi bi-envelope-fill me-3 text-white"></i>
              <span>contact@bird-tc.com</span>
            </a>
            <a className="d-flex mb-3 text-light text-decoration-none" href="tel://+21612345678">
              <i className="bi bi-telephone-fill me-3 text-white"></i>
              <span>+216 94 660 185</span>
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-3 mb-5 mb-lg-0">
            <h3 className="mb-3 text-white">Réseaux sociaux</h3>
            <a className="d-flex mb-3 text-white text-decoration-none" href="https://www.facebook.com/birdtrainingandconsulting" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook me-3 text-white fs-5"></i><span>Facebook</span>
            </a>
            <a className="d-flex mb-3 text-white text-decoration-none" href="https://www.instagram.com/birdtrainingandconsulting/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram me-3 text-white fs-5"></i><span>Instagram</span>
            </a>
            <a className="d-flex mb-3 text-white text-decoration-none" href="https://www.linkedin.com/company/bird-training-consulting" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin me-3 text-white fs-5"></i><span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="row credits pt-3 border-top border-light">
          <div className="col-xl-8 text-center text-xl-start mb-3 mb-xl-0 text-light">
            &copy; {new Date().getFullYear()} Bird Consulting & Training. All rights reserved. Designed with
            <i className="bi bi-heart-fill text-danger mx-1"></i> by
            <a href="https://tunirdigital.com" className="text-light ms-1 text-decoration-none">Tunir Digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
