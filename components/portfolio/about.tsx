import Image from "next/image";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            01 &mdash; About
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src={`${base}/images/about.jpg`}
              alt="Warm workspace with books and coffee"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              About Me
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a data analyst with a strong foundation in academics and a
                genuine passion for making a difference in the world around me.
                My journey has been shaped by diverse experiences in education,
                part-time work, volunteering and research.
              </p>
              <p>
                I believe in the power of continuous learning and community
                engagement. Whether in the classroom, the workplace, or the
                community, I approach every opportunity with dedication,
                empathy, and a desire to grow.
              </p>
              <p>
                Outside of my professional and academic pursuits, I enjoy
                watching good movies, reading, exploring new ideas, and
                connecting with people from all walks of life.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <p className="font-serif text-3xl text-foreground">3+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years of Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">5+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Volunteer Projects
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">2</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Research Papers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
