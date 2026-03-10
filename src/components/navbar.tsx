"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { Button } from "@/components/ui/button";
import { NAVIGATION, ROUTES, SITE } from "@/constants/site";
import logo from "../../public/logo.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center px-4 md:px-10 py-5 shadow sticky bg-white top-0 z-50">
      <Link
        href={ROUTES.home}
        className="px-3 py-2 flex text-2xl gap-3 items-center relative isolate"
      >
        <div className="absolute right-5 scale-75 top-1/2 blur shadow w-full h-full">
          <div className="px-3 py-2 flex text-2xl gap-3 items-center relative isolate">
            <div className="w-full h-full absolute bg-white opacity-70"></div>
            <Image src={logo} alt="Bolt Studios Logo" width={50} />
            <span className="font-bold">Bold Studio</span>
          </div>
        </div>
        <Image
          className="z-10"
          src={logo}
          alt={`${SITE.name} Logo`}
          width={50}
        />
        <span className="z-10 font-bold">{SITE.name}</span>
      </Link>

      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden px-2 z-10 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:block px-2">
        <ul className="flex font-inter gap-5 items-center">
          {NAVIGATION.main.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <BookingModal variant="button" label="Start Building" style="black" />
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50 border-t">
          <ul className="flex flex-col font-inter py-4">
            {NAVIGATION.main.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-6 py-3 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <BookingModal
                variant="button"
                label="Start Building"
                style="black"
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
