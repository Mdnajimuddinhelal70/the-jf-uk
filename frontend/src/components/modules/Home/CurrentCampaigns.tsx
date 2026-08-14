import { ArrowRight, CalendarDays, Heart, MapPin, Users } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const campaigns = [
  {
    id: 1,
    title: "Help Provide Education for Every Child",
    description:
      "Support children with educational resources, learning materials, and opportunities to build a brighter future.",
    category: "Education",
    location: "Bangladesh",
    raised: 7200,
    goal: 10000,
    supporters: 124,
    daysLeft: 18,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Clean Water for Rural Communities",
    description:
      "Help us bring safe and clean drinking water to communities that need reliable access to essential resources.",
    category: "Community",
    location: "Rural Bangladesh",
    raised: 5400,
    goal: 8000,
    supporters: 89,
    daysLeft: 24,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Food Support for Families in Need",
    description:
      "Join our campaign to provide essential food supplies and support to families facing difficult circumstances.",
    category: "Food Support",
    location: "Dhaka",
    raised: 8600,
    goal: 12000,
    supporters: 167,
    daysLeft: 12,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  },
];

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function CurrentCampaigns() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              Current Campaigns
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Together, We Can Make a{" "}
              <span className="text-primary">Difference</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Explore our ongoing campaigns and discover meaningful ways to
              support people, communities, and causes that need your help.
            </p>
          </div>

          <Link
            href="/campaigns"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All Campaigns
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Campaign Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => {
            const progress = Math.min(
              Math.round((campaign.raised / campaign.goal) * 100),
              100,
            );

            return (
              <Card
                key={campaign.id}
                className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={300}
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category */}
                  <Badge className="absolute left-4 top-4 border-0 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background">
                    {campaign.category}
                  </Badge>

                  {/* Days left */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
                    <CalendarDays className="h-4 w-4" />
                    {campaign.daysLeft} days left
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Location */}
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {campaign.location}
                  </div>

                  {/* Title */}
                  <h3 className="line-clamp-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {campaign.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {campaign.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold">
                        {formatAmount(campaign.raised)}
                      </span>

                      <span className="text-muted-foreground">{progress}%</span>
                    </div>

                    <Progress value={progress} className="h-2" />

                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Goal: {formatAmount(campaign.goal)}</span>

                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {campaign.supporters} supporters
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/campaigns/${campaign.id}`}
                    className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
                  >
                    <Heart className="h-4 w-4" />
                    Support This Campaign
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Explore All Campaigns
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
