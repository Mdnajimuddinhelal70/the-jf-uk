/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  ArrowUpRight,
  BookOpen,
  HandHeart,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const activities = [
  {
    number: "01",
    title: "Education",
    description:
      "We support underprivileged children and communities by providing access to education, learning resources, and opportunities for a better future.",
    icon: BookOpen,
    href: "/projects",
  },
  {
    number: "02",
    title: "Service",
    description:
      "We provide meaningful social and humanitarian services that improve lives and strengthen communities.",
    icon: HeartHandshake,
    href: "/projects",
  },
  {
    number: "03",
    title: "Support",
    description:
      "We stand beside vulnerable and disadvantaged people by providing essential support during difficult times.",
    icon: HandHeart,
    href: "/campaigns",
  },
];

const HumanitarianActivities = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-[450px] rounded-full bg-emerald-50 blur-[110px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-amber-50 blur-[110px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800">
              <Sparkles className="size-3.5" />
              Our Humanitarian Activities
            </span>

            <h2 className="mt-6 max-w-xl font-serif text-4xl font-bold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Standing With Those Who{" "}
              <span className="text-emerald-700">Need Us Most</span>
            </h2>
          </div>

          <div className="lg:pb-2 lg:pl-10">
            <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              Through education, humanitarian services, and essential support,
              we work to create hope and make a positive difference in the lives
              of disadvantaged communities.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-amber-400" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
                Compassion in Action
              </span>
            </div>
          </div>
        </div>

        {/* Activity Showcase */}
        <div className="grid gap-5 md:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.number}
                className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[26px] border border-stone-200 bg-[#faf9f6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-emerald-950/10 sm:p-8"
              >
                {/* Card Number */}
                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl font-bold tracking-tight text-stone-200 transition-colors duration-300 group-hover:text-emerald-100">
                    {activity.number}
                  </span>

                  <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition-all duration-500 group-hover:rotate-6 group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="size-7" strokeWidth={1.7} />
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-10 flex flex-1 flex-col">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 transition-colors duration-300 group-hover:text-emerald-800">
                    {activity.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">
                    {activity.description}
                  </p>

                  <Link
                    href={activity.href}
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-800 transition-all duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4"
                  >
                    Learn More
                    <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </Link>
                </div>

                {/* Decorative Circle */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -right-20 size-44 rounded-full border-[22px] border-emerald-100/40 transition-transform duration-700 group-hover:scale-125"
                />
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[24px] bg-emerald-950 px-7 py-8 text-center sm:px-10 md:flex-row md:text-left">
          <div>
            <p className="font-serif text-xl font-bold text-white sm:text-2xl">
              Together, we can make a difference.
            </p>

            <p className="mt-2 text-sm leading-6 text-emerald-100/70">
              Every act of kindness can bring hope to someone's life.
            </p>
          </div>

          <Link
            href="/campaigns"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
          >
            Support Our Work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HumanitarianActivities;
