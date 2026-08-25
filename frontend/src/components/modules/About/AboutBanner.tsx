"use client";

import { ArrowRight, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787664089/jf-uk-banner_nuv3o8.jpg",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589502/WhatsApp_Image_2026-08-24_at_7.54.01_PM_alq2tu.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787586390/WhatsApp_Image_2026-08-24_at_7.51.17_PM_sisrxg.jpg",
  },
];

export default function AboutBanner() {
  const t = useTranslations("About.Banner");

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[520px] overflow-hidden sm:h-[580px] lg:h-[650px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={t(`slides.${slide.id}.title`)}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark overlay */}
          <div className="absolute" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <HeartHandshake className="h-4 w-4" />

              {t("badge")}
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {t(`slides.${currentSlideData.id}.title`)}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {t(`slides.${currentSlideData.id}.description`)}
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="#who-we-are"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {t("cta")}

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={t("slideIndicator", {
              number: index + 1,
            })}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
