import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export default function ContactHero() {
  const t = useTranslations("Contact.Hero");

  return (
    <section className="relative overflow-hidden bg-blue-400">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-black"
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("badge")}
          </Badge>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-black leading-7 sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              {t("home")}
            </Link>

            <ArrowRight className="h-4 w-4" />

            <span className="font-medium text-foreground">{t("contact")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
