import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { META, SITE, SOCIAL } from "@/constants/site";
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
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  robots: META.robots,
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
        alt: `${SITE.name} - Custom Slack Apps & Automation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SOCIAL.twitterHandle,
    creator: SOCIAL.twitterHandle,
    title: SITE.title,
    description: SITE.description,
    images: [META.ogImage],
  },
  icons: {
    icon: [
      { url: META.favicon, sizes: "any" },
      { url: META.icons.icon192, sizes: "192x192", type: "image/png" },
      { url: META.icons.icon512, sizes: "512x512", type: "image/png" },
    ],
    shortcut: META.favicon,
    apple: { url: META.appleTouchIcon, sizes: "180x180" },
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
