import FeaturedNews from "@/components/modules/News/FeaturedNews";
import LatestNews from "@/components/modules/News/LatestNews";
import NewsCTA from "@/components/modules/News/NewsCTA";
import NewsFilter from "@/components/modules/News/NewsFilter";
import NewsHero from "@/components/modules/News/NewsHero";
import NewsPagination from "@/components/modules/News/NewsPagination";

const NewsPage = () => {
  return (
    <div>
      <NewsHero />
      <FeaturedNews />
      <LatestNews />
      <NewsFilter />
      <NewsPagination />
      <NewsCTA />
    </div>
  );
};

export default NewsPage;
