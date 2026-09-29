"use client";

import Input from "@/components/atoms/input";
import HomeCategories from "@/components/molecules/home-categories";
import TestimonialCard from "@/components/molecules/testimonial-card";
import CourseCard from "@/components/organisms/course-card";

function HomeClient() {
  return (
    <div>

    <Input variant="pill"/>

      <div className="container bg-white">
        <CourseCard
          imgSrc="/images/course-card/course-card-imag-1.jpg"
          imgAlt="course-card-image"
          authorName="purepearl studio"
          heading="Learn Figma from Basic"
          rating={"4.5"}
        ></CourseCard>
      </div>

      <div className="w-full bg-white">
        <HomeCategories />
      </div>
      <div>
        <TestimonialCard /> 
      </div>
    </div>
  );
}

export default HomeClient;
