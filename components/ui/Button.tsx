import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-display font-semibold text-sm tracking-wider rounded-lg cursor-pointer transition-all duration-300 no-underline";

  const variants = {
    primary:
      "bg-accent text-white border-none hover:bg-[#7c73ff] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--color-accent-glow)]",
    outline:
      "bg-transparent text-text border border-border-light hover:border-accent hover:text-accent hover:-translate-y-0.5",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
