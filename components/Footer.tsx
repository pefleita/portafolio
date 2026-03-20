"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = 2026;

  const navLinks = [
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#habilidades", label: t("nav.skills") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  const socialLinks = [
    {
      href: "mailto:penrrique07@gmail.com",
      label: "Email",
      icon: Mail,
    },
    {
      href: "https://www.linkedin.com/in/pedro-enrique-fleita-almira/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://github.com/pefleita",
      label: "GitHub",
      icon: Github,
    },
  ];

  return (
    <footer className="border-t border-border bg-bg-2 py-12 px-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="font-display font-extrabold text-lg text-text mb-1 tracking-[-0.02em]">
            pf<span className="text-accent">.</span>dev
          </div>
          <p className="font-mono text-xs text-text-muted tracking-wider">
            © {year} Pedro Fleita — {t("footer.copyright")}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-text-muted no-underline tracking-wider transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-text-muted transition-all hover:border-accent hover:text-text"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
