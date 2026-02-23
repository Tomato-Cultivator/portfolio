import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Front of House / Host",
    company: "Mango Tree Thai",
    period: "2024 - Present",
    description:
      "Alongside my postgraduate studies, I have worked part-time at Mango Tree Thai, managing front-of-house operations in a high-volume restaurant serving over 150 guests per night on weekends. I oversee bookings, table allocation, and guest flow to maximise capacity during peak periods while maintaining a positive dining experience. This role has strengthened my communication, problem-solving, and time-management skills, as I regularly coordinate with kitchen and service teams to ensure smooth operations under pressure.",
    skills: [
      "Decision Making",
      "Teamwork",
      "Time Management",
      "Communication",
      "Multitasking",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "Kiatnakin Phatra Financial Group",
    period: "June - July 2020",
    description:
      "During my internship at Kiatnakin Phatra Financial Group, I supported enterprise data pipeline development using IBM DataStage and assisted with cloud-based implementations through Microsoft Azure. This experience introduced me to large-scale data management practices within a financial services environment and strengthened my understanding of data architecture. I also earned the Microsoft Certified: Azure AI Fundamentals certification, building a strong foundation in AI and cloud technologies.",
    skills: ["Time Management", "Communication", "Azure"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            03 &mdash; Experience
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Work
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 hidden h-4 w-4 rounded-full border-2 border-accent bg-background md:block" />

                <div className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg md:p-10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary md:hidden">
                        <Briefcase className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
