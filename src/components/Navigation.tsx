"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    href: "/services",
    label: "Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav aria-label="Main navigation" ref={menuRef}>
      {/* Hamburger button – mobile only */}
      <button
        type="button"
        className="md:hidden relative flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-white shadow-md shadow-black/25 ring-1 ring-white/25 hover:brightness-[1.08] hover:ring-[var(--color-accent)]/55 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <span
          className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
            isOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-white rounded-full mt-1.5 transition-all duration-300 ${
            isOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-white rounded-full mt-1.5 transition-all duration-300 ${
            isOpen ? "-translate-y-[13px] -rotate-45" : ""
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
                className={`group relative text-sm font-medium uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm ${
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
      <div
        id="mobile-menu"
        role="menu"
        className={`absolute top-full left-0 right-0 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="mx-4 mt-2 mb-3 rounded-2xl border border-color-body/10 bg-white/95 backdrop-blur-md shadow-xl shadow-color-dark/10 overflow-hidden">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                {i > 0 && <div className="mx-4 h-px bg-color-body/8" />}
                <Link
                  href={link.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 px-5 py-4 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary ${
                    isActive
                      ? "text-color-primary bg-color-primary/5"
                      : "text-color-dark hover:text-color-primary hover:bg-color-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={isActive ? "text-color-primary" : "text-color-body"}>
                    {link.icon}
                  </span>
                  {link.label}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-color-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
