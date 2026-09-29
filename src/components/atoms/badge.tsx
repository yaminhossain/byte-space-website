import { ReactNode } from "react";

interface BadgeTypes {
  icon: ReactNode;
  text: string;
}

function Badge({ icon, text }: BadgeTypes) {
  return (
    <div className="py-1.5 px-3 bg-black-50 rounded-3xl w-fit flex gap-1 label-xs text-black-700 ">
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default Badge;
