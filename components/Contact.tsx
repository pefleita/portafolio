"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5354796494";
    const subjectText = form.subject ? `\n*${t("contact.form.projectType")}:* ${form.subject}` : "";
    const emailText = form.email ? `\n*Email:* ${form.email}` : "";
    
    const whatsappMessage = `* ${t("contact.title")} *\n\n*${t("contact.form.name")}:* ${form.name}${emailText}${subjectText}\n\n*${t("contact.form.message")}:*\n${form.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "7rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left: info */}
        <div>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            {"// " + t("contact.title").toLowerCase()}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {t("contact.title").includes("Contact") ? "Let's talk about your" : "Hablemos de tu"}{" "}
            <span className="gradient-text">
              {t("contact.title").includes("Contact") ? "next project" : "próximo proyecto"}
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            {t("contact.subtitle")}
          </p>

          {/* Contact cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <a
              href="mailto:penrrique07@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(108,99,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--accent)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {t("contact.email").toUpperCase()}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                  }}
                >
                  penrrique07@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-enrique-fleita-almira/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#0077B5";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(0,119,181,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#0077B5",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {t("contact.linkedin").toUpperCase()}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                  }}
                >
                  linkedin.com/in/pedro-enrique-fleita-almira
                </div>
              </div>
            </a>

            <a
              href="https://github.com/pefleita"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--text-muted)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--text)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {t("contact.github").toUpperCase()}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                  }}
                >
                  github.com/pefleita
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: "20px",
            border: "1px solid var(--border)",
            padding: "2.5rem",
          }}
        >
          {status === "sent" ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem 0",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(67,233,123,0.15)",
                  border: "1px solid var(--accent-3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "1.5rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                }}
              >
                {t("contact.success.title")}
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                {t("contact.success.description")}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-outline"
                style={{ fontSize: "0.85rem" }}
              >
                {t("contact.success.sendAnother")}
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  marginBottom: "0.25rem",
                }}
              >
                {t("contact.form.title")}
              </h3>

              <div>
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("contact.form.name").toUpperCase()} *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("contact.form.email").toUpperCase()} *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("contact.form.projectType").toUpperCase()}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-input"
                  style={{ cursor: "pointer" }}
                >
                  <option value="">{t("contact.form.projectTypePlaceholder")}</option>
                  <option value={t("contact.form.projectTypes.wordpress")}>{t("contact.form.projectTypes.wordpress")}</option>
                  <option value={t("contact.form.projectTypes.woocommerce")}>{t("contact.form.projectTypes.woocommerce")}</option>
                  <option value={t("contact.form.projectTypes.plugin")}>{t("contact.form.projectTypes.plugin")}</option>
                  <option value={t("contact.form.projectTypes.nextjs")}>{t("contact.form.projectTypes.nextjs")}</option>
                  <option value={t("contact.form.projectTypes.maintenance")}>{t("contact.form.projectTypes.maintenance")}</option>
                  <option value={t("contact.form.projectTypes.other")}>{t("contact.form.projectTypes.other")}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("contact.form.message").toUpperCase()} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  className="form-input"
                  style={{ resize: "vertical", minHeight: "120px" }}
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.message}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: !form.name || !form.message ? 0.5 : 1,
                  cursor: !form.name || !form.message ? "not-allowed" : "pointer",
                }}
              >
                <>
                  {t("contact.form.send")}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
