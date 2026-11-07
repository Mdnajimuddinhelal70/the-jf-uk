import { ArrowUpRight, Heart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "../../../../public/icons/Foundation logo.jpg";
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
      <Sheet>
        {/* Menu Trigger */}
        <SheetTrigger
          className="inline-flex size-11 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-800 transition-all duration-300 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </SheetTrigger>

        {/* Mobile Navigation Panel */}
        <SheetContent
          side="right"
          className="w-[88%] border-l border-emerald-100 bg-[#fffefa] p-0 text-slate-800 sm:max-w-sm"
        >
          {/* Header */}
          <SheetHeader className="border-b border-slate-100 px-6 py-6">
            <SheetTitle className="flex items-center gap-3 text-left">
              <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <Image
                  src={logo}
                  alt="The Jannath Foundation UK"
                  width={80}
                  height={80}
                  className="size-full object-contain"
                />
              </div>

              <div>
                <span className="block text-base font-bold tracking-tight text-slate-900">
                  The Jannath
                </span>
                <span className="mt-0.5 block text-[10px] font-bold tracking-[0.2em] text-emerald-700">
                  FOUNDATION UK
                </span>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation Content */}
          <div className="flex h-[calc(100dvh-105px)] flex-col overflow-y-auto px-5 py-6">
            {/* Language */}
            <div className="mb-7 rounded-xl bg-emerald-50/70 p-3">
              <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Language
              </p>

              <LanguageSwitcher locale={locale} switchLocale={switchLocale} />
            </div>

            {/* Main Navigation */}
            <div className="space-y-1">
              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Menu
              </p>

              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={getLocalizedHref(item.href)}
                    className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/10"
                        : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                    }`}
                  >
                    {t(item.key)}

                    {active && <ArrowUpRight className="size-4" />}
                  </Link>
                );
              })}
            </div>

            {/* Our Work */}
            <div className="mt-7">
              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                {t("ourWork")}
              </p>

              <div className="space-y-1 border-l-2 border-emerald-100 pl-3">
                {workItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={getLocalizedHref(item.href)}
                      className={`flex min-h-11 items-center justify-between rounded-lg px-3 text-sm font-medium transition-all duration-200 ${
                        active
                          ? "bg-emerald-50 text-emerald-800"
                          : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                      }`}
                    >
                      {t(item.key)}

                      {active && (
                        <span className="size-1.5 rounded-full bg-emerald-600" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Donate */}
            <div className="mt-auto border-t border-slate-100 pt-6">
              <Link
                href={getLocalizedHref("/donate")}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition-all duration-300 hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <Heart className="size-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                {t("donate")}
              </Link>

              <p className="mt-4 text-center text-xs text-slate-400">
                Together, we can make a difference.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
