import type { Metadata } from "next";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Neurix Data Solutions — Our Story & Mission",
  description:
    "Learn about Neurix Data Solutions — our mission, team, and the values that drive us to deliver intelligent data automation for Power BI, Alteryx, SQL Server, and Oracle SQL.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 font-serif text-3xl sm:text-4xl font-semibold text-white">
            About Neurix
          </h1>
          <p className="text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            We are a team of data professionals dedicated to transforming how
            businesses harness the power of their data through intelligent
            automation and modern analytics.
          </p>
        </div>
      </section>

      {/* ── Mission / Company Story Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div>
              <h2 className="mb-5 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
                Our Story
              </h2>
              <p className="mb-4 text-sm sm:text-base text-color-body leading-relaxed">
                Neurix Data Solutions was founded with a single, clear mission:
                to make enterprise-grade data automation accessible to
                organizations of every size. In an era where data drives every
                decision, we saw too many teams spending valuable hours on
                manual reporting, fragile spreadsheet workflows, and repetitive
                data preparation tasks.
              </p>
              <p className="mb-4 text-sm sm:text-base text-color-body leading-relaxed">
                We set out to change that. By combining deep technical expertise
                across Power BI, Alteryx, SQL Server, and Oracle SQL, Neurix
                delivers automation solutions that eliminate busywork, reduce
                errors, and free your team to focus on what matters most:
                uncovering insights that drive real business outcomes.
              </p>
              <p className="text-sm sm:text-base text-color-body leading-relaxed">
                Today, we partner with businesses across industries to design,
                build, and maintain data automation pipelines that are reliable,
                scalable, and built to last.
              </p>
            </div>

            {/* Right: Mission Statement */}
            <div className="rounded-xl border border-color-primary/20 bg-color-bg p-8 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-color-primary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-color-dark">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-color-body leading-relaxed">
                To empower every organization with intelligent data automation —
                turning complex data challenges into streamlined, repeatable
                solutions that save time, reduce costs, and unlock new
                opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values / What Sets Neurix Apart Section ── */}
      <section className="bg-color-bg py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-2xl sm:text-3xl font-semibold text-color-dark mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-center text-color-body mb-12 max-w-2xl mx-auto">
            Our approach is built on principles that ensure every engagement
            delivers lasting value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <AnimateOnScroll delay={0}>
            <div className="group rounded-xl border border-color-body/15 bg-white p-8 transition-all hover:border-color-primary/40 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-color-primary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Deep Technical Mastery
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                We don&apos;t just use the tools — we master them. Our team
                brings years of hands-on experience across the Microsoft data
                stack, Alteryx, and Oracle, enabling us to solve challenges
                that generic consultants simply can&apos;t.
              </p>
            </div>
            </AnimateOnScroll>

            {/* Value 2 */}
            <AnimateOnScroll delay={100}>
            <div className="group rounded-xl border border-color-body/15 bg-white p-8 transition-all hover:border-color-primary/40 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-color-primary"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Automation by Default
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Every deliverable we produce is designed to run on its own.
                From scheduled report refreshes to self-healing ETL pipelines,
                we embed automation into the DNA of every solution so your team
                can stop babysitting data and start acting on it.
              </p>
            </div>
            </AnimateOnScroll>

            {/* Value 3 */}
            <AnimateOnScroll delay={200}>
            <div className="group rounded-xl border border-color-body/15 bg-white p-8 transition-all hover:border-color-primary/40 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-color-primary"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                True Partnership
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                We embed ourselves in your team, learn your business, and treat
                your goals as our own. The result is solutions that fit your
                reality — not a one-size-fits-all template that creates more
                problems than it solves.
              </p>
            </div>
            </AnimateOnScroll>

            {/* Value 4 */}
            <AnimateOnScroll delay={300}>
            <div className="group rounded-xl border border-color-body/15 bg-white p-8 transition-all hover:border-color-primary/40 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6 text-color-primary"
                >
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
                Scalable by Design
              </h3>
              <p className="text-sm text-color-body leading-relaxed">
                Whether you&apos;re a growing startup or a Fortune 500
                enterprise, our solutions are architected to scale with your
                data. We plan for tomorrow&apos;s volume today, so you never
                outgrow the systems we build together.
              </p>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Team Introduction Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-2xl sm:text-3xl font-semibold text-color-dark mb-4">
            Meet the Team
          </h2>
          <p className="text-center text-color-body mb-12 max-w-2xl mx-auto">
            Our diverse team of data engineers, analysts, and automation
            specialists brings together decades of combined experience across
            industries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-10 w-10 text-color-primary"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="mb-1 font-serif text-lg font-semibold text-color-dark">
                Alex Chen
              </h3>
              <p className="mb-3 text-sm text-color-primary font-medium">
                Lead Data Engineer
              </p>
              <p className="text-xs sm:text-sm text-color-body leading-relaxed">
                Power BI &amp; SQL Server specialist with 12+ years of
                enterprise data architecture experience.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-10 w-10 text-color-primary"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="mb-1 font-serif text-lg font-semibold text-color-dark">
                Sarah Mitchell
              </h3>
              <p className="mb-3 text-sm text-color-primary font-medium">
                Alteryx Architect
              </p>
              <p className="text-xs sm:text-sm text-color-body leading-relaxed">
                Certified Alteryx expert specializing in end-to-end workflow
                automation and analytics process design.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-10 w-10 text-color-primary"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="mb-1 font-serif text-lg font-semibold text-color-dark">
                David Okonkwo
              </h3>
              <p className="mb-3 text-sm text-color-primary font-medium">
                Oracle Solutions Lead
              </p>
              <p className="text-xs sm:text-sm text-color-body leading-relaxed">
                Oracle Certified Professional with deep PL/SQL and enterprise
                database administration expertise.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="group text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-color-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-10 w-10 text-color-primary"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="mb-1 font-serif text-lg font-semibold text-color-dark">
                Maria Santos
              </h3>
              <p className="mb-3 text-sm text-color-primary font-medium">
                Data Visualization Lead
              </p>
              <p className="text-xs sm:text-sm text-color-body leading-relaxed">
                Expert in crafting compelling data narratives through
                interactive dashboards and visual analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mb-8 text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re looking to automate a single report or
            transform your entire data infrastructure, we&apos;re ready to
            help. Reach out and discover what Neurix can do for you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
            >
              Get in Touch
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
