import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

const partners = [
  {
    id: 1,
    name: "Hope Foundation",
    shortName: "HOPE",
  },
  {
    id: 2,
    name: "Global Care",
    shortName: "GLOBAL",
  },
  {
    id: 3,
    name: "Community First",
    shortName: "COMMUNITY",
  },
  {
    id: 4,
    name: "Future Initiative",
    shortName: "FUTURE",
  },
  {
    id: 5,
    name: "Better World",
    shortName: "BETTER",
  },
];

export default function PartnersSupporters() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
          >
            Partners & Supporters
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stronger <span className="text-primary">Together</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            We are grateful to the organizations and supporters who share our
            vision and help us create meaningful change.
          </p>
        </div>

        {/* Partners */}
        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-3xl border bg-background sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group flex min-h-32 items-center justify-center border-border/60 p-6 transition-colors duration-300 hover:bg-muted/50 ${
                index > 0 ? "border-l" : ""
              } ${index >= 2 ? "border-t sm:border-t-0" : ""} ${
                index === 3 ? "lg:border-l" : ""
              }`}
            >
              <div className="text-center">
                {/* Logo placeholder */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary">
                  <Handshake className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>

                <p className="mt-3 text-sm font-semibold tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                  {partner.shortName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Interested in partnering with us?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Become a Partner
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
