import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Code2, Construction } from "lucide-react"

const projects = [{
        title: "Restaurant Takeaway App",
        description: "A full-stack takeaway ordering platform for restaurants, featuring a customer-facing menu and ordering interface alongside a management dashboard. Built with a modern web stack combining Next.js and React on the frontend with a Django REST backend.",
        tags: ["Next.js", "React", "Django", "REST API", "Full Stack"],
        image: "/images/projects/takeaway-app.jpg",
        href: "/projects/takeaway-app",
        status: "In Progress",
    },
    {
        title: "Melbourne Property Development & Price Analysis",
        description: "Analysed development activity within the City of Melbourne to examine how new construction influences property price trends over time. Built clear visualisations to highlight temporal and spatial patterns, enabling data-driven insights into urban growth and housing market dynamics.",
        tags: ["Python", "Pandas", "Matplotlib", "Data Visualisation", "Time-Series Analysis"],
        image: "/images/projects/melbourne-property.jpg",
        href: "/projects/melbourne-property",
        status: "Completed",
    },
]

export function Projects() {
    return ( <
        section id = "projects"
        className = "py-24 md:py-32" >
        <
        div className = "mx-auto max-w-6xl px-6" >
        <
        div className = "mb-16" >
        <
        p className = "text-sm uppercase tracking-[0.3em] text-muted-foreground" >
        06 & mdash; Projects <
        /p> <
        h2 className = "mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl" >
        Personal Projects <
        /h2> <
        /div>

        <
        div className = "space-y-10" > {
            projects.map((project, index) => ( <
                Link key = { index }
                href = { project.href }
                className = "group block rounded-lg border border-border bg-card transition-shadow hover:shadow-lg" >
                <
                div className = "flex flex-col lg:flex-row" > { /* Image */ } <
                div className = "relative aspect-[16/10] w-full overflow-hidden rounded-t-lg lg:aspect-auto lg:w-2/5 lg:rounded-l-lg lg:rounded-tr-none" >
                <
                Image src = { project.image }
                alt = { project.title }
                fill className = "object-cover transition-transform duration-500 group-hover:scale-105" /
                > { /* Status badge */ } <
                div className = "absolute left-4 top-4" >
                <
                span className = { `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                        project.status === "In Progress"
                          ? "bg-accent/90 text-accent-foreground"
                          : "bg-card/90 text-foreground"
                      }` } >
                {
                    project.status === "In Progress" ? ( <
                        Construction className = "h-3 w-3" / >
                    ) : ( <
                        Code2 className = "h-3 w-3" / >
                    )
                } { project.status } <
                /span> <
                /div> <
                /div>

                { /* Content */ } <
                div className = "flex flex-1 flex-col justify-between p-8 md:p-10" >
                <
                div >
                <
                div className = "flex items-start justify-between gap-4" >
                <
                h3 className = "font-serif text-xl leading-snug text-foreground md:text-2xl text-balance" > { project.title } <
                /h3> <
                div className = "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent" >
                <
                ArrowUpRight className = "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" / >
                <
                /div> <
                /div>

                <
                p className = "mt-4 text-base leading-relaxed text-muted-foreground" > { project.description } <
                /p> <
                /div>

                <
                div className = "mt-6 flex flex-wrap gap-2" > {
                    project.tags.map((tag) => ( <
                        span key = { tag }
                        className = "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground" >
                        { tag } <
                        /span>
                    ))
                } <
                /div> <
                /div> <
                /div> <
                /Link>
            ))
        } <
        /div> <
        /div> <
        /section>
    )
}