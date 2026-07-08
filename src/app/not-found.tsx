import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Bold Studio's home page to explore custom Slack apps, workflows, and AI agents.",
  robots: {
    index: false,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "404 - Page Not Found",
      item: `${SITE.url}/404`,
    },
  ],
};

export default function NotFound() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          {/* 404 Large Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-black mb-4">
            404
          </h1>

          {/* Yellow underline effect like homepage */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page <span className="text-[#FFD200]">Not Found</span>
          </h2>

          <p className="text-muted text-base md:text-lg mb-8 max-w-[60ch] mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.home}>
              <Button className="flex gap-2 items-center text-yellow-300 cursor-pointer">
                <span>Back to Home</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12.175 9H-9.64664e-06V7H12.175L6.57499 1.4L7.99999 4.76837e-07L16 8L7.99999 16L6.57499 14.6L12.175 9Z"
                    fill="#FFD200"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 pt-8 border-t border-black/5">
            <p className="text-sm text-muted-light mb-4">Popular pages:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link
                href="/#pricing"
                className="text-muted hover:text-black hover:underline"
              >
                Pricing
              </Link>
              <Link
                href="/#what-we-built"
                className="text-muted hover:text-black hover:underline"
              >
                What We've Built
              </Link>
              <Link
                href={ROUTES.privacy}
                className="text-muted hover:text-black hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
