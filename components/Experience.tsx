"use client";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
  {
    type: "work",
    key: "radioVictoria",
    company: "Radio Victoria",
    period: "2010 — Presente",
    tech: ["WordPress", "PHP", "Custom Theme", "SEO"],
    accent: "#06a70e",
  },
  {
    type: "work",
    key: "btech",
    company: "BTech",
    period: "2023 — 2025",
    tech: ["PHP", "Wordpress", "MySQL", "JavaScript", "SEO"],
    accent: "#e943e9",
  },
  {
    type: "work",
    key: "prodevsolutions",
    company: "ProdevSolutions",
    period: "2016 — 2023",
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    accent: "#6acf86",
  },
];

const education = [
  {
    type: "education",
    key: "uci",
    company: "Universidad de Ciencias Informáticas - UCI",
    period: "2005 — 2010",
    tech: ["Java", "PHP", "MySQL", "C++", "Algoritmos"],
    accent: "#12089c",
  },
  {
    type: "education",
    key: "seo",
    company: "Ahrefs Academy + SEMrush",
    period: "2018",
    tech: ["Core Web Vitals", "Structured Data", "GSC", "Lighthouse"],
    accent: "#a18cd1",
  },
];

function TimelineItem({
  item,
  isLast,
  getTranslation,
}: {
  item: typeof experiences[0];
  isLast: boolean;
  getTranslation: (key: string, type: string) => string;
}) {
  const title = getTranslation(item.key, item.type);
  const description = getTranslation(item.key, item.type + "Desc");
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "1.5rem",
        position: "relative",
      }}
    >
      {/* Timeline dot & line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "0.25rem",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: item.accent,
            boxShadow: `0 0 12px ${item.accent}66`,
            flexShrink: 0,
            border: "2px solid var(--bg)",
          }}
        />
        {!isLast && (
          <div
            style={{
              width: "1px",
              flex: 1,
              background: "var(--border)",
              marginTop: "0.5rem",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : "2.5rem" }}>
        <div
          className="timeline-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.4rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: item.accent,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </span>
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
            marginBottom: "0.75rem",
          }}
        >
          {item.company}
        </div>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            marginBottom: "1rem",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {item.tech.map((t) => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, language } = useLanguage();
  const cvFile = language === "en" ? "/cv-pedro-fleita-en.pdf" : "/cv-pedro-fleita-es.pdf";

  const getTranslation = (key: string, type: string) => {
    if (type === "work" || type === "workDesc") {
      return t(`experience.work.${key}.${type === "workDesc" ? "description" : "title"}`);
    } else {
      return t(`experience.educationItems.${key}.${type === "educationDesc" ? "description" : "title"}`);
    }
  };

  return (
    <section
      id="experiencia"
      style={{
        padding: "7rem 0",
        background: "var(--bg-2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div className="section-label" style={{ marginBottom: "1rem" }}>
          {"// " + t("experience.title").toLowerCase()}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "3.5rem",
          }}
        >
          {t("experience.title")} &{" "}
          <span className="gradient-text">
            {t("experience.education")}
          </span>
        </h2>

        <div
          className="experience-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "4rem",
          }}
        >
          {/* Work */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                💼
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text)",
                }}
              >
                {t("experience.workExperience")}
              </span>
            </div>

            {experiences.map((item, i) => (
              <TimelineItem
                key={item.key+item.company}
                item={item}
                isLast={i === experiences.length - 1}
                getTranslation={getTranslation}
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                🎓
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text)",
                }}
              >
                {t("experience.education")}
              </span>
            </div>

            {education.map((item, i) => (
              <TimelineItem
                key={item.key}
                item={item}
                isLast={i === education.length - 1}
                getTranslation={getTranslation}
              />
            ))}
          </div>
        </div>

        {/* CV download CTA */}
        <style>{`
          @media (max-width: 900px) {
            .experience-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
          @media (max-width: 480px) {
            .timeline-header {
              flex-direction: column !important;
              gap: 0.25rem !important;
            }
          }
        `}</style>

        {/* CV download CTA */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            background: "var(--surface)",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: "0.4rem",
              }}
            >
              {t("experience.viewCV")}
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              {t("experience.viewCVDesc")}
            </p>
          </div>
          <a
            href={cvFile}
            download
            className="btn-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            {t("nav.downloadCV")} (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
