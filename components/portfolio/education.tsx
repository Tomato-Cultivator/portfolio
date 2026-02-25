"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/images/gallery/uni1.jpeg",
    alt: "International Student Orientation",
    caption: "First Day at Monash",
  },
  {
    src: "/images/gallery/uni2.jpeg",
    alt: "Class",
    caption: "When I can't see what on the screen the tutor was showing",
  },
  {
    src: "/images/gallery/uni3.jpeg",
    alt: "Class",
    caption: "The week when people still come to class",
  },
  {
    src: "/images/gallery/uni4.jpeg",
    alt: "Creative workspace with coffee and notebook",
    caption: "My favourite libary on campus",
  },
  {
    src: "/images/gallery/uni5.jpeg",
    alt: "Graduation ceremony celebration",
    caption: "Graduation Day",
  },
];

function EducationGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-8">
      {/* Header row with label and arrows */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          Moments & Memories
        </p>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Next slide"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden rounded-lg">
        <div className="-ml-3 flex">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative min-w-0 shrink-0 grow-0 basis-[70%] pl-3 md:basis-[45%] lg:basis-[32%]"
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-medium text-background">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "w-6 bg-accent"
                : "w-1.5 bg-border hover:bg-muted-foreground/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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
    hasGallery: true,
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
    hasGallery: false,
  },
  {
    degree: "High School Diploma",
    school: "Amatyakul School",
    period: "2003 - 2018",
    description:
      "Excelled in STEM subjects with a strong focus on mathematics, physics, and chemistry.",
    coursework: ["Advanced Mathematics", "Physics", "English"],
    hasGallery: false,
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

              {item.hasGallery && <EducationGallery />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
