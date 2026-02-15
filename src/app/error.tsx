"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/constants/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-section-bg">
      <div className="text-center max-w-2xl">
        {/* 500 Large Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-black mb-4">500</h1>

        {/* Yellow underline effect */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="relative isolate inline-block">
            <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
            <span className="z-10 relative">Something went wrong</span>
          </span>
        </h2>

        <p className="text-muted text-base md:text-lg mb-8 max-w-[60ch] mx-auto">
          We're sorry, but something unexpected happened. Our team has been notified and we're working on it.
        </p>

        {/* Error details in development */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="flex gap-2 items-center text-yellow-300 cursor-pointer"
          >
            <span>Try Again</span>
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

          <a href="/">
            <Button className="text-black bg-white border-3 cursor-pointer">
              <span>Back to Home</span>
            </Button>
          </a>
        </div>

        {/* Support info */}
        <div className="mt-12 pt-8 border-t border-border-light">
          <p className="text-sm text-muted">
            If this problem persists, please{" "}
            <a href={`mailto:${CONTACT.support}`} className="underline hover:text-black">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
