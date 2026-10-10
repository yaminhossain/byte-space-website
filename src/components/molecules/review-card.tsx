import Avatar from "../atoms/avatar";
import StarRatingSystem from "../atoms/star-rating-system";

interface ReviewCardProps {
  name: string;
  role: string;
  date: string;
  rating: number;
  review: string;
  avatarSrc: string;
  avatarAlt: string;
}

function ReviewCard({
  name,
  role,
  date,
  rating,
  review,
  avatarSrc,
  avatarAlt,
}: ReviewCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-black-200 p-6 sm:p-10">
      <header className="flex items-center gap-3">
        <Avatar src={avatarSrc} alt={avatarAlt} size="md" />
        <div>
          <p className="body-md text-black-950">{name}</p>
          <p className="body-sm text-black-700">{role}</p>
        </div>
        <p className="body-sm ml-auto shrink-0 text-black-700">{date}</p>
      </header>

      <StarRatingSystem
        rating={rating}
        numberOfStars={5}
        filledColor="#4B4C53"
        className="gap-2"
        iconWidth={20}
        iconHeight={20}
      />

      <q className="body-md text-black-700">{review}</q>
    </article>
  );
}

export default ReviewCard;
