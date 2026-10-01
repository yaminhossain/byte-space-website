import { ReactNode } from "react";

interface CategoryCardTypes {
  categoryIcon: ReactNode;
  categoryName: string;
}

function CategoryCard({ categoryIcon, categoryName }: CategoryCardTypes) {
  return (
    <div className="rounded-3xl size-41.75 border flex flex-col gap-2 border-black-200 items-center justify-center">
      {categoryIcon}
      <p className="label-xl text-black-950">{categoryName}</p>
    </div>
  );
}

export default CategoryCard;
