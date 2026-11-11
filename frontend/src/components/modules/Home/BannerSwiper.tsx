"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

type BannerSlide = {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const slides: BannerSlide[] = [
  {
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504409/Gemini_Generated_Image_5i691h5i691h5i69_ojatke.jpg",
    eyebrow: "The Jannath Foundation UK",
    title: "Serving Humanity,",
    highlight: "Building Futures",
    subtitle:
      "Empowering orphans, students and communities through education, care and compassion.",
    ctaLabel: "Donate Now",
    ctaHref: "/donate",
    secondaryLabel: "Learn More",
    secondaryHref: "/about",
  },
  {
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787664089/jf-uk-banner_nuv3o8.jpg",
    eyebrow: "Our Mission",
    title: "Every Child Deserves",
    highlight: "a Bright Tomorrow",
    subtitle:
      "Free education, meals and facilities for orphans — supported by kind hearts like yours.",
    ctaLabel: "Our Projects",
    ctaHref: "/projects",
    secondaryLabel: "Learn More",
    secondaryHref: "/about",
  },
  {
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504694/Gemini_Generated_Image_p2bk5tp2bk5tp2bk_gcez50.jpg",
    eyebrow: "Together We Can",
    title: "Your Kindness",
    highlight: "Changes Lives",
    subtitle:
      "Join hands with us to bring hope, dignity and opportunity to those who need it most.",
    ctaLabel: "Get Involved",
    ctaHref: "/contact",
    secondaryLabel: "Learn More",
    secondaryHref: "/about",
  },
];

const stats = [
  { value: "10K+", label: "Students supported" },
  { value: "500+", label: "Orphans cared for" },
  { value: "15+", label: "Years of service" },
];

const primaryButtonClass =
  "group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-700 px-5 text-sm font-bold text-white shadow-lg shadow-black/25 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#073d2c] sm:w-auto sm:px-7";

const secondaryButtonClass =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#073d2c] sm:w-auto sm:px-7";

const arrowButtonClass =
  "pointer-events-auto flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:size-10 lg:size-12";

export default function BannerSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section
      aria-label="The Jannath Foundation UK introduction"
      className="w-full"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#073d2c] shadow-[0_24px_70px_-28px_rgba(6,50,30,0.45)]">
        <Swiper
          loop
          speed={900}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".banner-prev",
            nextEl: ".banner-next",
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, Navigation, EffectFade]}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.image} className="!flex !h-auto">
              <div className="flex w-full flex-col">
                {/* ---------- Image: clean, nothing on top of faces ---------- */}
                <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#052c20]">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight}`}
                    fill
                    priority={index === 0}
                    quality={90}
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className="object-cover object-center"
                  />
                </div>

                {/* ---------- Content bar ---------- */}
                <div className="relative flex-1 overflow-hidden border-t-[3px] border-amber-400">
                  {/* Soft background decoration */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                  >
                    <div className="absolute -left-24 -top-32 size-[300px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -bottom-40 right-0 size-[360px] rounded-full bg-emerald-400/10 blur-[90px]" />
                  </div>

                  <div className="relative px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8 lg:px-12 lg:pb-10 lg:pt-10">
                    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
                      {/* Text */}
                      <div>
                        <div className="banner-animate banner-animate-1 flex items-center gap-3">
                          <span className="h-px w-8 bg-amber-400" />
                          <span className="text-sm font-semibold tracking-wide text-amber-300">
                            {slide.eyebrow}
                          </span>
                        </div>

                        <h1 className="banner-animate banner-animate-2 mt-3 font-serif text-[1.75rem] font-bold leading-[1.18] tracking-tight text-white sm:text-4xl lg:mt-4 lg:text-5xl">
                          {slide.title}
                          <span className="block text-amber-300">
                            {slide.highlight}
                          </span>
                        </h1>

                        <p className="banner-animate banner-animate-3 mt-3 max-w-xl text-[15px] leading-7 text-emerald-50/80 sm:text-base sm:leading-8 lg:mt-4">
                          {slide.subtitle}
                        </p>
                      </div>

                      {/* Actions + stats */}
                      <div className="w-full lg:max-w-md lg:justify-self-end">
                        <div className="banner-animate banner-animate-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                          <Link
                            href={slide.ctaHref}
                            className={primaryButtonClass}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                            />
                            <span className="relative">{slide.ctaLabel}</span>
                            <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>

                          {slide.secondaryLabel && (
                            <Link
                              href={slide.secondaryHref || "/about"}
                              className={secondaryButtonClass}
                            >
                              {slide.secondaryLabel}
                            </Link>
                          )}
                        </div>

                        <dl className="banner-animate banner-animate-5 mt-5 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.06] py-3.5 sm:py-4">
                          {stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="px-3 text-center sm:px-4"
                            >
                              <dd className="font-serif text-xl font-bold text-white sm:text-2xl">
                                {stat.value}
                              </dd>
                              <dt className="mt-1 text-[11px] leading-4 text-emerald-100/70 sm:text-xs">
                                {stat.label}
                              </dt>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows: only on the left/right edges of the image, never over faces */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex aspect-video items-center justify-between px-2 sm:px-4 lg:px-6">
          <button
            type="button"
            aria-label="Previous slide"
            className={`banner-prev ${arrowButtonClass}`}
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className={`banner-next ${arrowButtonClass}`}
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>
        </div>

        {/* Indicators: in the green bar, outside the image */}
        <div className="relative z-10 flex items-center justify-center gap-2.5 border-t border-white/10 px-5 py-4 sm:px-8 lg:justify-start lg:px-12">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              aria-current={activeIndex === slideIndex ? "true" : undefined}
              onClick={() => swiperInstance?.slideToLoop(slideIndex)}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                activeIndex === slideIndex
                  ? "w-10 bg-amber-400"
                  : "w-5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes bannerFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-slide-active .banner-animate {
          animation: bannerFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .swiper-slide-active .banner-animate-1 {
          animation-delay: 0.1s;
        }
        .swiper-slide-active .banner-animate-2 {
          animation-delay: 0.2s;
        }
        .swiper-slide-active .banner-animate-3 {
          animation-delay: 0.3s;
        }
        .swiper-slide-active .banner-animate-4 {
          animation-delay: 0.4s;
        }
        .swiper-slide-active .banner-animate-5 {
          animation-delay: 0.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .swiper-slide-active .banner-animate {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
