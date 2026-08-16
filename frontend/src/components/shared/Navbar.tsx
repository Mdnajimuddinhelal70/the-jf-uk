"use client";

import { ArrowUpRight, Heart, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

/* =========================================================
   TYPES
========================================================= */

type Locale = "en" | "bn";

interface LanguageSwitcherProps {
  locale: Locale;
  switchLocale: (newLocale: Locale) => string;
}

/* =========================================================
   WORK ITEMS
========================================================= */

const workItems = [
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "campaigns",
    href: "/campaigns",
  },
  {
    key: "events",
    href: "/events",
  },
];

/* =========================================================
   NAV ITEMS
========================================================= */

const navItems = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "news",
    href: "/news",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

/* =========================================================
   LANGUAGE SWITCHER
   IMPORTANT:
   This component is declared OUTSIDE Navbar.
========================================================= */

function LanguageSwitcher({ locale, switchLocale }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border bg-muted/50 p-1">
      {/* BANGLA */}

      <Link
        href={switchLocale("bn")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
          locale === "bn"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        বাংলা
      </Link>

      {/* ENGLISH */}

      <Link
        href={switchLocale("en")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  /* =======================================================
     CURRENT LOCALE
  ======================================================= */

  const segments = pathname.split("/").filter(Boolean);

  const locale: Locale = segments[0] === "bn" ? "bn" : "en";

  /* =======================================================
     CREATE LOCALIZED URL
     
     Examples:
     /en        -> /en
     /bn        -> /bn
     /en/about  -> /en/about
     /bn/news   -> /bn/news
  ======================================================= */

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href === "/" ? "" : href}`;
  };

  /* =======================================================
     SWITCH LANGUAGE

     Examples:
     /en/about -> /bn/about
     /bn/about -> /en/about
     /en       -> /bn
     /bn       -> /en
  ======================================================= */

  const switchLocale = (newLocale: Locale) => {
    const currentSegments = pathname.split("/").filter(Boolean);

    /* -----------------------------------------------
       If URL already contains a locale
    ------------------------------------------------ */

    if (currentSegments[0] === "en" || currentSegments[0] === "bn") {
      currentSegments[0] = newLocale;

      return `/${currentSegments.join("/")}`;
    }

    /* -----------------------------------------------
       Fallback for non-localized routes
    ------------------------------------------------ */

    return `/${newLocale}${pathname === "/" ? "" : pathname}`;
  };

  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const isActive = (href: string) => {
    const localizedHref = getLocalizedHref(href);

    /* Home */

    if (href === "/") {
      return pathname === localizedHref;
    }

    /* Other pages */

    return (
      pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
    );
  };

  /* =======================================================
     OUR WORK ACTIVE STATE
  ======================================================= */

  const isWorkActive = workItems.some((item) => isActive(item.href));

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href={getLocalizedHref("/")}
          className="group flex items-center gap-3"
        >
          {/* Logo Icon */}

          <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
            <Heart className="size-5 fill-current" />
          </div>

          {/* Logo Text */}

          <div className="hidden leading-none sm:block">
            <div className="text-lg font-bold tracking-tight">The Jannath</div>

            <div className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-primary">
              FOUNDATION UK
            </div>
          </div>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* =================================================
                NORMAL NAVIGATION
            ================================================= */}

            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={getLocalizedHref(item.href)}
                  className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {t(item.key)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* =================================================
                OUR WORK
            ================================================= */}

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  workItems.some((item) => isActive(item.href))
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                {t("ourWork")}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {workItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={getLocalizedHref(item.href)}
                        className={`group block select-none rounded-md p-3 outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${
                          isActive(item.href) ? "bg-accent/50" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className={`text-sm font-semibold ${
                              isActive(item.href) ? "text-primary" : ""
                            }`}
                          >
                            {t(item.key)}
                          </div>

                          <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* =================================================
            DESKTOP RIGHT SIDE
        ================================================= */}

        <div className="hidden items-center gap-3 lg:flex">
          {/* LANGUAGE */}

          <LanguageSwitcher locale={locale} switchLocale={switchLocale} />

          {/* DONATE */}

          <Link href={getLocalizedHref("/donate")}>
            <Button className="rounded-full px-6 shadow-sm">
              <Heart className="mr-2 size-4 fill-current" />
              Donate Now
            </Button>
          </Link>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div className="lg:hidden">
          <Sheet>
            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>

            {/* =================================================
                MOBILE SHEET
            ================================================= */}

            <SheetContent side="right" className="w-[85%] sm:max-w-sm">
              {/* =================================================
                  MOBILE HEADER
              ================================================= */}

              <SheetHeader className="border-b pb-5">
                <SheetTitle className="flex items-center gap-3 text-left">
                  {/* Logo Icon */}

                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Heart className="size-5 fill-current" />
                  </div>

                  {/* Logo Text */}

                  <div>
                    <div className="text-base font-bold">The Jannath</div>

                    <div className="text-[9px] font-semibold tracking-[0.2em] text-primary">
                      FOUNDATION UK
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <div className="mt-6 flex flex-col gap-2">
                {/* =================================================
                    LANGUAGE SWITCHER
                ================================================= */}

                <div className="mb-3 flex justify-start px-2">
                  <LanguageSwitcher
                    locale={locale}
                    switchLocale={switchLocale}
                  />
                </div>

                {/* =================================================
                    MAIN NAVIGATION
                ================================================= */}

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedHref(item.href)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}

                {/* =================================================
                    MOBILE OUR WORK
                ================================================= */}

                <div className="mt-2">
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("ourWork")}
                  </div>

                  <div className="ml-2 border-l pl-2">
                    {workItems.map((item) => (
                      <Link
                        key={item.href}
                        href={getLocalizedHref(item.href)}
                        className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                          isActive(item.href)
                            ? "font-medium text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    MOBILE DONATE
                ================================================= */}

                <div className="mt-6 border-t pt-6">
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
      </div>
    </header>
  );
}
