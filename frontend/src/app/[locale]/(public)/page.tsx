import AboutFoundation from "@/components/modules/Home/AboutFoundation";
import ActionCTA from "@/components/modules/Home/ActionCTA";
import CurrentCampaigns from "@/components/modules/Home/CurrentCampaigns";
import Hero from "@/components/modules/Home/Hero";
import HumanitarianActivities from "../../../components/modules/Home/HumanitarianActivities";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutFoundation />
      {/* <OurMission /> */}
      <CurrentCampaigns />
      {/* <FeaturedProjects /> */}
      <HumanitarianActivities />
      {/* <ImpactStatistics /> */}
      {/* <UpcomingEvents /> */}
      {/* <LatestNews /> */}
      {/* <PartnersSupporters /> */}
      <ActionCTA />
    </main>
  );
}
