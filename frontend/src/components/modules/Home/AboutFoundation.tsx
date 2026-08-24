import { ArrowUpRight, Heart, ShieldCheck, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutFoundation() {
  const t = useTranslations("Home.AboutFoundation");

  const foundationHighlights = [
    {
      icon: Target,
      title: t("highlights.mission.title"),
      description: t("highlights.mission.description"),
    },
    {
      icon: Users,
      title: t("highlights.community.title"),
      description: t("highlights.community.description"),
    },
    {
      icon: Heart,
      title: t("highlights.values.title"),
      description: t("highlights.values.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full px-4 py-1.5 text-sm"
          >
            {t("badge")}
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className="mt-5 text-base leading-7 sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT - VISUAL ================= */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border bg-muted/30 p-3 shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-background to-primary/5">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>

                  <p className="text-xl font-semibold">{t("impactTitle")}</p>

                  <p className="mx-auto mt-2 max-w-xs text-sm">
                    {t("impactDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= FLOATING CARD ================= */}
            <Card className="absolute -bottom-6 -right-3 w-[210px] shadow-xl sm:-right-6">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>

                <p className="text-2xl font-bold">100%</p>

                <p className="text-sm">{t("commitment")}</p>
              </CardContent>
            </Card>
          </div>

          {/* ================= RIGHT - CONTENT ================= */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("whoWeAre")}
            </p>

            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t("heading")}
            </h3>

            <p className="mt-5 leading-7 ">{t("paragraphOne")}</p>

            <p className="mt-4 leading-7 ">{t("paragraphTwo")}</p>

            <Button className="mt-7 rounded-full">
              <Link href="/about" className="flex items-center">
                {t("learnMore")}

                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ================= HIGHLIGHTS ================= */}
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

                  <p className="mt-3 text-sm leading-6">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
