import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-color-bg/95 backdrop-blur-sm border-b border-color-body/10">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold font-serif text-color-dark whitespace-nowrap"
        >
          Neurix<span className="text-color-primary font-extrabold">DS</span>
        </Link>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  );
}
