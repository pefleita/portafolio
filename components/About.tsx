"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Github } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[340px] shrink-0">
            <div className="absolute inset-[-8px] rounded-2xl border border-accent opacity-30 rotate-[3deg]" />
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface border border-border">
              <Image
                src="/foto-pedro.jpg"
                alt="Pedro Fleita"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="section-label mb-4">{"// " + t("about.title").toLowerCase()}</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight mb-6">
            {t("about.title").includes("About") ? "I build websites that" : "Construyo webs que"}{" "}
            <span className="gradient-text">
              {t("about.title").includes("About") ? "really work" : "funcionan de verdad"}
            </span>
          </h2>

          <p className="text-text-muted text-base leading-relaxed mb-5">
            {t("about.description")}
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-8">
            {t("about.passion")}
          </p>

          <div className="flex gap-6 flex-wrap mb-8">
            <div>
              <div className="font-display font-extrabold text-4xl text-accent leading-none">
                10+
              </div>
              <div className="font-mono text-xs color-text tracking-widest mt-1">
                {t("hero.years").toUpperCase()}
              </div>
            </div>
            <div>
              <div className="font-display font-extrabold text-4xl text-accent-2 leading-none">
                34+
              </div>
              <div className="font-mono text-xs color-text tracking-widest mt-1">
                {t("hero.projects").toUpperCase()}
              </div>
            </div>
          </div>

          <a
            href="https://github.com/pefleita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github className="w-4 h-4" />
            {t("about.github")}
          </a>
        </div>
      </div>
    </section>
  );
}
