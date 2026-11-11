"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787664089/jf-uk-banner_nuv3o8.jpg",
    alt: "The Jannath Foundation UK banner",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788534078/Gemini_Generated_Image_u0xagmu0xagmu0xa_tar9b2.jpg",
    alt: "Community support and humanitarian work",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788534362/Gemini_Generated_Image_lx1mkclx1mkclx1m_awfsne.jpg",
    alt: "Education and orphan care initiatives",
  },
];

export default function AboutBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Respect users who prefer reduced motion — no auto-advance.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[300px] w-full overflow-hidden bg-[#073d2c] sm:h-[480px] md:h-[550px] lg:h-[620px] xl:h-[650px]">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {/* Blurred background — mobile only */}
            <Image
              src={slide.image}
              alt=""
              fill
              aria-hidden="true"
              sizes="100vw"
              className="scale-110 object-cover opacity-50 blur-2xl sm:hidden"
            />

            {/* Main image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Premium gradient overlay — harmonized with emerald/amber theme */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#073d2c]/70 via-[#073d2c]/10 to-transparent"
            />
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-5 right-4 z-20 flex items-center gap-1 sm:bottom-8 sm:right-8">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setCurrentSlide(index)}
              className="group flex h-8 items-center justify-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-8 bg-amber-400"
                    : "w-2 bg-white/50 group-hover:bg-white/80"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
