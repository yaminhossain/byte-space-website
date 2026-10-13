import Link from "next/link";
import Image from "next/image";
import { CreatorType } from "@/types/type";

interface CreatorCardProps {
  creator: CreatorType;
}

function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article className="flex h-full min-h-[420px] w-full max-w-93.25 flex-col rounded-3xl border border-black-200 bg-white p-4">
      <div className="flex items-start gap-4">
        <div className="relative size-18 shrink-0 overflow-hidden rounded-2xl bg-black-50">
          <Image
            src={creator.avatar}
            alt={`${creator.name} profile`}
            fill
            sizes="72px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 pt-1">
          <span className="label-xs rounded-full bg-crimson-100 px-3 py-1 text-black-950">
            {creator.category}
          </span>
          <h2 className="heading-xs mt-2 text-black-950">{creator.name}</h2>
          <p className="body-sm mt-1 text-black-500">{creator.title}</p>
          <p className="body-xs mt-2 flex items-center gap-1.5 text-black-700">
            <span className="text-electric-violet-800" aria-hidden="true">
              ★
            </span>
            <strong className="label-sm text-black-950">
              {creator.rating}
            </strong>
            <span>({creator.reviewCount} reviews)</span>
          </p>
        </div>
      </div>

      <div className="my-4 grid grid-cols-3 divide-x divide-black-100 border-y border-black-100 py-3 text-center">
        <div>
          <p className="label-md text-black-950">{creator.courseCount}</p>
          <p className="body-xs mt-1 text-black-500">Courses</p>
        </div>
        <div>
          <p className="label-md text-black-950">{creator.studentCount}</p>
          <p className="body-xs mt-1 text-black-500">Students</p>
        </div>
        <div>
          <p className="label-md text-black-950">{creator.experience}</p>
          <p className="body-xs mt-1 text-black-500">Experience</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {creator.specialties.map((specialty) => (
          <span
            key={specialty}
            className="rounded-full bg-electric-violet-50 px-3 py-1 label-xs text-electric-violet-800"
          >
            {specialty}
          </span>
        ))}
      </div>
      <p className="body-sm mt-4 line-clamp-2 text-black-700">{creator.bio}</p>

      <div className="mt-auto pt-4">
        <Link
          href={`/creators/${creator.id}`}
          aria-label={`View ${creator.name}'s profile`}
          className="inline-flex items-center gap-2 rounded-3xl bg-crimson-400 px-5 py-3 label-sm text-black-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-violet-800"
        >
          View profile <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default CreatorCard;
