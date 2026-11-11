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
    <section className="relative isolate overflow-hidden bg-[#fbfbf7] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[440px] rounded-full bg-emerald-100/60 blur-[130px]" />
        <div className="absolute -right-48 bottom-0 size-[440px] rounded-full bg-amber-100/40 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
            <HeartPulse className="size-4 text-emerald-700" />
            {t("badge")}
          </span>

          <h2 className="mt-6 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-emerald-800">{t("titleHighlight")}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:leading-8 lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* ── Areas Grid ──────────────────────────────────── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <Card
                key={area.id}
                className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-[0_20px_50px_-30px_rgba(6,50,30,0.25)] ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(6,50,30,0.35)] hover:ring-emerald-900/20"
              >
                {/* Hover gradient overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-amber-50/0 opacity-0 transition-opacity duration-300 group-hover:from-emerald-50/60 group-hover:to-amber-50/40 group-hover:opacity-100"
                />

                <CardContent className="relative p-7 sm:p-8">
                  {/* Icon */}
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-900/10 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white group-hover:ring-emerald-700">
                    <Icon className="size-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-stone-950 transition-colors duration-300 group-hover:text-emerald-800">
                    {t(`areas.${area.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {t(`areas.${area.id}.description`)}
                  </p>

                  {/* Bottom indicator → amber accent */}
                  <div className="mt-6 h-1 w-8 rounded-full bg-emerald-700/20 transition-all duration-300 group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-amber-400" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-950/15 transition-all hover:bg-emerald-800 hover:shadow-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
          >
            {t("cta")}

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
