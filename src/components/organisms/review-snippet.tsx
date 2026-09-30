import SmallHeroCard from "../molecules/small-hero-card";
import FacePile from "../atoms/face-pile";
import { avatars } from "@/constants/constants";
import { cn } from "@/utils/helper";

interface ReviewSnippetPorps {
  variant?: "crimson";
  className?: string;
}

function ReviewSnippet({ variant, className }: ReviewSnippetPorps) {
  return (
    <SmallHeroCard
      titleLarge="Happy Students"
      headSectionClassName="flex flex-col items-start"
      rating={
        <p className="body-xs">
          4.5 <span className="text-black-400">(240)</span>
        </p>
      }
      className={cn(
        "flex flex-col items-start w-64.5 gap-2 ",
        variant && "bg-crimson-400",
        className,
      )}
    >
      <FacePile images={avatars} count={"2K"} size="md" />
    </SmallHeroCard>
  );
}

export default ReviewSnippet;
