import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Services — Power BI, Alteryx, SQL Server & Oracle Automation",
  description:
    "Comprehensive data automation services including Power BI dashboard automation, Alteryx workflow design, SQL Server optimization, and Oracle PL/SQL solutions tailored to your business.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <line x1="6.5" y1="10" x2="6.5" y2="14" />
          <line x1="17.5" y1="10" x2="17.5" y2="14" />
        </svg>
      ),
      title: "Power BI Dashboard Automation",
      description:
        "Transform raw data into compelling visual stories with automated Power BI dashboards. We design and deploy interactive reporting solutions that deliver real-time insights, eliminate manual report generation, and empower your team to make data-driven decisions with confidence.",
      features: [
        "Interactive dashboards with drill-through capabilities",
        "Real-time data visualization and streaming",
        "KPI tracking with automated alerts",
        "Automated report generation and distribution",
        "Custom DAX measures and calculations",
        "Row-level security implementation",
      ],
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <path d="M4 20L10 4L14 16L20 8" />
          <circle cx="4" cy="20" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="10" cy="4" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="14" cy="16" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="20" cy="8" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: "Alteryx Workflow Automation",
      description:
        "Streamline your data pipelines with intelligent Alteryx workflows that automate the heavy lifting. From data ingestion to final output, we build repeatable, scalable ETL processes that save hours of manual effort and ensure consistent, error-free results every time.",
      features: [
        "End-to-end ETL pipeline automation",
        "Advanced data cleansing and preparation",
        "Repeatable analytic workflow design",
        "Process optimization and performance tuning",
        "Multi-source data blending and integration",
        "Scheduled workflow execution and monitoring",
      ],
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      ),
      title: "SQL Server Solutions",
      description:
        "Maximize the performance, reliability, and scalability of your SQL Server environment. Whether you need database design from the ground up, query optimization for existing workloads, or seamless data migration, our SQL Server expertise ensures your data infrastructure runs at peak efficiency.",
      features: [
        "Database design and architecture optimization",
        "Advanced T-SQL development and stored procedures",
        "Query and index performance tuning",
        "Seamless migration and integration services",
        "SSIS/SSRS package development",
        "High availability and disaster recovery planning",
      ],
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="3" x2="12" y2="8" />
          <line x1="12" y1="16" x2="12" y2="21" />
          <line x1="3" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="21" y2="12" />
        </svg>
      ),
      title: "Oracle SQL Solutions",
      description:
        "Harness the full power of Oracle Database with expert-level PL/SQL development, administration, and optimization services. We help enterprises manage complex data ecosystems, fine-tune query performance, and execute large-scale migrations with minimal downtime and maximum data integrity.",
      features: [
        "Advanced PL/SQL development and packages",
        "Comprehensive database administration",
        "Query optimization and execution plan analysis",
        "Enterprise data management and governance",
        "Oracle Cloud and on-premise migration",
        "Backup, recovery, and security hardening",
      ],
    },
    {
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-8 w-8"
        >
          <rect x="2" y="7" width="6" height="10" rx="1" />
          <rect x="9" y="4" width="6" height="13" rx="1" />
          <rect x="16" y="9" width="6" height="8" rx="1" />
          <path d="M5 7V5a1 1 0 011-1h2" strokeLinecap="round" />
          <path d="M12 4V2a1 1 0 011-1h2" strokeLinecap="round" />
          <path d="M5 17v2" strokeLinecap="round" />
          <path d="M12 17v3" strokeLinecap="round" />
          <path d="M19 17v2" strokeLinecap="round" />
        </svg>
      ),
      title: "RPA & Process Automation",
      description:
        "Design and deliver end-to-end integrated automation solutions using Power Automate and UiPath. We map your existing workflows, identify automation opportunities, and build robust bots that connect your entire technology stack — from legacy systems to modern cloud platforms — eliminating repetitive manual tasks at scale.",
      features: [
        "End-to-end workflow design and automation blueprinting",
        "Power Automate cloud & desktop flows across Microsoft 365",
        "UiPath attended and unattended bot development",
        "Cross-system integration (ERP, CRM, databases, APIs)",
        "Exception handling, logging, and audit trail setup",
        "Ongoing monitoring, maintenance, and optimisation",
      ],
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Accent Bar */}
          <div className="mx-auto mb-6 h-2 w-[130px] bg-color-accent" />
          <h1 className="mb-4 font-serif text-3xl sm:text-4xl font-semibold text-white">
            Our Services
          </h1>
          <p className="text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            Comprehensive data solutions spanning business intelligence, workflow
            automation, and enterprise database management &mdash; tailored to
            your organization&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <Breadcrumbs pageName="Services" />

      {/* ── Services Detail Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const idMap = ["power-bi", "alteryx", "sql-server", "oracle-sql", "rpa"];
              const isRpa = i === 4;
              return (
              <AnimateOnScroll key={service.title} delay={i * 100} className={isRpa ? "lg:col-span-2" : ""}>
              <div
                id={idMap[i]}
                className={`group rounded-xl border bg-color-bg p-8 transition-all hover:shadow-lg hover:-translate-y-1 ${
                  isRpa
                    ? "border-color-primary/30 bg-gradient-to-br from-color-primary/5 to-color-accent/5 hover:border-color-primary/60"
                    : "border-color-body/15 hover:border-color-primary/40"
                }`}
              >
                {/* Icon */}
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-lg text-color-primary ${isRpa ? "bg-color-primary/15" : "bg-color-primary/10"}`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="mb-1 font-serif text-xl sm:text-2xl font-semibold text-color-dark flex flex-wrap items-center gap-3">
                  {service.title}
                  {isRpa && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-color-primary px-3 py-0.5 text-xs font-semibold text-white uppercase tracking-wide">
                      End-to-End Integration
                    </span>
                  )}
                </h2>
                {isRpa && (
                  <p className="mb-3 text-xs font-medium text-color-primary/80 uppercase tracking-wider">
                    Power Automate · UiPath RPA
                  </p>
                )}

                {/* Description */}
                <p className="mb-6 text-sm sm:text-base text-color-body leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <h3 className="mb-3 font-serif text-base font-semibold text-color-dark">
                  Key Features
                </h3>
                <ul className={`space-y-2 ${isRpa ? "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-2" : ""}`}>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-color-body"
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 shrink-0 text-color-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </AnimateOnScroll>
            );})}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-color-bg py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-base text-color-body max-w-xl mx-auto leading-relaxed">
            Whether you need a single dashboard or a full-scale data
            transformation, our team is ready to help. Reach out today for a
            free consultation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-color-body px-8 text-base font-medium text-color-body transition-colors hover:border-color-primary hover:text-color-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
