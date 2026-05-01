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
              <a
                href="/privacy"
                className="text-sm text-color-body hover:text-color-primary transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-sm text-color-body hover:text-color-primary transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
