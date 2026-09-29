import { cn } from "@/utils/helper";
import StarRating from "../atoms/star-rating";
import { ReactNode } from "react";

interface SmallHeroCardProps {
  className?: string;
  children?: ReactNode;
}

function SmallHeroCard({ className, children }: SmallHeroCardProps) {
  return (
    <div className={cn("rounded-2xl p-4 bg-white", className)}>
      {/* title la rge*/}
      <h1>UI/UX Design</h1>
      {/* title small */}
      <h2>Learn the fundamentals of UI/UX design</h2>
      {/* Subtitle */}
      <p>200 Courses</p>

      {/* Star Rating */}
      <StarRating rating={4.5} />

      {children}
    </div>
  );
}

export default SmallHeroCard;
