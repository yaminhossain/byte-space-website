import Badge from "@/components/atoms/badge";
import Button from "@/components/atoms/button";
import CourseVideoPlayer from "@/components/atoms/course-video-player";
import PeopleIcon from "@/components/atoms/svg-icons/people-icon";
import ShareIcon from "@/components/atoms/svg-icons/share-icon";
import SignalCellularAlt from "@/components/atoms/svg-icons/signal-cellular-alt";
import Image from "next/image";
import styles from "./style.module.css";

function CoursePage() {
  return (
    <section>
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
        <div className="container mt-[59px]">
          <CourseVideoPlayer />
        </div>
      </section>
    </section>
  );
}

export default CoursePage;
