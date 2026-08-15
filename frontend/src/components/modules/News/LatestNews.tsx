import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const latestNews = [
  {
    id: 1,
    title: "Supporting Families Through Community Initiatives",
    excerpt:
      "Our latest initiative focuses on supporting families and strengthening community connections.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
    category: "Community",
    date: "August 08, 2026",
  },
  {
    id: 2,
    title: "A Day of Service and Community Engagement",
    excerpt:
      "Volunteers and community members came together for a meaningful day of service and collaboration.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=85",
    category: "Activities",
    date: "August 05, 2026",
  },
  {
    id: 3,
    title: "Creating Opportunities for Young People",
    excerpt:
      "We continue to explore new ways to empower young people through education and meaningful opportunities.",
    image:
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=900&q=85",
    category: "Youth",
    date: "August 01, 2026",
  },
  {
    id: 4,
    title: "Building Stronger Communities Together",
    excerpt:
      "Through collaboration and compassion, we are working toward stronger and more connected communities.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=85",
    category: "Community",
    date: "July 28, 2026",
  },
  {
    id: 5,
    title: "Expanding Our Support Programs",
    excerpt:
      "Our foundation continues to expand its initiatives to reach and support more people in need.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85",
    category: "Updates",
    date: "July 24, 2026",
  },
  {
    id: 6,
    title: "Working Together for Positive Change",
    excerpt:
      "Partnerships and community participation remain at the heart of our efforts to create lasting impact.",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85",
    category: "Activities",
    date: "July 20, 2026",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Latest Updates
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Latest News
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Explore our latest activities, announcements, stories, and
              community updates.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((news) => (
            <Card
              key={news.id}
              className="group overflow-hidden border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/news/${news.id}`}>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Category */}
                  <Badge className="absolute left-4 top-4 rounded-full bg-background/90 text-foreground backdrop-blur-sm">
                    {news.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {news.date}
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 line-clamp-2 text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {news.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
