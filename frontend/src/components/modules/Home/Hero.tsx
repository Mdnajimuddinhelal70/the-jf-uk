"use client";

import { ArrowRight, Heart, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788499143/WhatsApp_Image_2026-09-04_at_11.11.28_AM_pmlkke.jpg",
    altKey: "imageAlt1",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589502/WhatsApp_Image_2026-08-24_at_7.54.01_PM_alq2tu.jpg",
    altKey: "imageAlt2",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787583557/WhatsApp_Image_2026-08-24_at_8.11.46_PM_txd8qu.jpg",
    altKey: "imageAlt3",
  },
];

export default function Hero() {
  const t = useTranslations("Home.Hero");
  const locale = useLocale();

  const donateHref = `/${locale}/donate`;
  const projectsHref = `/${locale}/projects`;

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-20 -right-24 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl sm:h-80 sm:w-80" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">
            {/* Badge */}
            <Badge
              variant="outline"
              className="rounded-full border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary sm:px-4 sm:text-sm"
            >
              <span className="mr-2 inline-block size-1.5 rounded-full bg-primary" />
              {t("badge")}
            </Badge>

            {/* Heading */}
            <h1 className="mt-5 text-[2rem] font-bold leading-[1.18] tracking-tight text-foreground sm:mt-6 sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-[3.35rem] lg:leading-[1.1] xl:text-[3.7rem]">
              {t("title")}{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-[0.25em] rounded-sm bg-primary/20" />

                <span className="relative">{t("titleHighlight")}</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7 lg:text-[17px]">
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <Link href={donateHref} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-11 w-full rounded-full px-6 sm:h-12 sm:w-auto sm:px-7"
                >
                  <Heart className="mr-2 size-4 fill-current" />
                  {t("donate")}
                </Button>
              </Link>

              <Link href={projectsHref} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 w-full rounded-full px-6 sm:h-12 sm:w-auto sm:px-7"
                >
                  {t("explore")}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>

            {/* Trust / Impact */}
            <div className="mt-7 flex items-center gap-3 sm:mt-9 sm:gap-4">
              {/* Icons */}
              <div className="flex -space-x-2.5">
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-primary/10 sm:size-10">
                  <Users className="size-4 text-primary sm:size-5" />
                </div>

                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-primary/20 sm:size-10">
                  <Heart className="size-4 text-primary sm:size-5" />
                </div>

                <div className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-primary sm:size-10">
                  <Heart className="size-4 text-primary-foreground sm:size-5" />
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-bold text-foreground sm:text-sm">
                  {t("livesSupported")}
                </p>

                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                  {t("difference")}
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Decorative Circle */}
            <div className="absolute -right-3 -top-3 -z-10 size-16 rounded-full border-[8px] border-primary/10 sm:-right-5 sm:-top-5 sm:size-20 sm:border-[10px] lg:-right-7 lg:-top-7 lg:size-24" />

            <div className="absolute -bottom-3 -left-3 -z-10 size-14 rounded-full bg-primary/10 blur-sm sm:-bottom-5 sm:-left-5 sm:size-20 lg:-bottom-7 lg:-left-7 lg:size-24" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[1.5rem] border bg-background p-1.5 shadow-sm sm:rounded-[1.8rem] sm:p-2">
              <div className="relative h-[300px] overflow-hidden rounded-[1.15rem] sm:h-[400px] sm:rounded-[1.4rem] md:h-[450px] lg:h-[500px]">
                <Image
                  src={images[2].src}
                  alt={t(images[2].altKey)}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Impact Card */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-background/95 p-3.5 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:w-[245px] sm:rounded-2xl sm:p-4">
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {t("ourImpact")}
                  </p>

                  <p className="mt-0.5 text-2xl font-bold text-primary sm:text-3xl">
                    10,000+
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {t("programDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
