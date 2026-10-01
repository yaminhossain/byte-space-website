import Avatar from "../atoms/avatar";
interface TestimonialCardTypes {
  name: string;
  src: string;
  bio: string;
  testimonial: string;
}

function TestimonialCard({
  name,
  src,
  bio,
  testimonial,
}: TestimonialCardTypes) {
  return (
    <div className="bg-white rounded-3xl w-93.5 p-6 flex flex-col gap-6 items-start">
      <Avatar src={src} alt="testimonial-avatar" size="lg"></Avatar>

      <div>
        <h1 className="heading-xs text-black-950">{name}</h1>
        <p className="body-lg text-electric-violet-800">{bio}</p>
      </div>

      <div>
        <q className="body-lg text-black-700">{testimonial}</q>
      </div>
    </div>
  );
}

export default TestimonialCard;
