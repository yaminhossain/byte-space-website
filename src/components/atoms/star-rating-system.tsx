import StarIcon from "./svg-icons/star-icon";

type StarColor = "#D4FB20" | "#CED0D3" | "#4B4C53";

interface StarRatingSystemProps {
  rating?: number;
  numberOfStars?: number;
  filledColor?: StarColor;
  emptyColor?: StarColor;
  className?: string;
  iconWidth?: string | number;
  iconHeight?: string | number;
}

function StarRatingSystem({
  rating = 0,
  numberOfStars = 5,
  filledColor = "#D4FB20",
  emptyColor = "#CED0D3",
  iconWidth = "14",
  iconHeight = "13",
  className,
}: StarRatingSystemProps) {
  const starCount = Math.max(0, Math.floor(numberOfStars));
  const boundedRating = Number.isFinite(rating)
    ? Math.min(starCount, Math.max(0, rating))
    : 0;

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className ?? ""}`.trim()}
      role="img"
      aria-label={`${boundedRating} out of ${starCount} stars`}
    >
      {Array.from({ length: starCount }, (_, index) => {
        const valueForStar = boundedRating - index;
        const fillPercentage =
          valueForStar > 0.5 ? 100 : valueForStar > 0 ? 50 : 0;

        return (
          <span key={index} className="relative inline-flex">
            <StarIcon
              iconColor={emptyColor}
              width={iconWidth}
              height={iconHeight}
            />
            {fillPercentage > 0 && (
              <span
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                aria-hidden="true"
              >
                <StarIcon
                  iconColor={filledColor}
                  width={iconWidth}
                  height={iconHeight}
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default StarRatingSystem;
