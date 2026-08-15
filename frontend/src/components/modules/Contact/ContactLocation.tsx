import { Clock3, ExternalLink, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function ContactLocation() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Find Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Visit Our Foundation
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We would be happy to welcome you. Find our office location and visit
            us during our working hours.
          </p>
        </div>

        {/* Location Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Location Card */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="p-7 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Our Office</h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Foundation Office
                <br />
                Dhaka, Bangladesh
              </p>

              {/* Office Hours */}
              <div className="mt-7 flex gap-4 border-t pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock3 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Office Hours</p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Saturday - Thursday
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Directions */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Get Directions
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden border-border/60 shadow-sm">
            <CardContent className="relative min-h-[380px] p-0 sm:min-h-[430px]">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Foundation Location
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Interactive map will be added here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
