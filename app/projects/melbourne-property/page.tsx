import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melbourne Property Development vs Price Growth Analysis | Portfolio",
  description:
    "Power BI analysis investigating the relationship between property price growth and development intensity across City of Melbourne suburbs (2013-2023).",
};

const dashboardFeatures = [
  {
    title: "Scatter Plot: Development vs Price Growth",
    description:
      "X-axis shows Development Intensity, Y-axis shows Price Growth %. Colour-coded by growth bands with trendline displaying correlation value.",
  },
  {
    title: "Development Type Comparison",
    description:
      "Interactive slicer enables comparison between Completed and Under Construction projects for scenario-based supply impact analysis.",
  },
  {
    title: "Suburb Ranking",
    description:
      "Bar chart ranking suburbs by average price growth to identify top-performing areas like Parkville, East Melbourne, and South Yarra.",
  },
  {
    title: "Geographic Growth Distribution",
    description:
      "Map visualisation showing spatial clustering of high, mid, and low growth suburbs across the City of Melbourne.",
  },
];

const methodology = [
  {
    step: "01",
    title: "Data Collection",
    description:
      "Sourced suburb-level median property prices (2013-2023), development project data (Completed & Under Construction), and geographic coordinates for spatial analysis.",
  },
  {
    step: "02",
    title: "Key Metrics Creation",
    description:
      "Calculated Price Growth % using (Price2023 - Price2013) / Price2013 x 100. Measured Development Intensity as distinct count of projects per suburb.",
  },
  {
    step: "03",
    title: "Growth Band Classification",
    description:
      "Classified suburbs into High Growth (>70%), Mid Growth (50-70%), and Low Growth (<50%) bands for visual segmentation.",
  },
  {
    step: "04",
    title: "Dynamic DAX Measures",
    description:
      "Built correlation measure between development intensity and price growth, allowing interactive filtering by development type.",
  },
];

export default function MelbournePropertyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Code2 className="h-3 w-3" />
            Completed
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Personal Project
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            Melbourne Property Development vs Price Growth Analysis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            This project investigates the relationship between property price
            growth and development intensity across suburbs within the City of
            Melbourne between 2013 and 2023. The objective was to determine
            whether higher levels of residential development activity are
            associated with stronger or weaker long-term price growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Power BI", "DAX", "Data Modelling", "Data Visualisation"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g9pbQscloSpuBisnsgDWZvQcdoatan.png"
              alt="Power BI Dashboard showing Melbourne Property Development vs Price Growth Analysis"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Power BI Dashboard: Development vs Price Growth Analysis
          </p>
        </div>
      </section>

      {/* Business Question */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            <h2 className="font-serif text-2xl text-foreground">
              Business Question
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Does higher development intensity influence long-term property
              price growth at the suburb level?
            </p>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              <li>
                - Do suburbs with more construction activity experience stronger
                capital growth?
              </li>
              <li>- Or does increased supply moderate price growth?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Key Findings
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8">
              <p className="font-mono text-3xl font-medium text-accent">
                65.16%
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Average Price Growth across City of Melbourne suburbs
                (2013-2023)
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <p className="font-mono text-3xl font-medium text-accent">
                -0.60
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Correlation between development intensity and price growth
                (moderate negative)
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <p className="font-mono text-3xl font-medium text-accent">
                3 Bands
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Growth classification: High ({">"}70%), Mid (50-70%), Low ({"<"}
                50%)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Dashboard Features
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-card p-8"
              >
                <h3 className="font-serif text-lg text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Methodology
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {methodology.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-accent">
                  {item.step}
                </div>
                <h3 className="mt-4 font-serif text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights summary */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            <h2 className="font-serif text-2xl text-foreground">
              Insights & Conclusions
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The analysis revealed a moderate negative correlation (-0.60)
                between development intensity and long-term price growth. This
                suggests that suburbs with higher development activity tended to
                experience slower price growth, indicating that increased
                housing supply may place downward pressure on capital
                appreciation.
              </p>
              <p>
                However, results should be interpreted cautiously due to the
                limited number of suburbs analysed and potential confounding
                urban factors such as amenities, transport infrastructure, and
                demographic change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
          <Link
            href="/projects/takeaway-app"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Next Project
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
