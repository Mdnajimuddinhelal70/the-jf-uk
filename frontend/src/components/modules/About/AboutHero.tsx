"use client";

import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutHero() {
  const t = useTranslations("About.AboutHero");

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7]">
      {/* ============================================================
          Background Layers
      ============================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Soft brand glows */}
        <div className="absolute -left-48 top-0 size-[520px] rounded-full bg-emerald-100/70 blur-[140px]" />
        <div className="absolute -right-48 bottom-0 size-[520px] rounded-full bg-amber-100/50 blur-[140px]" />

        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />

        {/* Decorative rings */}
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full border border-emerald-900/[0.06]" />
        <div className="absolute left-1/2 top-0 size-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full border border-emerald-900/[0.04]" />
        <div className="absolute left-1/2 top-0 size-[1000px] -translate-x-1/2 -translate-y-1/3 rounded-full border border-emerald-900/[0.02]" />

        {/* Bottom fade to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#fbfbf7]" />
      </div>

      {/* ============================================================
          Content
      ============================================================ */}
      <div className="container relative mx-auto px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* ── Badge ─────────────────────────────────────────── */}
          <div className="flex justify-center">
            <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-emerald-200/80 bg-white/90 px-5 py-2 text-sm font-semibold text-emerald-800 shadow-[0_4px_20px_-8px_rgba(6,50,30,0.25)] backdrop-blur-sm">
              {/* inner glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-emerald-50/0 via-emerald-50/60 to-emerald-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <HeartHandshake
                className="relative size-4 fill-amber-400 text-amber-500"
                aria-hidden="true"
              />

              <span className="relative">{t("badge")}</span>

              <Sparkles
                className="relative size-3.5 text-amber-400"
                aria-hidden="true"
              />
            </span>
          </div>

          {/* ── Heading ────────────────────────────────────────── */}
          <h1 className="mt-8 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-stone-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("title")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>

              {/* underline flourish */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 z-0 h-[6px] rounded-full bg-gradient-to-r from-amber-300/0 via-amber-300/70 to-amber-300/0 sm:-bottom-2 sm:h-2"
              />
            </span>
          </h1>

          {/* ── Description ────────────────────────────────────── */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
            {t("description")}
          </p>

          {/* ── Breadcrumb ─────────────────────────────────────── */}
          <nav
            aria-label="Breadcrumb"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-sm text-stone-500 shadow-sm backdrop-blur-sm"
          >
            <Link
              href="/"
              className="rounded transition-colors hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
            >
              {t("home")}
            </Link>

            <ArrowRight
              className="size-3.5 text-stone-400"
              aria-hidden="true"
            />

            <span aria-current="page" className="font-semibold text-stone-900">
              {t("about")}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
