import { cn } from "@/utils/helper";
import StarRating from "../atoms/star-rating";
import { ReactNode } from "react";

type iconColor = "#D4FB20" | "#CED0D3";

interface SmallHeroCardProps {
  className?: string;
  children?: ReactNode;
  titleLarge?: string;
  titleSmall?: string;
  subtitle?: string;
  rating?: number;
  starIconColor?: iconColor;
}

function SmallHeroCard({
  className,
  children,
  titleLarge,
  titleSmall,
  subtitle,
  rating,
  starIconColor,
}: SmallHeroCardProps) {
  return (
    <div className={cn("rounded-2xl p-4 bg-white", className)}>
      {/* title large*/}
      {titleLarge && <h1 className="label-md text-black-950">{titleLarge}</h1>}
      {/* title small */}
      {titleSmall && <h2 className="label-sm text-black-950">{titleSmall}</h2>}
      {/* Subtitle */}
      {subtitle && <p className="body-xs text-black-400">{subtitle}</p>}

      {/* Star Rating */}
      {(rating || starIconColor) && (
        <StarRating rating={rating} iconColor={starIconColor} />
      )}

      {children && children}
    </div>
  );
}

export default SmallHeroCard;
