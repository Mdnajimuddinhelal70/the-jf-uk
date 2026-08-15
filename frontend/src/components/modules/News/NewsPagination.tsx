"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const pages = [1, 2, 3, 4, 5];

export default function NewsPagination() {
  return (
    <section className="bg-background pb-20 sm:pb-24 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Previous */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            disabled
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          {/* Pages */}
          {pages.map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              className="h-10 min-w-10 rounded-full px-3"
            >
              {page}
            </Button>
          ))}

          {/* Next */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
