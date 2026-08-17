import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const baseMessages = (await import(`../messages/${locale}.json`)).default;

  const heroMessages = (await import(`../messages/${locale}/home/hero.json`))
    .default;

  const aboutFoundationMessages = (
    await import(`../messages/${locale}/home/about-foundation.json`)
  ).default;

  const ourMissionMessages = (
    await import(`../messages/${locale}/home/our-mission.json`)
  ).default;

  const currentCampaignsMessages = (
    await import(`../messages/${locale}/home/currentCampaigns.json`)
  ).default;
  const upcomingEventsMessages = (
    await import(`../messages/${locale}/home/upcomingEvents.json`)
  ).default;
  const featuredProjectsMessages = (
    await import(`../messages/${locale}/home/featuredProjects.json`)
  ).default;
  const actionCTAMessages = (
    await import(`../messages/${locale}/home/actionCTA.json`)
  ).default;
  // For about page
  const aboutBannerMessages = (
    await import(`../messages/${locale}/about/banner.json`)
  ).default;
  const chairmanProfileMessages = (
    await import(`../messages/${locale}/about/chairmanProfile.json`)
  ).default;
  const aboutHeroMessages = (
    await import(`../messages/${locale}/about/aboutHero.json`)
  ).default;
  const whoWeAreMessages = (
    await import(`../messages/${locale}/about/who-we-are.json`)
  ).default;
  const whatWeDoMessages = (
    await import(`../messages/${locale}/about/what-we-do.json`)
  ).default;
  const lifetimeDonorMessages = (
    await import(`../messages/${locale}/about/lifetime-donor.json`)
  ).default;
  return {
    locale,
    messages: {
      ...baseMessages,

      Home: {
        ...baseMessages.Home,

        Hero: heroMessages,
        AboutFoundation: aboutFoundationMessages,
        OurMission: ourMissionMessages,
        CurrentCampaigns: currentCampaignsMessages,
        UpcomingEvents: upcomingEventsMessages,
        FeaturedProjects: featuredProjectsMessages,
        ActionCTA: actionCTAMessages,
      },
      About: {
        Banner: aboutBannerMessages,
        ChairmanProfile: chairmanProfileMessages,
        AboutHero: aboutHeroMessages,
        WhoWeAre: whoWeAreMessages,
        WhatWeDo: whatWeDoMessages,
        LifetimeDonor: lifetimeDonorMessages,
      },
    },
  };
});
