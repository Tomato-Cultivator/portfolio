"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Simulated Melbourne development & price data
const yearlyTrends = [
  { year: "2014", completedDev: 42, medianPrice: 620, transactions: 1850 },
  { year: "2015", completedDev: 58, medianPrice: 685, transactions: 2100 },
  { year: "2016", completedDev: 95, medianPrice: 745, transactions: 2450 },
  { year: "2017", completedDev: 130, medianPrice: 830, transactions: 2680 },
  { year: "2018", completedDev: 145, medianPrice: 790, transactions: 2320 },
  { year: "2019", completedDev: 120, medianPrice: 755, transactions: 2150 },
  { year: "2020", completedDev: 85, medianPrice: 720, transactions: 1980 },
  { year: "2021", completedDev: 110, medianPrice: 815, transactions: 2550 },
  { year: "2022", completedDev: 155, medianPrice: 890, transactions: 2380 },
  { year: "2023", completedDev: 170, medianPrice: 925, transactions: 2200 },
];

const suburbData = [
  { suburb: "Melbourne", developments: 320, avgPrice: 850, change: 12.3 },
  { suburb: "Southbank", developments: 280, avgPrice: 720, change: 8.7 },
  { suburb: "Docklands", developments: 245, avgPrice: 680, change: 15.2 },
  { suburb: "Carlton", developments: 165, avgPrice: 920, change: 6.4 },
  { suburb: "Fitzroy", developments: 120, avgPrice: 1050, change: 4.1 },
  { suburb: "Richmond", developments: 95, avgPrice: 980, change: 7.8 },
  { suburb: "Collingwood", developments: 85, avgPrice: 890, change: 9.5 },
  { suburb: "Parkville", developments: 60, avgPrice: 1120, change: 3.2 },
];

const developmentTypes = [
  { year: "2014", residential: 28, commercial: 8, mixedUse: 6 },
  { year: "2015", residential: 38, commercial: 12, mixedUse: 8 },
  { year: "2016", residential: 62, commercial: 18, mixedUse: 15 },
  { year: "2017", residential: 82, commercial: 25, mixedUse: 23 },
  { year: "2018", residential: 90, commercial: 30, mixedUse: 25 },
  { year: "2019", residential: 72, commercial: 28, mixedUse: 20 },
  { year: "2020", residential: 48, commercial: 22, mixedUse: 15 },
  { year: "2021", residential: 65, commercial: 24, mixedUse: 21 },
  { year: "2022", residential: 95, commercial: 32, mixedUse: 28 },
  { year: "2023", residential: 105, commercial: 35, mixedUse: 30 },
];

const COLORS = {
  accent: "#c8a882",
  dark: "#1a1a1a",
  muted: "#8b7355",
  light: "#d4c5b0",
  secondary: "#f0ebe4",
};

export function PriceTrendChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-foreground">
          Development Activity vs. Median Property Price
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Completed developments and median property price (in $K AUD) across
          the City of Melbourne, 2014-2023
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            completedDev: {
              label: "Completed Developments",
              color: COLORS.accent,
            },
            medianPrice: {
              label: "Median Price ($K)",
              color: COLORS.dark,
            },
          }}
          className="h-[350px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={yearlyTrends}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5ddd3" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="#6b6560" />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#6b6560" />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12 }}
                stroke="#6b6560"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                yAxisId="left"
                dataKey="completedDev"
                fill={COLORS.accent}
                radius={[4, 4, 0, 0]}
                name="Completed Developments"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="medianPrice"
                stroke={COLORS.dark}
                strokeWidth={2}
                dot={{ fill: COLORS.dark, r: 4 }}
                name="Median Price ($K)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function SuburbComparisonChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-foreground">
          Suburb Development Volume
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Total completed developments by suburb within the City of Melbourne
          (2014-2023)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            developments: {
              label: "Total Developments",
              color: COLORS.accent,
            },
          }}
          className="h-[350px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={suburbData}
              layout="vertical"
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5ddd3"
                horizontal={false}
              />
              <XAxis type="number" tick={{ fontSize: 12 }} stroke="#6b6560" />
              <YAxis
                dataKey="suburb"
                type="category"
                tick={{ fontSize: 12 }}
                stroke="#6b6560"
                width={90}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="developments"
                fill={COLORS.accent}
                radius={[0, 4, 4, 0]}
                name="Total Developments"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function DevelopmentTypeChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-foreground">
          Development Types Over Time
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Breakdown of residential, commercial, and mixed-use developments by
          year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            residential: {
              label: "Residential",
              color: COLORS.accent,
            },
            commercial: {
              label: "Commercial",
              color: COLORS.muted,
            },
            mixedUse: {
              label: "Mixed Use",
              color: COLORS.light,
            },
          }}
          className="h-[350px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={developmentTypes}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5ddd3" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="#6b6560" />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b6560" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="residential"
                fill={COLORS.accent}
                stackId="a"
                name="Residential"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="commercial"
                fill={COLORS.muted}
                stackId="a"
                name="Commercial"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="mixedUse"
                fill={COLORS.light}
                stackId="a"
                name="Mixed Use"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function TransactionVolumeChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-foreground">
          Property Transaction Volume
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Number of property transactions per year across the City of Melbourne
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            transactions: {
              label: "Transactions",
              color: COLORS.accent,
            },
          }}
          className="h-[350px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={yearlyTrends}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5ddd3" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="#6b6560" />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b6560" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient
                  id="transactionFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={COLORS.accent}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor={COLORS.accent}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="transactions"
                fill="url(#transactionFill)"
                stroke={COLORS.accent}
                strokeWidth={2}
                name="Transactions"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function SuburbTable() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-foreground">
          Suburb Summary
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Key metrics by suburb including total developments, average price, and
          price change
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-medium text-foreground">
                  Suburb
                </th>
                <th className="py-3 px-4 text-right font-medium text-foreground">
                  Developments
                </th>
                <th className="py-3 px-4 text-right font-medium text-foreground">
                  Avg Price ($K)
                </th>
                <th className="py-3 pl-4 text-right font-medium text-foreground">
                  10yr Change
                </th>
              </tr>
            </thead>
            <tbody>
              {suburbData.map((row) => (
                <tr
                  key={row.suburb}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="py-3 pr-4 text-foreground">{row.suburb}</td>
                  <td className="py-3 px-4 text-right text-muted-foreground font-mono">
                    {row.developments}
                  </td>
                  <td className="py-3 px-4 text-right text-muted-foreground font-mono">
                    ${row.avgPrice}K
                  </td>
                  <td className="py-3 pl-4 text-right font-mono">
                    <span className="text-accent">+{row.change}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
