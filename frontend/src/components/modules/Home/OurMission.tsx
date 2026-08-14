import {
  ArrowRight,
  HeartHandshake,
  Lightbulb,
  Sprout,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const missionItems = [
  {
    icon: UsersRound,
    number: "01",
    title: "Empower Communities",
    description:
      "We work to empower individuals and communities by creating opportunities, providing support, and encouraging meaningful participation.",
  },
  {
    icon: Sprout,
    number: "02",
    title: "Create Lasting Impact",
    description:
      "Our goal is to build sustainable initiatives that create positive change today while making a difference for future generations.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Inspire Positive Change",
    description:
      "We inspire people to take meaningful action, support one another, and become part of something bigger than themselves.",
  },
];

export default function OurMission() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
          >
            Our Mission
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Turning Purpose Into{" "}
            <span className="text-primary">Positive Impact</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Our mission is to create meaningful opportunities, empower
            communities, and inspire people to work together toward a better and
            more sustainable future.
          </p>
        </div>

        {/* Main Mission */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border bg-background shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="relative p-8 sm:p-10 lg:p-14">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <HeartHandshake className="h-7 w-7 text-primary" />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Purpose
            </p>

            <h3 className="max-w-xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Creating opportunities that make a real difference.
            </h3>

            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              We believe meaningful change starts with people. Our foundation is
              committed to bringing people together, supporting valuable
              initiatives, and creating opportunities that can positively
              transform individuals and communities.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Every initiative we take is guided by compassion, integrity,
              collaboration, and a commitment to creating lasting value.
            </p>

            <Link
              href="/mission"
              className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
            >
              Explore Our Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right visual */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-primary p-8">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-primary-foreground/20" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-primary-foreground/20" />

            <div className="relative text-center text-primary-foreground">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm">
                <HeartHandshake className="h-11 w-11" />
              </div>

              <h4 className="mt-7 text-2xl font-bold sm:text-3xl">
                Together, We Can
              </h4>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-primary-foreground/80">
                Empower people. Strengthen communities. Create lasting change.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {missionItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.number}
                className="group relative overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                      <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>

                    <span className="text-sm font-semibold text-muted-foreground/50">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-semibold">{item.title}</h4>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
