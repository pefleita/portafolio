"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, GraduationCap, Download } from "lucide-react";

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
  item: (typeof experiences)[0];
  isLast: boolean;
  getTranslation: (key: string, type: string) => string;
}) {
  const title = getTranslation(item.key, item.type);
  const description = getTranslation(item.key, item.type + "Desc");

  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 relative">
      <div className="flex flex-col items-center pt-1">
        <div
          className="w-3 h-3 rounded-full shrink-0 border-2 border-bg"
          style={{
            backgroundColor: item.accent,
            boxShadow: `0 0 12px ${item.accent}66`,
          }}
        />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      <div className={isLast ? "" : "pb-10"}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
          <h3 className="font-display font-bold text-lg tracking-[-0.01em] text-text">
            {title}
          </h3>
          <span
            className="font-mono text-xs tracking-wider whitespace-nowrap"
            style={{ color: item.accent }}
          >
            {item.period}
          </span>
        </div>

        <div className="font-mono text-xs text-text-muted tracking-wider mb-3">
          {item.company}
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-1">
          {item.tech.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, language } = useLanguage();
  const cvFile =
    language === "en" ? "/cv-pedro-fleita-en.pdf" : "/cv-pedro-fleita-es.pdf";

  const getTranslation = (key: string, type: string) => {
    if (type === "work" || type === "workDesc") {
      return t(
        `experience.work.${key}.${type === "workDesc" ? "description" : "title"}`
      );
    } else {
      return t(
        `experience.educationItems.${key}.${
          type === "educationDesc" ? "description" : "title"
        }`
      );
    }
  };

  return (
    <section id="experiencia" className="py-28 px-6 bg-bg-2">
      <div className="container">
        <div className="section-label mb-4">{"// " + t("experience.title").toLowerCase()}</div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] leading-tight mb-14">
          {t("experience.title")} &{" "}
          <span className="gradient-text">{t("experience.education")}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-text" />
              </div>
              <span className="font-display font-bold text-base text-text">
                {t("experience.workExperience")}
              </span>
            </div>

            {experiences.map((item, i) => (
              <TimelineItem
                key={item.key + item.company}
                item={item}
                isLast={i === experiences.length - 1}
                getTranslation={getTranslation}
              />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-text" />
              </div>
              <span className="font-display font-bold text-base text-text">
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

        <div className="mt-16 p-8 md:p-10 bg-surface rounded-2xl border border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">
              {t("experience.viewCV")}
            </h3>
            <p className="text-text-muted text-sm">
              {t("experience.viewCVDesc")}
            </p>
          </div>
          <a href={cvFile} download className="btn-primary">
            <Download className="w-4 h-4" />
            {t("nav.downloadCV")} (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
