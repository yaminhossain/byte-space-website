"use client";

import CourseCard from "@/components/organisms/course-card";

function HomeClient() {
  return (
    <div>
      <div className="container bg-white">
        <CourseCard
          imgSrc="/images/course-card/course-card-imag-1.jpg"
          imgAlt="course-card-image"
          authorName="purepearl studio"
          heading="Learn Figma from Basic"
          rating={"4.5"}
        ></CourseCard>
      </div>
    </div>
  );
}

export default HomeClient;
