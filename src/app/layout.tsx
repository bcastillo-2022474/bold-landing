import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE, META } from "@/constants/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
});

const interFont = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: META.keywords,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: META.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} - Slack Automation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [META.ogImage],
  },
  icons: {
    icon: META.favicon,
    shortcut: META.favicon,
    apple: META.appleTouchIcon,
  },
  manifest: "/site.webmanifest",
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
