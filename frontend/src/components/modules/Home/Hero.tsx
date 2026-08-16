"use client";

import { ArrowRight, Heart, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    altKey: "imageAlt1",
  },
  {
    src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
    altKey: "imageAlt2",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    altKey: "imageAlt3",
  },
];

export default function Hero() {
  const t = useTranslations("Home.Hero");

  const infiniteImages = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-[#f7faf8]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-sm">
                {t("badge")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              {t("badge")}{" "}
              <span className="text-emerald-600">{t("titleHighlight")}</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Donate */}
              <Link href="/donate">
                <Button size="lg" className="h-12 rounded-full px-7">
                  <Heart className="mr-2 size-4 fill-current" />
                  {t("donate")}
                </Button>
              </Link>

              {/* Explore */}
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-7"
                >
                  {t("explore")}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>

            {/* Trust / Impact */}
            <div className="mt-10 flex items-center gap-4">
              {/* Icons */}
              <div className="flex -space-x-3">
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100">
                  <Users className="size-5 text-emerald-700" />
                </div>

                <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-emerald-200">
                  <Heart className="size-5 text-emerald-700" />
                </div>

                <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-emerald-300">
                  <Heart className="size-5 text-white" />
                </div>
              </div>

              {/* Impact Text */}
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {t("livesSupported")}
                </p>

                <p className="text-sm text-slate-500">
                  {t("impactDescription")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] border bg-white p-2 shadow-2xl shadow-emerald-900/10">
              <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] sm:h-[500px] lg:h-[560px]">
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

                {/* Floating Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:w-[280px]">
                  <p className="text-sm font-medium text-slate-500">
                    {t("impact")}
                  </p>

                  <p className="mt-1 text-3xl font-bold text-emerald-700">
                    10,000+
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {t("impactDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -right-5 -top-5 -z-10 size-24 rounded-full border-[12px] border-emerald-100 sm:-right-8 sm:-top-8 sm:size-32" />

            <div className="absolute -bottom-5 -left-5 -z-10 size-20 rounded-full bg-emerald-100/70 blur-sm sm:-bottom-8 sm:-left-8 sm:size-28" />
          </div>
        </div>
      </div>

      {/* Moving Image Strip */}
      <div className="relative overflow-hidden border-y bg-white py-4">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Moving Track */}
        <div className="hero-image-track flex w-max gap-4">
          {infiniteImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-40"
            >
              <Image
                src={image.src}
                alt={t(image.altKey)}
                fill
                sizes="160px"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
