import { ArrowUpRight, Heart, ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const foundationHighlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create meaningful opportunities and support initiatives that bring positive and lasting change to communities.",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "We believe real impact begins when people come together with a shared purpose, compassion, and commitment.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, compassion, transparency, and responsibility guide everything we do for the people we serve.",
  },
];

export default function AboutFoundation() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full px-4 py-1.5 text-sm"
          >
            About the Foundation
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building a Better Future,{" "}
            <span className="text-primary">Together</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            We are committed to creating positive change through meaningful
            initiatives, community support, and opportunities that empower
            people to build a brighter future.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border bg-muted/30 p-3 shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-background to-primary/5">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>

                  <p className="text-xl font-semibold">Making an Impact</p>

                  <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                    Together we can create opportunities and make a meaningful
                    difference.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <Card className="absolute -bottom-6 -right-3 w-[210px] shadow-xl sm:-right-6">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>

                <p className="text-2xl font-bold">100%</p>

                <p className="text-sm text-muted-foreground">
                  Committed to our values
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right - Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </p>

            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              We believe every small effort can create a big difference.
            </h3>

            <p className="mt-5 leading-7 text-muted-foreground">
              Our foundation works to support people, communities, and
              initiatives that have the potential to create meaningful positive
              change. We focus on building trust, creating opportunities, and
              bringing people together around a common purpose.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Through collaboration and responsible action, we aim to create an
              environment where everyone has the opportunity to grow,
              contribute, and build a better future.
            </p>

            <Button className="mt-7 rounded-full">
              <Link href="/about">
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {foundationHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group border-border/60 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>

                  <h4 className="text-lg font-semibold">{item.title}</h4>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
