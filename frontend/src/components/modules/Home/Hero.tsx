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

  const infiniteImages = [...images, ...images];

  const donateHref = `/${locale}/donate`;
  const projectsHref = `/${locale}/projects`;

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background decoration - same language as About/WhoWeAre sections */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl sm:h-80 sm:w-80" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Small Label */}
            <Badge
              variant="outline"
              className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {t("badge")}
            </Badge>

            {/* Heading */}
            <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:mt-6 sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-6xl xl:text-7xl">
              {t("title")}{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-x-0 bottom-1 h-[0.3em] rounded-sm bg-primary/20 sm:bottom-1.5" />
                <span className="relative">{t("titleHighlight")}</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              {/* Donate */}
              <Link href={donateHref}>
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full px-7 sm:w-auto"
                >
                  <Heart className="mr-2 size-4 fill-current" />
                  {t("donate")}
                </Button>
              </Link>

              {/* Explore */}
              <Link href={projectsHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full px-7 sm:w-auto"
                >
                  {t("explore")}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>

            {/* Trust / Impact */}
            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              {/* Icons */}
              <div className="flex -space-x-3">
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

              {/* Impact Text */}
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t("livesSupported")}
                </p>

                <p className="text-sm text-muted-foreground">
                  {t("difference")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] border bg-background p-2 shadow-sm">
              <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[440px] lg:h-[560px]">
                <Image
                  src={images[2].src}
                  alt={t(images[2].altKey)}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Card - inset on mobile, floats outside from sm and up */}
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/20 bg-background/95 p-4 shadow-lg backdrop-blur-md sm:inset-x-auto sm:bottom-7 sm:left-7 sm:w-[260px] sm:p-5">
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {t("ourImpact")}
                  </p>

                  <p className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                    10,000+
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {t("programDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -right-4 -top-4 -z-10 size-16 rounded-full border-[10px] border-primary/10 sm:-right-6 sm:-top-6 sm:size-24 sm:border-[12px] lg:-right-8 lg:-top-8 lg:size-32" />

            <div className="absolute -bottom-4 -left-4 -z-10 size-14 rounded-full bg-primary/10 blur-sm sm:-bottom-6 sm:-left-6 sm:size-20 lg:-bottom-8 lg:-left-8 lg:size-28" />
          </div>
        </div>
      </div>

      {/* Moving Image Strip */}
      <div className="relative overflow-hidden border-y bg-background py-3 sm:py-4">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />

        {/* Moving Track */}
      </div>
    </section>
  );
}
