import Link from "next/link";

interface BreadcrumbsProps {
  pageName: string;
}

export default function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-color-bg border-b border-color-body/10">
      <div className="mx-auto max-w-6xl px-6 py-3">
        <ol className="flex items-center gap-2 text-sm text-color-body">
          <li>
            <Link
              href="/"
              className="hover:text-color-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-primary focus-visible:rounded-sm"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-color-body/50">
            ›
          </li>
          <li className="text-color-dark font-medium" aria-current="page">
            {pageName}
          </li>
        </ol>
      </div>
    </nav>
  );
}
