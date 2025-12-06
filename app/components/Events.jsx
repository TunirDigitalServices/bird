import Link from "next/link";
import Image from "next/image";

export default function Events() {
  const events = [
    {
      slug: "leadership-moderne-communication",
      img: "/images/event-01.jpg",
      date: "10 Janvier 2025",
      category: "Leadership & Communication",
      title: "Formation : Leadership Moderne & Communication d’Équipe",
    },
    {
      slug: "ia-optimiser-travail",
      img: "/images/event-02.jpg",
      date: "15 Janvier 2025",
      category: "AI Productivity",
      title: "Atelier : Utiliser l’IA pour Optimiser le Travail",
    },
    {
      slug: "gestion-equipe-conflits",
      img: "/images/event-03.jpg",
      date: "20 Janvier 2025",
      category: "Team Management",
      title: "Workshop : Gestion d’Équipe & Résolution des Conflits",
    },
  ];

  return (
    <section className="section events" id="events">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">Notre Événements</span>
            <h2 className="mb-3">
              Découvrez nos prochaines formations, ateliers et workshops.
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
                        width={400}
                        height={250}
                        className="img-fluid"
                      />
                      <div className="date">{event.date}</div>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <ul>
                      <li className="w-100">
                        <span className="category">{event.category}</span>
                      </li>
                      <li className="w-100">
                        <h4>{event.title}</h4>
                      </li>
                    </ul>
                    <Link href={`/events/${event.slug}`}>
                      <i className="fa fa-angle-right"></i>
                    </Link>
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
