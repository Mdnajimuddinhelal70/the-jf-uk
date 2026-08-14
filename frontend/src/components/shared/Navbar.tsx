"use client";

import { ArrowUpRight, Heart, Menu } from "lucide-react";
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

const workItems = [
  {
    title: "Our Projects",
    description: "Discover the projects and initiatives we are working on.",
    href: "/projects",
  },
  {
    title: "Campaigns",
    description: "Support our current campaigns and humanitarian work.",
    href: "/campaigns",
  },
  {
    title: "Events",
    description: "Explore our upcoming and past events.",
    href: "/events",
  },
];

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* ================= LOGO ================= */}
        <Link href="/" className="group flex items-center gap-3">
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

        {/* ================= DESKTOP NAV ================= */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Normal Navigation Items */}
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* ================= OUR WORK ================= */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  workItems.some((item) => isActive(item.href))
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                Our Work
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {workItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group block select-none rounded-md p-3 outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>

                          <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>

                        <p className="mt-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ================= DESKTOP DONATE ================= */}
        <div className="hidden lg:flex">
          <Link href="/donate">
            <Button className="rounded-full px-6 shadow-sm">
              <Heart className="mr-2 size-4 fill-current" />
              Donate Now
            </Button>
          </Link>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className="lg:hidden">
          <Sheet>
            {/* IMPORTANT:
                SheetTrigger itself renders a button.
                asChild prevents nested <button>.
            */}
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>

            {/* ================= MOBILE SHEET ================= */}
            <SheetContent side="right" className="w-[85%] sm:max-w-sm">
              {/* Mobile Header */}
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

              {/* ================= MOBILE NAVIGATION ================= */}
              <div className="mt-6 flex flex-col gap-2">
                {/* Main Navigation */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}

                {/* ================= MOBILE OUR WORK ================= */}
                <div className="mt-2">
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Our Work
                  </div>

                  <div className="ml-2 border-l pl-2">
                    {workItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                          isActive(item.href)
                            ? "font-medium text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ================= MOBILE DONATE ================= */}
                <div className="mt-6 border-t pt-6">
                  <Link href="/donate" className="block">
                    <Button size="lg" className="w-full rounded-full">
                      <Heart className="mr-2 size-4 fill-current" />
                      Donate Now
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
