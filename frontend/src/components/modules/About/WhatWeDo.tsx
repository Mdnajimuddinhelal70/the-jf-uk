import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Supporting access to learning, educational opportunities, and initiatives that help people build a better future.",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description:
      "Working alongside communities to understand their needs and provide meaningful support where it matters most.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    description:
      "Supporting initiatives that promote healthier lives, wellbeing, and access to essential community resources.",
  },
  {
    icon: UsersRound,
    title: "Humanitarian Assistance",
    description:
      "Providing compassionate support to individuals and families facing difficult circumstances and challenges.",
  },
  {
    icon: Leaf,
    title: "Community Development",
    description:
      "Encouraging sustainable initiatives that strengthen communities and create opportunities for long-term growth.",
  },
  {
    icon: BookOpen,
    title: "Youth Empowerment",
    description:
      "Helping young people develop knowledge, skills, confidence, and opportunities to become positive contributors to society.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
          >
            What We Do
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Turning Our Mission Into{" "}
            <span className="text-primary">Meaningful Action</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            From education and community support to humanitarian assistance and
            youth empowerment, we work across different areas to create positive
            and lasting change.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <Card
                key={area.title}
                className="group border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <CardContent className="p-7 sm:p-8">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 h-1 w-8 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Explore Our Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
