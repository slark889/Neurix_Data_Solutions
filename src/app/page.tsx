import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Neurix Data Solutions — Automation for Power BI, Alteryx & SQL",
  description:
    "Neurix Data Solutions provides intelligent automation methods for Power BI, Alteryx, SQL Server, and Oracle SQL. Streamline your data workflows and unlock real-time insights.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero Section ── */}
      <section
        className="flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, var(--color-gradient-start) 0%, #172e54 40%, var(--color-gradient-end) 100%)",
        }}
      >
        <div className="flex w-full max-w-3xl flex-col items-center justify-between gap-10 py-20 sm:py-32 px-6 sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-sm text-3xl font-semibold leading-10 tracking-tight text-white font-serif">
              Neurix Data Solutions
            </h1>
            <p className="max-w-md text-lg leading-8 text-white/80">
              Automation methods for Power BI, Alteryx, SQL Server, and Oracle SQL.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-color-primary px-5 text-white transition-colors hover:opacity-90 md:w-[158px]"
              href="/contact"
            >
              Get Started
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-color-body px-5 text-color-body transition-colors hover:border-color-primary hover:text-color-primary md:w-[158px]"
              href="/services"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Highlight Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-2xl sm:text-3xl font-semibold text-color-dark mb-4">
            Our Services
          </h2>
          <p className="text-center text-color-body mb-12 max-w-2xl mx-auto">
            Specialized automation and data solutions to accelerate your business intelligence and database workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Power BI */}
            <AnimateOnScroll delay={0}>
            <div className="group rounded-xl border border-color-body/15 bg-color-bg p-6 transition-all hover:border-color-primary/40 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  
                  className="h-6 w-6 text-color-primary"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <line x1="6.5" y1="10" x2="6.5" y2="14" />
                  <line x1="17.5" y1="10" x2="17.5" y2="14" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Power BI Dashboard Automation
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Streamline your reporting with automated Power BI dashboards that deliver real-time insights and reduce manual effort.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-color-primary hover:underline"
              >
                Learn more
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            </AnimateOnScroll>

            {/* Card 2: Alteryx */}
            <AnimateOnScroll delay={100}>
            <div className="group rounded-xl border border-color-body/15 bg-color-bg p-6 transition-all hover:border-color-primary/40 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  
                  className="h-6 w-6 text-color-primary"
                >
                  <path d="M4 20L10 4L14 16L20 8" />
                  <circle cx="4" cy="20" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="4" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="14" cy="16" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="20" cy="8" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Alteryx Workflow Automation
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Design and deploy repeatable Alteryx workflows that transform raw data into clean, analysis-ready datasets.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-color-primary hover:underline"
              >
                Learn more
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            </AnimateOnScroll>

            {/* Card 3: SQL Server */}
            <AnimateOnScroll delay={200}>
            <div className="group rounded-xl border border-color-body/15 bg-color-bg p-6 transition-all hover:border-color-primary/40 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  
                  className="h-6 w-6 text-color-primary"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                SQL Server Solutions
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Optimize query performance, automate ETL pipelines, and maintain robust SQL Server environments at scale.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-color-primary hover:underline"
              >
                Learn more
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            </AnimateOnScroll>

            {/* Card 4: Oracle SQL */}
            <AnimateOnScroll delay={300}>
            <div className="group rounded-xl border border-color-body/15 bg-color-bg p-6 transition-all hover:border-color-primary/40 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  
                  className="h-6 w-6 text-color-primary"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="3" x2="12" y2="8" />
                  <line x1="12" y1="16" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="8" y2="12" />
                  <line x1="16" y1="12" x2="21" y2="12" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Oracle SQL Solutions
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Leverage advanced PL/SQL, performance tuning, and data migration strategies for enterprise Oracle systems.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-color-primary hover:underline"
              >
                Learn more
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Value Proposition Section ── */}
      <section className="bg-color-bg py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-2xl sm:text-3xl font-semibold text-color-dark mb-4">
            Why Neurix?
          </h2>
          <p className="text-center text-color-body mb-12 max-w-2xl mx-auto">
            We combine deep technical expertise with a practical, results-driven approach to solve your most challenging data problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <AnimateOnScroll delay={0}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7 text-color-primary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Proven Expertise
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Years of hands-on experience across Power BI, Alteryx, SQL Server, and Oracle ecosystems — we know the tools inside and out.
              </p>
            </div>
            </AnimateOnScroll>

            {/* Value 2 */}
            <AnimateOnScroll delay={100}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7 text-color-primary"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Automation-First Mindset
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                We don&apos;t just build reports — we build processes that run themselves. Every solution is designed for repeatability and scale.
              </p>
            </div>

            </AnimateOnScroll>
            {/* Value 3 */}
            <AnimateOnScroll delay={200}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7 text-color-primary"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Client-Centered Partnership
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Your goals are our goals. We collaborate closely to ensure every deliverable drives measurable business value.
              </p>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold text-white">
            Ready to Automate Your Data?
          </h2>
          <p className="mb-8 text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss how Neurix Data Solutions can streamline your BI workflows, optimize your databases, and unlock the full potential of your data.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-8 text-base font-medium text-white transition-colors hover:border-color-primary hover:text-color-primary"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
