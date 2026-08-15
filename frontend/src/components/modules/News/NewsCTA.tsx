import { ArrowRight, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function NewsCTA() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-10 sm:py-14 lg:px-16">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary-foreground/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-primary-foreground/10" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <HeartHandshake className="h-7 w-7" />
            </div>

            {/* Label */}
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Be Part of the Change
            </p>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Together, We Can Make a Difference
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
              Stay connected with our work and discover how you can help create
              meaningful and lasting change in our communities.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-lg"
              >
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
              >
                Support Our Mission
                <HeartHandshake className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
