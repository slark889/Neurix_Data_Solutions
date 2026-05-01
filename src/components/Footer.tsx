import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-color-body/10 bg-color-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-color-body">
          &copy; {currentYear} Neurix Data Solutions. All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-sm text-color-body hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm text-color-body hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-color-body hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-color-body hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm text-color-body hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-color-body hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
