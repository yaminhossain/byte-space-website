import { cn } from "@/utils/helper";
import Avatar from "./avatar";

type AvatarSize = "sm" | "md";
interface FacePileProps {
  images: string[];
  count?: number | string;
  size?: AvatarSize;
  className?: string;
}

function FacePile({ images, count, size = "md", className }: FacePileProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={cn("relative rounded-full", index > 0 && "-ml-3")}
        >
          <Avatar src={image} alt={`User ${index + 1}`} size={size} />
        </div>
      ))}

      {count !== undefined && (
        <div
          className={cn(
            "relative z-10 -ml-3 flex shrink-0 items-center justify-center rounded-full",
            "bg-crimson-400 label-xs text-black-950",
            size === "sm" && "size-8 ",
            size === "md" && "size-10.75 ",
          )}
        >
          {count}+
        </div>
      )}
    </div>
  );
}

export default FacePile;
