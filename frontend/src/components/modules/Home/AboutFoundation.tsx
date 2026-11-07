"use client";

import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const primaryButtonClass =
  "group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-700 px-7 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto";

export default function AboutFoundation() {
  const t = useTranslations("Home.AboutFoundation");

  const foundationHighlights = [
    {
      icon: Target,
      title: t("highlights.mission.title"),
      description: t("highlights.mission.description"),
      number: "01",
    },
    {
      icon: Users,
      title: t("highlights.community.title"),
      description: t("highlights.community.description"),
      number: "02",
    },
    {
      icon: Heart,
      title: t("highlights.values.title"),
      description: t("highlights.values.description"),
      number: "03",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7] py-20 sm:py-24 lg:py-32">
      {/* Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[450px] rounded-full bg-emerald-100/60 blur-[120px]" />
        <div className="absolute -right-48 bottom-0 size-[450px] rounded-full bg-amber-100/40 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="mb-12 grid items-end gap-7 lg:mb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="about-animate">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-sm backdrop-blur-sm sm:text-xs">
                <Sparkles className="size-3.5 text-amber-500" />
                {t("badge")}
              </span>
            </div>

            <h2 className="about-animate about-animate-2 mt-7 max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-stone-950 sm:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="relative inline-block text-emerald-800">
                {t("titleHighlight")}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-amber-400"
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
            </h2>
          </div>

          <p className="about-animate about-animate-3 max-w-xl text-base leading-8 text-stone-600 lg:justify-self-end lg:pb-2 lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Main Foundation Story */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Mission Visual */}
          <div className="about-animate-image relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#073d2c] p-7 shadow-[0_25px_70px_-25px_rgba(6,50,30,0.35)] sm:min-h-[500px] sm:rounded-[2.5rem] sm:p-10 lg:min-h-[560px]">
            {/* Decorative Rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-28 size-[390px] rounded-full border border-white/[0.09]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-[265px] rounded-full border border-white/[0.09]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-36 -left-28 size-[350px] rounded-full bg-emerald-400/10 blur-[70px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] bg-[size:28px_28px] opacity-[0.045]"
            />

            <div className="relative flex h-full min-h-[360px] flex-col justify-between sm:min-h-[420px]">
              {/* Visual Header */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/70 sm:text-xs">
                  {t("whoWeAre")}
                </span>

                <div className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <Heart className="size-4 text-amber-300" />
                </div>
              </div>

              {/* Main Mission Statement */}
              <div className="relative py-12">
                <div className="flex size-20 items-center justify-center rounded-[1.7rem] border border-white/15 bg-white/10 shadow-xl backdrop-blur-sm sm:size-24">
                  <Heart
                    className="size-10 text-amber-300 sm:size-12"
                    fill="currentColor"
                  />
                </div>

                <p className="mt-8 max-w-md font-serif text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[2.8rem]">
                  {t("impactTitle")}
                </p>

                <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-50/75 sm:text-base sm:leading-8">
                  {t("impactDescription")}
                </p>
              </div>

              {/* Bottom Label */}
              <div className="flex items-center gap-3 border-t border-white/15 pt-5">
                <span className="size-2 rounded-full bg-amber-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100/70 sm:text-xs">
                  {t("commitment")}
                </span>
              </div>
            </div>

            {/* Commitment Card */}
            <div className="absolute right-5 top-20 rounded-2xl border border-white/20 bg-white p-4 shadow-2xl sm:right-8 sm:top-24 sm:p-5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100">
                <ShieldCheck className="size-5 text-emerald-800" />
              </div>

              <p className="mt-3 font-serif text-3xl font-bold tracking-tight text-emerald-800">
                100%
              </p>

              <p className="mt-1 max-w-[105px] text-[11px] font-semibold leading-4 text-stone-500">
                {t("commitment")}
              </p>
            </div>
          </div>

          {/* Foundation Description */}
          <div className="about-animate-4 flex flex-col justify-center py-3 lg:py-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              <span className="h-px w-8 bg-amber-500" />
              {t("whoWeAre")}
            </span>

            <h3 className="mt-6 max-w-xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-stone-950 sm:text-4xl lg:text-[2.8rem]">
              {t("heading")}
            </h3>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-stone-600">
              <p>{t("paragraphOne")}</p>
              <p>{t("paragraphTwo")}</p>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link href="/about" className={primaryButtonClass}>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">{t("learnMore")}</span>

                <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Foundation Highlights */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-stone-200" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-xs">
              {t("whoWeAre")}
            </span>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {foundationHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="about-animate group relative overflow-hidden rounded-[1.7rem] border border-stone-200/80 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:p-8"
                  style={{ animationDelay: `${0.45 + index * 0.12}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-700">
                      <Icon className="size-5 text-emerald-800 transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <span className="font-serif text-sm font-bold tracking-widest text-stone-300">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-7 font-serif text-xl font-bold text-stone-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-700 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutFadeScale {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .about-animate {
          animation: aboutFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .about-animate-2 {
          animation-delay: 0.12s;
        }

        .about-animate-3 {
          animation-delay: 0.24s;
        }

        .about-animate-4 {
          animation: aboutFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
        }

        .about-animate-image {
          animation: aboutFadeScale 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-animate,
          .about-animate-2,
          .about-animate-3,
          .about-animate-4,
          .about-animate-image {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
