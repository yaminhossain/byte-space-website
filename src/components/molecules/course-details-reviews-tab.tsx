import RatingOverviewCard from "./rating-overview-card";
import ReviewCard from "./review-card";
import Tab from "../atoms/tab";
import Link from "next/link";
import { reviews } from "@/constants/dummyReviews";
import { cn } from "@/utils/helper";
import StarRating from "../atoms/star-rating";

interface CourseDetailsReviewsTabProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const ratingTabOptions = [
  { value: "all-rating", rating: null },
  { value: "five-star", rating: 5 },
  { value: "four-star", rating: 4 },
  { value: "three-star", rating: 3 },
  { value: "two-star", rating: 2 },
  { value: "one-star", rating: 1 },
];

function CourseDetailsReviewsTab({
  searchParams,
}: CourseDetailsReviewsTabProps) {
  const requestedRating = searchParams.rating;
  console.log("Requested Rating: ", requestedRating);

  // ensures correct search parameter and guard "undefined" through "AND" operation
  const activeRating =
    typeof requestedRating === "string" &&
    ratingTabOptions.some((option) => option.value === requestedRating)
      ? requestedRating
      : "all-rating";

  // ensures correct rating from rating tab options
  const selectedRating =
    ratingTabOptions.find((option) => option.value === activeRating)?.rating ??
    null;

  console.log("Selected Rating: ", selectedRating);
  // filter the review based on rating
  const filteredReviews =
    selectedRating === null
      ? reviews
      : reviews.filter((review) => review.rating === selectedRating);

  console.log("Filtered Review", filteredReviews);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="heading-xs text-black-950">What Learners Are Saying</h1>
      <p className="body-md text-black-700">
        Discover what our learners have to say about their experience with
        &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
        and ratings from individuals who have embarked on the transformative
        journey of mastering digital asset creation.
      </p>
      <RatingOverviewCard
        overallRating={4.7}
        fiveStars={720}
        fourStars={120}
        threeStars={21}
        twoStars={12}
        oneStars={16}
      />
      <h1 className="heading-xs text-black-950">Individual Reviews:</h1>

      <div className="flex gap-4 overflow-x-auto">
        {ratingTabOptions.map(({ value, rating }) => (
          <Link
            key={value}
            href={`/courses/1?tab=reviews&rating=${value}`}
            scroll={false}
          >
            <Tab
              className={cn(
                activeRating === value && "text-black-950 bg-crimson-400",
              )}
            >
              {rating === null ? (
                "All ratings"
              ) : (
                <StarRating
                  className={cn(
                    "label-md",
                    activeRating === value
                      ? "text-black-950"
                      : "text-black-700",
                  )}
                  rating={rating}
                  iconColor="#4B4C53"
                  iconWidth={20}
                  iconHeight={20}
                />
              )}
            </Tab>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))
        ) : (
          <p className="body-md text-black-700">
            No reviews yet for this rating.
          </p>
        )}
      </div>
    </div>
  );
}

export default CourseDetailsReviewsTab;
