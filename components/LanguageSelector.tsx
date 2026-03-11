"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "0.25rem",
      }}
    >
      <button
        onClick={() => setLanguage("es")}
        style={{
          background: language === "es" ? "var(--accent)" : "transparent",
          color: language === "es" ? "white" : "var(--text-muted)",
          border: "none",
          borderRadius: "6px",
          padding: "0.35rem 0.65rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        style={{
          background: language === "en" ? "var(--accent)" : "transparent",
          color: language === "en" ? "white" : "var(--text-muted)",
          border: "none",
          borderRadius: "6px",
          padding: "0.35rem 0.65rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        EN
      </button>
    </div>
  );
}
