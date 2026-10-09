import { ReactNode } from "react";
import StarIcon from "./svg-icons/star-icon";
import { cn } from "@/utils/helper";

interface StarRatingProps {
  rating: ReactNode;
  iconColor?: "#D4FB20" | "#CED0D3" | "#4B4C53";
  iconWidth?: string | number;
  iconHeight?: string | number;
  className?: string;
  showIcon?: boolean;
}

function StarRating({
  rating,
  iconColor,
  iconWidth,
  iconHeight,
  showIcon = true,
  className,
}: StarRatingProps) {
  return (
    <div className={"flex justify-center items-center gap-0.5"}>
      <div className={cn("body-xs", className)}>{rating}</div>
      {showIcon && (
        <StarIcon iconColor={iconColor} width={iconWidth} height={iconHeight} />
      )}
    </div>
  );
}

export default StarRating;
