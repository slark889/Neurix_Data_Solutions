import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Neurix Data Solutions",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="mb-2 font-serif text-6xl font-semibold text-color-primary">
        404
      </h1>
      <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-base text-color-body leading-relaxed">
        The page you are looking for does not exist or has been moved. Please
        check the URL or navigate back to the home page.
      </p>
      <Link
        href="/"
        className="inline-flex h-12 items-center justify-center rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
