"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-color-bg/95 backdrop-blur-sm border-b border-color-body/10">
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Neurix Data Solutions"
            width={180}
            height={48}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"
            }`}
            priority
          />
        </Link>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  );
}
