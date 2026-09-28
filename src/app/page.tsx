import { Text } from "@/components/atoms/text(depricated)";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ByteSpace",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl text-center font-satoshi font-medium">
        HOME PAGE
      </h1>
    </div>
  );
}
