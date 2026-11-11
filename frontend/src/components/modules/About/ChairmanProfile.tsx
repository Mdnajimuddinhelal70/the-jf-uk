import { ArrowRight, HeartHandshake, MapPin, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ChairmanProfile() {
  const t = useTranslations("About.ChairmanProfile");

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[460px] rounded-full bg-emerald-100/60 blur-[130px]" />
        <div className="absolute -right-48 bottom-0 size-[460px] rounded-full bg-amber-100/40 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Heading ──────────────────────────────── */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
            <HeartHandshake className="size-4 fill-amber-400 text-amber-500" />
            {t("badge")}
          </span>

          <h2 className="mt-6 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-emerald-800">{t("titleHighlight")}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:leading-8 lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* ── Main Profile Card ────────────────────────────── */}
        <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_80px_-40px_rgba(6,50,30,0.35)] ring-1 ring-emerald-900/10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* ── Chairman Image ──────────────────────────── */}
            <div className="relative min-h-[520px] overflow-hidden bg-emerald-950 sm:min-h-[620px] lg:min-h-[700px]">
              <Image
                src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1788627887/ChiarmanP_gkvafg.jpg"
                alt={t("imageAlt")}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                width={800}
                height={1000}
                priority
              />

              {/* Amber accent bar on top */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300"
              />

              {/* Brand-tinted overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#073d2c]/95 via-[#073d2c]/40 to-transparent p-6 sm:p-8">
                <div className="text-white">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-300">
                    {t("chairman.role")}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
                    {t("chairman.name")}
                  </h3>
                </div>
              </div>
            </div>

            {/* ── Content ─────────────────────────────────── */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              {/* Quote icon */}
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-900/10">
                <Quote className="size-6 text-emerald-700" />
              </div>

              {/* Quote */}
              <blockquote className="mt-5 font-serif text-xl font-medium leading-8 tracking-tight text-stone-900 sm:text-2xl sm:leading-9">
                “{t("chairman.quote")}”
              </blockquote>

              {/* Name block */}
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  {t("chairman.profileLabel")}
                </p>

                <h3 className="mt-2 font-serif text-3xl font-bold tracking-tight text-stone-950">
                  {t("chairman.name")}
                </h3>

                <p className="mt-2 text-sm text-stone-500">
                  {t("chairman.position")}
                </p>
              </div>

              {/* Biography */}
              <div className="mt-7">
                <p className="text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  {t("chairman.biography.paragraph1")}
                </p>

                <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  {t("chairman.biography.paragraph2")}
                </p>
              </div>

              {/* Details */}
              <div className="mt-8 grid gap-5 border-t border-emerald-900/10 pt-7 sm:grid-cols-2">
                {/* Location */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-900/10">
                    <MapPin className="size-5 text-emerald-700" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                      {t("chairman.details.location.label")}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-stone-900">
                      {t("chairman.details.location.value")}
                    </p>
                  </div>
                </div>

                {/* Leadership */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-900/10">
                    <HeartHandshake className="size-5 text-emerald-700" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                      {t("chairman.details.leadership.label")}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-stone-900">
                      {t("chairman.details.leadership.value")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#chairman-message"
                  className="group inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-5 py-2.5 text-sm font-bold text-emerald-800 shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  {t("chairman.cta")}

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
