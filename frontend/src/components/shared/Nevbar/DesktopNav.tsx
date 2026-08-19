import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavItem {
  key: string;
  href: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  workItems: NavItem[];
  isActive: (href: string) => boolean;
  isWorkActive: boolean;
  getLocalizedHref: (href: string) => string;
  t: (key: string) => string;
}

export default function DesktopNav({
  navItems,
  workItems,
  isActive,
  isWorkActive,
  getLocalizedHref,
  t,
}: DesktopNavProps) {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {/* Normal Navigation */}
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              href={getLocalizedHref(item.href)}
              className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all ${
                isActive(item.href)
                  ? "bg-white/10 text-primary"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              {t(item.key)}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* Our Work */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent transition-colors ${
              isWorkActive
                ? "text-primary"
                : "text-white hover:bg-white hover:text-black"
            }`}
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
  );
}
