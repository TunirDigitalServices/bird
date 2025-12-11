"use client";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      img: "/images/person-sq-2-min.jpg",
      name: "Ahmed Ben Ali",
      role: "Manager",
      text: "Les formations de Bird Consulting ont transformé la manière dont mon équipe gère ses projets. Les exercices pratiques et les outils IA sont vraiment efficaces !",
    },
    {
      img: "/images/person-sq-1-min.jpg",
      name: "Sofia Mahjoub",
      role: "Entrepreneuse",
      text: "Le consulting stratégique m’a permis d’optimiser mes processus internes. Les recommandations sont claires et facilement applicables.",
    },
    {
      img: "/images/person-sq-5-min.jpg",
      name: "Karim Haddad",
      role: "Consultant",
      text: "Les solutions IA intégrées dans les formations nous ont aidés à suivre la progression des équipes et à gagner en productivité.",
    },
    {
      img: "/images/person-sq-3-min.jpg",
      name: "Leila Trabelsi",
      role: "Chef d’équipe",
      text: "Grâce aux formations sur le leadership et la communication, j’ai pu motiver mon équipe et améliorer notre collaboration interne.",
    },
    {
      img: "/images/person-sq-7-min.jpg",
      name: "Youssef Ben Youssef",
      role: "Entrepreneur",
      text: "L’accompagnement personnalisé de Bird Consulting m’a aidé à structurer ma stratégie de croissance et à atteindre mes objectifs plus rapidement.",
    },
    {
      img: "/images/person-sq-8-min.jpg",
      name: "Amina Fakhfakh",
      role: "Directrice de projet",
      text: "Les sessions de formation sur la gestion de projet et la prise de décision ont boosté la performance de mon équipe.",
    },
  ];

  return (
    <section className="section testimonials__v2 justify-text" id="testimonials">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <span
              className="subtitle text-uppercase mb-3"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Témoignages
            </span>
            <h2 className="mb-3  " data-aos="fade-up" data-aos-delay="100">
              Ce que nos clients disent
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className=" justify-text">
              Des histoires réelles de succès et de satisfaction provenant de
              notre communauté de clients et partenaires.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4" data-masonry='{"percentPosition": true }'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Add h-100 here to stretch all cards to full height */}
              <div className="testimonial rounded-4 p-4 h-100 d-flex flex-column justify-content-between">
                <blockquote className="mb-3 flex-grow-1">
                  &ldquo; {testimonial.text} &rdquo;
                </blockquote>
                <div className="testimonial-author d-flex gap-3 align-items-center mt-3">
                  <div className="author-img">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="lh-base">
                    <strong className="d-block">{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
