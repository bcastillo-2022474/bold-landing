"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAVIGATION, ROUTES, SITE } from "@/constants/site";
import logo from "../../public/logo.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center px-4 md:px-10 py-5 sticky bg-white top-0 z-50 border-b border-black/5">
      <Link href={ROUTES.home} className="flex text-xl gap-2.5 items-center">
        <Image
          src={logo}
          alt={`${SITE.name} Logo`}
          width={40}
          height={40}
          className="shrink-0"
        />
        <span className="font-bold">{SITE.name}</span>
      </Link>

      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden"
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
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
          {NAVIGATION.main.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#book-a-call"
            className="rounded-full px-5 py-2 bg-black text-yellow-300 font-semibold text-sm hover:bg-gray-800 transition-colors"
          >
            Book a Call
          </a>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white md:hidden z-50 border-t border-black/5">
          <ul className="flex flex-col py-4">
            {NAVIGATION.main.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-6 py-3 text-sm text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-2 pb-4">
              <a
                href="/#book-a-call"
                className="inline-block rounded-full px-5 py-2 bg-black text-yellow-300 font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
