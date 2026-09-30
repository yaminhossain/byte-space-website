import { Metadata } from "next";
import Hero from "@/components/organisms/hero";
import PartnerBanner from "@/components/atoms/partner-banner";
import ProductSummary from "@/components/organisms/product-summary";

export const metadata: Metadata = {
  title: "Home | ByteSpace",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerBanner />
      <ProductSummary />
    </div>
  );
}
