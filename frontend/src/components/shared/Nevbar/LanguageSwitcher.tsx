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
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-sm">
      {/* Bangla */}
      <Link
        href={switchLocale("bn")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
          locale === "bn"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-white/70 hover:bg-white/10 hover:text-white"
        }`}
      >
        বাংলা
      </Link>

      {/* English */}
      <Link
        href={switchLocale("en")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-white/70 hover:bg-white/10 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

export type { Locale };
