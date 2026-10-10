import Link from "next/link";
import Tab from "./tab";
import { cn } from "@/utils/helper";
import CourseDetailsAboutTab from "../molecules/course-details-about-tab";
import CourseDetailsLessonsTab from "../molecules/course-details-lessons-tab";
import CourseDetailsReviewsTab from "../molecules/course-details-reviews-tab";

interface CourseTabsProps {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
}

const tabs: string[] = ["about", "lesson", "reviews"];

async function CourseTabs({ params, searchParams }: CourseTabsProps) {
  return (
    <>
      <div className="flex gap-4 mb-10">
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={`/courses/${params.id}?tab=${tab}`}
            scroll={false}
          >
            <Tab
              className={cn(
                "capitalize",
                tab === searchParams.tab && "text-black-950 bg-crimson-400",
              )}
            >
              {tab}
            </Tab>
          </Link>
        ))}
      </div>

      <div className="max-w-[725px] w-full min-h-100">
        {searchParams.tab === "about" && <CourseDetailsAboutTab />}
        {searchParams.tab === "lesson" && <CourseDetailsLessonsTab />}
        {searchParams.tab === "reviews" && (
          <CourseDetailsReviewsTab searchParams={searchParams} />
        )}
      </div>
    </>
  );
}

export default CourseTabs;
