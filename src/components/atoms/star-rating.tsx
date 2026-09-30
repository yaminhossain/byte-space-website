import { ReactNode } from "react";
import StarIcon from "./svg-icons/star-icon";
import { cn } from "@/utils/helper";

interface StarRatingProps {
  rating: ReactNode;
  iconColor?: "#D4FB20" | "#CED0D3";
  className?: string;
}

function StarRating({ rating, iconColor, className }: StarRatingProps) {
  return (
    <div className={"flex justify-center items-center gap-0.5"}>
      <div className={cn("body-xs", className)}>{rating}</div>
      <StarIcon iconColor={iconColor} />
    </div>
  );
}

export default StarRating;
