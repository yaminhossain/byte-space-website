import ProgressBar from "../atoms/progress-bar";

import StarRatingSystem from "../atoms/star-rating-system";

interface RatingOverviewCardProps {
  overallRating: string | number;
  fiveStars: string | number;
  fourStars: string | number;
  threeStars: string | number;
  twoStars: string | number;
  oneStars: string | number;
}

function RatingOverviewCard({
  overallRating,
  fiveStars,
  fourStars,
  threeStars,
  twoStars,
  oneStars,
}: RatingOverviewCardProps) {
  const ratings = [
    { rating: 5, count: fiveStars },
    { rating: 4, count: fourStars },
    { rating: 3, count: threeStars },
    { rating: 2, count: twoStars },
    { rating: 1, count: oneStars },
  ];
  const totalRatings = ratings.reduce(
    (total, { count }) => total + Number(count),
    0,
  );

  return (
    <div className="border border-black-200 rounded-2xl p-10 flex gap-6">
      <div className="w-[129px] h-[140px] bg-crimson-400 rounded-lg flex flex-col justify-center items-center">
        <p className="text-black-950 label-sm">Ratings</p>
        <p className="text-black-950 heading-sm">{overallRating}</p>
      </div>
      <div className="flex w-full flex-col justify-between gap-1">
        {ratings.map(({ rating, count }) => (
          <div
            key={rating}
            className="grid grid-cols-[minmax(0,1fr)_108px_4rem] items-center gap-4"
          >
            <ProgressBar
              className="bg-gray-200"
              progress={
                totalRatings > 0 ? (Number(count) / totalRatings) * 100 : 0
              }
            />
            <StarRatingSystem
              filledColor="#4B4C53"
              rating={rating}
              numberOfStars={5}
              iconHeight={20}
              iconWidth={20}
              className="w-[108px] shrink-0"
            />
            <p className="body-md w-16 shrink-0 text-right text-black-700">
              {count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingOverviewCard;
