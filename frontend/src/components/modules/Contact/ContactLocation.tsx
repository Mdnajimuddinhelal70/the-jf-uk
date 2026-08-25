"use client";

import { Clock3, ExternalLink, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/BfBZ8kqPNDGyTwi7A";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9582203.873394044!2d-15.017199381591523!3d54.10201971739094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sbd!4v1787665905137!5m2!1sen!2sbd";

export default function ContactLocation() {
  const t = useTranslations("Contact.Location");

  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t("badge")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* Location Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Location Card */}
          <Card className="bg-green-600 border-border/60 shadow-sm">
            <CardContent className="p-7 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">{t("office.title")}</h3>

              <p className="mt-3 text-sm leading-7 text-amber-50">
                {t("office.address")}
                <br />
                {t("office.city")}
              </p>

              {/* Office Hours */}
              <div className="mt-7 flex gap-4 border-t pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock3 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold">{t("hours.title")}</p>

                  <p className="mt-1 text-sm leading-6 text-amber-50">
                    {t("hours.days")}
                    <br />
                  </p>
                </div>
              </div>

              {/* Directions Button */}
              <Link
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
              >
                {t("directions")}
                <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Google Map */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            <CardContent className="relative min-h-[380px] p-0 sm:min-h-[430px]">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Jannath Foundation UK Location"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
