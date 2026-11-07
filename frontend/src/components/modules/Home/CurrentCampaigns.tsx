"use client";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    id: 1,
    key: "education",
    raised: 7200,
    goal: 10000,
    supporters: 124,
    daysLeft: 18,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787586390/WhatsApp_Image_2026-08-24_at_7.51.17_PM_sisrxg.jpg",
  },
  {
    id: 2,
    key: "water",
    raised: 5400,
    goal: 8000,
    supporters: 89,
    daysLeft: 24,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    key: "food",
    raised: 8600,
    goal: 12000,
    supporters: 167,
    daysLeft: 12,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787586527/WhatsApp_Image_2026-08-24_at_7.54.12_PM_tdl5sb.jpg",
  },
] as const;

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

function CampaignProgress({
  raised,
  goal,
  supporters,
  featured = false,
}: {
  raised: number;
  goal: number;
  supporters: number;
  featured?: boolean;
}) {
  const t = useTranslations("Home.CurrentCampaigns");

  const progress = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div>
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
            {t("raised")}
          </p>
          <p
            className={`mt-1 font-bold tracking-tight text-emerald-800 ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {formatAmount(raised)}
          </p>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          {progress}%
        </span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-stone-100"
        role="progressbar"
        aria-label={t("raised")}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-xs text-stone-500">
        <span>{t("goal", { amount: formatAmount(goal) })}</span>

        <span className="flex shrink-0 items-center gap-1.5">
          <Users className="size-3.5" />
          {t("supporters", { count: supporters })}
        </span>
      </div>
    </div>
  );
}

export default function CurrentCampaigns() {
  const t = useTranslations("Home.CurrentCampaigns");

  const featured = campaigns[0];
  const otherCampaigns = campaigns.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-20 sm:py-24 lg:py-28">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-emerald-100/40 blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[450px] rounded-full bg-amber-100/30 blur-[120px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800">
              <span className="size-2 rounded-full bg-emerald-500" />
              {t("badge")}
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="relative inline-block text-emerald-700">
                {t("titleHighlight")}
                <svg
                  aria-hidden
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-amber-400"
                >
                  <path
                    d="M2 10 Q 75 2, 150 8 T 298 5"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              {t("description")}
            </p>
          </div>

          <Link
            href="/campaigns"
            className="group inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {t("viewAllCampaigns")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Campaign */}
        <Link
          href={`/campaigns/${featured.id}`}
          className="group mb-7 grid overflow-hidden rounded-[28px] border border-stone-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-950/10 lg:grid-cols-[1.08fr_0.92fr]"
        >
          {/* Featured Image */}
          <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px]">
            <Image
              src={featured.image}
              alt={t(`campaigns.${featured.key}.imageAlt`)}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-black/20" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-amber-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
              <Sparkles className="size-3.5" />
              Featured
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 backdrop-blur-md">
                {t(`campaigns.${featured.key}.category`)}
              </span>

              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
                <MapPin className="size-3.5" />
                {t(`campaigns.${featured.key}.location`)}
              </span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-emerald-700" />
                {t("daysLeft", { days: featured.daysLeft })}
              </span>

              <span className="flex items-center gap-1.5">
                <Users className="size-3.5 text-emerald-700" />
                {t("supporters", { count: featured.supporters })}
              </span>
            </div>

            <h3 className="mt-5 font-serif text-2xl font-bold leading-tight text-stone-900 transition-colors group-hover:text-emerald-700 sm:text-3xl lg:text-4xl">
              {t(`campaigns.${featured.key}.title`)}
            </h3>

            <p className="mt-4 line-clamp-3 text-sm leading-7 text-stone-600 sm:text-base">
              {t(`campaigns.${featured.key}.description`)}
            </p>

            <div className="mt-8">
              <CampaignProgress
                raised={featured.raised}
                goal={featured.goal}
                supporters={featured.supporters}
                featured
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-stone-100 pt-6">
              <span className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition-all group-hover:-translate-y-0.5 group-hover:bg-emerald-800">
                Donate Now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>

              <span className="text-sm font-semibold text-stone-500 transition-colors group-hover:text-emerald-700">
                Learn more
              </span>
            </div>
          </div>
        </Link>

        {/* Other Campaigns */}
        <div className="grid gap-6 md:grid-cols-2">
          {otherCampaigns.map((campaign) => {
            const isUrgent = campaign.daysLeft < 15;

            return (
              <Link
                key={campaign.id}
                href={`/campaigns/${campaign.id}`}
                className="group grid overflow-hidden rounded-[24px] border border-stone-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/10 sm:grid-cols-[0.9fr_1.1fr]"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:min-h-[250px]">
                  <Image
                    src={campaign.image}
                    alt={t(`campaigns.${campaign.key}.imageAlt`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 shadow-sm">
                    {t(`campaigns.${campaign.key}.category`)}
                  </span>

                  <span
                    className={`absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold backdrop-blur-md ${
                      isUrgent
                        ? "bg-amber-500 text-white"
                        : "bg-white/95 text-stone-800"
                    }`}
                  >
                    <CalendarDays className="size-3.5" />
                    {t("daysLeft", { days: campaign.daysLeft })}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-stone-500">
                    <MapPin className="size-3.5 text-emerald-700" />
                    {t(`campaigns.${campaign.key}.location`)}
                  </span>

                  <h3 className="mt-3 line-clamp-2 font-serif text-xl font-bold leading-snug text-stone-900 transition-colors group-hover:text-emerald-700">
                    {t(`campaigns.${campaign.key}.title`)}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-xs leading-6 text-stone-600">
                    {t(`campaigns.${campaign.key}.description`)}
                  </p>

                  <div className="mt-5">
                    <CampaignProgress
                      raised={campaign.raised}
                      goal={campaign.goal}
                      supporters={campaign.supporters}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                    <span className="text-xs font-bold text-emerald-800">
                      Donate Now
                    </span>

                    <span className="flex size-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Closing note */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <TrendingUp className="size-4" />
          </span>

          <p className="max-w-xl text-sm leading-6 text-stone-500">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
