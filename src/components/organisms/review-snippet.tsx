import SmallHeroCard from "../molecules/small-hero-card";
import FacePile from "../atoms/face-pile";
import { avatars } from "@/constants/constants";
import { cn } from "@/utils/helper";
import { ReactNode } from "react";

interface ReviewSnippetProps {
  variant?: "crimson";
  className?: string;
  facePileCountBg?: "bg-crimson-400" | "bg-black-950";
  starIconColor?: string;
  rating?: ReactNode;
}

function ReviewSnippet({
  variant,
  className,
  facePileCountBg,
  rating,
}: ReviewSnippetProps) {
  return (
    <SmallHeroCard
      titleLarge="Happy Students"
      headSectionClassName="flex flex-col items-start"
      rating={
        rating ? (
          rating
        ) : (
          <p className="body-xs">
            4.5 <span className="text-black-400">(240)</span>
          </p>
        )
      }
      className={cn(
        "flex flex-col items-start w-64.5 gap-2 ",
        variant && "bg-crimson-400",
        className,
      )}
    >
      <FacePile
        facePileCountBg={facePileCountBg}
        images={avatars}
        count={"2K"}
        size="md"
      />
    </SmallHeroCard>
  );
}

export default ReviewSnippet;
