"use client";

export default function Services() {
  return (
    <section className="section services__v3" id="services">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">
              Our Services
            </span>
            <h2 className="mb-3" data-aos="fade-up" data-aos-delay="50">
              Empowering Your Business with Training, Consulting & AI Solutions
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {/* Service Cards */}
          {[
            { icon: "bi-people-fill", title: "Leadership & Communication", desc: "Développez votre capacité à guider et inspirer votre équipe.", delay: 100 },
            { icon: "bi-lightbulb-fill", title: "Business Strategy & Planning", desc: "Définir des stratégies gagnantes et planifier la croissance de votre entreprise.", delay: 150 },
            { icon: "bi-diagram-3-fill", title: "Market & Competitor Analysis", desc: "Analyse du marché et des concurrents pour prendre des décisions éclairées.", delay: 200 },
            { icon: "bi-pie-chart-fill", title: "Growth & Innovation Strategies", desc: "Concevoir des plans innovants pour stimuler la croissance et la performance.", delay: 250 },
            { icon: "bi-people", title: "Team Management", desc: "Apprenez à organiser et motiver vos collaborateurs.", delay: 300 },
            { icon: "bi-kanban", title: "Project Management", desc: "Gérez vos projets efficacement et atteignez vos objectifs.", delay: 350 },
            { icon: "bi-clock-history", title: "Productivity & Time Management", desc: "Maîtrisez votre temps et optimisez vos performances.", delay: 400 },
            { icon: "bi-search", title: "Internal Audit & Team Diagnostics", desc: "Analyse complète de votre organisation et de vos équipes.", delay: 450 },
            { icon: "bi-gear-fill", title: "Process Optimization", desc: "Structuration et amélioration des processus internes.", delay: 500 },
            { icon: "bi-chat-dots-fill", title: "Conflict Resolution & Communication", desc: "Améliorez le climat social et la collaboration.", delay: 550 },
            { icon: "bi-robot", title: "AI Productivity Tools", desc: "Automatisation d’emails, reporting et organisation.", delay: 600 },
            { icon: "bi-bar-chart-line-fill", title: "Skill Assessment & Feedback", desc: "Évaluation intelligente des compétences et retours automatiques.", delay: 650 },
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
