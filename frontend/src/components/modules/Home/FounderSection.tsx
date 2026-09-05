import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  const t = useTranslations("FounderSection.Section");

  return (
    <section className="relative overflow-hidden bg-base-100 py-20 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {t("badge")}
          </span>

          <h2 className="text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-base-content/70 sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Founder Content */}
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Founder Image */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Decorative frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-primary/20" />

            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1786803130/ChairmanImg_mlerq7.jpg"
                  alt={t("imageAlt")}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  width={800}
                  height={1200}
                  priority
                />
              </div>

              {/* Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-6 pt-20">
                <p className="text-lg font-bold text-white">{t("name")}</p>

                <p className="mt-1 text-sm font-medium text-white/80">
                  {t("designation")}
                </p>
              </div>
            </div>
          </div>

          {/* Founder Text */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {t("smallTitle")}
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-base-content sm:text-4xl">
              {t("heading")}
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-base-content/70">
              <p>{t("paragraph1")}</p>

              <p>{t("paragraph2")}</p>
            </div>

            {/* Founder Identity */}
            <div className="mt-8 border-l-4 border-primary pl-5">
              <h4 className="text-xl font-bold text-base-content">
                {t("name")}
              </h4>

              <p className="mt-1 text-sm font-medium text-primary">
                {t("designation")}
              </p>

              <p className="mt-2 text-sm text-base-content/60">
                {t("organization")}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-semibold text-primar-content shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("button")}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
