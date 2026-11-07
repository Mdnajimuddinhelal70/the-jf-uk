"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const primaryButtonClass =
  "group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-700 px-7 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto";

export default function FounderSection() {
  const t = useTranslations("FounderSection.Section");

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7] py-20 sm:py-24 lg:py-32">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[480px] rounded-full bg-emerald-100/60 blur-[120px]" />
        <div className="absolute -right-48 bottom-0 size-[450px] rounded-full bg-amber-100/40 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Editorial Section Heading */}
        <div className="mb-12 grid items-end gap-6 lg:mb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="founder-animate">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-sm backdrop-blur-sm sm:text-xs">
                <Sparkles className="size-3.5 text-amber-500" />
                {t("badge")}
              </span>
            </div>

            <h2 className="founder-animate founder-animate-2 mt-7 max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-stone-950 sm:text-5xl lg:text-6xl">
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

          <p className="founder-animate founder-animate-3 max-w-xl text-base leading-8 text-stone-600 lg:justify-self-end lg:pb-2 lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Founder Spotlight */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#073d2c] shadow-[0_30px_90px_-30px_rgba(6,50,30,0.35)] sm:rounded-[2.5rem]">
          {/* Green Background Atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-32 -top-40 size-[420px] rounded-full border border-white/[0.07]" />
            <div className="absolute -left-20 -top-28 size-[300px] rounded-full border border-white/[0.07]" />
            <div className="absolute -bottom-52 right-0 size-[450px] rounded-full bg-emerald-400/10 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] bg-[size:30px_30px] opacity-[0.035]" />
          </div>

          <div className="relative grid lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr]">
            {/* Founder Story */}
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
              <div className="founder-animate-4">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                  <span className="h-px w-8 bg-amber-400" />
                  {t("smallTitle")}
                </span>

                <h3 className="mt-6 max-w-xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
                  {t("heading")}
                </h3>

                <div className="mt-7 h-1 w-16 rounded-full bg-amber-400" />

                <div className="mt-7 max-w-xl space-y-5 text-sm leading-8 text-emerald-50/75 sm:text-base sm:leading-8">
                  <p>{t("paragraph1")}</p>
                  <p>{t("paragraph2")}</p>
                </div>
              </div>

              {/* Founder Identity */}
              <div className="mt-9 flex items-start gap-4 border-t border-white/15 pt-7">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <Award className="size-5 text-amber-300" />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-white sm:text-xl">
                    {t("name")}
                  </h4>

                  <p className="mt-1 text-sm font-semibold text-amber-300">
                    {t("designation")}
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-emerald-100/60">
                    {t("organization")}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link href="/about/founder" className={primaryButtonClass}>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">{t("button")}</span>

                  <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Founder Portrait */}
            <div className="founder-animate-image relative min-h-[430px] px-5 pb-5 sm:min-h-[560px] sm:px-8 sm:pb-8 lg:min-h-[650px] lg:px-0 lg:pb-0 lg:pt-8">
              <div className="relative h-full min-h-[410px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-l-[2rem] lg:rounded-r-none">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1789741018/Gemini_Generated_Image_1y394x1y394x1y39_kvlci7.jpg"
                  alt={t("imageAlt")}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-1000 hover:scale-[1.035]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052c20]/85 via-transparent to-[#052c20]/10" />

                {/* Portrait Caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <div className="max-w-sm border-l-2 border-amber-400 pl-4">
                    <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                      {t("name")}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-white/80">
                      {t("designation")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Gold Detail */}
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 hidden h-32 w-32 border-r-[3px] border-t-[3px] border-amber-400/70 lg:block"
              />
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-emerald-200" />
          <span className="size-2 rotate-45 bg-amber-400" />
          <span className="h-px w-12 bg-emerald-200" />
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes founderFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes founderFadeScale {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .founder-animate {
          animation: founderFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .founder-animate-2 {
          animation-delay: 0.12s;
        }

        .founder-animate-3 {
          animation-delay: 0.24s;
        }

        .founder-animate-4 {
          animation: founderFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.3s
            both;
        }

        .founder-animate-image {
          animation: founderFadeScale 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s
            both;
        }

        @media (prefers-reduced-motion: reduce) {
          .founder-animate,
          .founder-animate-2,
          .founder-animate-3,
          .founder-animate-4,
          .founder-animate-image {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
