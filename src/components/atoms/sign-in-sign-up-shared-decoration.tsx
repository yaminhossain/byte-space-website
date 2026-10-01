"use client";

import CourseCard from "../organisms/course-card";
import Image from "next/image";
import ReviewSnippet from "../organisms/review-snippet";
import { usePathname } from "next/navigation";

function SignInSignUpSharedDecoration() {
  const pathName = usePathname();

  return (
    <div className="container">
      {/* Text */}
      <div className="w-[475px] ">
        {pathName === "/sign-up" ? (
          <h1 className="heading-xs text-black-50">Sign up and come in</h1>
        ) : (
          <h1 className="heading-xs text-black-50">Sign in with ease</h1>
        )}
        {pathName === "/sign-up" ? (
          <p className="body-lg text-black-50 mt-4">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        ) : (
          <p className="body-lg text-black-50 mt-4">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>
        )}
      </div>

      {/* Decoration */}
      <div className="mt-[58px] w-[548px] h-[585px] relative ">
        <div className="absolute top-0 right-[39px] z-30">
          <CourseCard
            authorName="purepearl studio"
            heading="the Power of Big Data"
            rating="4.5"
            imgSrc="/images/course-card/course-card-image-3.jpg"
            imgAlt="decoration"
            iconColor="#D4FB20"
            facePileCountBg="bg-black-950"
          />
        </div>
        <div className="absolute top-[101px] left-[25px]">
          <CourseCard
            authorName="purepearl studio"
            heading="Build Digital Asset"
            rating="4.5"
            imgSrc="/images/course-card/course-card-image-2.jpg"
            imgAlt="decoration"
            iconColor="#D4FB20"
            facePileCountBg="bg-black-950"
          />
        </div>

        <ReviewSnippet
          className="absolute bottom-1 right-[20px] bg-crimson-400 z-20"
          facePileCountBg="bg-black-950"
          rating={
            <div className="flex gap-2 justify-center items-center">
              <span className="font-bold">4.5</span> <span>(240)</span>
              <div>
                <Image
                  src={"/icons/blue-star.png"}
                  width={16}
                  height={16}
                  alt="blue star"
                />
              </div>
            </div>
          }
        />

        <div className="absolute -bottom-5">
          <Image
            src={"/images/sign-in/crimson-triangle.png"}
            width={188}
            height={188}
            alt="decoration"
          />
        </div>

        <div className="absolute bottom-16 -right-2 z-40">
          <Image
            src={"/images/sign-in/curley-white.png"}
            width={188}
            height={188}
            alt="decoration"
          />
        </div>

        <div className="absolute -top-1 left-7 z-40">
          <Image
            src={"/images/sign-in/crimson-cirlce.svg"}
            width={188}
            height={188}
            alt="decoration"
          />
        </div>
      </div>
    </div>
  );
}

export default SignInSignUpSharedDecoration;
