import Image from 'next/image'
import React from 'react'
import Checkmark from '../atoms/svg-icons/checkmark'

function CourseDetailsAboutTab() {
  return (
    <div className="max-w-[725px] w-full ">
        <h1 className="heading-xs text-black-950 mb-6">Description</h1>
        <div className="flex flex-col gap-4 body-md text-black-700">
          <p>
            Embark on an enlightening exploration into the world of digital
            creation with our comprehensive course, &quot;Build Digital Assets:
            A Comprehensive Guide.&quot; This transformative learning experience
            invites you to delve deep into the intricacies of crafting impactful
            digital content. From laying the groundwork with foundational
            concepts to mastering advanced techniques, this guide is
            meticulously curated to empower you with the skills essential for
            navigating the dynamic landscape of digital asset creation.
          </p>

          <p>
            In the initial modules, you&apos;ll establish a solid foundation by
            immersing yourself in the foundational concepts that form the
            backbone of digital asset creation. Understand the fundamental
            elements that constitute compelling digital content and gain
            proficiency in leveraging these elements to communicate effectively
            in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher
            levels of expertise, delving into the nuances of design principles
            that drive impactful creations. Uncover the secrets behind effective
            visual communication, exploring color theory, typography, and layout
            strategies that elevate your digital assets to new heights. Engage
            in hands-on exercises that reinforce your understanding, allowing
            you to apply these principles in practical scenarios.
          </p>
        </div>

        <h1 className="heading-xs text-black-950 my-6">Sneak Peak</h1>

        <div className="flex gap-[19px]">
          {/* image-1 */}
          <div className="w-[167px] h-[125px] relative">
            <Image
              fill
              src={"/images/course/course-sneak-peak-1.webp"}
              alt="sneak peak image"
              className="object-contain object-cover rounded-2xl"
            />
          </div>

          {/* image-2 */}
          <div className="w-[167px] h-[125px] relative">
            <Image
              fill
              src={"/images/course/course-sneak-peak-2.webp"}
              alt="sneak peak image"
              className="object-contain object-cover rounded-2xl"
            />
          </div>

          {/* image-3 */}
          <div className="w-[167px] h-[125px] relative">
            <Image
              fill
              src={"/images/course/course-sneak-peak-3.webp"}
              alt="sneak peak image"
              className="object-contain object-cover rounded-2xl"
            />
          </div>

          {/* image-4 */}
          <div className="w-[167px] h-[125px] relative">
            <Image
              fill
              src={"/images/course/course-sneak-peak-4.webp"}
              alt="sneak peak image"
              className="object-contain object-cover rounded-2xl"
            />
          </div>
        </div>

        <h1 className="heading-xs text-black-950 my-6">Key Points</h1>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">Foundational Concepts</p>
          </div>
          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">Design Principles Mastery</p>
          </div>
          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">
              Advanced Techniques in Digital Creation
            </p>
          </div>

          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">
              Project Showcase and Critique
            </p>
          </div>

          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">
              Optimizing for Various Platforms
            </p>
          </div>

          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">
              Digital Asset Management Best Practices
            </p>
          </div>

          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">Monetization Strategies</p>
          </div>

          <div className="flex gap-2.5">
            <Checkmark />
            <p className="body-md text-black-700">
              Capstone Project: Building Your Portfolio
            </p>
          </div>
        </div>
      </div>
  )
}

export default CourseDetailsAboutTab
