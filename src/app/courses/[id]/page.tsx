import Avatar from "@/components/atoms/avatar";
import Badge from "@/components/atoms/badge";
import Button from "@/components/atoms/button";
import CourseTabs from "@/components/atoms/course-tabs";
import CourseVideoPlayer from "@/components/atoms/course-video-player";
import CertificateIcon from "@/components/atoms/svg-icons/certificate-icon";
import DirectoryIcon from "@/components/atoms/svg-icons/directory-icon";
import PeopleIcon from "@/components/atoms/svg-icons/people-icon";
import PrivateConsultation from "@/components/atoms/svg-icons/private-consultation";
import ShareIcon from "@/components/atoms/svg-icons/share-icon";
import SignalCellularAlt from "@/components/atoms/svg-icons/signal-cellular-alt";
import VideoCameraIcon from "@/components/atoms/svg-icons/video-camera-icon";
import Image from "next/image";
import Link from "next/link";

interface CoursePagePropsType {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function CoursePage({ params, searchParams }: CoursePagePropsType) {
  const resolvedParams = await params;
  const resolvedSearchParams =
    Object.keys(await searchParams).length !== 0
      ? await searchParams
      : { tab: "about" };

  return (
    <section>
      {/* Section 1: Blur grid background */}
      <section className="bg-electric-violet-800 grid-background h-[837px]">
        <div className="container flex justify-between items-baseline pt-13">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="heading-sm text-black-50">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <h2 className="heading-xs text-black-50 mt-2">
                Unlock the Power of Digital Creation with Expert Guidance
              </h2>
            </div>

            <p className="label-lg text-black-50">
              by <span className="text-crimson-400">purepearl studio</span>
            </p>

            <div className="flex gap-4">
              <Badge
                variant="white-bg"
                text="Intermediate"
                icon={<SignalCellularAlt fill="#003BE2" />}
              />

              <Badge
                variant="white-bg"
                text="4.8 (172 reviews)"
                icon={
                  <Image
                    src={"/icons/blue-star.png"}
                    width={15}
                    height={15}
                    alt="icon"
                  />
                }
              />

              <Badge
                variant="white-bg"
                text="199 Students"
                icon={<PeopleIcon />}
              />
            </div>
          </div>
          <Button className="flex gap-2 w-30.5">
            <ShareIcon /> <span>Share</span>
          </Button>
        </div>
        <div className="container flex gap-2 justify-between mt-[59px]">
          <CourseVideoPlayer />
          {/* Side details section */}
          <aside className="relative z-30 p-10 bg-white border border-black-200 rounded-3xl space-y-6">
            <h1 className="heading-xs text-black-950">
              112 Lessons (24 hours)
            </h1>

            <div>
              <table className="border-separate border-spacing-y-3">
                <tbody>
                  <tr>
                    <td className="align-top label-md text-black-950">01</td>
                    <td className="w-48 ps-2 align-top label-md text-black-950">
                      Introduction to Digital Assets
                    </td>
                    <td className="align-middle body-md text-electric-violet-800">
                      12 mins
                    </td>
                  </tr>

                  <tr>
                    <td className="align-top label-md text-black-950">02</td>
                    <td className="w-48 ps-2 align-top label-md text-black-950">
                      Design Principles for Impacts
                    </td>
                    <td className="align-middle body-md text-electric-violet-800">
                      21 mins
                    </td>
                  </tr>

                  <tr>
                    <td className="align-top label-md text-black-950">03</td>
                    <td className="w-48 ps-2 align-top label-md text-black-950">
                      Advanced Techniques in Digital Creation
                    </td>
                    <td className="align-middle body-md text-electric-violet-800">
                      16 mins
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="body-md text-black-700">99 more videos</p>
            </div>

            <p className="body-md text-black-700">
              Ready to Dive In? Enroll Now and Start Building Your Digital
              Future!
            </p>

            <p className="heading-sm text-electric-violet-800">
              $25<span className="body-md text-black-700">/lifetime</span>
            </p>

            <Button>Enroll Now</Button>

            <h1 className="heading-xs text-black-950">This course include</h1>

            <div className="space-y-3">
              <div className="flex gap-2.5 items-center text-black-700 body-md">
                <DirectoryIcon />
                <p>Learning Resources</p>
              </div>

              <div className="flex gap-2.5 items-center text-black-700 body-md">
                <VideoCameraIcon />
                <p>Quality Lesson Videos</p>
              </div>

              <div className="flex gap-2.5 items-center text-black-700 body-md">
                <CertificateIcon />
                <p>Certificate of Completion</p>
              </div>
              <div className="flex gap-2.5 items-center text-black-700 body-md">
                <PrivateConsultation />
                <p>Private Consultation</p>
              </div>
            </div>

            <hr className="text-black-200" />

            <div className="flex gap-3">
              <Avatar
                size="md"
                src="/images/avatars/avatar2.png"
                alt="instructor-image"
              />
              <div>
                <p className="label-lg text-black-950">PurePearl Studio</p>
                <p className="body-md text-black-700">Professional Creator</p>
              </div>
            </div>

            <p className="body-md text-black-700">
              Ready to Dive In? Enroll Now and Start Building Your Digital
              Future!
            </p>

            <Link href={"#"}>
              <Button variant="borderOnly" size="sm" className="w-[142px]">
                See Full Profile
              </Button>
            </Link>
          </aside>
        </div>
      </section>

      {/* Section 2: Course details */}
      <section className="container py-[62.5px]">
        <CourseTabs
          params={resolvedParams}
          searchParams={resolvedSearchParams}
        />
      </section>
    </section>
  );
}

export default CoursePage;
