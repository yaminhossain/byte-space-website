import { cn } from "@/utils/helper";
import Image from "next/image";

interface Props {
  className?: string;
}

function CourseVideoPlayer({ className }: Props) {
  return (
    <div className={cn(className)}>
      <div className="relative w-[720px] h-[479px]">
        <Image
          src={"/images/courses/course-demo-video-template-image.webp"}
          fill
          alt="dummy video player"
          className="rounded-3xl"
        />
        <div className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[104px] rounded-3xl border border-red-600">
          <div className="size-15 bg-white rounded-full">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseVideoPlayer;
