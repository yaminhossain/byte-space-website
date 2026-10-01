"use client";
import Image from "next/image";
import Button from "../atoms/button";
import { useRouter } from "next/navigation";

function HomeBottomBannerSection() {
  const router = useRouter();
  return (
    <section className="relative bg-electric-violet-800 grid-background py-21 overflow-hidden">
      <div className="relative w-[964px] mx-auto">
        <h1 className="w-[710px] mx-auto text-center heading-md text-black-50">
          Unlock Your Potential as a Creator with ByteSpace
        </h1>
        <p className="body-lg text-black-50 text-center py-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <div className="flex items-center justify-center ">
          <Button
            className="w-[172px]"
            onClick={() => router.push("/creators")}
          >
            Join as Creator
          </Button>
        </div>

        {/* ===================== Decorations ================================= */}

        {/* white curl */}
        <div className="absolute -top-20 -left-15">
          <div className="relative size-[175px]">
            <Image
              src={"/images/join-as-creator/white-curl.png"}
              fill
              alt="decoration"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* crimson triangle */}
        <div className="absolute -top-20 -right-15">
          <div className="relative size-[188px]">
            <Image
              src={"/images/join-as-creator/crimson-triangle.png"}
              fill
              alt="decoration"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* bottom circle */}
        <div className="absolute top-[136px] -left-50">
          <div className="relative size-[343px]">
            <Image
              src={"/images/join-as-creator/crimson-circle.png"}
              fill
              alt="decoration"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* crimson-curl */}
        <div className="absolute top-[139px] -right-57">
          <div className="relative size-[330px]">
            <Image
              src={"/images/join-as-creator/crimson-curl-2.png"}
              fill
              alt="decoration"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>

      {/* crimson curl 1 */}
      <div className="absolute -top-[21px] left-0">
        <div className="relative size-[267px]">
          <Image
            src={"/images/join-as-creator/crimson-curl-1.png"}
            fill
            alt="decoration"
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* right cylinder */}
      <div className="absolute top-[21px] -right-20">
        <div className="relative size-[371px]">
          <Image
            src={"/images/join-as-creator/white-cylinder.png"}
            fill
            alt="decoration"
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* triangle */}
      <div className="absolute top-[225px] -left-7">
        <div className="relative size-[188px]">
          <Image
            src={"/images/join-as-creator/white-triangle.png"}
            fill
            alt="decoration"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeBottomBannerSection;
