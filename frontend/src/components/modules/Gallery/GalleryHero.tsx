"use client";

import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GalleryHero() {
  const t = useTranslations("Gallery.Hero");

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {t("badge")}
            </p>

            {/* Heading */}
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {t("description")}
            </p>

            {/* Explore Button */}
            <a
              href="#gallery"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:gap-3 hover:opacity-90"
            >
              {t("button")}
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589598/WhatsApp_Image_2026-08-24_at_8.09.39_PM_hcwdly.jpg"
                alt={t("imageAlt")}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-primary/10" />

            <div className="pointer-events-none absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full bg-primary/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
