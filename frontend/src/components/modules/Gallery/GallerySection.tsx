"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589598/WhatsApp_Image_2026-08-24_at_8.09.39_PM_hcwdly.jpg",
    category: "events",
    title: "Community Event",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589502/WhatsApp_Image_2026-08-24_at_7.54.01_PM_alq2tu.jpg",
    category: "education",
    title: "Education Support",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589403/WhatsApp_Image_2026-08-24_at_8.11.46_PM_m9vlhb.jpg",
    category: "community",
    title: "Community Support",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787586527/WhatsApp_Image_2026-08-24_at_7.54.12_PM_tdl5sb.jpg",
    category: "charity",
    title: "Charity Activity",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1772563374/doctor4.jpg-1772563371804.jpg",
    category: "events",
    title: "Foundation Event",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787586390/WhatsApp_Image_2026-08-24_at_7.51.17_PM_sisrxg.jpg",
    category: "education",
    title: "Learning Support",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787679525/WhatsApp_Image_2026-08-24_at_7.54.05_PM_stb1cs.jpg",
    category: "community",
    title: "Community Initiative",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787679525/WhatsApp_Image_2026-08-24_at_7.51.17_PM_pbwenx.jpg",
    category: "charity",
    title: "Charity Program",
  },
];

const categories = [
  "all",
  "events",
  "education",
  "community",
  "charity",
] as const;

type Category = (typeof categories)[number];

export default function GallerySection() {
  const t = useTranslations("Gallery.GallerySection");

  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="bg-background py-20 sm:py-24 lg:py-28">
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

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {t(`categories.${category}`)}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-muted"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/45" />

                {/* Image Info */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                    {t(`categories.${item.category}`)}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">{t("empty")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
