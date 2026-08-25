"use client";

import { ArrowUpRight, BookOpen, Droplets, House } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    key: "education",
    icon: BookOpen,
    href: "/projects/education-support",
  },
  {
    key: "water",
    icon: Droplets,
    href: "/projects/clean-water",
  },
  {
    key: "housing",
    icon: House,
    href: "/projects/housing-support",
  },
];

export default function ProjectsSection() {
  const t = useTranslations("Projects.ProjectSection");

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t("badge")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card
                key={project.key}
                className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-7 sm:p-8">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {t(`items.${project.key}.category`)}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    {t(`items.${project.key}.title`)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {t(`items.${project.key}.description`)}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={project.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
                  >
                    {t("learnMore")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </CardContent>

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
