import Avatar from "../atoms/avatar";

function TestimonialCard() {
  return (
    <div className="bg-white rounded-3xl w-93.5 p-6 flex flex-col gap-6 items-start">
      <Avatar
        src="/images/course-card-avatar/course-card-avatar-1.png"
        alt="testimonial-avatar"
        size="lg"
      ></Avatar>

      <div>
        <h1 className="heading-xs text-black-950">Sarah M.</h1>
        <p className="body-lg text-electric-violet-800">Enthusiastic Learner</p>
      </div>

      <div>
        <q className="body-lg text-black-700">
          ByteSpace has transformed my approach to learning. The diverse range
          of courses and the quality of content provided by creators have
          exceeded my expectations. The platform truly fosters a sense of
          community and lifelong learning.
        </q>
      </div>
    </div>
  );
}

export default TestimonialCard;
