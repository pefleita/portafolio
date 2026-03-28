"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "CSS"],
    url: "https://tislemperfumes.com",
    accent: "#f87171",
    image: "/projects/tislem.jpg",
  },
  {
    id: 2,
    tech: ["WordPress", "PHP", "SEO", "MySQL"],
    url: "https://btech.com.mx",
    accent: "#a855f7",
    image: "/projects/btech.jpg",
  },
  {
    id: 3,
    tech: ["WordPress", "PHP", "Custom Theme", "MySQL", "SEO"],
    url: "https://www.tiempo21.cu",
    accent: "#22c55e",
    image: "/projects/tiempo21.jpg",
  },
];

function ProjectCard({ project, active, onToggle, t, getProjectTranslation }: {
  project: typeof projects[0];
  active: number | null;
  onToggle: () => void;
  t: (key: string) => string;
  getProjectTranslation: (id: number, field: string) => string;
}) {
  return (
    <article
      onClick={onToggle}
      className="glow-border bg-surface rounded-2xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
    >
      <div className="h-[180px] relative flex items-center justify-center border-b border-border overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={getProjectTranslation(project.id, "title")}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-text-muted tracking-widest">
              {t("projects.noImage")}
            </span>
          </div>
        )}

        <div
          className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-border rounded-full px-3 py-1 font-mono text-xs tracking-wider"
          style={{ color: project.accent }}
        >
          {getProjectTranslation(project.id, "category")}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={getProjectTranslation(project.id, "title")}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-border rounded-lg p-2 text-white transition-colors hover:text-accent"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2 text-text tracking-[-0.01em]">
          {getProjectTranslation(project.id, "title")}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-5">
          {getProjectTranslation(project.id, "description")}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>

        <button
          className="flex items-center gap-1.5 bg-transparent border-none font-mono text-xs tracking-wider cursor-pointer transition-colors hover:opacity-80 p-0"
          style={{ color: project.accent }}
        >
          {active === project.id ? (
            <><ChevronUp className="w-4 h-4" /> {t("projects.hide")}</>
          ) : (
            <><ChevronDown className="w-4 h-4" /> {t("projects.viewMore")}</>
          )}
        </button>

        {active === project.id && (
          <div className="mt-5 pt-5 border-t border-border flex flex-col gap-4">
            <div>
              <div className="font-mono text-xs tracking-widest mb-1" style={{ color: project.accent }}>
                {t("projects.problem")}
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {getProjectTranslation(project.id, "problem")}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs tracking-widest mb-1" style={{ color: project.accent }}>
                {t("projects.role")}
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {getProjectTranslation(project.id, "role")}
              </p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-5 w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {t("projects.viewLive")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

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
    <section id="proyectos" className="section">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
        <div>
          <div className="section-label mb-4">{"// " + t("projects.title").toLowerCase()}</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] leading-tight">
            {t("projects.selectedWork")}
          </h2>
        </div>
        <p className="text-text-muted max-w-[340px] text-base leading-relaxed">
          {t("projects.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            active={active}
            onToggle={() => setActive(active === project.id ? null : project.id)}
            t={t}
            getProjectTranslation={getProjectTranslation}
          />
        ))}
      </div>
    </section>
  );
}
