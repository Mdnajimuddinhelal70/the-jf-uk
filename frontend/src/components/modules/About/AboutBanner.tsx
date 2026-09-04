"use client";

import Image from "next/image";
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
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788534078/Gemini_Generated_Image_u0xagmu0xagmu0xa_tar9b2.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788534362/Gemini_Generated_Image_lx1mkclx1mkclx1m_awfsne.jpg",
  },
];

export default function AboutBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        h-[300px]
        w-full
        overflow-hidden
        bg-black
        sm:h-[480px]
        md:h-[550px]
        lg:h-[620px]
        xl:h-[650px]
      "
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 ${
              isActive
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {/* --------------------------------
                Blurred Background
                Mobile Only
            --------------------------------- */}
            <Image
              src={slide.image}
              alt="Banner Image"
              fill
              aria-hidden="true"
              sizes="100vw"
              className="scale-110 object-cover opacity-50 blur-2xl sm:hidden"
            />

            {/* --------------------------------
                Main Image
            --------------------------------- */}
            <Image
              src={slide.image}
              alt="Banner Image"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-center"
            />

            <div />
          </div>
        );
      })}

      <div
        className="
          absolute
          bottom-5
          right-4
          z-20
          flex
          items-center
          gap-2
          sm:bottom-8
          sm:right-8
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-500
              ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
