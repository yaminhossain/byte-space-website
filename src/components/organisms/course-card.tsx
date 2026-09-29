import { cn } from "@/utils/helper";
import Image from "next/image";
import StarRating from "../atoms/star-rating";
import Pill from "../atoms/pill";
import Badge from "../atoms/badge";
import SignalCellularAlt from "../atoms/svg-icons/SignalCellularAlt";
import FacePile from "../atoms/face-pile";
import { courseCardAvatars } from "@/constants/constants";

interface CourseCardProps {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  imgClassName?: string;
  heading: string;
  authorName: string;
  rating: string;
}

function CourseCard({
  className,
  imgSrc,
  imgAlt,
  imgClassName,
  heading,
  authorName,
  rating,
}: CourseCardProps) {
  return (
    <div
      className={cn(
        "max-w-93.25 w-full p-4 rounded-3xl border border-black-200 bg-white",
        className,
      )}
    >
      {/* Image Section */}
      <div className="relative">
        <div
          className={cn(
            "relative w-[341px] h-[195px] rounded-3xl overflow-hidden",
            imgClassName,
          )}
        >
          <Image
            src={imgSrc}
            fill
            alt={imgAlt}
            className="object-center object-cover"
          />
        </div>
        <div className="flex gap-3 absolute p-3.25 bottom-4.75">
          <Pill className="w-20.25">17 Lessons</Pill>
          <Pill className="w-27.25">2 hours 16 mins</Pill>
          <Pill className="w-25.25">59 Comments</Pill>
        </div>
      </div>

      {/* Heading Section */}
      <div className="mt-5">
        <div className="flex justify-between">
          <h1 className="text-black-950 heading-xs">{heading}</h1>
          <StarRating iconColor="#CED0D3" rating={rating} className="body-lg" />
        </div>
        <p className="body-xs text-black-700">
          by <span className="text-electric-violet-800">${authorName}</span>
        </p>
      </div>

      {/* facepile and badge section */}
      <div className="flex gap-3 my-4">
        <Badge
          text="Beginner"
          icon={<SignalCellularAlt />}
          className="flex justify-center items-center"
        />
        <FacePile images={courseCardAvatars} count={"26"} />
      </div>

      {/* Amount Section*/}
      <div className="flex items-baseline">
        <p className="heading-xs text-electric-violet-800">$25</p>
        <p className="body-xs text-black-700">/lifetime</p>
      </div>
    </div>
  );
}

export default CourseCard;
