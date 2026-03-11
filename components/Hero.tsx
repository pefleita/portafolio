"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const deletingRef = useRef(false);

  const roles = useMemo(() => [
    t("hero.roles.wordpress"),
    t("hero.roles.php"),
    t("hero.roles.fullstack"),
    t("hero.roles.nextjs"),
  ], [t]);

  useEffect(() => {
    const full = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => {
        deletingRef.current = true;
        setDeleting(true);
      }, 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        deletingRef.current = false;
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, roles]);

  const cvFile = language === "en" ? "/cv-pedro-fleita-en.pdf" : "/cv-pedro-fleita-es.pdf";

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "100px",
            padding: "0.4rem 1rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--accent-3)",
              display: "inline-block",
              animation: "pulse-glow 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            {t("hero.available")}
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            maxWidth: "900px",
          }}
        >
          {t("hero.greeting")}{" "}
          <span className="gradient-text">Pedro Fleita</span>
          <br />
          <span
            style={{
              color: "var(--text-muted)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
            }}
          >
            {displayed}
            <span
              style={{
                borderRight: "3px solid var(--accent)",
                marginLeft: "2px",
                animation: "blink 1s step-end infinite",
              }}
            />
          </span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-muted)",
            maxWidth: "580px",
            marginBottom: "3rem",
            lineHeight: 1.75,
          }}
        >
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <a href="#proyectos" className="btn-primary">
            {t("hero.viewProjects")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contacto" className="btn-outline">
            {t("hero.letsTalk")}
          </a>
          <a
            href={cvFile}
            download
            className="btn-outline"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            {t("hero.downloadCV")}
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "10+", label: t("hero.years") },
            { value: "34+", label: t("hero.projects") },
            { value: "27+", label: t("hero.clients") },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginTop: "0.25rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, var(--text-muted), transparent)",
            animation: "fadeIn 2s ease infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
          }}
        >
          {t("hero.scroll")}
        </span>
      </div>
    </section>
  );
}
