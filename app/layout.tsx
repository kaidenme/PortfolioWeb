// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaiden Nguyen | Software Engineer",
  description: "Portfolio of Kaiden Nguyen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}