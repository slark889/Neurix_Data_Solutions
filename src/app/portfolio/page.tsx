"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import charts with SSR disabled to avoid React 19 compatibility issues
const RevenueChart = dynamic(
  () => import("./components/Charts").then((mod) => mod.RevenueChart),
  { ssr: false, loading: () => <div className="h-[400px] w-full animate-pulse bg-gray-100 rounded-lg" /> }
);

const KPIChart = dynamic(
  () => import("./components/Charts").then((mod) => mod.KPIChart),
  { ssr: false, loading: () => <div className="h-[400px] w-full animate-pulse bg-gray-100 rounded-lg" /> }
);

const BudgetChart = dynamic(
  () => import("./components/Charts").then((mod) => mod.BudgetChart),
  { ssr: false, loading: () => <div className="h-[300px] w-[300px] animate-pulse bg-gray-100 rounded-lg" /> }
);

// Accessible data tables for screen readers
function RevenueDataTable() {
  const data = [
    { month: "January", Electronics: "$22,000", Software: "$15,000", Services: "$13,000", Hardware: "$10,000" },
    { month: "February", Electronics: "$24,000", Software: "$16,000", Services: "$14,000", Hardware: "$10,500" },
    { month: "March", Electronics: "$26,000", Software: "$17,000", Services: "$15,000", Hardware: "$11,000" },
    { month: "April", Electronics: "$24,000", Software: "$16,000", Services: "$14,000", Hardware: "$10,000" },
    { month: "May", Electronics: "$26,000", Software: "$18,000", Services: "$15,000", Hardware: "$11,000" },
    { month: "June", Electronics: "$26,000", Software: "$18,000", Services: "$18,000", Hardware: "$11,500" },
  ];

  return (
    <table className="sr-only">
      <caption>Monthly revenue by category (Jan-Jun 2025) - Sample data</caption>
      <thead>
        <tr>
          <th scope="col">Month</th>
          <th scope="col">Electronics</th>
          <th scope="col">Software</th>
          <th scope="col">Services</th>
          <th scope="col">Hardware</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.month}>
            <td>{row.month}</td>
            <td>{row.Electronics}</td>
            <td>{row.Software}</td>
            <td>{row.Services}</td>
            <td>{row.Hardware}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function KPIDataTable() {
  const data = [
    { week: "Week 1", target: 100, actual: 88 },
    { week: "Week 2", target: 100, actual: 95 },
    { week: "Week 3", target: 100, actual: 105 },
    { week: "Week 4", target: 100, actual: 112 },
    { week: "Week 5", target: 100, actual: 98 },
    { week: "Week 6", target: 100, actual: 115 },
    { week: "Week 7", target: 100, actual: 92 },
    { week: "Week 8", target: 100, actual: 108 },
  ];

  return (
    <table className="sr-only">
      <caption>Weekly KPI target vs actual (sample data)</caption>
      <thead>
        <tr>
          <th scope="col">Week</th>
          <th scope="col">Target</th>
          <th scope="col">Actual</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.week}>
            <td>{row.week}</td>
            <td>{row.target} units</td>
            <td>{row.actual} units</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function BudgetDataTable() {
  return (
    <table className="sr-only">
      <caption>Budget allocation - Sample data</caption>
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Allocation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Operations</td><td>35%</td></tr>
        <tr><td>Marketing</td><td>25%</td></tr>
        <tr><td>R&D</td><td>20%</td></tr>
        <tr><td>HR</td><td>20%</td></tr>
      </tbody>
    </table>
  );
}

const categoryTotals = {
  Electronics: 142000,
  Software: 98000,
  Services: 87000,
  Hardware: 64000,
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Portfolio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-color-accent">
            Explore our data solutions success stories and performance metrics. All data shown is fictional sample data for demonstration purposes.
          </p>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="mx-auto max-w-6xl px-6 py-12" aria-label="Key Performance Indicators">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-color-body/10 bg-white p-6 text-center shadow-md">
            <p className="mb-2 text-sm uppercase tracking-wider text-color-body">Total Revenue</p>
            <p className="text-3xl font-bold text-color-primary">$391K</p>
            <p className="mt-2 text-xs text-color-body">Jan-Jun 2025 (Sample)</p>
          </div>
          <div className="rounded-lg border border-color-body/10 bg-white p-6 text-center shadow-md">
            <p className="mb-2 text-sm uppercase tracking-wider text-color-body">YoY Growth</p>
            <p className="text-3xl font-bold text-color-primary">+18.5%</p>
            <p className="mt-2 text-xs text-color-body">vs. Previous Year (Sample)</p>
          </div>
          <div className="rounded-lg border border-color-body/10 bg-white p-6 text-center shadow-md">
            <p className="mb-2 text-sm uppercase tracking-wider text-color-body">Avg Deal Size</p>
            <p className="text-3xl font-bold text-color-primary">$12.2K</p>
            <p className="mt-2 text-xs text-color-body">Per Project (Sample)</p>
          </div>
        </div>
      </section>

      {/* Revenue Bar Chart */}
      <section className="mx-auto max-w-6xl px-6 py-12" aria-labelledby="revenue-chart-title">
        <h2 id="revenue-chart-title" className="mb-8 text-center text-2xl font-bold text-color-dark">
          Monthly Revenue by Category (Jan–Jun 2025)
        </h2>
        <RevenueDataTable />
        <RevenueChart />
        <p className="mt-4 text-center text-sm text-color-body">
          <strong>Sample data:</strong> Electronics ${categoryTotals.Electronics.toLocaleString()}, Software ${categoryTotals.Software.toLocaleString()}, Services ${categoryTotals.Services.toLocaleString()}, Hardware ${categoryTotals.Hardware.toLocaleString()}
        </p>
      </section>

      {/* KPI Line Chart */}
      <section className="mx-auto max-w-6xl px-6 py-12 bg-color-bg" aria-labelledby="kpi-chart-title">
        <h2 id="kpi-chart-title" className="mb-8 text-center text-2xl font-bold text-color-dark">
          Weekly KPI: Target vs Actual
        </h2>
        <KPIDataTable />
        <KPIChart />
        <p className="mt-4 text-center text-sm text-color-body">
          <strong>Sample data:</strong> Target = 100 units/week. Actual ranges from 88 to 115 units (±15%)
        </p>
      </section>

      {/* Budget Donut Chart */}
      <section className="mx-auto max-w-6xl px-6 py-12" aria-labelledby="budget-chart-title">
        <h2 id="budget-chart-title" className="mb-8 text-center text-2xl font-bold text-color-dark">
          Budget Allocation
        </h2>
        <BudgetDataTable />
        <BudgetChart />
        <p className="mt-8 text-center text-sm text-color-body">
          <strong>Sample data:</strong> Operations 35%, Marketing 25%, R&D 20%, HR 20%
        </p>
      </section>

      {/* Alteryx ETL Flow Diagram */}
      <section className="mx-auto max-w-6xl px-6 py-12" aria-labelledby="etl-diagram-title">
        <h2 id="etl-diagram-title" className="mb-8 text-center text-2xl font-bold text-color-dark">
          Our ETL Data Pipeline (Alteryx)
        </h2>
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 800 200"
            className="mx-auto h-auto w-full max-w-4xl"
            role="img"
            aria-label="Alteryx ETL flow diagram showing Input to Cleanse to Join to Aggregate to Output"
          >
            <title>Alteryx ETL Flow Diagram</title>
            <desc>A workflow diagram showing five steps: Input → Cleanse → Join → Aggregate → Output</desc>

            {/* Input */}
            <g transform="translate(30, 50)">
              <rect x="0" y="0" width="100" height="80" rx="8" fill="#157a9e" />
              <text x="50" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                Input
              </text>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">
                Data Ingest
              </text>
            </g>

            {/* Arrow 1 */}
            <g transform="translate(145, 80)">
              <polygon points="0,-5 10,0 0,5" fill="#172e54" />
              <line x1="10" y1="0" x2="45" y2="0" stroke="#172e54" strokeWidth="2" />
            </g>

            {/* Cleanse */}
            <g transform="translate(200, 50)">
              <rect x="0" y="0" width="100" height="80" rx="8" fill="#4bc9e8" />
              <text x="50" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                Cleanse
              </text>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">
                Transform
              </text>
            </g>

            {/* Arrow 2 */}
            <g transform="translate(315, 80)">
              <polygon points="0,-5 10,0 0,5" fill="#172e54" />
              <line x1="10" y1="0" x2="45" y2="0" stroke="#172e54" strokeWidth="2" />
            </g>

            {/* Join */}
            <g transform="translate(370, 50)">
              <rect x="0" y="0" width="100" height="80" rx="8" fill="#172e54" />
              <text x="50" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                Join
              </text>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">
                Merge Data
              </text>
            </g>

            {/* Arrow 3 */}
            <g transform="translate(485, 80)">
              <polygon points="0,-5 10,0 0,5" fill="#172e54" />
              <line x1="10" y1="0" x2="45" y2="0" stroke="#172e54" strokeWidth="2" />
            </g>

            {/* Aggregate */}
            <g transform="translate(540, 50)">
              <rect x="0" y="0" width="100" height="80" rx="8" fill="#6b7280" />
              <text x="50" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                Aggregate
              </text>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">
                Summarize
              </text>
            </g>

            {/* Arrow 4 */}
            <g transform="translate(655, 80)">
              <polygon points="0,-5 10,0 0,5" fill="#172e54" />
              <line x1="10" y1="0" x2="45" y2="0" stroke="#172e54" strokeWidth="2" />
            </g>

            {/* Output */}
            <g transform="translate(710, 50)">
              <rect x="0" y="0" width="100" height="80" rx="8" fill="#157a9e" />
              <text x="50" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                Output
              </text>
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">
                Insights
              </text>
            </g>
          </svg>
        </div>
        <p className="mt-4 text-center text-sm text-color-body">
          Our Alteryx-powered ETL pipeline transforms raw data into actionable insights through five key stages.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-6 text-2xl font-bold text-color-dark">
          Ready to transform your data?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-color-body">
          Let our expertise in data engineering and analytics drive your business forward.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-color-primary px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}