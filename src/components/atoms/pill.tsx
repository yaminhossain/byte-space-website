import { cn } from "@/utils/helper";

interface PillTypes {
  children: string;
  className?: string;
}

function Pill({ children, className }: PillTypes) {
  return (
    <div
      className={cn(
        "py-1.5 px-3 bg-[#F6F6F699] backdrop-blur-sm w-fit label-xs text-black-700 rounded-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Pill;
