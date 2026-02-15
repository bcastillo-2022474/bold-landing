import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-section-bg">
      <div className="text-center max-w-2xl">
        {/* 404 Large Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-black mb-4">404</h1>

        {/* Yellow underline effect like homepage */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="relative isolate inline-block">
            <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
            <span className="z-10 relative">Page Not Found</span>
          </span>
        </h2>

        <p className="text-muted text-base md:text-lg mb-8 max-w-[60ch] mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
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
        <div className="mt-12 pt-8 border-t border-border-light">
          <p className="text-sm text-muted-light mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/#pricing" className="text-muted hover:text-black hover:underline">
              Pricing
            </Link>
            <Link href="/#what-we-built" className="text-muted hover:text-black hover:underline">
              What We've Built
            </Link>
            <Link href={ROUTES.privacy} className="text-muted hover:text-black hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
