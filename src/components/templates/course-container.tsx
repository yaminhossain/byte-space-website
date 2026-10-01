import { dummyCourses } from "@/constants/dummyCourses";
import CourseCard from "../organisms/course-card";

function CourseContainer() {
  return (
    <section className="grid grid-cols-3 gap-10">
      {dummyCourses.slice(0, 6).map((course, index) => (
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
