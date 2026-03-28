import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { HydrationFix } from "@/components/HydrationFix";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="es" className={`scroll-smooth ${plusJakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
