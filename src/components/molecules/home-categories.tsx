import { categories } from "@/constants/constants";
import React from "react";
import CategoryCard from "../atoms/category-card";
import Image from "next/image";

function HomeCategories() {
  return (
    <div className="container flex gap-10">
      {categories.map((category) => (
        <CategoryCard
          key={category.label}
          categoryName={category.label}
          categoryIcon={
            <Image src={category.icon} width={60} height={60} alt="category" />
          }
        />
      ))}
    </div>
  );
}

export default HomeCategories;
