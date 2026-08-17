import AboutBanner from "@/components/modules/About/AboutBanner";
import AboutCTA from "@/components/modules/About/AboutCTA";
import AboutHero from "@/components/modules/About/AboutHero";
import ChairmanProfile from "@/components/modules/About/ChairmanProfile";
import LifetimeDonor from "@/components/modules/About/LifetimeDonor";
import WhatWeDo from "@/components/modules/About/WhatWeDo";
import WhoWeAre from "@/components/modules/About/WhoWeAre";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutHero />
      <ChairmanProfile />
      <LifetimeDonor />
      <WhoWeAre />
      <WhatWeDo />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
