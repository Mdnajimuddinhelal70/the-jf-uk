"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import Image from "next/image";

import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504409/Gemini_Generated_Image_5i691h5i691h5i69_ojatke.jpg",
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787664089/jf-uk-banner_nuv3o8.jpg",
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504694/Gemini_Generated_Image_p2bk5tp2bk5tp2bk_gcez50.jpg",
];

const slides = [
  {
    title: "Together, We Can Change Lives",
    description:
      "Every act of kindness creates hope, opportunity, and a better future for those who need it most.",
  },
  {
    title: "Hope Begins With You",
    description:
      "Your support can bring education, care, and meaningful opportunities to communities in need.",
  },
  {
    title: "Building A Better Tomorrow",
    description:
      "Together, we can create lasting positive change and empower communities.",
  },
  {
    title: "Your Kindness Matters",
    description:
      "Small contributions can make a meaningful difference in someone's life.",
  },
  {
    title: "Empowering Communities",
    description:
      "Creating opportunities and supporting communities through compassion and action.",
  },
  {
    title: "Be The Reason Someone Smiles",
    description:
      "Join us in spreading kindness and making a meaningful difference.",
  },
  {
    title: "Serving With Compassion",
    description:
      "Our mission is to serve humanity with dignity, care, and compassion.",
  },
  {
    title: "Every Contribution Counts",
    description:
      "Together, we can reach more people and create a lasting impact.",
  },
  {
    title: "Make A Difference Today",
    description:
      "Stand with us and help create a brighter future for families and communities.",
  },
  {
    title: "Give Hope. Change Lives.",
    description:
      "Your generosity can become someone's opportunity for a better tomorrow.",
  },
];

export default function BannerSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full overflow-hidden">
      {/* =========================
          MAIN BANNER
      ========================== */}

      <Swiper
        loop={true}
        speed={500}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, Navigation, Thumbs, FreeMode]}
        className="banner-main h-[300px] w-full sm:h-[420px] md:h-[550px] lg:h-[650px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative h-full w-full">
              {/* Image */}
              <Image
                src={image}
                alt={`Jannath Foundation banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="oobject-coverr"
              />

              {/* Main dark overlay */}
              <div className="absolute inset-0" />

              {/* Left gradient */}
              <div className="absolute inset-0 " />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0" />

              {/* =========================
                  CONTENT
              ========================== */}

              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-5 sm:px-8 lg:px-12">
                  <div className="max-w-3xl text-white">
                    {/* Badge */}

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md sm:mb-6 sm:text-sm">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      The Jannath Foundation UK
                    </div>

                    {/* Title */}

                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slides[index].title}
                    </h1>

                    {/* Description */}

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base md:text-lg">
                      {slides[index].description}
                    </p>

                    {/* Buttons */}

                    <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                      <Link href="/donate">
                        <button
                          type="button"
                          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-7 sm:py-3.5"
                        >
                          Donate Now
                        </button>
                      </Link>
                      <Link href="/projects">
                        <button
                          type="button"
                          className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:px-7 sm:py-3.5"
                        >
                          Explore Our Work
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =========================
          THUMBNAILS
      ========================== */}

      <div className="absolute bottom-4 left-0 z-20 w-full sm:bottom-6">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <Swiper
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            spaceBetween={8}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            breakpoints={{
              480: {
                slidesPerView: 5,
                spaceBetween: 8,
              },

              640: {
                slidesPerView: 6,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 7,
                spaceBetween: 10,
              },

              1024: {
                slidesPerView: 8,
                spaceBetween: 12,
              },

              1280: {
                slidesPerView: 10,
                spaceBetween: 12,
              },
            }}
            className="banner-thumbs"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={`thumb-${index}`}
                className="!h-14 cursor-pointer overflow-hidden rounded-lg border-2 border-transparent opacity-70 transition-all duration-300 sm:!h-16 md:!h-20"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 transition-all duration-300 hover:bg-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
