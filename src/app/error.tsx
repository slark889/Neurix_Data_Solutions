"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="mb-4 font-serif text-3xl sm:text-4xl font-semibold text-color-dark">
        Something went wrong
      </h1>
      <p className="mb-8 max-w-md text-base text-color-body leading-relaxed">
        An unexpected error occurred. Please try again, or return to the home
        page.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center justify-center rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full border border-solid border-color-body px-8 text-base font-medium text-color-body transition-colors hover:border-color-primary hover:text-color-primary"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
