import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
});

const interFont = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bold Studios",
  description: "Automate your business with the help of Slack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
