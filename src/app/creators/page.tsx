import type { Metadata } from "next";
import CreatorsDirectory from "@/components/templates/creators-directory";

export const metadata: Metadata = {
  title: "Creators",
  description: "Meet the creators sharing their skills and ideas on ByteSpace.",
};

export default function CreatorsPage() {
  return (
    <section>
      <CreatorsDirectory />
    </section>
  );
}
