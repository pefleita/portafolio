"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./ui/NavLink";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const cvFile =
    language === "en" ? "/cv-pedro-fleita-en.pdf" : "/cv-pedro-fleita-es.pdf";

  const navLinks = [
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#habilidades", label: t("nav.skills") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(10,10,15,0.92)] backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container h-16 flex items-center justify-between">
        <Link
          href="#"
          className="font-display font-extrabold text-lg text-text no-underline tracking-[-0.02em]"
        >
          pf<span className="text-accent">.</span>dev
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
          <LanguageSelector />
          <a href={cvFile} download className="btn-primary py-2 px-5 text-sm">
            <Download className="w-4 h-4" />
            {t("nav.cv")}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none cursor-pointer p-2 text-text"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-bg-2 border-t border-border px-6 py-6"
        >
          <div className="container flex flex-col gap-5">
            {navLinks.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <LanguageSelector />
            <a href={cvFile} download className="btn-primary w-fit">
              <Download className="w-4 h-4" />
              {t("nav.downloadCV")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
