import Avatar from "@/components/atoms/avatar";
import Badge from "@/components/atoms/badge";
import Button from "@/components/atoms/button";
import Pill from "@/components/atoms/pill";
import ItemsFilters from "@/components/molecules/items-filters";
import CourseContainer from "@/components/templates/course-container";

function CreatorPage() {
  return (
    <section>
      <div className="bg-electric-violet-800 grid-background  pt-13 pb-20.5">
        <div className="container ">
          <div className="flex gap-6 items-center">
            <Avatar
              src="/images/avatars/avatar7.png"
              size="lg"
              alt="creator-image"
              className="rounded-3xl"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="heading-sm text-black-50">PurePearl Studio</h1>
                <Pill className="bg-crimson-400 h-7 flex items-center ">
                  Creator
                </Pill>
              </div>
              <p className="body-lg text-black-50">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <p className="body-lg text-black-50 my-10">
            Welcome to the creative world of [Creator&apos;s Name]. Here,
            you&apos;ll discover the passion, expertise, and inspiration that
            drive my creative journey. Let&apos;ss explore and learn together!
            ive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Badge
                icon={<span className="text-electric-violet-800">3</span>}
                text="Products"
              />
              <Badge
                icon={<span className="text-electric-violet-800">12</span>}
                text="Followers"
              />
            </div>
            <Button className="w-25" size="sm">
              Follow
            </Button>
          </div>
        </div>
      </div>
      <div className="container py-15.5 min-h-70">
        <ItemsFilters />
        <div className="mt-10">
          <CourseContainer lowerLimit={0} upperLimit={3}/>
        </div>
      </div>
    </section>
  );
}

export default CreatorPage;
