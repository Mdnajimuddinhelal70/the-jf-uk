import { Heart, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import LanguageSwitcher, { type Locale } from "./LanguageSwitcher";

interface NavItem {
  key: string;
  href: string;
}

interface MobileNavProps {
  locale: Locale;
  navItems: NavItem[];
  workItems: NavItem[];
  isActive: (href: string) => boolean;
  getLocalizedHref: (href: string) => string;
  switchLocale: (newLocale: Locale) => string;
  t: (key: string) => string;
}

export default function MobileNav({
  locale,
  navItems,
  workItems,
  isActive,
  getLocalizedHref,
  switchLocale,
  t,
}: MobileNavProps) {
  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-blue-800"
          aria-label="Open navigation menu"
        >
          <Menu className="size-6" />
        </SheetTrigger>

        {/* Mobile Sheet */}
        <SheetContent
          side="right"
          className="w-[85%] border-l border-white/10 bg-blue-800 text-white sm:max-w-sm"
        >
          {/* Mobile Header */}
          <SheetHeader className="border-b border-white/10 pb-5">
            <SheetTitle className="flex items-center gap-3 text-left text-white">
              {/* Logo Icon */}
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="size-5 fill-current" />
              </div>

              {/* Logo Text */}
              <div>
                <div className="text-base font-bold text-white">
                  The Jannath
                </div>

                <div className="text-[9px] font-semibold tracking-[0.2em] text-primary">
                  FOUNDATION UK
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Mobile Navigation */}
          <div className="mt-6 flex flex-col gap-2">
            {/* Language Switcher */}
            <div className="mb-3 flex justify-start px-2">
              <LanguageSwitcher locale={locale} switchLocale={switchLocale} />
            </div>

            {/* Main Navigation */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Our Work */}
            <div className="mt-2">
              <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                {t("ourWork")}
              </div>

              <div className="ml-2 border-l border-white/15 pl-2">
                {workItems.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedHref(item.href)}
                    className={`block rounded-lg px-4 py-3 text-sm transition-all ${
                      isActive(item.href)
                        ? "bg-primary/15 font-medium text-primary"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Donate */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <Link href={getLocalizedHref("/donate")} className="block">
                <Button size="lg" className="w-full rounded-full">
                  <Heart className="mr-2 size-4 fill-current" />
                  {t("donate")}
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
