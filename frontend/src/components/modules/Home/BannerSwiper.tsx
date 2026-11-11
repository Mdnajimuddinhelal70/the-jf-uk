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
  { value: "10K+", label: "Students Supported" },
  { value: "500+", label: "Orphans Cared" },
  { value: "15+", label: "Years of Service" },
];

const primaryButtonClass =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950";

export default function BannerSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section
      aria-label="The Jannath Foundation UK introduction"
      className="relative isolate w-full overflow-hidden bg-stone-950"
    >
      <Swiper
        loop
        speed={1000}
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
        className="banner-main h-[780px] w-full sm:h-[820px] md:h-[740px] lg:h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#101d19] md:block">
              {/* Responsive Banner Image */}
              <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#101d19] md:absolute md:inset-0 md:aspect-auto">
                <Image
                  src={slide.image}
                  alt={slide.title + " " + slide.highlight}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-contain md:object-cover md:object-center"
                />

                {/* Mobile image overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101d19]/5 to-[#101d19]/25 md:hidden" />
              </div>

              {/* Desktop Image Overlays */}
              <div className="absolute inset-0 hidden bg-gradient-to-r from-[#101d19]/95 via-[#101d19]/75 to-[#101d19]/20 md:block" />

              <div className="absolute inset-0 hidden bg-gradient-to-t from-[#101d19]/90 via-transparent to-[#101d19]/30 md:block" />

              <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,rgba(0,0,0,0.2)_100%)] md:block" />

              {/* Content Area */}
              <div className="relative z-10 flex min-h-0 flex-1 items-start bg-gradient-to-b from-[#101d19] via-[#101d19] to-[#132a22] md:h-full md:items-center md:bg-none">
                <div className="mx-auto w-full max-w-7xl px-5 pt-7 pb-24 sm:px-8 sm:pt-8 md:px-8 md:pt-0 md:pb-16 lg:px-12">
                  <div className="max-w-3xl text-white">
                    {/* Eyebrow */}
                    <div className="banner-animate banner-animate-1 flex items-center gap-3">
                      <span className="h-px w-10 bg-amber-400" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300 sm:text-xs">
                        {slide.eyebrow}
                      </span>
                    </div>

                    {/* Heading */}
                    <h1 className="banner-animate banner-animate-2 mt-5 font-serif text-[2.35rem] font-bold leading-[1.12] tracking-tight sm:text-5xl md:mt-6 md:text-6xl lg:text-[4.5rem]">
                      {slide.title}{" "}
                      <span className="relative inline-block text-amber-300">
                        {slide.highlight}

                        <svg
                          aria-hidden="true"
                          viewBox="0 0 300 14"
                          preserveAspectRatio="none"
                          className="absolute -bottom-2 left-0 h-2.5 w-full text-amber-400/70"
                        >
                          <path
                            d="M2 10 Q 75 2, 150 8 T 298 5"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="banner-animate banner-animate-3 mt-6 max-w-xl text-sm leading-7 text-stone-200 sm:text-base sm:leading-8 md:mt-7 md:text-lg">
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="banner-animate banner-animate-4 mt-7 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-9">
                      <Link href={slide.ctaHref} className={primaryButtonClass}>
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        <span className="relative">{slide.ctaLabel}</span>

                        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      {slide.secondaryLabel && (
                        <Link
                          href={slide.secondaryHref || "/about"}
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        >
                          {slide.secondaryLabel}

                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>

                    {/* Impact Statistics */}
                    <div className="banner-animate banner-animate-5 mt-12 hidden flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/20 pt-7 md:flex">
                      {stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="font-serif text-2xl font-bold text-white sm:text-3xl">
                            {stat.value}
                          </div>

                          <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.13em] text-stone-300 sm:text-[11px]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden items-center pr-6 md:flex lg:pr-10">
        <div className="pointer-events-auto flex flex-col gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            className="banner-prev flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="banner-next flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto w-full max-w-7xl px-5 pb-6 sm:px-8 sm:pb-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => swiperInstance?.slideToLoop(index)}
                  className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-11 bg-emerald-400"
                      : "w-6 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-baseline gap-2 font-mono text-white">
              <span className="text-xl font-bold sm:text-2xl">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="text-xs text-white/50">
                / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes bannerFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-slide-active .banner-animate {
          animation: bannerFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .swiper-slide-active .banner-animate-1 {
          animation-delay: 0.1s;
        }

        .swiper-slide-active .banner-animate-2 {
          animation-delay: 0.25s;
        }

        .swiper-slide-active .banner-animate-3 {
          animation-delay: 0.4s;
        }

        .swiper-slide-active .banner-animate-4 {
          animation-delay: 0.55s;
        }

        .swiper-slide-active .banner-animate-5 {
          animation-delay: 0.7s;
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
