"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import Image from "next/image";
import logo from "../../../../public/icons/logo2.png";

import Link from "next/link";
import DesktopActions from "./DesktopActions";
import DesktopNav from "./DesktopNav";
import type { Locale } from "./LanguageSwitcher";
import MobileNav from "./MobileNav";

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
  {
    key: "gallery",
    href: "/gallery",
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

  // Switch language
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
        {/* Logo */}
        <Link href={getLocalizedHref("/")} className="flex items-center gap-2">
          <div className="relative h-10 w-24 shrink-0 sm:h-12 sm:w-28 md:h-14 md:w-32">
            <Image
              src={logo}
              alt="The Jannath Foundation UK"
              priority
              className="h-full w-auto object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav
          navItems={navItems}
          workItems={workItems}
          isActive={isActive}
          isWorkActive={isWorkActive}
          getLocalizedHref={getLocalizedHref}
          t={t}
        />

        {/* Desktop Actions */}
        <DesktopActions
          locale={locale}
          switchLocale={switchLocale}
          donateHref={getLocalizedHref("/donate")}
          donateText={t("donate")}
        />

        {/* Mobile Navigation */}
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
