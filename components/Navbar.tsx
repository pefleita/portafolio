"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./ui/NavLink";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const cvFile = language === "en" ? "/cv-pedro-fleita-en.pdf" : "/cv-pedro-fleita-es.pdf";

  const navLinks = [
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#habilidades", label: t("nav.skills") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s",
        background: scrolled
          ? "rgba(10,10,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.15rem",
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          pf
          <span style={{ color: "var(--accent)" }}>.</span>
          dev
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
          <LanguageSelector />
          <a
            href={cvFile}
            download
            className="btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}
          >
            ↓ {t("nav.cv")}
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--text)",
          }}
          className="show-mobile"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          style={{
            background: "var(--bg-2)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <LanguageSelector />
          <a
            href={cvFile}
            download
            className="btn-primary"
            style={{ width: "fit-content" }}
          >
            ↓ {t("nav.downloadCV")}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  );
}
