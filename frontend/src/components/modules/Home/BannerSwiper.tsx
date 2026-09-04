"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504409/Gemini_Generated_Image_5i691h5i691h5i69_ojatke.jpg",
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787664089/jf-uk-banner_nuv3o8.jpg",
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504694/Gemini_Generated_Image_p2bk5tp2bk5tp2bk_gcez50.jpg",
];

export default function BannerSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full overflow-hidden">
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
        className="banner-main h-[260px] w-full sm:h-[420px] md:h-[550px] lg:h-[650px]"
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

              <div className="absolute inset-x-0" />

              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-5 sm:px-8 lg:px-12">
                  <div className="max-w-3xl text-white"></div>
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
