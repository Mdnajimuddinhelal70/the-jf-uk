"use client";

import {
  ArrowRight,
  Award,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const primaryButtonClass =
  "group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-700 px-7 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto";

const heroImage =
  "https://res.cloudinary.com/dpgjlcycl/image/upload/v1789741687/Gemini_Generated_Image_d9s8cvd9s8cvd9s8_lnrywa.jpg";

export default function Hero() {
  const t = useTranslations("Home.Hero");
  const locale = useLocale();

  const donateHref = `/${locale}/donate`;
  const projectsHref = `/${locale}/projects`;

  const stats = [
    { value: "10K+", label: t("statStudents"), icon: GraduationCap },
    { value: "500+", label: t("statOrphans"), icon: Heart },
    { value: "15+", label: t("statYears"), icon: Award },
    { value: "2.5K+", label: t("statDonors"), icon: Users },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7]">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[520px] rounded-full bg-emerald-100/60 blur-[130px]" />
        <div className="absolute -right-48 top-[35%] size-[500px] rounded-full bg-amber-100/50 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
        {/* Editorial Intro */}
        <div className="grid items-end gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Main Heading */}
          <div className="max-w-3xl">
            <div className="hero-animate">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-sm backdrop-blur-sm sm:text-xs">
                <Sparkles className="size-3.5 text-amber-500" />
                {t("badge")}
              </span>
            </div>

            <h1 className="hero-animate hero-animate-2 mt-7 max-w-4xl font-serif text-[2.8rem] font-bold leading-[1.08] tracking-[-0.045em] text-stone-950 sm:text-6xl md:text-7xl xl:text-[5.4rem]">
              {t("title")}{" "}
              <span className="relative inline-block text-emerald-800">
                {t("titleHighlight")}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-amber-400 sm:-bottom-3 sm:h-3"
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
          </div>

          {/* Supporting Content */}
          <div className="hero-animate hero-animate-3 flex flex-col items-start gap-7 lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              {t("description")}
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link href={donateHref} className={primaryButtonClass}>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Heart className="relative size-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">{t("donate")}</span>
                <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={projectsHref}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-7 text-sm font-bold text-stone-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:w-auto"
              >
                {t("explore")}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Details */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-stone-200/80 pt-5">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-full bg-emerald-100">
                  <Users className="size-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">
                    {t("livesSupported")}
                  </p>
                  <p className="mt-0.5 text-[11px] text-stone-500">
                    {t("difference")}
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-stone-200 sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-full bg-emerald-100">
                  <ShieldCheck className="size-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">
                    {t("secure")}
                  </p>
                  <p className="mt-0.5 text-[11px] text-stone-500">
                    {t("verified")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Image Stage */}
        <div className="hero-animate-image relative mt-12 sm:mt-16 lg:mt-20">
          {/* Decorative frame */}
          <div className="absolute -right-4 -top-4 -z-10 hidden h-36 w-36 rounded-tr-[3rem] border-r-[3px] border-t-[3px] border-emerald-300/60 sm:block lg:-right-6 lg:-top-6 lg:h-48 lg:w-48" />

          <div className="absolute -bottom-5 -left-5 -z-10 size-32 rounded-full bg-amber-200/50 blur-2xl sm:size-48" />

          <div className="relative h-[420px] overflow-hidden rounded-[1.7rem] bg-emerald-950 shadow-[0_30px_90px_-25px_rgba(6,50,30,0.35)] sm:h-[520px] sm:rounded-[2.5rem] lg:h-[620px]">
            <Image
              src={heroImage}
              alt={t("imageAlt1")}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.025]"
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-stone-950/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/25 via-transparent to-transparent" />

            {/* Live Impact Indicator */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:left-8 sm:top-8">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative size-2.5 rounded-full bg-emerald-600" />
              </span>
              <span className="text-xs font-bold text-stone-800">
                {t("liveImpact")}
              </span>
            </div>

            {/* Donor Information */}
            <div className="absolute right-5 top-5 rounded-2xl border border-white/30 bg-white/95 p-3.5 shadow-xl backdrop-blur-xl sm:right-8 sm:top-8 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-amber-50">
                  <Heart className="size-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <p className="text-lg font-extrabold leading-none text-stone-900 sm:text-xl">
                    2,500+
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-stone-500">
                    {t("donors")}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Impact Panel */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-5 sm:bottom-9 sm:left-9 sm:right-auto sm:w-[390px] sm:rounded-[1.75rem] sm:border sm:border-white/30 sm:bg-white/95 sm:p-6 sm:shadow-2xl sm:backdrop-blur-xl lg:bottom-11 lg:left-11">
              <div className="rounded-2xl border border-white/25 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100">
                    <GraduationCap className="size-5 text-emerald-800" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-stone-500">
                    {t("ourImpact")}
                  </p>
                </div>

                <p className="mt-4 font-serif text-4xl font-bold tracking-tight text-emerald-800 sm:text-5xl">
                  10,000+
                </p>

                <p className="mt-2 max-w-xs text-xs leading-6 text-stone-600 sm:text-sm">
                  {t("programDescription")}
                </p>
              </div>
            </div>

            {/* Trust Rating */}
            <div className="absolute bottom-8 right-8 hidden text-right text-white drop-shadow-lg md:block">
              <div className="mb-2 flex justify-end gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm font-bold">{t("trustedBy")}</p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="hero-animate hero-animate-6 mt-12 sm:mt-16 lg:mt-20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-xs">
              {t("liveImpact")}
            </p>
            <div className="h-px flex-1 bg-stone-200" />
            <Sparkles className="size-4 text-amber-500" />
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative flex items-center gap-3 border-b border-stone-200/80 pb-5 sm:border-b-0 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-700 sm:size-12">
                  <stat.icon className="size-5 text-emerald-800 transition-colors duration-300 group-hover:text-white" />
                </div>

                <div className="min-w-0">
                  <p className="text-2xl font-extrabold tracking-tight text-stone-950 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-stone-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Entrance Animations */}
      <style jsx global>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeScale {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-animate {
          animation: heroFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-animate-image {
          animation: heroFadeScale 1s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.2s;
        }

        .hero-animate-2 {
          animation-delay: 0.12s;
        }

        .hero-animate-3 {
          animation-delay: 0.25s;
        }

        .hero-animate-6 {
          animation: heroFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-animate,
          .hero-animate-image,
          .hero-animate-6 {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
