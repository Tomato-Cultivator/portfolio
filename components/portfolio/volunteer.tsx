import { Heart, Users, Globe, BookOpen } from "lucide-react";

const volunteerData = [
  {
    role: "English Tutor",
    organization:
      "Hint Co, King Monkut's University Technology Thonburi, Kru Thungnon Foundation",
    period: "2021 - 2023",
    description:
      "I have volunteered as an English tutor across both private education and university settings, supporting students in developing their language and communication skills through online Platform, Hint Co. In addition, I volunteered as an English teacher in rural Thailand, where I adapted lessons to different learning levels and classroom environments. These experiences strengthened my ability to communicate clearly, remain patient, and tailor explanations to individual needs. Teaching has reinforced my belief in accessibility and inclusive learning — values that continue to influence my academic and professional work.",
    icon: BookOpen,
  },
  {
    role: "Event Staff",
    organization: "Monash University",
    period: "2023 - 2024",
    description:
      "I volunteered during Orientation Week with the Monash Student Association (MSA), supporting event coordination and assisting new students as they transitioned into university life. I helped provide directions, answered enquiries, and ensured activities ran smoothly in a busy, fast-paced environment. This experience strengthened my teamwork, communication, and adaptability skills while allowing me to contribute to creating a welcoming and inclusive campus community.",
    icon: Users,
  },
  {
    role: "Aged Care Resident Visitor / Ward Ambassador – ",
    organization: "Monash Health",
    period: "2023 - Present",
    description:
      "As a volunteer at Monash Health, I support elderly patients and residents by providing companionship and assisting with non-clinical needs to help create a positive ward environment. I spend time engaging residents in conversation and activities, ensuring they feel heard, valued, and comfortable. This experience has strengthened my empathy, active listening, and communication skills, particularly in adapting my approach to suit different emotional states and cognitive conditions. It has also deepened my appreciation for patient-centred care and the importance of human connection in healthcare settings.",
    icon: Heart,
  },
];

export function Volunteer() {
  return (
    <section id="volunteer" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            04 &mdash; Giving Back
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Volunteer Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {volunteerData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <p className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-border pt-4">
                  <span className="text-xs font-medium tracking-wide text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
