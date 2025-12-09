"use client";

import Link from "next/link";
import Image from "next/image";

export default function Events() {
  const events = [
    {
      slug: "pourquoi-lintelligence-artificielle",
      img: "/images/eventPost.jpg",
      date: "19 Décembre 2025 — 15h00",
      category: "19 Décembre 2025 — 15h00",
      title: "Séminaire Découverte : Pourquoi l’intelligence artificielle ?",
      location: "Le Corail Suites Hotel -Berges du Lac 2",
      speaker: "Animé par: Imen Regaïeg", // <-- new field
    },
  ];

  return (
    <section className="section events" id="evennement">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">Nos Évènements</span>
            <h2 className="mb-3">
              Explorez nos prochains ateliers, séminaires et formations.
            </h2>
          </div>
        </div>

        <div className="row">
          {events.map((event, index) => (
            <div key={index} className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="image position-relative">
                      <Image
                        src={event.img}
                        alt={event.title}
                        width={300}
                        height={150}
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <ul>
                      <li className="w-100">
                        <span className="category">{event.category}</span>
                      </li>
                      <li className="w-100">
                        <h4>{event.title}</h4>

                        <p className="speaker">{event.speaker}</p>
                        <p className="location">
                          <i className="fa fa-map-marker-alt me-1 "></i>
                          {event.location}
                        </p>
                        {/* <div className="event-date d-flex justify-content-between align-items-center">{event.date} 
                       </div> */}
                      </li>
                      <Link
                        href={`/events/${event.slug}#preinscription`}
                        className="btn btn-primary py-2 "
                      >
                        Pré-inscription
                      </Link>
                    </ul>

                    <Link
                      href={`/events/${event.slug}`}
                      className="event-arrow"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="events-footer text-center">
        <p className="m-0 text-white fw-semibold">
          Organisé par : BIRD TRAINING & CONSULTING
        </p>
      </div>
    </section>
  );
}
