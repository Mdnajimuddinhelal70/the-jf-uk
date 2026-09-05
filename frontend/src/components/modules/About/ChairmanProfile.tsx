import { ArrowRight, HeartHandshake, MapPin, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export default function ChairmanProfile() {
  const t = useTranslations("About.ChairmanProfile");

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <Badge
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
          >
            <HeartHandshake className="mr-2 h-4 w-4" />

            {t("badge")}
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Main Profile */}
        <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Chairman Image */}
            <div className="relative min-h-[520px] overflow-hidden bg-muted sm:min-h-[620px] lg:min-h-[700px]">
              <Image
                src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1788627887/ChiarmanP_gkvafg.jpg"
                alt={t("imageAlt")}
                className="absolute inset-0 h-full w-full object-cover object-top"
                width={800}
                height={1000}
                priority
              />

              {/* Image overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 sm:p-8">
                <div className="text-white">
                  <p className="text-sm font-medium text-white/70">
                    {t("chairman.role")}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
                    {t("chairman.name")}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              {/* Quote */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              <blockquote className="mt-5 text-xl font-medium leading-8 tracking-tight sm:text-2xl">
                “{t("chairman.quote")}”
              </blockquote>

              {/* Name */}
              <div className="mt-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  {t("chairman.profileLabel")}
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  {t("chairman.name")}
                </h3>

                <p className="mt-2 text-sm ">{t("chairman.position")}</p>
              </div>

              {/* Biography */}
              <div className="mt-7">
                <p className="text-sm leading-7  sm:text-base">
                  {t("chairman.biography.paragraph1")}
                </p>

                <p className="mt-4 text-sm leading-7 sm:text-base">
                  {t("chairman.biography.paragraph2")}
                </p>
              </div>

              {/* Details */}
              <div className="mt-8 grid gap-4 border-t pt-7 sm:grid-cols-2">
                {/* Education */}

                {/* Location */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide">
                      {t("chairman.details.location.label")}
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {t("chairman.details.location.value")}
                    </p>
                  </div>
                </div>

                {/* Leadership */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide">
                      {t("chairman.details.leadership.label")}
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {t("chairman.details.leadership.value")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#chairman-message"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {t("chairman.cta")}

                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
