import { cn } from "@/utils/helper";
import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "borderOnly";
  size?: "normal" | "sm";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const variants = {
  primary: "bg-crimson-400 text-black-950",
  borderOnly: "border border-black-200 text-black-700",
};
const sizes = {
  normal: "py-3 px-6 label-lg",
  sm: "px-4 py-2 label-md",
};

function Button({
  children,
  className,
  variant = "primary",
  size = "normal",
  onClick,
}: IButtonProps) {
  return (
    <button
      className={cn(
        " rounded-3xl w-full",
        variants[variant],
        sizes[size],
        "cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
