import Link from "next/link";

type Locale = "en" | "bn";

interface LanguageSwitcherProps {
  locale: Locale;
  switchLocale: (newLocale: Locale) => string;
}

export default function LanguageSwitcher({
  locale,
  switchLocale,
}: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-slate-100/80 p-1">
      {/* Bangla */}
      <Link
        href={switchLocale("bn")}
        aria-label="Switch to Bangla"
        aria-current={locale === "bn" ? "page" : undefined}
        className={`inline-flex h-8 min-w-12 items-center justify-center rounded-full px-3 text-xs font-bold transition-all duration-300 ${
          locale === "bn"
            ? "bg-emerald-700 text-white shadow-sm"
            : "text-slate-600 hover:bg-white hover:text-emerald-800"
        }`}
      >
        বাংলা
      </Link>

      {/* English */}
      <Link
        href={switchLocale("en")}
        aria-label="Switch to English"
        aria-current={locale === "en" ? "page" : undefined}
        className={`inline-flex h-8 min-w-12 items-center justify-center rounded-full px-3 text-xs font-bold transition-all duration-300 ${
          locale === "en"
            ? "bg-emerald-700 text-white shadow-sm"
            : "text-slate-600 hover:bg-white hover:text-emerald-800"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

export type { Locale };
