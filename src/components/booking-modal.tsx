"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type BookingModalProps = {
  variant?: "button" | "link";
  label?: string;
  style?: "yellow" | "black" | "black-white" | "outline" | "outline-light";
  className?: string;
};

const TALLY_URL =
  "https://tally.so/embed/44GD1d?alignLeft=1&hideTitle=1&transparentBackground=1";

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.99999 20C1.44999 20 0.979157 19.8042 0.58749 19.4125C0.195824 19.0208 -9.76585e-06 18.55 -9.76585e-06 18V4C-9.76585e-06 3.45 0.195824 2.97917 0.58749 2.5875C0.979157 2.19583 1.44999 2 1.99999 2H2.99999V-4.76837e-07H4.99999V2H13V-4.76837e-07H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H1.99999ZM1.99999 18H16V8H1.99999V18ZM1.99999 6H16V4H1.99999V6ZM1.99999 6V4V6Z"
        fill={color}
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookingModal({
  variant = "button",
  label = "Book a Call",
  style = "yellow",
  className = "",
}: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const buttonClass =
    style === "black"
      ? "bg-black text-yellow-300 hover:bg-gray-800"
      : style === "black-white"
        ? "bg-black text-white hover:bg-gray-800"
        : style === "outline"
          ? "border-2 border-black text-black hover:bg-black hover:text-white"
          : style === "outline-light"
            ? "bg-white text-black border border-black/10 hover:border-black/30"
            : "bg-yellow-300 text-black hover:bg-yellow-400";

  const iconColor =
    style === "black" || style === "black-white" ? "#FFD200" : "black";

  return (
    <>
      {variant === "button" ? (
        <Button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`rounded-full px-5 py-2 cursor-pointer flex gap-3 items-center z-10 text-sm md:text-base font-semibold ${buttonClass} ${className}`}
        >
          <span>{label}</span>
          <CalendarIcon color={iconColor} />
        </Button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`rounded-full px-5 py-2 cursor-pointer flex gap-3 items-center z-10 text-sm md:text-base font-semibold ${buttonClass} ${className}`}
        >
          <span>{label}</span>
          <CalendarIcon color={iconColor} />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* biome-ignore lint/a11y/noStaticElementInteractions: backdrop overlay pattern */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            role="presentation"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white rounded-2xl md:rounded-3xl w-[95vw] h-[90vh] max-w-5xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            <iframe
              src={TALLY_URL}
              frameBorder="0"
              title="Contact form"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
