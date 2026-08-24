"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import DesktopActions from "./DesktopActions";
import DesktopNav from "./DesktopNav";
import type { Locale } from "./LanguageSwitcher";
import MobileNav from "./MobileNav";
import NavbarLogo from "./NavbarLogo";

interface NavItem {
  key: string;
  href: string;
}

const workItems: NavItem[] = [
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

const navItems: NavItem[] = [
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

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const segments = pathname.split("/").filter(Boolean);

  const locale: Locale = segments[0] === "bn" ? "bn" : "en";

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href === "/" ? "" : href}`;
  };

  //  SWITCH LANGUAGE

  const switchLocale = (newLocale: Locale) => {
    const currentSegments = pathname.split("/").filter(Boolean);

    if (currentSegments[0] === "en" || currentSegments[0] === "bn") {
      currentSegments[0] = newLocale;

      return `/${currentSegments.join("/")}`;
    }

    return `/${newLocale}${pathname === "/" ? "" : pathname}`;
  };

  const isActive = (href: string) => {
    const localizedHref = getLocalizedHref(href);

    if (href === "/") {
      return pathname === localizedHref;
    }

    return (
      pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
    );
  };

  const isWorkActive = workItems.some((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-green-800 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-green-800/95">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <NavbarLogo href={getLocalizedHref("/")} />

        <DesktopNav
          navItems={navItems}
          workItems={workItems}
          isActive={isActive}
          isWorkActive={isWorkActive}
          getLocalizedHref={getLocalizedHref}
          t={t}
        />

        <DesktopActions
          locale={locale}
          switchLocale={switchLocale}
          donateHref={getLocalizedHref("/donate")}
          donateText={t("donate")}
        />

        <MobileNav
          locale={locale}
          navItems={navItems}
          workItems={workItems}
          isActive={isActive}
          getLocalizedHref={getLocalizedHref}
          switchLocale={switchLocale}
          t={t}
        />
      </div>
    </header>
  );
}
