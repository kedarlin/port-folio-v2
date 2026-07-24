import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

import Background from "@/components/effects/background/Background";
import Navbar from "@/components/layout/navbar/Navbar";

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

        <>
          <Navbar />
          {children}
        </>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
