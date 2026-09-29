import { cn } from "@/utils/helper";
import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  src: string;
  size: AvatarSize;
  alt: string;
  className?: string;
}

const sizes: Record<AvatarSize, string> = {
  sm: "size-8",
  md: "size-[43px]",
  lg: "size-20",
};

function Avatar({ src, size, alt, className }: AvatarProps) {
  return (
    <div
      className={cn(
        `${sizes[size]} relative rounded-full overflow-hidden`,
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-center object-cover" />
    </div>
  );
}

export default Avatar;
