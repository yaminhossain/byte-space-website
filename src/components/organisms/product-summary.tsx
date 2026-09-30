import Image from "next/image";
import CourseCard from "./course-card";
import SmallHeroCard from "../molecules/small-hero-card";
import ProgressBar from "../atoms/progress-bar";

function ProductSummary() {
  return (
    <section className="h-[1460px] w-full py-30 flex gap-[72px] flex-col items-center overflow-hidden">
      <div className="container border border-red-500 relative">
        <div className="flex gap-15.75 items-center">
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
                <p>Students</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="heading-sm text-electric-violet-800">70+</p>
                <p>Courses</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="heading-sm text-electric-violet-800">16</p>
                <p>Creators</p>
              </div>
            </div>
          </div>
          <div className="h-[554px] w-[621px] relative">
            <div className="absolute top-0 left-0">
              <CourseCard
                authorName="purepearl studio"
                heading="Learn Figma from Basic"
                imgSrc="/images/course-card/course-card-imag-1.jpg"
                imgAlt="course-card-image"
                rating="4.5"
              />
            </div>

            <div className="absolute bottom-0 left-14 z-11">
              <div className="relative w-[577px] h-[540px]">
                <Image
                  src="/images/hero-section/hero-human-image.png"
                  fill
                  alt="hero"
                  className="object-center object-cover"
                />
              </div>
            </div>

            <SmallHeroCard
              titleSmall="Learning Progress"
              className="w-[232px] absolute top-[265px] right-0 z-11"
            >
              <p className="heading-md text-[48px]">55%</p>
              <ProgressBar progress={55} />
            </SmallHeroCard>

            <div className="absolute top-[110px] -right-[40px] z-15">
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
          c
        </div>
        <div className="size-[1137px] border border-green-600 absolute bottom-0 -left-70 rounded-full gradient-lime -z-30" />
        <div className="size-[1137px] border border-amber-600 absolute bottom-0 -right-140 rounded-full gradient-blue-subtle -z-30" />
        <div className="size-[1137px] border border-indigo-600 absolute -bottom-150 -left-180 rounded-full gradient-blue -z-30" />
      </div>

      <div className="container h-[596px]  relative border border-amber-500"> 
        <div className="size-[1137px] border border-rose-600 absolute -right-100 top-10 rounded-full gradient-blue-strong -z-30" />
        <div className="size-[672px] border border-green-600 absolute -left-[287px] top-[202px] rounded-full gradient-lime-strong -z-30" />
      </div>
    </section>
  );
}

export default ProductSummary;
