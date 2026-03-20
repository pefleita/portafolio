import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { HydrationFix } from "@/components/HydrationFix";

export const metadata: Metadata = {
  title: "Pedro Fleita — WordPress Developer & Full Stack",
  description:
    "Professional portfolio of Pedro Fleita, developer specialized in WordPress, PHP, Next.js and custom web solutions.",
  keywords: [
    "wordpress developer",
    "php developer",
    "nextjs",
    "web developer",
    "portfolio",
    "freelance",
  ],
  authors: [{ name: "Pedro Fleita" }],
  openGraph: {
    title: "Pedro Fleita — WordPress Developer & Full Stack",
    description:
      "Professional web development with WordPress, PHP and modern technologies.",
    type: "website",
  },
  verification:{
    google: "IxdyO4MRb8pR4oLt0lHGtPYr1Gs0RrJ14Uld2EDiUwI"
  },
};

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <HydrationFix>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {children}
    </HydrationFix>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
