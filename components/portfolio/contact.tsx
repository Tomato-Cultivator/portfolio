import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:pleetongin@gmail.com",
    icon: Mail,
    value: "pleetongin@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "linkedin.com/in/pat-leetongin",
    icon: Linkedin,
    value: "www.linkedin.com/in/pat-leetongin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Tomato-Cultivator",
    icon: Github,
    value: "https://github.com/Tomato-Cultivator",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-foreground py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-background/50">
            06 &mdash; Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-background md:text-5xl text-balance">
            {"Let's Connect"}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-background/60">
            If you would like to discuss a project, collaboration, or just say
            hello, feel free to reach out. I am always open to new opportunities
            and conversations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-lg border border-background/10 p-6 transition-colors hover:border-background/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-background/20">
                  <Icon className="h-5 w-5 text-background/70" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-background">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm text-background/50">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-background/30 transition-colors group-hover:text-background/70" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
