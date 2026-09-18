"use client";

import {
  ArrowRight,
  Building2,
  Check,
  Copy,
  Heart,
  Smartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function DonateSection() {
  const t = useTranslations("Donate.Donate");

  const [copied, setCopied] = useState<string | null>(null);
  const bkashNumber = "+447931791007";

  const bankAccountName = "THE JANNATH FOUNDATION UK";
  const bankName = "The Royal Bank of Scotland Plc";
  const bankAccountNumber = "10120942";
  const bankSortCode = "16-22-21";

  const handleCopy = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* ==================== Decorative Background ==================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* ==================== Section Header ==================== */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-5 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
          >
            <Heart className="mr-2 h-4 w-4 fill-current" />

            {t("badge")}
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-7 lg:grid-cols-2">
          <Card className="group relative overflow-hidden border-0 bg-background shadow-lg ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Top Gradient */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />

            <CardContent className="relative p-7 sm:p-9">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Smartphone className="h-7 w-7 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary">
                      {t("bkash.title")}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {t("bkash.numberLabel")}
                    </h3>
                  </div>
                </div>

                <div className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:block">
                  Donate
                </div>
              </div>

              {/* Number Box */}
              <div className="mt-8 rounded-2xl border border-primary/10 bg-muted/40 p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t("bkash.numberLabel")}
                </p>

                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="break-all text-2xl font-bold tracking-wide sm:text-3xl">
                    {bkashNumber}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleCopy(bkashNumber, "bkash")}
                    className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-orange-700 hover:shadow-md active:scale-95"
                    aria-label={t("copy")}
                  >
                    {copied === "bkash" ? (
                      <>
                        <Check className="h-4 w-4" />
                        {t("copied")}
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        {t("copy")}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 flex gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  {t("bkash.note")}
                </p>
              </div>

              {/* Bottom Link */}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                <span>{t("bkash.description")}</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-background shadow-lg ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Top Gradient */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />

            <CardContent className="relative p-7 sm:p-9">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary">
                      {t("bank.title")}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {t("bank.accountNumber")}
                    </h3>
                  </div>
                </div>

                <div className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:block">
                  Bank
                </div>
              </div>

              {/* Bank Information */}
              <div className="mt-8 space-y-4">
                {/* Account Name */}
                <div className="rounded-xl border bg-muted/30 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("bank.accountName")}
                  </p>

                  <p className="mt-1 break-words font-semibold">
                    {bankAccountName}
                  </p>
                </div>

                {/* Bank Name */}
                <div className="rounded-xl border bg-muted/30 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("bank.bankName")}
                  </p>

                  <p className="mt-1 font-semibold">{bankName}</p>
                </div>

                {/* Account Number + Sort Code */}
                <div className="grid gap-2 sm:grid-cols-2">
                  {/* Account Number */}
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t("bank.accountNumber")}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p className="text-xl font-bold tracking-wider">
                        {bankAccountNumber}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleCopy(bankAccountNumber, "bank")}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-background transition-all hover:bg-muted active:scale-95"
                        aria-label={t("copy")}
                      >
                        {copied === "bank" ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Sort Code */}
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t("bank.sortCode")}
                    </p>

                    <p className="mt-2 text-xl font-bold tracking-wider">
                      {bankSortCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                <span>{t("bank.description")}</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ==================== Bottom Message ==================== */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border bg-muted/30 px-6 py-7 text-center sm:px-10">
            {/* Decorative Background */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600 blur-3xl" />

            <Heart className="relative mx-auto h-6 w-6 fill-orange-600 text-orange-600" />

            <p className="relative mx-auto mt-3 max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
              {t("bottomNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
