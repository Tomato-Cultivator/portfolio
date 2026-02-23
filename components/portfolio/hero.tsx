import Image from "next/image";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={`${base}/images/hero.jpg`}
          alt="Warm architectural photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Data Analyst
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          Pat Leetongin
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          A passionate individual dedicated to learning, growing, and making a
          meaningful impact through education, work, and community.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get to know me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
