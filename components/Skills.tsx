"use client";
import { useLanguage } from "@/context/LanguageContext";

const skillGroupsData = [
  {
    labelKey: "skills.cms",
    color: "#6c63ff",
    skills: [
      { name: "WordPress", icon: "WP" },
      { name: "WooCommerce", icon: "WC" },
      { name: "PHP", icon: "PHP" },
      { name: "Yii2", icon: "Y2" },
      { name: "MySQL", icon: "SQL" },
    ],
  },
  {
    labelKey: "skills.frontend",
    color: "#ff6b6b",
    skills: [
      { name: "HTML5", icon: "H5" },
      { name: "CSS3", icon: "CS" },
      { name: "JavaScript", icon: "JS" },
      { name: "React", icon: "Re" },
      { name: "Next.js", icon: "Nx" },
      { name: "Tailwind CSS", icon: "TW" },
    ],
  },
  {
    labelKey: "skills.tools",
    color: "#43e97b",
    skills: [
      { name: "Git", icon: "GT" },
      { name: "GitHub", icon: "GH" },
      { name: "SEO Técnico", icon: "SE" },
      { name: "cPanel", icon: "CP" },
      { name: "Figma", icon: "FG" },
      { name: "VS Code", icon: "VS" },
    ],
  },
];

const allSkills = [
  "WordPress", "WooCommerce", "PHP", "MySQL", "Yii2",
  "HTML5", "CSS3", "JavaScript", "React", "Next.js",
  "Tailwind CSS", "Git", "GitHub", "SEO", "cPanel",
  "Figma", "SCSS", "REST API", "Node.js", "TypeScript",
];

export default function Skills() {
  const { t } = useLanguage();
  const doubled = [...allSkills, ...allSkills];

  const skillGroups = skillGroupsData.map(group => ({
    ...group,
    label: t(group.labelKey),
  }));

  return (
    <section
      id="habilidades"
      style={{
        padding: "7rem 0",
        background: "var(--bg-2)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <div className="section-label" style={{ marginBottom: "1rem" }}>
          {"// " + t("skills.title").toLowerCase()}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          {t("skills.title")}
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: "500px",
            lineHeight: 1.7,
          }}
        >
          {t("skills.subtitle")}
        </p>
      </div>

      {/* Skill groups */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          marginBottom: "4rem",
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.labelKey}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: group.color,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {group.label}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="skill-tag"
                  style={{
                    borderColor: `${group.color}40`,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="skill-tag"
              style={{
                fontSize: ".75rem",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
