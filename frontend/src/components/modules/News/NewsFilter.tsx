"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  "Events",
  "Announcements",
  "Activities",
  "Community",
  "Updates",
];

export default function NewsFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="bg-background py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 rounded-2xl border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold">Browse News</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Explore stories by category
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Badge
                    variant={isActive ? "default" : "outline"}
                    className="cursor-pointer rounded-full px-4 py-2 text-xs transition-all hover:border-primary hover:text-primary"
                  >
                    {category}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
