"use client";
import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";

type Language = "es" | "en";

export type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import esTranslations from "../messages/es.json";
import enTranslations from "../messages/en.json";

const translations = {
  es: esTranslations,
  en: enTranslations,
};

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let value: unknown = obj;
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof value === "string" ? value : path;
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  
  const stored = localStorage.getItem("language") as Language;
  if (stored && (stored === "es" || stored === "en")) {
    return stored;
  }
  
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = useMemo(() => (key: string): string => {
    return getNestedValue(translations[language] as Record<string, unknown>, key);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
