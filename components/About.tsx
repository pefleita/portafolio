"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      style={{
        padding: "7rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Photo column */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "340px",
              flexShrink: 0,
            }}
          >
            {/* Decorative frame */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "16px",
                border: "1px solid var(--accent)",
                opacity: 0.3,
                transform: "rotate(3deg)",
              }}
            />
            {/* Photo */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                position: "relative",
              }}
            >
              <Image src="/foto-pedro.jpg" alt="Pedro Fleita" fill sizes="280px" style={{objectFit:'cover'}} />
            </div>
          </div>
        </div>

        {/* Text column */}
        <div>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            {"// " + t("about.title").toLowerCase()}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            {t("about.title").includes("About") ? "I build websites that" : "Construyo webs que"}{" "}
            <span className="gradient-text">
              {t("about.title").includes("About") ? "really work" : "funcionan de verdad"}
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            {t("about.description")}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            {t("about.passion")}
          </p>

          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  marginTop: "0.25rem",
                }}
              >
                {t("hero.years").toUpperCase()}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--accent-2)",
                  lineHeight: 1,
                }}
              >
                34+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  marginTop: "0.25rem",
                }}
              >
                {t("hero.projects").toUpperCase()}
              </div>
            </div>
          </div>

          <a
            href="https://github.com/pefleita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ marginTop: "2rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            {t("about.github")}
          </a>
        </div>
      </div>
    </section>
  );
}
