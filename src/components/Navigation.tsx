"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main navigation">
      {/* Hamburger button – visible on mobile */}
      <button
        type="button"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md border border-color-body/30 hover:border-color-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <span
          className={`block h-0.5 w-5 bg-color-body transition-transform duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-color-body transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-color-body transition-transform duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-color-body uppercase tracking-wider hover:text-color-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-color-bg border-t border-color-body/10 shadow-lg md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-6 py-4 text-base font-medium text-color-body hover:text-color-primary hover:bg-color-primary/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
