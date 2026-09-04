"use client";

import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788499194/WhatsApp_Image_2026-09-04_at_11.11.30_AM_1_lsawfa.jpg",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788499195/WhatsApp_Image_2026-09-04_at_11.11.30_AM_ss4q6f.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787679524/WhatsApp_Image_2026-08-24_at_7.54.01_PM_l1nmdq.jpg",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788504694/Gemini_Generated_Image_p2bk5tp2bk5tp2bk_gcez50.jpg",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788540308/TranImg_hnnaw4.jpg",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787589403/WhatsApp_Image_2026-08-24_at_8.11.46_PM_m9vlhb.jpg",
  },
];

export default function ProjectsSection() {
  const t = useTranslations("Projects.ProjectSection");

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
            <HeartHandshake className="h-4 w-4" />
            {t("badge")}
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {t("description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`items.${project.id}.title`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Project Number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-semibold text-white backdrop-blur-md">
                  {String(project.id).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* English Title */}
                <h3 className="text-xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {t(`items.${project.id}.title`)}
                </h3>

                {/* Bangla Title */}
                <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                  {t(`items.${project.id}.titleBn`)}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-border" />

                {/* View Project */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                >
                  {t("viewProject")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
