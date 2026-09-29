import { cn } from "@/utils/helper";

type ProgressBarProps = {
  progress: number;
  className?: string;
};

function ProgressBar({ progress, className }: ProgressBarProps) {
  const value = Math.min(100, Math.max(0, progress));

  return (
    <div className={cn("h-2 w-full rounded-2xl", className)}>
      <div
        className="h-full rounded-2xl bg-crimson-400"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
