import Image from "next/image";
import CourseCard from "./course-card";
import SmallHeroCard from "../molecules/small-hero-card";
import ProgressBar from "../atoms/progress-bar";
import ReviewSnippet from "./review-snippet";
import Checkmark from "../atoms/svg-icons/checkmark";

function ProductSummary() {
  return (
    <section className="py-30 w-full overflow-hidden">
      {/* ============================ Section 01 ================================ */}
      <section className="relative container">
        <div className="flex gap-15.75 items-center">
          {/* Writings */}
          <div className="flex flex-col gap-10">
            <h1 className="w-[577px] heading-md text-black-950">
              Your Path to Professional Growth Starts Here!
            </h1>

            <p className="w-[477px] body-lg text-black-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="w-[314px] flex justify-between">
              <div className="flex flex-col items-start">
                <p className="heading-sm text-electric-violet-800">12K</p>
                <p className="text-black-700 body-lg">Students</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="heading-sm text-electric-violet-800">70+</p>
                <p className="text-black-700 body-lg">Courses</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="heading-sm text-electric-violet-800">16</p>
                <p className="text-black-700 body-lg">Creators</p>
              </div>
            </div>
          </div>

          {/* Images and others*/}
          <div className="relative h-[552px] overflow-hidden">
            {/* Image */}
            <div className="relative -bottom-4 -right-3 w-[577px] h-[540px]">
              <Image
                src="/images/hero-section/hero-human-image.png"
                fill
                alt="hero"
                className="object-center object-cover"
              />
            </div>
            {/* Course Card */}
            <div className="absolute top-0 left-0 -z-5">
              <CourseCard
                authorName="purepearl studio"
                heading="Learn Figma from Basic"
                imgSrc="/images/course-card/course-card-imag-1.jpg"
                imgAlt="course-card-image"
                rating="4.5"
              />
            </div>

            {/* small card */}
            <SmallHeroCard
              titleSmall="Learning Progress"
              className="w-[232px] absolute top-[250px] right-0 z-20"
            >
              <p className="heading-md text-[48px]">55%</p>
              <ProgressBar progress={55} />
            </SmallHeroCard>

            {/* decoration */}
            <div className="absolute top-[100px] -right-[40px] z-30">
              <div className="size-[215px] relative">
                <Image
                  src={"/images/product-summary/crimson-curly-decoration.png"}
                  fill
                  alt="crimson-curly-decoration"
                  className="object-center object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------------- decoration ---------------- */}
        {/* ellipse-11 */}
        <div className="absolute bottom-0 right-[344px] size-[1137px] gradient-lime rounded-full -z-30" />
        {/* ellipse-10 */}
        <div className="absolute bottom-0 left-[690px] size-[1137px] gradient-blue-subtle rounded-full -z-30" />
      </section>

      {/* ============================ Section 02 ================================ */}
      <section className="relative container mt-[72px] flex gap-[79px] items-center">
        <div className="w-[541px] relative h-[596px] overflow-hidden">
          {/* image */}
          <div className="relative w-[435px] h-[596px] -bottom-18">
            <Image
              src="/images/hero-section/human-female-image.png"
              fill
              alt="hero"
              className="object-center object-cover"
            />
          </div>

          {/* small card -1 */}
          <SmallHeroCard className="w-[232px] bg-electric-violet-800 text-white absolute top-[44px] -z-10">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="label-sm text-white">Total Revenue</h1>
                <p className="text-xs">July 1-28</p>
              </div>
              <p className="heading-sm text-xl">$120.29</p>
              <ProgressBar progress={50} className="bg-white" />
            </div>
          </SmallHeroCard>

          {/* small card -2 */}
          <SmallHeroCard className="w-[134px] bg-electric-violet-800 text-white absolute top-[194px] -z-10">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="label-sm text-white">Year to date</h1>
                <p className="text-xs">2023</p>
              </div>
              <p className="heading-sm text-xl">$1,200.38</p>
              <div className="bg-crimson-500 text-black-950 w-fit rounded-3xl px-1 text-xs">
                +12$
              </div>
            </div>
          </SmallHeroCard>

          {/* Review Snippet */}
          <div className="absolute bottom-[60px] right-0">
            <ReviewSnippet />
          </div>

          <div className="absolute top-[170px] right-[60px] z-15">
            <div className="relative size-[215px]">
              <Image
                src={
                  "/images/product-summary/crimson-curly-decoration-reversed.png"
                }
                fill
                alt="decoration"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="w-[395px] heading-md text-black-950">
            Create & Manage Courses Easily.
          </h1>
          <div className="w-[574px]">
            <span className="body-lg text-black-950 font-semibold">
              ByteSpace
            </span>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Checkmark />
              <p>Share Your Expertise</p>
            </div>
            <div className="flex gap-2">
              <Checkmark />
              <p>Monetize Your Passion</p>
            </div>
            <div className="flex gap-2">
              <Checkmark />
              <p>Flexibility and Autonomy</p>
            </div>
            <div className="flex gap-2">
              <Checkmark />
              <p>Build a Community</p>
            </div>
          </div>
        </div>

        {/* ------------------ decoration ------------------ */}
        {/* ellipse-9 */}
        <div className="absolute bottom-5 right-[750px] size-[1137px] gradient-blue rounded-full -z-30" />
        {/* ellipes-8 */}
        <div className="absolute bottom-0 left-[601px] size-[1137px] gradient-blue-strong rounded-full -z-30" />
        {/* ellipes-12 */}
        <div className="absolute -bottom-[278px] right-[994px] size-[672px] gradient-lime-strong rounded-full -z-30" />
      </section>
    </section>
  );
}

export default ProductSummary;
