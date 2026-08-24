import {
  ArrowUpRight,
  BookOpen,
  HandHeart,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "Education",
    description:
      "We support underprivileged children and communities by providing access to education, learning resources, and opportunities for a better future.",
    icon: BookOpen,
    href: "/projects",
  },
  {
    title: "Service",
    description:
      "We provide meaningful social and humanitarian services that improve lives and strengthen communities.",
    icon: HeartHandshake,
    href: "/projects",
  },
  {
    title: "Support",
    description:
      "We stand beside vulnerable and disadvantaged people by providing essential support during difficult times.",
    icon: HandHeart,
    href: "/campaigns",
  },
];

const HumanitarianActivities = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Humanitarian Activities
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Standing With Those Who
            <span className="text-primary"> Need Us Most</span>
          </h2>

          <p className="mt-5 md:text-lg">
            Through education, humanitarian services, and essential support, we
            work to create hope and make a positive difference in the lives of
            disadvantaged communities.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <Card
                key={activity.title}
                className="group relative overflow-hidden border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-7 md:p-8">
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl sm:text-sm font-bold">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 leading-7 text-2xl">
                    {activity.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={activity.href}
                    className="inline-flex items-center gap-2 font-semibold text-primary text-2xl transition-all duration-300 hover:gap-3"
                  >
                    Learn More
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HumanitarianActivities;
