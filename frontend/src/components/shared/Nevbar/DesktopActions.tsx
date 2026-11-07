import { Heart } from "lucide-react";
import Link from "next/link";

import LanguageSwitcher, { type Locale } from "./LanguageSwitcher";

interface DesktopActionsProps {
  locale: Locale;
  switchLocale: (newLocale: Locale) => string;
  donateHref: string;
  donateText: string;
}

export default function DesktopActions({
  locale,
  switchLocale,
  donateHref,
  donateText,
}: DesktopActionsProps) {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      {/* Language Switcher */}
      <LanguageSwitcher locale={locale} switchLocale={switchLocale} />

      {/* Donate Button */}
      <Link
        href={donateHref}
        className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-sm font-bold text-white shadow-md shadow-emerald-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        <Heart className="size-4 fill-current transition-transform duration-300 group-hover:scale-110" />
        {donateText}
      </Link>
    </div>
  );
}
