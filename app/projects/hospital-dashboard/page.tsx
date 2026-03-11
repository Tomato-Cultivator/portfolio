"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PDFViewerEmbed } from "@/components/pdf-viewer";

const techStack = [
  { name: "Power BI", category: "Visualisation" },
  { name: "Excel", category: "Data Processing" },
  { name: "DAX", category: "Formulas" },
  { name: "Data Modelling", category: "Analysis" },
];

export default function HospitalDashboardPage() {
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
            <span>2026</span>
            <span className="text-border">|</span>
            <MapPin className="h-4 w-4" />
            <span>Australia</span>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Australian Hospital Utilisation Dashboard
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Analysed Australian hospital utilisation data to investigate patient
            admissions, common diagnoses, and procedure patterns. Developed a
            Power BI dashboard to visualise healthcare trends and support
            data-driven insights into hospital service demand.
          </p>

          {/* <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="outline" className="gap-2" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div> */}

          <span className="mt-6 inline-block rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
            Completed
          </span>
        </div>
      </section>

      {/* Project Image
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
            <Image
              src="/images/projects/hospital-dashboard.jpg"
              alt="Australian Hospital Utilisation Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section> */}

      {/* PDF Report Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl text-foreground mb-6">
            Project Report
          </h2>
          <PDFViewerEmbed src="/documents/hospital-report.pdf" height="700px" />
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
                  This project analyses Australian hospital activity using
                  national admitted patient care datasets. I cleaned and
                  transformed multiple tables from the Australian Institute of
                  Health and Welfare (AIHW) to prepare them for analysis in
                  Power BI. The data included hospital separations, patient
                  days, diagnoses, and procedures across public and private
                  hospitals. I reshaped several datasets into a long format to
                  enable easier visualisation and comparison. Key indicators
                  such as separations per 1,000 population, patient days, and
                  procedure frequency were used to explore patterns in
                  healthcare utilisation.
                  <br />
                  <br />
                  An interactive dashboard was built in Power BI to answer
                  questions such as:
                  <br />
                  &bull; Do patients use public or private hospitals more often?
                  <br />
                  &bull; What are the most common diagnoses leading to hospital
                  admission?
                  <br />
                  &bull; Which medical procedures occur most frequently?
                  <br /> &bull; How does hospital utilisation vary across states
                  and population groups?
                  <br />
                  <br />
                  The dashboard combines bar charts, stacked comparisons, and
                  maps to highlight trends in hospital usage and provide a
                  clearer view of how healthcare services are accessed across
                  Australia.
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
