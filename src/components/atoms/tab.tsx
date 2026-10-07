import { cn } from "@/utils/helper";
import { MouseEvent } from "react";

interface TabPropsTypes {
  children: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Tab({ children, className, onClick }: TabPropsTypes) {
  return (
    <button
      className={cn(
        "rounded-full bg-black-50 px-4 py-3 label-md text-black-700 hover:text-black-950 hover:bg-crimson-400 cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Tab;
