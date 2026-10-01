import { cn } from "@/utils/helper";
import { ReactNode } from "react";

interface BadgeTypes {
  icon: ReactNode;
  text: string;
  className?: string;
}

function Badge({ icon, text, className }: BadgeTypes) {
  return (
    <div
      className={cn(
        "py-1.5 px-3 bg-black-50 rounded-3xl w-fit flex gap-1 label-xs text-black-700 ",
        className,
      )}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default Badge;
