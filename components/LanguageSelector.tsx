"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-1">
      <button
        onClick={() => setLanguage("es")}
        className={`px-2.5 py-1.5 font-mono text-xs font-medium rounded-md cursor-pointer transition-all ${
          language === "es"
            ? "bg-accent text-white"
            : "bg-transparent text-text-muted hover:text-text"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1.5 font-mono text-xs font-medium rounded-md cursor-pointer transition-all ${
          language === "en"
            ? "bg-accent text-white"
            : "bg-transparent text-text-muted hover:text-text"
        }`}
      >
        EN
      </button>
    </div>
  );
}
