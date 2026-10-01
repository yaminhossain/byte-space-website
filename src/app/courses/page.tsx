import Badge from "@/components/atoms/badge";
import Button from "@/components/atoms/button";
import CategoryCard from "@/components/atoms/category-card";
import CoursesTabs from "@/components/atoms/courses-tabs";
import SearchField from "@/components/atoms/search-field";
import ItemsFilters from "@/components/molecules/items-filters";
import Pagination from "@/components/molecules/pagination";
import CourseContainer from "@/components/templates/course-container";
import { categories } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Courses",
};

function CoursesPage() {
  return (
    <section>
      <div className="h-60 w-full bg-electric-violet-800 grid-background pt-11 pb-17.25">
        <h1 className="mb-8 heading-sm text-black-50 text-center">
          Find Your Next Course
        </h1>
        <div className="flex justify-center items-center gap-4">
          <SearchField placeholder="Search" />
          <Button className="w-[147px] flex gap-3.5 justify-center items-center">
            Courses
            <span>
              <Image
                src={"/icons/courses/drop-down.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </span>
          </Button>
        </div>
      </div>

      <div className="mt-[72px] container flex justify-between items-center">
        <ItemsFilters />
      </div>

      <div className="container mt-8">
        <CoursesTabs />
      </div>

      <div className="mt-19.25 container">
        <CourseContainer lowerLimit={0} upperLimit={18} />
      </div>

      <div className="flex justify-center items-center py-18">
        <Pagination currentPage={1} totalPages={5} />
      </div>
    </section>
  );
}

export default CoursesPage;
