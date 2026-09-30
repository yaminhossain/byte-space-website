"use client";

import HomeTabList from "../molecules/home-tab-list";
import CourseContainer from "./course-container";

function HomeFeaturedCourses() {
  return (
    <section className="container py-18">
      <h1 className="w-[588px] heading-md  mx-auto text-center">
        Discover Your Passion, Build Your Skills
      </h1>
      <p className="w-[917px] body-lg mx-auto text-center text-black-400 pt-4">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>
      <div className="mt-[42px] mb-[77px]">
        <HomeTabList />
      </div>
      <CourseContainer />
    </section>
  );
}

export default HomeFeaturedCourses;
