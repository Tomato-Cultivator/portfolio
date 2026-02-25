import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Construction, Github, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Takeaway App | Portfolio",
  description:
    "A full-stack takeaway ordering platform for restaurants built with Next.js, React, and Django.",
};

const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Django", category: "Backend" },
  { name: "Django REST Framework", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Python", category: "Backend" },
  { name: "TypeScript", category: "Frontend" },
];

const features = [
  {
    title: "Customer Ordering Interface",
    description:
      "A clean, responsive menu browsing and ordering experience. Customers can explore the restaurant's menu, customise their orders, and place takeaway requests with ease.",
  },
  {
    title: "Restaurant Management Dashboard",
    description:
      "An admin panel for the restaurant to manage incoming orders, update menu items, adjust pricing, and track order history in real time.",
  },
  {
    title: "REST API Backend",
    description:
      "A robust Django REST Framework API handling authentication, order processing, menu management, and secure payment integration.",
  },
  {
    title: "Real-Time Order Tracking",
    description:
      "Customers receive live updates on their order status, from confirmation through preparation to ready for pickup.",
  },
];

export default function TakeawayAppPage() {
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
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">
              <Construction className="h-3 w-3" />
              In Progress
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Personal Project
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            Restaurant Takeaway App
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A full-stack takeaway ordering platform for restaurants, featuring a
            customer-facing menu and ordering interface alongside a management
            dashboard. Built with a modern web stack combining Next.js and React
            on the frontend with a Django REST backend.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary">
              <Github className="h-4 w-4" />
              Repository coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Project images */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/projects/takeaway-menu.jpg"
                  alt="Customer ordering interface showing restaurant menu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-card p-4">
                <p className="text-sm font-medium text-foreground">
                  Customer Ordering Interface
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Menu browsing and order placement
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/projects/takeaway-dashboard.jpg"
                  alt="Restaurant management dashboard showing orders and analytics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-card p-4">
                <p className="text-sm font-medium text-foreground">
                  Management Dashboard
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Order tracking and menu management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Key Features
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-lg text-foreground">
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

      {/* Tech Stack */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Tech Stack
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {["Frontend", "Backend", "Database"].map((category) => (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack
                    .filter((t) => t.category === category)
                    .map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
                      >
                        {tech.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                <Construction className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-foreground">
                  Currently In Development
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  This project is actively being built. The frontend ordering
                  interface and the Django REST API are under development. Key
                  upcoming milestones include payment integration, real-time
                  order status updates, and deployment. Stay tuned for updates
                  and a live demo.
                </p>
              </div>
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
            href="/projects/melbourne-property"
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
