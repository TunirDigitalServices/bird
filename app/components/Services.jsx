"use client";

export default function Services() {
  return (
    <section className="section services__v3" id="services">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">
              Nos services
            </span>
            <h2 className="mb-3" data-aos="fade-up" data-aos-delay="50">
              Nous proposons des services modulables accessibles aux organisations et au public élargi.
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {/* Service Cards */}
          {[
            { icon: "bi-gear-fill", title: "Conseil", desc: "Structurer vos projets, clarifier vos décisions et orienter vos choix.", delay: 100 },
            { icon: "bi-lightbulb-fill", title: "Ateliers pratiques", desc: "Expérimenter et mettre en pratique concepts et outils.", delay: 150 },
            { icon: "bi-diagram-3-fill", title: "Séminaires", desc: "Prendre du recul et renforcer l’intelligence collective.", delay: 200 },
            { icon: "bi-people-fill", title: "Formations ciblées", desc: "Innovation, IA appliquée, management, communication, finance, gestion des projets et des risques.", delay: 250 },
            { icon: "bi-robot", title: "Intégration progressive de l’innovation et de l’IA", desc: " Comprendre, tester et adopter ces leviers, toujours avec l’humain au centre.", delay: 300 },
            { icon: "bi-mortarboard", title: "Masterclass", desc: "Explorer et approfondir vos compétences", delay: 300 },
     
          ].map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-3">
                <div>
                  <span className="icon mb-3">
                    <i className={`bi ${service.icon} fs-2`}></i>
                  </span>
                  <h3 className="fs-6 mb-2">{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
