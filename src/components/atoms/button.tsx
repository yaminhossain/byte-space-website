import { cn } from "@/utils/helper";
import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const variants = {
  primary: "py-3 px-6 bg-crimson-400 rounded-3xl w-full label-lg",
};

function Button({
  children,
  className,
  variant = "primary",
  onClick,
}: IButtonProps) {
  return (
    <button
      className={cn(variants[variant], "cursor-pointer", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
