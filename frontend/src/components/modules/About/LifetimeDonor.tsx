import { HeartHandshake, MapPin, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const donors = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1777218755/samples/zoom.avif",
  },
];

export default function LifetimeDonor() {
  const t = useTranslations("About.LifetimeDonor");

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
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

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Donors */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {donors.map((donor) => (
            <Card
              key={donor.id}
              className="group overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={donor.image}
                  alt={t(`donors.${donor.id}.name`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <Badge className="border-0 bg-background/90 text-foreground backdrop-blur-sm">
                    {t("lifetimeDonor")}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                {/* Name */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <UserRound className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {t(`donors.${donor.id}.name`)}
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      {t(`donors.${donor.id}.role`)}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="mt-5 flex gap-3 border-t pt-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <p className="text-sm leading-6 text-muted-foreground">
                    {t(`donors.${donor.id}.address`)}
                  </p>
                </div>

                {/* Biography */}
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {t(`donors.${donor.id}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
