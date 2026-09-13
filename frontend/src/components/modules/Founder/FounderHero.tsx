import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FounderHero() {
  const t = useTranslations("FounderPage.Hero");

  return (
    <section className="relative overflow-hidden bg-base-100 py-16 sm:py-20 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Founder Image */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Decorative Frame */}
            <div className="absolute h-full w-full rounded-[2rem] border-2 border-primary/20" />

            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-base-200 shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885801/WhatsApp_Image_2026-09-08_at_10.42.49_PM_ncoiok.jpg"
                  alt={t("imageAlt")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-6 pt-24">
                <p className="text-xl font-bold text-white">{t("name")}</p>

                <p className="mt-1 text-sm font-medium text-white/80">
                  {t("designation")}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div>
            {/* Badge */}

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-bold leading-tight text-base-content sm:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-base-content/70 sm:text-lg">
              {t("description")}
            </p>

            {/* Founder Identity */}
            <div className="mt-8 border-l-4 border-primary pl-5">
              <h2 className="text-xl font-bold text-base-content sm:text-2xl">
                {t("name")}
              </h2>

              <p className="mt-1 text-sm font-semibold text-primary sm:text-base">
                {t("designation")}
              </p>

              <p className="mt-2 text-sm text-base-content/60">
                {t("organization")}
              </p>
            </div>

            {/* Scroll / Gallery Hint */}
            <div className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-base-content/60">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-base-content/10 bg-base-200">
                <ArrowDown className="h-4 w-4" />
              </span>

              <span>{t("scrollText")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
