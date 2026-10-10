import ProgressBar from "../atoms/progress-bar";
import VideoCameraIcon from "../atoms/svg-icons/video-camera-icon";

function CourseDetailsLessonsTab() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="heading-xs text-black-950">Explore the Modules</h1>
      <p className="body-md text-black-700">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>

      <h1 className="heading-xs text-black-950">Lesson List</h1>
      <SingleLesson
        heading="Module 1: Introduction to Digital Assets"
        detail="Lay the groundwork with lessons like 'Understanding Digital
          Elements' and 'Navigating Design Software Tools.' Dive
          into the essentials of digital asset creation."
      />
      <SingleLesson
        heading="Module 2: Design Principles for Impact"
        detail="Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
      />
      <SingleLesson
        heading="Module 3: User-Centric Design Strategies"
        detail="Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
      />
      <SingleLesson
        heading="Module 4: User-Centric Design Strategies"
        detail="Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
      />
      <SingleLesson
        heading="Module 5: User-Centric Design Strategies"
        detail="Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
      />
      <SingleLesson
        heading="Module 6: User-Centric Design Strategies"
        detail="Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
      />
      <SingleLesson
        heading="Module 7: User-Centric Design Strategies"
        detail="Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
      />

      <h1 className="heading-xs text-black-950">Lesson Content</h1>
      <p className="body-md text-black-700">
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </p>

      <div className="border border-black-200 rounded-2xl p-4">
        <p className="label-sm text-black-950">Learning Progress</p>
        <p className="heading-sm my-2">55%</p>
        <ProgressBar progress={55} className="bg-black-100"/>
      </div>
    </div>
  );
}

export default CourseDetailsLessonsTab;

interface SingleLessonProps {
  heading: string;
  detail: string;
}

const SingleLesson = ({ heading, detail }: SingleLessonProps) => {
  return (
    <div className=" flex gap-3.25">
      {/* Icon */}
      <div className="py-6.5 px-5.25 bg-crimson-400 rounded-3xl w-18">
        <VideoCameraIcon width="30" height="20" fill="#242528" />
      </div>

      {/* Details */}
      <div>
        <h3 className="label-md text-black-950">{heading}</h3>
        <p className="body-md text-black-700 mt-1">{detail}</p>
      </div>
    </div>
  );
};
