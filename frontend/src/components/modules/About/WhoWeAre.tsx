import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    id: "community",
    icon: UsersRound,
  },
  {
    id: "purpose",
    icon: Target,
  },
  {
    id: "impact",
    icon: Sparkles,
  },
];

export default function WhoWeAre() {
  const t = useTranslations("About.WhoWeAre");

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border bg-background shadow-sm">
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
                  alt={t("imageAlt")}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  width={800}
                  height={1000}
                />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border bg-background p-5 shadow-xl sm:-right-6 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    {t("floatingCard.title")}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {t("floatingCard.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:py-6">
            {/* Badge */}
            <Badge
              variant="outline"
              className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              {t("badge")}
            </Badge>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              {t("description")}
            </p>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {t("description2")}
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {t(`highlights.${item.id}.title`)}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {t(`highlights.${item.id}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {t("cta")}

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
