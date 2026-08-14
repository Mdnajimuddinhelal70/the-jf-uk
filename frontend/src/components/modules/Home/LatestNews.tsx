import { ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const news = [
  {
    id: 1,
    category: "Foundation",
    title: "Our Foundation Reaches a New Community",
    excerpt:
      "We are expanding our work to support more people and create meaningful opportunities within local communities.",
    date: "August 10, 2026",
    readTime: "4 min read",
    author: "Foundation Team",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    category: "Community",
    title: "Community Support Initiative Successfully Completed",
    excerpt:
      "Our latest community initiative brought volunteers and local supporters together to create a positive impact.",
    date: "August 05, 2026",
    readTime: "3 min read",
    author: "Foundation Team",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "Education",
    title: "Supporting Education Through New Initiatives",
    excerpt:
      "Discover how our education-focused initiatives are helping create better opportunities for children and young people.",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: "Foundation Team",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function LatestNews() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              Latest News
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Stay Updated With Our{" "}
              <span className="text-primary">Latest Stories</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Follow our latest activities, achievements, community stories, and
              updates from across the foundation.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={500}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <Badge className="absolute left-4 top-4 border-0 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background">
                  {item.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    {item.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 line-clamp-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {item.excerpt}
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground">
                  <UserRound className="h-4 w-4" />
                  <span>{item.author}</span>
                </div>

                {/* Read More */}
                <Link
                  href={`/news/${item.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            Explore All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
