import { Heart } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

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
    <div className="hidden items-center gap-3 lg:flex">
      {/* Language */}
      <LanguageSwitcher locale={locale} switchLocale={switchLocale} />

      {/* Donate */}
      <Link href={donateHref}>
        <Button className="rounded-full px-6 shadow-sm">
          <Heart className="mr-2 size-4 fill-current" />
          {donateText}
        </Button>
      </Link>
    </div>
  );
}
