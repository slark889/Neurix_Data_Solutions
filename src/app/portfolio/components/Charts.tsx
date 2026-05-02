"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data - clearly labelled as fictional
const revenueData = [
  { month: "Jan", Electronics: 22000, Software: 15000, Services: 13000, Hardware: 10000 },
  { month: "Feb", Electronics: 24000, Software: 16000, Services: 14000, Hardware: 10500 },
  { month: "Mar", Electronics: 26000, Software: 17000, Services: 15000, Hardware: 11000 },
  { month: "Apr", Electronics: 24000, Software: 16000, Services: 14000, Hardware: 10000 },
  { month: "May", Electronics: 26000, Software: 18000, Services: 15000, Hardware: 11000 },
  { month: "Jun", Electronics: 26000, Software: 18000, Services: 18000, Hardware: 11500 },
];

const categoryTotals = {
  Electronics: 142000,
  Software: 98000,
  Services: 87000,
  Hardware: 64000,
};

const kpiData = [
  { week: "W1", target: 100, actual: 88 },
  { week: "W2", target: 100, actual: 95 },
  { week: "W3", target: 100, actual: 105 },
  { week: "W4", target: 100, actual: 112 },
  { week: "W5", target: 100, actual: 98 },
  { week: "W6", target: 100, actual: 115 },
  { week: "W7", target: 100, actual: 92 },
  { week: "W8", target: 100, actual: 108 },
];

const budgetData = [
  { name: "Operations", value: 35, color: "#157a9e" },
  { name: "Marketing", value: 25, color: "#4bc9e8" },
  { name: "R&D", value: 20, color: "#172e54" },
  { name: "HR", value: 20, color: "#6b7280" },
];

export function RevenueChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-body)" opacity={0.2} />
          <XAxis dataKey="month" stroke="var(--color-body)" />
          <YAxis stroke="var(--color-body)" tickFormatter={(value) => `$${(Number(value) / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value) => {
              const numValue = typeof value === "number" ? value : 0;
              return [`$${numValue.toLocaleString()}`, ""];
            }}
            contentStyle={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-body)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="Electronics" fill="#157a9e" name="Electronics" />
          <Bar dataKey="Software" fill="#4bc9e8" name="Software" />
          <Bar dataKey="Services" fill="#172e54" name="Services" />
          <Bar dataKey="Hardware" fill="#6b7280" name="Hardware" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function KPIChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={kpiData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-body)" opacity={0.2} />
          <XAxis dataKey="week" stroke="var(--color-body)" />
          <YAxis stroke="var(--color-body)" domain={[80, 120]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-body)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#157a9e"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Target (100 units)"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#172e54"
            strokeWidth={2}
            name="Actual (±15%)"
            dot={{ fill: "#172e54", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BudgetChart() {
  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
      <div className="h-[300px] w-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={budgetData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {budgetData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => {
                const numValue = typeof value === "number" ? value : 0;
                return [`${numValue}%`, ""];
              }}
              contentStyle={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-body)",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="space-y-3">
        {budgetData.map((item) => (
          <li key={item.name} className="flex items-center gap-3">
            <span
              className="block h-4 w-4 rounded"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            <span className="text-color-body">
              {item.name}: <strong>{item.value}%</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const revenueCategoryTotals = categoryTotals;
export { revenueData, kpiData, budgetData };