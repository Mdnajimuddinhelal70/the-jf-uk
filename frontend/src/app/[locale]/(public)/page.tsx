import AboutFoundation from "@/components/modules/Home/AboutFoundation";
import ActionCTA from "@/components/modules/Home/ActionCTA";
import BannerSwiper from "@/components/modules/Home/BannerSwiper";
import CurrentCampaigns from "@/components/modules/Home/CurrentCampaigns";
import Hero from "@/components/modules/Home/Hero";
import HumanitarianActivities from "../../../components/modules/Home/HumanitarianActivities";

export default function Home() {
  return (
    <main>
      <BannerSwiper />
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
