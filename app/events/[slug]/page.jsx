"use client";
import Image from "next/image";
import { use } from "react";
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import PreinscriptionForm from "../../components/PreinscriptionForm";
import EventTestimonials from "../../components/EventTestimonials";
import Schedule from "../../components/Schedule";
export default function EventDetail(props) {
  const params = use(props.params); // unwrap the Promise
  const slug = params.slug; // server component, safe to access directly

  // Example static data
  const events = [
    {
      slug: "pourquoi-lintelligence-artificielle",
      title: "Pourquoi l’intelligence artificielle ?",
      date: "19 Décembre 2025",
      location: " Le Corail Suites Hotel -Berges du Lac 2",
      img: "/images/hero-bg.jpg",
      description:
        "Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in est ut optio sequi unde.",
      about: {
        where: " Le Corail Suites Hotel -Berges du Lac 2",
        when: "Vendredi\n19 Décembre 2025",
      },
      youtube: "https://www.youtube.com/watch?v=Y7f98aduVJ8",
    },
  ];

  const speakers = [
    {
      name: "Dr. Amina Ben Salah",
      role: "Spécialiste IA",
      img: "/images/member-01.jpg",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  ];
  const facts = [
    {
      title: "Quand",
      value: "12 Déc 2025",
      icon: "fas fa-calendar-alt",
    },
    {
      title: "Où",
      value: "Tunis, Tunisie",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "Tickets",
      value: "1500",
      icon: "fas fa-ticket-alt",
    },
    {
      title: "Intervenants",
      value: "10",
      icon: "fas fa-microphone",
    },
  ];

  useEffect(() => {
    new PureCounter(); // Initialize PureCounter on client-side
  }, []);

  const event = events.find((e) => e.slug === slug);

  if (!event) return <p>Événement non trouvé</p>;
  console.log("params.slug:", slug);

  return (
    <>
      <section id="heroEvent" className="heroEvent section dark-background">
        {/* Background image */}
        <Image
          src={event.img}
          alt={event.title}
          fill
          style={{ objectFit: "cover" }}
          className=""
          priority
        />

        {/* Hero content */}
        <div className="container d-flex flex-column align-items-center text-center mt-auto">
          <h2 data-aos="fade-up" data-aos-delay="100" className="">
            {event.title}
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            {event.date}, {event.location}
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="">
            <a
              href={event.youtube}
              className="glightbox pulsating-play-btn mt-3"
            ></a>
          </div>
        </div>

        {/* About info section */}
        <div className="about-info mt-auto position-relative">
          <div className="container position-relative" data-aos="fade-up">
            <div className="row align-items-start">
              {/* About */}
              <div className="col-lg-4">
                <h2>About The Event</h2>
                <p>{event.description}</p>
              </div>

              {/* Where */}
              <div className="col-lg-4 ms-auto text-end">
                <h3>Where</h3>
                <p>{event.about.where}</p>
              </div>

              {/* When */}
              <div className="col-lg-4 text-end">
                <h3>When</h3>
                <p style={{ whiteSpace: "pre-line" }}>{event.about.when}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="team section" id="team">
        <div className="container">
          {/* Section Titre */}
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <span
                className="subtitle text-uppercase mb-3"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Nos Intervenants
              </span>
              <h2 className="mb-3" data-aos="fade-up" data-aos-delay="50">
                Découvrez les experts qui vous guideront
              </h2>
            </div>
          </div>

          {/* Liste des intervenants */}
          <div className="row g-4 mt-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-member">
                  <div className="main-content">
                    <Image
                      src={speaker.img}
                      alt={speaker.name}
                      width={220}
                      height={220}
                    />
                    <span className="category">{speaker.role}</span>
                    <h4>{speaker.name}</h4>
                    <ul className="social-icons">
                      <li>
                        <a href={speaker.facebook}>
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={speaker.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={speaker.linkedin}>
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* stats */}

      <div className="section fun-facts">
        <div className="container">
          <div className="row justify-content-center g-4">
            {facts.map((fact, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div
                  className="counter"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Icône avec fond blanc circulaire */}
                  <div
                    style={{
                      backgroundColor: "#fff", // fond blanc
                      borderRadius: "50%", // cercle
                      width: "70px", // largeur du cercle
                      height: "70px", // hauteur du cercle
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <i
                      className={fact.icon}
                      style={{ fontSize: "32px", color: "var(--bs-primary)" }}
                    ></i>
                  </div>

                  <h4 style={{ color: "#fff", marginBottom: "5px" }}>
                    {fact.value}
                  </h4>
                  <p style={{ color: "#fff", margin: 0 }}>{fact.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PreinscriptionForm />
      <Schedule />
      <EventTestimonials />
    </>
  );
}
