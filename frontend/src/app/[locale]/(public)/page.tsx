import AboutFoundation from "@/components/modules/Home/AboutFoundation";
import BannerSwiper from "@/components/modules/Home/BannerSwiper";
import CurrentCampaigns from "@/components/modules/Home/CurrentCampaigns";
import FounderSection from "@/components/modules/Home/FounderSection";
import Hero from "@/components/modules/Home/Hero";
import HumanitarianActivities from "../../../components/modules/Home/HumanitarianActivities";

export default function Home() {
  return (
    <main>
      <BannerSwiper />
      <Hero />
      <FounderSection />
      <AboutFoundation />
      {/* <OurMission /> */}
      <CurrentCampaigns />
      {/* <FeaturedProjects /> */}
      <HumanitarianActivities />
      {/* <ImpactStatistics /> */}
      {/* <UpcomingEvents /> */}
      {/* <LatestNews /> */}
      {/* <PartnersSupporters /> */}
      {/* <ActionCTA /> */}
    </main>
  );
}
