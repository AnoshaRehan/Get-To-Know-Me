import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://anosharehan.netlify.app";
const description =
  "Backend & full-stack engineer with 4+ years of production experience. Recently completed a Master's in Computer Science (AI concentration). Open to work and willing to relocate.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anosha Rehan — Software Engineer",
    template: "%s | Anosha Rehan",
  },
  description,
  authors: [{ name: "Anosha Rehan", url: siteUrl }],
  creator: "Anosha Rehan",
  keywords: [
    "Anosha Rehan",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Python",
    "Django",
    "TypeScript",
    "React",
    "California",
    "Texas",
    "Open to Relocation",
    "RAG",
    "LLM",
    "Portfolio",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anosha Rehan",
    title: "Anosha Rehan — Software Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anosha Rehan — Software Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
