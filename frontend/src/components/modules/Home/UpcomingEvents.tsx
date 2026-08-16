import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    id: 1,
    day: "24",
    month: "AUG",
    time: "10:00 AM – 1:00 PM",
  },
  {
    id: 2,
    day: "31",
    month: "AUG",
    time: "3:00 PM – 5:00 PM",
  },
  {
    id: 3,
    day: "07",
    month: "SEP",
    time: "11:00 AM – 2:00 PM",
  },
];

export default function UpcomingEvents() {
  const t = useTranslations("Home.UpcomingEvents");

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              {t("badge")}
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {t("description")}
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {t("viewAllEvents")}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-0">
                {/* Date + Category */}
                <div className="flex items-start justify-between border-b p-6">
                  <div className="flex items-center gap-4">
                    {/* Date */}
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <span className="text-2xl font-bold leading-none">
                        {event.day}
                      </span>

                      <span className="mt-1 text-[10px] font-semibold tracking-widest">
                        {event.month}
                      </span>
                    </div>

                    {/* Category */}
                    <div>
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs"
                      >
                        {t(`events.${event.id}.category`)}
                      </Badge>

                      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />

                        {t("upcomingEvent")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {t(`events.${event.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {t(`events.${event.id}.description`)}
                  </p>

                  {/* Event Meta */}
                  <div className="mt-6 space-y-3 border-t pt-5">
                    {/* Location */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>

                      <span>{t(`events.${event.id}.location`)}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <Clock3 className="h-4 w-4 text-primary" />
                      </div>

                      <span>{t(`events.${event.id}.time`)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/events/${event.id}`}
                    className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
                  >
                    {t("viewEvent")}

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            {t("exploreAllEvents")}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
