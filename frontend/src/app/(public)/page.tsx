import AboutFoundation from "@/components/modules/Home/AboutFoundation";
import ActionCTA from "@/components/modules/Home/ActionCTA";
import CurrentCampaigns from "@/components/modules/Home/CurrentCampaigns";
import FeaturedProjects from "@/components/modules/Home/FeaturedProjects";
import Hero from "@/components/modules/Home/Hero";
import ImpactStatistics from "@/components/modules/Home/ImpactStatistics";
import LatestNews from "@/components/modules/Home/LatestNews";
import OurMission from "@/components/modules/Home/OurMission";
import PartnersSupporters from "@/components/modules/Home/PartnersSupporters";
import UpcomingEvents from "@/components/modules/Home/UpcomingEvents";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Jannath Foundation.</title>
        <meta content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AboutFoundation />
        <OurMission />
        <CurrentCampaigns />
        <FeaturedProjects />
        <ImpactStatistics />
        <UpcomingEvents />
        <LatestNews />
        <PartnersSupporters />
        <ActionCTA />
      </main>
    </>
  );
}
