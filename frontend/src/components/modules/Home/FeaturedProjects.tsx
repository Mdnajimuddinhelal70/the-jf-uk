import { ArrowRight, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedProjects() {
  const t = useTranslations("Home.FeaturedProjects");

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              {t("badge")}
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {t("description")}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {t("viewAllProjects")}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`projects.${project.id}.title`)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category */}
                <Badge className="absolute left-4 top-4 border-0 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background">
                  {t(`projects.${project.id}.category`)}
                </Badge>

                {/* Status */}
                <div className="absolute bottom-4 left-4">
                  <Badge
                    variant={
                      project.id === 1 || project.id === 3
                        ? "default"
                        : "secondary"
                    }
                    className="gap-1.5"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />

                    {t(`projects.${project.id}.status`)}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Meta */}
                <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />

                    {t(`projects.${project.id}.location`)}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />

                    {t(`projects.${project.id}.year`)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {t(`projects.${project.id}.title`)}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {t(`projects.${project.id}.description`)}
                </p>

                {/* Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  {t("viewProject")}

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            {t("exploreAllProjects")}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
