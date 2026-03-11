"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    id: 1,
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "CSS"],
    url: "https://tislemperfumes.com",
    gradient: "linear-gradient(135deg, #6c63ff22, #ff6b6b22)",
    accent: "#f87171",
    image: "/projects/tislem.jpg",
  },
  {
    id: 2,
    tech: ["WordPress", "PHP", "SEO", "MySQL"],
    url: "https://btech.com.mx",
    gradient: "linear-gradient(135deg, #43e97b22, #38f9d722)",
    accent: "#a855f7",
    image: "/projects/btech.jpg",
  },
  {
    id: 3,
    tech: ["WordPress", "PHP", "Custom Theme", "MySQL", "SEO"],
    url: "https://www.tiempo21.cu",
    gradient: "linear-gradient(135deg, #f7971e22, #ffd20022)",
    accent: "#22c55e",
    image: "/projects/tiempo21.jpg",
  },
];

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const { t } = useLanguage();

  const projectKeys: Record<number, string> = {
    1: "tislem",
    2: "btech",
    3: "tiempo21",
  };

  const getProjectTranslation = (id: number, field: string) => {
    const key = projectKeys[id];
    return t(`projects.items.${key}.${field}`);
  };

  return (
    <section
      id="proyectos"
      style={{
        padding: "7rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <div>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            {"// " + t("projects.title").toLowerCase()}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {t("projects.selectedWork")}
          </h2>
        </div>
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: "340px",
            fontSize: "0.95rem",
            lineHeight: 1.75,
          }}
        >
          {t("projects.subtitle")}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() =>
              setActive(active === project.id ? null : project.id)
            }
            className="glow-border"
            style={{
              background: "var(--surface)",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")
            }
          >
            {/* Project visual */}
            <div
              style={{
                height: "180px",
                background: project.gradient,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid var(--border)",
                overflow: "hidden",
              }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={getProjectTranslation(project.id, "title")}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {t("projects.noImage")}
                  </span>
                </div>
              )}

              {/* Category badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  padding: "0.3rem 0.8rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: project.accent,
                  letterSpacing: "0.08em",
                }}
              >
                {getProjectTranslation(project.id, "category")}
              </div>

              {/* External link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "0.4rem",
                  color: "#ffffff",
                  transition: "color 0.2s",
                  lineHeight: 0,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                }
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* Content */}
            <div style={{ padding: "1.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  marginBottom: "0.6rem",
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {getProjectTranslation(project.id, "title")}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {getProjectTranslation(project.id, "description")}
              </p>

              {/* Tech tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1rem",
                }}
              >
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Toggle details */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: project.accent,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                {active === project.id ? "▲ " + t("projects.hide") : "▼ " + t("projects.viewMore")}
              </button>

              {/* Expanded details */}
              {active === project.id && (
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: project.accent,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {t("projects.problem")}
                    </div>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {getProjectTranslation(project.id, "problem")}
                    </p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: project.accent,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {t("projects.role")}
                    </div>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {getProjectTranslation(project.id, "role")}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: "0.82rem", padding: "0.6rem 1.25rem", width: "fit-content" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t("projects.viewLive")}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
