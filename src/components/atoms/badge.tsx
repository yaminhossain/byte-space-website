import { cn } from "@/utils/helper";
import { ReactNode } from "react";

interface BadgeTypes {
  icon: ReactNode;
  text: string;
  className?: string;
  variant?: "gray-bg" | "white-bg" | "border-only";
}

function Badge({ icon, text, className, variant = "gray-bg" }: BadgeTypes) {
  return (
    <div
      className={cn(
        "rounded-3xl w-fit flex justify-center items-center",
        {
          "py-1.5 px-3 gap-1 bg-black-50 label-xs text-black-700 h-8":
            variant === "gray-bg",
          "px-4 py-3 gap-1 border border-black-200 label-md text-black-700 h-12":
            variant === "border-only",
          "px-6 py-2 gap-2 bg-white label-md text-black-950 h-10 ":
            variant === "white-bg",
        },
        className,
      )}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default Badge;
