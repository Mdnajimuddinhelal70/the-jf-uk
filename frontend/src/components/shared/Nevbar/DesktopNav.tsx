import { ArrowUpRight, ChevronDown } from "lucide-react";
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
      <NavigationMenuList className="gap-1">
        {/* Main Navigation */}
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={getLocalizedHref(item.href)}
                className={`relative inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                {t(item.key)}

                {active && (
                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-600" />
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}

        {/* Our Work Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`h-11 rounded-full bg-transparent px-5 text-sm font-semibold transition-all duration-300 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-800 ${
              isWorkActive
                ? "bg-emerald-50 text-emerald-800"
                : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            }`}
          >
            {t("ourWork")}
            <ChevronDown className="ml-1 size-4 transition-transform duration-200" />
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-[560px] p-4">
              <div className="mb-3 px-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  {t("ourWork")}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Explore our work and community initiatives.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {workItems.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={getLocalizedHref(item.href)}
                        className={`group flex min-h-20 items-center justify-between rounded-xl border p-4 transition-all duration-300 ${
                          active
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-transparent bg-slate-50 hover:border-emerald-100 hover:bg-emerald-50"
                        }`}
                      >
                        <div>
                          <span className="mb-1 block text-[10px] font-bold tracking-widest text-emerald-700">
                            0{index + 1}
                          </span>

                          <span
                            className={`text-sm font-semibold ${
                              active
                                ? "text-emerald-800"
                                : "text-slate-800 group-hover:text-emerald-800"
                            }`}
                          >
                            {t(item.key)}
                          </span>
                        </div>

                        <ArrowUpRight
                          className={`size-4 transition-all duration-300 ${
                            active
                              ? "text-emerald-700"
                              : "text-slate-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-700"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
