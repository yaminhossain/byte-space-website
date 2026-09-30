import TestimonialCard from "./testimonial-card";

function HomeDiscoverCommunity() {
  return (
    <section className=" overflow-hidden">
      <div className="relative container mt-[74px] mb-[57px] flex flex-col gap-[72px]">
        {/* heading section */}
        <div className="flex justify-between items-end">
          <h1 className="w-[577px] heading-md">
            Discover What Our Community Is Saying
          </h1>
          <p className="w-[580px] body-lg text-black-700">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        {/* cards section*/}
        <div className="grid grid-cols-3 gap-[41px]">
          <TestimonialCard
            name="Sarah M."
            bio="Enthusiastic Learner"
            src="/images/course-card-avatar/course-card-avatar-3.png"
            testimonial="ByteSpace has transformed my approach to learning. The diverse range
          of courses and the quality of content provided by creators have
          exceeded my expectations. The platform truly fosters a sense of
          community and lifelong learning."
          />
          <TestimonialCard
            name="James L."
            bio="Lifelong Learner"
            src="/images/avatars/avatar8.png"
            testimonial="I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
          />
          <TestimonialCard
            name="Alex B."
            bio="Inspired Creator"
            src="/images/avatars/avatar9.png"
            testimonial="As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
          />
        </div>
        {/* background gradient section */}
        <div className="absolute left-[277px] bottom-[192px] size-[672px] rounded-full gradient-lime-strong -z-5" />
        <div className="absolute top-[75px] right-[627px] size-[1137px] rounded-full gradient-blue-strong -z-5" />
        {/* gradient-lime */}
        <div className="absolute left-[724px] size-[724px] rounded-full gradient-lime-strong -z-5" />
      </div>
    </section>
  );
}

export default HomeDiscoverCommunity;
