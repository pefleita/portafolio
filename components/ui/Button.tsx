import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  style,
  ...props
}: ButtonProps) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.85rem 2rem",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.25s",
    textDecoration: "none",
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "white",
      border: "none",
    },
    outline: {
      background: "transparent",
      color: "var(--text)",
      border: "1px solid var(--border-light)",
    },
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
