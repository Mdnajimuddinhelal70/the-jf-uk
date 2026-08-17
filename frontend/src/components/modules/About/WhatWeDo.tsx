import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    id: "education",
    icon: GraduationCap,
  },
  {
    id: "communitySupport",
    icon: HandHeart,
  },
  {
    id: "health",
    icon: HeartPulse,
  },
  {
    id: "humanitarian",
    icon: UsersRound,
  },
  {
    id: "communityDevelopment",
    icon: Leaf,
  },
  {
    id: "youth",
    icon: BookOpen,
  },
];

export default function WhatWeDo() {
  const t = useTranslations("About.WhatWeDo");

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
            {t("badge")}
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <Card
                key={area.id}
                className="group border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <CardContent className="p-7 sm:p-8">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {t(`areas.${area.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {t(`areas.${area.id}.description`)}
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
            {t("cta")}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
