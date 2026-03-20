"use client";
import { useLanguage } from "@/context/LanguageContext";

const skillGroupsData = [
  {
    labelKey: "skills.cms",
    color: "#6c63ff",
    skills: ["WordPress", "WooCommerce", "PHP", "Yii2", "MySQL"],
  },
  {
    labelKey: "skills.frontend",
    color: "#ff6b6b",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    labelKey: "skills.tools",
    color: "#43e97b",
    skills: ["Git", "GitHub", "SEO Técnico", "cPanel", "Figma", "VS Code"],
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

  const skillGroups = skillGroupsData.map((group) => ({
    ...group,
    label: t(group.labelKey),
  }));

  return (
    <section id="habilidades" className="py-28 px-6 bg-bg-2">
      <div className="container">
        <div className="section-label mb-4">{"// " + t("skills.title").toLowerCase()}</div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] leading-tight mb-4">
          {t("skills.title")}
        </h2>
        <p className="text-text-muted max-w-[500px] leading-relaxed mb-14">
          {t("skills.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.labelKey}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <span className="font-display font-bold text-lg tracking-[-0.01em]">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ borderColor: `${group.color}40` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <span key={i} className="skill-tag mr-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
