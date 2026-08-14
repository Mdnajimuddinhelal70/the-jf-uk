import { ArrowRight, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Community Learning Center",
    category: "Education",
    status: "Completed",
    location: "Sunamganj, Bangladesh",
    year: "2025",
    description:
      "A community-focused learning center created to provide children with a safe and supportive environment for education.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    category: "Community",
    status: "Ongoing",
    location: "Sylhet, Bangladesh",
    year: "2026",
    description:
      "An initiative focused on improving access to safe drinking water and creating healthier communities.",
    image:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Community Food Support",
    category: "Humanitarian",
    status: "Completed",
    location: "Dhaka, Bangladesh",
    year: "2025",
    description:
      "A community support project providing essential food packages to families experiencing difficult circumstances.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
            >
              Featured Projects
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projects Creating{" "}
              <span className="text-primary">Real Impact</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Discover some of the projects and initiatives through which we
              work to create meaningful and lasting change in communities.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category */}
                <Badge className="absolute left-4 top-4 border-0 bg-background/90 text-foreground backdrop-blur-sm hover:bg-background">
                  {project.category}
                </Badge>

                {/* Status */}
                <div className="absolute bottom-4 left-4">
                  <Badge
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
                    className="gap-1.5"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Meta */}
                <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                {/* Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            Explore All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
