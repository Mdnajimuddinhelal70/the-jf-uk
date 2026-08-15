import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const highlights = [
  {
    icon: UsersRound,
    title: "Community Focused",
    description: "Putting people and communities at the heart of our work.",
  },
  {
    icon: Target,
    title: "Purpose Driven",
    description: "Working with clear goals to create meaningful change.",
  },
  {
    icon: Sparkles,
    title: "Impact Oriented",
    description: "Turning ideas and compassion into positive action.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border bg-background shadow-sm">
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Our Foundation"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  width={800}
                  height={1000}
                />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border bg-background p-5 shadow-xl sm:-right-6 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <p className="text-2xl font-bold">Together</p>
                  <p className="text-xs text-muted-foreground">
                    Creating meaningful change
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:py-6">
            <Badge
              variant="outline"
              className="rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              Who We Are
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A Foundation Built on{" "}
              <span className="text-primary">Purpose & Compassion</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              We are a community-focused foundation committed to creating
              opportunities, empowering people, and supporting initiatives that
              contribute to a stronger and more inclusive society.
            </p>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Our work is driven by the belief that meaningful change begins
              when people come together with a shared purpose. Through
              collaboration, compassion, and responsible action, we work to
              address real challenges and create lasting impact.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Explore Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
