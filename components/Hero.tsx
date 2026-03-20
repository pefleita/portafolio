"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { t, language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const deletingRef = useRef(false);

  const roles = useMemo(
    () => [
      t("hero.roles.wordpress"),
      t("hero.roles.php"),
      t("hero.roles.fullstack"),
      t("hero.roles.nextjs"),
    ],
    [t]
  );

  useEffect(() => {
    const full = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length + 1)),
        80
      );
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
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,107,107,0.08),transparent_70%)] pointer-events-none" />

      <div className="absolute inset-0 bg-[size:60px_60px] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="container relative z-10">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent-3 inline-block animate-[pulse-glow_2s_infinite]" />
          <span className="font-mono text-xs text-text-muted tracking-wider">
            {t("hero.available")}
          </span>
        </div>

        <h1 className="animate-fade-up delay-100 font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 max-w-[900px] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {t("hero.greeting")}{" "}
          <span className="gradient-text">Pedro Fleita</span>
          <br />
          <span className="text-text-muted font-bold text-4xl sm:text-5xl md:text-6xl">
            {displayed}
            <span className="border-r-[3px] border-accent ml-0.5 animate-[blink_1s_step-end_infinite]" />
          </span>
        </h1>

        <p className="animate-fade-up delay-200 text-base sm:text-lg md:text-xl text-text-muted max-w-[580px] mb-12 leading-relaxed">
          {t("hero.description")}
        </p>

        <div className="animate-fade-up delay-300 flex gap-4 flex-wrap mb-16">
          <a href="#proyectos" className="btn-primary">
            {t("hero.viewProjects")}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contacto" className="btn-outline">
            {t("hero.letsTalk")}
          </a>
          <a href={cvFile} download className="btn-outline">
            <Download className="w-4 h-4" />
            {t("hero.downloadCV")}
          </a>
        </div>

        <div className="animate-fade-up delay-400 flex gap-10 flex-wrap">
          {[
            { value: "10+", label: t("hero.years") },
            { value: "34+", label: t("hero.projects") },
            { value: "27+", label: t("hero.clients") },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-extrabold text-4xl text-text leading-none">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-text-muted tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent animate-fade-in" />
        <span className="font-mono text-xs tracking-[0.15em] text-text-muted">
          {t("hero.scroll")}
        </span>
      </div>
    </section>
  );
}
