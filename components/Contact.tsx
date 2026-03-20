"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5354796494";
    const subjectText = form.subject
      ? `\n*${t("contact.form.projectType")}:* ${form.subject}`
      : "";
    const emailText = form.email ? `\n*Email:* ${form.email}` : "";

    const whatsappMessage = `* ${t("contact.title")} *\n\n*${t("contact.form.name")}:* ${form.name}${emailText}${subjectText}\n\n*${t("contact.form.message")}:*\n${form.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contacto" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <div className="section-label mb-4">{"// " + t("contact.title").toLowerCase()}</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] leading-tight mb-5">
            {t("contact.letstalk")}{" "}
            <span className="gradient-text">{t("contact.nextproject")}</span>
          </h2>

          <p className="text-text-muted leading-relaxed mb-10 text-base">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <a
              href="mailto:penrrique07@gmail.com"
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl text-inherit no-underline transition-all hover:border-accent hover:translate-x-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(108,99,255,0.15)] flex items-center justify-center shrink-0 text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-text-muted tracking-widest mb-0.5">
                  {t("contact.email").toUpperCase()}
                </div>
                <div className="font-display font-semibold text-sm text-text">
                  penrrique07@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-enrique-fleita-almira/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl text-inherit no-underline transition-all hover:border-[#0077B5] hover:translate-x-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,119,181,0.15)] flex items-center justify-center shrink-0 text-[#0077B5]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-text-muted tracking-widest mb-0.5">
                  {t("contact.linkedin").toUpperCase()}
                </div>
                <div className="font-display font-semibold text-sm text-text">
                  linkedin.com/in/pedro-enrique-fleita-almira
                </div>
              </div>
            </a>

            <a
              href="https://github.com/pefleita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl text-inherit no-underline transition-all hover:border-text-muted hover:translate-x-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0 text-text">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-text-muted tracking-widest mb-0.5">
                  {t("contact.github").toUpperCase()}
                </div>
                <div className="font-display font-semibold text-sm text-text">
                  github.com/pefleita
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-6 md:p-10">
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[rgba(67,233,123,0.15)] border border-accent-3 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-accent-3" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {t("contact.success.title")}
              </h3>
              <p className="text-text-muted mb-6">
                {t("contact.success.description")}
              </p>
              <button onClick={() => setStatus("idle")} className="btn-outline text-sm">
                {t("contact.success.sendAnother")}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <h3 className="font-display font-bold text-xl mb-1">
                {t("contact.form.title")}
              </h3>

              <div>
                <label htmlFor="name" className="font-mono text-xs text-text-muted tracking-widest block mb-2">
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
                <label htmlFor="email" className="font-mono text-xs text-text-muted tracking-widest block mb-2">
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
                <label htmlFor="subject" className="font-mono text-xs text-text-muted tracking-widest block mb-2">
                  {t("contact.form.projectType").toUpperCase()}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-input cursor-pointer"
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
                <label htmlFor="message" className="font-mono text-xs text-text-muted tracking-widest block mb-2">
                  {t("contact.form.message").toUpperCase()} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  className="form-input resize-y min-h-[120px]"
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.message}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("contact.form.send")}
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
