"use client";

import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Quels services propose Bird Training & Consulting ?",
      answer:
        "Nous proposons des services sur mesure en accompagnement, conseil et formation, Pour plus de détails, consultez notre page Services.",
    },
    {
      question: "Combien coûtent vos services ?",
      answer:
        "Les tarifs dépendent de la nature du service choisi, de la durée des formations et de la complexité du projet de consulting. Après un premier échange, nous vous fournirons un devis personnalisé adapté à vos besoins.",
    },
    {
      question:
        "Combien de temps dure une formation ou un projet de consulting ?",
      answer:
        "La durée varie selon le programme ou le projet. Une formation standard peut durer quelques jours à quelques semaines, tandis qu'un projet de consulting complet peut s'étendre sur plusieurs mois selon les objectifs définis.",
    },
    {
      question:
        "Les solutions proposées sont-elles adaptées aux entreprises de toutes tailles ?",
      answer:
        "Oui, nos services sont conçus pour s'adapter aux besoins des petites, moyennes et grandes entreprises. Chaque programme est personnalisé pour maximiser l'impact sur votre organisation.",
    },
    {
      question:
        "Proposez-vous un accompagnement après la formation ou le consulting ?",
      answer:
        "Oui, nous offrons un suivi post-formation et post-consulting pour assurer l'intégration des acquis et l'amélioration continue des performances de vos équipes.",
    },
  ];

  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  return (
    <section className="section faq__v2  justify-text" id="faq">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-8 col-lg-7 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">FAQ</span>
            <h2 className="h2 fw-bold mb-3">Questions Fréquentes</h2>
            <p className=" justify-text">
              Retrouvez ici les réponses aux questions les plus courantes sur
              nos services de conseil et d’accompagnement.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="mx-auto mt-4">
            <Accordion activeKey={activeKey}>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header
                    onClick={() => handleToggle(index.toString())}
                  >
                    <span>{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
