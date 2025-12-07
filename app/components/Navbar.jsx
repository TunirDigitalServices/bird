"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for fixed navbar
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      setTimeout(() => {
        window.scrollTo({
          top: el.offsetTop - 100,
          behavior: "smooth",
        });
      }, 200); // wait for page to render
    }
  }
}, []);

  const router = useRouter();
const pathname = usePathname();

const handleClick = (e, targetId) => {
  e.preventDefault();

  const hash = targetId; // "#about", "#services", etc.

  // Not on homepage → redirect to homepage
  if (pathname !== "/") {
    router.push(`/${hash}`);
    setActiveSection(hash.slice(1)); // FIX: keep active state correct
    return;
  }

  // Already on homepage → smooth scroll
  const target = document.querySelector(hash);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  }

  setActiveSection(hash.slice(1)); // update active immediately
};

  return (
    <header className="fbs__net-navbar navbar navbar-expand-lg dark">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link className="navbar-brand w-auto" href="/">
          <Image
            className="logo dark"
            src="/images/Logotcnnew.png"
            width={60}
            height={60}
            alt="Logo Bird Consulting & Training"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Offcanvas */}
        <div
          className="offcanvas offcanvas-start w-75"
          id="fbs__net-navbars"
          tabIndex={-1}
          aria-labelledby="fbs__net-navbarsLabel"
        >
          <div className="offcanvas-header mt-2">
            <Link className="logo-link" id="fbs__net-navbarsLabel" href="/">
              <Image
                className="logo dark"
                src="/images/Logotcnnew.png"
                width={60}
                height={60}
                alt="Logo Bird Consulting & Training"
                style={{ objectFit: "contain" }}
              />
            </Link>

            <button
              className="btn-close btn-close-black"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Fermer"
            ></button>
          </div>

          <div className="offcanvas-body align-items-lg-center">
            <ul className="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
              {[
                { id: "home", label: "Accueil" },
                { id: "about", label: "À propos" },
                { id: "how-it-works", label: "Comment ça marche" },
                { id: "services", label: "Services" },
                { id: "evennement", label: "Événements" },

                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link scroll-link ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    onClick={(e) => handleClick(e, `#${item.id}`)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right buttons */}
        <div className="ms-auto w-auto">
          <div className="header-social d-flex align-items-center gap-1">
            {/* <Link className="btn btn-primary py-2" href="#">
              Commencer
            </Link> */}

            <button
              className="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto"
              data-bs-toggle="offcanvas"
              data-bs-target="#fbs__net-navbars"
              aria-controls="fbs__net-navbars"
              aria-label="Basculer la navigation"
              aria-expanded="false"
            >
              <svg
                className="fbs__net-icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="21" x2="3" y1="6" y2="6"></line>
                <line x1="15" x2="3" y1="12" y2="12"></line>
                <line x1="17" x2="3" y1="18" y2="18"></line>
              </svg>

              <svg
                className="fbs__net-icon-close"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
