import { Code2, Construction } from "lucide-react";

const projects = [
  {
    title: "Restaurant Takeaway App",
    description:
      "A full-stack takeaway ordering platform for restaurants, featuring a customer-facing menu and ordering interface alongside a management dashboard. Built with a modern web stack combining Next.js and React on the frontend with a Django REST backend.",
    tags: ["Next.js", "React", "Django", "REST API", "Full Stack"],
    href: "/projects/takeaway-app",
    status: "In Progress",
    icon: Construction,
  },
  {
    title: "Melbourne Property Development & Price Analysis",
    description:
      "Analysed development activity within the City of Melbourne to examine how new construction influences property price trends over time. Built clear visualisations to highlight temporal and spatial patterns, enabling data-driven insights into urban growth and housing market dynamics.",
    tags: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Data Visualisation",
      "Time-Series Analysis",
    ],
    href: "/projects/melbourne-property",
    status: "Completed",
    icon: Code2,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            06 &mdash; Projects
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Personal Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-border bg-card p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground text-balance">
                      {project.title}
                    </h3>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.status === "In Progress"
                          ? "bg-accent/20 text-accent"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
