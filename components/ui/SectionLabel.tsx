import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      className="section-label"
      style={{ marginBottom: "1rem" }}
    >
      {children}
    </div>
  );
}
