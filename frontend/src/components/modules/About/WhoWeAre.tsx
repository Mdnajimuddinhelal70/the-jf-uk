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

import { Badge } from "@/components/ui/badge";

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
    <section className="relative overflow-hidden bg-muted/30 py-14 sm:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border bg-background shadow-sm">
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1788535412/Gemini_Generated_Image_58j2xn58j2xn58j2_xciycp.jpg"
                  alt={t("imageAlt")}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating card - inset on mobile so it never overflows the viewport, floats outside from sm and up */}
            <div className="absolute bottom-3 right-3 max-w-[calc(100%-1.5rem)] rounded-2xl border bg-background p-3.5 shadow-xl sm:-bottom-6 sm:-right-4 sm:max-w-none sm:p-6 lg:-right-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                  <HeartHandshake className="h-4 w-4 text-primary sm:h-6 sm:w-6" />
                </div>

                <div>
                  <p className="text-base font-bold sm:text-2xl">
                    {t("floatingCard.title")}
                  </p>

                  <p className="text-[11px] text-muted-foreground sm:text-xs">
                    {t("floatingCard.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:py-6">
            {/* Badge */}
            <Badge
              variant="outline"
              className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              {t("badge")}
            </Badge>

            {/* Heading */}
            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-7">
              {t("description")}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
              {t("description2")}
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {t(`highlights.${item.id}.title`)}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {t(`highlights.${item.id}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-7 sm:mt-9">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {t("cta")}

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
