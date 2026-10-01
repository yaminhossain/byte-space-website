import { cn } from "@/utils/helper";

type InputVariant = "pill" | "rounded";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  variant?: InputVariant;
}

function Input({ variant = "pill", className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "body-md h-13 w-full bg-white px-6 text-black-950 placeholder:text-black-400 focus:outline-none",
        {
          "rounded-full border border-black-200": variant === "pill",
          "rounded-xl border border-black-100": variant === "rounded",
        },
        className,
      )}
    />
  );
}

export default Input;
