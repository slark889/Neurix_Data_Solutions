"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-color-primary"
                    : "text-color-body hover:text-color-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-color-primary transition-all duration-300 ease-out ${
                    isActive ? "w-[80%]" : "w-0 group-hover:w-[80%]"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-full left-6 right-6 bg-color-bg border-t border-color-body/10 shadow-lg md:hidden"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block px-6 py-4 text-base font-medium transition-colors ${
                    isActive
                      ? "text-color-primary bg-color-primary/5"
                      : "text-color-body hover:text-color-primary hover:bg-color-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
