import { cn } from "@/utils/helper";
import Image from "next/image";
import style from "../atoms/styles/styles.module.css";

interface Props {
  className?: string;
}

function CourseVideoPlayer({ className }: Props) {
  return (
    <div className={(cn(className), "relative h-[479px] aspect-video")}>
      <Image
        src={"/images/courses/course-demo-video-template-image.webp"}
        fill
        alt="Course video preview"
        className="rounded-3xl"
      />
      <div className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[104px] rounded-3xl border border-black-700 bg-[#3D3D3D3D]/24 backdrop-blur-2xl">
        <button
          type="button"
          aria-label="Play course video"
          className={cn(
            "size-15 cursor-pointer rounded-full bg-white",
            style.triangle,
          )}
        />
      </div>
    </div>
  );
}

export default CourseVideoPlayer;
