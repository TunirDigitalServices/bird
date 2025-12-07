"use client";

import Image from "next/image";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="schedule section">
      

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Tabs */}
        {/* Section Title */}
        <div className="     section-heading mb-5 text-center" data-aos="fade-up">
        <h6 className="subtitle">OUR TRAINING</h6>
        <h2>Event Schedule</h2>
        <p>
          Découvrez les sessions de formation et consulting animées par nos experts pour booster vos compétences et vos équipes.
        </p>
      </div>
        <div className="schedule-header">
          <ul className="nav nav-tabs" id="schedule-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="schedule-tab-1"
                data-bs-toggle="tab"
                data-bs-target="#schedule-tab-pane-1"
                type="button"
              >
                Mon, Oct 15
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="schedule-tab-2"
                data-bs-toggle="tab"
                data-bs-target="#schedule-tab-pane-2"
                type="button"
              >
                Tue, Oct 16
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="schedule-tab-3"
                data-bs-toggle="tab"
                data-bs-target="#schedule-tab-pane-3"
                type="button"
              >
                Wed, Oct 17
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="schedule-tabContent">
          {/* ===== MONDAY ===== */}
          <div
            className="tab-pane fade show active"
            id="schedule-tab-pane-1"
            role="tabpanel"
            aria-labelledby="schedule-tab-1"
          >
            <div className="schedule-content">
              <div className="session-timeline">
                {/* 9:00 - 10:00 Keynote */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">9:00</span>
                    <span className="end">10:00</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track keynote">Keynote</span>
                        <span className="room">Main Hall</span>
                      </div>
                      <h3 className="session-title">
                        Welcome & Event Opening
                      </h3>
                      <p className="session-description">
                        Présentation de l'événement et de ses objectifs par les fondateurs de Bird Training & Consulting.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-f-4.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Rania Elouni</h4>
                          <span className="speaker-role">Founder & CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10:30 - 11:15 Training */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:30</span>
                    <span className="end">11:15</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track development">Training</span>
                        <span className="room">Room A</span>
                      </div>
                      <h3 className="session-title">Leadership Essentials</h3>
                      <p className="session-description">
                        Techniques pour renforcer le leadership et améliorer la communication au sein des équipes.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-m-6.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Ahmed Ben Ali</h4>
                          <span className="speaker-role">Leadership Coach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11:15 - 11:45 Break */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">11:15</span>
                    <span className="end">11:45</span>
                  </div>
                  <div className="session-card break-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track break">Break</span>
                        <span className="room">Lobby</span>
                      </div>
                      <h3 className="session-title">Coffee Break</h3>
                      <p className="session-description">
                        Moment pour réseauter et échanger entre participants.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 12:00 - 12:45 Workshop */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">12:00</span>
                    <span className="end">12:45</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track business">Workshop</span>
                        <span className="room">Main Hall</span>
                      </div>
                      <h3 className="session-title">Team Performance & Motivation</h3>
                      <p className="session-description">
                        Atelier interactif pour découvrir les leviers de la motivation et de la performance collective.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-m-7.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Karim Saidi</h4>
                          <span className="speaker-role">HR Consultant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== TUESDAY ===== */}
          <div
            className="tab-pane fade"
            id="schedule-tab-pane-2"
            role="tabpanel"
            aria-labelledby="schedule-tab-2"
          >
            <div className="schedule-content">
              <div className="session-timeline">
                {/* 9:30 - 10:15 Training */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">9:30</span>
                    <span className="end">10:15</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track development">Training</span>
                        <span className="room">Room A</span>
                      </div>
                      <h3 className="session-title">Effective Communication</h3>
                      <p className="session-description">
                        Techniques pratiques pour améliorer les échanges et la collaboration en entreprise.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-m-8.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Leila Messaoud</h4>
                          <span className="speaker-role">Communication Expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10:45 - 11:30 Workshop */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:45</span>
                    <span className="end">11:30</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track design">Workshop</span>
                        <span className="room">Room B</span>
                      </div>
                      <h3 className="session-title">Project Management Tools</h3>
                      <p className="session-description">
                        Atelier pratique pour découvrir et maîtriser les outils de gestion de projet les plus efficaces.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-f-6.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Nadia Trabelsi</h4>
                          <span className="speaker-role">Project Consultant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== WEDNESDAY ===== */}
          <div
            className="tab-pane fade"
            id="schedule-tab-pane-3"
            role="tabpanel"
            aria-labelledby="schedule-tab-3"
          >
            <div className="schedule-content">
              <div className="session-timeline">
                {/* 10:00 - 10:45 Training */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:00</span>
                    <span className="end">10:45</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track business">Workshop</span>
                        <span className="room">Main Hall</span>
                      </div>
                      <h3 className="session-title">AI in Business</h3>
                      <p className="session-description">
                        Découvrez comment l'intelligence artificielle peut transformer vos processus et améliorer la performance.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-m-9.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Ahmed Ben Romdhane</h4>
                          <span className="speaker-role">AI Specialist</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11:00 - 11:30 Training */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">11:00</span>
                    <span className="end">11:30</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track development">Workshop</span>
                        <span className="room">Room A</span>
                      </div>
                      <h3 className="session-title">Performance Analytics</h3>
                      <p className="session-description">
                        Utilisation de données et KPIs pour suivre la performance et améliorer les résultats.
                      </p>
                      <div className="speaker-info">
                        <Image
                          src="/images/person-f-6.webp"
                          alt="Speaker"
                          width={60}
                          height={60}
                          className="speaker-avatar img-fluid"
                        />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Sofia Rahmani</h4>
                          <span className="speaker-role">Business Analyst</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="schedule-actions text-center mt-4">
        <button className="btn btn-primary me-2">
          <i className="bi bi-download"></i> Download Full Agenda
        </button>
        <button className="btn btn-outline">
          <i className="bi bi-calendar-event"></i> Export to Calendar
        </button>
      </div>
    </section>
  );
}
