"use client";

import { useEffect } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    id: "0dcb0209-a774-49ec-87b2-5407bfeb7647",
    name: "AWS Certification",
    // Add more certifications here with their Credly badge IDs
  },
];

export function Certifications() {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="//cdn.credly.com/assets/utilities/embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="certifications" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            03 &mdash; Certifications
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Professional Credentials
          </h2>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground md:text-2xl">
                  Verified Certifications
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Click on a badge to verify credentials
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={cert.id}
                data-share-badge-host="https://www.credly.com"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
