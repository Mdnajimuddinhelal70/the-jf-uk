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
    <section className="relative h-[420px] overflow-hidden sm:h-[560px] lg:h-[650px]">
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

          {/* Gradient - stronger from bottom on mobile so text stays readable over a shorter banner */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-14 sm:items-center sm:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
              <HeartHandshake className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

              {t("badge")}
            </div>

            {/* Heading */}
            <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-4xl sm:leading-tight lg:text-5xl xl:text-6xl">
              {t(`slides.${currentSlideData.id}.title`)}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              {t(`slides.${currentSlideData.id}.description`)}
            </p>

            {/* CTA */}
            <div className="mt-5 sm:mt-8">
              <Link
                href="#who-we-are"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg sm:px-6 sm:py-3"
              >
                {t("cta")}

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}

      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
        >
          {/* Blurred backdrop - mobile only, fills the empty space object-contain leaves */}
          <Image
            src={slide.image}
            alt=""
            fill
            aria-hidden="true"
            className="scale-110 object-cover opacity-70 blur-2xl sm:hidden"
          />

          {/* Actual image - full image visible on mobile, cropped-to-fill on larger screens */}
          <Image
            src={slide.image}
            alt={t(`slides.${slide.id}.title`)}
            fill
            priority={index === 0}
            className="object-contain sm:object-cover"
            sizes="100vw"
          />

          {/* Gradient */}
          <div className="absolute inset-0" />
        </div>
      ))}
    </section>
  );
}
