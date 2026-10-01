import { dummyCourses } from "@/constants/dummyCourses";
import CourseCard from "../organisms/course-card";

interface CourseContainerProps {
  lowerLimit?: number;
  upperLimit?: number;
}

function CourseContainer({
  lowerLimit = 0,
  upperLimit = 6,
}: CourseContainerProps) {
  return (
    <section className="grid grid-cols-3 gap-10">
      {dummyCourses.slice(lowerLimit, upperLimit).map((course, index) => (
        <CourseCard
          key={index}
          authorName={course.authorName}
          heading={course.heading}
          imgAlt={course.imgAlt}
          rating={course.rating}
          imgSrc={course.imgSrc}
        />
      ))}
    </section>
  );
}

export default CourseContainer;
