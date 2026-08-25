import { ArrowRight, Heart, HeartHandshake, UsersRound } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-green-600 text-primary-foreground">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border border-primary-foreground/10" />

          <div className="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full border border-primary-foreground/10" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <HeartHandshake className="h-7 w-7" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Be Part of Our Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Together, We Can Make a Difference
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
                Every contribution matters. Whether you give your time, your
                skills, or your support, you can help us create meaningful
                opportunities and build stronger communities.
              </p>
            </div>

            {/* Action Cards */}
            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
              {/* Volunteer */}
              <Card className="border-0 bg-primary-foreground/10 text-primary-foreground shadow-none backdrop-blur-sm">
                <CardContent className="p-7 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <UsersRound className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    Become a Volunteer
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-primary-foreground/70">
                    Share your time, skills, and passion with our foundation and
                    become part of meaningful community initiatives.
                  </p>

                  <Link
                    href="/volunteer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                  >
                    Join Our Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Donation */}
              <Card className="border-0 bg-primary-foreground/10 text-primary-foreground shadow-none backdrop-blur-sm">
                <CardContent className="p-7 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <Heart className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    Support Our Mission
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-primary-foreground/70">
                    Your contribution can help us support more people, expand
                    our initiatives, and create lasting positive change.
                  </p>

                  <Link
                    href="/donate"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
                  >
                    Make a Contribution
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
