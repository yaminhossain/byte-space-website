import { cn } from "@/utils/helper";
import type { ComponentPropsWithoutRef } from "react";

type TextVariant =
  | "headingL"
  | "headingM"
  | "headingS"
  | "headingXS"
  | "bodyL"
  | "bodyM"
  | "bodyS"
  | "bodyXS"
  | "labelL"
  | "labelM"
  | "labelS"
  | "labelXS";

interface TextProps extends ComponentPropsWithoutRef<"p"> {
  label: TextVariant;
}

const textVariants: Record<TextVariant, string> = {
  headingL: "font-poppins text-[72px] leading-[120%] font-semibold",
  headingM: "font-poppins text-[44px] leading-[120%] font-semibold",
  headingS: "font-poppins text-[36px] leading-[120%] font-semibold",
  headingXS: "font-poppins text-[20px] leading-[120%] font-semibold",

  bodyL: "font-satoshi text-[18px] leading-[160%] font-normal",
  bodyM: "font-satoshi text-[16px] leading-[160%] font-normal",
  bodyS: "font-satoshi text-[14px] leading-[160%] font-normal",
  bodyXS: "font-satoshi text-[12px] leading-[160%] font-normal",

  labelL: "font-satoshi text-[18px] leading-[120%] font-medium",
  labelM: "font-satoshi text-[16px] leading-[120%] font-medium",
  labelS: "font-satoshi text-[14px] leading-[120%] font-medium",
  labelXS: "font-satoshi text-[12px] leading-[120%] font-medium",
};

export function Text({ label, className, children, ...props }: TextProps) {
  return (
    <p className={cn(textVariants[label], className)} {...props}>
      {children}
    </p>
  );
}
