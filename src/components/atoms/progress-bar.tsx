import { cn } from "@/utils/helper";
import React from "react";

function ProgressBar({
  progress,
  className,
}: {
  progress: string;
  className?: string;
}) {
  return (
    <div className={cn("h-2 rounded-2xl w-full", className)}>
      <div
        className={cn(`bg-crimson-400 rounded-2xl h-full w-[${progress}]`)}
      />
    </div>
  );
}

export default ProgressBar;
