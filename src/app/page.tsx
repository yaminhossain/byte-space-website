import { Metadata } from "next";
import Hero from "@/components/organisms/hero";
import PartnerBanner from "@/components/atoms/partner-banner";

export const metadata: Metadata = {
  title: "Home | ByteSpace",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerBanner />
    </div>
  );
}
