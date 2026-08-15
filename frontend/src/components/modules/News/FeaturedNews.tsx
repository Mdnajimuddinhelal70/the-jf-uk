import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const featuredNews = {
  title: "Working Together to Build Stronger Communities",
  excerpt:
    "Discover how our foundation continues to work with communities, volunteers, and partners to create meaningful opportunities and positive change.",
  image:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85",
  category: "Featured",
  date: "August 10, 2026",
};

const sideNews = [
  {
    title: "Supporting Community Initiatives",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=85",
    category: "Activities",
    date: "August 06, 2026",
  },
  {
    title: "Together for a Better Future",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=85",
    category: "Community",
    date: "August 02, 2026",
  },
];

export default function FeaturedNews() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Stories That Matter
            </h2>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Main Featured Article */}
          <Card className="group overflow-hidden border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link href="/news/featured-story">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <Badge className="absolute left-5 top-5 rounded-full bg-primary text-primary-foreground">
                  {featuredNews.category}
                </Badge>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <div className="mb-3 flex items-center gap-2 text-xs text-white/75">
                    <CalendarDays className="h-4 w-4" />
                    {featuredNews.date}
                  </div>

                  <h3 className="max-w-2xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {featuredNews.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                    {featuredNews.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Read Story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Card>

          {/* Side Articles */}
          <div className="grid gap-6">
            {sideNews.map((news) => (
              <Card
                key={news.title}
                className="group overflow-hidden border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href="/news/featured-story">
                  <div className="grid h-full sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto lg:aspect-[16/8]">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 35vw"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="flex flex-col justify-center p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <Badge
                          variant="secondary"
                          className="rounded-full text-xs"
                        >
                          {news.category}
                        </Badge>

                        <span className="text-xs text-muted-foreground">
                          {news.date}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-primary sm:text-xl">
                        {news.title}
                      </h3>

                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
