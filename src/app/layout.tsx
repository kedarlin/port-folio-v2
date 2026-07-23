import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

import Background from "@/components/effects/background/Background";

export const metadata: Metadata = {
  title: "Your Name",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Background />

        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
