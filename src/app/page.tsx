import { Metadata } from "next";
import Hero from "@/components/organisms/hero";
import PartnerBanner from "@/components/atoms/partner-banner";
import ProductSummary from "@/components/organisms/product-summary";
import HomeFeaturedCourses from "@/components/templates/home-featured-courses";
import HomeCategoriesContainer from "@/components/molecules/home-categories-container";
import HomeBottomBannerSection from "@/components/molecules/home-bottom-banner-section";

export const metadata: Metadata = {
  title: "Home | ByteSpace",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerBanner />
      <HomeFeaturedCourses />
      <HomeCategoriesContainer />
      <HomeBottomBannerSection />
      {/* <ProductSummary /> */}

      <div className="h-5"></div>
    </div>
  );
}
