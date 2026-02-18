import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundFX from "@/components/BackgroundFX";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Priyatam Dash | Full-Stack & AI Systems Engineer",
    template: "%s | Samuel Priyatam Dash",
  },
  description:
    "Samuel Priyatam Dash - Full-Stack & AI Systems Engineer specializing in scalable cloud architectures, AI-driven systems, DevOps, and production-grade web platforms.",
  keywords: [
    "Samuel Priyatam Dash",
    "Full Stack Engineer",
    "AI Systems Engineer",
    "Cloud Architect",
    "DevOps Engineer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "System Design",
    "Portfolio",
  ],
  authors: [{ name: "Samuel Priyatam Dash" }],
  creator: "Samuel Priyatam Dash",
  metadataBase: new URL("https://samuelpriyatam.com"),
  openGraph: {
    title: "Samuel Priyatam Dash | Full-Stack & AI Systems Engineer",
    description:
      "Building production-grade intelligent systems with AI, cloud architecture, and scalable full-stack engineering.",
    url: "https://samuelpriyatam.com",
    siteName: "Samuel Priyatam Portfolio",
    images: [
      {
        url: "/profile-picture-iit-kgp.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Priyatam Dash",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Priyatam Dash | Full-Stack & AI Systems Engineer",
    description:
      "Architecting scalable cloud systems and AI-driven platforms.",
    images: ["/profile-picture-iit-kgp.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative selection:bg-purple-500/30 selection:text-current`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-6 right-6 z-[9999]">
            <ThemeToggle />
          </div>
          <BackgroundFX />
          <Cursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

