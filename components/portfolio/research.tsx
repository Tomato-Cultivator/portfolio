import { FileText, ArrowUpRight } from "lucide-react";

const papers = [
  {
    title: "Intake24: SWIPE",
    journal: "TBC ",
    year: "TBC",
    authors: "Pichapat Leetongin",
    abstract:
      "Dietary assessment is essential for understanding nutrition and shaping public health policy. Traditional methods such as 24-hour recalls are accurate but resource-intensive, while food frequency questionnaires are cheaper but less precise. Technology-based tools aim to bridge this gap, yet their reliance on detailed self-reporting can limit accessibility for people with low literacy or digital skills. This study developed and evaluated a machine learning–driven dietary assessment method that classifies individuals into nutrient profiles using simplified binary and portion-based questions derived from historical intake data. Using anonymised Australian Intake24 records (834,242 food entries from 49,954 participants), foods were clustered by macronutrient ratios and meal timing. The top 50 features were converted into yes/no questions with small, medium, and large portion options. XGBoost classifiers for protein, fat, and carbohydrate were trained and tested. The models achieved accuracies of 74.3% (protein), 71.2% (fat), and 73.8% (carbohydrate), with macro-averaged F1-scores around 0.70. This approach provides a low-burden alternative to conventional methods, with potential for adaptive questioning and cross-cultural use.",
    tags: [
      "Machine Learning",
      "Dietary Assessment",
      "Nutrition",
      "Public Health",
    ],
    link: "#",
  },
];

export function Research() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            05 &mdash; Research
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Papers
          </h2>
        </div>

        <div className="space-y-8">
          {papers.map((paper, index) => (
            <article
              key={index}
              className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-foreground md:text-2xl text-balance">
                      {paper.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {paper.journal} &middot; {paper.year}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {paper.authors}
                    </p>
                  </div>
                </div>
                <a
                  href={paper.link}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                  aria-label={`Read paper: ${paper.title}`}
                >
                  Read Paper
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {paper.abstract}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
