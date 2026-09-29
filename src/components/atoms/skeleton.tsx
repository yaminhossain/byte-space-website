import { cn } from "@/utils/helper";
interface SkeletonProps {
  className: string;
}

function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse bg-gray-200", className)}></div>;
}

export default Skeleton;
