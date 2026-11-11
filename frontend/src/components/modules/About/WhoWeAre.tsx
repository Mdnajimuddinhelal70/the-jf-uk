import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    id: "community",
    icon: UsersRound,
  },
  {
    id: "purpose",
    icon: Target,
  },
  {
    id: "impact",
    icon: Sparkles,
  },
];

export default function WhoWeAre() {
  const t = useTranslations("About.WhoWeAre");

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[420px] rounded-full bg-emerald-100/60 blur-[130px]" />
        <div className="absolute -right-48 bottom-0 size-[420px] rounded-full bg-amber-100/40 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Image Column ───────────────────────────────── */}
          <div className="relative">
            {/* Decorative rings behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 -top-6 -z-10 size-32 rounded-full border border-emerald-900/[0.07] sm:size-40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -bottom-4 -z-10 size-24 rounded-full bg-amber-200/40 blur-2xl sm:size-32"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_80px_-40px_rgba(6,50,30,0.4)] ring-1 ring-emerald-900/10">
              {/* Amber accent bar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300"
              />

              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1788535412/Gemini_Generated_Image_58j2xn58j2xn58j2_xciycp.jpg"
                  alt={t("imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Subtle bottom gradient for depth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#073d2c]/30 to-transparent"
              />
            </div>

            {/* Floating card — inset on mobile, floats on sm+ */}
            <div className="absolute bottom-3 right-3 max-w-[calc(100%-1.5rem)] rounded-2xl border border-emerald-900/10 bg-white/95 p-3.5 shadow-[0_20px_50px_-20px_rgba(6,50,30,0.4)] backdrop-blur-sm sm:-bottom-6 sm:-right-4 sm:max-w-none sm:p-6 lg:-right-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-900/10 sm:size-12">
                  <HeartHandshake className="size-4 fill-amber-400 text-amber-500 sm:size-6" />
                </div>

                <div>
                  <p className="text-base font-bold text-stone-950 sm:text-2xl">
                    {t("floatingCard.title")}
                  </p>

                  <p className="text-[11px] text-stone-500 sm:text-xs">
                    {t("floatingCard.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Content Column ────────────────────────────── */}
          <div className="lg:py-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              <Sparkles className="size-4 fill-amber-400 text-amber-500" />
              {t("badge")}
            </span>

            {/* Heading */}
            <h2 className="mt-6 font-serif text-2xl font-bold leading-[1.15] tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
              {t("title")}{" "}
              <span className="text-emerald-800">{t("titleHighlight")}</span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8 lg:text-lg">
              {t("description")}
            </p>

            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              {t("description2")}
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="group flex gap-4 rounded-2xl p-2 transition-colors hover:bg-white/60"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-900/10 transition-all group-hover:bg-emerald-700 group-hover:text-white">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-stone-950">
                        {t(`highlights.${item.id}.title`)}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-stone-600">
                        {t(`highlights.${item.id}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-950/15 transition-all hover:bg-emerald-800 hover:shadow-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
              >
                {t("cta")}

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
