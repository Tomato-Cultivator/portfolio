import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Data Science",
    school: "Monash University",
    period: "2023 - 2025",
    description:
      "Developed strong expertise in statistical modelling, data wrangling, visualisation, big data processing, and semi-structured data analysis. My thesis strengthened my research and problem-solving skills by applying data-driven methods to real-world challenges. Graduated with High Distinction.",
    coursework: [
      "Data Analysis for Semi-Structured Data",
      "Data Exploration and Visualisation",
      "Data Wrangling",
      "Data Processing for Big Data",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "King Mongkut's University of Technology Thonburi",
    period: "2018 - 2022",
    description:
      "Built a strong foundation in software engineering, data structures, algorithms, and machine learning, with a focus on problem-solving and system design.",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Software Engineering",
      "Database Systems",
      "Data Mining",
      "Text Analysis",
      "Coding in AI",
      "Computer Architecture",
      "Operating Systems",
    ],
  },
  {
    degree: "High School Diploma",
    school: "Amatyakul School",
    period: "2003 - 2018",
    description:
      "Excelled in STEM subjects with a strong focus on mathematics, physics, and chemistry.",
    coursework: ["Advanced Mathematics", "Physics", "English"],
  },
];

export function Education() {
  return (
    <section id="education" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            02 &mdash; Education
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Academic Background
          </h2>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground md:text-2xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.school}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                  {item.period}
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
