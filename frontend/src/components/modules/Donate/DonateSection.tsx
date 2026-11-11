"use client";

import {
  Check,
  Copy,
  Heart,
  HeartHandshake,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";

// UK account — The Jannath Foundation UK
const foundationAccount = {
  accountName: "THE JANNATH FOUNDATION UK",
  accountNumber: "10120942",
  sortCode: "16-22-21",
};

// Bangladesh account — Al Arafah Madrasa & Orphanage
const orphanageAccount = {
  accountName: "AL ARAFAH HAFIJIYA ETIMKHANA MADRASA BIRENDRA NAGAR",
  accountNumber: "1591520001683",
};

/* ========================================================================== */

type Field = {
  id: string;
  label: string;
  value: string;
  copy?: boolean;
};

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(
        () => setCopied((current) => (current === id ? null : current)),
        2000,
      );
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return { copied, copy };
}

function CopyPill({
  isCopied,
  onClick,
  copyLabel,
  copiedLabel,
  ariaLabel,
}: {
  isCopied: boolean;
  onClick: () => void;
  copyLabel: string;
  copiedLabel: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex h-11 min-w-[7.5rem] shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 text-sm font-bold text-white shadow-md shadow-emerald-950/15 transition-all hover:bg-emerald-800 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      {isCopied ? (
        <>
          <Check className="size-4" />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy className="size-4" />
          {copyLabel}
        </>
      )}
    </button>
  );
}

function CopyIconButton({
  isCopied,
  onClick,
  ariaLabel,
}: {
  isCopied: boolean;
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-800 transition-all hover:bg-emerald-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

type AccountCardProps = {
  icon: ReactNode;
  label: string;
  title: string;
  primary: Field;
  fields: Field[];
  note: string;
  copied: string | null;
  onCopy: (value: string, id: string) => void;
  copyLabel: string;
  copiedLabel: string;
};

function AccountCard({
  icon,
  label,
  title,
  primary,
  fields,
  note,
  copied,
  onCopy,
  copyLabel,
  copiedLabel,
}: AccountCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_60px_-30px_rgba(6,50,30,0.35)] ring-1 ring-emerald-900/10 sm:rounded-[1.75rem]">
      {/* Header */}
      <header className="relative overflow-hidden border-b-[3px] border-amber-400 bg-[#073d2c] px-5 py-6 sm:px-8 sm:py-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full border border-white/[0.08]"
        />
        <div className="relative flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-amber-300 sm:size-14">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-amber-300">{label}</p>
            <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-white sm:text-xl">
              {title}
            </h3>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-8">
        {/* Main account number */}
        <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-4 sm:p-5">
          <p className="text-sm font-medium text-emerald-900/70">
            {primary.label}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="break-all font-mono text-2xl font-bold tracking-wide text-stone-900 sm:text-[1.7rem]">
              {primary.value}
            </p>

            <CopyPill
              isCopied={copied === primary.id}
              onClick={() => onCopy(primary.value, primary.id)}
              copyLabel={copyLabel}
              copiedLabel={copiedLabel}
              ariaLabel={`${copyLabel}: ${primary.label}`}
            />
          </div>
        </div>

        {/* Other details */}
        <dl className="divide-y divide-emerald-900/10">
          {fields.map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <dt className="text-xs font-medium text-stone-500">
                  {field.label}
                </dt>
                <dd className="mt-1 break-words text-[15px] font-semibold leading-6 text-stone-900">
                  {field.value}
                </dd>
              </div>

              {field.copy && (
                <CopyIconButton
                  isCopied={copied === field.id}
                  onClick={() => onCopy(field.value, field.id)}
                  ariaLabel={`${copyLabel}: ${field.label}`}
                />
              )}
            </div>
          ))}
        </dl>

        {/* Note */}
        <div className="mt-auto flex gap-3 border-t border-emerald-900/10 pt-5">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-700" />
          <p className="text-sm leading-6 text-stone-600">{note}</p>
        </div>
      </div>
    </article>
  );
}

export default function DonateSection() {
  const t = useTranslations("Donate.Donate");
  const { copied, copy } = useCopy();

  const copyLabel = t("copy");
  const copiedLabel = t("copied");

  return (
    <section className="relative isolate overflow-hidden bg-[#fbfbf7] py-16 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 size-[420px] rounded-full bg-emerald-100/60 blur-[120px]" />
        <div className="absolute -right-48 bottom-0 size-[420px] rounded-full bg-amber-100/40 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#14532d_0.7px,transparent_0.7px)] bg-[size:32px_32px] opacity-[0.035]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
            <Heart className="size-4 fill-amber-400 text-amber-500" />
            {t("badge")}
          </span>

          <h2 className="mt-6 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            {t("title")}{" "}
            <span className="text-emerald-800">{t("titleHighlight")}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:leading-8 lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Bank accounts */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8">
          {/* UK — Foundation */}
          <AccountCard
            icon={<Landmark className="size-6 sm:size-7" />}
            label={t("foundation.label")}
            title={t("foundation.title")}
            primary={{
              id: "foundation-number",
              label: t("foundation.accountNumber"),
              value: foundationAccount.accountNumber,
            }}
            fields={[
              {
                id: "foundation-sort",
                label: t("foundation.sortCode"),
                value: foundationAccount.sortCode,
                copy: true,
              },
              {
                id: "foundation-name",
                label: t("foundation.accountName"),
                value: foundationAccount.accountName,
              },
              {
                id: "foundation-bank",
                label: t("foundation.bankName"),
                value: t("foundation.bankNameValue"),
              },
            ]}
            note={t("foundation.note")}
            copied={copied}
            onCopy={copy}
            copyLabel={copyLabel}
            copiedLabel={copiedLabel}
          />

          {/* Bangladesh — Madrasa & Orphanage */}
          <AccountCard
            icon={<HeartHandshake className="size-6 sm:size-7" />}
            label={t("orphanage.label")}
            title={t("orphanage.title")}
            primary={{
              id: "orphanage-number",
              label: t("orphanage.accountNumber"),
              value: orphanageAccount.accountNumber,
            }}
            fields={[
              {
                id: "orphanage-name",
                label: t("orphanage.accountName"),
                value: orphanageAccount.accountName,
              },
              {
                id: "orphanage-bank",
                label: t("orphanage.bankName"),
                value: t("orphanage.bankNameValue"),
              },
              {
                id: "orphanage-branch",
                label: t("orphanage.branch"),
                value: t("orphanage.branchValue"),
              },
            ]}
            note={t("orphanage.note")}
            copied={copied}
            onCopy={copy}
            copyLabel={copyLabel}
            copiedLabel={copiedLabel}
          />
        </div>

        {/* Closing message */}
        <div className="mx-auto mt-6 max-w-5xl lg:mt-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#073d2c] px-6 py-8 text-center sm:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-0 size-64 rounded-full bg-emerald-400/10 blur-[80px]"
            />
            <Heart className="relative mx-auto size-6 fill-amber-400 text-amber-400" />
            <p className="relative mx-auto mt-3 max-w-3xl text-sm leading-7 text-emerald-50/85 sm:text-base sm:leading-8">
              {t("bottomNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
