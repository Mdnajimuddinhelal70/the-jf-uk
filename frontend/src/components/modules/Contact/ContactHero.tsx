import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Badge>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We&apos;d Love to{" "}
            <span className="text-primary">Hear From You</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Have a question, want to work with us, or need more information
            about our foundation? Reach out to our team and we will be happy to
            connect with you.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>

            <ArrowRight className="h-4 w-4" />

            <span className="font-medium text-foreground">Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
