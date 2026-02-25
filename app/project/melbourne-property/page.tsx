// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
// import type { Metadata } from "next";
// import {
//   PriceTrendChart,
//   SuburbComparisonChart,
//   DevelopmentTypeChart,
//   TransactionVolumeChart,
//   SuburbTable,
// } from "@/components/projects/melbourne-charts";

// export const metadata: Metadata = {
//   title: "Melbourne Property Development & Price Analysis | Portfolio",
//   description:
//     "Analysis of development activity within the City of Melbourne examining how new construction influences property price trends.",
// };

// const methodology = [
//   {
//     step: "01",
//     title: "Data Collection",
//     description:
//       "Sourced large public datasets from the City of Melbourne open data portal covering development permits, building completions, and property transaction records.",
//   },
//   {
//     step: "02",
//     title: "Cleaning & Standardisation",
//     description:
//       "Addressed missing values, standardised address formats, and normalised date fields across multiple datasets to enable consistent merging and aggregation.",
//   },
//   {
//     step: "03",
//     title: "Aggregation & Feature Engineering",
//     description:
//       "Aggregated development metrics by year and suburb. Engineered features such as development density, completion rates, and rolling price averages to capture temporal patterns.",
//   },
//   {
//     step: "04",
//     title: "Analysis & Visualisation",
//     description:
//       "Compared completed and ongoing developments to property transaction trends. Built clear visualisations using Matplotlib to highlight temporal and spatial patterns in urban growth.",
//   },
// ];

// export default function MelbournePropertyPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       {/* Back navigation */}
//       <div className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//           <Link
//             href="/#projects"
//             className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Portfolio
//           </Link>
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
//             <Code2 className="h-3 w-3" />
//             Completed
//           </span>
//         </div>
//       </div>

//       {/* Hero */}
//       <section className="pt-28 pb-16 md:pt-36 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
//             Personal Project
//           </p>
//           <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl text-balance">
//             Melbourne Property Development & Price Analysis
//           </h1>
//           <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
//             Analysed development activity within the City of Melbourne to
//             examine how new construction influences property price trends over
//             time. Cleaned and standardised large public datasets, addressed
//             missing values, and aggregated development metrics by year and
//             suburb to identify patterns in supply growth.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-2">
//             {[
//               "Python",
//               "Pandas",
//               "Matplotlib",
//               "Data Cleaning",
//               "Time-Series Analysis",
//               "EDA",
//               "Data Visualisation",
//             ].map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cover image */}
//       <section className="pb-16 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-border">
//             <Image
//               src="/images/projects/melbourne-property.jpg"
//               alt="Melbourne property analysis visualisation overview"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* Key Findings */}
//       <section className="pb-16 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
//             Key Findings
//           </h2>
//           <div className="mt-8 grid gap-6 md:grid-cols-3">
//             <div className="rounded-lg border border-border bg-card p-8">
//               <p className="font-mono text-3xl font-medium text-accent">
//                 1,370+
//               </p>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 Total developments completed across the City of Melbourne
//                 between 2014-2023
//               </p>
//             </div>
//             <div className="rounded-lg border border-border bg-card p-8">
//               <p className="font-mono text-3xl font-medium text-accent">+49%</p>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 Median property price growth over the decade, despite periods of
//                 market correction
//               </p>
//             </div>
//             <div className="rounded-lg border border-border bg-card p-8">
//               <p className="font-mono text-3xl font-medium text-accent">
//                 8 Suburbs
//               </p>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 Analysed across the inner city, revealing distinct development
//                 and pricing patterns
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Visualisations */}
//       <section className="pb-16 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
//             Visualisations
//           </h2>
//           <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
//             Interactive charts exploring the relationship between development
//             activity and property price dynamics across Melbourne suburbs.
//           </p>

//           <div className="mt-10 grid gap-8 lg:grid-cols-2">
//             <PriceTrendChart />
//             <TransactionVolumeChart />
//             <SuburbComparisonChart />
//             <DevelopmentTypeChart />
//           </div>

//           <div className="mt-8">
//             <SuburbTable />
//           </div>
//         </div>
//       </section>

//       {/* Methodology */}
//       <section className="pb-16 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
//             Methodology
//           </h2>
//           <div className="mt-10 grid gap-6 md:grid-cols-2">
//             {methodology.map((item) => (
//               <div
//                 key={item.step}
//                 className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-accent">
//                   {item.step}
//                 </div>
//                 <h3 className="mt-4 font-serif text-lg text-foreground">
//                   {item.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Insights summary */}
//       <section className="pb-16 md:pb-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="rounded-lg border border-border bg-card p-8 md:p-10">
//             <h2 className="font-serif text-2xl text-foreground">
//               Insights & Conclusions
//             </h2>
//             <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
//               <p>
//                 The analysis revealed a positive correlation between development
//                 activity and median property prices across most inner-Melbourne
//                 suburbs, though the relationship varied significantly by
//                 location. Suburbs like Docklands and Southbank, which
//                 experienced the highest volumes of new construction, showed more
//                 moderate price growth compared to established suburbs like
//                 Fitzroy and Carlton where supply remained constrained.
//               </p>
//               <p>
//                 A notable finding was the 2018-2020 period, during which
//                 elevated development completions coincided with a brief market
//                 correction, suggesting that rapid supply increases may
//                 temporarily dampen price growth. However, prices recovered
//                 strongly post-2020, indicating that underlying demand in inner
//                 Melbourne remains robust.
//               </p>
//               <p>
//                 The project demonstrated that while construction activity is one
//                 factor influencing prices, broader economic conditions, interest
//                 rates, and population growth play equally important roles in
//                 shaping Melbourne{"'"}s property market dynamics.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer nav */}
//       <section className="border-t border-border py-12">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
//           <Link
//             href="/#projects"
//             className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             All Projects
//           </Link>
//           <Link
//             href="/projects/takeaway-app"
//             className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Next Project
//             <ExternalLink className="h-4 w-4" />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }
