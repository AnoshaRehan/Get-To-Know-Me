import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anosha Rehan - Software Engineer",
  description: "Software Engineer with 4+ years of backend and full-stack experience.",
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
