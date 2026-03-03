"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  { name: "Python", category: "Data Processing" },
  { name: "Pandas", category: "Data Processing" },
  { name: "Power BI", category: "Visualisation" },
  { name: "DAX", category: "Visualisation" },
];

export default function MelbournePropertyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>2024</span>
            <span className="text-border">|</span>
            <MapPin className="h-4 w-4" />
            <span>Melbourne, Australia</span>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Melbourne Property Development & Price Analysis
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A comprehensive data analysis project examining how urban
            development activity influences property price trends across
            Melbourne.
          </p>

          <span className="mt-6 inline-block rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
            Completed
          </span>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
            <Image
              src="/images/development-city-of-melb.png"
              alt="Melbourne Property Analysis"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* What I Did Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl text-foreground">
                What I Did
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {/* Add your explanation here */}
                  This project investigates the relationship between property
                  price growth and development intensity across suburbs within
                  the City of Melbourne between 2013 and 2023.
                  <br />
                  <br />
                  The objective was to determine whether higher levels of
                  residential development activity are associated with stronger
                  or weaker long-term price growth. This project explores the
                  business question: Does higher development activity influence
                  long-term property price growth in Melbourne suburbs?
                  <br />
                  I integrated 10-year median house price data (2013–2023) with
                  development project records and calculated development
                  intensity per suburb. Using Power BI and DAX, I analysed the
                  relationship between development activity and price growth,
                  separating completed projects from those still under
                  construction to understand whether supply at different stages
                  has different market impacts. The findings show a moderate
                  negative correlation: -0.60 for completed projects and -0.52
                  for under-construction projects.
                  <br />
                  <br />
                  This suggests that suburbs with higher development intensity
                  tended to experience slower long-term price growth, supporting
                  the idea that increased housing supply may moderate capital
                  appreciation. However, the development dataset only covered
                  seven suburbs within the City of Melbourne, resulting in a
                  small sample size. Therefore, the results should be
                  interpreted as exploratory insights rather than definitive
                  conclusions, highlighting the need for broader geographic data
                  to strengthen the analysis.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">Tech Stack</h3>
              <div className="mt-4 space-y-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between border-b border-border pb-2"
                  >
                    <span className="text-foreground">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </div>
      </footer>
    </main>
  );
}
