import Image from "next/image";
import Button from "../atoms/button";
import SearchField from "../atoms/search-field";
import SmallHeroCard from "../molecules/small-hero-card";
import FacePile from "../atoms/face-pile";
import { avatars } from "@/constants/constants";
import ProgressBar from "../atoms/progress-bar";

function Hero() {
  return (
    <div className="h-226 w-full overflow-hidden bg-electric-violet-800 grid-background">
      <section className="container relative">
        <h1 className="max-w-[935px] pt-12.25 mx-auto heading-lg text-white text-center">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="body-lg text-black-100 text-center mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="flex gap-4 mt-15 items-center justify-center">
          <SearchField placeholder="Course, topic, creator" />
          <Button className="w-26 h-11.5">Search</Button>
        </div>

        {/* middle curl left decoration */}
        <div className="size-[385px] absolute top-[101px] -left-[180px]">
          <Image
            src={"/images/hero-section/hero-curl-crimson-decoration.png"}
            fill
            alt="hero-curl-crimson-decoration"
            className="object-center object-contain"
          />
        </div>

        {/* middle curl right decoration */}
        <div className="size-[370px] absolute top-[101px] -right-[200px]">
          <Image
            src={"/images/hero-section/hero-cilinder-crimson-decoration.png"}
            fill
            alt="hero-curl-crimson-decoration"
            className="object-center object-contain"
          />
        </div>

        <div className="relative mx-auto mt-[70px] size-[1149px] rounded-full bg-crimson-500">
          {/* image */}
          <div className="absolute left-[350px] -top-25 w-[580px] h-[543px] z-1">
            <Image
              src="/images/hero-section/hero-human-image.png"
              fill
              alt="hero"
              className="object-center object-cover"
            />
          </div>
          {/* background blue circle */}
          <div className="size-[500px] rounded-full absolute top-75 left-1/2 -translate-x-1/2 bg-electric-violet-800 " />

          <SmallHeroCard
            titleLarge="Happy Students"
            headSectionClassName="flex flex-col items-start"
            rating={
              <p className="body-xs">
                4.5 <span className="text-black-400">(240)</span>
              </p>
            }
            className="flex flex-col items-start w-64.5 gap-2 absolute top-[255px] left-[183px] z-3"
          >
            <FacePile images={avatars} count={"2K"} size="md" />
          </SmallHeroCard>

          <SmallHeroCard
            titleSmall="Learning Progress"
            className="w-[232px] absolute top-[69px] right-[220px] z-3"
          >
            <p className="heading-md text-[48px]">55%</p>
            <ProgressBar progress={55} />
          </SmallHeroCard>

          <SmallHeroCard
            titleLarge="UI/UX Design"
            subtitle="200 Courses • 1000+ Students"
            className="absolute top-[57px] left-[259px] z-3"
          />

          {/* bottom left decoration */}
          <div className="w-[343px] h-[343px] absolute top-[100px] -left-[127px]">
            <Image
              src={"/images/hero-section/hero-circle-white-decoration.png"}
              fill
              alt="hero-circle-white-decoration"
              className="object-center object-contain"
            />
          </div>

          {/* bottom right decoration */}
          <div className="size-[331px] absolute top-[90px] -right-[161px]">
            <Image
              src={"/images/hero-section/hero-right-curl-white-decoration.png"}
              fill
              alt="hero-right-curl-white-decoration"
              className="object-center object-contain"
            />
          </div>

          {/* top right decoration */}
          <div className="size-[188px] absolute -top-30 right-0">
            <Image
              src={"/images/hero-section/hero-triangle-white-decoration.png"}
              fill
              alt="hero-triangle-white-decoration"
              className="object-center object-contain"
            />
          </div>

          {/* top left decoration */}
          <div className="size-[188px] absolute -top-30 left-[38px]">
            <Image
              src={"/images/hero-section/hero-right-curl-white-decoration.png"}
              fill
              alt="hero-right-curl-white-decoration"
              className="object-center object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
